import { IEditable } from "../Interfaces/IEditable";

export class AssetExport /*implements IEditable*/ {
  public Id: number | null = null;
  public AssetsToExportCount: number = 0;
  public ExportRunTime: Date;
  public LastStatusMessage: string = "";
  public ProjectId: number = 0;
  public TransactionId: string = "";
  public VendorType: string = "";
  public AssetExportItems: Array<any> = [];
}
