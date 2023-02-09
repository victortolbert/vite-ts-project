import { IEditable } from "../Interfaces/IEditable";

export class Customer implements IEditable {
  public Id: number | null = null;
  public CreatedBy: number | null = null;
  public CreatedByName: string = '';
  public CreatedOn: Date;
  public AdjusterDirector: string = '';
  public AdjusterDirectorId: number | null = null;
  public AdjusterManager: string = '';
  public AdjusterManagerId: number | null = null;
  public AssestEmailReceipients: string = '';
  public AdjusterReceivesBill: boolean = false;
  public BillingContactId: number | null = null;
  public BillingContact: string = '';
  public BillingContactEmail: string = '';
  public City: string = '';
  public ClaimFormat: string = '';
  public Comments: string = ''
  public FullName: string = '';
  public HasCustomAssetEmail: boolean = false;
  public IsActive: boolean = false;
  public IsVip: boolean = false;
  public MaxMailSize: number = 0;
  public OnExternalForm: boolean = false;
  public ParentId: number | null = null;
  public PostalCode: string = '';
  public ShortName: string = '';
  public State: string = '';
  public StateId: number | null = null;
  public StreetAddress1: string = '';
  public StreetAddress2: string = '';
  public RowVersion: Array<number> = [];
  public HoverWalletId: number = 0;
  public previousName: string = '';

}
