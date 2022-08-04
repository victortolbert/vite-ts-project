<script lang="ts">
import { filter } from 'lodash'
import { Component, Prop } from 'vue-property-decorator'

import { ApiDefaultRoute } from '@/routes'
import { ToastrHelper } from '@/types'
import { SectionBase } from '@/types'
import { MasterDataBuilder } from '@/types'
import { PifEvents, EventBus } from '@/types'

// Components
// import OutbuildingComponent from '@/components/Outbuildings/OutbuildingComponent.vue'
import TextboxCameraWrapperComponent from '@/components/Controls/TextboxCameraWrapperComponent.vue'
import TextboxWrapperComponent from '@/components/Controls/TextboxWrapperComponent.vue'
import BooleanWrapperComponent from '@/components/Controls/BooleanWrapperComponent.vue'
import CheckboxWrapperComponent from '@/components/Controls/CheckboxWrapperComponent.vue'

// View Models
import { AssetUploadModel, FieldAsset, Outbuilding } from '@/types'

// Enums
import { AssetType, SectionType } from '@/types'

@Component({
  template: '#outbuildings-section-template',
  components: {
    // OutbuildingComponent,
    TextboxCameraWrapperComponent,
    TextboxWrapperComponent,
    BooleanWrapperComponent,
    CheckboxWrapperComponent,
  },
})
export default class OutbuildingsSectionComponent extends SectionBase<Outbuilding> {
  @Prop({ type: [String, Boolean] })
  readonly propC: string | boolean | undefined

  @Prop({ required: true, type: Number })
  propertyInspectionFormId!: number

  @Prop({ required: true, type: Array })
  fieldAssets!: Array<FieldAsset>

  @Prop({ required: true, type: Number })
  companyId!: number

  @Prop({ required: true, type: Number })
  projectId!: number

  @Prop({ required: true, type: Boolean, default: true })
  validate!: boolean

  @Prop({ required: true, type: Boolean })
  outbuildingsPresent!: boolean | null

  model: Array<Outbuilding> = new Array<Outbuilding>()

  newOutbuilding: Outbuilding = new Outbuilding

  route!: ApiDefaultRoute

  masterOutbuildingTypes = MasterDataBuilder.ReturnOutbuildingTypes()

  counter = 0


  // // See Hooks section for details about `data` hook inside class.
  // data() {
  //   return {
  //     // `hello` will be reactive as it is declared via `data` hook.
  //     hello: undefined
  //   }
  // }

  constructor() {
    super()
  }

  mounted() {
    console.log('%c OutbuildingsSectionComponent Mounted.', 'background: #222 color: #bada55')

    this.route = new ApiDefaultRoute(this.exemplarApiUrl, 'Outbuildings')

    this.className = 'Property Inspection Form Outbuilding'

    this.LoadSection()

    EventBus.$on(PifEvents.LoadOutbuildings, async () => {
      console.log('%c PifEvents.LoadOutbuildings heard.', 'background: #222 color: #bada55')

      this.LoadSection()
    })

    EventBus.$on(PifEvents.RemoveOutbuildings, async () => {
      this.model = new Array<Outbuilding>()
      this.ready = false
    })

    EventBus.$on(PifEvents.CreateOutbuildings, async () => {
      const newOutBuilding = new Outbuilding()

      this.model = new Array<Outbuilding>()

      this.model.push(newOutBuilding)

      console.log('PifEvents.CreateOutbuildings heard.', this.model)

      for (const outbuilding of this.model) {
        console.log('PifEvents.CreateOutbuildings, outbuilding: ', outbuilding)

        outbuilding.PropertyInspectionFormId = this.propertyInspectionFormId
        outbuilding.Id = 0
      }

      this.ready = true
    })

    // EventBus.$on(PifEvents.RemoveRoof, async () => {
    //   this.model = new Array<Outbuilding>()
    //   this.ready = false
    // })

    EventBus.$on(PifEvents.SavePif, async () => {
      console.log('PifEvents.SavePif: ', this.model)
      console.log({
        model: this.model,
        // newModel: this.$at
      })
      for (const outbuilding of this.model) {
        console.log('outbuilding: ', outbuilding)

        if (outbuilding.PropertyInspectionFormId != null) {
          if (outbuilding.Id > 0) {
            if (this.hasChanges(outbuilding)) {
              console.log('PifEvents.SavePif (Update): ', this.route)

              await this.Update(this.route.Update(outbuilding.Id, this.currentUserId), outbuilding, null, null, 'Outbuilding section record updated.')
            }
          } else {
            console.log('PifEvents.SavePif (Insert): ', this.route)

            await this.Insert(this.route.Insert(), outbuilding, this.InsertSuccessCallback, this.InsertErrorCallback, 'Outbuilding section record created.')
          }
        }
      }
    })

    EventBus.$on(PifEvents.RequestReportData, async () => {
      EventBus.$emit(PifEvents.SendReportData, this.model, SectionType.RoofDamageItem)
    })
  }

  // MasterAssetField
  //
  // | Id  | AssetFieldName       |
  // | --- | -------------------- |
  // | 231 | OutbuildingInterior  |
  // | 232 | OutbuildingElevation  |
  // | 233 | OutbuildingRoof      |

  // These 3 asset field types (Id, AssetFieldName) represent the photo types for outbuilding interior, elevation, and roof
  // Concatenating to the Id of the building type


  ReturnAssetModel(AssetFieldId: number, assetName: string = '', Description: string): AssetUploadModel {
    let assetUploadModel = new AssetUploadModel()
    assetUploadModel.AssetFieldId = AssetFieldId
    assetUploadModel.AssetTypeId = AssetType.FieldAsset
    assetUploadModel.CompanyId = this.companyId
    assetUploadModel.ProjectId = this.projectId
    assetUploadModel.AssetName = assetName
    assetUploadModel.PropertyInspectionFormId = this.propertyInspectionFormId
    if (Description) {
      assetUploadModel.Description = Description
    }

    console.log('ReturnAssetModel: ', { assetUploadModel })
    return assetUploadModel
  }

  ReturnFieldAssets(AssetFieldId: number, Description: string = ''): Array<FieldAsset> {
    let fieldAssets = <Array<FieldAsset>>filter(this.fieldAssets, { AssetFieldId: AssetFieldId })

    if (!fieldAssets) {
      return new Array<FieldAsset>()
    } else {
      if (Description) {
        const descriptionResults = <Array<FieldAsset>>filter(fieldAssets, { Description: Description })

        console.log('ReturnFieldAssets (Description Results): ', { descriptionResults, })
        return descriptionResults
      }
      return fieldAssets
    }
  }

  async LoadSection() {
    await this.GetModel(this.route.Get(this.propertyInspectionFormId), this.GetModelSuccessCallback)
  }

  InsertErrorCallback(data: any) {
    ToastrHelper.DisplayToastError(data, this.className)
  }

  InsertSuccessCallback(model: Array<Outbuilding>) {
    console.log('InsertSuccessCallback: ', model)

    for (const outbuilding of model) {
      console.log('InsertSuccessCallback:', outbuilding)
    }

    // this.model = model

    // this.model.Id = model.Id
    // this.model.CreatedOn = model.CreatedOn
    // this.model.LastModifiedOn = model.LastModifiedOn
  }

  ValidateQty(currentValue: number, parentProperty: string, childProperty: string) {
    //@ts-ignore
    this.model[childProperty] = null

    //@ts-ignore
    this.model[parentProperty] = currentValue
  }

  ValidateQtyDamaged(currentValue: number, parentProperty: string, childProperty: string) {
    //@ts-ignore
    this.model[childProperty] = currentValue

    this.$nextTick(function () {
      //@ts-ignore
      if (currentValue > this.model[parentProperty]) {

        //@ts-ignore
        this.model[childProperty] = null
      } else {
        //@ts-ignore
        this.model[childProperty] = currentValue
      }
    })
  }

  GetModelSuccessCallback(model: Array<Outbuilding>) {
    console.log('GetModelSuccessCallback: ', model)
    this.model = model

    // if (this.model == null && this.error == false) {
    //     this.model = new Outbuilding()
    //     this.model.PropertyInspectionFormId = this.propertyInspectionFormId
    //     this.model.Id = 0
    // }
    // this.ready = true
  }

  addNewOutbuilding() {
    let newOutBuilding = new Outbuilding()
    newOutBuilding.PropertyInspectionFormId = this.propertyInspectionFormId
    this.model.push(newOutBuilding)
  }
}
</script>
