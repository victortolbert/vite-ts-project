export * from './ApiClient'
export * from './ApiResponse'
export * from './Attendee'
export * from './AutoSchedulerBase'
export * from './AutoSchedulerBase'
export * from './AutoSchedulerEvents'
export * from './BaseReport'
export * from './CollateralItem'
export * from './CollectionTypeEnum'
export * from './DamageOverviewSection'
export * from './DataAccess'
export * from './DeckSection'
export * from './DeleteService'
export * from './DropdownListValues'
export * from './Event'
export * from './FenceSection'
export * from './GlobalEvents'
export * from './GridSearchEvent'
export * from './HandrailSection'
export * from './IDeleteBatchService'
export * from './IDeleteService'
export * from './IEditable'
export * from './IEditForm'
export * from './IFilterQuery'
export * from './IGridDataSourceParams'
export * from './IGridModel'
export * from './InteriorItem'
export * from './IRouteService'
export * from './ISidebarMenu'
export * from './ISortQuery'
export * from './IValidator'
export * from './LadderAssistOther'
export * from './NonStormDamageItem'
export * from './PageBase'
export * from './ProjectInspection'
export * from './ProjectInspectionDetails'
export * from './ReportHeaderSection'
export * from './ReportType'
export * from './ResponseType'
export * from './Roles'
export * from './Route'
export * from './RoofAccessories'
export * from './RoofComponent'
export * from './RoofComponentSection'
export * from './RoofObservationSection'
export * from './RoofSummarySection'
export * from './ServiceRegionIds'
export * from './StormInfoSection'
export * from './ToastMessageType'
export * from './ToastrHelper'
export * from './User'
export * from './UserType'

export type Account = {
  email: string
  displayName: string
}

export type AccountModify = {
  email: string
  displayName: string
}

export enum DayOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

export interface EventItem {
  id: number
  text: string
}

export type InspectionDetail = {
  ShortName: string
  ServiceType: string
  ClaimNumber: string
}

export enum AssetAction {
  Modified = 1,
  Emailed = 2,
  Deleted = 3,
  Restored = 4,
}

export enum AssetExportStatus {
  NotEligible = 0,
  Eligible = 1,
  Pending = 2,
  Completed = 3,
  Exception = 4,
}

export enum AssetType {
  EagleView = 1,
  Email = 2,
  FieldAsset = 3,
  Invoice = 4,
  PhotoForm = 5,
  Report = 6,
  Unknown = 7,
  UserAsset = 8,
  GeomniEssentialsReport = 9,
  GeomniReport = 10,
  HoverMeasurements = 11,
  Diagram = 12,
  HoverEsx = 13,
  HoverInvoice = 14,
  HoverXml = 15,
}

export enum AssessmentType {
  LAAllstate,
  LAOther,
  LALiberty,
  DIShingles,
  Master,
  DIAmFam,
  DIEPDM,
  DITile,
  DIBituminousMembranes,
  DIMetal,
  DIWood,
  DICSAAPA,
  DIRPTNOTestSquares,
  AllstateDI,
  AllstatePropInsp,
}

export enum BillingContactTypes {
  BillingContact = 1,
  Adjuster = 2,
  Other = 3,
}

export enum BillingStatus {
  NotBilledNonExport = 0,
  BillPendingNonExport = 1,
  BillInvoicePendingNonExport = 2,
  BillingSuccessfulNonExport = 3,
  NotBilledExportEligible = 10,
  BillPendingExportEligible = 11,
  BillInvoicePendingExportEligible = 12,
  BillingSucessfulExportPending = 13,
  ExportProcessing = 14,
  ExportSuccessful = 15,
  ExportReset = 16,
  InvalidTransactionId = 17,
  ExportTimeout = 18,
  BillingExportError = 90,
  BillingError = 91,
  InvoiceError = 92,
  XactwareError = 93,
  XactimateError = 94,
}
export default class Recipe {
  title: string = ''
  author: string = ''
  time: number = 0
  difficulty: string = ''
  servings: number = 0
  procedure: string = ''
  image: string = ''
  isFeatured: boolean = false
}

export enum OrderStatus {
  Created = 1,
  InProcess = 2,
  Pending = 3,
  Closed = 4,
  Completed = 5,
}

export enum OrderSubStatus {
  Customer = 1,
  UnderReview = 5,
  ProcessStarted = 6,
  SiteMap = 7,
  NeedToId = 8,
  Duplicate = 9,
  CanceledByClient = 10,
  PoorImages = 11,
  NoId = 12,
  ReportTypeChange = 14,
  NoImages = 15,
  Other = 16,
  System = 17,
  CardRejected = 18,
  Sent = 19,
  Sent1 = 20,
  CustomerResponse = 21,
  WrongHouse = 24,
  ReadyToSend = 26,
  CreditcardFailure = 27,
  Addressverified = 29,
}

export enum PendinigClaimsViewMode {
  AllPendingClaims,
  MyPendingClaims,
  MyLastUpload,
}

export enum Permissions {
  Administrator = 1,
  ViewProjectsList = 2,
  ViewSvtAvailabilityMenu = 3,
  ViewCustomersMenu = 4,
  ViewBillingMenu = 5,
  ViewUsersMenu = 6,
  ViewRegionsMenu = 7,
  ExportProjects = 8,
  ViewBillingPrice = 9,
  ViewAnnouncements = 10,
  ViewPastDueAppointments = 11,
  ViewTodaysAppointments = 12,
  ViewTomorrowsAppointments = 13,
  ViewRecentActivity = 14,
  ViewProjectsByStatus = 15,
  ViewServiceBilling = 16,
  ViewAugProjectsGrid = 17,
  ViewProjectsInMyRegion = 18,
  ViewServiceTypes = 19,
  AddProject = 20,
  AddEditTodaysMessage = 21,
  AddEditReports = 22,
  ViewSuperDashboard = 23,
  ViewClosedProjects = 24,
  ProjectAssignment = 25,
  AddCustomer = 26,
  AddBusinessUnit = 27,
  BulkAssign = 28,
  AddApplicationUser = 29,
  AddServiceTech = 30,
  AddInsuranceAdjuster = 31,
  ReportList = 32,
  AddAnnouncement = 34,
  AddServiceArea = 36,
  EditPermissions = 37,
  Calendar = 38,
  AddServiceType = 39,
  UserReportList = 40,
  ViewBillingInfo = 41,
  ExternalClaimsList = 42,
  ExternalClaimsDetails = 43,
  UploadProject = 44,
  PendingClaimsList = 45,
  ManageFAQList = 46,
  ViewFAQList = 47,
  ViewArchivedProjects = 48,
  ViewProjectComments = 49,
  AddEditAsset = 50,
  ViewAddEditIAFirm = 51,
  ViewEVProjects = 52,
  ViewCallScripts = 53,
  EditProject = 54,
  ProcessPendingProjects = 55,
}

export enum ProjectSource {
  UserInput = 1,
  BulkImport = 2,
  ExternalForm = 3,
  XactwareImport = 4,
}

export enum ProjectStatus {
  // Project is created and no date is requested to schedule
  Triage = 1,

  // e.g. outbound calls to the service center
  CallQueue = 2,

  // A Date is requested but no tech is assigned
  Schedule = 3,

  // Date is scheduled and a tech is assigned
  Assigned = 4,

  // Tech confirms the date
  Confirmed = 5,

  // Tech is onsite working on the claim/project
  Working = 6,

  // Tech has submitted his work for the project and awaiting approval
  Review = 7,

  // Review passes
  Complete = 8,

  // Project is billed to an Adjuster or Billing Adjuster
  Billed = 9,

  // Payment is received
  Closed = 10,

  // Hold
  Hold = 11,

  // Project is 2 years old and it placed in the archived database as it is no longer active
  Archived = 12,

  // Schedule is pending
  Pending = 13,
}

export enum ResponseType {
  Error,
  Success,
  FailedValidation,
  NoRecords,
  BadRequest,
  Unauthorized,
}

export enum Roles {
  Administrator = 1,
  Scheduler = 2,
  AdminSupport = 3,
  Bookkeeper = 4,
  ServiceTech = 5,
  ServiceTech2 = 6,
  ServiceManager = 7,
  InsuranceAdjuster = 8,
  BillingContact = 9,
  AdjusterDirector = 10,
  AdjusterManager = 11,
  ServiceDirector = 12,
  Eagleview = 13,
}

export enum ServiceRegionManagerMappingType {
  WithRegionList,
  WithUserList,
  IdsInAString,
}

export enum ServiceTypes {
  LadderAssist = 37,
  LadderAssistWithEagleView = 38,
  DirectInspection = 39,
  EstimateRepair = 40,
  TarpRemoveReset = 41,
  EmergencyTarp = 42,
  RopeHarness = 51,
  TripCharge = 52,
  Cancellation = 53,
  Other = 54,
  LadderLean = 55,
  LadderAssistWithRopeHarness = 56,
  BoardUp = 57,
  MultiUnitLadderAssist = 58,
  Ladder40ft = 59,
  ItelSample = 60,
  WisconsinLadderAssist = 61,
  LadderAssistPickup = 62,
  DirectInspectPickup = 63,
  SpecialComment = 64,
  MdDcLadderAssistWithReport = 65,
  SnowDelay = 68,
  MultiUnitDirectInspect = 69,
  DiagramMeasure = 70,
  ServiceComp = 71,
  DirectInspectWithVideo = 72,
  ArielSketchViaXact = 73,
  Video = 74,
  DirectInspectServiceComp = 75,
  ReinspectLadderAssist = 76,
  ReinspectDirectInspect = 77,
  SidingInspection = 78,
  SameDayServiceLadderAssist = 79,
  LadderAssistWithReport = 80,
  Surcharge = 81,
  CancellationNoCharge = 82,
  LadderAssistWithXactanalysisSurcharge = 83,
  DirectInspectWithXactanalysisSurcharge = 84,
  XactanalysisSurcharge = 85,
  TechReqOff = 86,
  Appraisal = 87,
  CustomerPilot = 89,
  ReInspectionNoCharge = 90,
  DiBroadcast = 91,
  Underwriting = 92,
  VirtualInspection = 93,
}

export enum ToasterPosition {
  topRight = 'toast-top-right',
  topLeft = 'toast-top-left',
  bottomRight = 'toast-bottom-right',
  bottomLeft = 'toast-bottom-left',
  centerCenter = 'toast-center-center',
}

export enum ToastMessageType {
  Error,
  Success,
  Warning,
}


export enum XactimateStatus {
  NonXactimateProject = 0,
  XactimateExportPending = 1,
  XactimateExportProcessing = 2,
  XactimateExportSuccessful = 3,
  XactimateExportError = 4,
}
