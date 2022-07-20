export interface IDeleteBatchService<T> {
  routes: Array<string>
  prompt: string
  title: string
  succcessMessage: string
  model: any
  successCallback(): void
  errorCallback(): void
  init(model: T, successCallback: void, errorCallback: void | null, ExemplarApiUrl: string): void
}
