export class ApiDefaultRoute {
  public uri = ''

  constructor(url: string, endpoint: string) {
    this.uri = url + endpoint
  }

  Insert(): any {
    return `${this.uri}`
  }

  Update(id: number, updatedBy: number): any {
    return `${this.uri}/${id}?UpdatedBy=${updatedBy}`
  }

  Delete(id: number): any {
    return `${this.uri}/${id}`
  }

  DeleteBatch(): any {
    return `${this.uri}`
  }

  Get(id: number): string {
    return `${this.uri}/${id}`
  }
}
