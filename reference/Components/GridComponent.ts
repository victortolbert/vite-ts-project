import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { VNode } from "vue";

import {
    Grid as KendoGrid,
    GridExpandChangeEvent,
    GridFilterChangeEvent,
    GridHeaderSelectionChangeEvent,
    GridItemChangeEvent,
    GridPageChangeEvent,
    GridPagerSettings,
    GridSelectionChangeEvent,
    GridSortChangeEvent,
    GridToolbar,
} from "@progress/kendo-vue-grid";
import {
    CompositeFilterDescriptor,
    DataResult,
    SortDescriptor,
} from "@progress/kendo-data-query";
import { Button as KendoButton } from "@progress/kendo-vue-buttons";
import { Input as KendoInput } from "@progress/kendo-vue-inputs";
import _ from "lodash";
import GridModel, { GridColumn } from "@ExemplarViewModels/GridModel";
import GridSearchEvent from "@ExemplarInterfaces/GridSearchEvent";
import IGridDataSourceParams from "@ExemplarInterfaces/IGridDataSourceParams";
import IPager from "@ExemplarInterfaces/IPager"; 
import DataSource from "@ExemplarDataAccess/DataSource";
import { ApiResponse } from "@ExemplarDataAccess/ApiResponse";
import { ResponseType } from "@ExemplarEnums/ResponseType";
import { GlobalEvents, GlobalEventBus } from "@ExemplarCommon/eventBus";
import { error, param } from "jquery";
import { ToastrHelper } from "@ExemplarCommon/ToastrHelper";
import { GridValidator } from "./GridValidation";

@Component({
    components: {
        GridToolbar,
        KendoButton,
        KendoGrid,
        KendoInput,
    },
    template: "#grid-template",
})
export default class Grid extends Vue {
    
    private allData?: Array<any>;
    private _columns: Array<GridColumn>;
    private dataResult?: DataResult;

    static InternalColumnNames = ["editField", "editValues", "expanded", "showEdit", "showDelete", "showEmail", "isNew", "_selected", "$gridModel", "$gridProps", "$emitGridEvent"];
    static IsInternalColumn(name?: string): boolean {
        return !!name && this.InternalColumnNames.includes(name);
    }
    cell = "cell";
    dataItems?: Array<any> = [];
    dataCreateSource?: DataSource;
    dataDeleteSource?: DataSource;
    dataReadSource?: DataSource;
    dataUpdateSource?: DataSource;
    detail = "detail-template";
    editable: boolean | undefined;
    editField?: number;
    filter: CompositeFilterDescriptor | undefined = {
        filters: [],
        logic: "and",
    };
    hasEditables = false;
    height?: number;
    key = 0;
    loaded = false;
    pageable?: GridPagerSettings | boolean = true;
    pager?: IPager;
    pendingGet?: NodeJS.Timeout;
    scrollable?: string = "scrollable";
    search = "";
    searchField = "";
    sort: Array<SortDescriptor> | undefined = [];
    skip = 0;
    style: Partial<CSSStyleDeclaration> = {};
    take?: number = 25;
    total = 0;
    wrapFilters = false;

    @Prop(GridModel)
    model!: GridModel;

    static formatDate(date: Date, displayType?: string): string {
        switch (displayType) {
            case "date":
                return date.toLocaleDateString("en-US");
            case "time":
                return date.toLocaleTimeString("en-US",
                    {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true
                    });
            case "date-time":
            default:
                return date.toLocaleString("en-US");
        }
    }

    get columns(): Array<GridColumn> {
        if (!this.loaded)
            return [{ field: "Loading..." }];

        if (this._columns && (!this.dataItems || !this.dataItems.length))
            return this._columns;

        const columnNames: string[] = [];
        for (let item of (this.dataItems || [])) {
            if (typeof item === "object") {
                for (let key in item) {
                    !columnNames.includes(key) && !Grid.IsInternalColumn(key) && columnNames.push(key)
                }
            }
        }
        for (let column of this.model!.columns) {
            const key = typeof column === "string" ? column : column.field || column.key;
            key && key !== "Loading..." && !columnNames.includes(key) && columnNames.push(key);
        }
        const columns: Array<GridColumn> = columnNames
            .map(name => {
                const modelColumn = this.model!.columns.find(col => typeof col === "object" && (col.key === name || col.field === name));
                const column: GridColumn = { field: name }
                typeof modelColumn === "object" && Object.assign(column, modelColumn);
                if (!column.title)
                    column.title = column.field!.replace(/([a-z])([A-Z])/g, "$1 $2");
                return column;
            });
        this.model.allowSelecting && columns.unshift({
            editable: false,
            field: "_selected",
            filterable: false,
            headerSelectionValue: this.isEveryItemSelected,
            sortable: false,
            width: "50px",
        })
        this.hasEditables && columns.push({ cell: "editButtons", editable: false, filterable: false, orderIndex: columns.length + 1, width: 285 });
        this.SetButtonVisibility();
        columns.sort((a, b) => { return (a.orderIndex === undefined ? 0 : a.orderIndex) - (b.orderIndex === undefined ? 0 : b.orderIndex);});
        const firstVisibleIdx = columns.findIndex(item => !item.hidden && !Grid.IsInternalColumn(item.field));
        if (firstVisibleIdx > -1 &&
            this.dataItems?.length &&
            (this.model.linkUrl || this.model.linkCallback) &&
            !columns[firstVisibleIdx].cell) {
            columns[firstVisibleIdx].cell = (
                    h: (type: any, ...children: Array<any>) => VNode,
                    tdElement: VNode,
                    props: { dataItem: any, dataIndex: number },
                    listeners: any): VNode => {
                const callback = this.model.linkCallback;
                let link: VNode;
                let url = this.model.linkUrl;

                const icon = h('span', { attrs: { class: "k-icon k-i-hyperlink-open-sm" } });
                const linkChildren = [icon, props.dataItem[columns[firstVisibleIdx].field!]];
                if (url) {
                    for (let param of this.model.linkUrlParams || []) {
                        url = url.replace(`{${param}`, props.dataItem[param]);
                    }
                    link = h('a',
                        { attrs: { class: "link-primary", href: url } },
                        linkChildren);
                } else {
                    link = h('a', {
                        attrs: { class: "link-primary", href: "#" },
                        on: {
                            click: (event: MouseEvent) => {
                                callback!(event, props.dataItem, props.dataIndex);
                            }
                        }
                    }, linkChildren);
                }
                if (this.model.linkCanRenderCallback !== undefined && !this.model.linkCanRenderCallback(props.dataItem))
                    return h('td', props.dataIndex);
                else
                    return h('td', [link]);
            }
        }

        this.wrapFilters = columns.filter(col => !col.hidden).length > 7;
        this._columns = columns;
        return columns;
    }

    get isEveryItemSelected(): boolean {
        return !!this.dataItems?.length && !this.dataItems.some(item => !item._selected);
    }

    addHandler(): void {
        const dataItem = {};
        this.dataItems && this.dataItems.unshift(dataItem);
        this.editHandler({ dataItem }, true);
    }

    cancelHandler(props?: any): void {
        (this.dataItems || []).forEach((dataItem: any, idx: number) => {
            dataItem.editField = dataItem.isNew;
        });
        (props || { dataItem: {} }).dataItem.isNew && this.dataItems!.splice(props.dataIndex - 1, 1);
        if (props === undefined) {
            this.emitEventAndTryCallback("editCancel", null, null);
        }
        else {
            this.emitEventAndTryCallback("editCancel", props.dataItem, props.dataIndex);
        }        
        this.key++;
    }

    checkValidators(params: any) : Array<string> {
        let validationMessages: Array<string> = [];
        if (this.model.validators !== undefined) {
            //If this is a new field, we'll check to see if any columns were omitted that should have a field.
            if (params.isNew) {
                let editItemsArray = Object.keys(params.editValues);

                //lets only pull back the fields we can edit, see, and that were omitted from the grid
                let omittedFields = this.columns.filter(col => col.editable != false && !col.hidden && !editItemsArray.find((key: any) => col.field == key));

                omittedFields.forEach(async ofield => {
                    let validator = this.model.validators?.find((val: GridValidator) => val.field == ofield.field);
                    if (validator !== undefined) {
                        //can just send the blank text to the validator since it wasn't included on the input
                        let message = validator.validatorCallBack();
                        if (!message.isValid && message.validationMessage.length > 0)
                            validationMessages.push(message.validationMessage);
                    }
                });
            }
            // no validation messages on omitted fields, so proceed w/ check submitted fields
            if (validationMessages.length == 0) {
                for (var prop in params.editValues) {
                    let validator = this.model.validators?.find((val: GridValidator) => val.field == prop.toString());
                    if (validator !== undefined) {
                        let message = validator.validatorCallBack(params.editValues[prop], this.dataItems);
                        if (!message.isValid && message.validationMessage.length > 0)
                            validationMessages.push(message.validationMessage);
                    }
                }
            }
        }
        
        return validationMessages;
    }

    clearSearchHandler(event: MouseEvent): void {
        const oldSearch = this.search;
        this.search = "";
        this.searchField = "";
        oldSearch && this.getDataWithThrottling();
        const searchEvent: GridSearchEvent = {
            query: this.search,
            event,
            target: event.target
        };
        this.emitEventAndTryCallback("searchClear", searchEvent);
    }

    createHandler(props: any): void {
        const params = this.saveEdits(props.dataItem);
        let validationMessages = this.checkValidators(params);
        if (validationMessages.length > 0) {
            this.displayValidationMessage(validationMessages);
            return;
        }
        const routeParams = this.generateRouteParams(props.dataItem, this.model.dataCreateRouteParams);
        props.dataItem.isNew = false;
        try {
            this.dataCreateSource && this.dataCreateSource.request(
                { params, routeParams },
                this.dataCreateCompleteHandler,
                this.dataCreateErrorHandler)
        } catch (err) {
            this.dataCreateErrorHandler(err);
        }
        finally {
            this.cancelHandler(props);
            this.reloadAfterEdit();
        }        
    }

    dataCreateCompleteHandler(response: ApiResponse): void {
        this.cancelHandler();
        this.emitEventAndTryCallback("dataCreateSuccess", response);
        this.reloadAfterEdit();
    }

    dataCreateErrorHandler(error: ApiResponse | Error): void {
        const result = (error as ApiResponse).result;
        if (result === ResponseType.Unauthorized) {
            GlobalEventBus.$emit(GlobalEvents.Unauthorized);
        }
        this.emitEventAndTryCallback("dataCreateError", error);
    }

    dataDeleteCompleteHandler(response: ApiResponse):void {
        this.cancelHandler();
        this.emitEventAndTryCallback("dataDeleteSuccess", response);
        this.reloadAfterEdit();
    }

    dataDeleteErrorHandler(error: ApiResponse | Error): void {
        const result = (error as ApiResponse).result;
        if (result === ResponseType.Unauthorized) {
            GlobalEventBus.$emit(GlobalEvents.Unauthorized);
        }
        this.emitEventAndTryCallback("dataDeleteError", error);
    }
  

    dataReadHandler(response: ApiResponse): void {
        this.pager = this.model.allowPaging &&
            this.model.dataPagerKeys &&
            DataSource.getDataByKeys(response.model, this.model.dataPagerKeys);
        this.allData = this.dataReadSource!.data;
        this.updateData();
        this.emitEventAndTryCallback("dataReadSuccess", response);
    }

    dataReadErrorHandler(error: ApiResponse | Error): void {
        const result = (error as ApiResponse).result;
        if (result === ResponseType.NoRecords) {
            this.dataItems = [];
            this.total = 0;
            this.loaded = true;
        } else if (result === ResponseType.Unauthorized) {
            GlobalEventBus.$emit(GlobalEvents.Unauthorized);
        }
        this.emitEventAndTryCallback("dataReadError", error);
        this.loaded = true;
    }

    dataUpdateCompleteHandler(response: ApiResponse):void {
        this.cancelHandler();
        this.emitEventAndTryCallback("dataUpdateSuccess", response);
        this.reloadAfterEdit();
    }

    dataUpdateErrorHandler(error: ApiResponse | Error): void {
        const result = (error as ApiResponse).result;
        if (result === ResponseType.Unauthorized) {
            GlobalEventBus.$emit(GlobalEvents.Unauthorized);
        }
        this.emitEventAndTryCallback("dataUpdateError", error);
    }

    deleteHandler(props: any): void {
        const params = this.saveEdits((props || {}).dataItem);
        const routeParams = this.generateRouteParams((props || {}).dataItem, this.model.dataDeleteRouteParams);
        try {
            this.dataDeleteSource && this.dataDeleteSource.request(
                { params, routeParams },
                this.dataDeleteCompleteHandler,
                this.dataDeleteErrorHandler)
        } catch (err) {
            this.dataDeleteErrorHandler(err);
        }
    }

    displayValidationMessage(messages: Array<string>): void {
        messages.forEach(message => ToastrHelper.DisplayToastWarning(message, "Validation Error"));
    }

    editHandler(props: any, isNew?: boolean): void {
        (this.dataItems || []).forEach((dataItem: any) => {
            dataItem.editField = dataItem.isNew;
            dataItem.editValues = {};
        });
        props.dataItem.editField = true;
        props.dataItem.isNew = props.dataItem.isNew ?? isNew;
        this.emitEventAndTryCallback(
            isNew ? "addStart" : "editStart",
            props.dataItem,
            props.dataIndex);
        this.key++;
    }

    emitEventAndTryCallback(name: string, ...data: any[]): void {
        this.$emit(name.toLowerCase(), ...data);
        const callback: any = this.model[`${name}Callback`];
        if (typeof callback === "function") {
            callback(...data);
        }
    }

    expandChangeHandler(event: GridExpandChangeEvent): void {
        const isExpanded =
            event.dataItem.expanded === undefined
                ? event.dataItem.aggregates
                : event.dataItem.expanded;
        this.dataItems!.forEach((item, idx) => {
            if (item !== event.dataItem) {
                item.expanded = false;
            }
        })
        event.dataItem.expanded = !isExpanded;
        this.emitEventAndTryCallback("expandChange", event);
        this.key++;
    }

    filterChangeHandler(event: GridFilterChangeEvent): void {
        this.filter = event.filter;
        this.getDataWithThrottling();
        this.emitEventAndTryCallback("filterChange", event);
    }

    formatDateColumns(item: any): any {
        for (let key in item) {
            const fieldColumn = this.columns.find(column => column.field === key);
            if (fieldColumn?.type === "date" && fieldColumn?.dateDisplay) {
                item[key] = Grid.formatDate(new Date(item[key]), fieldColumn.dateDisplay);
            }
        }
        return item;
    }

    generateRouteParams(dataItem: any, routeParamKeys: string[] | undefined): any {
        let routeParams: any;
        if (routeParamKeys) {
            routeParams = {};
            for (let param of routeParamKeys) {
                routeParams[param] = (dataItem || {})[param];
            }
        }
        return routeParams;
    }

    getData(): void {
        if (!this.model.apiBase)
            return;

        const params: IGridDataSourceParams = {
            gridType: this.model!.gridType,
            collectionType: "Grid", 
        };

        if (this.take) {
            params.pageSize = this.take;
            params.pageNumber =  Math.floor(this.skip / this.take) + 1;
        }
        if (this.filter && (this.filter.filters || []).length) {
            params["filterQuery.logic"] = this.filter.logic;
            for (let i = 0; i < this.filter.filters.length; i++) {
                const filter = this.filter.filters[i];
                if ("field" in filter) {
                    const fieldColumn = this.columns.find(col => col.field === filter.field);
                    params[`filterQuery.filters[${i}].field`] = filter.field;
                    params[`filterQuery.filters[${i}].value`] = fieldColumn!.type === "date" ?
                        Grid.formatDate(new Date(filter.value), fieldColumn!.dateDisplay ?? "date")
                    :
                        filter.value;
                }
            }
        }
        else if (this.dataReadSource !== undefined
            && this.dataReadSource.params !== undefined
            && this.dataReadSource.params[`filterQuery.filters[0].field`] !== undefined) {
            for (let i = 0; i < Object.keys(this.dataReadSource.params).length; i++) {
                if (this.dataReadSource.params[`filterQuery.filters[${i}].field`] !== undefined) {
                    delete this.dataReadSource.params[`filterQuery.filters[${i}].field`];
                    delete this.dataReadSource.params[`filterQuery.filters[${i}].value`];
                }
                else {
                    delete this.dataReadSource.params[`filterQuery.logic`];
                    break;
                }
            }
        }
        if (this.search) {
            params.searchQuery = this.search;
        }
        else if (this.dataReadSource !== undefined
            && this.dataReadSource.params !== undefined
            && this.dataReadSource?.params.searchQuery !== undefined) {
            delete this.dataReadSource.params.searchQuery;
        }
        if (this.sort && this.sort[0]) {
            params["sortQuery.field"] = this.sort[0].field;
            params["sortQuery.direction"] = this.sort[0].dir;
        }

        try {
            this.dataReadSource!.request(
                { params },
                this.dataReadHandler,
                this.dataReadErrorHandler);
        } catch (err) {
            this.dataReadErrorHandler(err);
        }
    }

    getDataWithThrottling(delay = 500): void {
        if (this.pendingGet === undefined) {
            this.pendingGet = setTimeout(() => {
                this.getData();
                clearTimeout(this.pendingGet!);
                this.pendingGet = undefined;
            }, delay)
        }
    }

    getOuterStyle(): string | Partial<CSSStyleDeclaration> {
        return this.model.allowHorizontalScrolling && this.model.width ?
            isNaN(Number(this.model.width)) ?
                { width: this.model.width as string } :
                { width: `${this.model.width}px` }
            : "";
    }

    itemChangeHandler(event: GridItemChangeEvent): void {
        if (event.field) {
            event.dataItem.editValues[event.field] = event.value;
        }
        this.emitEventAndTryCallback("itemChange", event);
    }

    mounted(): void {
        this.model.reloadAfterEdit = this.reloadAfterEdit;
        this.filter = this.model.filter || undefined;
        this.search = this.model.search || "";
        this.sort = this.model.sort;
        this.editable = this.model.allowEditing;
        this.hasEditables = this.editable as boolean;
        if (this.model.allowScrolling === undefined || this.model.allowScrolling) {
            this.scrollable = "scrollable"
            this.style = this.model.height === undefined ? { height: "800px" } : { height: this.model.height } ;
        } else {
            this.scrollable = "none"
        }
        for (let column of this.columns) {
            column.editable = column.editable || this.editable || false;
            this.hasEditables = this.hasEditables || column.editable;
        }
        this.pageable = this.model.allowPaging &&
        {
            pageSizes: this.model.pageSizes ?? [25, 50, 100, 250],
        }
        this.take = this.model.allowPaging
            ? this.model.initialPageSize || this.take
            : this.total;
        this.updateDataSources();
        if (this.model.dataItems &&
            !this.model.allowFiltering &&
            !this.model.allowPaging &&
            !this.model.allowSearching &&
            !this.model.allowSorting &&
            !_.isEqual(this.model.dataItems, this.dataItems)) {
            this.dataItems = _.cloneDeep(this.model.dataItems ?? []);
            this.loaded = true;
            this.$emit("datareadsuccess");
        } else {
            this.getData();
        }
    }

    @Watch("model.apiBase")
    onApiBaseChange(): void {
        this.updateDataSources();
        this.getDataWithThrottling(10);
    }

    @Watch("model.dataReadRoute")
    onDataSourceRouteChanged(): void {
        this.updateDataSources();
        this.getDataWithThrottling(10);
    }

    @Watch("model.filter", { deep: true })
    onFilterChanged(): void {
        this.filter = this.model.filter || undefined;
        this.getDataWithThrottling();
    }

    @Watch("model.search")
    onSearchChange(): void {
        this.search = this.model.search || "";
        this.getDataWithThrottling();
    }

    @Watch("model.sort", { deep: true })
    onSortChanged(): void {
        this.sort = this.model.sort;
        this.getDataWithThrottling();
    }


    pageChangeHandler(event: GridPageChangeEvent): void {
        this.skip = event.page.skip;
        this.take = event.page.take;
        this.getDataWithThrottling(10);
        this.emitEventAndTryCallback("pageChange", event);
    }


    reloadAfterEdit(): void {
        if (this.model.dataItems &&
            !this.model.allowFiltering &&
            !this.model.allowPaging &&
            !this.model.allowSearching &&
            !this.model.allowSorting &&
            !_.isEqual(this.model.dataItems, this.dataItems)) {
            this.dataItems = _.cloneDeep(this.model.dataItems ?? []);
            this.loaded = true;
            this.$emit("datareadsuccess");
        } else {
            this.updateDataSources();
            this.getDataWithThrottling(10);
            this.emitEventAndTryCallback("datareloadsuccess", null);
        }
    }

    renderExpandButton(h: any, tdElement: any, props: any, listeners: any): VNode | null {

        if (this.model.conditinalExpandCallback !== undefined) {
            let canRender = this.model.conditinalExpandCallback(props.dataItem);

            if (props.field !== 'expanded' || canRender) {
                return tdElement;
            }

            return h('td');
        }
        else
            return tdElement;
        
    }

    rowRender(h: (...args: any[]) => any, trElement: VNode | null, defaultSlots: any, props: any, listeners: any): VNode | null {
        if (this.model.rowRender && typeof this.model.rowRender === "function") {
            return this.model.rowRender(h, trElement, defaultSlots, props, listeners);
        } else {
            return trElement;
        }
    }

    saveEdits(dataItem: any): any {
        const params: any = dataItem || {};
        if (this.dataItems) {
            for (let item of this.dataItems) {
                for (let key in item.editValues) {
                    if (key !== "editValues") {
                        item[key] = _.cloneDeep(item.editValues[key]);
                        params[key] = item[key];
                    }
                }
            }
        }
        return params;
    }

    searchHandler(event: MouseEvent): void {
        this.search = this.searchField;
        this.getDataWithThrottling();
        const searchEvent: GridSearchEvent = {
            query: this.search,
            event,
            target: event.target
        };
        this.emitEventAndTryCallback("search", searchEvent);
    }

    selectionChangeHandler(event: GridSelectionChangeEvent): void {
        //const checkbox = event.target as HTMLInputElement | undefined;
        //dataItem._selected = checkbox?.checked;
        if (event.event.target.tagName.toLowerCase() !== "a" && event.event.target.tagName.toLowerCase() !== "button") {
            event.dataItem._selected = !event.dataItem._selected;
            this.emitEventAndTryCallback("selectionChange", event);
        }
    }

    selectEveryChangeHandler(event: GridHeaderSelectionChangeEvent): void {
        if (!this.dataItems?.length)
            return;
        if (this.isEveryItemSelected) {
            for (let item of this.dataItems) {
                item._selected = false;
            }
        } else {
            for (let item of this.dataItems) {
                item._selected = true;
            }
        }
        this.emitEventAndTryCallback("headerSelectionChange", event, this.isEveryItemSelected)
    }

    SetButtonVisibility(): void {
        if (this.model.showDeleteCallback !== undefined) {
            this.dataItems?.forEach((dataItem: any) => {
                dataItem.showDelete = this.model.showDeleteCallback?.(dataItem);
            })
        }
        else {
            this.dataItems?.forEach((dataItem: any) => {
                dataItem.showDelete = true;
            })
        }

        if (this.model.showEditCallback !== undefined) {
            this.dataItems?.forEach((dataItem: any) => {
                dataItem.showEdit = this.model.showEditCallback?.(dataItem);
            })
        }
        else {
            this.dataItems?.forEach((dataItem: any) => {
                dataItem.showEdit = true;
            })
        }

        if (this.model.showEmailCallback !== undefined) {
            this.dataItems?.forEach((dataItem: any) => {
                dataItem.showEmail = this.model.showEmailCallback?.(dataItem);
            })
        }
        else {
            this.dataItems?.forEach((dataItem: any) => {
                dataItem.showEmail = true;
            })
        }
        
    }

    sortChangeHandler(event: GridSortChangeEvent): void {
        this.sort = event.sort;
        this.getDataWithThrottling(500);
        this.emitEventAndTryCallback("sortChange", event);
    }

    updateData(): void {
        const data = _.cloneDeep(this.allData);
        if (data) {
            for (let item of data) {
                item.$gridModel = this.model;
                item.$gridProps = this.$props;
                item.$emitGridEvent = this.emitEventAndTryCallback;
            }
        }
        this.dataItems = data;

        this.loaded = true;

        if (this.model.allowSelecting && this.dataItems)
            this.dataItems = this.dataItems.map(item => ({ ...item, _selected: false }));
        if (this.dataItems && this.columns.some(column => column.type === "date" && column.dateDisplay))
            this.dataItems = this.dataItems.map(this.formatDateColumns);

        this.total = (this.pager ? this.pager.TotalCount : (this.dataItems || []).length);
    }

    updateHandler(props: any): void {
        const params = this.saveEdits((props || {}).dataItem);
        if (Object.keys(params.editValues).length === 0) {
            ToastrHelper.DisplayToastWarning("No changes were made to the record. Skipping update.");
            return;
        }
        let validationMessages = this.checkValidators(params);
        if (validationMessages.length > 0) {
            this.displayValidationMessage(validationMessages);
            return;
        }
        const routeParams = this.generateRouteParams((props || {}).dataItem, this.model.dataUpdateRouteParams);
        try {
            this.dataUpdateSource && this.dataUpdateSource.request(
                { params, routeParams },
                this.dataUpdateCompleteHandler,
                this.dataUpdateErrorHandler)
        } catch (err) {
            this.dataUpdateErrorHandler(err);
        }
    }

    updateDataSources(): void {
       this.dataReadSource = new DataSource(
            `${this.model.apiBase}${this.model.dataReadRoute}`,
            this.model.dataReadMethod || "get",
            this.model.dataReadParams,
            this.model.dataReadKeys,
            this.model.accessToken);
        if (this.model.dataUpdateRoute) {
            this.dataUpdateSource = new DataSource(
                `${this.model.apiBase}${this.model.dataUpdateRoute || this.model.dataReadRoute}`,
                this.model.dataUpdateMethod || "put",
                this.model.dataUpdateParams,
                this.model.dataUpdateRouteParams,
                this.model.accessToken);
        }
        if (this.model.dataCreateRoute) {
            this.dataCreateSource = new DataSource(
                `${this.model.apiBase}${this.model.dataCreateRoute || this.model.dataReadRoute}`,
                this.model.dataCreateMethod || "post",
                this.model.dataCreateParams,
                this.model.dataCreateRouteParams,
                this.model.accessToken);
        }
        if (this.model.dataDeleteRoute) {
            this.dataDeleteSource = new DataSource(
                `${this.model.apiBase}${this.model.dataDeleteRoute || this.model.dataReadRoute}`,
                this.model.dataDeleteMethod || "delete",
                this.model.dataDeleteParams,
                this.model.dataDeleteRouteParams,
                this.model.accessToken);
        }
    }

}
