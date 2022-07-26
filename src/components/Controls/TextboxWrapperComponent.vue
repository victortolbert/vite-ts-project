<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import BaseLayoutComponent from '../Base/BaseLayoutComponent.vue'
import TextboxComponent from './TextboxComponent.vue'

@Component({
  components: {
    BaseLayoutComponent,
    TextboxComponent,
  },
})

export default class TextboxWrapperComponent extends Vue {
  @Prop({ required: false, type: String })
    label!: string | null

  @Prop({ required: false, type: String })
    currentValue: string | any

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

  @Prop({ required: false, type: Boolean, default: true })
    validate!: boolean

  constructor() {
    super()
  }
}
</script>

<template>
  <div style="width:100%">
    <base-layout-component :validate="validate" :base-value="currentValue" :label="label" :hide-margin="hideMargin">
      <template #component1>
        <textbox-component
          :current-value="currentValue ? currentValue : ''"
          :text-area="textArea"
          :max-characters="maxCharacters"
          :min-characters="minCharacters"
          :hide-margin="hideMargin"
          @onchanged="$emit('onchanged', $event)"
        />
      </template>
    </base-layout-component>
  </div>
</template>
