export class AssetDetails {
  public AssetId: number = 0;
  public AssetName: string = "";
  public AssetTypeId: number;
  public Description: string = "";
  public FileName: string = "";
  public FullPath: string = "";

  constructor(assetId: number, assetName: string, assetTypeId: number, description: string, fileName: string, fullpath: string) {
    this.AssetId = assetId;
    this.AssetName = assetName;
    this.AssetTypeId = assetTypeId;
    this.Description = description;
    this.FileName = fileName;
    this.FullPath = fullpath;
  }
}
