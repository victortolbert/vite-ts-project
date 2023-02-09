import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Grid from "@ExemplarComponents/Grid/GridComponent";
import GridCheckboxCell from "@ExemplarComponents/Grid/GridCheckboxCell";
import GridCommentCell from "@ExemplarComponents/Grid/GridCheckboxCell";

import BooleanComponent from "@ExemplarComponents/Controls/BooleanComponent";
import DataAccess from "@ExemplarCommon/DataAccess";
import ProjectCommentsGridModel from "@ExemplarComponents/Grid/BaseGridModels/ProjectCommentsGridModel";

import IProject from "@ExemplarViewModels/IProject";
import { User } from "@ExemplarViewModels/User";
import { ToastrHelper } from "@ExemplarCommon/ToastrHelper";
import { ApiResponse } from "../DataAccess/ApiResponse";
import { ApiDefaultRoute } from "@ExemplarRoutes/ApiDefaultRoute";
import { ToasterPosition } from "../Enums/Toast";


@Component({
    template: "#project-comments-template",
    components: {
        GridCheckboxCell,
        GridCommentCell,
        Grid,
        BooleanComponent,
    }
})



export default class ProjectCommentsComponent extends Vue {
    @Prop({ required: true, type: String })
    accessToken: string;

    @Prop({ required: true, type: String })
    exemplarApiUrl: string;

    @Prop({ required: true, type: String })
    currentUserId: string

    @Prop({ required: true, type: Number })
    projectId: number;

    @Prop({ required: true, type: ProjectCommentsGridModel })
    projectCommentsGridModel: ProjectCommentsGridModel;

    customerContacted: boolean = false;

    dataAccess: DataAccess;

    gridReady: boolean = false;

    projectDto: IProject;

    projectRoute: ApiDefaultRoute;

    projectCommentsRoute: ApiDefaultRoute;

    projectUri: string = '';

    userRoute: ApiDefaultRoute;

    async mounted() {
        
        await this.SetCustomerContactedValue();
        this.gridReady = true; 
    }

    async SetCustomerContactedValue() {

        await this.dataAccess.GetAsync(this.projectUri, (response: IProject) => {
            this.projectDto = response;
            this.customerContacted = this.projectDto.HasBeenContacted ?? false;
        });
    }
    
    SetDefaultsFromViewData() {
        this.dataAccess = new DataAccess(this.accessToken);
        this.projectUri = this.projectRoute.Get(this.projectId);
        this.projectRoute = new ApiDefaultRoute(this.exemplarApiUrl, "Projects");
        this.projectCommentsRoute = new ApiDefaultRoute(this.exemplarApiUrl, "ProjectComments");
        this.userRoute = new ApiDefaultRoute(this.exemplarApiUrl, "Users")
    }

    async UpdateHasBeenContactedSuccessCallback() {

        let userUri = this.userRoute.Get(+this.currentUserId);
        let userName: string | null = '';
        await this.dataAccess.GetAsync(userUri, (response: User) => {
            userName = response.FullName;
        });


        let createTime = (new Date()).toLocaleString("en-US");
        let commentToAdd = {
            CommentText: `First Contact by <span style="color: rgb(200, 38, 19)"><b>${userName} on ${createTime}</b></span>`,
            Id: 0,
            ProjectId: this.projectId,
            CreatedBy: this.currentUserId,
            CreatedOn: createTime,
            IsSeenByOthers: true

        };

        let projectCommentsUri: string = this.projectCommentsRoute.Insert().toString();


        await this.dataAccess.PostAsync(projectCommentsUri, commentToAdd, (apiResponse: ApiResponse) => {
            this.ReloadProjectCommentGrid();
        }, this.UpdateErrorCallback);

        await this.SetCustomerContactedValue();
    }

    ReloadProjectCommentGrid() {
        this.projectCommentsGridModel.reloadAfterEdit();
    }

    UpdateErrorCallback(apiResponse: ApiResponse) {
        ToastrHelper.DisplayToastError(apiResponse.resultText, "Unable to Update Project");
        this.ReloadProjectCommentGrid();
    }

    @Watch("customerContacted")
    async ChangeHasBeenContacted(event: any) {
        let updateRoute = this.projectRoute.Update(this.projectId, +this.currentUserId) + "&UpdateMappingType=1";

        //Only update if previous value was false
        if (this.customerContacted && !this.projectDto.HasBeenContacted) {
            this.projectDto.HasBeenContacted = this.customerContacted;
            console.log(updateRoute);
            await this.dataAccess.PutAsync(updateRoute, this.projectDto, this.UpdateHasBeenContactedSuccessCallback, this.UpdateErrorCallback);
            
        }
        else if (this.projectDto.HasBeenContacted) {
            this.customerContacted = true;
        }        
    }

}
