import { ReportType } from '@/types'

export class MvcReportRoutes {
  private endpoint = 'PropertyInspection/Reports/'

  constructor(uri: string) {
    this.endpoint = uri + this.endpoint
  }

  GetPreview(propertyInspectionFormId: number, reportType: ReportType): string {
    if (reportType === ReportType.AllstateLadderAssist || reportType === ReportType.AllstateVirtual || reportType === ReportType.HIC)
      return `${this.endpoint}PreviewAllStateReport?reportType=${reportType}&propertyInspectionFormId=${propertyInspectionFormId}`
    else
      return `${this.endpoint}PreviewNonAllStateReport?propertyInspectionFormId=${propertyInspectionFormId}&reportType=${reportType}`
  }

  GetCreate(createdBy: number, projectNumber: string, propertyInspectionFormId: number, reportType: ReportType, createPhotoForm: boolean): string {
    let reportMethod = ''

    switch (reportType) {
      case ReportType.AllstateLadderAssist:
        reportMethod = `${this.endpoint}CreateAllStateReport`
        break

      case ReportType.HIC:
        reportMethod = `${this.endpoint}CreateAllStateReport`
        break

      case ReportType.AllstateVirtual:
        reportMethod = `${this.endpoint}CreateAllStateReport`
        break

      default:
        reportMethod = `${this.endpoint}CreateNonAllStateReport`
        break
    }
    return `${reportMethod}?createdBy=${createdBy}&projectNumber=${projectNumber}&propertyInspectionFormId=${propertyInspectionFormId}&reportType=${reportType}&createPhotoForm=${createPhotoForm}`
  }
}
