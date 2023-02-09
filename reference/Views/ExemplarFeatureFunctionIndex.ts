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
import ExemplarFeatureFunctionGridModel from "./ViewModels/ExemplarFeatureFunctionGridModel";
import { ExemplarFeatureFunction } from "@ExemplarViewModels/ExemplarFeatureFunction";
import { ExemplarFeatureRoute } from "../../../Scripts/Routes/ExemplarFeatureRoute";
import { ExemplarFeature } from "../../../Scripts/ViewModels/ExemplarFeature";
import { DropdownListValues } from "@ExemplarViewModels/DropdownListValues"
import { UserRoute } from "@ExemplarRoutes/UserRoute";


@Component({
  template: "#exemplar-feature-funciton-index",
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

export default class ExemplarFeatureFunctionIndexComponent extends EditFormBase<ExemplarFeatureFunction> {
  @lazyInject("IValidatorListAsync<ExemplarFeatureFunction>")
  editFormValidator!: IValidatorListAsync<ExemplarFeatureFunction>;
  editModel: ExemplarFeatureFunction = new ExemplarFeatureFunction();
  entityName = "ExemplarFeatureFunction";
  exemplarFeatureUri: string = "";
  featureRoute: ExemplarFeatureRoute;
  gridModel = new ExemplarFeatureFunctionGridModel();

  constructor() {
    super();
  }

  EditSuccessCallback(model: any) {
    this.gridModel.reloadAfterEdit();
  }

  EditFailedValidationCallback(model: any) {
    // Add any custom code here
  }

  AddForm(): void {
    // Set type below:
    let newModel = new ExemplarFeatureFunction();
    this.GetDetailsSuccessCallback(newModel);

    //set id to 0 which will pull back all features
    this.exemplarFeatureUri = this.featureRoute.ReturnDropdown(0);

    this.InitializeForm(newModel);
  }

  BindGrid(response: ApiResponse) {
    super.BindGrid(response);
  }

  GetDetailsSuccessCallback(model: any) {
    super.GetDetailsSuccessCallback(model);
  }

  handleExemplarFeatureChange(data: any) {
    console.log("Exemplar Feature Change: ", data);
    if (data.sender.value() != "0") {
      this.editModel.ExemplarFeature = data.sender.text();
      this.editModel.ExemplarFeatureId = +data.sender.value();
      console.log("Changed Exemplar Feature to " + data.sender.text());
    }
  }

  ShowEditForm(id: number, callback: any): void {
    this.exemplarFeatureUri = this.featureRoute.ReturnDropdown(id);
    super.ShowEditForm(id, callback);
  }


  mounted() {
    console.log("Exemplar Feature Function Mounted");
    // Set ClassName below:
    this.className = "ExemplarFeatureFunctions";
    this.featureRoute = new ExemplarFeatureRoute(this.exemplarApiUrl);
    super.mounted();
  }
}
