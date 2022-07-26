export class AssetUpload {
  public Id = 0
  public AssetName: string
  public FileName: string

  constructor(assetName: string, fileName: string) {
    this.AssetName = assetName
    this.FileName = fileName
  }
}
