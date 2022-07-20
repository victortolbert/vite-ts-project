import { ApiDefaultRoute } from '.'

export class FieldTechAvailabilityRoute extends ApiDefaultRoute {
  constructor(url: string) {
    super(url, 'FieldTechAvailabilities/')
  }

  GetAllAsync(serviceTechUserId: number): string {
    return `${this.uri}${serviceTechUserId}`
  }
}
