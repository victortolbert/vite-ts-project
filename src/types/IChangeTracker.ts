export interface IChangeTracker<T> {
  createSnapshot(model: T | any): T
}
