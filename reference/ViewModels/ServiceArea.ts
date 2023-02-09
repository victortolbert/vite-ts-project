import { IEditable } from "../Interfaces/IEditable";

export class ServiceArea implements IEditable {
  public AddressLatitude: number = 0;
  public AddressLongitude: number = 0;
  public City: string = ''
  public CreatedBy: number | null = null;
  public CreatedOn: Date;
  public Id: number | null = null;
  public IsActive: boolean = false;
  public IsCatastropheArea: boolean = false;
  public IsDeleted: boolean = false;
  public Latitude: string = ''
  public Longitude: string = ''
  public Name: string = ''
  public PostalCode: string = ''
  public Radius: number = 0;
  public ServiceRegionId: number = 11;
  public State: string = '';
  public StateId: number | null = null;
  public StreetAddress: string = ''
  public TimeZoneId: number = 1;
  public RowVersion: Array<number> = [];
}
