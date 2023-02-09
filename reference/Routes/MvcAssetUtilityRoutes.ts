export class MvcAssetUtilityRoutes {
  private endpoint = '/PropertyInspection/Asset/'

  // constructor(uri: string) {
  //    this.endpoint = uri + this.endpoint
  // }

  GetAssetDownload(projectNumber: string, assetDownloadModel: string): string {
    return `${this.endpoint}DownloadAsset?projectNumber=${projectNumber}&strAssets=${assetDownloadModel}`
  }

  GetAssetDownloadOpen(fullPath: string, assetName: string, createdOn: string): string {
    const encodedFullPath = encodeURIComponent(fullPath)
    const encodedAssetName = encodeURIComponent(assetName)
    const encodedCreatedOn = encodeURIComponent(createdOn)
    return (`${this.endpoint}DownloadOpenAsset?fullPath=${encodedFullPath}&assetName=${encodedAssetName}&createdOn=${encodedCreatedOn}`)
  }

  DeleteAssetImage(fullPath: string, assetId: number): string {
    const encodedFullPath = encodeURIComponent(fullPath)
    const encodedAssetId = encodeURIComponent(assetId)
    return (`${this.endpoint}DeleteAssetImage?fullPath=${encodedFullPath}&assetId=${encodedAssetId}`)
  }

  GetCreatePhotoFormRoute(photoForm: string): string {
    return `${this.endpoint}CreateNewPdf?photoForm=${photoForm}`
  }

  AssetUpload(imageDataUrl: string, fileName: string, assetFullPath: string): string {
    return `${this.endpoint}UploadAssetImage?imageDataUrl=${imageDataUrl}&fileName=${imageDataUrl}&assetFullPath=${assetFullPath}`
  }

  Insert(): any {
    return `${this.endpoint}`
  }

  GetAssetsToDelete(projectTake: number): string {
    return `${this.endpoint}DeleteAssetImage?projectTake=${projectTake}`
  }
}
