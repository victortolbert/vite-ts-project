import { Component, Watch, Prop } from "vue-property-decorator";
import KendoDropDown from "@progress/kendo-dropdowns-vue-wrapper/dist/es/KendoDropDownList/index";
import Vue from "Vue";
import { DropdownListValues } from "@ExemplarViewModels/DropdownListValues"
import DropdownComponent from "@ExemplarComponents/Controls/DropdownComponent";

Vue.component('kendo-dropdownlist', KendoDropDown)

@Component({
    template: "#master-reschedule-reason-type-dropdown-template",
    components: { DropdownComponent }
})

export default class MasterRescheduleReasonTypeDropdownComponent extends DropdownComponent {

    @Prop({ required: false, type: String, default: "" })
    uri: string;


    constructor() {
        super();
    }

    async mounted() {
        this.ExtendedMount();
    }

    changeRescheduleReasonValue() {
        var ddl: kendo.ui.DropDownList = (<any>this.$refs.ddList).kendoWidget();
        if (ddl.value() != "0") {

            this.$emit('onreschedulereasonchange', ddl);
        }
    }

    @Watch("bindList")
    async GetData() {
        if (this.dataSource.length == 0 && this.bindList) {

            this.dataSource.push(new DropdownListValues('Select a Reschedule Reason', '0'));
            this.dataSource.push(new DropdownListValues('Weather', '1'));
            this.dataSource.push(new DropdownListValues('Requested by Insured', '2'));
            this.dataSource.push(new DropdownListValues('Requested by Adjuster', '3'));
            this.dataSource.push(new DropdownListValues('Requested by Contractor', '4'));
            this.dataSource.push(new DropdownListValues('Requested by Field Management', '5'));
            this.dataSource.push(new DropdownListValues('Requested by Technician', '6'));
            this.GetStaticDataCallback(this.dataSource);
        }
    }
}