export interface IValidator<T> {
    validate(model: T | any): string
}
