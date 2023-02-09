import { IEditForm } from "@ExemplarInterfaces/IEditForm";
import { IEditable } from "../Interfaces/IEditable";
import { GlobalEvents, GlobalEventBus } from "@ExemplarCommon/eventBus";
import VueLayoutComponent from "Views/Shared/LayoutComponents/VueLayoutComponent";
import { ApiDefaultRoute } from "@ExemplarRoutes/ApiDefaultRoute";
import PaginatedPageBase from "@ExemplarComponents/Page/PaginatedPageBase";
import GridModel from "@ExemplarViewModels/GridModel";
import { ApiResponse } from "@ExemplarDataAccess/ApiResponse";

export class EditFormBase<T> extends PaginatedPageBase<T> implements IEditForm {

  editMode: boolean = false;

  isInsert: boolean = false;

  isPreSaveCallSuccess: boolean = false;

  validationPassed: boolean = true;

  editRoute: ApiDefaultRoute | null = null;

  exemplarApiUrl: string = <string>$("#exemplarApiUrl").val();
  // Grid
  editModel: any = {};
  gridModel = new GridModel();
  isMounted: boolean = false;
  searchQuery: string = "";
  route: string;
  //End Grid

  // Audit Log Vars
  entityId: number = 0;
  entityName: string = "";
  showAuditLog: boolean = false;
  // End Audit Log Vars

  constructor() {
    super();
    this.GetDetails = this.GetDetails.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  mounted() {
    this.searchQuery = new URLSearchParams(window.location.search).get("searchquery") ?? "";
    this.gridModel.accessToken = this.accessToken;
    this.gridModel.search = this.searchQuery;
    this.gridModel.apiBase = this.exemplarApiUrl;
    this.gridModel.linkCallback = this.GetDetails;
    this.gridModel.dataReadSuccessCallback = this.BindGrid;

    this.SetEditRoute(this.className);

    const vueLayoutRef = this.$refs.vueLayoutRef as VueLayoutComponent;
    if (vueLayoutRef)
      vueLayoutRef.collapsed = true;

    GlobalEventBus.$on(GlobalEvents.Unauthorized, () => {
      this.unauthorized = true;
    });

    GlobalEventBus.$on(GlobalEvents.CloseAuditLog, () => {
      this.entityId = 0;
    });

    GlobalEventBus.$on(GlobalEvents.CloseEditForm, () => {
      this.editMode = false;
    });

    GlobalEventBus.$on(GlobalEvents.Validated, (passed: boolean) => {
      this.validationPassed = passed;
    });
  }

  BindGrid(response: ApiResponse) {
    this.model = response.model.Model;
    this.pager = response.model.Pager;
    this.ready = true;
    console.log("model", this.model);
  }

  EditSuccessCallback(model: any) {
    this.gridModel.reloadAfterEdit();
  }

  // Audit Log Function
  GetAuditLog(entityId: number) {
    this.entityId = entityId;
  }

  GetDetails(event: MouseEvent, dataItem: any, dataIndex: number) {
    this.ShowEditForm(dataItem.Id, this.GetDetailsSuccessCallback);
  }

  GetDetailsSuccessCallback(model: any) {
    this.editModel = model;
    this.isMounted = true;
  }

  handleSearch(query: string, event: MouseEvent) {
    this.gridModel.search = query;
  }

  handleStateChange(e: any) {
    this.editModel.StateId = +e.value();
    this.editModel.State = e.text();
    console.log("Changed State value to " + e.text());
  }

  InitializeForm(model: IEditable): void {
    model.CreatedBy = this.currentUserId;
    model.RowVersion = []
    model.Id = 0;
    this.isInsert = true;
    this.editMode = true;
  }

  SetEditRoute(entity: string) {
    this.isInsert = false;
    this.editRoute = new ApiDefaultRoute(this.exemplarApiUrl, entity);
  }

  ShowEditForm(id: number, callback: any): void {
    this.isInsert = false;
    this.editMode = true;
    this.editRoute && this.GetModel(this.editRoute.Get(id), callback, null); // add editRoute watcher?
  }
}
