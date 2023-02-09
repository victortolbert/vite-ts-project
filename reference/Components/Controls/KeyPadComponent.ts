import Vue from "Vue";
import { Component, Watch, Prop} from "vue-property-decorator"; 

@Component({
    template: "#key-pad-template",
    components: {}
})

export default class KeyPadComponent extends Vue {
   
    @Prop({ required: false, type: Number })
    currentValue!: number | null;

    @Prop({ required: false, type: Number})
    max: number;

    @Prop({ required: false, type: Number })
    min: number;

    @Prop({ required: false, type: Boolean })
    decimal!: boolean;

    @Prop({ required: false, type: String })
    label: string | null;

    showPad: boolean = false;
   
    constructor() {
        super();
    }

    // @ts-ignore
    minSize: number = this.min ? this.min : 0;

    // @ts-ignore
    maxSize: number = this.max ? this.max : 99;

    response: number | null = this.currentValue;

    value: string="";

    showRangeValidator: boolean = false;

    mounted() {
        this.response = this.currentValue;
    }

    @Watch("currentValue")
    CheckCurrentValue() {
        this.response = this.currentValue;
    }

    OnClick(entry: string) {
        this.value = this.response == null ? entry : this.response + entry;
        this.response = <number><any>this.value;
    }

    Reset() {
        this.response = null;
        this.showPad = true;
        this.$emit('onchanged', null)
    }
}
