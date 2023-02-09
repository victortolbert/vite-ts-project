import GridCheckboxCell from "@ExemplarComponents/Grid/GridCheckboxCell";
import GridModel, { GridColumn } from "@ExemplarViewModels/GridModel";
import IGridModel from "@ExemplarInterfaces/IGridModel";

export default class AvailableServiceTypeGridModel extends GridModel implements IGridModel {
  allowFiltering = true;
  allowSelecting = true;
  allowSorting = true;
  columns: Array<GridColumn | string> = [{
    field: "Id",
    hidden: true,
  },
  {
    field: "Name",
    width: 300,
  },
  {
    field: "CreatedByName",
    hidden: true,
  },

  {
    field: "CreatedOn",
    hidden: true,
  },

  {
    field: "RequiresPhone",
    hidden: true,
  },
  {
    field: "CreatedBy",
    hidden: true,
  },
  {
    field: "Duration",
    hidden: true,
  },
  {
    field: "HasDescription",
    hidden: true,
  },
  {
    field: "ParentId",
    hidden: true,
  },
  {
    field: "HasQuantity",
    hidden: true,
  },
  {
    field: "RequiresDate",
    hidden: true,
  },

  {
    field: "ShowCalendar",
    hidden: true,
  },
  {
    export: false,
    field: "RowVersion",
    hidden: true,
  },
  {
    field: "CustomerDescription",
    title: "Customer Description",
  },
  {
    cell: GridCheckboxCell,
    field: "OnExternalForm",
    filter: "boolean",
    title: "On External Form",
    type: "boolean",
    width: 200,
  },
  {
    cell: GridCheckboxCell,
    field: "IsActive",
    filter: "boolean",
    title: "Is Active",
    type: "boolean",
    width: 200,
  },
  ];
  dataReadRoute = "AvailableServiceTypes";
  exportHidden = true;
  gridType = "DefaultGridView";
  //linkUrl = "https://portalstaging.hancockclaims.com/ServiceType/CreateServiceType/{Id}";
  linkUrlParams = ["Id"];
}
