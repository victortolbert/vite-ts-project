import Vue from "Vue";
import { Component, Watch, Prop } from "vue-property-decorator";

@Component({
  template: "#boolean-template",
  components: {}
})

export default class BooleanComponent extends Vue {
  @Prop({ required: false, type: Boolean })
  currentValue!: boolean | null;

  @Prop({ required: false, type: Array })
  choices!: Array<string>;

  @Prop({ required: false, type: Boolean })
  camera!: boolean;

  @Prop({ required: false, type: Boolean, default: true })
  validate: boolean;

  @Prop({ required: false, type: Boolean, default: true })
  visible: boolean;

  @Prop({ required: false, type: String })
  customValidator!: string | null;

  response: boolean | null = this.currentValue;

  validating: boolean = false;

  constructor() {
    super();
  }

  @Watch("currentValue")
  UpdateResponse() {
    if (this.currentValue == null) {
      return;
    }

    this.response = this.currentValue ? true : false;
  }

  mounted() {
  }

  SetResponse(currentResponse: boolean): boolean | null {
    if (currentResponse == this.response) {
      this.response = null;
    } else {
      this.response = currentResponse;
    }
    return this.response;
  }


}
