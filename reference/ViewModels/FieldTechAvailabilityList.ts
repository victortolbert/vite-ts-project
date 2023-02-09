import { FieldTechAvailability } from "./FieldTechAvailability";
export class FieldTechAvailabilityList {

  public Id: number = 0;

  public ServiceTechUserId: number = 0;

  public ServiceTechName: string = "";

  public ServiceAreaId: number = 0;

  public ServiceAreaName: string = "";

  public FieldTechAvailability: Array<FieldTechAvailability> = [];
}
