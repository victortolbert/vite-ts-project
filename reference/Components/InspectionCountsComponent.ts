import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { ToastrHelper } from "@ExemplarCommon/ToastrHelper";
import { ProjectInspectionsRoute } from "@ExemplarRoutes/ProjectInspectionRoute";
import DataAccess from "@ExemplarCommon/DataAccess";
import { ApiResponse } from "@ExemplarDataAccess/ApiResponse";
import { ProjectInspectionDashboard } from "@ExemplarViewModels/ProjectInspectionDashboard";


@Component({
    template: "#inspection-counts-template"
})



export default class InspectionCountsComponent extends Vue {

    @Prop({ required: true, type: String })
    accessToken: string;

    @Prop({ required: true, type: String })
    currentUserId: string;

    @Prop({ required: true, type: String })
    exemplarApiUrl: string;

    @Prop({ required: true, type: String })
    roleId: string; 

    dataAccess: DataAccess;
    dataReady: boolean = false;
    inspections: ProjectInspectionDashboard;
    projectInspectionsRoute: ProjectInspectionsRoute; 

    today: string = '';
    todayTotal: number = 0;
    tomorrow: string = '';
    tomorrowTotal: number = 0;
    
    mounted() {
        this.SetRouteOptions();
        this.SetInspectionCounts();
    }

    SetRouteOptions() {
        this.projectInspectionsRoute = new ProjectInspectionsRoute(this.exemplarApiUrl);
        this.dataAccess = new DataAccess(this.accessToken);
    }


    async SetInspectionCounts() {
        let uri = this.projectInspectionsRoute.GetInspectionCounts(+this.roleId, +this.currentUserId);
        await this.dataAccess.GetAsync(uri, this.SuccessCallBack, this.ErrorCallback);
    }

    ErrorCallback(apiResponse: ApiResponse) {
        ToastrHelper.DisplayToastError(apiResponse.resultText, 'Component Load Error');
    }

    SuccessCallBack(dashboardInspectionCount: ProjectInspectionDashboard) {
        this.inspections = dashboardInspectionCount;

        let todaysDate = new Date();
        this.today = todaysDate.toLocaleDateString();
        this.todayTotal = this.inspections.TodaysProjects.reduce((sum, { Count }) => sum + Count, 0);

        let tomorrowsDate = new Date(todaysDate.getFullYear(), todaysDate.getMonth(),  todaysDate.getDate() + 1);
        this.tomorrow = tomorrowsDate.toLocaleDateString();
        this.tomorrowTotal = this.inspections.TomorrowsProjects.reduce((sum, { Count }) => sum + Count, 0);

        this.dataReady = true;
    }
}
 