import { Component, Watch, Prop } from "vue-property-decorator";
import KendoDropDown from "@progress/kendo-dropdowns-vue-wrapper/dist/es/KendoDropDownList/index";
import Vue from "Vue";
import { DropdownListValues } from "@ExemplarViewModels/DropdownListValues"
import DropdownComponent from "@ExemplarComponents/Controls/DropdownComponent";

Vue.component('kendo-dropdownlist', KendoDropDown)

@Component({
    template: "#service-region-dropdown-template",
    components: { DropdownComponent }
})

export default class ServiceRegionDropdownComponent extends DropdownComponent {

    @Prop({ required: false, type: Boolean, default: false })
    showActive: boolean;

    @Prop({ required: false, type: Number, default: null })
    regionManagerId: number;

    serviceRegionUri: string;

    constructor() {
        super();
        
    }

    async mounted() {
        this.ExtendedMount();
    }

    @Watch("bindList")
    async GetData() {
        this.serviceRegionUri = this.buildServiceRegionUri();
        await this.dataAccess.GetAsync(this.serviceRegionUri, this.ServiceRegionCallback, null);
    }    

    changeServiceRegionValue() {
        var ddl: kendo.ui.DropDownList = (<any>this.$refs.ddList).kendoWidget();
        if (ddl.value() != "0") {

            this.$emit("onserviceregionchange", ddl);
        }
    }

    ServiceRegionCallback(model: Array<DropdownListValues>) {

        //Set this as a default value
        model.unshift(new DropdownListValues("Select a Service Region", "0"));
        this.GetDataCallback(model);
    }

    buildServiceRegionUri() :string {
        var myUri: string = "";
        myUri = this.uri + "ServiceRegions?"
        var showInactive = !this.showActive;
        myUri = myUri + "ShowInactive=" + String(showInactive);
        
        if (this.regionManagerId !== null) {
            myUri = myUri + "&ServiceManagerId=" + String(this.regionManagerId);
        }
        return myUri;
    }
}

