import { Method } from "axios";
import _ from "lodash";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { PropType } from "vue";
import {
    MultiSelect as KendoMultiSelect,
    MultiSelectChangeEvent,
} from "@progress/kendo-vue-dropdowns";
import DataSource from "@ExemplarDataAccess/DataSource";
import { ApiResponse } from "@ExemplarDataAccess/ApiResponse";
import MultiSelectModel from "@ExemplarViewModels/MultiSelectModel";

export interface IDataSourceParams {
    mappingType?: "Grid" | "List";
    pageNumber?: number;
    pageSize?: number;
    [key: string]: any;
}

@Component({
    components: {
        KendoMultiSelect,
    },
    props: {
        model: Object as PropType<MultiSelectModel>,
    },
    template: "#multi-select-template",
})
export default class MultiSelect extends Vue {
    allData: Array<any> | undefined;
    @Prop()
    dataItem: any;
    dataItems: Array<any> = [];
    dataKey: string | ((data: Array<any>) => any) = "";
    dataTextField = "";
    dataUpdateSource: DataSource | undefined;
    key = 0;
    loaded = false;
    @Prop(MultiSelectModel)
    model!: MultiSelectModel;
    optionReadSource: DataSource | undefined;
    optionsLoaded = false;
    value: Array<any> = [];
    valueReadSource: DataSource | undefined;
    valueLoaded = false;
    valueStrings: Array<any> = [];
    accessToken: string = <string>$("#accessToken").val();

    changeHandler(event: MultiSelectChangeEvent) {
        this.value = event.target.value;
        this.$emit("input", event.target.value);
    }


    getData(): void {
        const params: IDataSourceParams = {
            mappingType: "Grid",
            pageSize: 100,
            pageNumber: 1
        };
        //this.model.valueSourceParams && Object.assign(params, this.model.valueSourceParams);

        this.optionReadSource!.request(
            {accessToken:this.accessToken},
            this.setOptions,
            this.errorHandler);
        this.valueReadSource!.request(
            { accessToken: this.accessToken },
            this.setValue,
            this.errorHandler);
    }

    errorHandler(response: ApiResponse): void {
        typeof this.model.errorCallback === "function" &&
            this.model.errorCallback(response.resultText);
    }

    mapValues() {
        this.value = this.dataItems.filter((item: any) =>
            this.valueStrings.includes(DataSource.getDataByKeys(item,
                this.model.dataItemKey || this.model.dataTextField || "")));
    }

    mounted() {
        this.optionReadSource = new DataSource(
            this.model.optionSourceRoute,
            this.model.optionSourceMethod,
            this.model.optionSourceParams
        );
        this.valueReadSource = new DataSource(
            this.model.valueSourceRoute,
            this.model.valueSourceMethod,
            this.model.valueSourceParams
        );
        this.dataUpdateSource = new DataSource(
            this.model.dataUpdateRoute,
            this.model.dataUpdateMethod
        );
        this.getData();
    }

    @Watch("model", { deep: true })
    onModelChange() {
        this.key++;
    }

    setOptions() {
        this.dataItems = this.optionReadSource!.data.Model;
        this.optionsLoaded = true;
        this.loaded = this.optionsLoaded && this.valueLoaded;
        this.loaded && this.mapValues();
    }

    setValue() {
        this.valueStrings = this.model.valueSourceItemKey
            ? (this.valueReadSource!.data || []).map((item: any) => DataSource.getDataByKeys(item, this.model.valueSourceItemKey!))
            : this.valueReadSource!.data;
        console.log(this.valueReadSource!.data, this.model.valueSourceItemKey, this.valueStrings);
        this.valueLoaded = true;
        this.loaded = this.optionsLoaded && this.valueLoaded;
        this.loaded && this.mapValues();
    }
}