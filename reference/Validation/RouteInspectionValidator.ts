import { injectable } from "inversify";
import { Route } from "./../../AutoScheduler/ViewModels/Route";
import { IValidator } from "@ExemplarInterfaces/IValidator";

@injectable()
export class RouteInspectionValidator implements IValidator<Route> {

    Validate(model: Route): string {
        let validator = "";
        if (model.FieldTechId===0) {
            validator = "Please select a field technician for the route.";
        }
        return validator;
    }
}
