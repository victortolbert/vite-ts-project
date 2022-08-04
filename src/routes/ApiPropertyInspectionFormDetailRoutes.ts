export class ApiPropertyInspectionFormDetailRoutes {
  private endpoint = ''

  constructor(uri: string, endpoint: string) {
    this.endpoint = uri + endpoint
  }

  Get(projectNumber: string): string {
    return `${this.endpoint}"${projectNumber}"`
  }
}
