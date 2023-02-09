import Vue from "Vue";
import { Component, Watch, Prop } from "vue-property-decorator";
@Component({
    template: "#textbox-template",
    components: {}
})

export default class TextboxComponent extends Vue {
    @Prop({ required: false, type: String })
    currentValue: string;

    @Prop({ required: false, type: Number, default: 500 })
    maxCharacters: number;

    @Prop({ required: false, type: Number, default: 500 })
    minCharacters: number;

    @Prop({ required: false, type: Boolean })
    textArea: boolean;

    @Prop({ required: false, type: Boolean })
    hideMargin!: boolean;

    @Prop({ required: false, type: Boolean, default: false })
    disabled!: boolean;

    @Prop({ required: false, type: Boolean, default: false })
    readonly!: boolean;

    @Prop({ required: false, type: Boolean, default: true })
    visible: boolean;

    validating: boolean = false;

    charsEntered: number = 0;

    showRangeValidator: boolean = false;

    // @ts-ignore
    response: string | null = this.currentValue != null ? this.currentValue : "";

    hasAnswered: boolean = false;

    constructor() {
        super();
    }

    mounted() {
        this.UpdateResponse();
        this.charsEntered = this.response != null ? this.response.length : 0;
    }

    @Watch("currentValue")
    UpdateResponse() {
        this.response = this.currentValue != null ? this.currentValue : "";
        this.charsEntered = this.response != null ? this.response.length : 0;
    }

    KeyPressEvent(event: any) {
        if (event.key === "Backspace") {
            this.response = event.target.value;
            if (this.charsEntered > 0) {
                this.charsEntered--;
            }
            this.$emit('onchanged', this.response)
            return;
        }

        if (this.charsEntered < this.maxCharacters)
        {
            this.response = event.target.value;
            this.charsEntered++;
            this.$emit('onchanged', this.response);
        }
    }
}
