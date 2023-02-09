export class ProjectInspectionTechnicianUpdate {

  public OriginalFieldTechId: number = 0;

  public ProjectInspectionTechnicianId: number = 0;

  public ProjectInspectionId: number = 0;

  public FieldTechId: number = 0;

  public IsHoverEnabled: boolean = false;

  public ProjectId: number = 0;

  constructor(originalFieldTechId: number, projectInspectionTechnicianId: number, projectInspectionId: number, fieldTechId: number, projectId: number, isHoverEnabled: boolean) {
    this.ProjectInspectionTechnicianId = projectInspectionTechnicianId;
    this.OriginalFieldTechId = originalFieldTechId;
    this.ProjectInspectionId = projectInspectionId;
    this.IsHoverEnabled = isHoverEnabled;
    this.FieldTechId = fieldTechId;
    this.ProjectId = projectId;
  }
}
