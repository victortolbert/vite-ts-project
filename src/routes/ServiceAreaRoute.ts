import { ApiDefaultRoute } from '.'

export class ServiceAreaRoute extends ApiDefaultRoute{
  constructor(url: string) {
    super(url, 'ServiceAreas/')
  }

  GetAll(serviceRegionId: string = '', showInactive: boolean = false, mappingType: number = 0): string {
    return `${this.uri}?serviceRegionIds=${serviceRegionId}&showInactive=${showInactive}&mappingType=${mappingType}`
  }
}
