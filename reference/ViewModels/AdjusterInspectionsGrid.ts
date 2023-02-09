import GridModel, { GridColumn } from "@ExemplarViewModels/GridModel";
import IGridModel from "@ExemplarInterfaces/IGridModel";
import { DownloadMenu } from "../Components/DownloadMenu";

export default class AdjusterInspectionsGrid extends GridModel implements IGridModel {
  accessToken: string;
  allowSorting = true;
  allowFiltering = true;
  endPoint: string = "AdjusterPortal";
  adjusterId: number;
  projectStatusId: number;
  showLoader = false;

  columns: Array<GridColumn | string> = [{
    field: "Id",
    hidden: true,
  },
  {
    field: "CompanyName",
    hidden: true,
  },
  {
    field: "ClaimNumber",
    sortable: false,
    width: 200,
  },
  {
    field: "ProjectStatus",
    title: "Status",
    width: 100,
  },
  {
    field: "InspectionDateAndTime",
    title: "Inspection Date",
    sortable: false,
    filterable: false,
    width: 200,
  },
  {
    field: "ProjectNumber",
    hidden: true,
  },
  {
    field: "ProjectStatusId",
    hidden: true,
  },
  {
    field: "ServiceTypes",
    sortable: false,
  },
  {
    field: "Address",
    sortable: false,
    width: 300
  },
  {
    field: "ProjectStatus",
    sortable: false,
  },
  {
    field: "TechnicianName"
  },
  {
    field: "Assets",
    hidden: true,
  },
  {
    field: "MapPoints",
    hidden: true,
  },
  {
    cell: DownloadMenu,
    key: "DownloadMenu",
    filterable: false,
    sortable: false,
    width: 150,
  },
  {
    field: "closeMenu",
    hidden: true,
  }
  ];
  dataReadRoute = "";
  gridType = "DefaultGridView";
  linkUrlParams = ["Id"];
  height = "400px";

  constructor() {
    super();
  }

}
