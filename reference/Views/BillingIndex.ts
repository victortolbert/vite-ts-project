// Common Imports
import { Component } from "vue-property-decorator";
import { GlobalEvents, GlobalEventBus } from "@ExemplarCommon/eventBus";
import { IValidatorListAsync } from "@ExemplarInterfaces/IValidatorListAsync";
import { EditFormBase } from "@ExemplarCommon/EditFormBase";
import VueLayoutComponent from "./../../../Views/Shared/LayoutComponents/VueLayoutComponent";
//import { lazyInject } from "./IocContainer";
import { ApiResponse } from "@ExemplarDataAccess/ApiResponse";
import { BModal, BButton } from 'bootstrap-vue';
import { ApiClient } from "@ExemplarDataAccess/ApiClient";

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
import { DropdownListValues } from "@ExemplarViewModels/DropdownListValues"
import { UserRoute } from "@ExemplarRoutes/UserRoute";
import ExportButton from "@ExemplarComponents/Button/ExportButton";
import { ApiDefaultRoute } from "@ExemplarRoutes/ApiDefaultRoute";

// Viewmodel Imports
import BillingGridModel from "./ViewModels/BillingGridModel";
import { BillingItem } from "@ExemplarViewModels/BillingItem";
import { ToastrHelper } from "../../../Scripts/Common/ToastrHelper";
import { ResponseType } from "../../../Scripts/Enums/ResponseType";


@Component({
  template: "#billing-index",
  components: {
    BButton,
    BModal,
    ExportButton,
    Grid,
    PagerToolbar: PagerToolbarComponent,
    SearchField,
    VueLayoutComponent,
  }
})

export default class BillingIndexComponent extends EditFormBase<BillingItem> {
  gridModel = new BillingGridModel();
  editModel: BillingItem = new BillingItem();
  adjusterDirectorUri: string = '';
  adjusterManagerUri: string = '';
  billingIssuesModal = {
    open: false,
    text: "",
  }
  exportRoute: string = "";
  updateRoute: string = "";

  constructor() {
    super();
    this.OnSelectionChange = this.OnSelectionChange.bind(this);
  }

  BindGrid(response: ApiResponse) {
    super.BindGrid(response);
    this.UpdateExportRoute();
  }

  GetDetailsSuccessCallback(model: any) {
    super.GetDetailsSuccessCallback(model);
  }

  OnBillingIssuesModalHide() {
    this.billingIssuesModal.text = "";
    this.billingIssuesModal.open = false;
  }

  OnSelectionChangeWithUpdate(event: InputEvent, item?: any) {
    this.OnSelectionChange(event, item);
    this.UpdateExportRoute();
  }

  OnBillingIssuesModalShow(issues: string) {
    this.billingIssuesModal.text = issues;
    this.billingIssuesModal.open = true;
  }

  mounted() {
    console.log("Billing Mounted");
    // Set ClassName below:
    this.className = "BillingItems";
    this.updateRoute = `${this.exemplarApiUrl}Billing?UpdatedBy=${this.currentUserId}`;
    super.mounted();
  }

  UpdateExportRoute() {
    this.exportRoute = this.selectedDataItems!.length ?
      `${this.exemplarApiUrl}ProjectServiceTypes?ProjectIds=${this.selectedDataItems!.map(item => item.Id)}` :
      "";
  }

  async UpdateProjectStatuses(statusId: 8 | 10) {
    const STATUS_NAMES = {
      8: "Completed",
      10: "Closed",
    }

    const projectIds = this.selectedDataItems
      ?.filter(item => item.ProjectStatusId === 9)
      .map(item => item.Id).join(",");
    if (projectIds?.length === 0) {
      if (this.selectedDataItems?.length) {
        ToastrHelper.DisplayToastError("Selected items must have the status \"Billed\"");
        return
      }
      ToastrHelper.DisplayToastError("No items selected.");
      return;
    }
    let notChangedWarning = "";
    if (this.selectedDataItems!.length > projectIds!.length) {
      const notChangedCount = this.selectedDataItems!.length - projectIds!.length;
      notChangedWarning = ` ${notChangedCount} item${notChangedCount > 1 ? "s" : ""} will not be changed because they are not currently in the "Billed" status.`;
    }
    const apiResponse = await ApiClient.Put(this.updateRoute, { projectIds, statusId }, this.accessToken);
    if (apiResponse.result === ResponseType.Success) {
      let successMessage: string;
      successMessage = `${projectIds!.length} project${projectIds!.length === 1 ? " has" : "s have"} successfully been moved to a "${STATUS_NAMES[statusId]}" status.${notChangedWarning}`
      ToastrHelper.DisplayToastSuccess(successMessage);
      const gridRef = this.$refs.gridRef as Grid;
      setTimeout(function () {
        gridRef && gridRef.getData();
      }, 5000);
      return;
    }
    ToastrHelper.DisplayToastError("Could not update project statuses.");
  }
}
