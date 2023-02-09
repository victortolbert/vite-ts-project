export interface IValidatorListAsync<T> {
  Validate(model: T | any, ...args: any[]): Promise<Array<string>>
}
