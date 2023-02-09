import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Grid from "@ExemplarComponents/Grid/GridComponent";
import ProjectHistoryGridModel from "@ExemplarComponents/Grid/BaseGridModels/ProjectHistoryGridModel";
import { ToastrHelper } from "@ExemplarCommon/ToastrHelper";


@Component({
    template: "#project-history-template",
    components: {
        Grid
    }
})



export default class ProjectHistoryComponent extends Vue {
    @Prop({ required: true, type: String })
    accessToken: string;

    @Prop({ required: true, type: String })
    exemplarApiUrl: string;

    @Prop({ required: true, type: String })
    currentUserId: string

    @Prop({ required: true, type: String })
    roleId: string

    @Prop({ required: true, type: ProjectHistoryGridModel })
    projectHistoryGridModel: ProjectHistoryGridModel;

    mounted() {
       
        this.InitializeGrid();
        this.CheckDefaultValues();
    }

    CheckDefaultValues() {
        if (this.accessToken.length <= 0) {
           ToastrHelper.DisplayToastError('Access Token is not set.', 'Unable to Update Project');
        }
           
        if (this.exemplarApiUrl.length <= 0) {
            ToastrHelper.DisplayToastError('Exemplar API URL is not set.', 'Unable to Update Project');
        }
    }

    InitializeGrid(): void {
        
        this.projectHistoryGridModel.apiBase = this.exemplarApiUrl;
        this.projectHistoryGridModel.accessToken = this.accessToken;
    }
}
