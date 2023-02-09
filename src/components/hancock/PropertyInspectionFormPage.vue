<template id="property-inspections-form-page-index">
  <pifa-header-component :exemplar-api-url="exemplarApiUrl" />
  <project-details-component :model="projectDetails" v-if="projectDetails" />
  <asset-grid-menu-component :img-path="imgPath" :img-token="imgToken" />
  <asset-grid-component :img-path="imgPath" :img-token="imgToken" />
  <button type="button" v-on:click="onSaveClicked" class="btn btn-light">
    <i class="fas fa-save"></i> Save
  </button>
  <button type="button" v-on:click="onReportsClicked" class="btn btn-light">
    <i class="fas fa-file-alt"></i> Reports
  </button>
  <button type="button" v-on:click="onReturnClicked" class="btn btn-light">
    <i class="fas fa-layer-group"></i> PIFA
  </button>
  <main-section-component
    v-if="propertyInspectionFormId > 0"
    :company-id="projectDetails.CompanyId"
    :project-id="projectDetails.ProjectId"
    :location="location"
    :property-inspection-form-id="propertyInspectionFormId"
    :field-assets="fieldAssets"
    :api-client="exemplarApiUrl"
  ></main-section-component>
</template>
