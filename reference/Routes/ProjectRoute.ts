import { ApiDefaultRoute } from './ApiDefaultRoute'

export class ProjectRoute extends ApiDefaultRoute {
  userUri = ''
  companyUri = ''
  damageTypeUri = ''
  serviceTypeUri = ''
  statusUri = ''

  constructor(url: string) {
    super(url, 'Projects/')
    this.companyUri = `${url}Companies/`
    this.damageTypeUri = `${url}DamageTypes/`
    this.serviceTypeUri = `${url}CompanyServiceTypes/`
    this.statusUri = `${url}ProjectStatus/`
  }

  AcceptProjects(userId: number | string): string {
    return `${this.uri}accept?AcceptedBy=${userId}`
  }

  FlagProjects(userId: number | string, projectId: number | string): string {
    return `${this.uri}flag/${projectId}?FlaggedBy=${userId}`
  }

  GetAdjustersDropdown(companyId: number | null): string {
    return companyId ? `${this.userUri}?companyId=${companyId}&userTypeId=3&collectionType=Dropdown` : ''
  }

  GetCompaniesDropdown(userType: string, adjusterId: number): string {
    const userString = userType === 'Insurance Adjusters'
      ? `&adjusterId=${adjusterId}`
      : ''
    return `${this.companyUri}?collectionType=Dropdown${userString}`
  }

  GetCompanyServiceTypes(companyId: number | null): string {
    return companyId ? `${this.serviceTypeUri}?companyId=${companyId}&collectionType=Dropdown` : ''
  }

  GetStatusDropdown(projectStatusId: number): string {
    return `${this.statusUri}?projectStatusId=${projectStatusId}&collectionType=Dropdown`
  }

  GetByIds(ids: Array<number> | Array<string>, scheduleProjects = false): string {
    return `${this.uri}?ProjectIds=${ids.join(',')}&CollectionType=ExportList${scheduleProjects ? '&ScheduleInspections=true' : ''}`
  }

  Get(id: number): string {
    return `${this.uri}${id}?MappingType=ProjectGridDto`
  }

  //    ReturnDropdownOfAdjusterDirectors(companyId?: number): string {
  //        companyId = (companyId === undefined) ? 0 : companyId
  //        return `${this.uri}?CompanyId=${companyId}&RoleId=10&CollectionType=0`
  //    }

  //    ReturnDropdownOfAdjusterManagers(companyId?: number): string {
  //        companyId = (companyId === undefined) ? 0 : companyId
  //        return `${this.uri}?CompanyId=${companyId}&RoleId=11&CollectionType=0`
  //    }
}
