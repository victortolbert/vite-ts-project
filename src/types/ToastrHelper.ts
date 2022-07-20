import { ToastMessageType } from '@/types'

export class ToastrHelper {
  private static DisplayToast(
    toastMessageType: ToastMessageType,
    message: string,
    title: string,
    showClose: boolean = false
  ) {
    // toastr.options.closeButton = showClose
    // toastr.remove()
    // toastr.clear

    switch (toastMessageType) {
      case ToastMessageType.Error: {
        // toastr.options.closeButton = showClose

        // toastr.options.timeOut = 0
        // toastr.options.extendedTimeOut = 0
        // toastr.options.positionClass = 'toast-bottom-left'
        // toastr.error(message, title)
        break
      }
      case ToastMessageType.Success: {
        // toastr.options.timeOut = 4000
        // toastr.options.positionClass = 'toast-bottom-left'
        // toastr.success(message, title)
        break
      }
      case ToastMessageType.Warning: {
        // toastr.options.timeOut = 4000

        // toastr.options.positionClass = 'toast-bottom-left'
        // toastr.warning(message, title)
        break
      }
    }
  }

  public static DisplayToastError(message: string, title: string = '') {
    this.DisplayToast(ToastMessageType.Error, message, title, true)
  }

  public static DisplayToastWarning(message: string, title: string = '') {
    this.DisplayToast(ToastMessageType.Warning, message, title)
  }

  public static DisplayToastSuccess(message: string, title: string = '') {
    this.DisplayToast(ToastMessageType.Success, message, title)
  }
}
