export class AssetExportItem {
  Id: number | null = null;
  AssetId: number | null = null;
  AssetExportId: number = -1;
  AssetTypeId: number = 0;
  AssetType: string = "";
  ExportAttempts: number = 0;
  ExportedDate: Date = new Date();
  IsExported: boolean = false;
  LastStatusMessage: string = "";
}
