import type IFilterQuery from './IFilterQuery'
import type ISortQuery from './ISortQuery'

export default interface IGridDataSourceParams {
  filter?: IFilterQuery
  gridType: string
  group?: string
  mappingType?: 'Grid' | 'List'
  pageNumber?: number
  pageSize?: number
  searchQuery?: string
  sort?: ISortQuery
  [key: string]: any
}
