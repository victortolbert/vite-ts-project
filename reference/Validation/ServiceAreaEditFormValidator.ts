import { injectable } from "inversify";
import { IValidatorList } from "@ExemplarInterfaces/IValidatorList";
import { ServiceArea } from "@ExemplarViewModels/ServiceArea";

@injectable()
export class EditFormValidator implements IValidatorList<ServiceArea> {

  Validate(model: ServiceArea): Array<string> {
    let validator = new Array<string>();
    console.log("Validation Model: " + JSON.stringify(model));

    if (model.Name.length == 0) {
      validator.push("Please key in a service area name.");
    }

    if (model.StreetAddress.length == 0) {
      validator.push("Please key in a street address.");
    }

    if (model.City.length == 0) {
      validator.push("Please key in a city name.");
    }


    if (model.PostalCode.length == 0) {
      validator.push("Please key in a postal code.");
    }

    if (model.Radius > 100) {
      validator.push("Radius should be within 100 miles.");
    }

    if (model.IsActive === null) {
      validator.push("Please indicate if this service area is active.");
    }

    if (model.IsCatastropheArea === null) {
      validator.push("Please indicate if this is catastrophe area.");
    }

    //Check for name uniqueness

    return validator;
  }
}
