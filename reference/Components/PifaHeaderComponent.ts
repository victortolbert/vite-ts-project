import { Component, Prop } from "vue-property-decorator";
import { PifEvents, EventBus } from "./../../Events";
import { ProjectDetails } from "../../ViewModels/ProjectDetails";
import { PageBase } from "@ExemplarCommon/PageBase";
import { ApiPropertyInspectionFormDetailRoutes } from "../../Routes/ApiPropertyInspectionFormDetailRoutes";
import { ToastrHelper } from "@ExemplarCommon/ToastrHelper";
@Component({
    template: "#pifa-header-template",
    components: {
    }
})

export default class PifaHeaderComponent extends PageBase<ProjectDetails> {
    @Prop({ required: true, type: String })
    exemplarApiUrl!: string;

    constructor() {
        super();
    }
    propertyInspectionFormDetailRoutes: ApiPropertyInspectionFormDetailRoutes;
    projectNumber: string = <string>$("#projectNumber").val();

    async mounted() {

        this.propertyInspectionFormDetailRoutes = new ApiPropertyInspectionFormDetailRoutes(this.exemplarApiUrl, "PropertyInspectionFormDetails/");

        if (this.projectNumber.length > 0) {
            EventBus.$emit(PifEvents.SearchPif);
            await this.GetModel(this.propertyInspectionFormDetailRoutes.Get(this.projectNumber), this.GetModelSuccessCallback, this.GetModelErrorCallback);
        } 
    }
    async Search() {
        if (this.projectNumber.length > 0) {
            EventBus.$emit(PifEvents.SearchPif);
            await this.GetModel(this.propertyInspectionFormDetailRoutes.Get(this.projectNumber), this.GetModelSuccessCallback, this.GetModelErrorCallback);
        } else {
            ToastrHelper.DisplayToastWarning( "Please enter a Project Number", "Project Search");
        }
    }

    GetModelErrorCallback() {
        EventBus.$emit(PifEvents.SearchPifComplete);
    }
    GetModelSuccessCallback(model: ProjectDetails) {
        EventBus.$emit(PifEvents.SearchPifComplete, model);
    }
}
