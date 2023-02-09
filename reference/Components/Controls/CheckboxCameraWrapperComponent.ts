import Vue from "Vue";
import { Component, Prop } from "vue-property-decorator";
import CameraComponent from "./CameraComponent";
import BaseLayoutComponent from "./BaseLayoutComponent";
import CheckboxComponent from "@ExemplarComponents/Controls/CheckboxComponent";
import { FieldAsset } from "../../../ViewModels/FieldAsset";
import { AssetUploadModel } from "../../../ViewModels/AssetUploadModel"

@Component({
    template: "#checkbox-camera-wrapper-template",
    components: {
        BaseLayoutComponent, CheckboxComponent, CameraComponent
    }
})

export default class CheckboxCameraWrapperComponent extends Vue {
    @Prop({ required: true, type: String })
    label: string;

    @Prop({ required: false, type: String })
    currentValue!: string | null;

    @Prop({ required: false, type: Array })
    choices!: Array<string>;

    @Prop({ required: false, type: Boolean, default: true })
    validate: boolean;

    @Prop({ required: false, type: Boolean })
    hideMargin!: boolean;

    @Prop({ required: false, type: Boolean })
    allowMultiple!: boolean;

    response: string | null = this.currentValue != null ? this.currentValue : "";

    @Prop({ required: true, type: Array })
    fieldAssets!: Array<FieldAsset> | null;

    @Prop({ required: true, type: Object })
    assetUploadModel!: AssetUploadModel;

    @Prop({ required: true, type: Boolean, default: false })
    disableCamera: boolean;

    constructor() {
        super();
    }
}
