import { ApiDefaultRoute } from './ApiDefaultRoute'

export class CustomerRoute extends ApiDefaultRoute {
  constructor(url: string) {
    super(url, 'Companies/')
  }

  getCustomerByName(entityId: number, customerName: string): string {
    return `${this.uri}${entityId.toString()}?CompanyName=${customerName}&MappingType=4`
  }

  getCustomers(collectionType = 0): string {
    return `${this.uri}?collectionType=${collectionType}`
  }
}
