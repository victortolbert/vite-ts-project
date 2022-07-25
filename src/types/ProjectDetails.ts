import { PropertyInspectionForm } from ".";

export class ProjectDetails {
    public AssetEmailRecipients: string = "";
    public Adjuster: string = "";
    public AdjusterEmail: string = "";
    public City: string = "";
    public ClaimNumber: string = "";
    public CompanyId: number = 0;
    public CompanyParentId: number = 0;
    public CompanyName: string = "";
    public CompanyShortName: string = "";
    public HasCustomAssetEmail: boolean = false;
    public InspectionDate: string = "";
    public InsuredEmail: string = "";
    public InsuredName: string = "";
    public InsuredPrimaryPhone: string = "";
    public InsuredSecondaryPhone: string = "";
    public IsSymbility: boolean;
    public IsXact: boolean;
    public MaxMailSize: number;
    public PostalCode: string = "";
    public ProjectId: number = 0;
    public ProjectNumber: string = "";
    public ProjectStatusId: number;
    public ServiceType: string = "";
    public State: string = "";
    public StreetAddress1: string = "";
    public StreetAddress2: string = "";
    public TechnicianName: string = "";
    public TechnicianPhone: string = "";
    public PropertyInspectionForms: PropertyInspectionForm[] = [];
}
