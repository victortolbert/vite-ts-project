export class AssetDetails {
  public AssetId = 0
  public AssetName = ''
  public AssetTypeId: number
  public Description = ''
  public FileName = ''
  public FullPath = ''

  constructor(assetId: number, assetName: string, assetTypeId: number, description: string, fileName: string, fullpath: string) {
    this.AssetId = assetId
    this.AssetName = assetName
    this.AssetTypeId = assetTypeId
    this.Description = description
    this.FileName = fileName
    this.FullPath = fullpath
  }
}
