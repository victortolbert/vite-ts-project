import { Method } from "axios";
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
import GridSearchEvent from "@ExemplarInterfaces/GridSearchEvent";
import { ApiResponse } from "@ExemplarDataAccess/ApiResponse";

export default interface IGridModel {
    accessToken: string;
    allowAdding?: boolean;
    allowEditing?: boolean;
    allowExpanding?: boolean;
    allowPaging?: boolean;
    allowFiltering?: boolean;
    allowScrolling?: boolean;
    allowSearching?: boolean;
    allowSorting?: boolean;
    apiBase: string;
    columns: Array<string | GridColumnProps>; // "columns" needs at least one column of non-fixed width when the grid is initialized.
    dataCreateMethod?: Method;
    dataCreateParams?: any;
    dataCreateRoute?: string;
    dataCreateRouteParams?: string[];
    dataCreateSuccessCallback?: (response: ApiResponse) => void;
    dataPagerKeys?: string | string[];
    dataReadSuccessCallback?: (response: ApiResponse) => void;
    dataReadKeys: string | string[];
    dataReadMethod: Method;
    dataReadParams?: any;
    dataReadRoute: string;
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
    filter?: CompositeFilterDescriptor;
    filterChangeCallback?: (event: GridFilterChangeEvent) => void;
    gridType: string;
    hasTotalRow?: boolean;
    height?: string;
    initialPageSize?: number;
    linkCallback?: (event: MouseEvent, dataItem: any, dataIndex: number) => void;
    linkUrl?: string;
    linkUrlParams?: string[];
    pageChangeCallback?: (event: GridPageChangeEvent) => void;
    searchCallback?: (event: GridSearchEvent) => void;
    searchClearCallback?: (event: GridSearchEvent) => void;
    sort: SortDescriptor[];
    sortChangeCallback?: (event: GridSortChangeEvent) => void;
    [key: string]: any; // Only to allow dynamic callback checks; All other keys will be ignored.
}
