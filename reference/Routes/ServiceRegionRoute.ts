import { ApiDefaultRoute } from './ApiDefaultRoute'

export class ServiceRegionRoute extends ApiDefaultRoute {
  constructor(url: string) {
    super(url, 'ServiceRegions/')
  }

  ReturnServiceRegionExistsBool(entityId: number, serviceRegionName: string): string {
    return `${this.uri}${entityId.toString()}?ServiceRegionName=${serviceRegionName}&MappingType=1`
  }

  GetAll(serviceRegionId = '', serviceRegionLeadId = 0, showInactive = false, mappingType = 0): string {
    return `${this.uri}?serviceRegionIds=${serviceRegionId}&serviceRegionLeadId=${serviceRegionLeadId}&showInactive=${showInactive}&mappingType=${mappingType}`
  }
}
