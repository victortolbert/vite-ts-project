import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import KendoDropDown from "@progress/kendo-dropdowns-vue-wrapper/dist/es/KendoDropDownList/index";
import { DropdownListValues } from "@ExemplarViewModels/DropdownListValues"
import { findIndex } from "lodash";

@Component({
    template: "#grid-dropdown-template"
})
export default class GridDropdown extends Vue {
    @Prop()
    dataItem: any;

    dataSource: Array<DropdownListValues> = new Array<DropdownListValues>();
    hasDataBound: boolean = false;
    showLoader: boolean = true;
    canEdit: boolean = false;
    selectedValue: string = "";
    fieldName: string = "";
    fieldText: string = "";
    showDDlist: boolean = false;

    mounted() {
        //Only Show the dropdown/load the dropdown values if it's
        this.setDisplayValues();
        this.canEdit = this.canEditField();
        if (this.dataItem.editField && this.canEdit) {
            this.showDDlist = this.canShowDdList();
            this.GetData();
        }
    }
    setDisplayValues() {
        this.fieldName = this.$parent.$props.field;
        this.selectedValue = (!this.dataItem.isNew) ? this.dataItem[this.fieldName]?.toString() : "";
        this.fieldText = this.findDisplayText();

    }


    canEditField(): boolean {
        let canEditField = false;
        let matchingData: any;
        if (!this.dataItem.isNew && this.dataItem.$gridModel !== undefined) {
            matchingData = this.dataItem.$gridModel.columns.find((obj: any) => obj.field == this.fieldName && obj.editable);
            if (matchingData !== undefined) {
                canEditField = true;
            }
        }
        else {
            canEditField = true;
        }

        return canEditField;
    }

    findDisplayText() : string {
        let text = "";
        var model = this.generateData();
        var idx = findIndex(model, { value: this.selectedValue });
        if (idx > -1) {
            text = model[idx].text;
        }
        return text;
    }

    generateData(): Array<DropdownListValues> {
        var model = this.dataSource;

        return model;
    }
    
    GetData() {

        if (this.dataSource.length == 0) {
            var dataForDropdown: Array<DropdownListValues> = this.generateData();
            this.GetStaticDataCallback(dataForDropdown);           
        }
    }

    GetDataCallback(model: Array<DropdownListValues>) {

        if (model !== null && model.length != 0) {
            this.dataSource = model;

            if (findIndex(this.dataSource, { value: '0' }) != 0) {
                this.dataSource.unshift(new DropdownListValues('Please select from list...', '0'));
            }
            var ddl: kendo.ui.DropDownList = (<any>this.$refs.ddList).kendoWidget();

            if (this.selectedValue !== undefined && this.selectedValue.length > 0)

                if (this.selectedValue.length > 0) {
                    ddl.dataSource.data(model);
                    var idx = findIndex(this.dataSource, { value: this.selectedValue });

                    if (idx > -1) {
                        ddl.select(idx);
                    }

                } else if (model && model.length > 0 && findIndex(this.dataSource, { value: '0' }) != 0) {
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

        //Wait for DOM to rerender so that the ddlist will actually be visiable and we can set the data
        this.$nextTick(() => {
            //ExplicitlyBind the datasource to the drop down list
            var ddl: kendo.ui.DropDownList = (<any>this.$refs.ddList).kendoWidget();

            if(ddl.dataSource.total.length == 0)
                ddl.dataSource.data(model);

            this.GetDataCallback(model);
        });
        
    }

    canShowDdList(): boolean {
        //Will return true if it is being edited and if we're allowed to edit this column
       return this.canEdit && this.dataItem.editField;
    }

    changeSelectedValue(event: Event) {
        var ddl: kendo.ui.DropDownList = (<any>this.$refs.ddList).kendoWidget();
        if (ddl.value() != "0") {
            this.dataItem.editValues[this.$parent.$props.field] = +ddl.value();
            this.fieldText = ddl.text();
        }
    }
    onDataBound() {
        if (this.hasDataBound && this.selectedValue == "") {
            var ddl: kendo.ui.DropDownList = (<any>this.$refs.ddList).kendoWidget();
            ddl.select(0);
            ddl.trigger("change");
        }
    }

    @Watch("dataItem", { deep: true })
    updateValues(): void {
        //Reload view values after grid is done reloading
        if (this.dataItem.$gridModel.reloadData !== undefined && !this.dataItem.$gridModel.reloadData) {
            this.setDisplayValues();
        }

    }
}