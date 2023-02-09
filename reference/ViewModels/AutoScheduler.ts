import { Route } from "./Route";
import { MileageViewer } from "./MileageViewer";
export class AutoScheduler {
  public Id: number = 0
  public ServiceAreaId: number = 0;
  public ServiceAreaName: string = null as any;
  public GoogleHits: number = 0;
  public ApprovedBy: number;
  public ApprovedByUser: string = null as any;
  public ApprovedDate: string = null as any;
  public ScheduledDate: string = null as any;
  public HasNoRoutes: boolean = false;
  public HasInspections: boolean = false;
  public Claims: String[] = [];
  public Routes: Route[] = [];
  public MileageViewer: MileageViewer[] = [];
}
