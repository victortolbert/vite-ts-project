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
import SectionTabComponent from "@ExemplarComponents/Section/SectionTabComponent"
import { Button as KendoButton } from "@progress/kendo-vue-buttons";
import { UserRoute } from "@ExemplarRoutes/UserRoute";
import { AvailableServiceTypesRoute } from "@ExemplarRoutes/AvailableServiceTypeRoute";
import { CustomerServiceTypeRoute } from "@ExemplarRoutes/CustomerServiceTypesRoute";

import ExportButton from "@ExemplarComponents/Button/ExportButton";
// Viewmodel Imports
import CustomerGridModel from "./ViewModels/CustomerGridModel";
import CustomerCarrierGridModel from "./ViewModels/ChildComponents/CustomerCarrierGridModel";
import { Customer } from "@ExemplarViewModels/Customer";
import GridModel from "@ExemplarViewModels/GridModel";
import { TabSection } from "@ExemplarViewModels/TabSection";
import CustomerEmailDomainGridModel from "./ViewModels/ChildComponents/CustomerEmailDomainGridModel";
import CustomerNotificationGridModel from "./ViewModels/ChildComponents/CustomerNotificationGridModel";
import CustomerNotificationRecipientGridModel from "./ViewModels/ChildComponents/CustomerNotificationRecipientGridModel";
import CustomerEmailAccountGridModel from "./ViewModels/ChildComponents/CustomerEmailAccountGridModel";
import CustomerUserGridModel from "./ViewModels/ChildComponents/CustomerUserGridModel";
import CustomerServiceTypeGridModel from "./ViewModels/ChildComponents/CustomerServiceTypeGridModel";
import NestedCustomerServiceTypeGridModel from "./ViewModels/ChildComponents/NestedCustomerServiceTypeGridModel";
import { DropdownListValues } from "../../../Scripts/ViewModels/DropdownListValues";
import { ToastrHelper } from "../../../Scripts/Common/ToastrHelper";


@Component({
  template: "#customer-index",
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
    SectionTabComponent,
    BButton,
    BModal,
    PagerToolbar: PagerToolbarComponent,
    ExportButton,
    KendoButton,
  }
})

export default class CustomerIndexComponent extends EditFormBase<Customer> {
  @lazyInject("IValidatorListAsync<Customer>")
  editFormValidator!: IValidatorListAsync<Customer>;
  //model: Array<CustomerGridModel> = new Array<CustomerGridModel>();
  gridModel = new CustomerGridModel();
  editModel: Customer = new Customer();
  entityName = "Company";

  customerCarrierGridModel: CustomerCarrierGridModel;
  customerEmailDomainGridModel: CustomerEmailDomainGridModel;
  customerNotificationGridModel: CustomerNotificationGridModel;
  customerNotificationRecipientGridModel: CustomerNotificationRecipientGridModel;
  customerEmailAccountGridModel: CustomerEmailAccountGridModel;
  customerUserGridModel: CustomerUserGridModel;
  customerServiceTypeGridModel: CustomerServiceTypeGridModel;
  nestedCustomerServiceTypeGridModel: NestedCustomerServiceTypeGridModel;

  addNewServiceType: boolean = false;
  adjusterDirectorUri: string = '';
  adjusterManagerUri: string = '';
  availableServiceTypeRoute: AvailableServiceTypesRoute;
  customerTabSections: Array<TabSection> = this.initializeTabArray();
  customerServiceTypeRoute: CustomerServiceTypeRoute;
  gridValidationMessages: Array<string> = [];
  isMounted: boolean = false;
  isNewModel: boolean = true;
  newCustomerTitle: string = "Enter New Customer Details";
  newServiceTypeToAdd: string = '';
  updateServiceTypedd: boolean = true;
  userRoute: UserRoute;
  showButtons: boolean = true;

  searchQuery: string = "";

  serviceTypeUri: string = '';
  showCustomerDetails: boolean = true;
  showCustomerCarrier: boolean = false;
  showActiveServiceTypes: boolean = true;


  constructor() {
    super();
  }

  AddForm(): void {
    // Set type below:
    let newModel = new Customer();
    this.GetDetailsSuccessCallback(newModel);
    this.isInsert = true;
    this.isNewModel = true;
    //set id to 0 which will pull back all adjuster directors and adjuster managers
    this.adjusterDirectorUri = this.userRoute.ReturnDropdownOfAdjusterDirectors(0);
    this.adjusterManagerUri = this.userRoute.ReturnDropdownOfAdjusterManagers(0);

    this.InitializeForm(newModel);
    this.customerTabSections = this.initializeTabArray();
  }

  async addServiceTypeSubmitHandler(data: any) {
    if (this.newServiceTypeToAdd != '') {
      let customerServiceType = {
        CompanyId: this.editModel.Id,
        AvailableServiceTypeId: +this.newServiceTypeToAdd,
        BillingPrice: 0,
        CreatedBy: this.currentUserId,
        CreatedOn: new Date(),
        GeomniServiceType: false,
        IsActive: true,
        IsDeleted: false,
        IsHoverEnabled: false,
        IsEagleViewEnabled: false,
        IsLivegenicEnabled: false,
        OnExternalForm: false,
        IsVipBillable: false
      };
      await this.dataAccess.PostAsync(this.exemplarApiUrl + 'CompanyServiceType', customerServiceType, this.addServiceTypeSuccessCallBack, this.addServiceTypeErrorCallBack);
    }

  }

  addServiceTypeErrorCallBack(data: any) {
    ToastrHelper.DisplayToastError("Unable to Add Service Type");
    this.updateServiceTypedd = true;
  }

  addServiceTypeSuccessCallBack(data: any) {
    ToastrHelper.DisplayToastSuccess("Service Type Successfully added");
    this.customerServiceTypeGridModel.reloadAfterEdit();
    this.addNewServiceType = !this.addNewServiceType;
    this.updateServiceTypedd = true;
  }

  addServiceTypeChangeHandler(data: any) {
    if (data !== undefined && data.sender.value() != "0") {
      this.newServiceTypeToAdd = data.sender.value();
    }

  }
  async addServiceTypeToggleHandler(data: any) {
    if (this.updateServiceTypedd) {

      let id: number = this.editModel.Id === null ? 0 : this.editModel.Id;
      let customerSTUri = this.customerServiceTypeRoute.ReturnListOfCurrentServiceTypesByCompanyId(id);

      let exludedServiceTypeIds: string = '';

      await this.dataAccess.GetAsync(customerSTUri, (response: Array<DropdownListValues>) => {
        exludedServiceTypeIds = response.map(x => x.value).join(',');
      });

      this.serviceTypeUri = this.availableServiceTypeRoute.ReturnListOAvailableServiceTypes(exludedServiceTypeIds, true);
      this.updateServiceTypedd = false;
    }
    this.addNewServiceType = !this.addNewServiceType;
  }

  BindGrid(response: ApiResponse) {
    super.BindGrid(response);
  }

  customerNotificationExpandChange(event: any) {
    this.customerNotificationRecipientGridModel = new CustomerNotificationRecipientGridModel(this.editModel.Id, event.dataItem.NotificationTypeId, this.gridErrorMessageHandler);
    this.setGridModelData(this.customerNotificationRecipientGridModel);
    event.dataItem[event.target.$props.expandField] = event.value;
  }

  EditSuccessCallback(model: any) {
    this.gridModel.reloadAfterEdit();
  }

  EditFailedValidationCallback(model: any) {
    // Add any custom code here
  }

  GetDetailsSuccessCallback(model: any) {
    super.GetDetailsSuccessCallback(model);
    this.editModel = model;

    this.isMounted = true;

    //Set previous model name
    this.editModel.previousName = model.FullName;
    this.isNewModel = false;
  }

  ShowEditForm(id: number, callback: any): void {
    this.adjusterDirectorUri = this.userRoute.ReturnDropdownOfAdjusterDirectors(id);
    this.adjusterManagerUri = this.userRoute.ReturnDropdownOfAdjusterManagers(id);

    this.updateServiceTypedd = true;
    this.customerTabSections = this.initializeTabArray();
    this.updateServiceTypedd = true;

    super.ShowEditForm(id, callback);
  }

  GetDetails(event: MouseEvent, dataItem: any, dataIndex: number) {
    this.ShowEditForm(dataItem.Id, this.GetDetailsSuccessCallback);
  }

  getUserDetails(event: MouseEvent, dataItem: any, dataIndex: number) {
    //redirect to clicked user
    window.location.href = this.exemplarCoreUrl + `User/Users?searchquery=${dataItem.FullName}`;
  }

  gridErrorMessageHandler(data: ApiResponse) {
    this.gridValidationMessages = [];
    data.resultText.split(',').forEach((message: string) => {
      this.gridValidationMessages.push(message);
    });
  }

  handleSearch(query: string, event: MouseEvent) {
    this.gridModel.search = query;
  }

  handleStateChange(e: any) {
    this.editModel.StateId = +e.value();
    this.editModel.State = e.text();
    console.log("Changed State value to " + e.text());
  }

  handleAdjusterDirectorChange(data: any) {
    if (data.sender.value() != "0") {
      this.editModel.AdjusterDirector = data.sender.text();
      this.editModel.AdjusterDirectorId = +data.sender.value();
      console.log("Changed Adjuster Director to " + data.sender.text());
    }
  }

  handleAdjusterManagerChange(data: any) {
    if (data.sender.value() != "0") {
      this.editModel.AdjusterManager = data.sender.text();
      this.editModel.AdjusterManagerId = +data.sender.value();
      console.log("Changed Adjuster Manager to " + data.sender.text());
    }
    else if (this.editModel.AdjusterManagerId !== null) {
      this.editModel.AdjusterManagerId = null;
    }
  }

  mounted() {
    console.log("Customer Mounted");
    // Set ClassName below:
    this.className = "Companies";
    this.availableServiceTypeRoute = new AvailableServiceTypesRoute(this.exemplarApiUrl);
    this.customerServiceTypeRoute = new CustomerServiceTypeRoute(this.exemplarApiUrl);
    this.userRoute = new UserRoute(this.exemplarApiUrl);

    super.mounted();
  }

  initializeTabArray(): Array<TabSection> {
    let tabArray = new Array<TabSection>();

    tabArray.push(new TabSection("Customer Details", true, true));
    tabArray.push(new TabSection("Carriers", false, false, this.setCustomerCarrier));
    tabArray.push(new TabSection("Email Domains", false, false, this.setCustomerEmailDomain));
    tabArray.push(new TabSection("Notifications", false, false, this.setCustomerNotification));
    tabArray.push(new TabSection("Email Accounts", false, false, this.setCustomerEmailAccount));
    tabArray.push(new TabSection("Users", false, false, this.setCustomerUser));
    tabArray.push(new TabSection("Service Types", false, false, this.setCustomerServiceType));

    return tabArray;
  }

  tabChangeCallback(data: any) {

    //This will only show buttons when the 'main' tab is selected.
    this.showButtons = this.customerTabSections[0].isActive;
  }

  setCustomerCarrier(): void {
    if (this.editModel.Id != 0) {
      this.customerCarrierGridModel = new CustomerCarrierGridModel(this.editModel.Id, this.gridErrorMessageHandler);
      this.setGridModelData(this.customerCarrierGridModel);
      this.showButtons = false;
    }
  }

  setCustomerEmailAccount(): void {
    if (this.editModel.Id != 0) {
      this.customerEmailAccountGridModel = new CustomerEmailAccountGridModel(this.editModel.Id, this.gridErrorMessageHandler);
      this.setGridModelData(this.customerEmailAccountGridModel);
      this.showButtons = false;
    }
  }

  setCustomerEmailDomain(): void {
    if (this.editModel.Id != 0) {
      this.customerEmailDomainGridModel = new CustomerEmailDomainGridModel(this.editModel.Id, this.gridErrorMessageHandler);
      this.setGridModelData(this.customerEmailDomainGridModel);
      this.showButtons = false;
    }
  }

  setCustomerNotification(): void {
    if (this.editModel.Id != 0) {
      this.customerNotificationGridModel = new CustomerNotificationGridModel(this.editModel.Id, this.gridErrorMessageHandler);
      this.setGridModelData(this.customerNotificationGridModel);
      this.showButtons = false;
    }
  }

  setCustomerUser(): void {
    if (this.editModel.Id != 0) {
      this.customerUserGridModel = new CustomerUserGridModel(this.editModel.Id);
      this.setGridModelData(this.customerUserGridModel);
      this.customerUserGridModel.linkCallback = this.getUserDetails;
      this.showButtons = false;
    }
  }

  setCustomerServiceType(): void {
    if (this.editModel.Id != 0) {
      this.customerServiceTypeGridModel = new CustomerServiceTypeGridModel(this.editModel.Id, this.showActiveServiceTypes, this.gridErrorMessageHandler);
      this.setGridModelData(this.customerServiceTypeGridModel);
      this.showButtons = false;
    }
  }

  setCustomerGridTab(): void {
    this.showButtons = true;
  }

  renderDropDownButtonOnServiceTypeGrid(h: any, tdElement: any, props: any, listeners: any) {
    if (props.field !== 'expanded' || !props.dataItem.HasChildServiceTypes) {
      return tdElement;
    }

    return h('td');
  }


  serviceTypeExpandHandler(event: any) {

    this.nestedCustomerServiceTypeGridModel = new NestedCustomerServiceTypeGridModel(this.editModel.Id, event.dataItem.AvailableServiceTypeId, this.gridErrorMessageHandler);
    this.setGridModelData(this.nestedCustomerServiceTypeGridModel);

    event.dataItem[event.target.$props.expandField] = event.value;
  }

  setGridModelData(newGrid: GridModel) {
    newGrid.accessToken = this.accessToken;
    newGrid.apiBase = this.exemplarApiUrl;
  }

  showActiveServiceTypesCheckboxChange(data: boolean) {
    this.showActiveServiceTypes = data;
    this.setCustomerServiceType();
    this.customerServiceTypeGridModel.reloadAfterEdit();
  }

}
