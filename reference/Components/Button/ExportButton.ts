import { BModal, BButton } from 'bootstrap-vue'
import _ from "lodash";
import { saveExcel } from "@progress/kendo-vue-excel-export";
import { Component, Prop, Vue } from "vue-property-decorator";
import DataSource from "../../DataAccess/DataSource";
import { ApiResponse } from "../../DataAccess/ApiResponse";
import { ResponseType } from "../../Enums/ResponseType";

export interface IExportColumns {
    field?: string;
    title?: string;
}

@Component({
    components: { BButton },
    template: "<b-button @click='exportSpreadsheet'>Export to Excel</b-button>",
})
export default class ExportButton extends Vue {
    _dataSource: DataSource | null = null;
    _columns: Array<IExportColumns> = [];

    @Prop({ type: String, default: "" })
    accessToken: string;

    @Prop({ type: Array, default: () => [] })
    columns: Array<IExportColumns>;

    @Prop({ type: Array, default: () => [] })
    data: Array<any>;

    // TODO: use-only-api, use-only-data, use-api-first?

    get dataSource(): DataSource | null {
        this._dataSource = this._dataSource ?? this.route ? new DataSource(this.route) : null;
        return this._dataSource;
    }

    set dataSource(val: DataSource | null) {
        this._dataSource = val;
    }

    @Prop({ type: String, default: "ExemplarExcelExport" })
    fileName: string;

    @Prop({ type: String, default: "" })
    route: string;

    errorHandler(response: ApiResponse | Error): void {
        this.$emit("datarequesterror", response);
    }

    exportSpreadsheet(): void {
        if (!this.data?.length && !this.route) {
            this.$emit("emptyexport");
            return;
        }
        this.exportFromGrid() || this.exportFromApi();
    }

    exportFromGrid(): boolean {
        try {
            if (this.data?.length && this.fileName)
                saveExcel({
                    data: this.data,
                    fileName: this.fileName || "ExemplarExcelExport",
                    columns: this.getColumns(this.data),
                });
            return !!(this.data?.length && this.fileName);
        } catch (ex) {
            this.$emit("exporterror", ex);
            return false;
        }
    }

    exportFromApi(): void {
        const params = { collectionType: "ExportList" };
        if (this.route) {
            this.dataSource &&
                this.dataSource.request({
                    accessToken: this.accessToken,
                    params,
                },
                    this.responseHandler,
                    this.errorHandler);
        }
    }

    getColumns(data: Array<any>): Array<IExportColumns> {
        if (this.columns?.length)
            return this.columns;
        if (data?.length)
            return data.reduce((keys: Array<string>, item: any) => {
                    const newKeys = Object.keys(item).filter(key => !keys.includes(key));
                    newKeys?.length && keys.push(...newKeys);
                    return keys;
                },
                [])
                .map((key: string) => ({
                field: key,
                title: key.replace(/([a-z])([A-Z])/g, "$1 $2"),
            }));
        return [];
    }

    responseHandler(response: ApiResponse): void {
        if (response.result !== ResponseType.Success) {
            this.$emit("datarequesterror", response);
            return;
        }
        try {
            if (!this.dataSource!.data.length) {
                this.$emit("emptyexport");
            } else
                saveExcel({
                    data: this.dataSource!.data,
                    fileName: this.fileName || "ExemplarExcelExport",
                    columns: this.getColumns(this.dataSource!.data),
                });
        } catch (ex) {
            this.$emit("exporterror", ex);
        }
    }
}