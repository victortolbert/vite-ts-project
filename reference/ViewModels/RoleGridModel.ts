import GridCheckboxCell from "@ExemplarComponents/Grid/GridCheckboxCell";
import GridModel, { GridColumn } from "@ExemplarViewModels/GridModel";
import IGridModel from "@ExemplarInterfaces/IGridModel";

export default class RoleGridModel extends GridModel implements IGridModel {
  baseURL = "ExemplarRoles"
  allowEditing = true;
  allowDeleting = true;
  allowSorting = true;

  showDeleteCallback = this.disableButtonsOnSystemRole;
  showEditCallback = this.disableEditButton;
  linkCanRenderCallback = this.shouldLinkRender;


  columns: Array<GridColumn | string> = [
    {
      field: "Id",
      title: "Role Id",
      orderIndex: 0,
      editable: true,
      hidden: false,
      type: "text",
      width: 100,
    },
    {
      field: "Name",
      title: "Role Name",
      orderIndex: 1,
      editable: true,
      hidden: false,
      type: "text",
      width: 200,
    },
    {
      field: "Description",
      editable: true,
      orderIndex: 2,
      type: "text",
      width: 300,
    },
    {
      field: "IsSystemRole",
      orderIndex: 3,
      cell: GridCheckboxCell,
      editable: false,
      type: "boolean",
      width: 150,
    },
    {
      field: "IsActive",
      orderIndex: 4,
      editable: true,
      cell: GridCheckboxCell,
      type: "boolean",
      width: 100,
    },
    {
      field: "RolePermissions",
      hidden: false,
      orderIndex: 5,
      width: 500,
    },
    {
      field: "UserType",
      hidden: true,
    }

  ];


  dataReadRoute = "ExemplarRoles";
  gridType = "DefaultGridView";

  constructor() {
    super();

    this.dataCreateRoute = `${this.baseURL}`;
    this.dataCreateParams = { IsSystemRole: false };
    this.dataDeleteRoute = `${this.baseURL}/{Id}`;
    this.dataDeleteRouteParams = ["Id"];
    this.dataUpdateRoute = `${this.baseURL}/{Id}?UpdatedBy=${this.currentUserId}`;
    this.dataUpdateRouteParams = ["Id"];

    this.dataReadRoute = "ExemplarRoles";
    this.gridType = "DefaultGridView";
  }

  disableButtonsOnSystemRole(dataItem: any): boolean {
    return !dataItem.IsSystemRole;
  }

  disableEditButton(dataItem: any): boolean {
    return false;
  }

  shouldLinkRender(dataItem: any): boolean {
    return !dataItem.IsSystemRole;
  }
}
