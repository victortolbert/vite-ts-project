export class CustomAsset {

  public AssetName: string = "";

  public FullPath: string = "";

  public ImageBase64String: string = "";

  public FileName: string = "";

  public AssetTypeId: number = 0;

  public CreatedOn: string = "";

  constructor(assetName: string, fileName: string, fullPath: string, assetTypeId: number, createdOn: string) {
    this.AssetName = assetName;
    this.FileName = fileName;
    this.FullPath = fullPath;
    this.AssetTypeId = assetTypeId;
    this.CreatedOn = createdOn;
  }
}
