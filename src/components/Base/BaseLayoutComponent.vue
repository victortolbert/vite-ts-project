<script lang='ts'>
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { EventBus, PifEvents } from '@/types'

@Component({})
export default class BaseLayoutComponent extends Vue {
  @Prop({ required: false, type: String })
    label: string | null | undefined

  @Prop({ required: false, type: String })
    baseValue!: any | null

  @Prop({ required: false, type: String })
    customValidator!: string | null

  @Prop({ required: false, type: Array })
    choices!: Array<string>

  @Prop({ required: false, type: Boolean, default: true })
    validate!: boolean | null

  @Prop({ required: false, type: Boolean })
    hideMargin!: boolean

  validationPassed = false

  constructor() {
    super()
  }

  validating = false

  response: string | null = this.baseValue != null ? this.baseValue : ''

  @Watch('baseValue')
  baseValueChanged() {
    this.validationPassed = true
  }

  mounted() {
    EventBus.$on(PifEvents.ValidatePif, () => {
      this.validationPassed = false
      this.validating = true

      if (this.validate && this.validate === true && (this.baseValue == null || this.baseValue.length === 0 || this.baseValue === 'null')) {
        console.log(`(${this.label}) Failed Validation With value: ${this.baseValue} V:${this.validate}`)
        EventBus.$emit(PifEvents.FailedVaidation)
      }
      else {
        this.validationPassed = true
      }
    })
  }
}
</script>

<template>
  <div class="baseContainer" :class="{ noMargin: hideMargin }">
    <div class="labelContainer" :class="{ failedValidation: validating && !validationPassed }">
      {{ label }}
      <span style="color: red"> {{ customValidator }}</span>
      <span style="color: white; font-size: 2pt">
        {{ baseValue }}
      </span>
    </div>
    <div class="slotContainer">
      <div class="slotRow">
        <div id="slot1">
          <slot name="component1" />
        </div>
        <div id="slot2">
          <slot name="component2" />
        </div>
      </div>
      <div class="slotRow">
        <div id="slot3">
          <slot name="component3" />
        </div>
        <div id="slot4">
          <slot name="component4" />
        </div>
      </div>
    </div>
  </div>
</template>
