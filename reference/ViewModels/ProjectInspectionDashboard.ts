import { ProjectStatusCount } from "./ProjectStatusCount";

export class ProjectInspectionDashboard {

  public PastDueCount: number = 0;
  public TodaysProjects: Array<ProjectStatusCount> = [];
  public TomorrowsProjects: Array<ProjectStatusCount> = [];



  constructor(pastDueCount: number, todaysProjects: Array<ProjectStatusCount>, tomorrowsProjects: Array<ProjectStatusCount>) {
    this.PastDueCount = pastDueCount;
    this.TodaysProjects = todaysProjects;
    this.TomorrowsProjects = tomorrowsProjects;
  }


}
