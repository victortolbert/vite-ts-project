export class BillingItem {
  public Id: number | null = null;
  public ProjectNumber: string = "";
  public Company: string = "";
  public ClaimNumber: number = 0;
  public ServiceType: string = "";
  public City: string = "";
  public State: string = "";
  public ServiceRegion: string = "";
  public ServiceArea: string = "";
  public ProjectStatus: string = "";
  public RequiresHaagInspector: boolean = false;
  public Date: Date = new Date();
  public Duration: number = 0;
  public ServiceTech: string = "";
  public PostalCode: string = "";
  public StreetAddress1: string = "";
  public StreetAddress2: string = "";
  public InsuredFirstName: string = "";
  public InsuredLastName: string = "";
  public FlaggedBy: string = "";
}
