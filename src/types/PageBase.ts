import { isEqual, cloneDeep } from 'lodash'
import { Component, Vue } from 'vue-property-decorator'
import {
  ApiClient,
  ApiResponse,
  DataAccess,
  DeleteService,
  IDeleteService,
  IDeleteBatchService,
  ResponseType,
  Roles,
  ToastrHelper
} from '@/types'

// import { GlobalEvents, GlobalEventBus } from '@ExemplarCommon/eventBus'

@Component
export class PageBase<T> extends Vue {
    authorized: boolean = true
    badRequest: string = 'Record not found.'
    className: string
    deleteSuccessCallBack: any
    deleteService: DeleteService = new DeleteService()
    deleteServiceInstance: IDeleteService<T>
    deleteBatchServiceInstance: IDeleteBatchService<T>
    error: boolean = false
    errorMessage: string = 'An error has occurred and has been sent to our I.T. team. If problem persists, please notifiy us. We are sorry for the inconvenience.'
    homeRoute: string = '/Authorization/Logout'
    originalModel: T | any
    ready: boolean = false
    showLoader: boolean = true
    showMore: boolean = false
    totalCount: number = 0
    validationMessage: string = ''
    unauthorized: boolean = false

    // View State Vars
    exemplarApiUrl: string = <string>$('#exemplarApiUrl').val()
    exemplarCoreUrl: string = <string>$('#exemplarCoreUrl').val()
    accessToken: string = <string>$('#accessToken').val()
    currentUserId: number = <number>$('#userId').val()
    roleId: number = <number>$('#roleId').val()
    roleName: string = <string>$('#roleName').val()
    viewStatePresent: boolean = false
    missingViewStateValues: Array<string> = new Array<string>()
    // End View State

    dataAccess: DataAccess = new DataAccess(this.accessToken)

    mounted() {
      this.ValidateViewState()
    }

    ConfirmBatchDelete(model: T, apiClient: string, deleteSuccessCallback: any, deleteErrorCallback: any = null) {
      this.deleteBatchServiceInstance.routes = new Array<string>()
      this.deleteBatchServiceInstance.init(model, deleteSuccessCallback, deleteErrorCallback ? deleteErrorCallback : this.DeleteErrorCallback, apiClient)
      this.deleteService.ConfirmDelete(this.deleteBatchServiceInstance.prompt, this.deleteBatchServiceInstance.model)
    }

    async DeleteBatchConfirmed() {
      this.deleteService.open = false
      this.deleteService.DeleteBatch(this.deleteBatchServiceInstance.routes, this.deleteBatchServiceInstance.successCallback, this.accessToken)
    }

    ConfirmDelete(model: T, deleteSuccessCallback: any, deleteErrorCallback: any = null) {
      this.deleteServiceInstance.init(model, deleteSuccessCallback, deleteErrorCallback ? deleteErrorCallback : this.DeleteErrorCallback, this.exemplarApiUrl)
      this.deleteService.ConfirmDelete(this.deleteServiceInstance.prompt, this.deleteServiceInstance.model)
    }

    async DeleteConfirmed() {
      this.deleteService.open = false
      this.deleteService.Delete(this.deleteServiceInstance.route, this.deleteServiceInstance.model, this.accessToken, this.deleteServiceInstance.successCallback)
    }

    onHide(event: any) {
      if (event.type === 'hide' && event.trigger === 'header-close') {
        event.preventDefault()
        this.deleteService.open = false
      }
    }

    DeleteErrorCallback() {
      this.deleteService.open = false
    }

    ValidateViewState() {
      this.missingViewStateValues = []
      if (!this.roleName) {
        this.missingViewStateValues.push('RoleName')
      }

      if (this.roleId==0) {
        this.missingViewStateValues.push('RoleId')
      }

      if (this.currentUserId==0) {
        this.missingViewStateValues.push('UserId')
      }
      if (!this.exemplarApiUrl) {
        this.missingViewStateValues.push('ExemplarApiUrl')
      }
      if (!this.exemplarCoreUrl) {
        this.missingViewStateValues.push('ExemplarCoreUrl')
      }
      if (!this.accessToken) {
        this.missingViewStateValues.push('AccessToken')
      }
      if (this.missingViewStateValues.length == 0) {
        this.viewStatePresent = true
      }
    }

    LogIn() {
      window.location.href = this.homeRoute
    }

    RoleCheck(roleId: number, permission: string): boolean {
        switch (permission) {
            case 'AutoSchedulerIndex':
                return [
                    Roles.Administrator.toString(),
                    Roles.AdminSupport.toString(),
                    Roles.Scheduler.toString(),
                    Roles.ServiceManager.toString(),
                    Roles.ServiceTech.toString(),
                    Roles.ServiceTech2.toString(),
                    Roles.ServiceDirector.toString()]
                    .includes(roleId.toString())
            case 'AutoSchedulerApprove':
                return [
                    Roles.Administrator.toString(),
                    Roles.AdminSupport.toString(),
                    Roles.Scheduler.toString(),
                    Roles.ServiceManager.toString(),
                    Roles.ServiceTech2.toString(),
                    Roles.ServiceDirector.toString()]
                    .includes(roleId.toString())
            default:
                return false
        }
    }

    async Insert(route: string, model: any, successCallback: any = false, errorCallback: any = false, toastMessage: string = '') {

       var apiResult: ApiResponse = await ApiClient.Post(route, model, this.accessToken)
       switch (apiResult.result) {
            case ResponseType.Success:
                if (apiResult.model.Result != null && !apiResult.model.Result) {
                    ToastrHelper.DisplayToastError(apiResult.model.ResultText, 'Error Encountered')
                } else {
                    if (toastMessage.length > 0) {
                        ToastrHelper.DisplayToastSuccess(toastMessage, 'Success!')
                    }
                    this.originalModel = cloneDeep(apiResult.model)
                    successCallback(apiResult.model)
                }
                break
            case ResponseType.BadRequest:
                ToastrHelper.DisplayToastError(apiResult.resultText, 'Bad Request')
                break
           case ResponseType.Unauthorized:
               if (errorCallback) {
                   errorCallback(apiResult.model)
               }
               ToastrHelper.DisplayToastError('You will be redirected to log back in now..', 'You are not Authorized.')
               window.location.href = this.homeRoute
               break
           case ResponseType.Error:
                ToastrHelper.DisplayToastError(this.errorMessage, 'Error Encountered')
                if (errorCallback) {
                    errorCallback()
                }
                break
        }
    }

    sortString(text: string): string {
    return text.split('').sort().join('')
    }

    hasChanges(currentModel: T, showToast: boolean = true): boolean {
        console.log('this.originalModel: ' + JSON.stringify(this.originalModel))
        console.log('this.currentModel: ' + JSON.stringify(currentModel))

        if (isEqual(this.sortString(JSON.stringify(currentModel)), this.sortString(JSON.stringify(this.originalModel)))) {
            console.log('No Changes')
            return false
        } else {
            console.log('Changes Detected')
            return true
        }
    }

    async Update(route: string, model: any, successCallback: any, errorCallback: any, toastMessage: string = '') {

        var apiResult = await ApiClient.Put(route, model, this.accessToken)
        switch (apiResult.result) {
            case ResponseType.Success:
                 this.originalModel = cloneDeep(model)

                if (toastMessage.length > 0) {
                    ToastrHelper.DisplayToastSuccess(toastMessage, 'Success!')
                }
                if (successCallback) {
                    successCallback(model)
                }
                break
            case ResponseType.Unauthorized:
                if (errorCallback) {
                    errorCallback(apiResult.model)
                }
                ToastrHelper.DisplayToastError('You will be redirected to log back in now..', 'You are not Authorized.')
                window.location.href = this.homeRoute
                break
            case ResponseType.BadRequest:
                ToastrHelper.DisplayToastError(this.badRequest, 'Bad Request')
                break
            case ResponseType.FailedValidation:
                if (errorCallback) {
                    errorCallback(apiResult.model)
                }
                break
            case ResponseType.Error:
                ToastrHelper.DisplayToastError(this.errorMessage, 'Database Error')
                if (errorCallback) {
                    errorCallback()
                }
                break
        }
    }

    async Patch(route: string, model: any, successCallback: any, errorCallback: any, toastMessage: string = '') {


        var apiResult = await ApiClient.Patch(route, model, this.accessToken)

        switch (apiResult.result) {
            case ResponseType.Success:
                this.originalModel = cloneDeep(model)

                if (toastMessage.length > 0) {
                    ToastrHelper.DisplayToastSuccess(toastMessage, 'Success!')
                }
                if (successCallback) {
                    successCallback(model)
                }
                break
            case ResponseType.BadRequest:
                ToastrHelper.DisplayToastError(this.badRequest, 'Bad Request')
                break
            case ResponseType.Error:
                ToastrHelper.DisplayToastError(this.errorMessage, 'Database Error')
                if (errorCallback) {
                    errorCallback()
                }
                break
        }
    }

    ValidateEmail(mail: string): boolean {
        let regexp = new RegExp(/^(([^<>()\[\]\\.,:\s@']+(\.[^<>()\[\]\\.,:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        return regexp.test(mail)
        }

    async GetModel(route: string, successCallback: any, errorCallback: any = null) {

        this.showLoader = true

        await this.dataAccess.GetAsync(route, (model: T) => {
            this.originalModel = cloneDeep(model)
            if (successCallback) {
                successCallback(model)
            }
        }, errorCallback)

        this.showLoader = false
    }
}
