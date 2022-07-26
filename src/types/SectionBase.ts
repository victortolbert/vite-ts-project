import { ApiClient, AssetField, PageBase, ResponseType, ToastrHelper } from '.'
import type { ApiResponse } from '.'

export class SectionBase<T> extends PageBase<T> {
  northProp = ''
  southProp = ''
  eastProp = ''
  westProp = ''
  assetFieldEnum: any = AssetField
  ExemplarApiUrl = ''

  async EmailAsset(route: string, model: any) {
    const apiResult: ApiResponse = await ApiClient.Post(route, model, this.accessToken)
    switch (apiResult.result) {
      case ResponseType.Success:
        ToastrHelper.DisplayToastSuccess('Asset(s) Emailed')
        break
      case ResponseType.BadRequest:
        ToastrHelper.DisplayToastError(apiResult.resultText, 'Bad Request')
        break
      case ResponseType.Error:
        ToastrHelper.DisplayToastError('A problem has occurred. Please try again')
        break
    }
  }

  async Delete(route: any, model: any, successCallback: any = null, errorCallback: any = null) {
    const apiResult = await ApiClient.Delete(route, this.accessToken)
    switch (apiResult.result) {
      case ResponseType.Success:
        if (successCallback)
          successCallback(model)
        break
      case ResponseType.Error:
        // toastr.error(ApiResponse.errorMessage, 'Database Error')

        if (errorCallback)
          errorCallback()
        break
    }
  }
}
