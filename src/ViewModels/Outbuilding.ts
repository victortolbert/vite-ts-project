export class Outbuilding {

  public Id: number = 0;

  public Type: string = "";

  public OtherType: string = "";

  public Damaged: boolean | null = false;

  public InteriorDamageDescription: string = "";

  public ElevationDamageDescription: string = "";

  public RoofDamageDescription: string = "";

  public CreatedOn: Date;

  public LastModifiedOn: Date;

  public PropertyInspectionFormId: number | null = null;
}
