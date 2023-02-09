import { Method } from "axios";
import { GridColumnProps } from "@progress/kendo-vue-grid";
import { VNode } from "vue";
import EmailFieldModel from "./EmailFieldModel";
import GridModel from "@ExemplarViewModels/GridModel";
import GridCheckboxCell from "@ExemplarComponents/Grid/GridCheckboxCell";
import IGridModel from "../../../../Scripts/Interfaces/IGridModel";

interface ICompanyNotificationDataItem {
  NotificationTypeId: number,
  NotificationName: string,
  NotificationDescription: string,
  CompanyId: number,
  CompanyIdNotificationId: string,
  SendToAdjuster: boolean,
  editField: boolean,
  editValues: any,
}

interface IProps {
  dataIndex: number,
  dataItem: ICompanyNotificationDataItem,
}

export interface INotificationEmail {
  CompanyId: number,
  NotificationTypeId: number,
  RecipientsEmail: string,
  IsActive: boolean,
}

export interface IEmail {
  CompanyId: number,
  CompanyName: string,
  CreatedBy: number,
  CreatedByName: string,
  CreatedOn: string,
  Description: string,
  Email: string,
  Id: number,
  IsActive: boolean,
}

export default class CompanyNotificationOptionsModel extends GridModel implements IGridModel {
  static handleCheckboxChange(event: Event, dataItem: ICompanyNotificationDataItem) {
    const input = event.target as HTMLInputElement;
    dataItem.editValues.SendToAdjuster = input.checked;
  }

  allowExpanding = true;
  columns: Array<GridColumnProps> = [{
    cell: GridCheckboxCell,
    editable: true,
    editor: "boolean",
    field: "SendToAdjuster",
    title: "Send to Adjuster",
    type: "boolean",
  },
  {
    field: "NotificationTypeId",
    hidden: true,
  },
  {
    editable: false,
    field: "NotificationTypeName",
    title: "Notificaton",
  }, {
    editable: false,
    field: "NotificationTypeDescription",
    title: "Description",
  }
  ];
  companyId: number;
  dataReadKeys = "Model";
  dataReadBase = "CompanyNotification/";
  dataReadRoute = "";
  dataReadMethod: Method = "get";
  dataUpdateBase = "CompanyNotification/";
  dataUpdateMethod: Method = "put";
  dataUpdateRoute = "";
  emailFieldModel: EmailFieldModel;
  errorMessage = "";
  successMessage = "";

  constructor(companyId: number) {
    super();
    this.companyId = companyId;
    this.dataReadRoute = `${this.dataReadBase}${companyId}`;
    this.dataUpdateRoute = `${this.dataUpdateBase}${companyId}`;
    this.emailFieldModel = new EmailFieldModel(companyId);
  }
}
