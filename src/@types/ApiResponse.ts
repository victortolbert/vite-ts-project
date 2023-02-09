import { ResponseType } from '~/@types';

export class ApiResponse {
  public resultText: string;
  public result: ResponseType;
  public showMore: boolean;
  public totalCount: number;
  public model: any;
  static errorMessage =
    'Were sorry! An error has occurred and has been sent to our I.T. team. If problem persists, please notify us by clicking the Report Bug link.';

  public static Parse(data: any, status: number): ApiResponse {
    let apiResponse: ApiResponse = new ApiResponse();
    let result: any;
    let resultText: string = '';

    switch (Number(status)) {
      case 200:
        result = ResponseType.Success;
        resultText = '200';
        break;
      case 201:
        result = ResponseType.Success;
        resultText = '201';
        break;
      case 204:
        result = ResponseType.Success;
        resultText = '204';
        break;
      case 400:
        result = ResponseType.BadRequest;
        resultText = data;
        data = null;
        break;
      case 401:
        result = ResponseType.Unauthorized;
        resultText = data;
        data = null;
        break;
      case 404:
        result = ResponseType.BadRequest;
        resultText = data;
        data = null;
        break;
      case 500:
        result = ResponseType.Error;
        resultText = '500';
        break;
    }
    apiResponse.result = result;
    apiResponse.resultText = resultText;
    apiResponse.model = data ? data : null;
    console.log('apiResponse: ' + JSON.stringify(apiResponse));
    return apiResponse;
  }
}
