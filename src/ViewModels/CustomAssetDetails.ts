import { CustomAsset } from "./CustomAsset";
export class CustomAssetDetails {
  public AssetTypeId: number;
  public ClaimNumber: string;
  public CompanyId: number;
  public CompanyName: string;
  public CompanyParentId: number;
  public CreatedBy: number;
  public InsuredName: string;
  public IsSymbility: boolean;
  public IsXact: boolean;
  public MaxMailSize: number;
  public ProjectId: number;
  public ProjectNumber: string;
  public ProjectStatusId: number;
  public PropertyInspectionFormId: number;
  public ScheduleDate: string;
  public FieldTechName: string;
  public Assets: Array<CustomAsset>;
}
