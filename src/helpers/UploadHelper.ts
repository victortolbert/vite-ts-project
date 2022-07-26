export class UploadHelper {
  static saveUrl = '/PropertyInspection/Asset/UploadAsset'

  public static GetSaveUrl(): string {
    return this.saveUrl
  }

  public static GetAssetUrl(fullPath: string, imgPath: string, imgToken: string): string {
    const timeStamp: number = Date.now()
    return `${imgPath}${fullPath}${imgToken}&xyz=${timeStamp}`
  }
}
