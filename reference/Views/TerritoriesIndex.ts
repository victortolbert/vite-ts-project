// Common Imports
import { Component } from "vue-property-decorator";
import { GlobalEvents, GlobalEventBus } from "@ExemplarCommon/eventBus";
import { IValidatorListAsync } from "@ExemplarInterfaces/IValidatorListAsync";
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
import TerritoriesGridModel from "./ViewModels/TerritoriesGridModel";
import { ServiceRegion } from "@ExemplarViewModels/ServiceRegion";


@Component({
    template: "#territory-index",
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

export default class TerritoriesIndexComponent extends EditFormBase<ServiceRegion> {
    @lazyInject("IValidatorListAsync<ServiceRegion>")
    editFormValidator!: IValidatorListAsync<ServiceRegion>;


    gridModel = new TerritoriesGridModel();
    entityName = "ServiceRegion";

    constructor() {
        super();
    }


    mounted() {
       // Set ClassName below:
        this.className = "ServiceRegions";
        super.mounted();
    }

    EditSuccessCallback(model: any) {
        //Add custom code here
        this.gridModel.reloadAfterEdit();
    }

    EditFailedValidationCallback(model: any) {
        // Add any custom code here
    }

    AddForm(): void {
        // Set type below:
        let newModel = new ServiceRegion();
        this.editModel = newModel;
        this.InitializeForm(newModel);
    }

    ////Methods below do not require editing
    BindGrid(response: ApiResponse) {
        super.BindGrid(response);
    }

    GetDetails(event: MouseEvent, dataItem: any, dataIndex: number) {
        this.ShowEditForm(dataItem.Id, this.GetDetailsSuccessCallback);
    }

    GetDetailsSuccessCallback(model: any) {
        super.GetDetailsSuccessCallback(model);
        //Create a copy that can be used to check the name in the validator page.
        this.editModel.previousName = model.Name;
    }

    ShowEditForm(id: number, callback: any): void {
        super.ShowEditForm(id, callback);
    }
}
