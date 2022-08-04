import { AssetDetails } from "./AssetDetails";
export class AssetEmail {
  public AdjusterName: string;
  public AssetEmailRecipients: string;
  public ClaimNumber: string;
  public CompanyShortName: string;
  public HasCustomAssetEmail: boolean;
  public InsuredName: string;
  public LossLocation: string;
  public MaxMailSize: number;
  public ProjectId: number;
  public PropertyInspectionFormId: number;
  public PropertyInspectionFormName: string;
  public UserId: number;
  public Assets: Array<AssetDetails>;

  constructor(adjusterName: string, assetEmailRecipients: string, claimNumber: string, companyShortName: string, hasCustomAssetEmail: boolean, insuredName: string, lossLocation: string, maxMailSize: number, projectId: number, propertyInspectionFormId: number, propertyInspectionFormName: string, userId: number, assets: Array<AssetDetails>) {
    this.AdjusterName = adjusterName;
    this.AssetEmailRecipients = assetEmailRecipients;
    this.ClaimNumber = claimNumber;
    this.CompanyShortName = companyShortName;
    this.HasCustomAssetEmail = hasCustomAssetEmail;
    this.InsuredName = insuredName;
    this.LossLocation = lossLocation;
    this.MaxMailSize = maxMailSize;
    this.ProjectId = projectId;
    this.PropertyInspectionFormId = propertyInspectionFormId;
    this.PropertyInspectionFormName = propertyInspectionFormName;
    this.UserId = userId;
    this.Assets = assets;
  }
}
