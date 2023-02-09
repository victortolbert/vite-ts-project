import { Component, Watch, Prop } from "vue-property-decorator";
import KendoDropDown from "@progress/kendo-dropdowns-vue-wrapper/dist/es/KendoDropDownList/index";
import Vue from "Vue";
import { DropdownListValues } from "@ExemplarViewModels/DropdownListValues"
import DropdownComponent from "@ExemplarComponents/Controls/DropdownComponent";

Vue.component('kendo-dropdownlist', KendoDropDown)

@Component({
    template: "#service-area-dropdown-template",
    components: { DropdownComponent  }
})

export default class ServiceAreaDropdownComponent extends DropdownComponent {


    @Prop({ required: false, type: Boolean, default: false })
    showActive: boolean;

    @Prop({ required: false, type: String, default: "" })
    serviceRegionIds: string;

    serviceAreaUri: string;

    constructor() {
        super();
        
    }

    async mounted() {
        this.ExtendedMount();
    }

    @Watch("bindList")
    async GetData() {
            this.serviceAreaUri = this.buildServiceAreaUri();
            await this.dataAccess.GetAsync(this.serviceAreaUri, this.ServiceAreaCallback, null);
    }    

    changeServiceAreaValue() {
        var ddl: kendo.ui.DropDownList = (<any>this.$refs.ddList).kendoWidget();
        if (ddl.value() != "0") {

            this.$emit("onserviceareachange", ddl);
        }
    }

    ServiceAreaCallback(model: Array<DropdownListValues>) {

        //Set this as a default value
        model.unshift(new DropdownListValues("Select a Service Area", "0"));
        this.GetDataCallback(model);
    }

    buildServiceAreaUri() :string {
        var myUri: string = "";
        myUri = this.uri + "ServiceAreas/GetAllServiceAreas?";

        var showInactive = !this.showActive;
        myUri = myUri + "ShowInactive=" + String(showInactive)

        if (this.serviceRegionIds != "") {
            myUri = myUri + "&ServiceRegionIds=" + String(this.serviceRegionIds);
        }
        
        return myUri;
    }
}

