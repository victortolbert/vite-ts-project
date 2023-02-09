<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator'
import BooleanComponent from './Boolean.vue'
import BaseLayoutComponent from './BaseLayoutComponent.vue'
import CameraComponent from './CameraComponent.vue'
import type { AssetUploadModel, FieldAsset } from '@/types'

@Component({
  template: '#boolean-camera-wrapper-template',
  components: {
    BaseLayoutComponent,
    BooleanComponent,
    CameraComponent,
  },
})

export default class BooleanCameraWrapperComponent extends Vue {
  @Prop({ required: true, type: String })
    label!: string

  @Prop({ required: false, type: Boolean })
    currentValue!: boolean | null

  @Prop({ required: false, type: Array })
    choices!: Array<string>

  @Prop({ required: false, type: String })
    customValidator!: string | null

  @Prop({ required: false, type: Boolean, default: true })
    validate!: boolean

  @Prop({ required: false, type: Boolean })
    hideMargin!: boolean

  @Prop({ required: false, type: Array })
    fieldAssets!: Array<FieldAsset>

  @Prop({ required: false, type: Object })
    assetUploadModel!: AssetUploadModel

  @Prop({ required: true, type: Boolean, default: false })
    disableCamera!: boolean

  response: any | null = this.currentValue

  validating = false

  responses = ''

  constructor() {
    super()
  }
}
</script>
