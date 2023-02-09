import Vue from "Vue";
import { Component, Prop } from "vue-property-decorator";
import BaseLayoutComponent from "./BaseLayoutComponent";
import CheckboxComponent from "@ExemplarComponents/Controls/CheckboxComponent";

@Component({
    template: "#checkbox-wrapper-template",
    components: {
        BaseLayoutComponent, CheckboxComponent
    }
})

export default class CheckboxWrapperComponent extends Vue {
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

    constructor() {
        super();
    }

    //SetResponse(choice: string, currentResponse: string): string {

    //    let result = "";

    //    if (currentResponse.length == 0) {
    //        result = choice;
    //        this.response = result;
    //        return result;
    //    }

    //    if (!this.allowMultiple) {
    //        if (choice == currentResponse) {
    //            result = "";
    //        } else {
    //            result = choice;
    //        }
    //    } else if (this.allowMultiple) {
    //        if (currentResponse.includes(choice)) {
    //            var removeLead = "|" + choice;
    //            var removeTrail = choice + "|";
    //            result = this.allowMultiple ? currentResponse.replace(removeLead, '').replace(removeTrail, '').replace(choice, '') : "";
    //        } else {
    //            if (currentResponse.length == 0) {
    //                result = choice;
    //            } else {
    //                result = currentResponse + "|" + choice;
    //            }
    //        }
    //    }
    //    this.response = result;
    //    return result;
    //}
}
