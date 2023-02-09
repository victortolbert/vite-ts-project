import Vue from "Vue";
import { Component, Prop } from "vue-property-decorator";
import CameraComponent from "./CameraComponent";
import BaseLayoutComponent from "./BaseLayoutComponent";
import TextboxComponent from "@ExemplarComponents/Controls/TextboxComponent";
import { FieldAsset } from "../../../ViewModels/FieldAsset";
import { AssetUploadModel } from "../../../ViewModels/AssetUploadModel"

@Component({
    template: "#textbox-camera-wrapper-template",
    components: {
        BaseLayoutComponent, TextboxComponent, CameraComponent
    }
})

export default class TextboxCameraWrapperComponent extends Vue {
    @Prop({ required: true, type: String })
    label: string;

    @Prop({ required: true, type: String })
    currentValue: string;

    @Prop({ required: false, type: Number, default: 500 })
    maxCharacters: number;

    @Prop({ required: false, type: Number, default: 500 })
    minCharacters: number;

    @Prop({ required: false, type: Boolean })
    textArea: boolean;

    @Prop({ required: false, type: Boolean })
    hideMargin!: boolean;

    @Prop({ required: false, type: Boolean, default: false })
    disabled!: boolean;

    @Prop({ required: false, type: Boolean, default: true })
    validate: boolean;

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
