import { ApiClient, ApiResponse, GlobalEvents, ResponseType, ToastrHelper } from '@/types'
import { GlobalEventBus } from '@/event-bus'
// import { success } from 'toastr'

export class DataAccess {
  accessToken: string
  badRequest = 'Record not found.'
  errorMessage =
    'An error has occurred and has been sent to our I.T. team. If problem persists, please notifiy us. We are sorry for the inconvenience.'
  homeRoute = '/Authorization/Logout'

  constructor(_accessToken: string) {
    this.accessToken = _accessToken
  }

  async GetAsync(route: string, successCallback: any, errorCallback: any = null) {
    const apiResult = await ApiClient.Get(route, this.accessToken)
    this.HandleResult(apiResult, successCallback, errorCallback)
  }

  async PostAsync(
    route: string,
    model: any,
    successCallback: any = false,
    errorCallback: any = false
  ) {
    const apiResult: ApiResponse = await ApiClient.Post(route, model, this.accessToken)
    this.HandleResult(apiResult, successCallback, errorCallback)
  }

  async PutAsync(route: string, model: any, successCallback: any, errorCallback: any) {
    const apiResult = await ApiClient.Put(route, model, this.accessToken)
    this.HandleResult(apiResult, successCallback, errorCallback)
  }

  HandleResult(
    apiResponse: ApiResponse,
    successCallback: any,
    errorCallback: any = null
  ) {
    switch (apiResponse.result) {
      case ResponseType.Success:
        if (
          apiResponse.model &&
          apiResponse.model.Result != null &&
          !apiResponse.model.Result
        ) {
          ToastrHelper.DisplayToastWarning(
            apiResponse.model.ResultText,
            'Error Encountered'
          )
        } else {
          successCallback(apiResponse.model)
        }
        break

      case ResponseType.Unauthorized:
        window.location.href = this.homeRoute
        GlobalEventBus.$emit(GlobalEvents.Unauthorized);
        break

      case ResponseType.BadRequest:
        ToastrHelper.DisplayToastError(apiResponse.resultText, 'Bad Request')

        if (errorCallback) {
          errorCallback(apiResponse)
        }
        break

      case ResponseType.NoRecords:
        ToastrHelper.DisplayToastWarning(apiResponse.resultText, 'No Record Found.')

        if (errorCallback) {
          errorCallback(apiResponse)
        }
        break

      case ResponseType.Error:
        ToastrHelper.DisplayToastError(this.errorMessage, 'System Error')

        if (errorCallback) {
          errorCallback(apiResponse.model)
        }
        break

      case ResponseType.ConcurencyConflict:
        ToastrHelper.DisplayToastError(
          'The record you are modifying has changed since you began. Please make your changes again.',
          'Concurrency Conflict'
        )

        if (errorCallback) {
          errorCallback(apiResponse.model)
        }
        break
    }
  }
}
