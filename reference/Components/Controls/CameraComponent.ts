import Vue from "Vue";
import { Component, Watch, Prop } from "vue-property-decorator";
import '@progress/kendo-ui';
import KendoUpload from "@progress/kendo-upload-vue-wrapper/dist/es/KendoUpload/index";
import AssetUploadComponent from "../../AssetUploadComponent";
import { AssetUpload } from "../../../ViewModels/AssetUpload"
import { replace } from "lodash";
import { AssetUploadModel } from "../../../ViewModels/AssetUploadModel"; 
import { FieldAsset } from "../../../ViewModels/FieldAsset"; 
import { AssetFieldEnum } from "../../../ViewModels/Enums/AssetFieldEnum";
import { AssetTypeEnum } from "../../../ViewModels/Enums/AssetTypeEnum";
import { Asset } from "../../../ViewModels/Asset"; 
import { UploadHelper } from "../../../HelperClasses/UploadHelper";
import { SectionBase } from "../../../SectionBase";
import { PifEvents, EventBus } from "../../../Events";
import { uuid } from 'uuidv4';
import { find } from "lodash"; 
import { ApiDefaultRoute } from "@ExemplarRoutes/ApiDefaultRoute";
import { BModal, BButton } from 'bootstrap-vue'
import { ExemplarMessage } from "../../../ViewModels/ExemplarMessage";

Vue.component('kendo-upload', KendoUpload)
@Component({
    template: "#camera-template",
    components: { AssetUploadComponent, BModal, BButton}
})

export default class CameraComponent extends SectionBase<Array<Asset>> {
    @Prop({ required: false, type: String })
    currentValue!: string | null;

    @Prop({ required: false, type: String })
    label!: string | null;

    @Prop({ required: false, type: Array })
    fieldAssets!: Array<FieldAsset>;

    @Prop({ required: false, type: Object })
    assetUploadModel!: AssetUploadModel;

    @Prop({ required: false, type: Boolean, default: null })
    dontDisable!: boolean | null;

    @Prop({ required: false, type: Boolean, default: null })
    disable!: boolean | null;

    imgToken: string = <string>$("#imgToken").val();
        
    imgPath: string = <string>$("#imgPath").val();

    openAssetModal: boolean = false;

    loading: boolean = false;

    showAssets: boolean = false;

    showUploader: boolean = false;

    assetUploads: Array<AssetUpload> = new Array<AssetUpload>();

    assetVaultPath: string = <string>$("#assetVaultPath").val();

    userId: number = <number>$("#userId").val();

    description: string = "";
    
    exemplarMessage: ExemplarMessage;

    assetRoute: ApiDefaultRoute;

    exemplarMessageRoute: ApiDefaultRoute;

    saveUrl: string = UploadHelper.GetSaveUrl();

    UploadValidationModal = {
        data: [] as Array<string>,
        open: false,
        noCloseOnBackdrop: true,
        noCloseOnEsc: true
    };

    constructor() {
        super();
    }

    mounted() {
        this.assetRoute = new ApiDefaultRoute(this.exemplarApiUrl, "Assets");

        this.SetAssetName();

        EventBus.$on(PifEvents.CloseAssetModal, async () => {
            this.showUploader = false;
        });
    }

    @Watch("assetUploadModel")
    ChechassetUploadModel() {
        this.SetAssetName();
    }

    urlBuilder(fullPath: string): string {
        return UploadHelper.GetAssetUrl(fullPath, this.imgPath, this.imgToken);
    }

    ShowAssets() {
        EventBus.$emit(PifEvents.OpenAssetViewer, this.fieldAssets, this.exemplarApiUrl, this.imgPath, this.imgToken);
    }

    Disable(): boolean {
        if (this.dontDisable) {
            return false;
        } 
        if (!this.currentValue || this.currentValue == '' || this.currentValue == 'NA') {
            return true;
        } 

        return false;
    }
    SetAssetName() {
        if (this.currentValue == '' || this.currentValue == 'NA') {
            return;
        } else {
            let assetName: string;
            switch (this.currentValue) {
                case null:
                    assetName = "";
                    break;
                case 'true':
                    assetName = "Yes";
                    break;
                case 'false':
                    assetName = "No";
                    break;
                default:
                    assetName = ` - ${this.currentValue}`;

            }
           
            if (this.assetUploadModel.AssetTypeId == AssetTypeEnum.FieldAsset &&
                (this.assetUploadModel.AssetFieldId == AssetFieldEnum.Address ||
                this.assetUploadModel.AssetFieldId == AssetFieldEnum.PitchGauge ||
                this.assetUploadModel.AssetFieldId == AssetFieldEnum.FrontRisk ||
                this.assetUploadModel.AssetFieldId == AssetFieldEnum.ElevationEast ||
                this.assetUploadModel.AssetFieldId == AssetFieldEnum.ElevationNorth ||
                this.assetUploadModel.AssetFieldId == AssetFieldEnum.ElevationSouth ||
                this.assetUploadModel.AssetFieldId == AssetFieldEnum.ElevationWest ||
                this.assetUploadModel.AssetFieldId == AssetFieldEnum.RoofEast ||
                this.assetUploadModel.AssetFieldId == AssetFieldEnum.RoofSouth ||
                this.assetUploadModel.AssetFieldId == AssetFieldEnum.RoofNorth ||
                this.assetUploadModel.AssetFieldId == AssetFieldEnum.RoofWest ||
                this.assetUploadModel.AssetFieldId == AssetFieldEnum.WindDamageEast ||
                this.assetUploadModel.AssetFieldId == AssetFieldEnum.WindDamageNorth ||
                this.assetUploadModel.AssetFieldId == AssetFieldEnum.WindDamageSouth ||
                this.assetUploadModel.AssetFieldId == AssetFieldEnum.WindDamageWest ||
                this.assetUploadModel.AssetFieldId == AssetFieldEnum.RoofNorth ||
                this.assetUploadModel.AssetFieldId == AssetFieldEnum.RoofSouth ||
                this.assetUploadModel.AssetFieldId == AssetFieldEnum.RoofWest ||
                this.assetUploadModel.AssetFieldId == AssetFieldEnum.RoofEast ||
                this.assetUploadModel.AssetFieldId == AssetFieldEnum.AdditionalSummary ||
                this.assetUploadModel.AssetFieldId == AssetFieldEnum.HancockDisagreesEast ||
                this.assetUploadModel.AssetFieldId == AssetFieldEnum.HancockDisagreesNorth ||
                this.assetUploadModel.AssetFieldId == AssetFieldEnum.HancockDisagreesSouth ||
                this.assetUploadModel.AssetFieldId == AssetFieldEnum.HancockDisagreesWest ||
                this.assetUploadModel.AssetFieldId == AssetFieldEnum.ShingleGauge )
            ) {

                if (this.assetUploadModel.AssetFieldId == AssetFieldEnum.HancockDisagreesEast ||
                    this.assetUploadModel.AssetFieldId == AssetFieldEnum.HancockDisagreesNorth ||
                    this.assetUploadModel.AssetFieldId == AssetFieldEnum.HancockDisagreesSouth ||
                    this.assetUploadModel.AssetFieldId == AssetFieldEnum.HancockDisagreesWest ||
                    this.assetUploadModel.AssetFieldId == AssetFieldEnum.WindDamageEast ||
                    this.assetUploadModel.AssetFieldId == AssetFieldEnum.WindDamageNorth ||
                    this.assetUploadModel.AssetFieldId == AssetFieldEnum.WindDamageSouth ||
                    this.assetUploadModel.AssetFieldId == AssetFieldEnum.WindDamageWest ||
                    this.assetUploadModel.AssetFieldId == AssetFieldEnum.RoofNorth ||
                    this.assetUploadModel.AssetFieldId == AssetFieldEnum.RoofSouth ||
                    this.assetUploadModel.AssetFieldId == AssetFieldEnum.RoofWest ||
                    this.assetUploadModel.AssetFieldId == AssetFieldEnum.RoofEast ||
                    this.assetUploadModel.AssetFieldId == AssetFieldEnum.ElevationEast ||
                    this.assetUploadModel.AssetFieldId == AssetFieldEnum.ElevationNorth ||
                    this.assetUploadModel.AssetFieldId == AssetFieldEnum.ElevationSouth ||
                    this.assetUploadModel.AssetFieldId == AssetFieldEnum.ElevationWest) {

                    var parsedAssetName = replace(assetName, '- undefined', '');
                    this.assetUploadModel.AssetName = String(`${this.assetUploadModel.AssetName}${parsedAssetName}`)
                }
                else {
                    this.assetUploadModel.AssetName = AssetFieldEnum[this.assetUploadModel.AssetFieldId];
                }
               
            } else {

                if (this.assetUploadModel.AssetName.length > 0) {
                    // @ts-ignore
                    this.assetUploadModel.AssetName = String(`${this.assetUploadModel.AssetName}${assetName}`)
                }
                else {
                    // @ts-ignore
                    this.assetUploadModel.AssetName = String(`${AssetFieldEnum[this.assetUploadModel.AssetFieldId]}${assetName}`)
                }
            }
        }
    }

    DisplayUploader() {
        
        if (this.dontDisable) {
            this.SetAssetName()
            this.showUploader = true;
            return;
        }
        if (!this.currentValue || this.currentValue == '' || this.currentValue == 'NA') {
            return;
        }
            this.SetAssetName()
            this.showUploader = true;
    }

    onUpload(e: any) {
        this.loading = true;
        var files = e.files;
        var guid: string = uuid().replace(/-/g, "");
        let extension = e.files[0]["name"].split('.').pop();
        let fileName = `${guid}.${extension}`;
       
        if (e.files[0].size > 10485760) {
            this.UploadValidationModal.data.push(`${e.files[0]["name"]} (${e.files[0].size})`);
          
            e.preventDefault();
            return;
        } 
        this.assetUploads.push(new AssetUpload(e.files[0]["name"], fileName));
        console.log("assetTypeId:" + this.assetUploadModel.AssetTypeId);
        e.data = { assetFullPath: `${this.assetVaultPath}/${this.assetUploadModel.CompanyId}/${this.assetUploadModel.ProjectId}/`, fileName: fileName, companyId: this.assetUploadModel.CompanyId, projectId: this.assetUploadModel.ProjectId, assetTypeId: this.assetUploadModel.AssetTypeId };
    }

    async onSuccess(e: any) {
        if (<boolean>e.response.IsSuccess) {
            var files = e.files;
            let uploadedAsset = <AssetUpload>find(this.assetUploads, { AssetName: e.files[0]["name"] });
            let assetName: string = "";
            if (this.assetUploadModel.AssetTypeId == AssetTypeEnum.FieldAsset) {
                if (this.assetUploadModel.AssetName.length > 0) {
                    assetName = this.assetUploadModel.AssetName;
                }
                else {
                    assetName = this.assetUploadModel.AssetName.replace(/([A-Z])/g, ' $1');
                }
            }
            else {
                assetName = uploadedAsset.AssetName.replace(/\.[^.]*$/, '')
            }
            if (uploadedAsset) {
                let model: Asset = new Asset();
                model.AssetName = this.assetUploadModel.AssetTypeId == AssetTypeEnum.FieldAsset ? this.assetUploadModel.AssetName.replace(/([A-Z])/g, ' $1') : uploadedAsset.AssetName.replace(/\.[^.]*$/, '');
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
                model.FullPath = `${this.assetVaultPath}/${this.assetUploadModel.CompanyId}/${this.assetUploadModel.ProjectId}/${uploadedAsset.FileName}`;
                model.IsDeleted = false;
                model.Order = 0;
                model.AssetTypeId = this.assetUploadModel.AssetTypeId;
                model.AssetFieldId = this.assetUploadModel.AssetFieldId;
                model.ProjectId = this.assetUploadModel.ProjectId;
                model.PropertyInspectionFormId = this.assetUploadModel.PropertyInspectionFormId;
                await this.Insert(this.assetRoute.Insert(), model, this.InsertSuccessCallback, null);
            }
            this.description = "";    
       }
    }

    async onError(e: any) {
        //this.exemplarMessageRoute = new ApiDefaultRoute(this.exemplarApiUrl, "ExemplarMessages");
        //this.exemplarMessage = new ExemplarMessage();
        //this.exemplarMessage.ClassName = "CameraComponent";
        //this.exemplarMessage.MethodName = "OnError";
        //this.exemplarMessage.Operation = "UploadFile";
        //this.exemplarMessage.Parameters = `ProjectId: ${this.assetUploadModel.ProjectId.toString()} CompanyId; ${this.assetUploadModel.CompanyId}`;
        //this.exemplarMessage.CreatedOn = new Date();
        //this.exemplarMessage.ExemplarMessageTypeId = 1;  //Exceptdaaion message

        //ToastrHelper.DisplayToastError(`Error uploading file ${e.files[0]["name"]}. Please try again later.`, "Upload Error");
         
        //let errorMessage = `Error uploading file: Status: ${e.XMLHttpRequest.status} ${e.XMLHttpRequest.statusText} `;
        //this.exemplarMessage.Message = errorMessage;
      //  await this.Insert(this.exemplarMessageRoute.Insert(), this.exemplarMessage, null, null);
    }
    InsertSuccessCallback(model: any) {
        if (this.assetUploadModel.AssetTypeId == AssetTypeEnum.FieldAsset) {
            EventBus.$emit(PifEvents.FieldAssetUploaded, model);
        } else {
            EventBus.$emit(PifEvents.NonFieldAssetUploaded, model);
        }
    }

    onComplete() {
        this.loading = false;
        if (this.UploadValidationModal.data.length > 0) {
            this.UploadValidationModal.open = true;
        }
        this.assetUploads = new Array<AssetUpload>();
    }

    onClose() {
        this.UploadValidationModal.data = [];
        this.UploadValidationModal.open = false;
    }
}
