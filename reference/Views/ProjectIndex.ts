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
import _ from "lodash";
import { FilterDescriptor } from "@progress/kendo-data-query";

// Component Imports
import AuditLogComponent from "@ExemplarComponents/AuditLogComponent";
import { DatePicker, DatePickerChangeEvent } from "@progress/kendo-vue-dateinputs";
import BooleanComponent from "@ExemplarComponents/Controls/BooleanComponent";
import CheckBoxComponent from "@ExemplarComponents/Controls/CheckBoxComponent";
import DropdownComponent from "@ExemplarComponents/Controls/DropdownComponent";
import EditFormComponent from "@ExemplarComponents/EditFormComponent";
import ExportButton from "@ExemplarComponents/Button/ExportButton";
import Grid from "@ExemplarComponents/Grid/GridComponent";
import NumericComponent from "@ExemplarComponents/Controls/NumericComponent";
import PagerToolbarComponent from "@ExemplarComponents/Controls/PagerToolbarComponent";
import ProjectGridButtons from "./ProjectGridButtons";
import SearchField from "@ExemplarComponents/SearchFieldComponent";
import SchedulerModal from "./SchedulerModal";
import StateDropdownComponent from "@ExemplarComponents/Dropdowns/StateDropdownComponent";
import TextboxComponent from "@ExemplarComponents/Controls/TextboxComponent";

// Viewmodel Imports
import { ProjectGridItem, UserSimpleProfileDto } from "@ExemplarViewModels/ProjectGridItem";
import { ProjectRoute } from "../../../Scripts/Routes/ProjectRoute";
import { ToastrHelper } from "../../../Scripts/Common/ToastrHelper";
import ServiceType from "@ExemplarViewModels/ServiceType";
import ProjectGridModel from "./ViewModels/ProjectGridModel";

enum FilterButtonEnum { None, Escalations, Reschedules };

@Component({
  template: "#project-index",
  components: {
    AuditLogComponent,
    DatePicker,
    BButton,
    BModal,
    BooleanComponent,
    CheckBoxComponent,
    DropdownComponent,
    EditFormComponent,
    ExportButton,
    Grid,
    NumericComponent,
    PagerToolbar: PagerToolbarComponent,
    ProjectGridButtons,
    SchedulerModal,
    SearchField,
    StateDropdownComponent,
    TextboxComponent,
    VueLayoutComponent,
  }
})

export default class ProjectIndexComponent extends EditFormBase<ProjectGridItem> {
  acceptIsDisabled: boolean = true;

  activeFilterButton: FilterButtonEnum = FilterButtonEnum.None;

  adjusterDirectorUri: string = "";

  adjusterManagerUri: string = "";

  billingContactChoices: Array<string> = ["Adjuster", "Billing Contact", "Other"];

  bulkAssignIsDisabled: boolean = true;

  catastrophicEventChoices: Array<string> = ["Yes", "No", "Unknown"];

  companyUri: string = "";

  damageTypeDescription: string = "";

  damageTypeUri: string = "";

  @lazyInject("IValidatorListAsync<ProjectGridItem>")
  editFormValidator!: IValidatorListAsync<ProjectGridItem>;

  editModel: ProjectGridItem = new ProjectGridItem();

  entityName = "Project";

  gridModel = new ProjectGridModel();

  projectRoute: ProjectRoute;

  schedulerItems: any = [];

  serviceTypeUri: string = "";

  statusUri: string = "";

  userUri: string = "";

  FilterButtonEnum = FilterButtonEnum;

  constructor() {
    super();
    this.BulkAssign = this.BulkAssign.bind(this);
  }

  AcceptProjects(projectIds: Array<string> | undefined): void {
    if (this.acceptIsDisabled)
      return;

    projectIds = this.editMode ? projectIds :
      this.getSelectedDataItems()?.map(item => item.Id);

    this.dataAccess.PostAsync(this.projectRoute.AcceptProjects(this.currentUserId), projectIds);
  }

  AddForm(): void {
    // Set type below:
    let newModel = new ProjectGridItem();
    this.GetDetailsSuccessCallback(newModel);
    this.InitializeForm(newModel);
  }

  BindGrid(response: ApiResponse): void {
    const gridRef = this.$refs.gridRef as Grid;
    gridRef.dataItems = gridRef.dataItems?.map((item: ProjectGridItem) => ({
      ...item,
      Actions: {
        flag: {
          show: this.rolePermissions.includes("Assign Project") &&
            this.currentUserType === "Application Users",
          disabled: !!this.getSelectedDataItems().length ||
            !this.rolePermissions.includes("Process Pending Projects") ||
            ["Archived", "Billed", "Closed", "Pending"].includes(item.Status),
        },
        schedule: {
          show: this.rolePermissions.includes("Assign Project"),
          disabled: !!this.getSelectedDataItems().length ||
            !this.rolePermissions.includes("Process Pending Projects") ||
            ["Archived", "Billed", "Closed", "Pending"].includes(item.Status),
        },
      }
    }));
    super.BindGrid(response);
  }

  BulkAssign(ids?: Array<string> | undefined): void {
    if (this.bulkAssignIsDisabled)
      return;

    ids = this.editMode ? ids : this.getSelectedDataItems()?.map(item => item.Id);

    if (!ids?.length) {
      ToastrHelper.DisplayToastError("You should select a project.");
      return;
    }

    if (ids.length === 1) {
      ToastrHelper.DisplayToastError("You should select <b>2 or more projects</b>.");
      return;
    }

    this.GetModel(this.projectRoute.GetByIds(ids, true), this.ShowSchedulerModal, this.HandleModalError)
  }

  EditSuccessCallback(model: any): void {
    this.gridModel.reloadData = true;
  }

  EditFailedValidationCallback(model: any): void {
    // Add any custom code here
  }

  FilterEscalations(): void {
    if (this.activeFilterButton === FilterButtonEnum.Escalations) {
      this.gridModel.filter = undefined;
      this.activeFilterButton = FilterButtonEnum.None;
    } else {
      this.gridModel.filter = {
        logic: "and",
        filters: [{
          field: "IsEscalation",
          operator: "eq",
          value: true,
        }],
      };
      this.activeFilterButton = FilterButtonEnum.Escalations;
    }
  }

  FilterReschedules(): void {
    if (this.activeFilterButton === FilterButtonEnum.Reschedules) {
      this.gridModel.filter = undefined;
      this.activeFilterButton = FilterButtonEnum.None;
    } else {
      this.gridModel.filter = {
        logic: "and",
        filters: [{
          field: "IsReschedule",
          operator: "eq",
          value: true,
        }],
      };
      this.activeFilterButton = FilterButtonEnum.Reschedules;
    }
  }

  FlagErrorCallback(): void {
    ToastrHelper.DisplayToastError("Could not update project flag.");
  }

  FlagSuccessCallback(success: boolean): void {
    if (success) {
      ToastrHelper.DisplayToastSuccess("Project flag updated successfully.");
      setTimeout(() => { console.log("reload trigger"); this.ReloadGrid(); }, 1000);
    } else {
      ToastrHelper.DisplayToastError("Could not update project flag.");
    }
  }

  GetCatastrophicEventValue(): string {
    switch (this.editModel.CatastrophicEvent) {
      case true:
        return "Yes";
      case false:
        return "No";
      case null:
      default:
        return "Unknown";
    }
  }

  GetDetailsSuccessCallback(model: any): void {
    this.billingContactChoices[1] = `Billing Contact (${this.editModel.CompanyBillingContact?.FullName || ""})`
    this.companyUri = this.projectRoute.GetCompaniesDropdown(this.currentUserType, this.currentUserId);
    this.damageTypeUri = this.projectRoute.damageTypeUri;
    this.statusUri = this.projectRoute.GetStatusDropdown(this.editModel.StatusId || 0);
    this.userUri = this.projectRoute.GetAdjustersDropdown(this.editModel.CompanyId);

    super.GetDetailsSuccessCallback(model);
  }

  GetInspections(project: ProjectGridItem): Array<string> {
    return [
      ...project.DamageTypes.filter(inspection => inspection.Name !== "Other").map(inspection => inspection.Name),
      ...project.DamageTypes.filter(inspection => inspection.Name === "Other").map(inspection => inspection.Description)
    ];
  }

  HandleAdjusterChange(data: any): void {
    console.log("Adjuster Change: ", data);
    console.log(data);
    if (data.sender.value() != "0") {
      this.editModel.InsuranceAdjuster = data.sender.text();
      this.editModel.InsuranceAdjusterId = +data.sender.value();
      console.log("Changed Adjuster to " + data.sender.text());
    }
  }

  HandleBillingContactTypeChange(value: string): void {
    console.log("Billing Contact Type Change: ", value);
    this.editModel.BillingContactType = value;
  }

  HandleCatastrophicEventChange(data: any): void {
    console.log(data);
    //    switch (this.editModel.CatastrophicEvent) {
    //        case true:
    //            return "Yes";
    //        case false:
    //            return "No";
    //        case null:
    //        default:
    //            return "Unknown";
    //    }
  }

  HandleCompanyChange(data: any): void {
    console.log("Company Change: ", data);
    console.log(data);
    if (data.sender.value() != "0") {
      this.editModel.Company = data.sender.text();
      this.editModel.CompanyId = +data.sender.value();
      console.log("Changed Company to " + data.sender.text());
    }
  }

  HandleDamageTypeDescriptionChange(value: string): void {
    this.damageTypeDescription = value;
    const otherDamageType = this.editModel.DamageTypes?.find(damageType => damageType.Name === "Other");
    if (otherDamageType)
      otherDamageType.Description = value;
  }

  HandleModalError(response: ApiResponse): void {
    ToastrHelper.DisplayToastError("Could not get projects for scheduling.");
  }

  HandleOtherBillingContactChange(data: any): void {
    console.log("Billing Contact Change: ", data);
    console.log(data);
    if (data.sender.value() != "0") {
      this.editModel.CompanyBillingContact = this.editModel.CompanyBillingContact ?? {
        Id: 0,
        FullName: "",
        PrimaryPhone: "",
        PrimaryPhoneExt: "",
        PrimaryEmail: "",
      };

      this.editModel.CompanyBillingContact.FullName = data.sender.text();
      this.editModel.CompanyBillingContact.Id = +data.sender.value();
      console.log("Changed Billing Contact to " + data.sender.text());
    }
  }

  HandleStatusChange(data: any): void {
    console.log("Status Change: ", data);
    console.log(data);
    if (data.sender.value() != "0") {
      this.editModel.Status = data.sender.text();
      this.editModel.StatusId = +data.sender.value();
      console.log("Changed Status to " + data.sender.text());
    }
  }

  HasInspectionTypes(project: ProjectGridItem): boolean {
    return !!project.ServiceTypes?.some(serviceType => serviceType.AvailableServiceTypeId === 39) &&
      !project.ServiceTypes?.some(serviceType => serviceType.AvailableServiceTypeId !== 37);
  }

  HasEditFormAcceptButton(): boolean {
    return this.rolePermissions.includes("Process Pending Projects") && this.editModel.Status === "Pending";
  }

  HasEditFormScheduleButton(): boolean {
    return this.rolePermissions.includes("Assign Project") &&
      this.rolePermissions.includes("Process Pending Projects") &&
      ["Complete", "Review", "Working", "Confirmed", "Assigned", "Schedule", "Hold", "Triage", "CallQueue", "Pending"].includes(this.editModel.Status)
  }

  HasMoveToHoldButton(project: ProjectGridItem): boolean {
    return project.Status === "Closed" &&
      this.rolePermissions.includes("Edit Project") &&
      (this.roleName === "Administrator" || this.roleName === "Bookkeeper");
  }

  HasStatusDropdown(): boolean {
    return !["Review", "Complete", "Billed", "Archived", "Closed"].includes(this.editModel.Status) ||
      this.roleName !== "Service Tech";
  }

  MapServiceTypes(project: ProjectGridItem): string {
    return (project.ServiceTypes && project.ServiceTypes
      .filter((serviceType: ServiceType) => serviceType.AvailableServiceType !== "Other")
      .map((serviceType: ServiceType) => {
        const enabledServices = [];
        serviceType.IsHoverEnabled && enabledServices.push("Hover Enabled");
        serviceType.IsLivegenicEnabled && enabledServices.push("Livegenic Enabled");
        serviceType.IsEagleViewEnabled && enabledServices.push("EagleView Enabled");
        const enabledServiceString = enabledServices.length ? `(${enabledServices.join(", ")})` : "";
        const parentString = `${serviceType.ParentName} ` || "";
        const billingPriceString = this.roleName === "Administrator" || this.roleName === "Bookkeeper" ? `${serviceType.BillingPrice} ` : "";
        return `${parentString}${serviceType.AvailableServiceType} x ${serviceType.Quantity} ${billingPriceString}${enabledServiceString}`
      }).join("<br>")) ?? "";
  }

  mounted(): void {
    console.log("Project Mounted");
    // Set ClassName below:
    this.className = "Projects";
    this.projectRoute = new ProjectRoute(this.exemplarApiUrl);
    if (this.rolePermissions.includes("Project Assignment")) {
      this.gridModel.columns.push({
        cell: ProjectGridButtons,
        editable: false,
        field: "Actions",
        filterable: false,
        key: "actions",
        sortable: false,
      })
    }
    super.mounted();
  }

  OnFinishDateChange(event: DatePickerChangeEvent): void {
    if (!event.value)
      return;

    this.gridModel.reloadData = false;
    this.gridModel.filter = this.gridModel.filter ?? { filters: [], logic: "and" };
    const existingFilter = this.gridModel.filter.filters.find(filter =>
      (filter as FilterDescriptor).field === "FinishDate") as FilterDescriptor;

    if (existingFilter) {
      if (existingFilter.value === event.value)
        return;

      if (!event.value)
        this.gridModel.filter.filters.splice(this.gridModel.filter.filters.indexOf(existingFilter));
      else
        existingFilter.value = event.value;
    } else {
      this.gridModel.filter.filters.push({
        field: "FinishDate",
        operator: "lte",
        value: event.value,
      })
    };
    this.gridModel.reloadData = true;
  }

  OnFlagButtonClicked(id: string): void {
    this.dataAccess.PostAsync(this.projectRoute.FlagProjects(this.currentUserId, id), {}, this.FlagSuccessCallback, this.FlagErrorCallback);
  }

  OnSchedulerButtonClicked(id: string): void {
    this.GetModel(this.projectRoute.GetByIds([id], true), this.ShowSchedulerModal, this.HandleModalError)
  }

  OnSelectionChangeWithUpdate(event: InputEvent, item?: any): void {
    this.OnSelectionChange(event, item);
    this.UpdateButtons();
  }

  OnStartDateChange(event: DatePickerChangeEvent): void {
    this.gridModel.reloadData = false;
    this.gridModel.filter = this.gridModel.filter ?? { filters: [], logic: "and" };
    const existingFilter = this.gridModel.filter.filters.find(filter =>
      (filter as FilterDescriptor).field === "StartDate") as FilterDescriptor;

    if (existingFilter) {
      if (existingFilter.value === event.value)
        return;

      if (!event.value)
        this.gridModel.filter.filters.splice(this.gridModel.filter.filters.indexOf(existingFilter));
      else
        existingFilter.value = event.value;
    } else {
      this.gridModel.filter.filters.push({
        field: "StartDate",
        operator: "gte",
        value: event.value,
      })
    };
    this.gridModel.reloadData = true;
  }

  SetEditRoute(): void {
    this.isInsert = false;
    this.editRoute = this.projectRoute;
  }

  ShowEditForm(id: number, callback: any): void {
    super.ShowEditForm(id, callback);
  }

  ShowInspectionTypes(): boolean {
    return !!this.editModel?.ServiceTypes?.some(serviceType => serviceType.AvailableServiceTypeId === 39)
  }

  ShowSchedulerModal(response: ApiResponse): void {
    this.schedulerItems = response;
    const schedulerModal = this.$refs.schedulerModalRef as SchedulerModal;
    schedulerModal.open();
  }

  UpdateButtons(): void {
    const uniqueDates = _.uniq(this.getSelectedDataItems()?.map((item: ProjectGridItem) => item.Date));

    const uniqueStatuses = _.uniq(this.getSelectedDataItems()?.map((item: ProjectGridItem) => item.Status));

    // TODO: Do we want to consolidate BulkAssign methods that show toaster errors and those that disable button into one or the other?
    this.bulkAssignIsDisabled = uniqueDates.length !== 1;
    this.acceptIsDisabled = uniqueStatuses.length !== 1 || uniqueStatuses[0] !== "Pending";
  }
}
