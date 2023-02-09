import { ApiDefaultRoute } from './ApiDefaultRoute'

export class CustomerServiceTypeRoute extends ApiDefaultRoute {
  constructor(url: string) {
    super(url, 'CompanyServiceType/')
  }

  ReturnListOfCurrentServiceTypesByCompanyId(customerId?: number): string {
    customerId = (customerId === undefined) ? 0 : customerId
    return `${this.uri}?CompanyId=${customerId}&MappingType=0`
  }
}
