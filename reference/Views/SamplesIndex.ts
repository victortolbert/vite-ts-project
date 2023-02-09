import { Component, Vue, Watch } from "vue-property-decorator";
import { GlobalEvents, GlobalEventBus } from "@ExemplarCommon/eventBus";
import { PageBase } from "@ExemplarCommon/PageBase";
import VueLayoutComponent from "./../../../Views/Shared/LayoutComponents/VueLayoutComponent";
import Grid from "@ExemplarComponents/Grid/GridComponent";
import SampleGridModel from "./ViewModels/SampleGridModel";
import SampleEmailGridModel from "./ViewModels/SampleEmailGridModel";
import CompanyNotificationOptions from "./ChildComponents/CompanyNotificationOptionsComponent";
import CompanyNotificationOptionsModel from "./ViewModels/CompanyNotificationOptionsModel";
import CustomerEmailAccountsComponent from "./ChildComponents/Customer/CustomerEmailAccountsComponent";
import ServiceTypeGridModel from "./ViewModels/ServiceTypeGridModel";
import StateDropdownComponent from "@ExemplarComponents/Dropdowns/StateDropdownComponent";
import TimezoneDropdownComponent from "@ExemplarComponents/Dropdowns/TimezoneDropdownComponent";
import ProjectStatusDropdownComponent from "@ExemplarComponents/Dropdowns/ProjectStatusDropdownComponent";
import ServiceRegionDropdownComponent from "@ExemplarComponents/Dropdowns/ServiceRegionDropdownComponent";
import ServiceAreaDropdownComponent from "@ExemplarComponents/Dropdowns/ServiceAreaDropdownComponent";
import UserTypeDropdownComponent from "@ExemplarComponents/Dropdowns/UserTypeDropdownComponent";
import RoleDropdownComponent from "@ExemplarComponents/Dropdowns/RoleDropdownComponent";
import MasterRescheduleReasonTypeDropdownComponent from "@ExemplarComponents/Dropdowns/MasterRescheduleReasonTypeDropdownComponent";
import MasterEscalationReasonTypeDropdownComponent from "@ExemplarComponents/Dropdowns/MasterEscalationReasonTypeDropdownComponent";
import { lazyInject } from "../../../Scripts/Common/IocContainer";
import ProjectCommentsComponent from "@ExemplarComponents/ProjectCommentsComponent";
import ProjectHistoryComponent from "@ExemplarComponents/ProjectHistoryComponent";
import ProjectHistoryGridModel from "@ExemplarComponents/Grid/BaseGridModels/ProjectHistoryGridModel";
import ProjectCommentsGridModel from "@ExemplarComponents/Grid/BaseGridModels/ProjectCommentsGridModel";
import InspectionCountsComponent from "@ExemplarComponents/InspectionCountsComponent";

//Vue.use(Toasted);
@Component({
  template: "#samples-index",
  components: {
    CompanyNotificationOptions,
    Grid,
    VueLayoutComponent,
    CustomerEmailAccountsComponent,
    StateDropdownComponent,
    TimezoneDropdownComponent,
    ProjectStatusDropdownComponent,
    ServiceRegionDropdownComponent,
    ServiceAreaDropdownComponent,
    UserTypeDropdownComponent,
    RoleDropdownComponent,
    MasterRescheduleReasonTypeDropdownComponent,
    MasterEscalationReasonTypeDropdownComponent,
    ProjectHistoryComponent,
    ProjectCommentsComponent,
    InspectionCountsComponent,

  }
})

export default class SamplesIndexComponent extends PageBase<null> {

  unauthorized: boolean = false;

  //@lazyInject(SampleGridModel)
  //sampleGridModel!: SampleGridModel;
  companyNotificationOptionsModel = new CompanyNotificationOptionsModel(302);
  companyNoticationsOptionComponent = new CompanyNotificationOptions();
  sampleGridModel = new SampleGridModel();
  sampleEmailGridModel = new SampleEmailGridModel(302);
  serviceTypeGridModel = new ServiceTypeGridModel(302);
  projectHistoryGridModel = new ProjectHistoryGridModel(1163392);
  selectedStateName = "";
  selectedStateValue = "43";
  selectedTimezone = "3";
  selectedProjectStatus = "7";
  selectedServiceRegion = "";
  selectedServiceArea = "944";
  serviceRegionIds = "11,19,24";
  selectedUserType = "5";
  exemplarApi = "";
  showActive = true;
  regionLead = 3875;
  isMounted = false;
  projectCommentsGridModel: ProjectCommentsGridModel = new ProjectCommentsGridModel(1162139);

  constructor() {
    super();
  }

  mounted() {
    this.ValidateViewState();
    this.sampleGridModel.accessToken = this.accessToken;
    this.sampleGridModel.apiBase = this.exemplarApiUrl;
    this.sampleEmailGridModel.accessToken = this.accessToken;
    this.sampleEmailGridModel.apiBase = this.exemplarApiUrl;
    this.serviceTypeGridModel.accessToken = this.accessToken;
    this.serviceTypeGridModel.apiBase = this.exemplarApiUrl;

    this.projectCommentsGridModel.apiBase = this.exemplarApiUrl;
    this.projectCommentsGridModel.accessToken = this.accessToken;

    this.companyNotificationOptionsModel.apiBase = this.exemplarApi;
    this.companyNotificationOptionsModel.accessToken = this.accessToken;


    this.exemplarApi = this.exemplarApiUrl;
    this.isMounted = true;
    GlobalEventBus.$on(GlobalEvents.Unauthorized, () => {
      this.unauthorized = true;
    });

  }


  handleTimezoneChange(e: any) {
    var newTZvalue = e.value();
    console.log("The Timezone has changed: " + newTZvalue);
  }

  handleStateChange(e: any) {
    this.selectedStateValue = e.value();
    this.selectedStateName = e.text();
    console.log("State value has changed: " + this.selectedStateName);
  }

  handleProjectStatusChange(e: any) {
    var newProjectStatusValue = e.text();
    console.log("Project Status has changed: " + newProjectStatusValue);
  }

  handleServiceRegionChange(e: any) {
    var newServiceRegionvalue = e.text();
    console.log("The Service Region has changed: " + newServiceRegionvalue);
  }

  handleServiceAreaChange(e: any) {
    var newServiceAreaValue = e.text();
    var test = e.value();
    console.log("The Service Area has changed: " + newServiceAreaValue);
    console.log(test);
  }

  handleUserTypeChange(e: any) {
    var newUserType = e.text();
    console.log("User Type has changed: " + newUserType);
  }

  handleRoleChange(e: any) {
    var newRoleValue = e.text();
    console.log("Role has changed: " + newRoleValue);
  }

  handleRescheduleReasonChange(e: any) {
    var newRescheduleReason = e.text();
    console.log("Reschedule Reason has changed: " + newRescheduleReason);
  }

  handleEscalationReasonChange(e: any) {
    var newEscalationReason = e.text();
    console.log("Escalation Reason has changed: " + newEscalationReason);
  }
}
