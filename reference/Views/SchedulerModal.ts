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
//import DataSource from "../DataAccess/DataSource";

interface ICardField {
    name: string;
}

@Component({
    template: "#scheduler-modal-template",
    components: {
        BModal,
    },
})
export default class SchedulerModal extends Vue {
    private data?: Array<any>; // SchedulerItem

    @Prop({ required: true, type: Array as () => Array<any> | null, default: null })
    model?: Array<any> | null = null;

    isOpen: boolean = false;

    tempText: string = "";

    constructor() {
        super();
        this.close = this.close.bind(this);
    }

    close() {
        this.isOpen = false;
    }

    mounted() {
        this.tempText = JSON.stringify({ ...this.model }, null, 2);
        console.log(this.tempText);
    }

    open() {
        this.isOpen = true;
    }

    @Watch("model")
    onModelChange() {
        this.tempText = JSON.stringify({ ...this.model }, null, 2);
        console.log(this.tempText);
    }
}
