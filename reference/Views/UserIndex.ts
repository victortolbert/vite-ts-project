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
import AddRemoveMultiSelectComponent from "@ExemplarComponents/Controls/AddRemoveMultiSelectComponent";
import AuditLogComponent from "@ExemplarComponents/AuditLogComponent";
import BooleanComponent from "@ExemplarComponents/Controls/BooleanComponent";
import CheckBoxComponent from "@ExemplarComponents/Controls/CheckBoxComponent";
import DropdownComponent from "@ExemplarComponents/Controls/DropdownComponent";
import EditFormComponent from "@ExemplarComponents/EditFormComponent";
import ExportButton from "@ExemplarComponents/Button/ExportButton";
import Grid from "@ExemplarComponents/Grid/GridComponent";
import NumericComponent from "@ExemplarComponents/Controls/NumericComponent";
import PagerToolbarComponent from "@ExemplarComponents/Controls/PagerToolbarComponent";
import SearchField from "@ExemplarComponents/SearchFieldComponent";
import StateDropdownComponent from "@ExemplarComponents/Dropdowns/StateDropdownComponent";
import TextboxComponent from "@ExemplarComponents/Controls/TextboxComponent";
import { DropdownListValues } from "@ExemplarViewModels/DropdownListValues"
import { CustomerRoute } from "@ExemplarRoutes/CustomerRoute";
import { RoleRoute } from "@ExemplarRoutes/RoleRoute";
import { UserRoute } from "@ExemplarRoutes/UserRoute";

// Viewmodel Imports
import Address from "@ExemplarViewModels/Address";
import { User } from "@ExemplarViewModels/User";
import UserGridModel from "./ViewModels/UserGridModel";
import { UserCardViewType, IUserCardView } from "./ViewModels/UserCardViewModel";

@Component({
  template: "#user-index",
  components: {
    AddRemoveMultiSelectComponent,
    AuditLogComponent,
    BButton,
    BModal,
    BooleanComponent,
    DropdownComponent,
    EditFormComponent,
    ExportButton,
    Grid,
    PagerToolbar: PagerToolbarComponent,
    SearchField,
    StateDropdownComponent,
    TextboxComponent,
    VueLayoutComponent,
  }
})

export default class UserIndexComponent extends EditFormBase<User> {
  @lazyInject("IValidatorListAsync<User>")
  editFormValidator!: IValidatorListAsync<User>;

  adjusterDirectorUri: string = '';
  adjusterManagerUri: string = '';
  companyUri: string = "";
  customerRoute: CustomerRoute;
  editModel: User = new User();
  enableEmailChange: boolean = false;
  entityId: number;
  entityName = "User";
  formServiceAddress: Address = new Address();
  gridModel = new UserGridModel();
  isMounted: boolean = false;
  managedAdjustersUri: string = "";
  model: Array<IUserCardView> = new Array<IUserCardView>();
  roleRoute: RoleRoute;
  roleUri: string = "";
  searchQuery: string = "";
  sendEmail: boolean = false; // TODO: Figure out what to do with this.
  useMailingAddressAsServiceAddress: boolean = false;
  userRoute: UserRoute;
  unauthorized: boolean = false;

  constructor() {
    super();
  }

  mounted() {
    this.customerRoute = new CustomerRoute(this.exemplarApiUrl);
    this.roleRoute = new RoleRoute(this.exemplarApiUrl);
    this.userRoute = new UserRoute(this.exemplarApiUrl);

    this.className = "Users";
    super.mounted();
  }

  ChangeEmail() {
    this.enableEmailChange = true;
  }

  EditSuccessCallback(model: any) {
    // Add any custom code here
    super.EditSuccessCallback(model);
  }

  EditFailedValidationCallback(model: any) {
    // Add any custom code here
  }

  AddForm(userTypeId: number): void {
    // Set type below:
    let newModel = new User();
    newModel.UserTypeId = userTypeId;
    this.GetDetailsSuccessCallback(newModel);

    //set id to 0 which will pull back all adjuster directors and adjuster managers
    this.adjusterDirectorUri = this.userRoute.ReturnDropdownOfAdjusterDirectors(0);
    this.adjusterManagerUri = this.userRoute.ReturnDropdownOfAdjusterManagers(0);
    this.companyUri = this.customerRoute.getCustomers();
    this.roleUri = this.roleRoute.GetByUserTypeId(this.editModel.UserTypeId!.toString());
    this.InitializeForm(newModel);
  }

  //Methods below do not require editing
  BindGrid(response: ApiResponse) {
    super.BindGrid(response);
    for (let user of this.model) {
      user.cardType = new UserCardViewType(user.UserType);
    }
  }

  CheckIfMailingAddressIsSameAsServiceAddress(model: User) {
    return model.MailingStreetAddress1 === model.ServiceStreetAddress1 &&
      model.MailingStreetAddress2 === model.ServiceStreetAddress2 &&
      model.MailingCity === model.ServiceCity &&
      model.MailingStateId === model.ServiceStateId &&
      model.MailingPostalCode === model.ServicePostalCode;
  }

  GetUserTypeName() {
    return ["ERROR", "Application User", "Service Tech", "Insurance Adjuster"][this.editModel.UserTypeId ?? 0]
  }

  handleAssignedAdjusterChange(data: any) {
    if (data.sender.value() != "0") {
      this.editModel.Role = data.sender.text();
      this.editModel.RoleId = +data.sender.value();
    }
  }

  handleCompanyChange(data: Array<string>) {
    this.editModel.CompanyUserId = data;
    this.managedAdjustersUri = this.userRoute.ReturnDropdownOfManageableAdjusters(this.editModel.CompanyUserId);
    const managedAdjustersMultiSelectRef = this.$refs.managedAdjustersms as AddRemoveMultiSelectComponent;
    managedAdjustersMultiSelectRef && managedAdjustersMultiSelectRef.GetData();
  }

  handleMailingAddress1Change(value: string): void {
    this.editModel.MailingStreetAddress1 = value;
    if (this.useMailingAddressAsServiceAddress)
      this.editModel.ServiceStreetAddress1 = value;
  }

  handleMailingAddress2Change(value: string): void {
    this.editModel.MailingStreetAddress2 = value;
    if (this.useMailingAddressAsServiceAddress)
      this.editModel.ServiceStreetAddress2 = value;
  }

  handleMailingCityChange(value: string): void {
    this.editModel.MailingCity = value;
    if (this.useMailingAddressAsServiceAddress)
      this.editModel.ServiceCity = value;
  }

  handleMailingPostalCodeChange(value: string): void {
    this.editModel.MailingPostalCode = value;
    if (this.useMailingAddressAsServiceAddress)
      this.editModel.ServicePostalCode = value;
  }

  handleMailingStateChange(data: any) {
    if (data.value()) {
      this.editModel.MailingStateId = data.value();
      this.editModel.MailingState = data.text();
      if (this.useMailingAddressAsServiceAddress) {
        this.editModel.ServiceStateId = data.value();
        this.editModel.ServiceState = data.text();
      }
    }
  }

  handleManagedAdjustersChange(data: Array<string>) {
    this.editModel.ManagedAdjusterIds = data;
  }

  handleServiceAddress1Change(value: string): void {
    this.formServiceAddress.StreetAddress1 = value;
    this.editModel.ServiceStreetAddress1 = value;
  }

  handleServiceAddress2Change(value: string): void {
    this.formServiceAddress.StreetAddress2 = value;
    this.editModel.ServiceStreetAddress2 = value;
  }

  handleServiceCityChange(value: string): void {
    this.editModel.ServiceCity = value;
    this.formServiceAddress.City = value;;
  }

  handleServicePostalCodeChange(value: string): void {
    this.editModel.ServicePostalCode = value;
    this.formServiceAddress.PostalCode = value;
  }

  handleServiceStateChange(data: any) {
    if (data.value()) {
      this.formServiceAddress.StateId = data.value();
      this.formServiceAddress.State = data.text();
      this.editModel.ServiceStateId = data.value();
      this.editModel.ServiceState = data.text();
    }
  }

  handleRoleChange(data: any) {
    if (data.sender.value() != "0") {
      this.editModel.Role = data.sender.text();
      this.editModel.RoleId = +data.sender.value();
    }
  }

  handleUseMailingAddressAsServiceAddressChange(value: boolean): void {
    this.useMailingAddressAsServiceAddress = value;
    this.UpdateServiceAddres();
  }

  ShowEditForm(id: number, callback: any): void {
    this.adjusterDirectorUri = this.userRoute.ReturnDropdownOfAdjusterDirectors(id);
    this.adjusterManagerUri = this.userRoute.ReturnDropdownOfAdjusterManagers(id);
    this.companyUri = this.customerRoute.getCustomers();
    this.isInsert = false;
    this.editMode = true;
    this.userRoute && this.GetModel(this.userRoute.GetById(id, 1), callback, null);
  }

  GetDetailsSuccessCallback(model: User) {
    this.roleUri = this.roleRoute.GetByUserTypeId(model.UserTypeId!.toString());
    this.managedAdjustersUri = this.userRoute.ReturnDropdownOfManageableAdjusters(model.CompanyUserId);
    this.useMailingAddressAsServiceAddress = this.CheckIfMailingAddressIsSameAsServiceAddress(model);
    if (this.useMailingAddressAsServiceAddress)
      this.formServiceAddress = new Address();
    this.editModel.previousEmail = model.PrimaryEmail;
    super.GetDetailsSuccessCallback(model);
  }

  UpdateServiceAddres() {
    if (this.useMailingAddressAsServiceAddress) {
      this.editModel.ServiceStreetAddress1 = this.editModel.MailingStreetAddress1;
      this.editModel.ServiceStreetAddress2 = this.editModel.MailingStreetAddress2;
      this.editModel.ServiceCity = this.editModel.MailingCity;
      this.editModel.ServiceState = this.editModel.MailingState;
      this.editModel.ServiceStateId = this.editModel.MailingStateId;
      this.editModel.ServicePostalCode = this.editModel.MailingPostalCode;
    } else {
      this.editModel.ServiceStreetAddress1 = this.formServiceAddress.StreetAddress1;
      this.editModel.ServiceStreetAddress2 = this.formServiceAddress.StreetAddress2;
      this.editModel.ServiceCity = this.formServiceAddress.City;
      this.editModel.ServiceState = this.formServiceAddress.State;
      this.editModel.ServiceStateId = this.formServiceAddress.StateId;
      this.editModel.ServicePostalCode = this.formServiceAddress.PostalCode;
    }
  }
}
