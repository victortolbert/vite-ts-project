import { injectable, inject } from "inversify";
import { Component, Prop } from "vue-property-decorator";
import { FieldAsset } from "../../ViewModels/FieldAsset"; 
import { Asset } from "../../ViewModels/Asset"; 
import { PifEvents, EventBus } from ".././../Events";
import { UploadHelper } from ".././../HelperClasses/UploadHelper";
import { some, forEach, findIndex, last } from "lodash"; 
import { PageBase } from "@ExemplarCommon/PageBase";
import { BModal, BButton } from 'bootstrap-vue'
import { ApiDefaultRoute } from "@ExemplarRoutes/ApiDefaultRoute";
import { ToastrHelper } from "../../../../../Scripts/Common/ToastrHelper";
import { AssetFieldEnum } from "../../ViewModels/Enums/AssetFieldEnum";
import draggable from 'vuedraggable'

@Component({
    template: "#asset-viewer-template",
    components: { BModal, BButton, draggable}
})

@injectable()
export default class AssetViewerComponent extends PageBase<Array<Asset>> {

    ready: boolean = false;

    imgPath: string = "";

    imgToken: string = "";

    ExemplarApiUrl: string = "";

    userId: number = <number>$("#userId").val();  

    assetViewer = {
        data: [] as Array<FieldAsset>,
        promptText: "test",
        open: false,
        busy: false,
        noCloseOnBackdrop: true,
        noCloseOnEsc: true
    };

    DeleteAssetModal = {
        open: false,
        assetsToDelete: {} as any,
        busy: false,
        title: "",
        promptText: "",
        noCloseOnBackdrop: true,
        noCloseOnEsc: true
    };

    mounted() {

        EventBus.$on(PifEvents.OpenAssetViewer, async (fieldAssets: Array<FieldAsset>, ExemplarApiUrl: string, imgPath: string, imgToken: string) => {
            if (fieldAssets != null) {
               
                fieldAssets.forEach((fieldAsset, idx) => {
                    fieldAsset.PageOrder = idx + 1;
                    fieldAsset.IsSelected = false;
                    var index = findIndex(fieldAssets, { Id: fieldAsset.Id });
                    fieldAssets.splice(index, 1, fieldAsset);
                }); 
            }
            this.ExemplarApiUrl = ExemplarApiUrl;
            this.imgPath = imgPath;
            this.imgToken = imgToken;
            this.assetViewer.open = true;
            this.assetViewer.data = fieldAssets;
        });

        EventBus.$on(PifEvents.CloseAssetModal, async () => {
            this.assetViewer.open = false;
        });

        EventBus.$on(PifEvents.FieldAssetDeleted, async (fieldAsset: FieldAsset) => {
            var idx = findIndex(this.assetViewer.data, { Id: Number(fieldAsset.Id) });
            if (idx > -1) {
                this.assetViewer.data.splice(idx, 1);
            }
            if (this.assetViewer.data.length == 0) {
                this.assetViewer.open = false;
            }
            
        });
    }

    urlBuilder(fullPath: string): string {       
        return UploadHelper.GetAssetUrl(fullPath, this.imgPath, this.imgToken);
    }

    DeleteAsset() {       

        let assetRoute: ApiDefaultRoute = new ApiDefaultRoute(this.exemplarApiUrl, "Assets");
        forEach(this.assetViewer.data, (fieldAsset) => {
            if (fieldAsset.IsSelected) { 
                if (fieldAsset.AssetFieldId != AssetFieldEnum.OaSignature) {
                    this.GetModel(assetRoute.Get(fieldAsset.Id), this.GetAssetDeleteSuccessCallback, null);
                }
            }
        });
    }

    SaveAsset() {
        forEach(this.assetViewer.data, (fieldAsset, index) => {
            this.PatchAssetReorder(fieldAsset, index)
        });
    }

    //Returns true if there is an element not in ascending order
    ShowSave(): boolean {
        return !this.assetViewer.data.every((element, index, array) => { return !index || element.PageOrder >= array[index - 1].PageOrder; });  
    }

    ReorderSuccessCallback(model: any) {
        EventBus.$emit(PifEvents.FieldAssetReordered, model);
        this.assetViewer.open = false;
        ToastrHelper.DisplayToastSuccess("Record(s) Reordered!");
    }

    deleteSuccessCallback(model: any) {
        EventBus.$emit(PifEvents.FieldAssetDeleted, model);
        ToastrHelper.DisplayToastSuccess("Record(s) Deleted!");
    }

    GetAssetDeleteSuccessCallback(model: any) {
        let assetRoute: ApiDefaultRoute = new ApiDefaultRoute(this.exemplarApiUrl, "Assets");
        model.IsDeleted = true;
        model.UpdatedBy = this.userId;
        this.Patch(assetRoute.Update(model.Id, this.currentUserId), model, this.deleteSuccessCallback, null, "");

    }

    PatchAssetReorder(model: any, index: number) {
        let assetRoute: ApiDefaultRoute = new ApiDefaultRoute(this.exemplarApiUrl, "Assets");
        model.Order = index + 1;
        model.PageOrder = index + 1;
        model.UpdatedBy = this.userId;

        this.Patch(assetRoute.Update(model.Id, this.currentUserId), model, this.ReorderSuccessCallback, null, "");
    }

    OpenDeleteModal(asset: FieldAsset) {
        this.DeleteAssetModal.promptText = "Are you sure you want to delete the selected Asset(s)?";
        this.DeleteAssetModal.title = "Confirm Delete";
        this.DeleteAssetModal.open = true;
        asset.IsSelected = true;
    }

    OnDeleteAssetContinueClicked() {
        this.DeleteAsset()
        this.DeleteAssetModal.open = false;
        this.DeleteAssetModal.busy = false;
    }

    DeselectAssets() {
        forEach(this.assetViewer.data, (fieldAsset: FieldAsset) => {
            fieldAsset.IsSelected = false;
        });
        this.DeleteAssetModal.open = false;
    }
}
