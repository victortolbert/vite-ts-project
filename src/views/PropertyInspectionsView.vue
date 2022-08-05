<script lang="ts">
import _ from 'lodash'
import { forEach, findIndex, filter } from 'lodash'
import { Component } from 'vue-property-decorator'
import { BModal, BButton } from 'bootstrap-vue'
import { PageBase } from '@/types'

import { PropertyInspectionForm } from '@/types'

import { MvcReportRoutes } from '@/routes'

import { PropertyInspectionFormRoof } from '@/types'
import { PropertyInspectionFormElevation } from '@/types'
import { PropertyInspectionFormInterior } from '@/types'
import { PropertyInspectionFormRoofDamagedItem } from '@/types'

import { Outbuilding  } from '@/types'
import { ProjectDetails } from '@/types'

import { ReportType, SectionType } from '@/types'
import { EventBus, GlobalEvents, PifEvents, ToastrHelper } from '@/types'
import { Asset, AssetType, FieldAsset } from '@/types'

// Components
// import MainSectionComponent from '@/components/PropertyInspection/MainSectionComponent.vue'
// import PifaHeaderComponent from '@/components/PropertyInspection/PifaHeaderComponent.vue'
// import ProjectDetailsComponent from '@/components/PropertyInspection/ProjectDetailsComponent.vue'
// import AssetGridMenuComponent from '@/components/PropertyInspection/AssetGridMenuComponent.vue'
// import AssetGridComponent from '@/components/PropertyInspection/AssetGridComponent.vue'


@Component({
  template: '#property-inspections-form-page-index',
  components: {
    // MainSectionComponent,
    // PifaHeaderComponent,
    // ProjectDetailsComponent,
    // AssetGridComponent,
    // AssetGridMenuComponent,
    BModal,
    BButton,
  },
})
export default class PropertyInspectionsIndexComponent extends PageBase<PropertyInspectionForm> {
  preMigration: boolean = false
  unauthorized: boolean = false
  hasProjectNumber: boolean = true
  pasedValidation: boolean = true
  reportExists: boolean = true
  showLoader: boolean = false
  projectDetails: ProjectDetails = new ProjectDetails()
  propertyInspectionFormRoof: PropertyInspectionFormRoof = new PropertyInspectionFormRoof()
  propertyInspectionFormRoofDamagedItem: PropertyInspectionFormRoofDamagedItem = new PropertyInspectionFormRoofDamagedItem()
  propertyInspectionFormElevation: PropertyInspectionFormElevation = new PropertyInspectionFormElevation()
  propertyInspectionFormInterior: PropertyInspectionFormInterior = new PropertyInspectionFormInterior()
  outbuildings: Array<Outbuilding> = new Array<Outbuilding>()
  fieldAssets: Array<FieldAsset> = new Array<FieldAsset>()
  saving: boolean = false
  showForm: boolean = false
  windTotal: number = 0
  showDetails: boolean = false
  showSearchInstructions: boolean = true
  reportType!: ReportType
  propertyInspectionFormId: number = 0
  structureName: string = ''
  location: string = ''

  userId: number = <number>$('#userId').val()
  imgToken: string = <string>$('#imgToken').val()
  imgPath: string = <string>$('#imgPath').val()

  reportModal = {
    data: {} as any,
    promptText: '',
    open: false,
    isAllState: false,
    isHic: false,
    noCloseOnBackdrop: true,
    noCloseOnEsc: true,
    reportType: 0,
    showReportPrompt: false,
    isPreview: false
  }

  constructor() {
    super()
  }

  mounted() {
    console.log('PropertyInspection: ', this)

    EventBus.$on(GlobalEvents.Unauthorized, () => {
      this.unauthorized = true
    })

    EventBus.$on(PifEvents.ReportTypeSet, (isAllstateReport: boolean) => {
      this.reportModal.isAllState = isAllstateReport
      this.reportModal.isHic = this.reportModal.isAllState && this.projectDetails.State == 'Texas' ? true : false
      this.pasedValidation = true

      if (this.preMigration == false) {
        EventBus.$emit(PifEvents.ValidatePif)
      }

      if (this.pasedValidation) {

        this.reportModal.open = true
      }
    })

    EventBus.$on(PifEvents.SendReportData, (model: any, sectionType: number) => {
      switch (sectionType) {
        case SectionType.Elevation:
          this.propertyInspectionFormElevation = model
          break
        case SectionType.Interior:
          this.propertyInspectionFormInterior = model
          break
        case SectionType.Roof:
          this.propertyInspectionFormRoof = model
          break
        case SectionType.RoofDamageItem:
          this.propertyInspectionFormRoofDamagedItem = model
          break
      }
    })

    EventBus.$on(PifEvents.FailedVaidation, () => {
      this.pasedValidation = false
    })

    EventBus.$on(PifEvents.FieldAssetUploaded, async (model: any) => {
      this.fieldAssets.push(new FieldAsset(model.Id, model.FullPath, model.AssetFieldId, model.AssetName, model.Description, model.HasMetaData, model.Order))
    })

    EventBus.$on(PifEvents.SearchPifComplete, (projectDetails: ProjectDetails) => {
      this.showLoader = false
      this.showSearchInstructions = true

      if (projectDetails && projectDetails.ProjectId > 0) {
        this.projectDetails = projectDetails

        let streetAddressTwo = projectDetails.StreetAddress2 ? projectDetails.StreetAddress2 : ''
        this.location = `${projectDetails.StreetAddress1} ${streetAddressTwo} ${projectDetails.City}, ${projectDetails.State}  ${projectDetails.PostalCode}`
        this.hasProjectNumber = false
        this.showSearchInstructions = false
        EventBus.$emit(PifEvents.InitializeFormMenu, projectDetails)
      }
    })

    EventBus.$on(PifEvents.SearchPif, async () => {
      this.projectDetails = new ProjectDetails()
      this.showLoader = true
    })

    EventBus.$on(PifEvents.SavePif, async () => {
      this.saving = true
    })

    EventBus.$on(PifEvents.CloseForm, () => {
      this.showForm = false
    })

    EventBus.$on(PifEvents.AssetsReceived, async (assets: Array<Asset>) => {
      this.reportExists = false
      this.reportModal.showReportPrompt = false
      let fAssets: Array<FieldAsset> = new Array<FieldAsset>()

      forEach(assets, (asset) => {

        if (asset.AssetTypeId === AssetType.Report && !asset.IsDeleted) {
          this.reportExists = true
        }

        if (asset.AssetTypeId === AssetType.FieldAsset && !asset.IsDeleted) {
          // @ts-ignore
          fAssets.push(new FieldAsset(asset.Id, asset.FullPath, asset.AssetFieldId, asset.AssetName, asset.Description, asset.HasMetaData, asset.Order))
        }
      })
      fAssets = _.sortBy(fAssets, 'Order', 'Id')
      this.fieldAssets = fAssets

      this.showForm = true
    })

    EventBus.$on(PifEvents.ShowPifForm, (formName: string, propertyInspectionFormId: number, preMigration: boolean) => {
      this.structureName = formName
      this.preMigration = preMigration
      this.pasedValidation = true
      this.propertyInspectionFormId = propertyInspectionFormId
      EventBus.$emit(PifEvents.CallingAssets)
    })

    EventBus.$on(PifEvents.FieldAssetDeleted, async (asset: Asset) => {
      var idx = findIndex(this.fieldAssets, { Id: Number(asset.Id) })
      if (idx > -1) {
        this.fieldAssets.splice(idx, 1)
      }
    })
    EventBus.$on(PifEvents.FieldAssetReordered, async (FieldAssets: Array<FieldAsset>) => {
      this.fieldAssets = _.sortBy(this.fieldAssets, 'Order')
    })
    this.ready = true
  }

  // Methods
  CreateReport(reportType: number, isPreview: boolean = false) {
    this.reportExists = true
    this.pasedValidation = true
    this.propertyInspectionFormElevation = new PropertyInspectionFormElevation()
    this.propertyInspectionFormInterior = new PropertyInspectionFormInterior()
    this.propertyInspectionFormRoof = new PropertyInspectionFormRoof()
    this.propertyInspectionFormRoofDamagedItem = new PropertyInspectionFormRoofDamagedItem()

    EventBus.$emit(PifEvents.RequestReportData)

    let mvcReportRoutes = new MvcReportRoutes(this.exemplarCoreUrl)

    if (isPreview) {
      let route = mvcReportRoutes.GetPreview(this.propertyInspectionFormId, reportType)
      window.open(
        route, '_blank'
      )
    } else {
      var hasValidFieldAssets = this.HasValidFieldAssets()
      ToastrHelper.DisplayToastWarning('Creating Report.... You will be notified when complete.', 'Create Report')
      this.Insert(mvcReportRoutes.GetCreate(this.userId, this.projectDetails.ProjectNumber, this.propertyInspectionFormId, reportType, hasValidFieldAssets), null, this.ReportCreatedSuccessfullCallback, reportType + `' report saved successfully`)
    }

    this.reportModal.open = false
  }

  // Button Events
  onSaveClicked() {
    EventBus.$emit(PifEvents.SavePif)
  }

  onReportsClicked() {
    this.reportModal.showReportPrompt = false
    EventBus.$emit(PifEvents.SavePif)
    EventBus.$emit(PifEvents.DetermineReportType)
  }

  private HasValidFieldAssets(): boolean {
    var result = (filter(this.fieldAssets, function (o) { return o.HasMetaData == null || o.HasMetaData })).length > 0
    return result
  }

  onReportsContinue() {
    this.reportModal.showReportPrompt = false
    this.CreateReport(this.reportModal.reportType, this.reportModal.isPreview)
  }

  onReportSelected(reportType: number, isPreview: boolean = false) {
    this.reportModal.reportType = reportType
    if (isPreview) {
      this.CreateReport(reportType, true)
    } else {
      if (this.reportExists) {
        this.reportModal.showReportPrompt = true

      } else {
        this.CreateReport(reportType, false)
      }
    }
  }

  onReturnClicked() {
    this.propertyInspectionFormId = 0
    EventBus.$off('validate-pif')
    EventBus.$emit(PifEvents.Destroy)
    EventBus.$off('save-pif')
    EventBus.$emit(PifEvents.CloseForm)
  }

  // Callbacks
  ReportCreatedSuccessfullCallback(model: any) {
    var hasValidFieldAssets = this.HasValidFieldAssets()

    if (hasValidFieldAssets) {
      ToastrHelper.DisplayToastSuccess('Report created successfully. Attempting to create Photo Form...', 'Create Report')
    } else {
      ToastrHelper.DisplayToastSuccess('Report created successfully. No valid Field Assets to create Photo Form found.')
    }

    EventBus.$emit(PifEvents.ReportCreated, model, hasValidFieldAssets)
  }
}
</script>
