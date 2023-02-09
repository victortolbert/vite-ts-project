import { Component, Watch, Prop } from "vue-property-decorator";
import KendoDropDown from "@progress/kendo-dropdowns-vue-wrapper/dist/es/KendoDropDownList/index";
import Vue from "Vue";
import { DropdownListValues } from "@ExemplarViewModels/DropdownListValues"
import DropdownComponent from "@ExemplarComponents/Controls/DropdownComponent";
import { findIndex } from "lodash";

Vue.component('kendo-dropdownlist', KendoDropDown)

@Component({
    template: "#role-dropdown-template",
    components: { DropdownComponent }
})

export default class RoleDropdownComponent extends DropdownComponent {

    @Prop({ required: false, type: String, default: "" })
    uri: string;


    constructor() {
        super();
    }

    async mounted() {
        this.ExtendedMount();
    }

    changeRoleValue() {
        var ddl: kendo.ui.DropDownList = (<any>this.$refs.ddList).kendoWidget();
        if (ddl.value() != "0") {

            this.$emit('onrolechange', ddl);
        }
    }

    @Watch("bindList")
    async GetData() {
        if (this.dataSource.length == 0 && this.bindList) {

            this.dataSource.push(new DropdownListValues('Select a Role', '0'));
            this.dataSource.push(new DropdownListValues('Administrator', '1'));
            this.dataSource.push(new DropdownListValues('Scheduler', '2'));
            this.dataSource.push(new DropdownListValues('Admin Support', '3'));
            this.dataSource.push(new DropdownListValues('Bookkeeper', '4'));
            this.dataSource.push(new DropdownListValues('Service Tech', '5'));
            this.dataSource.push(new DropdownListValues('Service Tech 2', '6'));
            this.dataSource.push(new DropdownListValues('Service Manager', '7'));
            this.dataSource.push(new DropdownListValues('Insurance Adjuster', '8'));
            this.dataSource.push(new DropdownListValues('Billing Contact', '9'));
            this.dataSource.push(new DropdownListValues('Adjuster Director', '10'));
            this.dataSource.push(new DropdownListValues('Adjuster Manager', '11'));
            this.dataSource.push(new DropdownListValues('Service Director', '12'));
            this.dataSource.push(new DropdownListValues('EagleView', '13'));
            this.dataSource.push(new DropdownListValues('Tech Out Of Service', '14'));
            this.GetStaticDataCallback(this.dataSource);
        }
    }
}