import { IEditable } from "../Interfaces/IEditable";

export class ServiceRegion implements IEditable {
  public Id: number | null = null;
  public CreatedBy: number | null = null;
  public CreatedByName: string = '';
  public CreatedOn: Date;
  public IsActive: boolean = false;
  public IsCatastropheRegion: boolean = false;
  public IsDeleted: boolean = false;
  public Name: string = ''
  public TerritoryLead: string = '';
  public TerritoryLeadId: number | null = null;
  public RegionManagers: string = '';
  public RowVersion: Array<number> = [];

  public previousName: string = '';
  public previousModelJson: string = '';
}
