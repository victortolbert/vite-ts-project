import { IEditable } from "../Interfaces/IEditable";

export class User implements IEditable {
  public Id: number | null;
  public CreatedBy: number | null;
  public Comment: string | null = null;
  public CompanyUserId: Array<string> = [];
  public FirstName: string | null = null;
  public FullName: string | null = null
  public HaagCertificationNumber: string | null = null;
  public Initials: string | null = null;
  public IsActive: boolean = false;
  public IsHaagCertified: boolean | null = null;
  public IsIdentityUser: boolean | null = null;
  public IsInCollections: boolean = false;
  public LastName: string | null = null;
  public MailingAddress: string | null = null;
  public MailingCity: string | null = null;
  public MailingPostalCode: string | null = null;
  public MailingState: string | null = null;
  public MailingStateId: number | null = null;
  public MailingStreetAddress1: string | null = null;
  public MailingStreetAddress2: string | null = null;
  public ManagedAdjusterIds: Array<string> = [];
  public MiddleName: string | null = null;
  public PrimaryEmail: string = "";
  public PrimaryPhone: string | null = null;
  public PrimaryPhoneExt: string | null = null;
  public Role: string | null = null;
  public RoleId: number | null = null;
  public RowVersion: Array<number> = [];
  public SecondaryEmail: string | null = null;
  public SecondaryPhone: string | null = null;
  public ServiceCity: string | null = null;
  public ServicePostalCode: string | null = null;
  public ServiceState: string | null = null;
  public ServiceStateId: number | null = null;
  public ServiceStreetAddress1: string | null = null;
  public ServiceStreetAddress2: string | null = null;
  public SmsEmail: string | null = null;
  public UserType: string | null = null;
  public UserTypeId: number | null = null;
  public previousEmail: string | null = null;
}
