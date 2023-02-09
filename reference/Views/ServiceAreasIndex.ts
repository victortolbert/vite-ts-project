// Common Imports
import { Component } from "vue-property-decorator";
import { GlobalEvents, GlobalEventBus } from "@ExemplarCommon/eventBus";
import { IValidatorList } from "@ExemplarInterfaces/IValidatorList";
import { EditFormBase } from "@ExemplarCommon/EditFormBase";
import VueLayoutComponent from "./../../../Views/Shared/LayoutComponents/VueLayoutComponent";
import { lazyInject } from "./IocContainer";
import { ApiResponse } from "@ExemplarDataAccess/ApiResponse";
import { BModal, BButton } from 'bootstrap-vue'
import { isEqual, cloneDeep } from "lodash";

// Component Imports
import Grid from "@ExemplarComponents/Grid/GridComponent";
import TextboxComponent from "@ExemplarComponents/Controls/TextboxComponent";
import CheckBoxComponent from "@ExemplarComponents/Controls/CheckBoxComponent";
import BooleanComponent from "@ExemplarComponents/Controls/BooleanComponent";
import NumericComponent from "@ExemplarComponents/Controls/NumericComponent";
import PagerToolbarComponent from "@ExemplarComponents/Controls/PagerToolbarComponent";
import EditFormComponent from "@ExemplarComponents/EditFormComponent";
import AuditLogComponent from "@ExemplarComponents/AuditLogComponent";
import StateDropdownComponent from "@ExemplarComponents/Dropdowns/StateDropdownComponent";
import SearchField from "@ExemplarComponents/SearchFieldComponent";
import ExportButton from "@ExemplarComponents/Button/ExportButton";

// Viewmodel Imports
import ServiceAreaGridModel from "./ViewModels/ServiceAreaGridModel";
import { ServiceArea } from "@ExemplarViewModels/ServiceArea";

@Component({
    template: "#service-area-index",
    components: {
        Grid,
        AuditLogComponent,
        VueLayoutComponent,
        TextboxComponent,
        CheckBoxComponent,
        BooleanComponent,
        NumericComponent,
        EditFormComponent,
        StateDropdownComponent,
        BButton,
        BModal,
        PagerToolbar: PagerToolbarComponent,
        SearchField,
        ExportButton,
    }
})

export default class ServiceAreasIndexComponent extends EditFormBase<ServiceArea>  {
    @lazyInject("IValidatorList<ServiceArea>")
    editFormValidator!: IValidatorList<ServiceArea>;

    // Update Types below:
    editModel: ServiceArea = new ServiceArea();
    entityName = "ServiceArea";
    gridModel = new ServiceAreaGridModel();
    //model: Array<ServiceAreaGridModel> = new Array<ServiceAreaGridModel>();
    serviceAreaRoute: string = "/ServiceArea/ServiceAreas/";

    constructor() {
        super();
    }

    mounted() {
        console.log("ServiceArea Mounted");

        // Set ClassName below:
        this.className = "ServiceAreas"
        super.mounted();
        //if (!this.viewStatePresent) {
        //    return;
        //}
        //this.SetEditRoute(this.className );

        //this.searchQuery = new URLSearchParams(window.location.search).get("searchquery") ?? "";
        //this.gridModel.accessToken = this.accessToken;
        //this.gridModel.search = this.searchQuery;
        //this.gridModel.apiBase = this.exemplarApiUrl;
        //this.gridModel.linkCallback = this.GetDetails;
        //this.gridModel.dataReadSuccessCallback = this.BindGrid;

        //const vueLayoutRef = this.$refs.vueLayoutRef as VueLayoutComponent;
        //if (vueLayoutRef)
        //    vueLayoutRef.collapsed = true;

        //GlobalEventBus.$on(GlobalEvents.Unauthorized, () => {
        //    this.unauthorized = true;
        //});

        //GlobalEventBus.$on(GlobalEvents.CloseAuditLog, () => {
        //    this.entityId = 0;
        //});

        //GlobalEventBus.$on(GlobalEvents.CloseEditForm, () => {
        //    this.editMode = false;
        //});

        //GlobalEventBus.$on(GlobalEvents.Validated, (passed: boolean) => {
        //    this.validationPassed = passed;
        //});
    }

    AddForm(): void {
        // Set type below:
        let newModel = new ServiceArea();
        this.editModel = newModel;
        this.isMounted = true;
        this.InitializeForm(newModel);
    }

    EditSuccessCallback(model: any) {
        this.gridModel.reloadAfterEdit();
    }

    EditFailedValidationCallback(model: any) {
        // Add any custom code here
    }

    ShowEditForm(id: number, callback: any): void {
        this.isPreSaveCallSuccess = false;
        super.ShowEditForm(id, callback);
        console.log("getting model...")
        this.editRoute && this.GetModel(this.editRoute.Get(id), callback, null);
    }

    HandleStateChange(e: any) {
        this.editModel.StateId = +e.value();
        this.editModel.State = e.text();
    }

    //Methods below do not require editing
    BindGrid(response: ApiResponse) {
        super.BindGrid(response);
    }

    GetDetails(event: MouseEvent, dataItem: any, dataIndex: number) {
        console.log("ServiceAreaIndex GetDetails");
    //    super.GetDetails(event, dataItem, dataIndex);
        this.ShowEditForm(dataItem.Id, this.GetDetailsSuccessCallback);
    }

    GetDetailsSuccessCallback(model: any) {
        super.GetDetailsSuccessCallback(model);
        this.editModel = model;
        this.isMounted = true;
    }

    async PreSaveCall() {
        let callSource = "";
        let callRequest = false;

        if (this.isInsert) {
            callSource = "Exemplar_NewServiceArea"
            callRequest = true;
        }

        else {
            callSource = "Exemplar_UpdateServiceArea"

            if (!isEqual(this.originalModel.StreetAddress, this.editModel.StreetAddress) ||
                !isEqual(this.originalModel.City, this.editModel.City) ||
                !isEqual(this.originalModel.StateId, this.editModel.StateId)) {
                callRequest = true;
            }
        }

        if (callRequest) {
            var str = `${this.serviceAreaRoute}GetGPSCoordinates?street=${this.editModel.StreetAddress}&city=${this.editModel.City}&stateId=${this.editModel.StateId}&callSource=${callSource}&stateAbbreviation=`;
            await this.Insert(str, null, this.PreSaveSucessCallback, "Received GPS Cordinates Successfully.");
        }
        else
            this.isPreSaveCallSuccess = true;
    }
    async PreSaveSucessCallback(model: any) {
        this.isPreSaveCallSuccess = true;
        this.editModel.AddressLatitude = model.Latitude;
        this.editModel.AddressLongitude = model.Longitude;
    }
}
