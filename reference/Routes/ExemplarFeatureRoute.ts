import { ApiDefaultRoute } from './ApiDefaultRoute'

export class ExemplarFeatureRoute extends ApiDefaultRoute {
  constructor(url: string) {
    super(url, 'ExemplarFeatures/')
  }

  getExemplarFeatureByName(entityId: number, featureName: string): string {
    return `${this.uri}${entityId.toString()}?FeatureName=${featureName}&MappingType=1`
  }

  ReturnDropdown(featureFunctionId?: number): string {
    featureFunctionId = (featureFunctionId === undefined) ? 0 : featureFunctionId
    return `${this.uri}?FeatureFunctionId=${featureFunctionId}&CollectionType=0`
  }
}
