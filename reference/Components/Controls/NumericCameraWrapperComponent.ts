import Vue from "Vue";
import { Component, Prop } from "vue-property-decorator";
import CameraComponent from "./CameraComponent";
import BaseLayoutComponent from "./BaseLayoutComponent";
import KeyPadComponent from "@ExemplarComponents/Controls/KeyPadComponent";
import { FieldAsset } from "../../../ViewModels/FieldAsset";
import { AssetUploadModel } from "../../../ViewModels/AssetUploadModel"

@Component({
    template: "#numeric-camera-wrapper-template",
    components: {
        BaseLayoutComponent, KeyPadComponent, CameraComponent
    }
})

export default class NumericCameraWrapperComponent extends Vue {
    @Prop({ required: false, type: Number })
    currentValue!: number | null;

    @Prop({ required: false, type: String })
    max: number;

    @Prop({ required: false, type: String })
    min: number;

    @Prop({ required: false, type: Boolean })
    decimal!: boolean;

    @Prop({ required: false, type: String })
    label!: string;

    @Prop({ required: false, type: Boolean })
    hideMargin!: boolean;

    @Prop({ required: false, type: Boolean, default: true })
    validate: boolean;

    @Prop({ required: true, type: Array })
    fieldAssets!: Array<FieldAsset> | null;

    @Prop({ required: true, type: Object })
    assetUploadModel!: AssetUploadModel;

    @Prop({ required: true, type: Boolean, default: false })
    disableCamera: boolean;

    showPad: boolean = false;

    constructor() {
        super();
    }
}
