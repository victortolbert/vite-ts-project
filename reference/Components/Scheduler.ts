import _, { first } from "lodash";
import DataSource from "@ExemplarDataAccess/DataSource";
import {
    CompositeFilterDescriptor,
    DataResult,
} from "@progress/kendo-data-query";
import { ApiResponse } from "@ExemplarDataAccess/ApiResponse";

import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Button as KendoButton } from "@progress/kendo-vue-buttons";

export interface SchedulerDataItem {
    Description: string;
    End?: string | Date;
    Id: string;
    Start: string | Date;
    Title: string;
}

interface ParsedDataItem {
    columnIndex?: number;
    description: string;
    end: Date;
    endIndex?: number;
    item: SchedulerDataItem;
    maxConcurrentEvents: number;
    start: Date;
    startIndex?: number;
    title: string;
}

interface ICellData {
    cellClass: string | null;
    colspan: number;
    columnIndex?: number;
    content: string | null;
    endIndex?: number;
    item: SchedulerDataItem | null;
    parsedItem: ParsedDataItem | null;
    rowspan: number;
    startIndex?: number;
    title: string | null;
    style?: any;
}

@Component({
    template: "#scheduler-template",
    components: {
        KendoButton,
    }
})
export default class Scheduler extends Vue {

    static NextLowestColumnIndex(indices: (number | undefined)[]): number {
        let i = 0;
        while (true) {
            if (!indices.includes(i))
                return i;
            i++;
        }
    }

    _date: Date;
    _endTime?: Date;
    _dataItems: Array<ParsedDataItem> = [];
    _startTime?: Date;

    @Prop({ required: false, default: "" })
    accessToken: string;

    @Prop({ required: false, default: () => new Date() })
    date!: Date;

    @Prop({ required: false, default: 18 })
    endTime!: number;

    @Prop({ required: true })
    dataItems!: Array<SchedulerDataItem>;

    @Prop({ required: false, default: () => ({}) })
    dataParams!: any;

    @Prop({ required: false, default: "" })
    dataRoute!: string;

    @Prop({ required: false, default: 30 })
    interval!: number;

    @Prop({ required: false, default: true })
    isActive!: boolean;

    @Prop({ required: false })
    linkCallback?: (event: MouseEvent, item: SchedulerDataItem) => void;

    @Prop({ required: false, default: 7 })
    startTime!: number;

    allData?: { Model: Array<SchedulerDataItem> };
    cellData: Array<Array<ICellData | undefined>> = [];
    dataSource: DataSource;
    dayColumnIndices: Array<number> = [];
    dayColumns: Array<number> = [];
    dayIndexCounts: Array<Array<number>> = [];
    days = [new Date()];
    filter: CompositeFilterDescriptor | undefined = {
        filters: [],
        logic: "and",
    };
    intervalsPerHour = 1;
    key = 0;

    times: Array<Date>;

    timeSlots: Array<Date> = [];
    totalDayColumns = 1;
    viewType: "Day" | "Week" = "Day";

    constructor() {
        super();
        this._date = new Date();
        this.times = [...Array(24)].map((_: unknown, i: number) =>
            new Date(
                this._date.getFullYear(),
                this._date.getMonth(),
                this._date.getDate(),
                i));
    }

    mounted(): void {
        this._date = new Date(this.date);
        this.parseScheduleData();
        this.dataSource = new DataSource(
            this.dataRoute,
            "get",
            this.dataParams,
            undefined,
            this.accessToken);
    }

    dataReadHandler(response: ApiResponse): void {
        this.allData = this.dataSource!.data;
        const data = _.cloneDeep(this.allData);
        if (data) {
            this.$emit("datareadsuccess", data.Model);
        }
    }

    dataReadErrorHandler(error: ApiResponse | Error): void {
        console.warn("Scheduler data read error:", error)
    }

    getCellData(time: Date, timeIdx: number, colIdx: number) {
        let cellClass = this.viewType === "Day" ? "day" : "week";
        if (colIdx === this.dayColumnIndices.indexOf(this.dayColumnIndices[colIdx]))
            cellClass += " day-start";
        if (colIdx === this.dayColumnIndices.lastIndexOf(this.dayColumnIndices[colIdx]))
            cellClass += " day-end";

        let colspanArray = [...this.cellData[timeIdx]].map(cell => isNaN(cell?.colspan ?? NaN) ? 1 : cell!.colspan).slice(0, colIdx);
        colspanArray = [...colspanArray, ...[...Array(Math.max(colIdx - colspanArray.length, 0))].map(_ => 1)];
        const cell = this.cellData?.[timeIdx]?.[colIdx] ?? (colspanArray.reduce((a, b) => a + b, 0) >= this.totalDayColumns ?
            {
                cellClass: null,
                colspan: 0,
                content: null,
                item: null,
                parsedItem: null,
                rowspan: 0,
                title: null,
                style: (this.viewType === "Day" ? "width: 100%" : "width: 12.5%"),
            } : {
                cellClass: cellClass + (time.getMinutes() === 0 ? " hour-start" :
                    time.getMinutes() === 30 ? " half-hour-start" : ""),
                colspan: 1,
                content: "\u00a0",
                rowspan: 1,
            });
        return cell;
    }

    @Watch("date")
    onDateChange() {
        if (!this.days.some(date => date.getDate() === this.date.getDate() &&
            date.getMonth() === this.date.getMonth() &&
            date.getFullYear() === this.date.getFullYear())) {
            this._date = new Date(this.date);
            (this.viewType === "Week") && this.getData();
        }
    }

    @Watch("isActive")
    onDataRouteChange(): void {
        (this.viewType === "Week") && this.getData();
    }

    getData(): void {
        if (!this.dataRoute || !this.isActive)
            return;
        const params: any = this.dataParams ?? {};
        Object.assign(params,
            {
                collectionType: "Grid", // ?
                scheduleViewType: this.viewType,
                scheduleDate: this._date.toLocaleDateString(),
                pageSize: 250,
            });

        if (this.filter && (this.filter.filters || []).length) {
            params["filterQuery.logic"] = this.filter.logic;
            for (let i = 0; i < this.filter.filters.length; i++) {
                const filter = this.filter.filters[i];
                if ("field" in filter) {
                    params[`filterQuery.filters[${i}].field`] = filter.field;
                    params[`filterQuery.filters[${i}].value`] = filter.value;
                }
            }
        }
        try {
            this.dataSource!.request(
                { params },
                this.dataReadHandler,
                this.dataReadErrorHandler);
        } catch (err) {
            this.dataReadErrorHandler(err);
        }
    }

    generateDateFromTime(hour: number, minute = 0, date = this._date): Date {
        return new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            hour,
            minute);
    }

    parseCellDataRow(time: Date): void {
        const windowEnd = new Date(time);
        windowEnd.setMinutes(windowEnd.getMinutes() + this.interval);
        const items = this.getItems(time, windowEnd);
        let itemColumnIndices = items.map(i => i.columnIndex);

        if (this.viewType === "Day")
            this.dayColumns = [items.length > this.dayColumns[0] ? items.length : this.dayColumns[0]];
        else
            this.dayColumns[time.getDay()] = items.length > this.dayColumns[time.getDay()] ? items.length : this.dayColumns[time.getDay()];
        for (let i = 0; i < itemColumnIndices?.length || 0; i++) {
            items[i].columnIndex = itemColumnIndices[i] ?? Scheduler.NextLowestColumnIndex(itemColumnIndices);
            this.resortItems();
            this.shiftCells();
            itemColumnIndices = items.map(i => i.columnIndex);
            items[i].maxConcurrentEvents = items[i].maxConcurrentEvents <= items.length ? items.length : items[i].maxConcurrentEvents;
        }
        const cellDataArray: Array<ICellData> = [];
        for (let item of items) {
            const startIndex = this.getIntervalIndex(item.start);
            const endIndex = this.getIntervalIndex(item.end);
            cellDataArray[item.columnIndex!] = item.start >= time && item.start < windowEnd ?
                {
                    cellClass: "slot",
                    content: item.description,
                    colspan: 1,
                    columnIndex: item.columnIndex,
                    endIndex,
                    item: item.item,
                    parsedItem: item,
                    rowspan: this.getIntervalIndex(item.end) - this.getIntervalIndex(item.start),
                    startIndex,
                    title: item.title,
                } : {
                    cellClass: null,
                    colspan: 1,
                    columnIndex: item.columnIndex,
                    content: null,
                    item: item.item,
                    parsedItem: item,
                    rowspan: 0,
                    title: null,
                    style: (this.viewType === "Day" ? "width: 100%" : "width: 12.5%"),
                }
        }
        !cellDataArray.length && cellDataArray.push({
            cellClass: (this.viewType === "Day" ? "day" : "week") + (time.getMinutes() === 0 ? " hour-start" :
                time.getMinutes() === 30 ? " half-hour-start" : ""),
            colspan: 1,
            content: "\u00a0",
            item: null,
            parsedItem: null,
            rowspan: 1,
            title: null,
        })
        const timeIdx = (time.getHours() - this.startTime) * this.intervalsPerHour + time.getMinutes() / this.interval;
        this.dayIndexCounts[timeIdx].push(cellDataArray.length);
        this.cellData[timeIdx] = this.cellData[timeIdx] ?? [];
        this.cellData[timeIdx] = this.cellData[timeIdx].concat(cellDataArray);
    }

    resortItems() {
        let oldIndices: (number | undefined)[] = [];
        let newIndices = this._dataItems.map(i => i.columnIndex);
        do {
            for (let cell of this._dataItems) {
                const firstCellNeedingResorted = this.getFirstCellNeedingResorted(cell);
                if (firstCellNeedingResorted) {
                    cell.columnIndex = firstCellNeedingResorted.columnIndex;
                    const cellDate = new Date(cell.start.getFullYear(), cell.start.getMonth(), cell.start.getDate());
                    for (let otherCell of this._dataItems) {
                        const otherCellDate = otherCell.start ? new Date(otherCell.start.getFullYear(), otherCell.start.getMonth(), otherCell.start.getDate()) : undefined;
                        if (otherCellDate &&
                            otherCellDate > cellDate) {
                            if (otherCell.columnIndex !== undefined)
                                otherCell.columnIndex!++;
                        }
                    }
                }
            }
            oldIndices = newIndices;
            newIndices = this._dataItems.map(i => i.columnIndex);
        } while (oldIndices.some((i, idx) => oldIndices[idx] !== newIndices[idx]));
        this.totalDayColumns = this.dayColumns.reduce((a, b) => a + b);
        const dayColumnCumulativeSums = [...Array(this.dayColumns.length)].map((_, idx) => this.dayColumns.slice(0, idx + 1).reduce((a, b) => a + b));
        this.dayColumnIndices = [...Array(this.totalDayColumns)].map((_: unknown, idx: number) => dayColumnCumulativeSums.map(s => idx < s).indexOf(true));
        for (let timeIdx = 0; timeIdx < this.cellData.length; timeIdx++) {
            for (let colIdx = 0; colIdx < this.cellData[timeIdx].length; colIdx++) {
                const itemDay = this.cellData[timeIdx][colIdx]?.parsedItem?.start?.getDay();
                const expectedIndex = itemDay && this.dayColumnIndices.indexOf(itemDay);
                if (expectedIndex &&
                    this.cellData[timeIdx][colIdx] &&
                    this.cellData[timeIdx][colIdx]!.parsedItem !== null &&
                    this.cellData[timeIdx][colIdx]!.parsedItem!.start !== null &&
                    colIdx < expectedIndex) {
                    this.cellData[timeIdx] = [...this.cellData[timeIdx].slice(0, colIdx), ...Array(expectedIndex - colIdx).map(_ => ({
                        cellClass: null,
                        colspan: 1,
                        columnIndex: -1,
                        content: null,
                        item: null,
                        parsedItem: null,
                        rowspan: 1,
                        title: null,
                        style: (this.viewType === "Day" ? "width: 100%" : "width: 12.5%"),
                    })), ...this.cellData[timeIdx].slice(colIdx)];
                }
            }
        }
    }

    getFirstCellNeedingResorted(cell: ParsedDataItem) {
        const cellDate = cell.start && new Date(cell.start.getFullYear(), cell.start.getMonth(), cell.start.getDay());
        for (let otherCell of this._dataItems) {
            const otherCellDate = otherCell?.start && new Date(otherCell.start.getFullYear(), otherCell.start.getMonth(), otherCell.start.getDay());
            if (cellDate && otherCellDate &&
                otherCell.columnIndex !== undefined &&
                cell.columnIndex !== undefined &&
                otherCellDate > cellDate &&
                otherCell.columnIndex < cell.columnIndex) {
                return otherCell;
            }
        }
        return undefined;
    }

    getItems(windowStart: Date, windowEnd: Date): Array<ParsedDataItem> {
        return this._dataItems?.filter((i: ParsedDataItem) => {
            return (i.start >= windowStart && i.start < windowEnd) ||
                (i.end > windowStart && i.end <= windowEnd) ||
                (i.start < windowStart && i.end > windowEnd)
        }) ?? [];
    }

    getIntervalIndex(time: Date): number {
        return Math.floor((time.getTime() - this._startTime!.getTime()) / (this.interval * 60000))
    }

    onLinkClick(event: MouseEvent, item: SchedulerDataItem) {
        if (typeof this.linkCallback === "function") {
            this.linkCallback(event, item);
        }
    }

    onViewChange(viewType: "Day" | "Week") {
        this.viewType = viewType;
        this.setDays();
        this.$emit("viewchange", viewType);
        if (viewType === "Week") {
            const params = this.dataParams ?? {};
            Object.assign(params, { scheduleViewType: viewType, scheduleDate: this._date.toLocaleDateString() });
            this.dataParams = params;
            this.getData();
        }
    }

    @Watch("dataItems", { deep: true })
    parseScheduleData() {
        this.setDays();
        this.intervalsPerHour = Math.floor(60 / this.interval);
        this.timeSlots = [...Array((this.endTime - this.startTime) * this.intervalsPerHour)].map((_: unknown, i: number) => this.generateDateFromTime(
            (Math.floor(i / this.intervalsPerHour) + this.startTime),
            (i % this.intervalsPerHour) * this.interval,
            this._date));
        this.times = this.days.reduce((arr: Array<Date>, day: Date) => {
            const times = [...Array((this.endTime - this.startTime) * this.intervalsPerHour)]
                .map((_: unknown, i: number) => this.generateDateFromTime(
                    (Math.floor(i / this.intervalsPerHour) + this.startTime),
                    (i % this.intervalsPerHour) * this.interval,
                    day));
            return arr.concat(times);
        }, []);
        this._startTime = this.generateDateFromTime(this.startTime);
        this._endTime = this.generateDateFromTime(this.endTime);
        this._dataItems = this.dataItems.map(i => {
            let end: Date;
            if (i.End === undefined) {
                end = new Date(i.Start);
                end.setHours(end.getHours() + 1);
            } else {
                end = new Date(i.End);
            }
            return {
                description: i.Description,
                end,
                item: i,
                maxConcurrentEvents: 1,
                start: new Date(i.Start),
                title: i.Title,
            };
        }) ?? [];
        this.cellData = [];
        this.dayIndexCounts = this.timeSlots.map(() => []);
        this.dayColumns = this.viewType === "Day" ? [1] : [1, 1, 1, 1, 1, 1, 1];
        for (let time of this.times) {
            this.parseCellDataRow(time);
        }
        this.totalDayColumns = this.dayColumns.reduce((a, b) => a + b);
        this.splitColumns();
        this.key++;
    }

    setDays() {
        if (this.viewType === "Day") {
            this.days = [new Date(this._date)];
        }
        else if (this.viewType === "Week") {
            const days = [...Array(7)].map((_: unknown, i: number) => {
                const date = new Date(this._date);
                date.setDate(date.getDate() + i - date.getDay());
                return date;
            })
            this.days = days;
        }
    }

    shiftCells() {
        let shifted;
        do {
            shifted = false;
            for (let i = 0; i < this.cellData.length; i++) {
                for (let j = 0; j < this.cellData[i].length; j++) {
                    const cell = this.cellData[i][j];
                    if (!cell) {
                        for (let k = j + 1; k < this.cellData[i].length; k++) {
                            if (this.cellData[i][k]?.parsedItem?.start?.getDay() &&
                                this.cellData[i][k]!.parsedItem!.start.getDay() > this.dayColumnIndices[j])
                                break;
                            if (this.cellData[i][k]) {
                                this.cellData[i][j] = this.cellData[i][k];
                                this.cellData[i][k] = undefined;
                                this.cellData[i][j]!.style = this.cellData[i][j]!.style ?? "";
                                shifted = true;
                                break;
                            }
                        }
                    }
                }
            }
        } while (shifted);
    }

    splitColumns() {
        const dayColumnCumulativeSums = [...Array(this.dayColumns.length)].map((_, idx) => this.dayColumns.slice(0, idx + 1).reduce((a, b) => a + b));
        this.dayColumnIndices = [...Array(this.totalDayColumns)].map((_: unknown, idx: number) => dayColumnCumulativeSums.map(s => idx < s).indexOf(true));
        for (let i = 0; i < this.cellData.length; i++) {
            for (let j = 0; j < this.totalDayColumns; j++) {
                if (this.cellData[i][j]) {
                    if (this.viewType === "Week") {
                        const day = this.cellData[i][j]!.parsedItem?.start?.getDay();
                        if (day && this.dayColumnIndices[j] < day) {
                            this.cellData[i].splice(j, 0, {
                                cellClass: "week" + (this.cellData[i][j]!.parsedItem!.start.getMinutes() === 0 ? " hour-start" :
                                    this.cellData[i][j]!.parsedItem!.start.getMinutes() === 30 ? " half-hour-start" : ""),
                                colspan: 1,
                                content: "\u00a0",
                                item: null,
                                parsedItem: null,
                                rowspan: 1,
                                title: null,
                            });
                        }
                    }
                    if (j === this.dayColumnIndices.indexOf(this.dayColumnIndices[j]))
                        this.cellData[i][j]!.cellClass = (this.cellData[i][j]!.cellClass ?? "") + " day-start";
                    if (j === this.dayColumnIndices.lastIndexOf(this.dayColumnIndices[j]))
                        this.cellData[i][j]!.cellClass = (this.cellData[i][j]!.cellClass ?? "") + " day-end";
                    if (this.cellData[i][j]!.parsedItem) {
                        this.cellData[i][j]!.colspan = Math.floor(this.dayColumns[this.dayColumnIndices[j]] / this.cellData[i][j]!.parsedItem!.maxConcurrentEvents);
                        if (this.cellData[i][j]!.rowspan > 1 && this.cellData[i][j]!.colspan > 1) {
                            for (let k = i; k <= Math.min(i + this.cellData[i][j]!.rowspan - 1, this.cellData.length - 1); k++) {
                                for (let m = j; m <= Math.min(j + this.cellData[i][j]!.colspan - 1, this.cellData.length - 1); m++) {
                                    this.cellData[k][m] = this.cellData[k][m]?.item ? this.cellData[k][m] : {
                                        cellClass: null,
                                        colspan: 0,
                                        columnIndex: undefined,
                                        content: null,
                                        item: null,
                                        parsedItem: null,
                                        rowspan: 0,
                                        title: null,
                                        style: (this.viewType === "Day" ? "width: 100%" : "width: 12.5%"),
                                    };
                                }
                            }
                        }
                        if (this.viewType === "Week")
                            this.cellData[i][j]!.style = { width: `${12.5 * this.cellData[i][j]!.colspan / this.dayColumns[this.dayColumnIndices[j]]}%` }
                    }
                    else if (!this.cellData[i][j]) {
                        this.cellData[i][j]!.colspan = 1;
                    }
                }
            }
        }
    }
}
