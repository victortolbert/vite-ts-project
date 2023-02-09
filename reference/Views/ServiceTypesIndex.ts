// Common Imports
import { Component} from "vue-property-decorator";
import { GlobalEvents, GlobalEventBus } from "@ExemplarCommon/eventBus";
import { IValidatorList } from "@ExemplarInterfaces/IValidatorList";
import { EditFormBase } from "@ExemplarCommon/EditFormBase";
import VueLayoutComponent from "./../../../Views/Shared/LayoutComponents/VueLayoutComponent";
import { lazyInject } from "./IocContainer";
import { ApiResponse } from "@ExemplarDataAccess/ApiResponse";
import { BModal, BButton } from 'bootstrap-vue'

// Component Imports
import Grid from "@ExemplarComponents/Grid/GridComponent";
import TextboxComponent from "@ExemplarComponents/Controls/TextboxComponent";
import CheckBoxComponent from "@ExemplarComponents/Controls/CheckBoxComponent";
import BooleanComponent from "@ExemplarComponents/Controls/BooleanComponent";
import NumericComponent from "@ExemplarComponents/Controls/NumericComponent";
import PagerToolbarComponent from "@ExemplarComponents/Controls/PagerToolbarComponent";
import EditFormComponent from "@ExemplarComponents/EditFormComponent";
import AuditLogComponent from "@ExemplarComponents/AuditLogComponent";
import SearchField from "@ExemplarComponents/SearchFieldComponent";
import ExportButton from "@ExemplarComponents/Button/ExportButton";

// Viewmodel Imports
import AvailableServiceTypeGridModel from "./ViewModels/AvailableServiceTypeGridModel";
import { AvailableServiceType } from "@ExemplarViewModels/AvailableServiceType";


@Component({
    template: "#service-type-index",
    components: {
        Grid,
        AuditLogComponent,
        VueLayoutComponent,
        TextboxComponent,
        CheckBoxComponent,
        BooleanComponent,
        NumericComponent,
        EditFormComponent,
        BButton,
        BModal,
        PagerToolbar: PagerToolbarComponent,
        SearchField,
        ExportButton,
    }
})

export default class ServiceTypesIndexComponent extends EditFormBase<AvailableServiceType>  {
    @lazyInject("IValidatorList<AvailableServiceType>")
    editFormValidator!: IValidatorList<AvailableServiceType>;

    // Update Types below:
    gridModel = new AvailableServiceTypeGridModel();
    //model: Array<AvailableServiceTypeGridModel> = new Array<AvailableServiceTypeGridModel>();
    editModel: AvailableServiceType = new AvailableServiceType();
    entityName = "AvailableServiceType";

    constructor() {
        super();
    }

    mounted() {
        console.log("ServiceType Mounted");

        // Set ClassName below:
        this.className = "AvailableServiceTypes"
        super.mounted();
    }

    AddForm(): void {
        // Set type below:
        let newModel = new AvailableServiceType();
        this.InitializeForm(newModel);
    }

    EditSuccessCallback(model: any) {
        // Add any custom code here
    }

    EditFailedValidationCallback(model: any) {
        // Add any custom code here
    }

    //Methods below do not require editing
    BindGrid(response: ApiResponse) {
        super.BindGrid(response);
    }

    ShowEditForm(id: number, callback: any): void {
        super.ShowEditForm(id, callback);
    }

    GetDetailsSuccessCallback(model: any) {
        super.GetDetailsSuccessCallback(model);
    }
}
