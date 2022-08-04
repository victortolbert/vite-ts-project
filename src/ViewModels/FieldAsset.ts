import { AssetFieldEnum } from "./Enums/AssetFieldEnum";
export class FieldAsset {
  public Id: number = 0;
  public FullPath: string = "";
  public AssetFieldId: number;
  public AssetName: string = "";
  public Description: string = "";
  public IsSelected: boolean = false;
  public HasMetaData: boolean;
  public Order: number = 0;
  public PageOrder: number = 0;
  constructor(Id: number, FullPath: string, AssetFieldId: number, AssetName: string, Description: string, HasMetaData: boolean, Order: number) {
    this.Id = Id;
    this.FullPath = FullPath;
    this.AssetFieldId = AssetFieldId;
    this.AssetName = AssetName;
    this.Description = Description;
    this.HasMetaData = HasMetaData;
    this.Order = Order;
  }
}
