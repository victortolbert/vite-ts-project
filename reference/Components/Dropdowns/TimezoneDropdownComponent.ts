import { Component, Watch, Prop } from "vue-property-decorator";
import KendoDropDown from "@progress/kendo-dropdowns-vue-wrapper/dist/es/KendoDropDownList/index";
import Vue from "Vue";
import { DropdownListValues } from "@ExemplarViewModels/DropdownListValues"
import DropdownComponent  from "@ExemplarComponents/Controls/DropdownComponent";


Vue.component('kendo-dropdownlist', KendoDropDown)

@Component({
    template: "#timezone-dropdown-template",
    components: { DropdownComponent}
})

export default class TimezoneDropdownComponent extends DropdownComponent {

    @Prop({ required: false, type: String, default: "" })
    uri: string;


    constructor() {
        super();
    }

    async mounted() {
        this.ExtendedMount();
    }

    changeTimezoneValue() {
        var ddl: kendo.ui.DropDownList = (<any>this.$refs.ddList).kendoWidget();
        if (ddl.value() != "0") {
           
            this.$emit('ontimezonechange', ddl);
        }
    }

    @Watch("bindList")
    async GetData() {
        if (this.dataSource.length == 0 && this.bindList) {
            this.dataSource.push(new DropdownListValues('Select a Timezone', '0'));
            this.dataSource.push(new DropdownListValues('Eastern - EST', '1'));
            this.dataSource.push(new DropdownListValues('Central - CST', '2'));
            this.dataSource.push(new DropdownListValues('Mountain - MST', '3'));
            this.dataSource.push(new DropdownListValues('Pacific - PST', '4'));
            this.GetStaticDataCallback(this.dataSource);
        }
    }
}

