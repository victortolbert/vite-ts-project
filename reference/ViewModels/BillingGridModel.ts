import { injectable } from "inversify";
import { VNode } from "vue";
import GridCheckboxCell from "@ExemplarComponents/Grid/GridCheckboxCell";
import GridModel, { GridColumn } from "@ExemplarViewModels/GridModel";
import IGridModel from "@ExemplarInterfaces/IGridModel";
import BillingIssuesCell from "../BillingIssuesCell";

//@injectable()
export default class BillingGridModel extends GridModel implements IGridModel {
  allowFiltering = true;
  allowSelecting = true;
  allowSorting = true;
  columns: Array<GridColumn | string> = [{
    field: "Id",
    hidden: true,
  },
  {
    field: "Adjuster",
    hidden: true,
  },
  {
    cell: BillingIssuesCell,
    export: false,
    field: "BillingIssues",
    title: " ",
    width: "50px",
  },
  {
    field: "Company",
    exportName: "Customer Name",
  },
  {
    field: "ProjectStatusId",
    hidden: true,
    export: false,
  },
  {
    field: "StreetAddress1",
    hidden: true,
  },
  {
    field: "StreetAddress2",
    hidden: true,
  },
  ];
  dataReadRoute = "Billing";
  gridType = "DefaultGridView";
  height = "";
  rowRender(h: (...args: any[]) => any, trElement: VNode | null, defaultSlots: any, props: any, listeners: any) {
    const defaultClass = trElement?.data?.class;
    const classList = defaultClass ? (
      typeof defaultClass === "string" ?
        defaultClass.split(" ") :
        [...defaultClass]
    ) : [];
    props?.dataItem?.BillingIssues && classList.push("danger");
    return h("tr", { class: classList }, defaultSlots);
    return trElement;
  };
}
