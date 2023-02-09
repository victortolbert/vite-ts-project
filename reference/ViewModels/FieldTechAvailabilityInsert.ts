import { FieldTechAvailability } from "./FieldTechAvailability"
import { NotAvailableDates } from "./NotAvailableDates"
import { AvailableDates } from "./AvailableDates"

export class FieldTechAvailabilityInsert {

  public CreatedBy: number = 0;

  public EndDate: string = "";

  public FieldTechUserId: number = 0;

  public IsAvailable: boolean = false;

  public ServiceAreaId: number = 0;

  public StartDate: string = "";

  public AvailableDates: Array<AvailableDates> = [];

}
