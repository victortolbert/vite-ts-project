import { Component } from "vue-property-decorator";
import Vue from "Vue";
import vSelect from "vue-select";
import { AutoSchedulerBase } from "./AutoSchedulerBase";
import { BModal, BButton, BFormCheckbox } from 'bootstrap-vue'
import * as moment from "moment";
import { ToastrHelper } from "@ExemplarCommon/ToastrHelper";
import { find, forEach, isDate, orderBy } from "lodash";
import { AutoSchedulerEvents, EventBus } from "./AutoSchedulerEvents"
import { MvcAutoSchedulerRoute } from "./Routes/MvcAutoSchedulerRoute";
import { GlobalEvents, GlobalEventBus } from "@ExemplarCommon/eventBus";
//import AutoComplete from '@progress/kendo-dropdowns-vue-wrapper';
import { lazyInject } from "./IocContainer";
import { IValidator } from "@ExemplarInterfaces/IValidator";

// Kendo
import AutoComplete from "@progress/kendo-dropdowns-vue-wrapper/dist/es/KendoAutoComplete/index";
import KendoDropDown from "@progress/kendo-dropdowns-vue-wrapper/dist/es/KendoDropDownList/index";
import KendoDataSource from "@progress/kendo-datasource-vue-wrapper/dist/es/KendoDataSource/index";

// Viewmodels
import { ProjectInspectionDetails } from "./ViewModels/ProjectInspectionDetails";
import { ProjectInspectionTechnicianUpdate } from "./ViewModels/ProjectInspectionTechnicianUpdate";
import { DropdownListValues } from "@ExemplarViewModels/DropdownListValues"
import { AutoSchedulerUpdate } from "./ViewModels/AutoSchedulerUpdate";
import { ServiceRegionIds } from "@ExemplarViewModels/ServiceRegionIds";
import { ProjectInspection } from "@ExemplarViewModels/ProjectInspection";
import { ServiceTechnicianCollectionResourceParameters } from "@ExemplarViewModels/ServiceTechnicianCollectionResourceParameters"
import { Roles } from "@ExemplarEnums/Roles";
import { AutoScheduler } from "./ViewModels/AutoScheduler";

// Components
import EditModalComponent from "@ExemplarComponents/EditModalComponent";
import DropdownComponent from "@ExemplarComponents/Controls/DropdownComponent";
import AvailabilityComponent from "./Components/AvailabilityComponent";
import AreaScheduleComponent from "./Components/AreaScheduleComponent";
import RouteComponent from "./Components/RouteComponent";
import RouteComponentTwo from "./Components/RouteComponentTwo";
import AppNavbar from "@ExemplarComponents/App/AppNavbar";
import AppFooter from "@ExemplarComponents/App/AppFooter";

// Routes
import { ApiDefaultRoute } from "@ExemplarRoutes/ApiDefaultRoute";
import { ServiceAreaTechnicianRoute } from "@ExemplarRoutes/ServiceAreaTechnicianRoute";
import { ServiceManagerRoute } from "@ExemplarRoutes/ServiceManagerRoute";
import { ServiceAreaRoute } from "@ExemplarRoutes/ServiceAreaRoute";
import { ServiceRegionRoute } from "@ExemplarRoutes/ServiceRegionRoute";
import { Route } from "./ViewModels/Route";

Vue.component('kendo-autocomplete', AutoComplete)
Vue.component('kendo-dropdownlist', KendoDropDown)
Vue.component('kendo-datasource', KendoDataSource)
@Component({
  template: "#auto-scheduler-index-page-template",
  components: {
    vSelect, RouteComponent, RouteComponentTwo, AreaScheduleComponent, AvailabilityComponent, EditModalComponent, BModal, BButton, BFormCheckbox, DropdownComponent,
    AppNavbar, AppFooter
  }
})

export default class AutoSchedulerIndexComponent extends AutoSchedulerBase<Route> {
  @lazyInject("IValidator<String>")
  inspectionTimeValidator!: IValidator<String>;

  // View State
  userId: number = <number>$("#userId").val();
  roleId: number = <number>$("#roleId").val();
  exemplarApiUrl: string = <string>$("#exemplarApiUrl").val();

  // Class Propertiess
  AllowApprove: boolean = this.RoleCheck(this.roleId, "AutoSchedulerApprove");
  Authorized: boolean = this.RoleCheck(this.roleId, "AutoSchedulerIndex");
  activeServiceAreasByRegion: any;
  areaDataSource: Array<DropdownListValues> = new Array<DropdownListValues>();
  autoSchedulerList: Array<AutoScheduler> = new Array<AutoScheduler>();
  autoSchedulerRoute: ApiDefaultRoute;
  autoSchedulerUpdate: AutoSchedulerUpdate = new AutoSchedulerUpdate();
  autocompleteValue: string = '';
  bindAreaList: boolean = true;
  dataSourceArray: Array<string> = new Array<string>();
  editTimeModel: ProjectInspection = new ProjectInspection();
  getdate: any = moment().format('YYYY-MM-DD');
  hasNoRoutes: boolean = false;
  inspectionTimeDataSource: Array<DropdownListValues> = new Array<DropdownListValues>();
  inspectionToMove!: any | ProjectInspectionDetails;
  inspectionToUpdate: ProjectInspectionDetails = new ProjectInspectionDetails();
  isGenerating: boolean = false;
  model: AutoScheduler = new AutoScheduler();
  mvcAutoSchedulerRoute: MvcAutoSchedulerRoute = new MvcAutoSchedulerRoute();
  position: number = 1;
  propertyInspectionRoute: ApiDefaultRoute;
  regionOptions: Array<string> = new Array<string>();
  regionsDataSource: Array<DropdownListValues> = new Array<DropdownListValues>();

  scheduledGenerated: boolean = false;
  searchedUser: string = "";
  searchedUserProp: string = "";
  selectedAreaId: number = 0;
  selectedInspectionDate = new Date().toISOString().slice(0, 10);
  selectedRegion: string = "";
  selectedRegionId: number = 0;
  selectedServiceArea: string = "";
  serviceAreaRoute: ServiceAreaRoute;
  serviceAreaTechnicianUri: string = "";
  serviceAreaUri: string = "";
  serviceManagerRoute: ServiceManagerRoute;
  serviceRegionRoute: ServiceRegionRoute;
  serviceRegionUri: string = "";
  serviceTechnicianCollectionResourceParameters: ServiceTechnicianCollectionResourceParameters = new ServiceTechnicianCollectionResourceParameters();
  showAvailability: boolean = false;
  showFieldTechAvailabityButton: boolean = false;
  showEditForm: boolean = false;
  showMileageLog: boolean = false;
  showSchedule: boolean = false;
  updatedInspectionTime: string = "";
  userAutoFillDataSource: string = `${this.exemplarApiUrl}AutoFills?autofilltype=2&value=${this.searchedUserProp}`;
  settingsModal = {
    data: {} as any,
    promptText: "",
    open: false,
    noCloseOnBackdrop: true,
    noCloseOnEsc: true
  };



  constructor() {
    super();
  }

  GetUpdateRoute(): string {
    return this.propertyInspectionRoute.Update(this.inspectionToUpdate.ProjectInspectionId, this.currentUserId);
  }

  ReturnUserAutoFillDatasource(): string {
    return `${this.exemplarApiUrl}AutoFills?autofilltype=2&value=${this.autocompleteValue}`;
  }

  async mounted() {
    this.showLoader = false;

    this.serviceManagerRoute = new ServiceManagerRoute(this.exemplarApiUrl);
    this.serviceAreaRoute = new ServiceAreaRoute(this.exemplarApiUrl);
    this.serviceRegionRoute = new ServiceRegionRoute(this.exemplarApiUrl);
    this.propertyInspectionRoute = new ApiDefaultRoute(this.exemplarApiUrl, "ProjectInspections");

    GlobalEventBus.$on(GlobalEvents.CloseEditModal, () => {
      this.showEditForm = false;
    });

    EventBus.$on(AutoSchedulerEvents.ShowTimeModal, (inspectionDetail: ProjectInspectionDetails) => {
      this.inspectionToUpdate = inspectionDetail;
      this.GetEditModal(inspectionDetail.ProjectInspectionId);
    });

    if (this.roleId == Roles.ServiceManager) {
      await this.GetRegionManager();
    }
    else if (this.roleId == Roles.ServiceTech2) {
      await this.GetRegionLead();
    } else {
      this.serviceRegionUri = this.serviceRegionRoute.GetAll("", 0, false, 0);
      this.bindAreaList = true;
      this.SetServiceTechnicianUri();
    }

    this.ready = true;
  }

  get orderedAutoSchedulerList() {
    return orderBy(this.autoSchedulerList, 'ServiceAreaName');
  }

  async GetEditModal(id: number) {
    await this.GetModel(this.propertyInspectionRoute.Get(id), this.GetProjectInspectionSuccessCallback);
  }

  SetInspectionTimeDropdown() {
    var scheduleDate = this.editTimeModel.ScheduleDate;
    var stripTime = new Date(scheduleDate).toLocaleDateString();
    this.inspectionTimeDataSource = [];
    this.inspectionTimeDataSource.push(new DropdownListValues('Select', '0'));
    this.inspectionTimeDataSource.push(new DropdownListValues('07:00', stripTime + ' 07:00:00'));
    this.inspectionTimeDataSource.push(new DropdownListValues('07:30', stripTime + ' 07:30:00'));
    this.inspectionTimeDataSource.push(new DropdownListValues('08:00', stripTime + ' 08:00:00'));
    this.inspectionTimeDataSource.push(new DropdownListValues('08:30', stripTime + ' 08:30:00'));
    this.inspectionTimeDataSource.push(new DropdownListValues('09:00', stripTime + ' 09:00:00'));
    this.inspectionTimeDataSource.push(new DropdownListValues('09:30', stripTime + ' 09:30:00'));
    this.inspectionTimeDataSource.push(new DropdownListValues('10:00', stripTime + ' 10:00:00'));
    this.inspectionTimeDataSource.push(new DropdownListValues('10:30', stripTime + ' 10:30:00'));
    this.inspectionTimeDataSource.push(new DropdownListValues('11:00', stripTime + ' 11:00:00'));
    this.inspectionTimeDataSource.push(new DropdownListValues('11:30', stripTime + ' 11:30:00'));
    this.inspectionTimeDataSource.push(new DropdownListValues('12:00', stripTime + ' 12:00:00'));
    this.inspectionTimeDataSource.push(new DropdownListValues('12:30', stripTime + ' 12:30:00'));
    this.inspectionTimeDataSource.push(new DropdownListValues('13:00', stripTime + ' 13:00:00'));
    this.inspectionTimeDataSource.push(new DropdownListValues('13:30', stripTime + ' 13:30:00'));
    this.inspectionTimeDataSource.push(new DropdownListValues('14:00', stripTime + ' 14:00:00'));
    this.inspectionTimeDataSource.push(new DropdownListValues('14:30', stripTime + ' 14:30:00'));
    this.inspectionTimeDataSource.push(new DropdownListValues('15:00', stripTime + ' 15:00:00'));
    this.inspectionTimeDataSource.push(new DropdownListValues('15:30', stripTime + ' 15:30:00'));
    this.inspectionTimeDataSource.push(new DropdownListValues('16:00', stripTime + ' 16:00:00'));
    this.inspectionTimeDataSource.push(new DropdownListValues('16:30', stripTime + ' 16:30:00'));
    this.inspectionTimeDataSource.push(new DropdownListValues('17:00', stripTime + ' 17:00:00'));
  }

  SetServiceTechnicianUri() {
    var route = new ServiceAreaTechnicianRoute(`${this.exemplarApiUrl}`);
    //console.log("serviceTechnicianCollectionResourceParameters: " + JSON.stringify(this.serviceTechnicianCollectionResourceParameters));
    this.serviceAreaTechnicianUri = route.GetAll(this.serviceTechnicianCollectionResourceParameters);
  }

  async GetRegionLead() {
    var route = this.serviceRegionRoute.GetAll("", this.userId, false, 0);
    await this.GetModel(route, this.LoadRegionLeadSuccessCallback);
  }

  async GetRegionManager() {
    var route = this.serviceManagerRoute.ReturnListOfRegions(this.userId);
    await this.GetModel(route, this.LoadRegionManagerSuccessCallback);
  }

  async GenerateSchedule() {
    this.showSchedule = false;
    this.autoSchedulerList = [];
    this.model = new AutoScheduler();
    this.isGenerating = true;

    if (this.selectedRegionId == 0) {
      ToastrHelper.DisplayToastWarning("Please select a Region from the Service Region drop down.");
      this.isGenerating = false;
      return;
    }

    if (this.selectedInspectionDate.length == 0 || !isDate(new Date(this.selectedInspectionDate))) {
      ToastrHelper.DisplayToastWarning("Please select a valid date.");
      this.isGenerating = false;
      return;
    }

    //Get all active ServiceAreaIds from selected Region
    await this.GetModel(this.serviceAreaRoute.GetAll(this.selectedRegionId.toString(), false, 0), this.GetServiceAreasByRegionCallback);
    //await this.GetModel(this.serviceAreaRoute.GetAll('11', false, 0), this.GetServiceAreasByRegionCallback);

    //loop thru list of serviceAreaIds and make generate schedule call:
    this.activeServiceAreasByRegion.forEach((serviceArea: any) => {
      this.GetModel(this.mvcAutoSchedulerRoute.GenerateSchedule(serviceArea.value, this.selectedInspectionDate), this.LoadAutoSchedulerListCallback);
    });

    setTimeout(() => {

      this.isGenerating = false;
    }, 3000);

    //this.showLoader = true;
    //this.GenerateSchedules(this.autoSchedulerList);
    //await this.GetModel(this.mvcAutoSchedulerRoute.GenerateSchedule(this.selectedRegionId, this.selectedInspectionDate), this.GenerateScheduleCallback);
    //debugger
    // await this.GetModel(this.mvcAutoSchedulerRoute.GenerateSchedule(989, '2021-12-01'), this.GenerateScheduleCallback);
  }

  // CallBacks

  GetProjectInspectionSuccessCallback(model: ProjectInspection) {
    this.editTimeModel = model;
    this.SetInspectionTimeDropdown();
    this.showEditForm = true;
  }

  async LoadRegionLeadSuccessCallback(model: Array<DropdownListValues>) {
    var serviceRegionIds = '';

    model.forEach((serviceRegion, key, array) => {
      if (key === array.length - 1) {
        serviceRegionIds += serviceRegion.value;
      }
      else {
        serviceRegionIds += serviceRegion.value + ',';
      }
    });

    this.serviceTechnicianCollectionResourceParameters.RegionIds = serviceRegionIds;
    this.SetServiceTechnicianUri();
    if (model.length > 0) {
      if (this.serviceRegionUri.length == 0) {
        this.serviceRegionUri = this.serviceRegionRoute.GetAll('', this.userId, false, 0);
      }
    }
  }

  async LoadRegionManagerSuccessCallback(model: ServiceRegionIds) {
    this.serviceTechnicianCollectionResourceParameters.RegionIds = model.RegionIds;
    this.SetServiceTechnicianUri();
    if (model.RegionIds.length > 0) {
      if (this.serviceRegionUri.length == 0) {
        this.serviceRegionUri = this.serviceRegionRoute.GetAll(this.serviceTechnicianCollectionResourceParameters.RegionIds, 0, false, 0);
      }
    }
  }

  //GenerateScheduleCallback(model: AutoScheduler) {
  //    console.log(model);
  //    this.showLoader = false;
  //    //debugger

  //    if (model.HasInspections == false) {
  //        ToastrHelper.DisplayToastWarning("No Inspections found.")
  //        return;
  //    }

  //    if (!model.Routes || model.Routes.length == 0) {
  //        this.model = model;
  //        this.hasNoRoutes = true;
  //        return;
  //    }

  //    this.model = model;

  //    this.showSchedule = true;
  //}

  async LoadAutoSchedulerListCallback(model: AutoScheduler) {
    if (!model.Routes || model.Routes.length == 0) {
      model.HasNoRoutes = true;
    }

    this.autoSchedulerList.push(model);
  }

  GetServiceAreasByRegionCallback(model: ServiceRegionIds) {
    this.activeServiceAreasByRegion = model;
  }


  // Events
  UpdateTimeCallback() {
    this.inspectionToUpdate.HasValidTime = true;
    this.inspectionToUpdate.InspectionTime = this.editTimeModel.ScheduleDate;

    forEach(this.model.Routes, (route) => {
      forEach(route.ProjectInspectionDetails, (details) => {
        if (details.ProjectInspectionId == this.inspectionToUpdate.ProjectInspectionId) {
          var justTime = this.editTimeModel.ScheduleDate.slice(this.editTimeModel.ScheduleDate.length - 8);
          details.InspectionTime = justTime;
          details.HasValidTime = true;
        }
      })
    });
  }

  onSettingsClicked() {
    this.settingsModal.open = true;
  }

  onCancelSettings() {
    this.settingsModal.open = false;
  }

  onSaveSettings() {
    this.settingsModal.open = false;
  }

  onAreaChanged(e: any) {
    //this.selectedAreaId = e.sender.value();
    //this.selectedServiceArea = e.sender.text();

    this.selectedRegionId = e.sender.value();
    this.selectedRegion = e.sender.text();

    this.isGenerating = false;

    if (this.selectedRegionId != 0) {
      this.showFieldTechAvailabityButton = true;
    }

    if (this.roleId == Roles.ServiceTech2) {
      this.serviceRegionUri = this.serviceRegionRoute.GetAll(this.selectedRegionId.toString(), this.userId, false, 0);
    }
    else {
      this.serviceRegionUri = this.serviceRegionRoute.GetAll(this.selectedRegionId.toString(), 0, false, 0);
    }

    this.serviceAreaUri = this.serviceAreaRoute.GetAll(this.selectedRegionId.toString(), false, 0);
  }

  onCloseClicked() {
    this.showAvailability = false;
  }

  onAvailabilityClicked() {

    EventBus.$emit(AutoSchedulerEvents.AvailabilityClicked, this.serviceTechnicianCollectionResourceParameters);
    this.showAvailability = true;
  }

  onAddExceptionClicked() {
    var route = new Route();
    route.FieldTechId = 0;
    route.Id = this.model.Routes.length + 1;
    route.IsException = true;
    var projectDetails = new Array<ProjectInspectionDetails>();
    route.ProjectInspectionDetails = projectDetails;
    this.model.Routes.push(route);
  }
}
