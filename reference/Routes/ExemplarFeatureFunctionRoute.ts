import { ApiDefaultRoute } from './ApiDefaultRoute'

export class ExemplarFeatureFunctionRoute extends ApiDefaultRoute {
  constructor(url: string) {
    super(url, 'ExemplarFeatureFunctions/')
  }

  getExemplarFeatureFunctionByName(entityId: number, featureName: string): string {
    return `${this.uri}${entityId.toString()}?FunctionName=${featureName}&MappingType=1`
  }
}
