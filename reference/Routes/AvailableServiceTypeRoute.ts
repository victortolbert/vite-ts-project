import { ApiDefaultRoute } from './ApiDefaultRoute'

export class AvailableServiceTypesRoute extends ApiDefaultRoute {
  constructor(url: string) {
    super(url, 'AvailableServiceTypes/')
  }

  ReturnListOAvailableServiceTypes(excludedServiceTypeIds: string, excludeChildServiceTypes: boolean): string {
    return `${this.uri}?CollectionType=0&ExcludedServiceTypeIds=${excludedServiceTypeIds}&ExcludeChildServiceTypes=${excludeChildServiceTypes}`
  }
}
