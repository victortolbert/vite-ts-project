import GridCheckboxCell from "@ExemplarComponents/Grid/GridCheckboxCell";
import GridDateCell from "@ExemplarComponents/Grid/GridDateCell";
import GridModel, { GridColumn } from "@ExemplarViewModels/GridModel";
import IGridModel from "@ExemplarInterfaces/IGridModel";

//@injectable()
export default class AnnouncementGridModel extends GridModel implements IGridModel {
  allowFiltering = true;
  allowSelecting = true;
  allowSorting = true;
  columns: Array<GridColumn | string> = [{
    field: "Id",
    hidden: true,
  },
    "Title",
  {
    cell: GridDateCell,
    field: "PublishDate",
    filter: "date",
    type: "date",
  },
  {
    cell: GridDateCell,
    field: "EndDate",
    filter: "date",
    type: "date",
  },
    "Author",
  {
    cell: GridCheckboxCell,
    field: "HighPriority",
    filter: "boolean",
    type: "boolean",
    width: 125,
  },
  {
    field: "AnnouncementText",
    hidden: true,
  },
  {
    field: "CreatedOn",
    hidden: true,
  },
  {
    field: "SentOn",
    hidden: true,
  },
  {
    field: "SendEmail",
    hidden: true,
  },
  {
    field: "SendSmsEmail",
    hidden: true,
  },
  ];
  exportHidden: true;
  dataReadRoute = "Announcements";
  gridType = "DefaultGridView";
}
