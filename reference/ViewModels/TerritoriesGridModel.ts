import GridCheckboxCell from "@ExemplarComponents/Grid/GridCheckboxCell";
import GridModel, { GridColumn } from "@ExemplarViewModels/GridModel";
import IGridModel from "@ExemplarInterfaces/IGridModel";

export default class TerritoriesGridModel extends GridModel implements IGridModel {
  allowFiltering = true;
  allowSelecting = true;
  allowSorting = true;
  columns: Array<GridColumn | string> = [
    {
      field: "Name",
      width: 200,
      orderIndex: 1,
    },
    {
      field: "TerritoryLead",
      title: "Territory Lead",
      width: 200,
      orderIndex: 2,
    },
    {
      field: "RegionManagers",
      title: "Region Managers",
      orderIndex: 3,
      width: 400,
    },
    {
      cell: GridCheckboxCell,
      field: "IsCatastropheRegion",
      filter: "boolean",
      title: "Is Catastrophe",
      type: "boolean",
      width: 200,
      orderIndex: 4,
    },
    {
      cell: GridCheckboxCell,
      field: "IsActive",
      filter: "boolean",
      type: "boolean",
      width: 200,
      orderIndex: 5,
    },
    {
      field: "Id",
      hidden: true,
    },
    {
      field: "CreatedOn",
      hidden: true,
    },
    {
      field: "CreatedByName",
      hidden: true,
    },
    {
      field: "RegionLeadId",
      hidden: true,
    },
    {
      field: "RowVersion",
      hidden: true
    },
  ];
  dataReadRoute = "ServiceRegions";
  gridType = "DefaultGridView";
}
