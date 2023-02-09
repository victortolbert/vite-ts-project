import Vue from "Vue";
import { Component, Watch, Prop } from "vue-property-decorator";
import DataAccess from "@ExemplarCommon/DataAccess";
import { DropdownListValues } from "@ExemplarViewModels/DropdownListValues"

@Component({
    template: "#checkbox-template",
    components: { }
})

export default class CheckboxComponent extends Vue {
    @Prop({ required: false, type: Boolean, default: false })
    bindList: boolean;

    @Prop({ required: false, type: String })
    currentValue!: string | null;

    @Prop({ required: false, type: Array, default: () => [] })
    choices!: Array<string>;

    @Prop({ required: false, type: Boolean })
    hideMargin!: boolean;

    @Prop({ required: false, type: Boolean })
    allowMultiple!: boolean;

    @Prop({ required: false, type: Boolean, default: true })
    validate: boolean;

    @Prop({ required: false, type: String, default: "" })
    uri: string;

    response: string | null = this.currentValue != null ? this.currentValue : "";
  
    validating: boolean = false;

    accessToken: string = <string>$("#accessToken").val();
    dataAccess: DataAccess = new DataAccess(this.accessToken);
    hasDataBound: boolean = false;
    showLoader: boolean = true;

    constructor() {
        super();
    }

    @Watch("currentValue")
    currentValueChanged() {
        this.response = this.currentValue != null ? this.currentValue : "";
    }

    @Watch("bindList")
    async GetData() {
        console.log("accessToken: " + this.accessToken);
        if (this.bindList) {
            await this.dataAccess.GetAsync(this.uri, this.GetDataCallback, null);
        }
    }

    GetDataCallback(model: Array<DropdownListValues>) {

        if (model !== null && model.length != 0) {
            this.choices = model.map(item => item.text);

            //var ddl: kendo.ui.DropDownList = (<any>this.$refs.ddList).kendoWidget();

            //if (this.selectedValue.length > 0)

            //    if (this.selectedValue.length > 0) {
            //        ddl.dataSource.data(model);
            //        var idx = findIndex(this.dataSource, { value: this.selectedValue });

            //        if (idx > -1) {
            //            ddl.select(idx);
            //        }

            //    } else if (model && model.length > 0 && findIndex(this.dataSource, { value: '0' }) != 0) {
            //        ddl.select(0);
            //    }
            this.hasDataBound = true;

            this.showLoader = false
        }
        else {
            this.hasDataBound = false;
            this.showLoader = false;
        }
    }

    mounted() {
        if (this.choices && !this.uri) {
            this.hasDataBound = true;
            this.showLoader = false;
        } else if (this.uri) {
            this.GetData();
        }
    }

    Selected(choice: string): boolean {
        if (this.allowMultiple) {
            // @ts-ignore
            return this.response.includes(choice);
        } else {
            if (this.response == choice && this.response != 'Null' || (this.currentValue != null && this.currentValue == choice)) {
                return true;
            } else {
                return false;
            }
        }
       
    }

    SetResponse(choice: string, currentResponse: string): string {

        let result = "";

        if (currentResponse.length == 0) {
            result = choice;
            this.response = result;
            return result;
        }

        if (!this.allowMultiple) {
            if (choice == currentResponse) {
                result = "";
            } else {
                result = choice;
            }
        } else if (this.allowMultiple) {
            if (currentResponse.includes(choice)) {
                var removeLead = "|" + choice;
                var removeTrail = choice + "|";
                result = this.allowMultiple ? currentResponse.replace(removeLead, '').replace(removeTrail, '').replace(choice, '') : "";
            } else {
                if (currentResponse.length == 0) {
                    result = choice;
                } else {
                    result = currentResponse + "|" + choice;
                }
            }
        }
        this.response = result;
        return result;
    }
}
