import { injectable } from "inversify";
import { IValidatorListAsync } from "@ExemplarInterfaces/IValidatorListAsync";
import { ServiceRegion } from "@ExemplarViewModels/ServiceRegion";
import DataAccess from "@ExemplarCommon/DataAccess";
import { ApiDefaultRoute } from "@ExemplarRoutes/ApiDefaultRoute";
import { ServiceRegionRoute } from "@ExemplarRoutes/ServiceRegionRoute";

@injectable()
export class EditFormValidator implements IValidatorListAsync<ServiceRegion> {


  exemplarApiUrl: string = <string>$("#exemplarApiUrl").val();
  accessToken: string = <string>$("#accessToken").val();
  dataAccess: DataAccess = new DataAccess(this.accessToken);
  serviceRegionRoute: ServiceRegionRoute = new ServiceRegionRoute(this.exemplarApiUrl);
  serviceRegionNameExists: boolean = false;

  async Validate(model: ServiceRegion): Promise<Array<string>> {

    let validator = new Array<string>();
    console.log("Validation Model: " + JSON.stringify(model));
    let previousModel = new ServiceRegion();
    previousModel = JSON.parse(model.previousModelJson);


    if (model.Name.length == 0) {
      validator.push("Please key in a territory name.");
    }
    else if (model.Name != previousModel.Name) {
      await this.checkServiceRegionNameForUniqueness(model);

      if (this.serviceRegionNameExists) {
        validator.push("Territory name must be unique.");
      }
    }

    if (model.IsActive === null) {
      validator.push("Please indicate if this service region is active.");
    }

    if (model.IsCatastropheRegion === null) {
      validator.push("Please indicate if this is catastrophe region.");
    }

    return new Promise<Array<string>>((resolve) => {
      resolve(validator);
    });
  }

  async checkServiceRegionNameForUniqueness(model: ServiceRegion) {

    let entityId = model.Id === null ? 0 : Number(model.Id);
    var url = this.serviceRegionRoute.ReturnServiceRegionExistsBool(entityId, model.Name);
    await this.dataAccess.GetAsync(url, (data: any) => {
      this.serviceRegionNameExists = data.ExistingValueFound;
    });
  }

}
