export class AuditLogChange {
  public Id: number | null = null;
  public AuditLogId: number | null = null;
  public FieldName: string = '';
  public PreviousValue: string = '';
  public CurrentValue: string = '';

}
