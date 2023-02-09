/* eslint-disable @typescript-eslint/indent */
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component({
  template: `<div class="cbContainer">
    <div
      class="eCheckbox boxLabel"
      :class="{ answered: (currentValue != null) && response && response != null }"
      @click="$emit('onchanged', SetResponse(true))"
    />
    <span class="choiceText">
      {{ choices[0] }}
    </span>
    &nbsp;&nbsp;
    <div
      class="eCheckbox boxLabel"
      :class="{
        answered: (currentValue != null) && !response && response != null,
      }"
      @click="$emit('onchanged', SetResponse(false))"
    />
    <span class="choiceText">
      {{ choices[1] }}
    </span>
  </div>`,
})
export default class BooleanComponent extends Vue {
  @Prop({ required: false, type: Boolean })
  currentValue!: boolean | null

  @Prop({ required: false, type: Array })
  choices!: Array<string>

  @Prop({ required: false, type: Boolean })
  camera!: boolean

  @Prop({ required: false, type: Boolean, default: true })
  validate!: boolean

  @Prop({ required: false, type: Boolean, default: true })
  visible!: boolean

  @Prop({ required: false, type: String })
  customValidator!: string | null

  response: boolean | null = this.currentValue

  validating = false

  constructor() {
    super()
  }

  @Watch('currentValue')
  UpdateResponse() {
    if (this.currentValue == null)
      return

    this.response = !!this.currentValue
  }

  mounted() { }

  SetResponse(currentResponse: boolean): boolean | null {
    if (currentResponse === this.response)
      this.response = null
    else
      this.response = currentResponse
    return this.response
  }
}
