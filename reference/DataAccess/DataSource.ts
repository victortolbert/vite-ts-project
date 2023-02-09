import _ from 'lodash'
import type { Method } from 'axios'
// import { AxiosRequestConfig, AxiosResponse, Method } from 'axios'
import { ApiClient } from './ApiClient'
import { ResponseType } from './ResponseType'
import type { ApiResponse } from './ApiResponse'

export default class DataSource {
  // TODO: Look into integrating with DataAccess
  accessToken?: string
  data: any
  dataKeys: string | Array<string> = ''
  method: Method = 'get'
  params: any
  route = ''
  status: number | undefined

  static getDataByKeys(data: any, keys: string | Array<string> | ((data: Array<any>) => any)): any {
    if (typeof keys === 'function')
      return keys(data)
    const path = Array.isArray(keys) ? keys : keys.split('.')
    if (data && path.length)
      return DataSource.getDataByKeys(data[path[0]], path.slice(1))
    return data
  }

  constructor(
    route: string,
    method?: Method,
    params?: any,
    dataKeys?: string | Array<string>,
    accessToken?: string) {
    this.route = route
    this.method = method || 'get'
    this.params = _.cloneDeep(params)
    this.dataKeys = dataKeys || ''
    this.accessToken = accessToken
  }

  request(
    options?: { accessToken?: string, method?: Method, params?: any, route?: string, routeParams?: any },
    successCallback?: (response: ApiResponse) => void,
    errorCallback?: (response: ApiResponse) => void): Promise<ApiResponse | void> | undefined {
    const route = (options || {}).route || this.route
    const method = (options || {}).method || this.method
    const token = (options || {}).accessToken || this.accessToken
    if (!route)
      // eslint-disable-next-line no-throw-literal
      throw 'Request requires a route.'
    let url = route
    for (const param in (options || {}).routeParams)
      url = url.replace(`{${param}}`, options!.routeParams[param])

    const data = Object.assign(this.params || {}, (options || {}).params)

    if ((method === 'get' || method === 'GET') && data) {
      const queryParams = Object.keys(data).map((key: string) => `${key}=${data[key]}`).join('&')
      url = `${url}${url.includes('?') ? '&' : '?'}${queryParams}`
    }

    switch (method) {
      case 'delete':
      case 'DELETE':
        return ApiClient.Delete(url, token, data).then((response: ApiResponse) => this.responseHandler(response, successCallback, errorCallback))
      case 'get':
      case 'GET':
        return ApiClient.Get(url, token).then((response: ApiResponse) => this.responseHandler(response, successCallback, errorCallback))
      case 'patch':
      case 'PATCH':
        return ApiClient.Patch(url, data, token).then((response: ApiResponse) => this.responseHandler(response, successCallback, errorCallback))
      case 'post':
      case 'POST':
        return ApiClient.Post(url, data, token).then((response: ApiResponse) => this.responseHandler(response, successCallback, errorCallback))
      case 'put':
      case 'PUT':
        return ApiClient.Put(url, data, token).then((response: ApiResponse) => this.responseHandler(response, successCallback, errorCallback))
      // eslint-disable-next-line no-useless-return
      default: return
    }
  }

  responseHandler(
    response: ApiResponse,
    successCallback?: (response: ApiResponse) => void,
    errorCallback?: (response: ApiResponse) => void): ApiResponse | void {
    if (response.result === ResponseType.Success) {
      this.data = this.dataKeys
        ? DataSource.getDataByKeys(response.model, this.dataKeys)
        : response.model
      typeof successCallback === 'function'
        && successCallback(response)
      return response
    }
    else {
      typeof errorCallback === 'function'
        && errorCallback(response)
      return response
    }
  }
}
