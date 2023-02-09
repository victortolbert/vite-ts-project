// Common Imports
import { Component } from "vue-property-decorator";
import { GlobalEvents, GlobalEventBus } from "@ExemplarCommon/eventBus";
import { IValidatorListAsync } from "@ExemplarInterfaces/IValidatorListAsync";
import { EditFormBase } from "@ExemplarCommon/EditFormBase";
import VueLayoutComponent from "./../../../Views/Shared/LayoutComponents/VueLayoutComponent";
import { lazyInject } from "./IocContainer";
import { ApiResponse } from "@ExemplarDataAccess/ApiResponse";
import { BModal, BButton } from 'bootstrap-vue'
import DataAccess from "@ExemplarCommon/DataAccess";

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
import StateDropdownComponent from "@ExemplarComponents/Dropdowns/StateDropdownComponent";
import DropdownComponent from "@ExemplarComponents/Controls/DropdownComponent";
import ExportButton from "@ExemplarComponents/Button/ExportButton";

// Viewmodel Imports
import ExemplarFeatureGridModel from "./ViewModels/ExemplarFeatureGridModel";
import NestedExemplarFeatureFunctionGridModel from "./ViewModels/NestedExemplarFeatureFunctionGridModel";
import { ExemplarFeature } from "@ExemplarViewModels/ExemplarFeature";
import { DropdownListValues } from "@ExemplarViewModels/DropdownListValues"
import { UserRoute } from "@ExemplarRoutes/UserRoute";
import { ToastrHelper } from "../../../Scripts/Common/ToastrHelper";


@Component({
  template: "#exemplar-feature-index",
  components: {
    Grid,
    AuditLogComponent,
    VueLayoutComponent,
    TextboxComponent,
    CheckBoxComponent,
    BooleanComponent,
    NumericComponent,
    EditFormComponent,
    SearchField,
    StateDropdownComponent,
    DropdownComponent,
    BButton,
    BModal,
    PagerToolbar: PagerToolbarComponent,
    ExportButton,
  }
})

export default class ExemplarFeatureIndexComponent extends EditFormBase<ExemplarFeature> {
  @lazyInject("IValidatorListAsync<ExemplarFeature>")
  editFormValidator!: IValidatorListAsync<ExemplarFeature>;
  entityName = "ExemplarFeature";
  gridValidationMessages: Array<string> = [];
  gridModel: ExemplarFeatureGridModel = new ExemplarFeatureGridModel(this.gridErrorMessageHandler);
  nestedExemplarFeatureFunctionGridModel: NestedExemplarFeatureFunctionGridModel;
  editModel: ExemplarFeature = new ExemplarFeature();
  adjusterDirectorUri: string = '';
  adjusterManagerUri: string = '';

  constructor() {
    super();
  }

  EditSuccessCallback(model: any) {
    this.gridModel.reloadAfterEdit();
  }

  EditFailedValidationCallback(model: any) {
    // Add any custom code here
  }

  gridErrorMessageHandler(data: ApiResponse) {
    ToastrHelper.DisplayToastError(data.resultText, "Error While Updating Grid")
  }

  AddForm(): void {
    // Set type below:
    let newModel = new ExemplarFeature();
    this.GetDetailsSuccessCallback(newModel);

    this.InitializeForm(newModel);
  }

  BindGrid(response: ApiResponse) {
    super.BindGrid(response);
  }

  GetDetailsSuccessCallback(model: any) {
    super.GetDetailsSuccessCallback(model);
  }

  ShowEditForm(id: number, callback: any): void {
    super.ShowEditForm(id, callback);
  }

  mounted() {
    console.log("Exemplar Feature Mounted");
    // Set ClassName below:
    this.className = "ExemplarFeatures";
    super.mounted();
  }

  exemplarFeatureExpandHandler(event: any) {

    this.nestedExemplarFeatureFunctionGridModel = new NestedExemplarFeatureFunctionGridModel(event.dataItem.Id ?? 0, this.currentUserId, this.gridErrorMessageHandler);
    this.nestedExemplarFeatureFunctionGridModel.apiBase = this.exemplarApiUrl;
    this.nestedExemplarFeatureFunctionGridModel.accessToken = this.accessToken;
    event.dataItem[event.target.$props.expandField] = event.value;
  }
}
