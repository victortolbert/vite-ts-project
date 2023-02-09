import { Component, Watch, Prop } from "vue-property-decorator";
import KendoDropDown from "@progress/kendo-dropdowns-vue-wrapper/dist/es/KendoDropDownList/index";
import Vue from "Vue";
import DataAccess from "@ExemplarCommon/DataAccess";
import { DropdownListValues } from "@ExemplarViewModels/DropdownListValues"
import { findIndex } from "lodash";

Vue.component('kendo-dropdownlist', KendoDropDown)

@Component({
    template: "#dropdown-template",
    components: {}
})

export default class DropdownComponent extends Vue {
    @Prop({ required: true, type: Boolean, default:false })
    bindList: boolean;

    @Prop({ required: true, type: String })
    uri: string;

    @Prop({ required: false, type: String, default:"" })
    selectedValue: string;

    accessToken: string = <string>$("#accessToken").val();
    dataAccess: DataAccess = new DataAccess(this.accessToken);
    dataSource: Array<DropdownListValues> = new Array<DropdownListValues>();
    hasDataBound: boolean = false;
    showLoader: boolean = true;
    
    constructor() {
        super();
    }

    async mounted() {
        if (this.bindList) {
            this.GetData();
        }
    }

    @Watch("bindList")
    async GetData() {
        console.log("accessToken: " + this.accessToken);
        if (this.bindList && this.uri) {
            await this.dataAccess.GetAsync(this.uri, this.GetDataCallback, null);
        }
    }
    ExtendedMount() {
        var ddl: kendo.ui.DropDownList = (<any>this.$refs.ddList).kendoWidget();
        if (this.bindList && !this.hasDataBound ) {
            ddl.enable(true);
            this.GetData();
        }
        else if (!this.bindList) {
            this.hasDataBound = false;
            this.showLoader = false;
            ddl.enable(false);
        }
    }
    GetDataCallback(model: Array<DropdownListValues>) {

        if (model !== null && model.length != 0) {
            this.dataSource = model;

            if (findIndex(this.dataSource, { value: '0' }) != 0) {
                this.dataSource.unshift(new DropdownListValues('Please select from list...', '0'));
            }
            var ddl: kendo.ui.DropDownList = (<any>this.$refs.ddList).kendoWidget();

            if(this.selectedValue.length > 0)
       
                if (this.selectedValue.length > 0) {
                    ddl.dataSource.data(model);
                    var idx = findIndex(this.dataSource, { value: this.selectedValue });
            
                if (idx > -1) {
                    ddl.select(idx);
                }

            } else if (model && model.length > 0  && findIndex(this.dataSource, { value: '0' }) != 0 ) {
                ddl.select(0);
            }
            this.hasDataBound = true;

            this.showLoader = false
        }
        else {
            this.hasDataBound = false;
            this.showLoader = false;
        }
    }

    GetStaticDataCallback(model: Array<DropdownListValues>) {

        //For some reason, the dropdowns with static data need to have the data explicitly binded to the dropdown to have a preset item.
        var ddl: kendo.ui.DropDownList = (<any>this.$refs.ddList).kendoWidget();
        ddl.dataSource.data(model);
        this.GetDataCallback(model);
    }

    onDataBound() {
        if (this.hasDataBound && this.selectedValue == "") {
            var ddl: kendo.ui.DropDownList = (<any>this.$refs.ddList).kendoWidget();
            ddl.select(0);
            ddl.trigger("change");
        }
    }

    reset() {
        var ddl: kendo.ui.DropDownList = (<any>this.$refs.ddList).kendoWidget();
        ddl.select(0);
    }
}

