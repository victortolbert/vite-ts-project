import type { PropertyInspectionForm } from '.'

export class ProjectDetails {
  public AssetEmailRecipients = ''
  public Adjuster = ''
  public AdjusterEmail = ''
  public City = ''
  public ClaimNumber = ''
  public CompanyId = 0
  public CompanyParentId = 0
  public CompanyName = ''
  public CompanyShortName = ''
  public HasCustomAssetEmail = false
  public InspectionDate = ''
  public InsuredEmail = ''
  public InsuredName = ''
  public InsuredPrimaryPhone = ''
  public InsuredSecondaryPhone = ''
  public IsSymbility = false
  public IsXact = false
  public MaxMailSize = 0
  public PostalCode = ''
  public ProjectId = 0
  public ProjectNumber = ''
  public ProjectStatusId = 0
  public ServiceType = ''
  public State = ''
  public StreetAddress1 = ''
  public StreetAddress2 = ''
  public TechnicianName = ''
  public TechnicianPhone = ''
  public PropertyInspectionForms: PropertyInspectionForm[] = []
}
