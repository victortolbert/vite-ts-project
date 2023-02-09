import { Component, Prop, Vue } from "vue-property-decorator";
import { AutoSchedulerBase } from "../AutoSchedulerBase";
import { find, forEach, isDate } from "lodash";
// import { AutoScheduler } from "../ViewModels/AutoScheduler";
import { Route } from "../ViewModels/Route";
import RouteComponentTwo from "../Components/RouteComponentTwo";
import { lazyInject } from "./../TechnicianIocContainer";
import { IValidator } from "@ExemplarInterfaces/IValidator";
import { AutoSchedulerUpdate } from "../ViewModels/AutoSchedulerUpdate";
import { ProjectInspectionTechnicianUpdate } from "../ViewModels/ProjectInspectionTechnicianUpdate";
import { ToastrHelper } from "@ExemplarCommon/ToastrHelper";
import { MvcAutoSchedulerRoute } from "../Routes/MvcAutoSchedulerRoute";
import { ProjectInspectionDetails } from "../ViewModels/ProjectInspectionDetails";
import { AutoSchedulerEvents, EventBus } from "../AutoSchedulerEvents";
import { AutoScheduler } from "../ViewModels/AutoScheduler";

@Component({
    template: '#area-schedule-template',
    components: {
        RouteComponentTwo
    }
})
export default class AreaScheduleComponent extends AutoSchedulerBase<Route> {
    @lazyInject("IValidator<Route>")
    validatorService!: IValidator<Route>;

    @Prop({ required: true, type: Object })
    model: AutoScheduler;

    @Prop({ required: true, type: String })
    serviceAreaTechnicianUri: string;

    @Prop({ required: true, type: Boolean })
    showSchedule: boolean;

    //Class properties
    autoSchedulerUpdate: AutoSchedulerUpdate = new AutoSchedulerUpdate();
    mvcAutoSchedulerRoute: MvcAutoSchedulerRoute = new MvcAutoSchedulerRoute();
    showMileageLog: boolean = false;
    inspectionToMove!: any | ProjectInspectionDetails;
    inspectionToUpdate: ProjectInspectionDetails = new ProjectInspectionDetails();
    position: number = 1;

    mounted() {
        EventBus.$on(AutoSchedulerEvents.MoveInspection, (inspectionDetail: ProjectInspectionDetails) => {
            this.inspectionToMove = inspectionDetail;
        });

        EventBus.$on(AutoSchedulerEvents.InspectionMoved, (routeId: number, startTime: string) => {
            this.MoveInspection(routeId, startTime);
        });
    }

    async ApproveSchedule() {

        this.autoSchedulerUpdate.ApprovedBy = this.currentUserId;
        this.autoSchedulerUpdate.ServiceAreaId = this.model.ServiceAreaId;
        this.autoSchedulerUpdate.ScheduledDate = this.model.ScheduledDate;
        this.autoSchedulerUpdate.GoogleHits = this.model.GoogleHits;
        this.autoSchedulerUpdate.ProjectInspectionTechnicianUpdate = new Array<ProjectInspectionTechnicianUpdate>();
        forEach(this.model.Routes, (route) => {
            forEach(route.ProjectInspectionDetails, (details) => {
                if (details.OriginalFieldTechId != route.FieldTechId) {
                    this.autoSchedulerUpdate.ProjectInspectionTechnicianUpdate
                        .push(new ProjectInspectionTechnicianUpdate(details.OriginalFieldTechId, details.ProjectInspectionTechnicianId ? details.ProjectInspectionTechnicianId : 0, details.ProjectInspectionId, route.FieldTechId, details.ProjectId, details.IsHoverEnabled));
                }
            });
        });
        if (this.autoSchedulerUpdate.ProjectInspectionTechnicianUpdate.length == 0) {
            ToastrHelper.DisplayToastWarning("No assignments to be made.", "Auto Scheduler");
        } else {
            await this.Insert(this.mvcAutoSchedulerRoute.ApproveSchedule(), JSON.stringify(this.autoSchedulerUpdate), this.ApproveScheduleCallback);
        }
    }

    MoveInspection(routeId: number, startTime: string) {
        if (!this.inspectionToMove) {
            return;
        }

        if (startTime !== (<ProjectInspectionDetails>this.inspectionToMove).InspectionTime) {
            return;
        }
        var sourceRoute: any;

        // Get the route that the inspection belongs to.
        forEach(this.model.Routes, (route) => {
            forEach(route.ProjectInspectionDetails, (details) => {
                if (details.ProjectInspectionId == this.inspectionToMove.ProjectInspectionId && !sourceRoute) {
                    sourceRoute = <Route>find(this.model.Routes, { 'Id': route.Id });
                }
            });
        });

        if (!sourceRoute) {
            return;
        }

        // Don't allow exceptions to be moved to other exception rows.
        if (this.inspectionToMove.OriginalFieldTechId < 1 && sourceRoute.Id < 1) {
            return;
        }

        //Remove ProjectInspectionDetails from route
        if (sourceRoute.ProjectInspectionDetails != null)
            sourceRoute.ProjectInspectionDetails.splice(sourceRoute.ProjectInspectionDetails.indexOf(this.inspectionToMove), 1);

        this.inspectionToMove.routeId = routeId;

        var destRoute = <Route>find(this.model.Routes, ['Id', routeId]);
        destRoute.ProjectInspectionDetails.push(this.inspectionToMove);

        this.position++;
        this.inspectionToMove = undefined;
        EventBus.$emit(AutoSchedulerEvents.UnSelectDiv);
    }

    //Callback
    ApproveScheduleCallback() {
        this.model.Id = -1;
        ToastrHelper.DisplayToastSuccess("Assignments Saved!", "Auto Scheduler");
    }

    // Events

    onAddExceptionClicked() {
        var route = new Route();
        route.FieldTechId = 0;
        route.Id = this.model.Routes.length + 1;
        route.IsException = true;
        var projectDetails = new Array<ProjectInspectionDetails>();
        route.ProjectInspectionDetails = projectDetails;
        this.model.Routes.push(route);
    }

}
