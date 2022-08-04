import { ReportType } from "../../Enums/ReportType";

export class ReportHeaderSection {

  public AddressLine1: string = "";

  public AddressLine2: string = "";

  public AddressLine3: string = "";

  public Adjuster: string = "";

  public Carrier: string = "";

  public ClaimNumber: string = "";

  public InspectionDate: string = "";

  public InsuredName: string = "";

  public ProjectNumber: string = "";

  public ReportName: string = "";

  public ReportType: ReportType;

  public ServiceType: string = "";
}
