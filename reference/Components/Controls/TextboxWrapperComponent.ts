import Vue from "Vue";
import { Component,Prop } from "vue-property-decorator";
import TextboxComponent from "@ExemplarComponents/Controls/TextboxComponent";
import BaseLayoutComponent from "./BaseLayoutComponent";

@Component({
    template: "#textbox-wrapper-template",
    components: {
        BaseLayoutComponent, TextboxComponent
    }
})

export default class TextboxWrapperComponent extends Vue {
    @Prop({ required: false, type: String })
    label: string | null;

    @Prop({ required: false, type: String })
    currentValue: string | any;

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

    constructor() {
        super();
    }
}
