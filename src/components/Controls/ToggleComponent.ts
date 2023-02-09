/* eslint-disable @typescript-eslint/indent */
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  template: `<span class="toggle" role="checkbox" tabindex="0"
    @click="toggle"
    @keydown.space.prevent="toggle"
    :aria-checked="value.toString()"
  ></span>`,
})
export default class ToggleComponent extends Vue {
  @Prop({ required: false, type: Boolean })
  value!: boolean | null

  toggle() {
    this.$emit('input', !this.value)
  }
}
