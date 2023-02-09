<template>
  <textbox-camera-wrapper-component
    id="LossLocation"
    text-area
    disabled
    :max-characters="100"
    :validate="false"
    :disable-camera="fieldAssets.length >= 100 ? true : false"
    :field-assets="ReturnFieldAssets(assetFieldEnum.Address)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.Address)"
    :current-value="location"
    label="Loss Location:"
  ></textbox-camera-wrapper-component>
  <checkbox-wrapper-component
    id="DirectionNorth"
    :current-value="model.DirectionNorth"
    @onChanged="model.DirectionNorth = $event"
    v-bind:choices="masterDirection"
    label="Directionality North:"
  ></checkbox-wrapper-component>
  <numeric-wrapper-component
    id="OutsideTemp"
    decimal
    :current-value="model.OutsideTemp"
    @onChanged="model.OutsideTemp = $event"
    label="Outside Temperature (F):"
  ></numeric-wrapper-component>
  <boolean-wrapper-component
    id="AllStateInspection"
    :current-value="model.AllStateInspection"
    @onChanged="model.AllStateInspection = $event"
    v-bind:choices="['Yes', 'No']"
    label="Allstate Inspection?"
  ></boolean-wrapper-component>
  <checkbox-wrapper-component
    id="CollaborationSuccessfull"
    hide-margin
    v-show="model.AllStateInspection"
    :validate="model.AllStateInspection"
    :current-value="model.CollaborationSuccessfull"
    @onChanged="model.CollaborationSuccessfull = $event"
    v-bind:choices="masterYesNoNa"
    label="Was the virtual collaboration successful?"
  ></checkbox-wrapper-component>
  <boolean-wrapper-component
    id="AllPhotos"
    v-show="model.AllStateInspection"
    :validate="model.AllStateInspection"
    :current-value="model.AllPhotos"
    @onChanged="model.AllPhotos = $event"
    hide-margin
    v-bind:choices="['Yes', 'No']"
    label="Have All Photos Been Taken?"
  ></boolean-wrapper-component>
  <boolean-wrapper-component
    id="AllPhotosElevation"
    :validate="model.AllStateInspection"
    v-show="model.AllStateInspection"
    :current-value="model.AllPhotosElevation"
    @onChanged="model.AllPhotosElevation = $event"
    v-bind:choices="['Yes', 'No']"
    hide-margin
    label="Damaged Elevation(s)?"
  ></boolean-wrapper-component>
  <boolean-wrapper-component
    id="AllPhotosAssessment"
    :validate="model.AllStateInspection"
    v-show="model.AllStateInspection"
    :current-value="model.AllPhotosAssessment"
    @onChanged="model.AllPhotosAssessment = $event"
    v-bind:choices="['Yes', 'No']"
    hide-margin
    label="Repairability Assessment?"
  ></boolean-wrapper-component>
  <boolean-wrapper-component
    id="AllPhotosAppearance"
    :validate="model.AllStateInspection"
    v-show="model.AllStateInspection"
    :current-value="model.AllPhotosAppearance"
    @onChanged="model.AllPhotosAppearance = $event"
    v-bind:choices="['Yes', 'No']"
    hide-margin
    label="Appearance Test?"
  ></boolean-wrapper-component>
  <boolean-camera-wrapper-component
    id="AllPhotosShingle"
    :disable-camera="fieldAssets.length >= 100"
    :current-value="model.AllPhotosShingle"
    :field-assets="ReturnFieldAssets(assetFieldEnum.ShingleGauge)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.ShingleGauge)"
    @onChanged="model.AllPhotosShingle = $event"
    v-bind:choices="['Yes', 'No']"
    label="Shingle Gauge Photo Taken?"
  ></boolean-camera-wrapper-component>
  <boolean-camera-wrapper-component
    id="AllPhotosPitch"
    :disable-camera="fieldAssets.length >= 100"
    :current-value="model.AllPhotosPitch"
    @onChanged="model.AllPhotosPitch = $event"
    :field-assets="ReturnFieldAssets(assetFieldEnum.PitchGauge)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.PitchGauge)"
    v-bind:choices="['Yes', 'No']"
    label="Pitch Gauge Photo Taken?"
  ></boolean-camera-wrapper-component>
  <boolean-wrapper-component
    id="ElevationInspected"
    :validate="true"
    :current-value="model.ElevationInspected"
    @onChanged="onSectionInspectedChange('Elevation', $event)"
    v-bind:choices="['Yes', 'No']"
    label="Was the Elevation Inspected?"
  ></boolean-wrapper-component>
  <boolean-wrapper-component
    id="InteriorInspected"
    :validate="true"
    :current-value="model.InteriorInspected"
    @onChanged="onSectionInspectedChange('Interior', $event)"
    v-bind:choices="['Yes', 'No']"
    label="Was the Interior Inspected?"
  ></boolean-wrapper-component>
  <boolean-wrapper-component
    id="RoofInspected"
    :validate="true"
    :current-value="model.RoofInspected"
    @onChanged="onSectionInspectedChange('Roof', $event)"
    v-bind:choices="['Yes', 'No']"
    label="Was the Roof Inspected?"
  ></boolean-wrapper-component>
  <elevation-section-component
    v-show="model.ElevationInspected"
    :is-all-state="model.AllStateInspection"
    :company-id="companyId"
    :project-id="projectId"
    :property-inspection-form-id="propertyInspectionFormId"
    :validate="model.ElevationInspected == null ? false : model.ElevationInspected"
    :field-assets="fieldAssets"
    :north="north"
    :south="south"
    :east="east"
    :west="west"
  ></elevation-section-component>
  <interior-section-component
    v-show="model.InteriorInspected"
    :is-all-state="model.AllStateInspection"
    :company-id="companyId"
    :project-id="projectId"
    :property-inspection-form-id="propertyInspectionFormId"
    :validate="model.InteriorInspected == null ? false : model.InteriorInspected"
    :field-assets="fieldAssets"
  ></interior-section-component>
  <roof-section-component
    v-show="model.RoofInspected"
    :is-all-state="model.AllStateInspection"
    :company-id="companyId"
    :project-id="projectId"
    :north="north"
    :south="south"
    :east="east"
    :west="west"
    :validate="model.RoofInspected == null ? false : model.RoofInspected"
    :property-inspection-form-id="propertyInspectionFormId"
    :field-assets="fieldAssets"
  ></roof-section-component>
  <asset-viewer-component></asset-viewer-component>
</template>
