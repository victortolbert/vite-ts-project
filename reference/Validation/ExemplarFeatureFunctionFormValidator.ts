import { injectable } from "inversify";
import { IValidatorListAsync } from "@ExemplarInterfaces/IValidatorListAsync";
import { ExemplarFeatureFunction } from "@ExemplarViewModels/ExemplarFeatureFunction";
import DataAccess from "@ExemplarCommon/DataAccess";
import { ExemplarFeatureFunctionRoute } from "@ExemplarRoutes/ExemplarFeatureFunctionRoute";


@injectable()
export class EditFormValidator implements IValidatorListAsync<ExemplarFeatureFunction> {

  exemplarApiUrl: string = <string>$("#exemplarApiUrl").val();
  accessToken: string = <string>$("#accessToken").val();
  dataAccess: DataAccess = new DataAccess(this.accessToken);
  route: ExemplarFeatureFunctionRoute = new ExemplarFeatureFunctionRoute(this.exemplarApiUrl);
  featureFunctionNameExists: boolean = false;

  async Validate(model: ExemplarFeatureFunction): Promise<Array<string>> {
    let validator = new Array<string>();
    console.log("Validation Model: " + JSON.stringify(model));


    if (model.IsActive === null) {
      validator.push("Please indicate if this feature function is active.");
    }

    if (model.Name.length == 0) {
      validator.push("Please key in a full feature funciton name.");
    }
    else if (model.Name != model.previousName) {
      await this.checkFeatureFunctionNameForUniqueness(model);

      if (this.featureFunctionNameExists) {
        validator.push("Feature function name must be unique.");
      }
    }

    if (model.ExemplarFeatureId === null) {
      validator.push("Please select an Exemplar Feature.")
    }

    return validator;
  }
  async checkFeatureFunctionNameForUniqueness(model: ExemplarFeatureFunction) {
    let entityId = model.Id === null ? 0 : Number(model.Id);
    var url = this.route.getExemplarFeatureFunctionByName(entityId, model.Name);
    await this.dataAccess.GetAsync(url, (data: any) => {
      this.featureFunctionNameExists = data.ExistingValueFound;
    });
  }
}
