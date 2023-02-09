import { Component, Watch, Prop } from "vue-property-decorator";
import KendoDropDown from "@progress/kendo-dropdowns-vue-wrapper/dist/es/KendoDropDownList/index";
import Vue from "Vue";
import { DropdownListValues } from "@ExemplarViewModels/DropdownListValues"
import DropdownComponent from "@ExemplarComponents/Controls/DropdownComponent";
import { findIndex } from "lodash";

Vue.component('kendo-dropdownlist', KendoDropDown)

@Component({
    template: "#project-status-dropdown-template",
    components: { DropdownComponent }
})

export default class ProjectStatusDropdownComponent extends DropdownComponent {

    @Prop({ required: false, type: String, default: "" })
    uri: string;

    constructor() {
        super();
    }

    async mounted() {
        this.ExtendedMount();
    }

    changeProjectStatusValue() {
        var ddl: kendo.ui.DropDownList = (<any>this.$refs.ddList).kendoWidget();
        if (ddl.value() != "0") {

            this.$emit("onprojectstatuschange", ddl);
        }

    }

    @Watch("bindList")
    async GetData() {
        if (this.dataSource.length == 0) {
            this.dataSource.push(new DropdownListValues('Select a Project Status', '0'));
            this.dataSource.push(new DropdownListValues('Triage', '1'));
            this.dataSource.push(new DropdownListValues('Call Queue', '2'));
            this.dataSource.push(new DropdownListValues('Schedule', '3'));
            this.dataSource.push(new DropdownListValues('Assigned', '4'));
            this.dataSource.push(new DropdownListValues('Confirmed', '5'));
            this.dataSource.push(new DropdownListValues('Working', '6'));
            this.dataSource.push(new DropdownListValues('Review', '7'));
            this.dataSource.push(new DropdownListValues('Complete', '8'));
            this.dataSource.push(new DropdownListValues('Billed', '9'));
            this.dataSource.push(new DropdownListValues('Closed', '10'));
            this.dataSource.push(new DropdownListValues('Hold', '11'));
            this.dataSource.push(new DropdownListValues('Archived', '12'));
            this.dataSource.push(new DropdownListValues('Pending', '13'));
            this.GetStaticDataCallback(this.dataSource);
        }
    }
}

