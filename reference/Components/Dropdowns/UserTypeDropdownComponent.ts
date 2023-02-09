import { Component, Watch, Prop } from "vue-property-decorator";
import KendoDropDown from "@progress/kendo-dropdowns-vue-wrapper/dist/es/KendoDropDownList/index";
import Vue from "Vue";
import { DropdownListValues } from "@ExemplarViewModels/DropdownListValues"
import DropdownComponent  from "@ExemplarComponents/Controls/DropdownComponent";
import { findIndex } from "lodash";

Vue.component('kendo-dropdownlist', KendoDropDown)

@Component({
    template: "#user-type-dropdown-template",
    components: { DropdownComponent}
})

export default class UserTypeDropdownComponent extends DropdownComponent {

    @Prop({ required: false, type: String, default: "" })
    uri: string;


    constructor() {
        super();
    }

    async mounted() {
        this.ExtendedMount();
    }

    changeUserTypeValue() {
        var ddl: kendo.ui.DropDownList = (<any>this.$refs.ddList).kendoWidget();
        if (ddl.value() != "0") {
           
            this.$emit('onusertypechange', ddl);
        }
    }

    @Watch("bindList")
    async GetData() {
        if (this.dataSource.length == 0 && this.bindList) {
            
            this.dataSource.push(new DropdownListValues('Select a User Type', '0'));
            this.dataSource.push(new DropdownListValues('Application Users', '1'));
            this.dataSource.push(new DropdownListValues('Service Technicians', '2'));
            this.dataSource.push(new DropdownListValues('Insurance Adjusters', '3'));
            this.dataSource.push(new DropdownListValues('WebAPI Users', '4'));
            this.GetStaticDataCallback(this.dataSource);
        }
    }
}

