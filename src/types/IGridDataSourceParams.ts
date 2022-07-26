import type { IFilterQuery, ISortQuery } from '.'

export interface IGridDataSourceParams {
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
