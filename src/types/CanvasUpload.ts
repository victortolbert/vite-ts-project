export class CanvasUpload {
  public DataUrl: string
  public FileName: string
  public FullPath: string
  public ProjectId: number
  public PropertyInspectionFormId: number
  public CreatedBy: number

  constructor(dataUrl: string, fileName: string, fullPath: string, propertyInspectionFormId: number, projectId: number, createdBy: number) {
    this.DataUrl = dataUrl
    this.FileName = fileName
    this.FullPath = fullPath
    this.PropertyInspectionFormId = propertyInspectionFormId
    this.ProjectId = projectId
    this.CreatedBy = createdBy
  }
}
