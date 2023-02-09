import { injectable } from "inversify";
import { IValidatorListAsync } from "@ExemplarInterfaces/IValidatorListAsync";
import { Customer } from "@ExemplarViewModels/Customer";
import DataAccess from "@ExemplarCommon/DataAccess";
import { CustomerRoute } from "@ExemplarRoutes/CustomerRoute";


@injectable()
export class EditFormValidator implements IValidatorListAsync<Customer> {

  exemplarApiUrl: string = <string>$("#exemplarApiUrl").val();
  accessToken: string = <string>$("#accessToken").val();
  dataAccess: DataAccess = new DataAccess(this.accessToken);
  route: CustomerRoute = new CustomerRoute(this.exemplarApiUrl);
  customerNameExists: boolean = false;

  async Validate(model: Customer): Promise<Array<string>> {
    let validator = new Array<string>();
    console.log("Validation Model: " + JSON.stringify(model));


    if (model.IsActive === null) {
      validator.push("Please indicate if this customer is active.");
    }

    if (model.FullName.length == 0) {
      validator.push("Please key in a full customer name.");
    }
    else if (model.FullName != model.previousName) {
      await this.checkCustomerNameForUniqueness(model);

      if (this.customerNameExists) {
        validator.push("Customer name must be unique.");
      }
    }

    if (model.ShortName.length == 0) {
      validator.push("Please key in a short customer name.");
    }

    if (model.OnExternalForm === null) {
      validator.push("Please indicate if this customer should appear on the External Claim form.");
    }

    if (model.AdjusterReceivesBill === null) {
      validator.push("Please indicate if the adjuster receives the bill.");
    }

    if (model.HasCustomAssetEmail === null) {
      validator.push("Please indicate if this has a custom email asset.");
    }

    return validator;
  }
  async checkCustomerNameForUniqueness(model: Customer) {
    let entityId = model.Id === null ? 0 : Number(model.Id);
    var url = this.route.getCustomerByName(entityId, model.FullName);
    await this.dataAccess.GetAsync(url, (data: any) => {
      this.customerNameExists = data.ExistingValueFound;
    });
  }
}
