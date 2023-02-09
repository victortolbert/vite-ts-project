import GridCheckboxCell from "@ExemplarComponents/Grid/GridCheckboxCell";
import GridModel, { GridColumn } from "@ExemplarViewModels/GridModel";
import IGridModel from "@ExemplarInterfaces/IGridModel";

export default class extends GridModel implements IGridModel {
  allowFiltering = true;
  allowSelecting = true;
  allowSorting = true;
  columns: Array<GridColumn | string> = [{
    field: "Id",
    hidden: true,
  },
  {
    field: "AddressLatitude",
    hidden: true,
  },
  {
    field: "AddressLongitude",
    hidden: true,
  },
  {
    field: "ServiceRegionId",
    hidden: true,
  },
  {
    field: "PostalCode",
    hidden: true,
  },
  {
    field: "Radius",
    hidden: true,
  },
  {
    field: "TimeZone",
    hidden: true,
  },
  {
    field: "StateId",
    hidden: true,
  },
  {
    cell: GridCheckboxCell,
    field: "IsCatastropheArea",
    filter: "boolean",
    type: "boolean",
    width: 175,
  },
  {
    cell: GridCheckboxCell,
    field: "IsActive",
    filter: "boolean",
    type: "boolean",
    width: 150,
  },
  {
    field: "CreatedByName",
    hidden: true,
  },
  {
    field: "CreatedOn",
    hidden: true,
  }
  ];
  dataReadRoute = "ServiceAreas";
  exportHidden = true;
  gridType = "DefaultGridView";
  linkUrlParams = ["Id"];
}
