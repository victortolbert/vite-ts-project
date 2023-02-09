﻿import Vue from "Vue";
import { Component, Watch, Prop } from "vue-property-decorator";
import { PifEvents, EventBus } from "../../../Events";

@Component({
    template: "#base-layout-template"
})

export default class BaseLayoutComponent extends Vue {
    @Prop({ required: false, type: String })
    label: string | null;

    @Prop({ required: false, type: String})
    baseValue!: any | null;

    @Prop({ required: false, type: String })
    customValidator!: string | null;

    @Prop({ required: false, type: Array })
    choices!: Array<string>;

    @Prop({ required: false, type: Boolean, default: true })
    validate!: boolean | null;

    @Prop({ required: false, type: Boolean })
    hideMargin!: boolean;

    validationPassed: boolean = false;

    constructor() {
        super();
    }
   
    validating: boolean = false;
    response: string | null = this.baseValue != null ? this.baseValue : "";

    @Watch("baseValue")
    baseValueChanged() {
        this.validationPassed = true;
    }

    mounted() {

        EventBus.$on(PifEvents.ValidatePif, () => {
             this.validationPassed = false;
             this.validating = true;

             if (this.validate && this.validate==true && (this.baseValue == null || this.baseValue.length === 0 || this.baseValue === 'null')) {
                 console.log("(" + this.label + ") Failed Validation With value: " + this.baseValue + " V:" + this.validate);
                 EventBus.$emit(PifEvents.FailedVaidation);
             } else {
                 this.validationPassed = true;
             }
        });
    }
}
