<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator'
import BooleanComponent from './Boolean.vue'
import BaseLayoutComponent from './BaseLayoutComponent.vue'

@Component({
  template: '#boolean-wrapper-template',
  components: {
    BaseLayoutComponent,
    BooleanComponent,
  },
})
export default class BooleanWrapperComponent extends Vue {
  @Prop({ required: true, type: String })
    label!: string

  @Prop({ required: false, type: Boolean })
    currentValue!: boolean | null

  @Prop({ required: false, type: Array })
    choices!: Array<string>

  @Prop({ required: false, type: Boolean, default: true })
    validate!: boolean

  @Prop({ required: false, type: Boolean })
    hideMargin!: boolean

  constructor() {
    super()
  }
}
</script>
