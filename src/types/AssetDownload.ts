export class AssetDownload {
  public AssetName = ''

  public FileName = ''

  public FullPath = ''

  constructor(assetName: string, fileName: string, fullPath: string) {
    this.AssetName = assetName
    this.FileName = fileName
    this.FullPath = fullPath
  }
}
