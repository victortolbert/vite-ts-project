import { injectable } from "inversify";
import { Method } from "axios";
import { GridColumnProps } from "@progress/kendo-vue-grid";
import GridCheckboxCell from "@ExemplarComponents/Grid/GridCheckboxCell";
import GridModel from "@ExemplarViewModels/GridModel";
import IGridModel from "@ExemplarInterfaces/IGridModel";

//@injectable()
export default class SampleEmailGridModel extends GridModel implements IGridModel {
  baseURL = "CustomerEmailAccount";
  allowAdding = true;
  allowEditing = true;
  allowPaging = false;
  allowExpanding = true;
  columns: Array<GridColumnProps | string> = [
    {
      field: "Id",
      hidden: true
    },
    {
      field: "CompanyId",
      hidden: true
    },
    {
      field: "CompanyName",
      hidden: true
    },
    {
      field: "CreatedBy",
      hidden: true
    },
    {
      field: "CreatedByName",
      hidden: true
    },
    {
      field: "CreatedOn",
      hidden: true
    },
    {
      field: "Email",
      title: "Account"
    },
    {
      cell: GridCheckboxCell,
      field: "IsActive",
      title: "is Active"
    }];

  //dataUpdateBase = "CompanyNotification/";
  dataUpdateMethod: Method = "put";
  dataUpdateRoute = "";
  dataUpdateRouteParams = ["Id"];
  dataCreateBase = "";
  dataCreateRoute = "";
  dataCreateMethod: Method = "post";
  hasTotalRow = true;
  gridType = "CustomerEmailAccountGridView";
  allowScrolling = false;

  constructor(id: number) {
    super();
    this.dataCreateRoute = `${this.baseURL}${id}/`;
    this.dataCreateParams = { companyId: id };
    this.dataReadRoute = `${this.baseURL}?CompanyId=${id}`;
    //this.dataReadParams = { CompanyId: id };
    this.dataReadRouteParams = ["CompanyId"];
  }
}
