import { AuditLogChange } from "./AuditLogChange";

export class AuditLog {
  public Id: number | null = null;
  public EntityId: number | null = null;
  public ChangedBy: number | null = null;
  public ChangeDate: string = '';
  public EntityName: string = '';
  public ChangedByUser: string = '';
  public AuditLogChanges: AuditLogChange[] = [];
}
