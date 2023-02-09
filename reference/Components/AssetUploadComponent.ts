import Vue from "Vue";
import { Component, Watch, Prop } from "vue-property-decorator";
import "@progress/kendo-ui"; 
//import "@progress/kendo-theme-bootstrap/dist/all.css"
import KendoUpload from "@progress/kendo-upload-vue-wrapper/dist/es/KendoUpload/index";
import * as toastr from "toastr";
import { ApiDefaultRoute } from "@ExemplarRoutes/ApiDefaultRoute";
import { AssetUploadModel } from "./../ViewModels/AssetUploadModel" 
import { BModal, BButton } from 'bootstrap-vue'
import { Asset } from "./../ViewModels/Asset"
import { AssetUpload } from "./../ViewModels/AssetUpload"
import { UploadHelper } from "./../HelperClasses/UploadHelper";
import { PageBase } from "@ExemplarCommon/PageBase";
import { uuid } from 'uuidv4';
import { find } from "lodash"; 
import { PifEvents, EventBus } from "./../Events";
import { AssetTypeEnum } from "../ViewModels/Enums/AssetTypeEnum";
import { ToastrHelper } from "@ExemplarCommon/ToastrHelper";
import { ExemplarMessage } from "../ViewModels/ExemplarMessage";

Vue.component('kendo-upload', KendoUpload)
@Component({
    template: "#asset-upload-template",
    components: { BModal, BButton}
})

export default class AssetUploadComponent extends PageBase<Asset> {
    @Prop({ required: false, type: Object })
    assetUploadModel!: AssetUploadModel;

    @Prop({ required: true, type: Boolean })
    open!: boolean;

    @Prop({ required: false, type: Boolean })
    showDescription!: boolean; 

    @Prop({ required: false, type: Boolean, default:true })
    allowMultiples!: boolean;

    @Prop({ required: false, type: String, default: "Field Asset" })
    assetType!: string;

    constructor() {
        super();
    }

    uploadModel: AssetUploadModel = this.assetUploadModel;

    assetRoute: ApiDefaultRoute;

    assetVaultPath: string = <string>$("#assetVaultPath").val();

    imgPath: string = <string>$("#imgPath").val();

    imgToken: string = <string>$("#imgToken").val();

    userId: number = <number>$("#userId").val();

    ready: boolean = false;

    description: string = "";

    assetUploads: Array<AssetUpload> = new Array<AssetUpload>();

    saveUrl: string = UploadHelper.GetSaveUrl();

    validationMessage: string = "";

    exemplarMessage: ExemplarMessage;

    exemplarMessageRoute: ApiDefaultRoute;

    uploadModal = {
        data: {} as any,
        promptText: "",
        open: false,
        busy: false,
        noCloseOnBackdrop: true,
        noCloseOnEsc: true
    };

    mounted() {
        this.assetRoute = new ApiDefaultRoute(this.exemplarApiUrl, "Assets");

        EventBus.$on(PifEvents.InitializeUploader, (data: any) => {
            this.uploadModel = data;
            this.uploadModal.open = true;
        });
    }

    @Watch("open")
    ShowModal() {
        this.uploadModal.open = this.open;
    }

    @Watch("assetUploadModel")
    SetUploadModel() {
        this.uploadModel = this.assetUploadModel;
     }

    urlBuilder(fullPath: string): string {
        return UploadHelper.GetAssetUrl(fullPath, this.imgPath, this.imgToken);
    }

    onCloseModal() {
        this.description = "";
        this.uploadModal.open = false;
        EventBus.$emit(PifEvents.CloseAssetModal);
    }

    onComplete() {
        this.assetUploads = new Array<AssetUpload>();
    }

    onUpload(e: any) {
        var files = e.files;
        var guid: string = uuid().replace(/-/g, "");
        let extension = e.files[0]["name"].split('.').pop();
        let fileName = `${guid}.${extension}`;
        this.assetUploads.push(new AssetUpload(e.files[0]["name"], fileName));
        e.data = { assetFullPath: `${this.assetVaultPath}/${this.uploadModel.CompanyId}/${this.uploadModel.ProjectId}/`, fileName: fileName, companyId: this.uploadModel.CompanyId, projectId: this.uploadModel.ProjectId, assetTypeId: this.uploadModel.AssetTypeId };
    }

    SearchFiles() {
        var upload: kendo.ui.Upload = (<any>this.$refs.upload).kendoWidget();
        upload.element.click();
    }

    async onSuccess(e: any) {
        if (<boolean>e.response.IsSuccess) {
            var files = e.files;
            let uploadedAsset = <AssetUpload>find(this.assetUploads, { AssetName: e.files[0]["name"] });

            let assetName: string = "";
            if (this.uploadModel.AssetTypeId == AssetTypeEnum.FieldAsset) {
                if (this.assetUploadModel.AssetName.length > 0) {
                    assetName = this.assetUploadModel.AssetName;
                }
                else {
                    assetName = this.uploadModel.AssetName.replace(/([A-Z])/g, ' $1');
                }
            }
            else {
                assetName = uploadedAsset.AssetName.replace(/\.[^.]*$/, '')
            }
            
            if (uploadedAsset) {
                let model: Asset = new Asset();
                model.AssetName = assetName;
                model.CreatedBy = this.userId;
                model.CreatedOn = Date.now().toString();
                model.Description = this.description;
                model.HasMetaData = e.response.HasMetaData;
                model.ImageHeightPixels = e.response.ImageHeightPixels;
                model.ImageWidthPixels = e.response.ImageWidthPixels;
                model.Make = e.response.Make;
                model.Model = e.response.Model;
                model.OriginalFileTypeExtension = uploadedAsset.FileName.substring(uploadedAsset.FileName.lastIndexOf(".") + 1);
                model.Xresolution = e.response.Xresolution;
                model.Yresolution = e.response.Yresolution;
                model.SoftwareVersion = e.response.SoftwareVersion;
                model.FileName = uploadedAsset.FileName;
                model.FullPath = `${ this.assetVaultPath }/${this.uploadModel.CompanyId}/${ this.uploadModel.ProjectId }/${uploadedAsset.FileName}`;
                model.IsDeleted = false;
                model.Order = 0;
                model.AssetTypeId = this.uploadModel.AssetTypeId;
                model.AssetFieldId = this.uploadModel.AssetFieldId;
                model.ProjectId = this.uploadModel.ProjectId;
                model.PropertyInspectionFormId = this.uploadModel.PropertyInspectionFormId;
                await this.Insert(this.assetRoute.Insert(), model, this.InsertSuccessCallback, null);
            }
                this.description = "";
        }
    }

    InsertSuccessCallback(model: any) {
        if (this.uploadModel.AssetTypeId == AssetTypeEnum.FieldAsset) {
            EventBus.$emit(PifEvents.FieldAssetUploaded, model);
        } else {
           EventBus.$emit(PifEvents.NonFieldAssetUploaded, model);
        }
    }

    async onError(e: any) {
        //this.exemplarMessageRoute = new ApiDefaultRoute(this.exemplarApiUrl, "ExemplarMessages");
        //this.exemplarMessage = new ExemplarMessage();
        //this.exemplarMessage.ClassName = "AssetUploadComponent";
        //this.exemplarMessage.MethodName = "OnError";
        //this.exemplarMessage.Operation = "UploadFile";
        //this.exemplarMessage.Parameters = `ProjectId: ${this.assetUploadModel.ProjectId.toString()} CompanyId; ${this.assetUploadModel.CompanyId}`;
        //this.exemplarMessage.CreatedOn = new Date();
        //this.exemplarMessage.ExemplarMessageTypeId = 1;  

        //ToastrHelper.DisplayToastError(`Error uploading file ${e.files[0]["name"]}. Please try again later.`, "Upload Error");

        //let errorMessage = `Error uploading file: Status: ${e.XMLHttpRequest.status} ${e.XMLHttpRequest.statusText} `;
        //this.exemplarMessage.Message = errorMessage;
        //await this.Insert(this.exemplarMessageRoute.Insert(), this.exemplarMessage, null, null);
    }
}
