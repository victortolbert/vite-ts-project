import { injectable, inject } from "inversify";
import { FieldTechAvailability } from "./ViewModels/FieldTechAvailability";
import { IDeleteService } from "@ExemplarServices/IDeleteService";
import { ApiDefaultRoute } from "@ExemplarRoutes/ApiDefaultRoute";

@injectable()
export class FieldTechAvailabilityDeleteService implements IDeleteService<FieldTechAvailability> {
  route: string;
  prompt: string;
  succcessMessage: string;
  title: string;
  model: any;
  successCallback: any | null = null;
  errorCallback: any | null = null;

  init(model: FieldTechAvailability, deleteSuccessCallback: void, deleteErrorCallback: void, apiClient: string): void {
    let route: ApiDefaultRoute = new ApiDefaultRoute(apiClient, "FieldTechAvailabilities");
    this.prompt = "Are you sure you want to delete this Availability record?";
    this.title = `Delete Availability Record`;
    this.succcessMessage = "Availability record deleted.";

    this.route = route.Delete(model.Id);
    this.model = model;
    this.successCallback = deleteSuccessCallback;
    this.errorCallback = deleteErrorCallback;
  }
}
