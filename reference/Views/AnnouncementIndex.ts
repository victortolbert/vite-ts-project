import { Component, Watch } from "vue-property-decorator";
import { GlobalEvents, GlobalEventBus } from "@ExemplarCommon/eventBus";
import PaginatedPageBase from "@ExemplarComponents/Page/PaginatedPageBase";
import VueLayoutComponent from "./../../../Views/Shared/LayoutComponents/VueLayoutComponent";
import Grid from "@ExemplarComponents/Grid/GridComponent";
import AnnouncementGridModel from "./ViewModels/AnnouncementGridModel";
import PagerToolbarComponent from "@ExemplarComponents/Controls/PagerToolbarComponent";
import { ApiResponse } from "@ExemplarDataAccess/ApiResponse";
import ExportButton from "@ExemplarComponents/Button/ExportButton";

@Component({
  template: "#announcement-index",
  components: {
    Grid,
    PagerToolbar: PagerToolbarComponent,
    VueLayoutComponent,
    ExportButton
  }
})

export default class AnnouncementsIndexComponent extends PaginatedPageBase<null> {

  cardMode: boolean = false;
  editMode: boolean = false;
  gridModel = new AnnouncementGridModel();
  model: Array<any> = new Array<any>();
  unauthorized: boolean = false;

  BindGrid(response: ApiResponse) {
    this.model = response.model.Model;
    this.pager = response.model.Pager;
    this.ready = true;
  }

  constructor() {
    super();
  }

  getDetails(event: MouseEvent, dataItem: any, dataIndex: number) {
    console.log("Get Details Called on announcement ID:", dataItem.Id)
  }

  mounted() {
    this.gridModel.accessToken = this.accessToken;
    this.gridModel.apiBase = this.exemplarApiUrl;
    this.gridModel.linkCallback = this.getDetails;
    this.gridModel.dataReadSuccessCallback = this.BindGrid;

    const vueLayoutRef = this.$refs.vueLayoutRef as VueLayoutComponent;
    if (vueLayoutRef)
      vueLayoutRef.collapsed = true;

    GlobalEventBus.$on(GlobalEvents.Unauthorized, () => {
      this.unauthorized = true;
    });
  }
}
