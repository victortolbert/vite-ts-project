import { Component, Watch, Prop } from "vue-property-decorator";
import KendoDropDown from "@progress/kendo-dropdowns-vue-wrapper/dist/es/KendoDropDownList/index";
import Vue from "Vue";
import { DropdownListValues } from "@ExemplarViewModels/DropdownListValues"
import DropdownComponent from "@ExemplarComponents/Controls/DropdownComponent";

Vue.component('kendo-dropdownlist', KendoDropDown)

@Component({
    template: "#master-escalation-reason-type-dropdown-template",
    components: { DropdownComponent }
})

export default class MasterEscalationReasonType extends DropdownComponent {

    @Prop({ required: false, type: String, default: "" })
    uri: string;


    constructor() {
        super();
    }

    async mounted() {
        this.ExtendedMount();
    }

    changeEscalationReasonValue() {
        var ddl: kendo.ui.DropDownList = (<any>this.$refs.ddList).kendoWidget();
        if (ddl.value() != "0") {

            this.$emit('onescalationreasonchange', ddl);
        }
    }

    @Watch("bindList")
    async GetData() {
        if (this.dataSource.length == 0 && this.bindList) {

            this.dataSource.push(new DropdownListValues('Select an Escalation Reason', '0'));
            this.dataSource.push(new DropdownListValues('Billing', '1'));
            this.dataSource.push(new DropdownListValues('Delay in Deliverables', '2'));
            this.dataSource.push(new DropdownListValues('Photos Missing', '3'));
            this.dataSource.push(new DropdownListValues('Processing Error', '4'));
            this.dataSource.push(new DropdownListValues('Professionalism', '5'));
            this.dataSource.push(new DropdownListValues('Scheduling Error', '6'));
            this.dataSource.push(new DropdownListValues('Scope Missing / Inaccurate', '7'));
            this.dataSource.push(new DropdownListValues('Tardy or No Show', '8'));
            this.GetStaticDataCallback(this.dataSource);
        }
    }
}

