import { Component, Vue } from "vue-property-decorator";
import { GlobalEvents, GlobalEventBus } from "@ExemplarCommon/eventBus";
import { PageBase } from "@ExemplarCommon/PageBase";
import VueLayoutComponent from "./../../../Views/Shared/LayoutComponents/VueLayoutComponent";
import Grid from "@ExemplarComponents/Grid/GridComponent";
import { AssetDeleteDetail, ProjectAssetsToDelete } from "@ExemplarViewModels/ProjectAssetsToDelete";
import { ApiDefaultRoute } from "@ExemplarRoutes/ApiDefaultRoute";
import { MvcAssetUtilityRoutes } from "@ExemplarRoutes/MvcAssetUtilityRoutes";
import { forEach, findIndex, find } from "lodash";
import { ToastrHelper } from "@ExemplarCommon/ToastrHelper";
import NumericComponent from "@ExemplarComponents/Controls/NumericComponent";
//Vue.use(Toasted);
@Component({
  template: "#utilities-index",
  components: {
    Grid,
    VueLayoutComponent,
    NumericComponent
  }
})

export default class UtilitiesIndexComponent extends PageBase<null> {

  unauthorized: boolean = false;
  model: Array<ProjectAssetsToDelete> = new Array<ProjectAssetsToDelete>();
  assetsToDeleteCount: number = 0;
  projectCount: number = 10;
  assetsDeleted: number = 0;
  startTimer!: Date;
  EndTimer!: Date;
  assetUtilityRoutes: MvcAssetUtilityRoutes = new MvcAssetUtilityRoutes();
  showDelete: boolean = false;
  constructor() {
    super();
  }

  mounted() {
    GlobalEventBus.$on(GlobalEvents.Unauthorized, () => {
      this.unauthorized = true;
    });
  }

  onGetAssetsClicked() {
    ToastrHelper.DisplayToastWarning("Searching Assets.....")
    let projectTake = this.projectCount;
    this.startTimer = new Date;
    // var route = new ApiDefaultRoute(this.exemplarApiUrl, `Utilities?projectTake=${projectTake}`);
    this.GetModel(this.assetUtilityRoutes.GetAssetsToDelete(projectTake), this.GetModelCallback);
    // this.GetModel(route.uri, this.GetModelCallback);
  }

  async onDeleteAssetsClicked() {
    this.showDelete = false;
    ToastrHelper.DisplayToastWarning("Deleting Records.....")
    forEach(this.model, async (item: ProjectAssetsToDelete) => {

      item.AssetDetail.forEach((asset: AssetDeleteDetail) => {
        if (asset.AssetFullPath.toUpperCase().includes("JPG")) {
          console.log("Deleting  " + asset.AssetFullPath);
          this.GetModel(this.assetUtilityRoutes.DeleteAssetImage(asset.AssetFullPath, asset.AssetId), () => {
            this.assetsDeleted = this.assetsDeleted + 1;
            if (item) {
              var index = findIndex(item.AssetDetail, { AssetId: asset.AssetId });
              if (index > -1) {
                item.AssetDetail.splice(index, 1);
              }
            }
          });
        }
      });
    })
  }

  CalculateMinutes(dt2: Date, dt1: Date) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));
  }

  GetModelCallback(model: any) {
    this.EndTimer = new Date;
    var minutes = this.CalculateMinutes(this.EndTimer, this.startTimer);
    console.log("Runtime (minutes): " + minutes + "    Result:  " + JSON.stringify(model));
    //this.assetsToDeleteCount = 0;

    //if (model.length > 0) {
    //    this.showDelete = true;
    //    model.forEach((projectAssetsToDelete) => {
    //        this.assetsToDeleteCount = this.assetsToDeleteCount + projectAssetsToDelete.AssetDetail.length;
    //        this.model = model;
    //    });
    //}
    //else {
    //    ToastrHelper.DisplayToastWarning("No Records found.")
    //    this.model = [];
    //}

  }
}
