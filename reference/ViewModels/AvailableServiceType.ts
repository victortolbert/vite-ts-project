import { IEditable } from "@ExemplarInterfaces/IEditable";

export class AvailableServiceType implements IEditable {
  public CreatedBy: number | null = null;
  public CreatedByUser: string = '';
  public CreatedOn: Date = new Date();
  public CreatedOnString: string = this.CreatedOn.toString().split(' ')[0];
  public CustomerDescription: string = '';
  public Duration: number = 0;
  public HasDescription: boolean | null = null;
  public HasQuantity: boolean | null = null;
  public Id: number | null = null;
  public IsActive: boolean | null = null;
  public Name: string = '';
  public OnExternalForm: boolean | null = null;
  public ParentId: number = 0;
  public RequiresDate: boolean | null = null;
  public RequiresPhone: boolean | null = null;
  public ShortName: string = '';
  public ShowCalendar: boolean | null = null;
  public RowVersion: Array<number> = [];
}
