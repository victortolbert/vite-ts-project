export class AssetDownload {

  public AssetName: string = "";

  public FileName: string = "";

  public FullPath: string = "";


  constructor(assetName: string, fileName: string, fullPath: string) {
    this.AssetName = assetName;
    this.FileName = fileName;
    this.FullPath = fullPath;
  }
}
