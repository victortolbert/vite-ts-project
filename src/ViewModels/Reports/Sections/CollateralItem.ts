export class CollateralItem {

  public Item: string | null = "";

  public Damaged: string | null = "";

  public Qty: string | null = "";

  public Length: string | null = "";

  public Material: string | null = "";

  public AdditionalNotes: string | null = "";

  constructor(item: string | null, damaged: string, qty: string, length: string, material: string, additionalNotes: string) {
    this.Item = item;
    this.Damaged = damaged;
    this.Qty = qty;
    this.Length = length;
    this.Material = material;
    this.AdditionalNotes = additionalNotes;
  }
}
