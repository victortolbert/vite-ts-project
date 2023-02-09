import Vue from "Vue";
import { Component, Watch, Prop } from "vue-property-decorator";
import { NumericTextBox  } from '@progress/kendo-inputs-vue-wrapper';

Vue.component('kendo-numerictextbox', NumericTextBox )

@Component({
    template: "#numeric-template",
    components: {}
})

export default class NumericComponent extends Vue {
    @Prop({ required: false, type: Number })
    currentValue: number;

    @Prop({ required: false, type: Number, default: 500 })
    maxCharacters: number;

    @Prop({ required: false, type: Number, default: 500 })
    minCharacters: number;

    @Prop({ required: false, type: Boolean, default: false })
    disabled!: boolean;

    @Prop({ required: false, type: Boolean, default: true })
    visible: boolean;

    validating: boolean = false;

    showRangeValidator: boolean = false;

    // @ts-ignore
    response: number | null = this.currentValue != null ? this.currentValue : 0;

    hasAnswered: boolean = false;

    constructor() {
        super();
    }

    mounted() { 
    }

    @Watch("currentValue")
    private UpdateResponse() {
        this.response = this.currentValue != null ? this.currentValue : 0;
    }

    onChange(e: any) {
        
        this.response = e.sender.value();
        this.$emit('onchanged', this.response)
        console.log("this.response: " + this.response);
    }

}
