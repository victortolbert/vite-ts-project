export class ExemplarMessage {
  public Id: number = 0;
  public ExemplarMessageTypeId: number = 1;
  public ClassName: string = "";
  public Message: string = "";
  public MethodName: string = "";
  public Parameters: string = "";
  public VsProject: string = "Exemplar.Web";
  public Operation: string = "";
  public StackTrace: string = "";
  public CreatedOn: Date = new Date();
}
