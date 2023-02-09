import { injectable } from "inversify";
import { GridColumnProps } from "@progress/kendo-vue-grid";
import GridCheckboxCell from "@ExemplarComponents/Grid/GridCheckboxCell";
import GridModel from "@ExemplarViewModels/GridModel";
import IGridModel from "@ExemplarInterfaces/IGridModel";

//@injectable()
export default class SampleGridModel extends GridModel implements IGridModel {
  allowSorting = true;
  allowFiltering = true;
  allowSearching = true;
  columns: Array<GridColumnProps | string> = [{
    field: "Id",
    filterable: false,
    width: 100,
  },
    "ShortName", // "columns" needs at least one column of non-fixed width when the grid is initialized.
  {
    cell: GridCheckboxCell,
    field: "IsActive",
    filter: "boolean",
    type: "boolean",
    width: 200,
  },
  ];
  dataReadRoute = "Samples";
  gridType = "SampleView";
  initialPageSize = 50;
  linkUrl = "https://portalstaging.hancockclaims.com/Customer/ViewInsCompany/{Id}";
  linkUrlParams = ["Id"];
}
