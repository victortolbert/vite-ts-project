import { injectable } from "inversify";
import { IValidatorList } from "@ExemplarInterfaces/IValidatorList";
import { AvailableServiceType } from "@ExemplarViewModels/AvailableServiceType";

@injectable()
export class EditFormValidator implements IValidatorList<AvailableServiceType> {

  Validate(model: AvailableServiceType): Array<string> {
    let validator = new Array<string>();
    console.log("Validation Model: " + JSON.stringify(model));

    if (model.Name.length == 0) {
      validator.push("Please Key in a Service Type Name.");
    }

    if (model.HasDescription === null) {
      validator.push("Please indicate if this service type has a description.");
    }

    if (model.HasQuantity === null) {
      validator.push("Please indicate if this service type has a quantity.");
    }

    if (model.RequiresDate === null) {
      validator.push("Please indicate if this service type requires a date.");
    }

    if (model.OnExternalForm === null) {
      validator.push("Please indicate if this service type should appear on the External Claim form.");
    }

    if (model.IsActive === null) {
      validator.push("Please indicate if this service type is active.");
    }

    return validator;
  }
}
