import AdjusterAsset from "../../Areas/Portal/Scripts/ViewModels/AdjusterAsset";

export default interface IProject {
  Id: number;
  AddressComments: string;
  AddressLatitude: number;
  AddressLongitude: number;
  AdjusterAssignedOn: string; // DateTime
  AdjusterId: number;
  AdjusterProjectNumber: number;
  BilledOn: string; // DateTime
  BillingContactId: number;
  BillingContactType: string;
  BillingResultMessage: string;
  BillingStatusId: number;
  CatastrophicEvent: boolean;
  City: string;
  ClaimComments: string;
  ClaimId: number;
  CompanyId: number;
  ContactedByUserId?: number;
  ContactDateTime?: string; // DateTime
  CreatedBy: number;
  CreatedOn: string; // DateTime
  DialerSkillId?: number;
  DialerStatus: string;
  EscalationReasonTypeId?: number;
  EscalationResolutionDescription: string;
  FlaggedBy?: number;
  HasBeenContacted?: boolean;
  InspectionDateAndTime: string;
  InsuredEmail: string;
  InsuredFirstName: string;
  InsuredLastName: string;
  InsuredPrimaryPhone: string;
  InsuredSecondaryPhone: string;
  IsEscalation?: boolean;
  IsMultipleAssign: boolean;
  IsReinspect: boolean;
  IsReschedule?: boolean;
  IsTimeWindow: boolean;
  MasterFormBackUp: string;
  MultiUnit: boolean;
  Notes: string;
  OtherServiceType: boolean;
  OtherServiceTypeDescription: string;
  OtherServiceTypePrice: number;
  PostalCode: string;
  ProjectNumber: string;
  ProjectSourceId: number;
  ProjectStatusId: number;
  ReadBySvt?: number;
  RequiresHaagInspector: boolean;
  RescheduleReasonTypeId?: number;
  SkipGeomniProcessing: boolean;
  StateId: number;
  StreetAddress1: string;
  StreetAddress2: string;
  TimeWindowDuration?: number;
  TimeWindowEnd?: string; // DateTime
  TimeWindowStart?: string; // DateTime
  //CreatedByUser: User;
  //FlaggedByUser: User;
  //BillingContact: User;
  //GeomniOrderedProject: GeomniOrderedProject;
  //Adjuster: User;
  //ContactedBy: User;
  //BillingStatus: BillingStatusType;
  //Claim: Claim;
  //Company: Company;
  //ProjectSource: ProjectSource;
  //State: State;
  //ProjectStatus: ProjectStatus;
  //EscalationReason: MasterEscalationReasonType;
  //RescheduleReason: MasterRescheduleReasonType;
  Assets: Array<AdjusterAsset>;
  //ExternalClaims: Array<ExternalClaim>;
  //Comments: Array<ProjectComment>;
  //EvOrderedProjects: Array<EvOrderedProject>;
  //PropertyInspectionForms: Array<PropertyInspectionForm>;
  //ProjectPropertyInspectionForms: Array<ProjectPropertyInspectionForm>;
  //RoofAssessmentForms: Array<RoofAssessmentForm>;
  //ProjectDamageTypes: Array<ProjectDamageType>;
  //ProjectLogItems: Array<ProjectLogItem>;
  ServiceTypes: Array<any>;
  //ProjectInspections: Array<ProjectInspection>;
  //ProjectRoofAssessmentForms: Array<ProjectRoofAssessmentForm>;
  RowVersion: string;
}
