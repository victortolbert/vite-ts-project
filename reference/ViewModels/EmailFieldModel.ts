import { Method } from "axios";
import MultiSelectModel from "@ExemplarViewModels/MultiSelectModel";

export default class EmailFieldModel extends MultiSelectModel {
  companyId: number;
  dataSourceMethod: Method = "get";
  dataUpdateBase = "https://localhost:44311/api/CompanyNotificationRecipient/";
  dataUpdateMethod: Method = "put";
  dataTextField = "Email";
  errorMessage = "";
  mappingType = "grid"
  notificationTypeId!: number;
  optionSourceBase = "https://localhost:44311/api/";
  optionSourceItemKey = "Email";
  optionSourceTail = "CustomerEmailAccount";
  optionSourceParams = { accessToken: <string>$("#accessToken").val() };
  placeholder = "Select recipients";
  successMessage = "The email insert/update has been successful";
  valueSourceBase = "https://localhost:44311/api/CompanyNotificationRecipient";
  valueSourceItemKey = "RecipientEmail";
  valueSourceParams = { accessToken: <string>$("#accessToken").val() };
  constructor(companyId: number) {
    super();
    this.companyId = companyId;
    this.dataUpdateRoute = `${this.dataUpdateBase}${companyId}`;
    this.optionSourceRoute = `${this.optionSourceBase}${this.optionSourceTail}?CompanyId=${companyId}`;
    this.valueSourceRoute = `${this.valueSourceBase}?CompanyId=${companyId}`
  }
}
