import { IEditable } from "../Interfaces/IEditable";

export class ExemplarFeatureFunction implements IEditable {
  public Id: number | null = null;
  public Name: string = '';
  public ExemplarFeature: string = '';
  public ExemplarFeatureId: number | null = null;
  public Description: string = '';
  public IsActive: boolean = false;
  public RowVersion: Array<number>; // Not in table, but required by IEditable
  public CreatedBy: number | null; // Not in table, but required by IEditable
  public previousName: string = '';
}
