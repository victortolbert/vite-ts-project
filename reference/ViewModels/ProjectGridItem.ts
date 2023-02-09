import { IEditable } from "../Interfaces/IEditable";
import ServiceType from "@ExemplarViewModels/ServiceType";

export interface IDamageType {
  Id: number;
  CustomerDescription: string;
  Description: string;
  Name: string;
  OnExternalForm: boolean;
}

export interface UserSimpleProfileDto {
  Id: number;
  FullName: string;
  PrimaryPhone: string;
  PrimaryPhoneExt: string;
  PrimaryEmail: string;
}

export class ProjectInspection { }

export class ProjectGridItem implements IEditable {
  public Id: number | null = null;
  public BillingContactType: string | null = null;
  public CatastrophicEvent: boolean | null;
  public City: string = "";
  public ClaimId: number | null = null;
  public ClaimNumber: string = "";
  public Company: string = "";
  public CompanyBillingContact: UserSimpleProfileDto | null = null;
  public CompanyId: number | null = null;
  public CreatedBy: number | null = null;
  public CreatedByName: string = '';
  public Date: Date = new Date(); // string?
  public DamageTypes: Array<IDamageType> = [];
  public Finish: Date = new Date(); // string?
  public FlaggedBy: string = "";
  public InsuranceAdjuster: string = "";
  public InsuranceAdjusterId: number | null = null;
  public PostalCode: string = "";
  public ProjectNumber: string = "";
  public RowVersion: Array<number> = [];
  public ServiceArea: string = "";
  public ServiceAreaId: number | null = null;
  public ServiceRegion: string = "";
  public ServiceRegionId: number | null = null;
  public ServiceTech: string = "";
  public ServiceType: string = "";
  public ServiceTypes: Array<ServiceType> | null = null;
  public Start: Date = new Date(); // string?
  public State: string = "";
  public StateId: number | null = null;
  public Status: string = "";
  public StatusId: number | null = null;
}
