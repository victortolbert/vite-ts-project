export interface IValidator<T> {
  Validate(model: T | any): string
}
