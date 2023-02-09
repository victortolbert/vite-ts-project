import { ApiDefaultRoute } from './ApiDefaultRoute'

export class UserRoute extends ApiDefaultRoute {
  constructor(url: string) {
    super(url, 'Users/')
  }

  CheckByIdAndEmail(id: number, primaryEmail: string): string {
    return `${this.uri}${id}?PrimaryEmail=${primaryEmail}&mappingType=3`
  }

  GetByEmail(primaryEmail: string): string {
    return `${this.uri}?PrimaryEmail=${primaryEmail}`
  }

  GetById(id: number, mappingType = 0): string {
    return `${this.uri}${id}?mappingType=${mappingType}`
  }

  ReturnDropdownOfAdjusterDirectors(companyId?: number): string {
    companyId = (companyId === undefined) ? 0 : companyId
    return `${this.uri}?CompanyId=${companyId}&RoleId=10&CollectionType=0`
  }

  ReturnDropdownOfAdjusterManagers(companyId?: number): string {
    companyId = (companyId === undefined) ? 0 : companyId
    return `${this.uri}?CompanyId=${companyId}&RoleId=11&CollectionType=0`
  }

  ReturnDropdownOfManageableAdjusters(companyId: string[]): string {
    return `${this.uri}?CompanyIds=${companyId.join(',')}&RoleId=8&CollectionType=0`
  }
}
