export class ProjectStatusCount {
  public Status: string = "";
  public Count: number = 0;



  constructor(status: string, count: number) {
    this.Status = status
    this.Count = count;
  }
}
