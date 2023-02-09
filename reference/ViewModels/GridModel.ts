import { Method } from "axios";
import { VNode } from "vue";
import {
    CompositeFilterDescriptor,
    SortDescriptor,
} from "@progress/kendo-data-query";
import {
    GridColumnProps,
    GridExpandChangeEvent,
    GridFilterChangeEvent,
    GridPageChangeEvent,
    GridSortChangeEvent,
} from "@progress/kendo-vue-grid";
import IGridModel from "@ExemplarInterfaces/IGridModel";
import GridSearchEvent from "@ExemplarInterfaces/GridSearchEvent";
import { ApiResponse } from "@ExemplarDataAccess/ApiResponse";

export interface GridColumn extends GridColumnProps {
    export?: boolean;
    exportName?: string;
    key?: string;
    dateDisplay?: "date" | "date-time" | "time";
}

export default class GridModel implements IGridModel {
    accessToken: string = "";
    allowAdding?: boolean = false;
    allowEditing?: boolean = false;
    allowDeleting?: boolean = false;
    allowEmailing?: boolean = false;
    allowExpanding?: boolean = false;
    allowHorizontalScrolling: boolean = false;
    allowPaging?: boolean = true;
    allowFiltering?: boolean = false;
    allowScrolling?: boolean = true;
    allowSearching?: boolean = false;
    allowSelecting?: boolean = false;
    allowSorting?: boolean = false;
    apiBase: string = "";
    columns: Array<string | GridColumn> = ["Loading..."]; // "columns" needs at least one column of non-fixed width when the grid is initialized.
    dataCreateMethod?: Method;
    dataCreateParams?: any;
    dataCreateRoute?: string;
    dataCreateRouteParams?: string[];
    dataCreateSuccessCallback?: (response: ApiResponse) => void;
    dataItems?: Array<any>;
    dataPagerKeys?: string | string[] = "Pager";
    dataReadSuccessCallback?: (response: ApiResponse) => void;
    dataReadKeys: string | string[] = "Model";
    dataReadMethod: Method = "get";
    dataReadParams?: any;
    dataReadRoute = "";
    dataReadRouteParams?: string[];
    dataUpdateMethod?: Method;
    dataUpdateParams?: any;
    dataUpdateRoute?: string;
    dataUpdateRouteParams?: string[];
    dataUpdateSuccessCallback?: (response: ApiResponse) => void;
    editCancelCallback?: (dataItem: any, dataIndex: number) => void;
    editStartCallback?: (dataItem: any, dataIndex: number) => void;
    errorCallback?: (response?: ApiResponse) => void;
    expandChangeCallback?: (event: GridExpandChangeEvent) => void;
    exportHidden?: boolean = false;
    filter?: CompositeFilterDescriptor = { filters: [], logic: "and" };
    filterChangeCallback?: (event: GridFilterChangeEvent) => void;
    gridType: string = "DefaultGridView";
    hasTotalRow?: boolean = false;
    height = "800px";
    initialPageSize?: number = 25;
    linkCallback?: (event: MouseEvent, dataItem: any, dataIndex: number) => void;
    linkCanRenderCallback?: (dataItem: any) => boolean;
    linkUrl?: string;
    linkUrlParams?: string[];
    pageChangeCallback?: (event: GridPageChangeEvent) => void;
    reloadData?: boolean;
    //rowRender?: (h: (...args: any[]) => VNode, trElement: VNode | null, defaultSlots: any, props: any, listeners: any) => VNode | null;
    showDeleteCallback?: (dataItem: any) => boolean;
    showEditCallback?: (dataItem: any) => boolean;
    showEmailCallback?: (dataItem: any) => boolean;
    search?: string = "";
    searchCallback?: (event: GridSearchEvent) => void;
    searchClearCallback?: (event: GridSearchEvent) => void;
    sort: SortDescriptor[] = [];
    sortChangeCallback?: (event: GridSortChangeEvent) => void;
    width?: number | string;
    [key: string]: any; // Only to allow dynamic callback checks; All other keys will be ignored.
}
