import { IEditable } from "../Interfaces/IEditable";
import { ExemplarFeatureFunction } from "./ExemplarFeatureFunction";

export class ExemplarRole implements IEditable {
  public Id: number | null = null;
  public Description: string = '';
  public Name: string = '';
  public IsActive: boolean = false;
  public IsSystemRole: boolean = false;
  public ExemplarRoleFeatureFunctionsIds: Array<number> = [];
  public RowVersion: Array<number>; // Not in table, but required by IEditable
  public CreatedBy: number | null; // Not in table, but required by IEditable
}
