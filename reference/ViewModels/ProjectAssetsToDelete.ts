export class ProjectAssetsToDelete {
  public ProjectId: number = 0;
  public ProjectCreatedOn: string = "";
  public AssetDetail: Array<AssetDeleteDetail> = [];
}

export class AssetDeleteDetail {
  public AssetId: number = 0;
  public AssetFullPath: string = "";
}
