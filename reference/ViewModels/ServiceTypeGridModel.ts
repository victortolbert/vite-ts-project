import { GridColumnProps } from "@progress/kendo-vue-grid";
import GridCheckboxCell from "@ExemplarComponents/Grid/GridCheckboxCell";
import GridModel from "@ExemplarViewModels/GridModel";
import IGridModel from "@ExemplarInterfaces/IGridModel";

export default class ServiceTypeGridModel extends GridModel implements IGridModel {
  allowFiltering = true;
  allowSorting = true;
  baseURL = "companies/";
  columns: Array<GridColumnProps | string> = [{
    field: "Name",
    title: "Service Type Name",
  }, {
    field: "CustomerDescription",
    title: "Service Type Description",
  }, {
    cell: GridCheckboxCell,
    field: "IsActive",
    filter: "boolean",
    title: "Active Flag",
    type: "boolean",
    width: 200,
  }];
  gridType = "ServiceTypeListView";
  constructor(id: number) {
    super();
    this.dataReadRoute = `${this.baseURL}${id}`;
  }
}
