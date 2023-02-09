import { ApiDefaultRoute } from './ApiDefaultRoute'
import { ServiceTechnicianCollectionResourceParameters } from '@ExemplarViewModels/ServiceTechnicianCollectionResourceParameters'

export class ServiceAreaTechnicianRoute extends ApiDefaultRoute {
  constructor(url: string) {
    super(url, 'ServiceAreaTechnicians/')
  }

  GetAll(serviceTechnicianCollectionResourceParameters: ServiceTechnicianCollectionResourceParameters): string {
    return `${this.uri}?AreaIds=${serviceTechnicianCollectionResourceParameters.AreaIds}
            &RegionIds=${serviceTechnicianCollectionResourceParameters.RegionIds}
            &CollectionType=${<number>serviceTechnicianCollectionResourceParameters.CollectionType}
            &SearchQuery=${serviceTechnicianCollectionResourceParameters.SearchQuery}
            &FilterQuery=${serviceTechnicianCollectionResourceParameters.FilterQuery}
            &ShowInactive=${serviceTechnicianCollectionResourceParameters.ShowInactive}`
  }

  GetByKeys(serviceAreaId: number, userId: number): string {
    return `${this.uri}${serviceAreaId}/${userId}`
  }
}
