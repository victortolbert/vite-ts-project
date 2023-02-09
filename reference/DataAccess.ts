import { ApiClient } from "@ExemplarDataAccess/ApiClient";
import { ApiResponse } from "@ExemplarDataAccess/ApiResponse";
import { ResponseType } from "@ExemplarEnums/ResponseType";
import { ToastrHelper } from "@ExemplarCommon/ToastrHelper";

export default class DataAccess {

  accessToken: string;

  badRequest: string = "Record not found.";

  errorMessage: string = "An error has occurred and has been sent to our I.T. team. If problem persists, please notifiy us. We are sorry for the inconvenience.";

  homeRoute: string = "/Authorization/Logout";

  constructor(_accessToken: string) {
    this.accessToken = _accessToken;
  }

  async GetAsync(route: string, successCallback: any, errorCallback: any = null) {

    var apiResult = await ApiClient.Get(route, this.accessToken);

    this.HandleResult(apiResult, successCallback, errorCallback)
  }

  async PostAsync(route: string, model: any, successCallback: any = false, errorCallback: any = false) {

    var apiResult: ApiResponse = await ApiClient.Post(route, model, this.accessToken);

    this.HandleResult(apiResult, successCallback, errorCallback)
  }

  async PutAsync(route: string, model: any, successCallback: any, errorCallback: any) {

    var apiResult = await ApiClient.Put(route, model, this.accessToken);
    this.HandleResult(apiResult, successCallback, errorCallback)
  }

  async DeleteAsync(route: string, model: any, successCallback: any, errorCallback: any = false) {

    var apiResult = await ApiClient.Delete(route, this.accessToken, model);
    this.HandleResult(apiResult, successCallback, errorCallback)
  }

  HandleResult(apiResponse: ApiResponse, successCallback: any, errorCallback: any = null, toastMessage: string = "") {
    switch (apiResponse.result) {

      case ResponseType.Success:

        if (apiResponse.model && apiResponse.model.Result != null && !apiResponse.model.Result) {
          ToastrHelper.DisplayToastWarning(apiResponse.model.ResultText, "Error Encountered");
        } else {
          if (successCallback != null) {
            successCallback(apiResponse.model);
          }
        }
        break;
      case ResponseType.Unauthorized:
        window.location.href = this.homeRoute;
        //GlobalEventBus.$emit(GlobalEvents.Unauthorized);
        break;
      case ResponseType.BadRequest:
        ToastrHelper.DisplayToastError(apiResponse.resultText, "Bad Request");
        if (errorCallback) {
          errorCallback(apiResponse);
        }
        break;
      case ResponseType.FailedValidation:
        if (errorCallback) {
          errorCallback(apiResponse);
        }
        break;
      case ResponseType.NoRecords:
        ToastrHelper.DisplayToastWarning(apiResponse.resultText, "No Record Found.");
        if (successCallback != null) {
          successCallback(apiResponse.model);
        }
        break;
      case ResponseType.Error:
        ToastrHelper.DisplayToastError(this.errorMessage, "System Error");
        if (errorCallback) {
          errorCallback(apiResponse.model);
        }
        break;
      case ResponseType.ConcurencyConflict:
        ToastrHelper.DisplayToastError("The record you are modifying has changed since you began. Please make your changes again.", "Concurrency Conflict");
        if (errorCallback) {
          errorCallback(apiResponse);
        }
        break;
    }
  }
}
