import { ResponseType } from '@ExemplarEnums/ResponseType'
import { error } from 'toastr'

export class ApiResponse {
  public resultText: string
  public errors: Array<string>
  public result: ResponseType
  public showMore: boolean
  public totalCount: number
  public model: any
  static errorMessage = 'Were sorry! An error has occurred and has been sent to our I.T. team. If problem persists, please notifiy us by clicking the Report Bug link.  '

  public static Parse(data: any, status: number): ApiResponse {
    const apiResponse: ApiResponse = new ApiResponse()
    let result: any
    let resultText = ''
    let errors: any
    switch (Number(status)) {
      case 200:
        result = ResponseType.Success
        resultText = '200'
        break
      case 201:
        result = ResponseType.Success
        resultText = '201'
        break
      case 204:
        result = ResponseType.Success
        resultText = '204'
        break
      case 400:
        result = ResponseType.BadRequest
        resultText = data
        errors = data.errors
        data = null
        break
      case 401:
        result = ResponseType.Unauthorized
        resultText = data
        data = null
        break
      case 404:
        resultText = data
        if (resultText === '')
          result = ResponseType.BadRequest
        else
          result = ResponseType.NoRecords
        data = null
        break
      case 409:
        result = ResponseType.ConcurencyConflict
        resultText = data
        data = null
        break
      case 418:
        result = ResponseType.FailedValidation
        resultText = data
        data = null
        break
      case 500:
        result = ResponseType.Error
        resultText = '500'
        break
    }
    apiResponse.result = result
    apiResponse.resultText = resultText
    apiResponse.model = data ? data : null
    apiResponse.errors = errors
    console.log(`apiResponse: ${JSON.stringify(apiResponse)}`)
    console.dir(apiResponse)
    return apiResponse
  }
}
