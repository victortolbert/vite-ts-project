// Common Imports
import _ from "lodash";
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { GlobalEvents, GlobalEventBus } from "@ExemplarCommon/eventBus";
import { ApiResponse } from "@ExemplarDataAccess/ApiResponse";
import { ResponseType } from "@ExemplarEnums/ResponseType";
import { Method } from "axios";

// Component Imports
import { BModal } from 'bootstrap-vue'
import PagerToolbarComponent from "@ExemplarComponents/Controls/PagerToolbarComponent";
import DataSource from "../DataAccess/DataSource";

interface ICardField {
    name: string;
}

@Component({
    template: "#card-view-modal-template",
    components: {
        BModal,
        PagerToolbar: PagerToolbarComponent,
    }
})
export default class CardViewModal<T> extends Vue {
    private data?: Array<T>;

    @Prop({ required: false, type: String, default: "" })
    accessToken!: string;

    @Prop({ required: false, type: String, default: "" })
    apiBase!: string;

    @Prop({ required: false, type: String, default: "Model" })
    dataKeys!: string;

    @Prop({ required: false, type: Array as () => Array<T> | null, default: null })
    model?: Array<T> | null = null;

    @Prop({ required: true, type: Array, default: () => [] })
    fields!: Array<string | ICardField>;

    dataSource: DataSource;

    isOpen: boolean = false;

    items: Array<any> = [];

    loaded: boolean = false;

    @Prop({ required: false, type: String, default: "get" })
    method!: Method;

    @Prop({ required: false, type: String, default: "card-view-modal" })
    modalId!: string;

    @Prop({ required: false, type: Object, default: () => ({}) })
    params: any;

    pendingGet?: NodeJS.Timeout;

    @Prop({ required: false, type: Boolean, default: false })
    reload = false;

    @Prop({ required: false, type: String, default: "" })
    route!: string;

    @Prop({ required: true, type: String, default: "" })
    titleField: string;

    @Prop({ required: false, type: String, default: "" })
    titleFieldName: string;


    constructor() {
        super();
        this.close = this.close.bind(this);
    }

    close() {
        this.isOpen = false;
    }

    dataReadHandler(response: ApiResponse): void {
        this.data = _.cloneDeep(this.dataSource!.data);
        this.updateData();
        this.$emit("datareadsuccess", response);
    }

    dataReadErrorHandler(error: ApiResponse | Error): void {
        const result = (error as ApiResponse).result;
        if (result === ResponseType.NoRecords) {
            this.items = [];
            this.loaded = true;
        } else if (result === ResponseType.Unauthorized) {
            GlobalEventBus.$emit(GlobalEvents.Unauthorized);
        }
        this.$emit("datareaderror", error);
        this.loaded = true;
    }

    getData(): void {
        if (!this.apiBase)
            return;

        const params: any = {
            gridType: "DefaultGridView",
            collectionType: "Grid",
        };

        try {
            this.dataSource!.request(
                { params },
                this.dataReadHandler,
                this.dataReadErrorHandler);
        } catch (err) {
            this.dataReadErrorHandler(err);
        }
    }

    getDataWithThrottling(delay = 500) {
        if (this.pendingGet === undefined) {
            this.pendingGet = setTimeout(() => {
                this.getData();
                clearTimeout(this.pendingGet!);
                this.pendingGet = undefined;
            }, delay)
        }
    }

    getField(field: string | ICardField) {
        return typeof field === "string" ?
            field :
            field.name;
    }

    mounted() {
        if (this.model && !_.isEqual(this.model, this.items)) {
            this.items = _.cloneDeep(this.model ?? []);
            this.loaded = true;
            this.$emit("datareadsuccess");
        } else {
            this.updateDataSources();
            this.getData();
        }
    }

    @Watch("model.apiBase")
    onApiBaseChange(): void {
        this.updateDataSources();
        this.getDataWithThrottling(10);
    }

    @Watch("model.dataSourceRoute")
    onDataSourceRouteChanged(): void {
        this.updateDataSources();
        this.getDataWithThrottling(10);
    }

    @Watch("reload")
    onReloadData(): void {
        if (this.reload) {
            if (this.model && !_.isEqual(this.model, this.items)) {
                this.items = _.cloneDeep(this.model ?? []);
                this.loaded = true;
                this.$emit("datareadsuccess");
            } else {
                this.updateDataSources();
                this.getData();
            }
        }
    }

    //@Watch("model.reloadData", { deep: true })
    //reloadAfterEdit(): void {
    //    if (this.model.reloadData !== undefined && this.model.reloadData) {
    //        this.updateDataSources();
    //        this.getDataWithThrottling(10);
    //        this.model.reloadData = false;
    //    }
    //}

    open() {
        this.isOpen = true;
    }

    updateData(): void {
        const data = _.cloneDeep(this.data);
        //if (data) {
        //    for (let item of data) {
        //        item.$gridModel = this.model;
        //        item.$gridProps = this.$props;
        //        item.$emitGridEvent = this.emitEventAndTryCallback;
        //    }
        //}
        if (data)
            this.items = data;
        this.loaded = true;
    }

    updateDataSources() {
        this.dataSource = new DataSource(
            `${this.apiBase}${this.route}`,
            this.method || "get",
            this.params || {},
            this.dataKeys || "Model",
            this.accessToken);
    }
}