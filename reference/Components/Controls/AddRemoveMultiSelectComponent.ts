import { Component, Watch, Prop } from "vue-property-decorator";
import KendoDropDown from "@progress/kendo-dropdowns-vue-wrapper/dist/es/KendoDropDownList/index";
import Vue from "Vue";
import DataAccess from "@ExemplarCommon/DataAccess";
import { DropdownListValues } from "@ExemplarViewModels/DropdownListValues"
import { findIndex } from "lodash";

@Component({
    template: "#add-remove-multi-select-template",
    components: {}
})
export default class AddRemoveMultiSelectComponent extends Vue {
    @Prop({ required: true, type: Boolean, default: false })
    bindList: boolean;

    @Prop({ required: false, type: String, default: "" })
    title: string;

    @Prop({ required: true, type: String })
    uri: string;

    @Prop({ required: false, type: Array, default: () => [] })
    selectedValues: Array<string>;

    accessToken: string = <string>$("#accessToken").val();
    addedSelected: Array<string> = [];
    dataAccess: DataAccess = new DataAccess(this.accessToken);
    dataSource: Array<DropdownListValues> = new Array<DropdownListValues>();
    dataAdded: Array<DropdownListValues> = new Array<DropdownListValues>();
    hasDataBound: boolean = false;
    showLoader: boolean = true;
    sourceSelected: Array<string> = [];

    constructor() {
        super();
        this.AddFromSource = this.AddFromSource.bind(this);
    }

    async mounted() {
        if (this.bindList) {
            this.GetData();
        }
    }

    AddFromSource(): void {
        console.log("AddFromSource");
        for (var id of this.sourceSelected) {
            if (id === "0")
                break;
            const item = this.dataSource.find(itm => itm.value === id);
            this.dataSource.splice(this.dataSource.indexOf(item!), 1);
            item && this.dataAdded.push(item);
            this.dataAdded = this.dataAdded.sort((a, b) => Number(a.value) - Number(b.value))
        }
        this.UnselectAll();
        this.$emit("change", this.dataAdded?.map(itm => itm.value) ?? [])
    }

    @Watch("bindList")
    async GetData(): Promise<void> {
        if (this.bindList && this.uri) {
            await this.dataAccess.GetAsync(this.uri, this.GetDataCallback, null);
        }
    }

    GetDataCallback(model: Array<DropdownListValues>): void {

        if (model !== null && model.length != 0) {
            this.dataSource = model;

            if (findIndex(this.dataSource, { value: "0" }) != 0) {
                this.dataSource.unshift(new DropdownListValues("Please select from list...", "0"));
            }
            this.hasDataBound = true;
            this.showLoader = false;
            this.SetInitialSelected();
        }
        else {
            this.hasDataBound = false;
            this.showLoader = false;
        }
    }

    onAddedSelect(event: any): void {
        this.addedSelected = [...event.target.options].filter(option => option.selected).map(option => option.value)
    }

    onSourceSelect(event: any): void {
        this.sourceSelected = [...event.target.options].filter(option => option.selected).map(option => option.value);
    }

    RemoveFromAdded(): void {
        for (let id of this.addedSelected) {
            const item = this.dataAdded.find(itm => itm.value === id);
            this.dataAdded.splice(this.dataAdded.indexOf(item!), 1);
            this.dataSource.push(item!);
            this.dataSource = this.dataSource.sort((a, b) => Number(a.value) -Number( b.value))
        }
        this.UnselectAll();
        this.$emit("change", this.dataAdded.map(itm => itm.value))
    }

    SetInitialSelected() {
        console.log("SetInitialSelected");
        if (!this.selectedValues?.length)
            return;
        this.dataAdded = new Array<DropdownListValues>();
        this.sourceSelected = this.selectedValues.map(item => item.toString());
        this.AddFromSource();
    }

    UnselectAll() {
        const sourceRef = this.$refs.sourceRef as HTMLSelectElement;
        const addedRef = this.$refs.addedRef as HTMLSelectElement;
        const sourceOptions = [...Array(sourceRef.options.length)].map((x: unknown, i: number) => sourceRef.options[i]);
        const addedOptions = [...Array(addedRef.options.length)].map((x: unknown, i: number) => addedRef.options[i]);
        for (let option of sourceOptions)
            option.selected = false;
        for (let option of addedOptions)
            option.selected = false;
    }
}

