// import { AssetField } from "."

export class FieldAsset {
  public Id: number = 0
  public FullPath: string = ''
  public AssetFieldId: number
  public AssetName: string = ''
  public IsSelected: boolean = false
  public HasMetaData: boolean
  public Order: number = 0
  public PageOrder: number = 0

  constructor(Id: number, FullPath: string, AssetFieldId: number, AssetName: string, HasMetaData: boolean, Order: number) {
    this.Id = Id
    this.FullPath = FullPath
    this.AssetFieldId = AssetFieldId
    this.AssetName = AssetName
    this.HasMetaData = HasMetaData
    this.Order = Order
  }
}
