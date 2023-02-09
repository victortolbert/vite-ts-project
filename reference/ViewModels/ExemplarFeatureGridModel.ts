import { injectable } from "inversify";
import GridCheckboxCell from "@ExemplarComponents/Grid/GridCheckboxCell";
import GridModel, { GridColumn } from "@ExemplarViewModels/GridModel";
import IGridModel from "@ExemplarInterfaces/IGridModel";
import GridCommentCell from "@ExemplarComponents/Grid/GridCommentCell";
import { ApiResponse } from "@ExemplarDataAccess/ApiResponse";

//@injectable()
export default class ExemplarFeatureGridModel extends GridModel implements IGridModel {
  baseURL = "ExemplarFeatures";
  allowAdding = true;
  allowExpanding = true;
  allowEditing = true;
  allowDeleting = true;
  allowFiltering = false;
  allowScrolling = false;
  allowSelecting = true;
  allowSorting = false;
  currentUserId = +<number>$("#userId").val();
  /*conditinalExpandCallback = this.canRowExpand;*/


  columns: Array<GridColumn | string> = [
    {
      field: "Id",
      hidden: false,
      orderIndex: 0,
      width: 50
    },
    {
      field: "Name",
      title: "Feature Name",
      hidden: false,
      editable: true,
      type: "text",
      orderIndex: 1,
      width: 250,
    },
    {
      field: "Description",
      hidden: false,
      cell: GridCommentCell,
      editable: true,
      orderIndex: 2,
      width: 500
    },
    {
      cell: GridCheckboxCell,
      field: "IsActive",
      filter: "boolean",
      type: "boolean",
      width: 125,
      orderIndex: 3
    },
    {
      field: "ExemplarFeatureFunctions",
      hidden: false,
      editable: false,
      orderIndex: 4
    },
    {
      field: "HasChildElements",
      hidden: true,
      editable: false,
      orderIndex: 5
    },
  ];

  exportHidden = true;
  gridType = "DefaultGridView";

  dataUpdateErrorCallback: (response: ApiResponse) => void;

  constructor(errorCallBack: ((response: ApiResponse) => void)) {
    super();
    this.dataReadRoute = `${this.baseURL}`
    this.dataCreateRoute = `${this.baseURL}`;
    this.dataDeleteRoute = `${this.baseURL}/{Id}?UpdatedBy=${this.currentUserId}`;
    this.dataDeleteRouteParams = ["Id"];
    this.dataUpdateRoute = `${this.baseURL}/{Id}?UpdatedBy=${this.currentUserId}`;
    this.dataUpdateRouteParams = ["Id"];
  }
}
