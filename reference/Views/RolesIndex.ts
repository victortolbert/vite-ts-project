// Common Imports
import { Component } from "vue-property-decorator";
import { GlobalEvents, GlobalEventBus } from "@ExemplarCommon/eventBus";
import { EditFormBase } from "@ExemplarCommon/EditFormBase";
import VueLayoutComponent from "./../../../Views/Shared/LayoutComponents/VueLayoutComponent";
import { lazyInject } from "./IocContainer";
import { IValidatorList } from "@ExemplarInterfaces/IValidatorList";
import { ApiResponse } from "@ExemplarDataAccess/ApiResponse";
import { BModal, BButton } from 'bootstrap-vue'
import Vue from "Vue";
import DataAccess from "@ExemplarCommon/DataAccess";


// Component Imports
import { GridToolbar } from '@progress/kendo-vue-grid';
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
import { KendoTreeView, KendoTreeViewItem, TreeView, TreeViewItem } from '@progress/kendo-treeview-vue-wrapper';
import EditModalComponent from "@ExemplarComponents/EditModalComponent";
import { Tooltip } from "@progress/kendo-popups-vue-wrapper";
import { Button as KendoButton } from "@progress/kendo-vue-buttons";

//Viewmodel Imports
import RoleGridModel from "./ViewModels/RoleGridModel";
import { ExemplarRole } from "@ExemplarViewModels/ExemplarRole";
import { TreeViewValues } from "@ExemplarViewModels/TreeViewValues";
import { ToastrHelper } from "../../../Scripts/Common/ToastrHelper";


Vue.component('kendo-treeview', KendoTreeView)

@Component({
  template: "#role-index",
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
    TreeView,
    TreeViewItem,
    EditModalComponent,
    Tooltip,
    GridToolbar,
    KendoButton
  }
})

export default class RolesIndexComponent extends EditFormBase<ExemplarRole> {
  @lazyInject("IValidatorList<ExemplarRole>")
  editFormValidator!: IValidatorList<ExemplarRole>;


  gridModel = new RoleGridModel();
  entityName = "ExemplarRoles";
  editRoleModel: ExemplarRole = new ExemplarRole();

  isRoleInsert: boolean = false;
  featureFunctionTreeView: Array<TreeViewValues> = [];
  displayModal: boolean = false;

  constructor() {
    super();
  }

  mounted() {
    // Set ClassName below:
    this.className = "ExemplarRoles";
    super.mounted();

    GlobalEventBus.$on(GlobalEvents.CloseEditModal, () => {
      this.displayModal = false;
    });
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
    let newModel = new ExemplarRole();
    this.InitializeForm(newModel);
    this.editRoleModel = newModel;
    this.SetTreeView(this.editRoleModel.ExemplarRoleFeatureFunctionsIds);
    this.isRoleInsert = true;
    this.displayModal = true;
    this.editMode = false;
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
    this.editRoleModel = model;
    this.SetTreeView(this.editRoleModel.ExemplarRoleFeatureFunctionsIds);
    this.displayModal = true;
    this.isRoleInsert = false;
  }

  SetTreeView(activeFeatureFunctions: Array<number> | null) {
    let featureFunctionRoute: string = this.exemplarApiUrl + "ExemplarFeatures?CollectionType=5";
    this.dataAccess.GetAsync(featureFunctionRoute, (data: Array<TreeViewValues>) => {
      if (activeFeatureFunctions !== null && activeFeatureFunctions.length > 0) {
        data.forEach((featureFunc: TreeViewValues) => {
          featureFunc.items.forEach((nestedFF: TreeViewValues) => {

            let indexofFF = activeFeatureFunctions.indexOf(nestedFF.id);
            if (indexofFF >= 0) {
              //set checked equal to true and expand parent tree
              nestedFF.checked = true;
              featureFunc.expanded = true;
            }
            else {
              nestedFF.checked = false;
            }
          });
        })
      }
      this.featureFunctionTreeView = data;
    }, this.DisplayErrorCallback);
  }

  CheckedNodeIds(nodes: any, checkedNodes: Array<number>) {
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].hasChildren) {
        this.CheckedNodeIds(nodes[i].children.view(), checkedNodes);
      }
      else if (nodes[i].checked && !nodes[i].hasChildren) {
        checkedNodes.push(nodes[i].id);

      }
    }
  }

  ShowEditForm(id: number, callback: any): void {
    super.ShowEditForm(id, callback);
    this.editMode = false;
  }

  async UpdateExemplarRole(data: ExemplarRole) {

    let featureFunctionIds: string = this.editRoleModel.ExemplarRoleFeatureFunctionsIds.toString();
    let roleId = (data?.Id !== undefined) ? data.Id : this.editRoleModel.Id;
    let route: string = this.exemplarApiUrl + "ExemplarRoleFeatureFunctions?BulkFeatureFunctionUpdate=true&FeatureFunctionIds=" + featureFunctionIds + "&RoleId=" + roleId;
    await this.dataAccess.PostAsync(route, null, this.FeatureFunctionUpdateSuccessCallback, this.DisplayErrorCallback);
    this.gridModel.reloadAfterEdit();
  }

  DisplayErrorCallback(response: ApiResponse) {
    ToastrHelper.DisplayToastError(response.resultText, "Unable to update Role");
  }

  FeatureFunctionUpdateSuccessCallback(data: any) {
    this.displayModal = false;
  }

  GetUpdateRoute(): string {
    let route: string = this.exemplarApiUrl + "ExemplarRoles";
    if (!this.isRoleInsert)
      route = route + "/" + this.editRoleModel.Id + "?updatedBy=" + this.currentUserId;
    return route;
  }

  OnFeatureFuncSelectionChange(data: any) {
    console.log(typeof (data));
    var checkedNodes: Array<number> = [];
    var treeView: kendo.ui.TreeView = (<any>this.$refs.treeview).kendoWidget();
    this.CheckedNodeIds(treeView.dataSource.view(), checkedNodes);
    this.editRoleModel.ExemplarRoleFeatureFunctionsIds = checkedNodes;
    treeView.expand(data.node);
  }

  GetTooltipContent(data: any) {
    if (data.target[0].innerText !== "") {

      let result: TreeViewValues | undefined = this.featureFunctionTreeView.find(item => item.text === data.target[0].innerText);

      //If this result is undefined, then we search for the child nodes with the matching text
      if (result === undefined) {
        for (let i = 0; i < this.featureFunctionTreeView.length; i++) {
          result = this.featureFunctionTreeView[i].items.find(item => item.text === data.target[0].innerText);
          if (result !== undefined)
            break;
        }

      }

      return result?.description;
    }
  }
}
