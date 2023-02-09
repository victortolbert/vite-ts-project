import axios from 'axios';
import { ApiResponse } from '~/@types';
import * as qs from 'qs';

export class ApiClient {
  static Get = async (url: string, accessToken: string = '') => {
    console.log('Getting Data with Url: ' + url);
    let error: boolean = false;
    let config = {
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
    };
    let apiErrorResponse: ApiResponse = new ApiResponse();
    let axiosResponse: any = await axios
      .get(url, config)
      //  let axiosResponse: any = await axios.get(url)
      .catch((x) => {
        error = true;
        apiErrorResponse = ApiResponse.Parse(
          x.response.data,
          x.response.status,
        );
      });

    if (error) {
      return apiErrorResponse;
    } else {
      return ApiResponse.Parse(axiosResponse.data, axiosResponse.status);
    }
  };

  static DeleteBatch = async (
    url: string,
    successCallback: any,
    accessToken: string = '',
  ) => {
    console.log('Deleting Data with Url: ' + url);
    const options = {
      method: 'Delete',
      headers: { Authorization: 'Bearer ' + accessToken },
      url,
    };
    await axios(options);
  };

  static Post = async (url: string, data: any, accessToken: string = '') => {
    console.log(
      'Posting Data with Url: ' + url + '\n  Params: ' + JSON.stringify(data),
    );
    let apiErrorResponse: ApiResponse = new ApiResponse();
    let error: boolean = false;
    const options = {
      method: 'Post',
      headers: {
        'content-type': 'application/json charset=utf-8',
        Authorization: 'Bearer ' + accessToken,
      },
      data: JSON.stringify(data),
      url,
    };
    let axiosResponse: any = await axios(options).catch((x) => {
      error = true;
      console.log('headers: ' + JSON.stringify(x.response));
      apiErrorResponse = ApiResponse.Parse(x.response.data, x.response.status);
    });

    if (error) {
      console.log('apiErrorResponse: ' + +JSON.stringify(apiErrorResponse));
      return apiErrorResponse;
    } else {
      return ApiResponse.Parse(axiosResponse.data, axiosResponse.status);
    }
  };

  static Put = async (url: string, data: any, accessToken: string = '') => {
    // console.log('Updating Data with Url: ' + url + '\n  Params: ' + JSON.stringify(data))
    let error: boolean = false;
    let apiErrorResponse: ApiResponse = new ApiResponse();
    const options = {
      method: 'Put',
      headers: {
        'content-type': 'application/json charset=utf-8',
        Authorization: 'Bearer ' + accessToken,
      },
      data: JSON.stringify(data),
      url,
    };

    let apiResponse: any = await axios(options).catch((x) => {
      error = true;
      apiErrorResponse = ApiResponse.Parse(x.response.data, x.response.status);
    });
    if (error) {
      return apiErrorResponse;
    } else {
      return ApiResponse.Parse(apiResponse.data, apiResponse.status);
    }
  };

  static Patch = async (url: string, data: any, accessToken: string = '') => {
    //console.log('Updating Data with Url: ' + url + '\n  Params: ' + JSON.stringify(data))
    let error: boolean = false;
    let apiErrorResponse: ApiResponse = new ApiResponse();
    const options = {
      method: 'Patch',
      headers: {
        'content-type': 'application/json charset=utf-8',
        Authorization: 'Bearer ' + accessToken,
      },
      data: JSON.stringify(data),
      url,
    };

    let apiResponse: any = await axios(options).catch((x) => {
      error = true;
      apiErrorResponse = ApiResponse.Parse(x.response.data, x.response.status);
    });
    if (error) {
      return apiErrorResponse;
    } else {
      return ApiResponse.Parse(apiResponse.data, apiResponse.status);
    }
  };

  static Delete = async (url: string, accessToken: string = '') => {
    console.log('url: ' + url);
    let error: boolean = false;
    let apiErrorResponse: ApiResponse = new ApiResponse();

    let axiosResponse: any = await axios
      .delete(url, {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      })
      .catch((x) => {
        error = true;
        apiErrorResponse = ApiResponse.Parse(
          x.response.data,
          x.response.status,
        );
      });

    if (error) {
      return apiErrorResponse;
    } else {
      return ApiResponse.Parse(axiosResponse.data, axiosResponse.status);
    }
  };

  static ModalPost = async (url: string, model: any) => {
    const options = {
      method: 'Post',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(model),
      url,
    };
    return await axios(options);
  };
}
