// export interface Outbuilding {
//   id?
//   name?
//   damaged?: boolean
//   interiorDamageDescription?
//   elevationDamageDescription?
//   roofDamageDescription?
// }
export class Outbuilding {
  public Id = 0
  public Type = ''
  public OtherType = ''
  public Damaged: boolean | null = false
  public InteriorDamageDescription = ''
  public ElevationDamageDescription = ''
  public RoofDamageDescription = ''
  public CreatedOn!: Date
  public LastModifiedOn!: Date
  public PropertyInspectionFormId: number | null = null
}
