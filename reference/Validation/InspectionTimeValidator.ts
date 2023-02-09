import { injectable } from "inversify";
import { IValidator } from "@ExemplarInterfaces/IValidator";

@injectable()
export class InspectionTimeValidator implements IValidator<String> {

  Validate(startTime: String): string {
    let validator = "";

    if (startTime == "0") {
      validator = "Please Select the inspection start time.";
      return validator;
    }
    return validator;
  }
}
