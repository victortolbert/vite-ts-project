import { ApiDefaultRoute } from './ApiDefaultRoute'

export class ServiceAreaRoute extends ApiDefaultRoute {
  constructor(url: string) {
    super(url, 'ServiceAreas/')
  }

  GetAll(serviceRegionId = '', showInactive = false, mappingType = 0): string {
    return `${this.uri}?serviceRegionIds=${serviceRegionId}&showInactive=${showInactive}&mappingType=${mappingType}`
  }
}
