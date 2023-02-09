export class MvcAutoSchedulerRoute {
  private endpoint = '/Technician/AutoScheduler/'

  GenerateSchedule(serviceAreaId: number, scheduledDate: string): string {
    return `${this.endpoint}GenerateSchedule?serviceAreaId=${serviceAreaId}&scheduledDate=${scheduledDate}`
  }

  ApproveSchedule(): string {
    return `${this.endpoint}ApproveSchedule`
  }
}
