import type { Method } from 'axios'
// import type { VNode } from 'vue'
import type {
  CompositeFilterDescriptor,
  SortDescriptor,
} from '@progress/kendo-data-query'
import type {
  GridColumnProps,
  GridExpandChangeEvent,
  GridFilterChangeEvent,
  GridPageChangeEvent,
  GridSortChangeEvent,
} from '@progress/kendo-vue-grid'

import type GridSearchEvent from '@ExemplarInterfaces/GridSearchEvent'
import type { ApiResponse } from '@ExemplarDataAccess/ApiResponse'
import type { GridValidator } from '@ExemplarComponents/Grid/GridValidation'

export default interface IGridModel {
  accessToken: string
  allowAdding?: boolean
  allowDeleting?: boolean
  allowEditing?: boolean
  allowExpanding?: boolean
  allowPaging?: boolean
  allowFiltering?: boolean
  allowHorizontalScrolling?: boolean
  allowScrolling?: boolean
  allowSearching?: boolean
  allowSelecting?: boolean
  allowSorting?: boolean
  apiBase: string
  columns: Array<string | GridColumnProps> // 'columns' needs at least one column of non-fixed width when the grid is initialized.
  dataCreateMethod?: Method
  dataCreateParams?: any
  dataCreateRoute?: string
  dataCreateRouteParams?: string[]
  dataCreateSuccessCallback?: (response: ApiResponse) => void
  dataDeleteMethod?: Method
  dataDeleteParams?: any
  dataDeleteRoute?: string
  dataDeleteRouteParams?: any
  dataDeleteSuccessCallback?: (response: ApiResponse) => void
  dataPagerKeys?: string | string[]
  dataReadSuccessCallback?: (response: ApiResponse) => void
  dataReadKeys: string | string[]
  dataReadMethod: Method
  dataReadParams?: any
  dataReadRoute: string
  dataReadRouteParams?: string[]
  dataUpdateMethod?: Method
  dataUpdateParams?: any
  dataUpdateRoute?: string
  dataUpdateRouteParams?: string[]
  dataUpdateSuccessCallback?: (response: ApiResponse) => void
  editCancelCallback?: (dataItem: any, dataIndex: number) => void
  editStartCallback?: (dataItem: any, dataIndex: number) => void
  errorCallback?: (response?: ApiResponse) => void
  expandChangeCallback?: (event: GridExpandChangeEvent) => void
  exportHidden?: boolean
  filter?: CompositeFilterDescriptor
  filterChangeCallback?: (event: GridFilterChangeEvent) => void
  gridType: string
  hasTotalRow?: boolean
  height?: string
  initialPageSize?: number
  linkCallback?: (event: MouseEvent, dataItem: any, dataIndex: number) => void
  linkUrl?: string
  linkUrlParams?: string[]
  pageChangeCallback?: (event: GridPageChangeEvent) => void
  reloadData?: boolean
  // rowRender?: (h: (...args: any[]) => VNode, trElement: VNode | null, defaultSlots: any, props: any, listeners: any) => VNode | null
  search?: string
  searchCallback?: (event: GridSearchEvent) => void
  searchClearCallback?: (event: GridSearchEvent) => void
  sort: SortDescriptor[]
  sortChangeCallback?: (event: GridSortChangeEvent) => void
  validators?: Array<GridValidator>
  width?: number | string
  [key: string]: any // Only to allow dynamic callback checks All other keys will be ignored.
}
