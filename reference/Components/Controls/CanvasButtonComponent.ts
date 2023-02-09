import { Component, Prop } from "vue-property-decorator";
import SignaturePad from "signature_pad";
import { AssetUpload } from "../../../ViewModels/AssetUpload"
import BaseLayoutComponent from "../../Pif/Controls/BaseLayoutComponent";
import { Asset } from "../../../ViewModels/Asset";
import { CanvasUpload } from "../../../ViewModels/CanvasUpload";
import { AssetUploadModel } from "../../../ViewModels/AssetUploadModel" 
import AssetUploadComponent from "../../AssetUploadComponent";
import { PifEvents, EventBus } from "../../../Events";
import { PageBase } from "@ExemplarCommon/PageBase";
import { uuid } from 'uuidv4';
import {  BButton } from 'bootstrap-vue'

@Component({
    template: "#canvas-button-template",
    components: {
        BaseLayoutComponent, AssetUploadComponent, PageBase, BButton
    }
})

export default class CanvasButtonComponent extends PageBase<Asset> {
    @Prop({ required: false, type: Boolean })
    currentValue!: boolean | null;

    @Prop({ required: true, type: String })
    label: string;

    @Prop({ required: false, type: Boolean })
    hideMargin!: boolean;

    @Prop({ required: true, type: Number })
    propertyInspectionFormId!: number;

    @Prop({ required: true, type: Number })
    companyId!: number;

    @Prop({ required: true, type: Number })
    projectId!: number;

    @Prop({ required: false, type: Boolean, default: true })
    validate: boolean;

    userId: number = <number>$("#userId").val();

    assetUploadComponent: AssetUploadComponent;

    imgToken: string = <string>$("#imgToken").val();

    uploadModel: AssetUploadModel;

    assetUploads: Array<AssetUpload> = new Array<AssetUpload>();

    signaturePad: any;

    processing: boolean = false;

    image: HTMLImageElement | null;

    canvas: HTMLCanvasElement;

    saveButton: HTMLButtonElement;

    clearButton: HTMLButtonElement;

    assetVaultPath: string = <string>$("#assetVaultPath").val();
    imgPath: string = <string>$("#imgPath").val();
    canvasPath: string = <string>$("#assetVaultPath").val();

    constructor() {
        super();
    }

    mounted() {

        //@ts-ignore
        this.canvas = document.getElementById('signature');
        //@ts-ignore
        // this.signaturePad = new SignaturePad(this.canvas);
        this.signaturePad = new SignaturePad(this.canvas, {
            minWidth: 2,
            maxWidth: 5,
            backgroundColor: 'rgb(255, 255, 255)'
        });
        //@ts-ignore

        EventBus.$on(PifEvents.InitializeUploader, (data: any) => {
            this.uploadModel = data;
        });
    }

    urlBuilder(fullPath: string, imgPath: string, imgToken: string): string {

        return this.GetAssetUrl(fullPath, imgPath, this.imgToken);

    }

    public GetAssetUrl(fullPath: string, imgPath: string, imgToken: string): string {
        let timeStamp: number = Date.now();
        return `${imgPath}${fullPath}${imgToken}&xyz=${timeStamp}`;
    }

    async onSaveClick() {

        this.processing = true;

        var mycanvas = <HTMLCanvasElement>document.getElementById("signature"); //get your canvas

        var imageData = mycanvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        imageData = imageData.replace('data:image/octet-stream;base64,', '');


        var assetFullPath = this.assetVaultPath + "/" + this.companyId + "/" + this.projectId + "/";

        var guid: string = uuid().replace(/-/g, "");
        let extension = "png";
        let fileName = `${guid}.${extension}`;

        let canvasUpload: CanvasUpload = new CanvasUpload(imageData, fileName, assetFullPath, this.propertyInspectionFormId, this.projectId, this.userId);

        this.Insert("/PropertyInspection/Asset/UploadCanvas", JSON.stringify(canvasUpload), this.UploadSuccessCallback, null, "");
    }

    onClearClick() {
        let canvas = <HTMLCanvasElement>document.getElementById('signature');
        let signaturePad = new SignaturePad(canvas);
        signaturePad.clear();
    }

    async UploadSuccessCallback(model: Asset) {
        this.processing = false;
        EventBus.$emit(PifEvents.FieldAssetUploaded, model);
        this.$emit('onchanged', true)
    }
}
