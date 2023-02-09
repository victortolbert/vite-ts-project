import Vue from "Vue";
import { Component, Prop } from "vue-property-decorator";
import { PifEvents, EventBus } from "../../../Events";
import CameraComponent from "./CameraComponent";
import { AssetUploadModel } from "../../../ViewModels/AssetUploadModel";

@Component({
    template: "#photo-template",
    components: { CameraComponent }
})

export default class PhotoComponent extends Vue {
    @Prop({ required: true, type: String })
    label: string;

    @Prop({ required: false, type: Boolean })
    hideMargin!: boolean;

    @Prop({ required: false, type: Boolean })
    mediumLabel!: boolean;

    @Prop({ required: false, type: Boolean })
    largeLabel!: boolean;

    @Prop({ required: false, type: Boolean })
    xLabel!: boolean;

    @Prop({ required: false, type: Object })
    assetUploadModel!: AssetUploadModel;

    showUploader: boolean = false;

    showAssets: boolean = false;
    gridClass: string = this.SetClass();

    constructor() {
        super();
    }

    SetClass(): string {
        if (1==1) {
            if (this.xLabel) {
                return "threeColumnXlong";
            }
            if (this.largeLabel) {
                return "threeColumnLong";
            }
            if (this.mediumLabel) {
                return "threeColumnMedium";
            } else {
                return "threeColumn";
            }

        } else {
            //two column
            if (this.xLabel) {
                return "twoColumnXlong";
            }
            if (this.largeLabel) {
                return "twoColumnLong";
            }
            if (this.mediumLabel) {
                return "twoColumnMedium";
            } else {
                return "twoColumn";
            }
        }
    }

    mounted() {

        EventBus.$on(PifEvents.CloseAssetModal, async () => {
            this.showUploader = false;
        });
    }

    ShowUploadModal() {
        this.showUploader = !this.showUploader;
    }
}
