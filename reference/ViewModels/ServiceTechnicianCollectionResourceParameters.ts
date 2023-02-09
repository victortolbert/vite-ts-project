import { ServiceTechnicianGridEnum } from "@ExemplarEnums/ServiceTechnicianGridEnum";
import { CollectionTypeEnum } from "@ExemplarEnums/CollectionTypeEnum";

export class ServiceTechnicianCollectionResourceParameters {

  public SearchQuery: string = "";

  public FilterQuery: string = "";

  public GridType: ServiceTechnicianGridEnum;

  public ShowInactive: boolean = false;

  public RegionIds: string = "";

  public AreaIds: string = "";

  public CollectionType: CollectionTypeEnum = 0;

}
