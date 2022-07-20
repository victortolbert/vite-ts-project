import { ProjectInspectionDetails } from '.';

export class Route {
  public Id: number = 0;
  public FieldTechId: number = 0;
  public FieldTechName: string = "";
  public Miles: number = 0;
  public IsException: boolean = false;
  public ProjectInspectionDetails: ProjectInspectionDetails[] = [];
}
