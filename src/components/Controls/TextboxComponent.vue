<script lang="ts">
import { Prop, Vue, Watch } from 'vue-property-decorator'

export default class TextboxComponent extends Vue {
  @Prop({ required: false, type: String })
    currentValue!: string

  @Prop({ required: false, type: Number, default: 500 })
    maxCharacters!: number

  @Prop({ required: false, type: Number, default: 500 })
    minCharacters!: number

  @Prop({ required: false, type: Boolean })
    textArea!: boolean

  @Prop({ required: false, type: Boolean })
    hideMargin!: boolean

  @Prop({ required: false, type: Boolean, default: false })
    disabled!: boolean

  @Prop({ required: false, type: Boolean, default: false })
    readonly!: boolean

  @Prop({ required: false, type: Boolean, default: true })
    visible!: boolean

  validating = false

  charsEntered = 0

  showRangeValidator = false

  response: string | null = this.currentValue != null ? this.currentValue : ''

  hasAnswered = false

  constructor() {
    super()
  }

  mounted() {
    this.UpdateResponse()
    this.charsEntered = this.response != null ? this.response.length : 0
  }

  @Watch('currentValue')
  UpdateResponse() {
    this.response = this.currentValue != null ? this.currentValue : ''
    this.charsEntered = this.response != null ? this.response.length : 0
  }

  KeyPressEvent(event: any) {
    if (event.key === 'Backspace') {
      this.response = event.target.value
      if (this.charsEntered > 0)
        this.charsEntered--

      this.$emit('onchanged', this.response)
      return
    }

    if (this.charsEntered < this.maxCharacters) {
      this.response = event.target.value
      this.charsEntered++
      this.$emit('onchanged', this.response)
    }
  }
}
</script>

<template>
  <div class="w-full flexRowStartNoWrap">
    <div class="choiceContainer">
      <div>
        <input
          v-if="!textArea && !disabled"
          :maxlength="maxCharacters"
          :readonly="readonly"
          :value="response"
          class="form-control formValue tb tbAlpha"
          @keyup="KeyPressEvent"
        >

        <input
          v-if="!textArea && disabled"
          disabled
          :maxlength="maxCharacters"
          :readonly="readonly"
          :value="response"
          class="form-control formValue tb tbAlpha"
        >

        <textarea
          v-if="textArea && !disabled"
          :maxlength="maxCharacters"
          :readonly="readonly"
          :value="response"
          cols="450"
          class="h-textarea form-control formValue"
          rows="2"
          @keyup="KeyPressEvent"
        />

        <textarea
          v-if="textArea && disabled"
          :maxlength="maxCharacters"
          :readonly="readonly"
          :value="response"
          cols="450"
          class="h-textarea form-control formValue"
          rows="2"
          disabled
        />

        <div class="mt-1 text-xs">
          Remaining Characters: <b>{{ maxCharacters - charsEntered }}</b>
        </div>
      </div>
    </div>
  </div>
</template>
