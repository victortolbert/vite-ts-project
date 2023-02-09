import { ApiDefaultRoute } from './ApiDefaultRoute'

export class RoleRoute extends ApiDefaultRoute {
  constructor(url: string) {
    super(url, 'Roles')
  }

  GetByUserTypeId(userTypeId = '0', collectionType = 0): string {
    return `${this.uri}?userTypeId=${userTypeId}&collectionType=${collectionType}`
  }
}
