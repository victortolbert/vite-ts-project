import { injectable } from "inversify";
import { IValidatorListAsync } from "@ExemplarInterfaces/IValidatorListAsync";
import { ExemplarFeature } from "@ExemplarViewModels/ExemplarFeature";
import DataAccess from "@ExemplarCommon/DataAccess";
import { ExemplarFeatureRoute } from "@ExemplarRoutes/ExemplarFeatureRoute";


@injectable()
export class EditFormValidator implements IValidatorListAsync<ExemplarFeature> {

  exemplarApiUrl: string = <string>$("#exemplarApiUrl").val();
  accessToken: string = <string>$("#accessToken").val();
  dataAccess: DataAccess = new DataAccess(this.accessToken);
  route: ExemplarFeatureRoute = new ExemplarFeatureRoute(this.exemplarApiUrl);
  featureNameExists: boolean = false;

  async Validate(model: ExemplarFeature): Promise<Array<string>> {
    let validator = new Array<string>();
    console.log("Validation Model: " + JSON.stringify(model));


    if (model.IsActive === null) {
      validator.push("Please indicate if this feature is active.");
    }

    if (model.Name.length == 0) {
      validator.push("Please key in a full feature name.");
    }
    else if (model.Name != model.previousName) {
      await this.checkFeatureNameForUniqueness(model);

      if (this.featureNameExists) {
        validator.push("Feature name must be unique.");
      }
    }

    return validator;
  }
  async checkFeatureNameForUniqueness(model: ExemplarFeature) {
    let entityId = model.Id === null ? 0 : Number(model.Id);
    var url = this.route.getExemplarFeatureByName(entityId, model.Name);
    await this.dataAccess.GetAsync(url, (data: any) => {
      this.featureNameExists = data.ExistingValueFound;
    });
  }
}
