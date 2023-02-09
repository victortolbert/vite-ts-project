import { ApiDefaultRoute } from './ApiDefaultRoute'

export class ProjectInspectionsRoute extends ApiDefaultRoute {
  constructor(url: string) {
    super(url, 'ProjectInspections')
  }

  GetInspectionCounts(roleId: number, userId: number): string {
    return `${this.uri}/?&ProjectInspectionMappingType=2&RoleId=${roleId}&UserId=${userId}`
  }
}
