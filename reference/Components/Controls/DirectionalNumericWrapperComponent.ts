import Vue from "Vue";
import { Component, Prop } from "vue-property-decorator"; 
import KeyPadComponent from "@ExemplarComponents/Controls/KeyPadComponent";
import BaseLayoutComponent from "./BaseLayoutComponent";

@Component({
    template: "#directional-numeric-wrapper-template",
    components: {
        BaseLayoutComponent, KeyPadComponent
    }
})

export default class DirectionalNumericWrapperComponent extends Vue {
    @Prop({ required: false, type: Number })
    slotAValue!: number | null;

    @Prop({ required: false, type: Number })
    slotBValue!: number | null;

    @Prop({ required: false, type: Number })
    slotCValue!: number | null;

    @Prop({ required: false, type: Number })
    slotDValue!: number | null;

    @Prop({ required: false, type: String })
    max: number;

    @Prop({ required: false, type: String })
    min: number;

    @Prop({ required: false, type: Boolean })
    decimal!: boolean;

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

    @Prop({ required: false, type: Boolean })
    hideMargin!: boolean;

    showPad: boolean = false;

    @Prop({ required: false, type: Boolean, default: true })
    validate: boolean;

    constructor() {
        super();
    }

    SendBase(): string {
        if (this.slotAValue == null || this.slotBValue == null || this.slotCValue == null || this.slotDValue == null) {
            return "";
        } else {
            return "1";
        }
    }
}
