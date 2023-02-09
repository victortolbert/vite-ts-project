import type { CompositeFilterDescriptor, FilterDescriptor } from '@progress/kendo-data-query'

export default interface IFilterQuery {
  field: string;
  filters: Array<FilterDescriptor | CompositeFilterDescriptor>
}
