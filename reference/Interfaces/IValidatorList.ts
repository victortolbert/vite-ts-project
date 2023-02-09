export interface IValidatorList<T> {
  Validate(model: T | any): Array<string>
}
