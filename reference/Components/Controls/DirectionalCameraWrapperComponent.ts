import Vue from "Vue";
import { Component, Watch, Prop } from "vue-property-decorator";
import CameraComponent from "./CameraComponent";
import BaseLayoutComponent from "./BaseLayoutComponent";
import { FieldAsset } from "../../../ViewModels/FieldAsset";
import { AssetUploadModel } from "../../../ViewModels/AssetUploadModel"

@Component({
    template: "#directional-camera-wrapper-template",
    components: {
        BaseLayoutComponent, CameraComponent
    }
})

export default class DirectionalCameraWrapperComponent extends Vue {
    @Prop({ required: false, type: String })
    label!: string;

    @Prop({ required: false, type: String })
    slotALabel!: string;

    @Prop({ required: false, type: String })
    slotBLabel!: string;

    @Prop({ required: false, type: String })
    slotCLabel!: string;

    @Prop({ required: false, type: String })
    slotDLabel!: string;

    @Prop({ required: false, type: Array })
    northFieldAssets!: Array<FieldAsset>;

    @Prop({ required: false, type: Array })
    southFieldAssets!: Array<FieldAsset>;

    @Prop({ required: false, type: Array })
    eastFieldAssets!: Array<FieldAsset>;

    @Prop({ required: false, type: Array })
    westFieldAssets!: Array<FieldAsset>;

    @Prop({ required: false, type: Object })
    northAssetUploadModel!: AssetUploadModel;

    @Prop({ required: false, type: Object })
    southAssetUploadModel!: AssetUploadModel;

    @Prop({ required: false, type: Object })
    eastAssetUploadModel!: AssetUploadModel;

    @Prop({ required: false, type: Object })
    westAssetUploadModel!: AssetUploadModel;

    @Prop({ required: false, type: Boolean, default: false })
    validate: boolean;

    @Prop({ required: true, type: Boolean, default: false })
    disableCamera: boolean;

    @Prop({ required: false, type: Boolean })
    hideMargin!: boolean;

    constructor() {
        super();
    } 

}
