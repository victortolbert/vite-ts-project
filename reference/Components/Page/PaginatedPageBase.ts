import Component from "vue-class-component";
import { PageBase } from "@ExemplarCommon/PageBase";
import Grid from "@ExemplarComponents/Grid/GridComponent";
import IPager from "@ExemplarInterfaces/IPager";
import { IExportColumns } from "../Button/ExportButton";
import { ToastrHelper } from "@ExemplarCommon/ToastrHelper";
import { CheckboxChangeEvent } from "@progress/kendo-vue-inputs";

@Component
export default class PaginatedPageBase<T> extends PageBase<T> {
    allowSelecting: boolean = true;
    cardMode: boolean = false;
    exportHidden = false;
    initialPageSize = 25;
    hasPreviousPagingEllipsis = false;
    hasNextPagingEllipsis = false;
    model: Array<any> = new Array<any>();

    get selectedDataItems(): Array<any> | undefined {
        let allowSelecting: boolean | undefined = this.allowSelecting;
        let model;

        if (this.cardMode)
            model = this.model;
        else {
            const gridRef = this.$refs.gridRef as Grid;
            allowSelecting = gridRef?.model.allowSelecting;
            model = gridRef?.dataItems;
        }
        return (allowSelecting ?
            model?.filter(item => item._selected) :
            model) ?? [];
    }

    get gridExportColumns(): Array<IExportColumns> {
        const gridRef = this.$refs.gridRef as Grid;
        return gridRef?.columns.filter(col => {
            const name = typeof col === "string" ? col : col.field;
            return name && !Grid.IsInternalColumn(name) &&
                (col.export || ((!col.hidden || gridRef?.model.exportHidden) && (col.export === undefined)))
        }).map(col => {
            const field = typeof col === "string" ? col : col.field;
            const title = typeof col === "string" ? col :
                col.exportName ?? field!.replace(/([a-z])([A-Z])/g, "$1 $2");
            return {
                field,
                title,
            }
        }) ?? [];
    }

   pager: IPager = {
        CurrentPage: 0,
        NextPage: "",
        PageSize: this.initialPageSize ?? 25,
        PreviousPage: "",
        TotalCount: 0,
        TotalPages: 0,
    };

    constructor() {
        super();
        this.HandlePageChange = this.HandlePageChange.bind(this);
        this.HandleEmptyExport = this.HandleEmptyExport.bind(this);
    }

    getSelectedDataItems(): Array<any> {
        let allowSelecting: boolean | undefined = this.allowSelecting;
        let model;

        if (this.cardMode)
            model = this.model;
        else {
            const gridRef = this.$refs.gridRef as Grid;
            allowSelecting = gridRef?.model.allowSelecting;
            model = gridRef?.dataItems;
        }
        return (allowSelecting ?
            model?.filter(item => item._selected) :
            model) ?? [];
    }

    HandleEmptyExport(): void {
        const gridRef = this.$refs.gridRef as Grid;
        if (gridRef.dataItems?.length && gridRef.model.allowSelecting)
            ToastrHelper.DisplayToastWarning("Please select items to export.");
        else
            ToastrHelper.DisplayToastWarning("No data available to export.")
    }

    HandlePageChange(page: number): void {
        const gridRef = this.$refs.gridRef as Grid;
        const take = (gridRef?.take ?? this.initialPageSize ?? 25);
        gridRef?.pageChangeHandler && gridRef.pageChangeHandler({
            page: {
                skip: (page - 1) * take,
                take,
            }
        });
    }

    OnSelectionChange(event: Event, item?: any) {
        const gridRef = this.$refs.gridRef as Grid;

        if (item) {
            const checkbox = event.target as HTMLInputElement;
            item._selected = checkbox.checked;
        }

        if (this.cardMode) {
            gridRef.dataItems = this.model;
        } else {
            this.model = gridRef.dataItems!;
        }
    }

    ReloadGrid() {
        const gridRef = this.$refs.gridRef as Grid | undefined;
        gridRef?.getData();
    }
}