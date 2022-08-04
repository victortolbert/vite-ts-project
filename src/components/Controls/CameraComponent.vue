<script lang="ts">
import { find, replace } from 'lodash'
import { uuid } from 'uuidv4'
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { BModal, BButton } from 'bootstrap-vue'
import KendoUpload from '@progress/kendo-upload-vue-wrapper/dist/es/KendoUpload/index'
import '@progress/kendo-ui'

import { ApiDefaultRoute } from '@/routes'
import AssetUploadComponent from './AssetUploadComponent.vue'
import {
  Asset,
  AssetField,
  AssetType,
  AssetUpload,
  AssetUploadModel,
  EventBus,
  ExemplarMessage,
  FieldAsset,
  PifEvents,
  SectionBase
} from '@/types'
import { UploadHelper } from '@/helpers/UploadHelper'

Vue.component('kendo-upload', KendoUpload)

@Component({
  components: {
    AssetUploadComponent,
    BModal,
    BButton,
  },
})
export default class CameraComponent extends SectionBase<Array<Asset>> {
  @Prop({ required: false, type: String })
    currentValue!: string | null

  @Prop({ required: false, type: String })
    label!: string | null

  @Prop({ required: false, type: Array })
    fieldAssets!: Array<FieldAsset>

  @Prop({ required: false, type: Object })
    assetUploadModel!: AssetUploadModel

  @Prop({ required: false, type: Boolean, default: null })
    dontDisable!: boolean | null

  @Prop({ required: false, type: Boolean, default: null })
    disable!: boolean | null

  openAssetModal: boolean = false

  loading: boolean = false

  showAssets: boolean = false

  showUploader: boolean = false

  assetUploads: Array<AssetUpload> = new Array<AssetUpload>()

  description: string = ''

  exemplarMessage!: ExemplarMessage

  assetRoute!: ApiDefaultRoute

  exemplarMessageRoute!: ApiDefaultRoute

  saveUrl: string = UploadHelper.GetSaveUrl()

  UploadValidationModal = {
    data: [],
    open: false,
    noCloseOnBackdrop: true,
    noCloseOnEsc: true
  }

  imgToken = (<HTMLInputElement>document.getElementById('imgToken')).value
  imgPath = (<HTMLInputElement>document.querySelector('#imgPath')).value
  assetVaultPath = (<HTMLInputElement>document.querySelector('#assetVaultPath')).value
  userId = (<HTMLInputElement>document.querySelector('#userId')).value

  constructor() {
    super()
  }

  mounted() {
    this.assetRoute = new ApiDefaultRoute(this.exemplarApiUrl, 'Assets')

    this.SetAssetName()

    EventBus.$on(PifEvents.CloseAssetModal, async () => {
      this.showUploader = false
    })

    console.log({ imgToken: this.imgToken })
  }

  @Watch('assetUploadModel')
  ChechassetUploadModel() {
    this.SetAssetName()
  }

  urlBuilder(fullPath: string): string {
    return UploadHelper.GetAssetUrl(fullPath, this.imgPath, this.imgToken)
  }

  ShowAssets() {
    EventBus.$emit(PifEvents.OpenAssetViewer, this.fieldAssets, this.exemplarApiUrl, this.imgPath, this.imgToken)
  }

  Disable(): boolean {
    if (this.dontDisable) {
      return false
    }
    if (!this.currentValue || this.currentValue == '' || this.currentValue == 'NA') {
      return true
    }

    return false
  }

  SetAssetName() {
    if (this.currentValue == '' || this.currentValue == 'NA') {
      return
    } else {
      let assetName: string
      switch (this.currentValue) {
        case null:
          assetName = ''
          break
        case 'true':
          assetName = 'Yes'
          break
        case 'false':
          assetName = 'No'
          break
        default:
          assetName = ` - ${this.currentValue}`
      }

      if (this.assetUploadModel.AssetTypeId == AssetType.FieldAsset &&
        (this.assetUploadModel.AssetFieldId == AssetField.Address ||
        this.assetUploadModel.AssetFieldId == AssetField.PitchGauge ||
        this.assetUploadModel.AssetFieldId == AssetField.FrontRisk ||
        this.assetUploadModel.AssetFieldId == AssetField.ElevationEast ||
        this.assetUploadModel.AssetFieldId == AssetField.ElevationNorth ||
        this.assetUploadModel.AssetFieldId == AssetField.ElevationSouth ||
        this.assetUploadModel.AssetFieldId == AssetField.ElevationWest ||
        this.assetUploadModel.AssetFieldId == AssetField.RoofEast ||
        this.assetUploadModel.AssetFieldId == AssetField.RoofSouth ||
        this.assetUploadModel.AssetFieldId == AssetField.RoofNorth ||
        this.assetUploadModel.AssetFieldId == AssetField.RoofWest ||
        this.assetUploadModel.AssetFieldId == AssetField.WindDamageEast ||
        this.assetUploadModel.AssetFieldId == AssetField.WindDamageNorth ||
        this.assetUploadModel.AssetFieldId == AssetField.WindDamageSouth ||
        this.assetUploadModel.AssetFieldId == AssetField.WindDamageWest ||
        this.assetUploadModel.AssetFieldId == AssetField.RoofNorth ||
        this.assetUploadModel.AssetFieldId == AssetField.RoofSouth ||
        this.assetUploadModel.AssetFieldId == AssetField.RoofWest ||
        this.assetUploadModel.AssetFieldId == AssetField.RoofEast ||
        this.assetUploadModel.AssetFieldId == AssetField.AdditionalSummary ||
        this.assetUploadModel.AssetFieldId == AssetField.HancockDisagreesEast ||
        this.assetUploadModel.AssetFieldId == AssetField.HancockDisagreesNorth ||
        this.assetUploadModel.AssetFieldId == AssetField.HancockDisagreesSouth ||
        this.assetUploadModel.AssetFieldId == AssetField.HancockDisagreesWest ||
        this.assetUploadModel.AssetFieldId == AssetField.ShingleGauge )
      ) {
        if (this.assetUploadModel.AssetFieldId == AssetField.HancockDisagreesEast ||
          this.assetUploadModel.AssetFieldId == AssetField.HancockDisagreesNorth ||
          this.assetUploadModel.AssetFieldId == AssetField.HancockDisagreesSouth ||
          this.assetUploadModel.AssetFieldId == AssetField.HancockDisagreesWest ||
          this.assetUploadModel.AssetFieldId == AssetField.WindDamageEast ||
          this.assetUploadModel.AssetFieldId == AssetField.WindDamageNorth ||
          this.assetUploadModel.AssetFieldId == AssetField.WindDamageSouth ||
          this.assetUploadModel.AssetFieldId == AssetField.WindDamageWest ||
          this.assetUploadModel.AssetFieldId == AssetField.RoofNorth ||
          this.assetUploadModel.AssetFieldId == AssetField.RoofSouth ||
          this.assetUploadModel.AssetFieldId == AssetField.RoofWest ||
          this.assetUploadModel.AssetFieldId == AssetField.RoofEast ||
          this.assetUploadModel.AssetFieldId == AssetField.ElevationEast ||
          this.assetUploadModel.AssetFieldId == AssetField.ElevationNorth ||
          this.assetUploadModel.AssetFieldId == AssetField.ElevationSouth ||
          this.assetUploadModel.AssetFieldId == AssetField.ElevationWest) {

          var parsedAssetName = replace(assetName, '- undefined', '')
          this.assetUploadModel.AssetName = String(`${this.assetUploadModel.AssetName}${parsedAssetName}`)
        }
        else {
          this.assetUploadModel.AssetName = AssetField[this.assetUploadModel.AssetFieldId]
        }
      } else {
        if (this.assetUploadModel.AssetName.length > 0) {
          // @ts-ignore
          this.assetUploadModel.AssetName = String(`${this.assetUploadModel.AssetName}${assetName}`)
        }
        else {
          // @ts-ignore
          this.assetUploadModel.AssetName = String(`${AssetField[this.assetUploadModel.AssetFieldId]}${assetName}`)
        }
      }
    }
  }

  DisplayUploader() {
    if (this.dontDisable) {
      this.SetAssetName()
      this.showUploader = true
      return
    }
    if (!this.currentValue || this.currentValue == '' || this.currentValue == 'NA') {
      return
    }

    this.SetAssetName()
    this.showUploader = true
  }

  onUpload(e: any) {
    this.loading = true
    var files = e.files
    var guid: string = uuid().replace(/-/g, '')
    let extension = e.files[0]['name'].split('.').pop()
    let fileName = `${guid}.${extension}`

    if (e.files[0].size > 10485760) {
      this.UploadValidationModal.data.push(`${e.files[0]['name']} (${e.files[0].size})`)

      e.preventDefault()
      return
    }
    this.assetUploads.push(new AssetUpload(e.files[0]['name'], fileName))
    console.log('assetTypeId:' + this.assetUploadModel.AssetTypeId)
    e.data = { assetFullPath: `${this.assetVaultPath}/${this.assetUploadModel.CompanyId}/${this.assetUploadModel.ProjectId}/`, fileName: fileName, companyId: this.assetUploadModel.CompanyId, projectId: this.assetUploadModel.ProjectId, assetTypeId: this.assetUploadModel.AssetTypeId }
  }

  async onSuccess(e: any) {
    if (<boolean>e.response.IsSuccess) {
      var files = e.files
      let uploadedAsset = <AssetUpload>find(this.assetUploads, { AssetName: e.files[0]['name'] })
      let assetName: string = ''
      if (this.assetUploadModel.AssetTypeId == AssetType.FieldAsset) {
        if (this.assetUploadModel.AssetName.length > 0) {
          assetName = this.assetUploadModel.AssetName
        }
        else {
          assetName = this.assetUploadModel.AssetName.replace(/([A-Z])/g, ' $1')
        }
      }
      else {
        assetName = uploadedAsset.AssetName.replace(/\.[^.]*$/, '')
      }
      if (uploadedAsset) {
        let model: Asset = new Asset()
        model.AssetName = this.assetUploadModel.AssetTypeId == AssetType.FieldAsset ? this.assetUploadModel.AssetName.replace(/([A-Z])/g, ' $1') : uploadedAsset.AssetName.replace(/\.[^.]*$/, '')
        model.CreatedBy = this.userId
        model.CreatedOn = Date.now().toString()
        model.Description = this.description
        model.HasMetaData = e.response.HasMetaData
        model.ImageHeightPixels = e.response.ImageHeightPixels
        model.ImageWidthPixels = e.response.ImageWidthPixels
        model.Make = e.response.Make
        model.Model = e.response.Model
        model.OriginalFileTypeExtension = uploadedAsset.FileName.substring(uploadedAsset.FileName.lastIndexOf('.') + 1)
        model.Xresolution = e.response.Xresolution
        model.Yresolution = e.response.Yresolution
        model.SoftwareVersion = e.response.SoftwareVersion
        model.FileName = uploadedAsset.FileName
        model.FullPath = `${this.assetVaultPath}/${this.assetUploadModel.CompanyId}/${this.assetUploadModel.ProjectId}/${uploadedAsset.FileName}`
        model.IsDeleted = false
        model.Order = 0
        model.AssetTypeId = this.assetUploadModel.AssetTypeId
        model.AssetFieldId = this.assetUploadModel.AssetFieldId
        model.ProjectId = this.assetUploadModel.ProjectId
        model.PropertyInspectionFormId = this.assetUploadModel.PropertyInspectionFormId
        await this.Insert(this.assetRoute.Insert(), model, this.InsertSuccessCallback, null)
      }
      this.description = ''
    }
  }

  async onError(e: any) {
    //this.exemplarMessageRoute = new ApiDefaultRoute(this.exemplarApiUrl, 'ExemplarMessages')
    //this.exemplarMessage = new ExemplarMessage()
    //this.exemplarMessage.ClassName = 'CameraComponent'
    //this.exemplarMessage.MethodName = 'OnError'
    //this.exemplarMessage.Operation = 'UploadFile'
    //this.exemplarMessage.Parameters = `ProjectId: ${this.assetUploadModel.ProjectId.toString()} CompanyId ${this.assetUploadModel.CompanyId}`
    //this.exemplarMessage.CreatedOn = new Date()
    //this.exemplarMessage.ExemplarMessageTypeId = 1  //Exceptdaaion message

    //ToastrHelper.DisplayToastError(`Error uploading file ${e.files[0]['name']}. Please try again later.`, 'Upload Error')

    //let errorMessage = `Error uploading file: Status: ${e.XMLHttpRequest.status} ${e.XMLHttpRequest.statusText} `
    //this.exemplarMessage.Message = errorMessage
    //  await this.Insert(this.exemplarMessageRoute.Insert(), this.exemplarMessage, null, null)
  }

  InsertSuccessCallback(model: any) {
    if (this.assetUploadModel.AssetTypeId == AssetType.FieldAsset) {
      EventBus.$emit(PifEvents.FieldAssetUploaded, model)
    } else {
      EventBus.$emit(PifEvents.NonFieldAssetUploaded, model)
    }
  }

  onComplete() {
    this.loading = false
    if (this.UploadValidationModal.data.length > 0) {
      this.UploadValidationModal.open = true
    }
    this.assetUploads = new Array<AssetUpload>()
  }

  onClose() {
    this.UploadValidationModal.data = []
    this.UploadValidationModal.open = false
  }
}
</script>

<template>
  <div style="width: 100%">
    <div class="flexRowSpaceBetweenNoWrap test">
      <div class="labelContainer" v-if="label">
        <span>{{ label }}</span>
      </div>

      <span class="assetCount" v-if="loading">
        <img style="width: 31px; height: 31px" src="~/images/imagewait2.gif" />
      </span>
      <span
        v-if="!loading && fieldAssets && fieldAssets.length > 0"
        @@click="ShowAssets"
        class="assetCount"
      >
        <span>({{fieldAssets.length}})</span>
      </span>
      <div class="icon-container" v-if="dontDisable==true ? true : !disable && (currentValue!= '' && currentValue!='NA' && currentValue!=null) ? true : false">
        <kendo-upload
          ref="upload"
          id="file"
          name="file"
          :async-save-url="saveUrl"
          @@upload="onUpload($event)"
          @@complete="onComplete"
          :show-file-list="false"
          :async-auto-upload="true"
          localization-select=""
          :multiple="true"
          :success="onSuccess"
          :error="onError"
          :validation-allowed-extensions='["jpg","jpeg","png","pdf","eml","msg","xls","xlsx","dox","docx","ppt","pptx","zip","esx"]'
        />
      </div>
      <div v-else>
        <img style="height:44px !important; padding: 4px 15px 0px 6px;" src="~/images/camera-disable.png" />
      </div>
    </div>
    <!-- @Html.Partial("Modals/_UploadValidationModal") -->
    <div v-if="UploadValidationModal.open">
      <b-modal
        ref="UploadValidationModal"
        v-model="UploadValidationModal.open"
        :no-close-on-backdrop='UploadValidationModal.noCloseOnBackdrop'
        :no-close-on-esc='UploadValidationModal.noCloseOnEsc'
        header-class="card-header"
      >
        <div slot="modal-header">
          <span>Upload Validation</span>
        </div>
        <p v-if="UploadValidationModal">
          The following files did not upload due to file size restriction. Please upload files smaller than 10MB.
        </p>
        <div v-for="file in UploadValidationModal.data">
          <div>
            {{file}}
          </div>
        </div>
        <div slot="modal-footer">
          <b-button variant="primary" v-on:click.prevent="onClose">Close</b-button>
        </div>
      </b-modal>
    </div>
  </div>
</template>
