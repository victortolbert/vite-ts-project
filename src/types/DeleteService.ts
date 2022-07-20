import { ApiClient, ResponseType } from '.'

export class DeleteService {
  data: any
  promptText: string = ''
  open: boolean = false
  busy: boolean = false

  ConfirmDelete(promptText: string, data: any) {
    this.promptText = promptText
    this.data = data
    this.open = true
    this.busy = false
  }

  async Delete(route: any, model: any, accessToken: string = '', successCallback: any = null, errorCallback: any = null) {
    console.log('Delete: ' + route)
    this.busy = true
    var apiResult = await ApiClient.Delete(route, accessToken)

    switch (apiResult.result) {
      case ResponseType.Success:
        if (successCallback) {
          successCallback(model)
        }
        this.busy = false
        this.open = false
        // toastr.success('Record(s) Deleted.')
        break
      case ResponseType.Error:
        // toastr.error(ApiResponse.errorMessage, 'Database Error')
        if (errorCallback) {
          errorCallback()
        }
        this.busy = false
        this.open = false
        break
      case ResponseType.Unauthorized:
        // toastr.error('You are not Authorized.')
        break
    }
  }
  async DeleteBatch(url: Array<string>, successCallback: any, accessToken: string = '') {
    console.log('DeleteBatch accessToken : ' + accessToken)
    for (const route of url) {
      await ApiClient.DeleteBatch(route, successCallback, accessToken)
    }
    successCallback(url)
  }
}
