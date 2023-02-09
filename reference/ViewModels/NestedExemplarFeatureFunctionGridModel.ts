import { injectable } from "inversify";
import { GridColumnProps } from "@progress/kendo-vue-grid";
import GridCheckboxCell from "@ExemplarComponents/Grid/GridCheckboxCell";
import GridModel from "@ExemplarViewModels/GridModel";
import IGridModel from "@ExemplarInterfaces/IGridModel";
import GridCommentCell from "@ExemplarComponents/Grid/GridCommentCell";
import { ApiResponse } from "@ExemplarDataAccess/ApiResponse";

//@injectable()
export default class NestedExemplarFeatureFunctionGridModel extends GridModel implements IGridModel {
    baseURL = "ExemplarFeatureFunctions";
    allowAdding = true;
    allowEditing = true;
    allowDeleting = true;
    allowFiltering = false;
    allowSelecting = false;
    allowSorting = false;
    allowScrolling = false;
    columns: Array<GridColumnProps | string> = [
        {
            field: "Id",
            hidden: true,
        },
        {
            field: "Name",
            title: "Feature Function Name",
            editable: true,
        },
        {
            field: "Description",
            editable: true,
            cell: GridCommentCell
        },
        {
            cell: GridCheckboxCell,
            field: "IsActive",
            filter: "boolean",
            type: "boolean",
            width: 125,
            editable: true
        },
        {
            field: "ExemplarFeature",
            editable: false,
        },
        {
            field: "ExemplarFeatureId",
            editable: false,
            hidden: true,
        },
    ];


    gridType = "DefaultGridView";
    dataUpdateErrorCallback: (response: ApiResponse) => void;

    constructor(exemplarFeatureId: number, currentUserId: number, errorCallBack: ((response: ApiResponse) => void))
    {
        super();
        this.dataReadRoute = `${this.baseURL}`
        this.dataReadParams = { ExemplarFeatureId: exemplarFeatureId };
        this.dataCreateRoute = `${this.baseURL}`;
        this.dataCreateParams = { ExemplarFeatureId: exemplarFeatureId };
        this.dataDeleteRoute = `${this.baseURL}/{Id}?UpdatedBy=${currentUserId}`;
        this.dataDeleteRouteParams = ["Id"];
        this.dataUpdateRoute = `${this.baseURL}/{Id}?UpdatedBy=${currentUserId}`;
        this.dataUpdateRouteParams = ["Id"];

    }
}
