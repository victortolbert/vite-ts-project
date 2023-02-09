// Common Imports
import { Component } from "vue-property-decorator";
import { GlobalEvents, GlobalEventBus } from "@ExemplarCommon/eventBus";
import VueLayoutComponent from "./../../../Views/Shared/LayoutComponents/VueLayoutComponent";
import { ApiResponse } from "@ExemplarDataAccess/ApiResponse";
import { ApiDefaultRoute } from "@ExemplarRoutes/ApiDefaultRoute";
import { UserRoute } from "@ExemplarRoutes/UserRoute";
import EditFormComponent from "@ExemplarComponents/EditFormComponent";
import { PortalEvents, EventBus } from "./PortalEvents";
import _ from "lodash";

// Viewmodel Imports
import AdjusterInspectionsGrid from "./ViewModels/AdjusterInspectionsGrid";
import { AdjusterCounts } from "./ViewModels/AdjusterCounts";
import { AdjusterProfile } from "./ViewModels/AdjusterProfile";
import { AdjusterDetails } from "./ViewModels/AdjusterDetails";

// Component Imports
import { Calendar, CalendarChangeEvent } from "@progress/kendo-vue-dateinputs";
import Scheduler, { SchedulerDataItem } from "./Components/Scheduler";
import Grid from "@ExemplarComponents/Grid/GridComponent";
import PaginatedPageBase from "@ExemplarComponents/Page/PaginatedPageBase";
import GoogleMapComponent from "@ExemplarComponents/GoogleMapComponent";
import AdjusterClaimDetailsComponent from "./AdjusterClaimDetailsComponent";
import { BModal, BButton } from 'bootstrap-vue'

@Component({
    template: "#portal-index",
    components: {
        Calendar,
        GoogleMapComponent,
        Grid,
        VueLayoutComponent,
        EditFormComponent,
        AdjusterClaimDetailsComponent,
        BModal,
        BButton,
        Scheduler,
    }
})

export default class PortalIndexComponent extends PaginatedPageBase<AdjusterInspectionsGrid>  {

    mapMarkers = [];

    googleMapsApiKey: string = <string>$("#googleMapsApiKey").val();

    mapMode: boolean = true;

    adjusterCountModel: Array<AdjusterCounts> = [];

    scheduleData: Array<SchedulerDataItem> = [];

    profileModal = {
        data: {} as any,
        open: false,
        noCloseOnBackdrop: true,
        noCloseOnEsc: true,
        isPreview: false,
        title:"Adjuster Profile"

    };

    userId: number = <number>$("#userId").val();

    schedulerDataRoute: string = "";

    schedulerDate: string = new Date().toISOString().slice(0, 10);

    schedulerView: "Day" | "Week" = "Day";

    selectedDate: string = "";

    gridModel = new AdjusterInspectionsGrid();

    model: Array<AdjusterInspectionsGrid> = new Array<AdjusterInspectionsGrid>();

    showClaimDetails: boolean = false;

    selectedProjectId: number = 0;

    projectStatusId: number = 0;

    detailsRoute: string = "";

    externalClaimsFormUrl: string = "";

    testRoute: string = "test";

    timezone: string = "Etc/UTC";

    adjusterDetailsModal = {
        data: {} as AdjusterDetails,
        open: false,
        noCloseOnBackdrop: true,
        noCloseOnEsc: true,
        isPreview: false
    };

    today: string = new Intl.DateTimeFormat('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }).format(new Date());

    loading: boolean = true;
    calendarDate: string = "";

    constructor() {
        super();
    }

    async mounted() {
        console.log("Portal Mounted: " + this.selectedDate);

        if (!this.viewStatePresent) {
            return;
        }

        this.externalClaimsFormUrl = `${this.exemplarLegacyUrl}Claims?AdjusterId=${this.currentUserId}`;

        this.gridModel.accessToken = this.accessToken;
        this.gridModel.apiBase = this.exemplarApiUrl;
        this.gridModel.linkCallback = this.GetDetails;
        this.gridModel.dataReadSuccessCallback = this.BindGrid;
        this.gridModel.showLoader = this.showLoader;
        console.log(`Setting dataReadRoute in Mount. Route: AdjusterPortal/${this.currentUserId}?RoleId=${this.roleId}`);
        this.gridModel.dataReadRoute = `AdjusterPortal/${this.currentUserId}?RoleId=${this.roleId}`;
        this.schedulerDataRoute = `${this.exemplarApiUrl}AdjusterPortal/${this.currentUserId}?RoleId=${this.roleId}`;

        GlobalEventBus.$on(GlobalEvents.Unauthorized, () => {
            this.unauthorized = true;
        });

        EventBus.$on(PortalEvents.CloseAdjusterDetails, async () => {
            this.showClaimDetails = false;
        })

        await this.GetSnapShot();
    }

    BindGrid(response: ApiResponse) {
        this.model = _.cloneDeep(response.model.Model);
        this.pager = _.cloneDeep(response.model.Pager);
        (this.schedulerView === "Day") && this.SetScheduleData();
        this.ready = true;
        if (this.mapMode) {
            this.mapMarkers = response.model.MapPoints;
        }
    }

    async GetProfile() {
        var endPoint = new UserRoute(this.exemplarApiUrl);
        var route = endPoint.GetById(this.currentUserId) + "?MappingType=1&RoleId=" + this.roleId;
        await this.GetModel(route, this.GetProfileCallback);
    }

    GetDetails(event: MouseEvent, dataItem: any, dataIndex: number) {
        this.selectedProjectId = dataItem.Id;
        var endPoint = new ApiDefaultRoute(this.exemplarApiUrl, "Projects");
        this.detailsRoute = endPoint.Get(this.selectedProjectId) + "?MappingType=1";
        this.showClaimDetails = true;
    }

    async GetSnapShot(route?: string) {
        this.loading = true;
        var endPoint = new ApiDefaultRoute(this.exemplarApiUrl, "AdjusterPortal");
        route = route || endPoint.Get(this.currentUserId) + "?MappingType=1&RoleId=" + this.roleId;
        await this.GetModel(route, this.GetSnapShotCallback);
    }

    SetScheduleData(data?: Array<any>) {
        data = data ?? this.model;
        if (data) {
            this.scheduleData = data.map((project: any) => {
                const start = new Date(project.InspectionDateAndTime);
                const end = new Date(start);
                end.setHours(start.getHours() + 1);
                return {
                    Description: project.ServiceTypes as string,
                    End: end,
                    Id: project.Id as string,
                    Start: start,
                    Title: project.ClaimNumber as string,
                };
            });
        }
    }

    // Callback
    GetSnapShotCallback(model: Array<AdjusterCounts>) {
        this.adjusterCountModel = model;
        this.loading = false;
        console.log("adjusterCountModel: " + JSON.stringify(model));
    }

    GetDetailsSuccessCallback(model: any) {
        this.adjusterDetailsModal.data = model;
        this.adjusterDetailsModal.open = true;
    }

    GetProfileCallback(model: AdjusterProfile) {
        this.profileModal.data = model;
        this.profileModal.open = true;
    }

    // Events
    onHide() {
        this.profileModal.open = false;
        GlobalEventBus.$emit(GlobalEvents.CloseAuditLog);
    }

    onCountsClicked(projectStatusId: number) {
        console.log(`Setting dataReadRoute in onCountsClicked. Route: AdjusterPortal/${this.currentUserId}?ProjectStatusId=${projectStatusId}&RoleId=${this.roleId}`);
        this.projectStatusId = projectStatusId;
        const params = [];
        this.selectedDate && params.push(`ScheduleDate=${this.selectedDate}`);
        this.projectStatusId && params.push(`ProjectStatusId=${this.projectStatusId}`);
        this.roleId && params.push(`RoleId=${this.roleId}`);
        const paramString = params.length ? `?${params.join("&")}` : ""
        this.gridModel.dataReadRoute = `AdjusterPortal/${this.currentUserId}${paramString}`;
        console.log('data route:' + this.gridModel.dataReadRoute);
        this.GetSnapShot(this.exemplarApiUrl + this.gridModel.dataReadRoute + '&MappingType=1');
    }

    onDownloadMenuOpen(dataItem: any): void {
        const gridRef = this.$refs.gridRef as Grid;
        for (let item of gridRef.dataItems || []) {
            if (item !== dataItem) {
                item.CloseMenu();
            }
        }
    }

    onNewClaimClicked() {
        window.open(this.externalClaimsFormUrl, '_blank');
    }
    onCalendarChange(event: CalendarChangeEvent) {
        this.selectedDate = event.value ? new Date(<Date>event.value).toISOString().slice(0, 10) : "";

        this.schedulerDate = event.value ? new Date(<Date>event.value).toISOString().slice(0, 10) : new Date().toISOString().slice(0, 10);

        console.log("New calendar date selected: ", this.selectedDate);

        var selectedDate = this.selectedDate;
        console.log(`Setting dataReadRoute in onCalendarChange. Route: AdjusterPortal/${this.currentUserId}?ScheduleDate=${selectedDate}&RoleId=${this.roleId}`);
        console.log('data route:' + this.gridModel.dataReadRoute);

        const params = [];
        this.selectedDate && params.push(`ScheduleDate=${this.selectedDate}`);
        this.projectStatusId && params.push(`ProjectStatusId=${this.projectStatusId}`);
        this.roleId && params.push(`RoleId=${this.roleId}`);
        const paramString = params.length ? `?${params.join("&")}` : ""
        this.gridModel.dataReadRoute = `AdjusterPortal/${this.currentUserId}${paramString}`;

        var snapShotRoute = this.exemplarApiUrl + this.gridModel.dataReadRoute + '&MappingType=1';
        console.log('snapshot route from calendar: ' + snapShotRoute);
        this.GetSnapShot(snapShotRoute);
    }

    onSchedulerViewChange(viewName: "Day" | "Week") {
        this.schedulerView = viewName;
        if (viewName === "Day") {
            this.SetScheduleData();
        }
    }
}
