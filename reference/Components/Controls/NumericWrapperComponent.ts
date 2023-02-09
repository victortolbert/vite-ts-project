import Vue from "Vue";
import { Component, Watch, Prop } from "vue-property-decorator"; 
import KeyPadComponent from "@ExemplarComponents/Controls/KeyPadComponent";
import BaseLayoutComponent from "./BaseLayoutComponent";

@Component({
    template: "#numeric-wrapper-template",
    components: {
        BaseLayoutComponent, KeyPadComponent
    }
})

export default class NumericWrapperComponent extends Vue {
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

    showPad: boolean = false;

    constructor() {
        super();
    }
}
