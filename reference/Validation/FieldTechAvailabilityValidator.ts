import { injectable } from "inversify";
import { FieldTechAvailabilityInsert } from "../ViewModels/FieldTechAvailabilityInsert";
import { IValidator } from "@ExemplarInterfaces/IValidator";
import { forEach } from "lodash";

@injectable()
export class FieldTechAvailabilityValidator implements IValidator<FieldTechAvailabilityInsert> {

  Validate(model: FieldTechAvailabilityInsert): string {
    let validator = "";

    if (model.ServiceAreaId == 0) {
      validator = "Please Select an Area.";
      return validator;
    }

    if (!model.StartDate) {
      validator = "Please enter a Start Date.";
      return validator;
    }

    forEach(model.AvailableDates, (item) => {
      var startDate = new Date(model.StartDate);
      var endDate = new Date(model.EndDate);
      console.log("startDate: " + startDate + "  endDate: " + endDate);

      if (model.IsAvailable) {
        if (item.IsAvailable && startDate >= item.StartDate && startDate <= item.EndDate) {
          validator = "Availability record exits within the selected date range.";
          return validator;
        }
      } else {

        if (!item.IsAvailable && model.ServiceAreaId == item.ServiceAreaId &&
          (startDate >= item.StartDate && startDate <= item.EndDate
            || endDate >= item.StartDate && endDate <= item.EndDate
            || startDate <= item.StartDate && endDate >= item.EndDate
          )) {
          //console.log("startDate >= " + item.StartDate + " and startDate <= " + item.EndDate);
          //console.log("endDate >= " + item.StartDate + " and endDate <= " + item.EndDate);
          //console.log("startDate <= " + item.StartDate + " and endDate >= " + item.EndDate);
          validator = "Unavailability record exits within the selected date range.";
          return validator;
        }
      }
    });

    if (!model.EndDate) {
      validator = "Please enter a End Date.";
      return validator;
    }

    if (Date.parse(model.StartDate) > Date.parse(model.EndDate)) {
      validator = "Start Date can not be after End Date.";
      return validator;
    }

    return validator;
  }
}
