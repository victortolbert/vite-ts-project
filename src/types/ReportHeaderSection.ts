import { ReportType } from '.'

export interface ReportHeaderSection {
  AddressLine1: string
  AddressLine2: string
  AddressLine3: string
  Adjuster: string
  Carrier: string
  ClaimNumber: string
  InspectionDate: string
  InsuredName: string
  ProjectNumber: string
  ReportName: string
  ReportType: ReportType
  ServiceType: string
  InspectedBy: string
}
