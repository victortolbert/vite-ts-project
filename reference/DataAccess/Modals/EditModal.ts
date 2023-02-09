import * as toastr from 'toastr'
import { isEqual, cloneDeep } from 'lodash'

import { ApiClient } from '@ExemplarDataAccess/ApiClient'
import { ResponseType } from '@ExemplarEnums/ResponseType'
// import { IChangeTracker } from '@ExemplarInterfaces/IChangeTracker'
import type { IValidator } from '@ExemplarInterfaces/IValidator'

export class EditModal<T> {
  // changeChecker!: IChangeTracker<T>
  modelValidator!: IValidator<T>
  data!: T | any
  originalModel: T
  open = false
  validator = ''
  title = ''
  showingItems = false
  busy = false
  showUnsavedChangesWarning = false
  noCloseOnBackdrop = true
  noCloseOnEsc = true
  disableSaveButton = true
  successCallback: any
  errorCallback: any
  errorMessage = 'Were sorry! An error has occurred and has been sent to our I.T. team. If problem persists, please notifiy us by clicking the Report Bug link.  '

  private isEdit = false

  constructor(successCallback: any, errorCallback: any, modelValidator: IValidator<T>) {
    this.successCallback = successCallback
    this.errorCallback = errorCallback
    this.modelValidator = modelValidator
  }

  showModal(model: T, isEdit: boolean) {
    this.originalModel = model
    this.busy = false
    this.isEdit = isEdit
    this.validator = ''
    this.data = model
    this.open = true
  }

  validate(): boolean {
    const message = this.modelValidator.Validate(this.data)
    if (message.length > 0) {
      console.log(' Model Failed validation....')
      this.validator = message
      return false
    } else {
      console.log(' Model Passed validation....')
      this.validator = ''
      return true
    }
  }

  sortString(text: string): string {
    return text.split('').sort().join('')
  }

  hasChanges(currentModel: T, showValidator = false): boolean {
    console.log(`this.originalModel: ${JSON.stringify(this.originalModel)}`)
    console.log(`this.currentModel: ${JSON.stringify(currentModel)}`)

    if (isEqual(this.sortString(JSON.stringify(currentModel)), this.sortString(JSON.stringify(this.originalModel)))) {
      if (showValidator)
        this.validator = 'No changes have been detected.'
      return false
    }
    else {
      console.log('Changes Detected')
      return true
    }
  }

  async Save(url: string, showToast = true, disposeData = true) {
    this.validator = ''

    if (!this.validate())
      return

    this.busy = true

    console.log(`Post URL: ${url}\n  Params: ${JSON.stringify(this.data)}`)

    try {
      const response: any = await ApiClient.Post(url, this.data)
      this.busy = false
      console.log(JSON.stringify(response.data))

      if (response.data.result === ResponseType.Success) {
        if (showToast)
          toastr.success(response.data.resultText)

        this.successCallback(response.data.model)
        if (disposeData)
          this.data = {}
      }
      if (response.data.result === ResponseType.Error) {
        toastr.error(response.data.resultText)
        if (this.errorCallback)
          this.errorCallback()
        this.open = false
        return false
      }
      if (response.data.result === ResponseType.FailedValidation)
        this.validator = response.data.resultText
      return false
    }
    catch (error) {
      toastr.error(this.errorMessage)
      this.open = false
      if (this.errorCallback)
        this.errorCallback()
    }
  }
}
