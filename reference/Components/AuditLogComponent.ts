import { Component, Prop, Watch,  Vue } from "vue-property-decorator";
import { BModal, BButton } from 'bootstrap-vue'
import { GlobalEvents, GlobalEventBus } from "@ExemplarCommon/eventBus";
import { ToastrHelper } from "@ExemplarCommon/ToastrHelper";
import DataAccess from "@ExemplarCommon/DataAccess";
import { ApiDefaultRoute } from "@ExemplarRoutes/ApiDefaultRoute";
import DropdownComponent from "@ExemplarComponents/Controls/DropdownComponent";
import PagerToolbarComponent from "@ExemplarComponents/Controls/PagerToolbarComponent";
import IPager from "../Interfaces/IPager";

@Component({
    template: "#audit-log-template",
    components: {
        BModal, BButton, DropdownComponent, PagerToolbar: PagerToolbarComponent
    }
})
export default class AuditLogComponent<AuditLog> extends Vue {
    @Prop({ required: true, type: Number })
    entityId!: number;

    @Prop({ required: true, type: String })
    accessToken!: string

    @Prop({ required: true, type: String })
    exemplarApiUrl!: string

    @Prop({ required: false, type: String , default:""})
    entityName!: string

    pager: IPager = {
        CurrentPage: 1,
        NextPage: "",
        PageSize: 3,
        PreviousPage: "",
        TotalCount: 0,
        TotalPages: 1,
    }

    pagerKey: number = 0;

    selectedFieldName: string = "";

    selectedValue: string = "Showing All";

    dataAccess: DataAccess = new DataAccess(this.accessToken);

    auditLogRoute: ApiDefaultRoute = new ApiDefaultRoute(this.exemplarApiUrl, "AuditLog");

    auditLogFilterRoute: string = "";

    bindFieldNameList: boolean = false;

    auditLogModal = {
        data: {} as any,
        open: false,
        noCloseOnBackdrop: true,
        noCloseOnEsc: true,
        isPreview: false
    };

    @Watch("entityId")
    async GetAuditLog() {
        console.log("GetAuditLog", this.entityId);
        if (this.entityId > 0) {
            this.auditLogFilterRoute = `${this.auditLogRoute.uri}/${this.entityId}?CreateFieldNameList=true&EntityName=${this.entityName}`;
            await this.dataAccess.GetAsync(`${this.auditLogRoute.uri}/${this.entityId}?PageSize=3&EntityName=${this.entityName}`, this.GetDataCallback, null);
            this.bindFieldNameList = true;
        }
    }
    
    GetDataCallback(model: any) {
        console.log("GetDataCallback: ", model );
        if (model.Model && model.Model.length > 0) {
            this.auditLogModal.data = model;
            this.auditLogModal.open = true;
            this.pager = model.Pager;
        } else {
            ToastrHelper.DisplayToastWarning("No Audit Records Found.");            
            GlobalEventBus.$emit(GlobalEvents.CloseAuditLog);
        }
    }

    // Events
    onHide() {
        this.auditLogModal.open = false;
        GlobalEventBus.$emit(GlobalEvents.CloseAuditLog);
    }

    onPageChange(page: number) {
        this.dataAccess.GetAsync(`${this.auditLogRoute.uri}/${this.entityId}?PageSize=${this.pager.PageSize}&PageNumber=${page}&EntityName=${this.entityName}`, this.GetDataCallback, null);
    }

    async OnFieldNameSelected(e: any) {
        this.selectedFieldName = e.sender.text();
        console.log("OnFieldNameSelected: " + this.selectedFieldName);
        if (this.selectedFieldName != "") {
            //this.showLoader = true;
            // Get availability for selected user
            let auditLogFilterRoute = `${this.auditLogRoute.uri}/${this.entityId}?SelectedFieldName=${this.selectedFieldName}&EntityName=${this.entityName}`;
            await this.dataAccess.GetAsync(auditLogFilterRoute, this.GetDataCallback);
            this.pagerKey++;
        }
    }
}

