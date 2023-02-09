<template>
  <div v-if="ready">
    <directional-camera-wrapper-component
      v-show="fieldAssets.length < 100"
      label="Roof Overview Photos:"
      hide-margin
      :validate="false"
      :disable-camera="fieldAssets.length >= 100"
      :north-field-assets="ReturnFieldAssets(assetFieldEnum.RoofNorth)"
      :north-asset-upload-model="ReturnAssetModel(assetFieldEnum.RoofNorth, 'Roof Overviews ' + north)"
      :south-field-assets="ReturnFieldAssets(assetFieldEnum.RoofSouth)"
      :south-asset-upload-model="ReturnAssetModel(assetFieldEnum.RoofSouth, 'Roof Overviews ' + south)"
      :east-field-assets="ReturnFieldAssets(assetFieldEnum.RoofEast)"
      :east-asset-upload-model="ReturnAssetModel(assetFieldEnum.RoofEast, 'Roof Overviews ' + east)"
      :west-field-assets="ReturnFieldAssets(assetFieldEnum.RoofWest)"
      :west-asset-upload-model="ReturnAssetModel(assetFieldEnum.RoofWest, 'Roof Overviews ' + west)"
      :slot-a-label="north"
      :slot-b-label="east"
      :slot-c-label="south"
      :slot-d-label="west"
    ></directional-camera-wrapper-component>

    <checkbox-wrapper-component
      id="RoofType"
      :max-characters="50"
      :validate="validate"
      :current-value="model.RoofType"
      @onChanged="model.RoofType = $event"
      v-bind:choices="masterRoofType"
      label="Roof Type:"
    ></checkbox-wrapper-component>

    <textbox-wrapper-component
      id="RoofTypeOther"
      :max-characters="100"
      hide-margin
      v-show="model.RoofType == 'Other'"
      :validate="model.RoofType == 'Other'"
      :current-value="model.RoofTypeOther"
      @onChanged="model.RoofTypeOther = $event"
      label="Other Roof Type:"
    ></textbox-wrapper-component>

    <checkbox-wrapper-component
      id="RoofAgeYears"
      :validate="validate"
      :current-value="model.RoofAgeYears"
      @onChanged="model.RoofAgeYears = $event"
      v-bind:choices="masterRoofAge"
      label="Roof Age (Years):"
    ></checkbox-wrapper-component>

    <checkbox-camera-wrapper-component
      id="RoofMaterial"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.RoofMaterial)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.RoofMaterial)"
      :validate="validate"
      :current-value="model.RoofMaterial"
      @onChanged="model.RoofMaterial = $event"
      v-bind:choices="MasterRoofMaterial()"
      label="Roof Material:"
    ></checkbox-camera-wrapper-component>

    <textbox-wrapper-component
      id="RoofMaterialOther"
      :max-characters="100"
      hide-margin
      v-show="model.RoofMaterial == 'Other'"
      :validate="model.RoofMaterial == 'Other'"
      :current-value="model.RoofMaterialOther"
      @onChanged="model.RoofMaterialOther = $event"
      label="Other Roof Material:"
    ></textbox-wrapper-component>

    <checkbox-camera-wrapper-component
      id="ShingleType"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.ShingleType)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.ShingleType)"
      v-show="isAllState"
      :validate="isAllState"
      :current-value="model.ShingleType"
      @onChanged="model.ShingleType = $event"
      v-bind:choices="masterShingleType"
      label="Shingle Type:"
    ></checkbox-camera-wrapper-component>

    <boolean-camera-wrapper-component
      id="IceWaterShield"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.IceWaterShield)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.IceWaterShield)"
      :validate="validate"
      :current-value="model.IceWaterShield"
      @onChanged="model.IceWaterShield = $event"
      v-bind:choices="['Yes', 'No']"
      label="Ice & Water Shield?"
    ></boolean-camera-wrapper-component>

    <numeric-wrapper-component
      label="Ice & Water Shield Length (LF):"
      decimal
      medium-label
      hide-margin
      v-show="model.IceWaterShield"
      :validate="model.IceWaterShield"
      :current-value="model.IceWaterShieldLf"
      @onChanged="model.IceWaterShieldLf = $event"
    ></numeric-wrapper-component>

    <numeric-camera-wrapper-component
      label="Soffit Depth (Inches):"
      decimal
      medium-label
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.SoffitDepthIn)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.SoffitDepthIn)"
      :validate="validate"
      :current-value="model.SoffitDepthLf"
      @onChanged="model.SoffitDepthLf = $event"
    ></numeric-camera-wrapper-component>

    <checkbox-wrapper-component
      id="Stories"
      :validate="validate"
      :current-value="model.Stories == '0' ? 'Other' : String(model.Stories)"
      @onChanged="model.Stories = $event == 'Other' ? 0 : $event"
      v-bind:choices="masterStories"
      label="Number of Stories:"
    ></checkbox-wrapper-component>

    <numeric-wrapper-component
      id="StoriesOther"
      hide-margin
      text-area
      v-show="String(model.Stories).length > 0 && model.Stories == 0"
      :validate="String(model.Stories).length > 0 && model.Stories == 0"
      :current-value="model.StoriesOther"
      @onChanged="model.StoriesOther = Number($event)"
      label="Stories:"
    ></numeric-wrapper-component>

    <checkbox-camera-wrapper-component
      id="PitchNorth"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.PitchNorth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.PitchNorth, 'Predominant Pitch ' + north)"
      :validate="validate"
      :current-value="model.PitchNorth"
      @onChanged="model.PitchNorth = $event"
      v-bind:choices="masterRoofPitch"
      :label="'Predominant Pitch (' + north + ')?'"
    ></checkbox-camera-wrapper-component>

    <textbox-wrapper-component
      id="PitchNorthOther"
      hide-margin
      medium-label
      :max-characters="10"
      v-show="model.PitchNorth == 'Other'"
      :validate="model.PitchNorth == 'Other'"
      :current-value="model.PitchNorthOther"
      @onChanged="model.PitchNorthOther = $event"
      label="Pitch North Other:"
    ></textbox-wrapper-component>

    <checkbox-camera-wrapper-component
      id="PitchEast"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.PitchEast)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.PitchEast, 'Predominant Pitch ' + east)"
      :validate="validate"
      :current-value="model.PitchEast"
      @onChanged="model.PitchEast = $event"
      v-bind:choices="masterRoofPitch"
      :label="'Predominant Pitch (' + east + ')?'"
    ></checkbox-camera-wrapper-component>

    <textbox-wrapper-component
      id="PitchEastOther"
      hide-margin
      medium-label
      :max-characters="10"
      v-show="model.PitchEast == 'Other'"
      :validate="model.PitchEast == 'Other'"
      :current-value="model.PitchEastOther"
      @onChanged="model.PitchEastOther = $event"
      label="Pitch East Other:"
    ></textbox-wrapper-component>

    <checkbox-camera-wrapper-component
      id="PitchSouth"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.PitchSouth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.PitchSouth, 'Predominant Pitch ' + south)"
      :validate="validate"
      :current-value="model.PitchSouth"
      @onChanged="model.PitchSouth = $event"
      v-bind:choices="masterRoofPitch"
      :label="'Predominant Pitch (' + south + ')?'"
    ></checkbox-camera-wrapper-component>

    <textbox-wrapper-component
      id="PitchSouthOther"
      hide-margin
      medium-label
      :max-characters="10"
      v-show="model.PitchSouth == 'Other'"
      :validate="model.PitchSouth == 'Other'"
      :current-value="model.PitchSouthOther"
      @onChanged="model.PitchSouthOther = $event"
      label="Pitch South Other:"
    ></textbox-wrapper-component>

    <checkbox-camera-wrapper-component
      id="PitchWest"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.PitchWest)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.PitchWest, 'Predominant Pitch ' + west)"
      :validate="validate"
      :current-value="model.PitchWest"
      @onChanged="model.PitchWest = $event"
      v-bind:choices="masterRoofPitch"
      :label="'Predominant Pitch (' + west + ')?'"
    ></checkbox-camera-wrapper-component>

    <textbox-wrapper-component
      id="PitchWestOther"
      hide-margin
      medium-label
      :max-characters="10"
      v-show="model.PitchWest == 'Other'"
      :validate="model.PitchWest == 'Other'"
      :current-value="model.PitchWestOther"
      @onChanged="model.PitchWestOther = $event"
      label="Pitch West Other:"
    ></textbox-wrapper-component>

    <boolean-camera-wrapper-component
      id="Felt"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.Felt)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.Felt)"
      :validate="validate"
      :current-value="model.Felt"
      @onChanged="model.Felt = $event"
      v-bind:choices="['Yes', 'No']"
      label="Felt?"
    ></boolean-camera-wrapper-component>

    <checkbox-wrapper-component
      id="FeltDescription"
      hide-margin
      v-show="model.Felt"
      :validate="model.Felt"
      :current-value="model.FeltDescription"
      @onChanged="model.FeltDescription = $event"
      v-bind:choices="masterFeltMaterial"
      label="Felt Type:"
    ></checkbox-wrapper-component>

    <checkbox-wrapper-component
      id="LayerType"
      :validate="validate"
      :current-value="model.LayerType"
      @onChanged="model.LayerType = $event"
      v-bind:choices="masterLayerType"
      label="Layer Type:"
    ></checkbox-wrapper-component>

    <textbox-wrapper-component
      id="LayerTypeOther"
      :max-characters="100"
      hide-margin
      v-show="model.LayerType == 'Other'"
      :validate="model.LayerType == 'Other'"
      :current-value="model.LayerTypeOther"
      @onChanged="model.LayerTypeOther = $event"
      label="Other Layer Type:"
    ></textbox-wrapper-component>

    <checkbox-camera-wrapper-component
      id="LayerQty"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.LayerQty)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.LayerQty)"
      :validate="validate"
      :current-value="String(model.LayerQty)"
      @onChanged="model.LayerQty = $event"
      v-bind:choices="masterLayerNumber"
      label="Number of Layers:"
    ></checkbox-camera-wrapper-component>

    <checkbox-camera-wrapper-component
      id="ValleyType"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.ValleyType)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.ValleyType)"
      :validate="validate"
      :current-value="model.ValleyType"
      @onChanged="model.ValleyType = $event"
      v-bind:choices="masterValleyType"
      label="Valley Type:"
    ></checkbox-camera-wrapper-component>

    <boolean-camera-wrapper-component
      id="RakeStarter"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.RakeStarter)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.RakeStarter)"
      :validate="validate"
      :current-value="model.RakeStarter"
      @onChanged="model.RakeStarter = $event"
      v-bind:choices="['Yes', 'No']"
      label="Rake Starter?"
    ></boolean-camera-wrapper-component>

    <boolean-camera-wrapper-component
      id="EaveStarter"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.EaveStarter)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.EaveStarter)"
      :validate="validate"
      :current-value="model.EaveStarter"
      @onChanged="model.EaveStarter = $event"
      v-bind:choices="['Yes', 'No']"
      label="Eave Starter?"
    ></boolean-camera-wrapper-component>

    <boolean-wrapper-component
      id="GutterPresent"
      :validate="validate"
      :current-value="model.GutterPresent"
      @onChanged="model.GutterPresent = $event"
      v-bind:choices="['Yes', 'No']"
      label="Gutters Present?"
    ></boolean-wrapper-component>

    <boolean-wrapper-component
      id="GutterPainted"
      hide-margin
      :validate="model.GutterPresent"
      v-show="model.GutterPresent"
      :current-value="model.GutterPainted"
      @onChanged="model.GutterPainted = $event"
      v-bind:choices="['Yes', 'No']"
      label="Gutters Painted?"
    ></boolean-wrapper-component>

    <checkbox-wrapper-component
      id="GutterMaterial"
      hide-margin
      :validate="model.GutterPresent"
      v-show="model.GutterPresent"
      :current-value="model.GutterMaterial"
      @onChanged="model.GutterMaterial = $event"
      v-bind:choices="masterGutterMaterial"
      label="Gutter Material:"
    ></checkbox-wrapper-component>

    <textbox-wrapper-component
      id="GutterMaterialOther"
      hide-margin
      :max-characters="100"
      v-show="model.GutterPresent && model.GutterMaterial == 'Other'"
      :validate="model.GutterPresent && model.GutterMaterial == 'Other'"
      :current-value="model.GutterMaterialOther"
      @onChanged="model.GutterMaterialOther = $event"
      label="Gutter Material Other:"
    ></textbox-wrapper-component>

    <checkbox-camera-wrapper-component
      id="GutterSize"
      hide-margin
      :validate="model.GutterPresent"
      v-show="model.GutterPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.GutterSize)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.GutterSize)"
      :current-value="model.GutterSize"
      @onChanged="model.GutterSize = $event"
      v-bind:choices="masterGutterSize"
      label="Gutter Size:"
    ></checkbox-camera-wrapper-component>

    <textbox-wrapper-component
      id="GutterSizeOther"
      :max-characters="50"
      hide-margin
      v-show="model.GutterPresent && model.GutterSize == 'Other'"
      :validate="model.GutterSize == 'Other'"
      :current-value="model.GutterSizeOther"
      @onChanged="model.GutterSizeOther = $event"
      label="Gutter Size Other:"
    ></textbox-wrapper-component>

    <checkbox-camera-wrapper-component
      id="GuttersDamage"
      hide-margin
      v-show="model.GutterPresent"
      :validate="model.GutterPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.GutterDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.GutterDamaged)"
      :current-value="model.GuttersDamage"
      @onChanged="model.GuttersDamage = $event"
      v-bind:choices="masterYesNo"
      label="Gutters Damaged?"
    ></checkbox-camera-wrapper-component>

    <textbox-wrapper-component
      id="GutterDescription"
      :max-characters="8000"
      text-area
      hide-margin
      :validate="false"
      v-show="model.GutterPresent"
      :current-value="model.GutterDescription"
      @onChanged="model.GutterDescription = $event"
      label="Gutter Description:"
    ></textbox-wrapper-component>

    <boolean-camera-wrapper-component
      id="GutterNorthDamaged"
      hide-margin
      :validate="model.GuttersDamage == 'Yes' && model.GutterPresent"
      v-show="model.GuttersDamage == 'Yes' && model.GutterPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.GutterNorthDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.GutterNorthDamaged, 'Gutter Damage  ' + north)"
      :current-value="model.GutterNorthDamaged"
      @onChanged="model.GutterNorthDamaged = $event"
      v-bind:choices="['Yes', 'No']"
      label="Gutter North Damage?"
    ></boolean-camera-wrapper-component>

    <numeric-wrapper-component
      id="GutterNorthLf"
      decimal
      medium-label
      hide-margin
      v-show="model.GutterNorthDamaged"
      :validate="model.GutterNorthDamaged"
      :current-value="model.GutterNorthLf"
      @onChanged="model.GutterNorthLf = $event"
      label="Gutters North Damage LF:"
    ></numeric-wrapper-component>

    <boolean-camera-wrapper-component
      id="GutterSouthDamaged"
      hide-margin
      :validate="model.GuttersDamage == 'Yes' && model.GutterPresent"
      v-show="model.GuttersDamage == 'Yes' && model.GutterPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.GutterSouthDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.GutterSouthDamaged, 'Gutter Damage  ' + south)"
      :current-value="model.GutterSouthDamaged"
      @onChanged="model.GutterSouthDamaged = $event"
      v-bind:choices="['Yes', 'No']"
      label="Gutter South Damage?"
    ></boolean-camera-wrapper-component>

    <numeric-wrapper-component
      id="GutterSouthLf"
      decimal
      medium-label
      hide-margin
      v-show="model.GutterSouthDamaged"
      :validate="model.GutterSouthDamaged"
      :current-value="model.GutterSouthLf"
      @onChanged="model.GutterSouthLf = $event"
      label="Gutters South Damage LF:"
    ></numeric-wrapper-component>

    <boolean-camera-wrapper-component
      id="GutterEastDamaged"
      hide-margin
      :validate="model.GuttersDamage == 'Yes' && model.GutterPresent"
      v-show="model.GuttersDamage == 'Yes' && model.GutterPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.GutterEastDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.GutterEastDamaged, 'Gutter Damage  ' + east)"
      :current-value="model.GutterEastDamaged"
      @onChanged="model.GutterEastDamaged = $event"
      v-bind:choices="['Yes', 'No']"
      label="Gutter East Damage?"
    ></boolean-camera-wrapper-component>

    <numeric-wrapper-component
      id="GutterEastLf"
      decimal
      medium-label
      hide-margin
      v-show="model.GutterEastDamaged"
      :validate="model.GutterEastDamaged"
      :current-value="model.GutterEastLf"
      @onChanged="model.GutterEastLf = $event"
      label="Gutters East Damage LF:"
    ></numeric-wrapper-component>

    <boolean-camera-wrapper-component
      id="GutterWestDamaged"
      hide-margin
      :validate="model.GuttersDamage == 'Yes' && model.GutterPresent"
      v-show="model.GuttersDamage == 'Yes' && model.GutterPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.GutterWestDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.GutterWestDamaged, 'Gutter Damage  ' + west)"
      :current-value="model.GutterWestDamaged"
      @onChanged="model.GutterWestDamaged = $event"
      v-bind:choices="['Yes', 'No']"
      label="Gutter West Damage?"
    ></boolean-camera-wrapper-component>

    <numeric-wrapper-component
      id="GutterWestLf"
      decimal
      medium-label
      hide-margin
      v-show="model.GutterWestDamaged"
      :validate="model.GutterWestDamaged"
      :current-value="model.GutterWestLf"
      @onChanged="model.GutterWestLf = $event"
      label="Gutters West Damage LF:"
    ></numeric-wrapper-component>

    <checkbox-wrapper-component
      id="PriorRepairs"
      :validate="validate"
      :current-value="model.PriorRepairs"
      @onChanged="model.PriorRepairs = $event"
      v-bind:choices="masterYesNoNa"
      label="Prior Repairs ?"
    ></checkbox-wrapper-component>

    <checkbox-camera-wrapper-component
      id="PriorRepairsNorth"
      hide-margin
      v-show="model.PriorRepairs == 'Yes'"
      :validate="model.PriorRepairs == 'Yes'"
      :current-value="model.PriorRepairsNorth"
      @onChanged="model.PriorRepairsNorth = $event"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.PriorRepairsNorth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.PriorRepairsNorth, 'Prior Repairs ' + north)"
      v-bind:choices="masterYesNoNa"
      :label="'Prior Repairs (' + north + ')?'"
    ></checkbox-camera-wrapper-component>

    <checkbox-camera-wrapper-component
      id="PriorRepairsSouth"
      hide-margin
      v-show="model.PriorRepairs == 'Yes'"
      :validate="model.PriorRepairs == 'Yes'"
      :current-value="model.PriorRepairsSouth"
      @onChanged="model.PriorRepairsSouth = $event"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.PriorRepairsSouth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.PriorRepairsSouth, 'Prior Repairs ' + south)"
      v-bind:choices="masterYesNoNa"
      :label="'Prior Repairs (' + south + ')?'"
    ></checkbox-camera-wrapper-component>

    <checkbox-camera-wrapper-component
      id="PriorRepairsEast"
      hide-margin
      v-show="model.PriorRepairs == 'Yes'"
      :validate="model.PriorRepairs == 'Yes'"
      :current-value="model.PriorRepairsEast"
      @onChanged="model.PriorRepairsEast = $event"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.PriorRepairsEast)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.PriorRepairsEast, 'Prior Repairs ' + east)"
      v-bind:choices="masterYesNoNa"
      :label="'Prior Repairs (' + east + ')?'"
    ></checkbox-camera-wrapper-component>

    <checkbox-camera-wrapper-component
      id="PriorRepairsWest"
      hide-margin
      v-show="model.PriorRepairs == 'Yes'"
      :validate="model.PriorRepairs == 'Yes'"
      :current-value="model.PriorRepairsWest"
      @onChanged="model.PriorRepairsWest = $event"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.PriorRepairsWest)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.PriorRepairsWest, 'Prior Repairs ' + west)"
      v-bind:choices="masterYesNoNa"
      :label="'Prior Repairs (' + west + ')?'"
    ></checkbox-camera-wrapper-component>

    <boolean-wrapper-component
      id=" Damage"
      :validate="validate"
      :current-value="model.StormDamage"
      @onChanged="model.StormDamage = $event"
      v-bind:choices="['Yes', 'No']"
      label="Storm Damage Present?"
    ></boolean-wrapper-component>

    <checkbox-wrapper-component
      id="StormDirection"
      hide-margin
      v-show="model.StormDamage"
      :validate="model.StormDamage"
      :current-value="model.StormDirection"
      @onChanged="model.StormDirection = $event"
      v-bind:choices="['North', 'South', 'West', 'East', 'NA']"
      label="Storm Direction:"
    ></checkbox-wrapper-component>

    <checkbox-wrapper-component
      id="StormDamageType"
      allow-multiple
      hide-margin
      medium-label
      v-show="model.StormDamage"
      :validate="model.StormDamage"
      :current-value="model.StormDamageType"
      @onChanged="model.StormDamageType = $event"
      v-bind:choices="masterStormDamage"
      label="What type of damage is present:"
    ></checkbox-wrapper-component>

    <textbox-wrapper-component
      id="StormDamageTypeOther"
      :max-characters="50"
      hide-margin
      v-show="model.StormDamageType.includes('Other')"
      :validate="model.StormDamageType.includes('Other')"
      :current-value="model.StormDamageTypeOther"
      @onChanged="model.StormDamageTypeOther = $event"
      label="Other Storm Damage Type:"
    ></textbox-wrapper-component>

    <numeric-camera-wrapper-component
      id="OtherDamageNorth"
      hide-margin
      decimal
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.OtherDamageNorth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.OtherDamageNorth, 'Other Damage' + north)"
      :validate="model.StormDamageType.includes('Other')"
      v-show="model.StormDamageType.includes('Other')"
      :current-value="model.OtherDamageNorth"
      @onChanged="model.OtherDamageNorth = $event"
      :label="'Other Damage ' + north + ':'"
    ></numeric-camera-wrapper-component>

    <numeric-camera-wrapper-component
      id="OtherDamageSouth"
      hide-margin
      decimal
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.OtherDamageSouth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.OtherDamageSouth, 'Other Damage' + south)"
      :validate="model.StormDamageType.includes('Other')"
      v-show="model.StormDamageType.includes('Other')"
      :current-value="model.OtherDamageSouth"
      @onChanged="model.OtherDamageSouth = $event"
      :label="'Other Damage ' + south + ':'"
    ></numeric-camera-wrapper-component>

    <numeric-camera-wrapper-component
      id="OtherDamageEast"
      hide-margin
      decimal
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.OtherDamageEast)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.OtherDamageEast, 'Other Damage' + east)"
      :validate="model.StormDamageType.includes('Other')"
      v-show="model.StormDamageType.includes('Other')"
      :current-value="model.OtherDamageEast"
      @onChanged="model.OtherDamageEast = $event"
      :label="'Other Damage ' + east + ':'"
    ></numeric-camera-wrapper-component>

    <numeric-camera-wrapper-component
      id="OtherDamageWest"
      hide-margin
      decimal
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.OtherDamageWest)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.OtherDamageWest, 'Other Damage' + west)"
      :validate="model.StormDamageType.includes('Other')"
      v-show="model.StormDamageType.includes('Other')"
      :current-value="model.OtherDamageWest"
      @onChanged="model.OtherDamageWest = $event"
      :label="'Other Damage ' + west + ':'"
    ></numeric-camera-wrapper-component>

    <checkbox-camera-wrapper-component
      id="HailSize"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.HailSize)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.HailSize)"
      :validate="validate"
      :current-value="model.HailSize"
      @onChanged="model.HailSize = $event"
      v-bind:choices="masterHailSize"
      label="Hail Size:"
    ></checkbox-camera-wrapper-component>

    <directional-numeric-wrapper-component
      label="Hail Test Size (SF):"
      :validate="validate"
      decimal
      hide-margin
      :disable-camera="fieldAssets.length >= 100"
      :slot-a-value="model.HailTestSizeNorth"
      :slot-b-value="model.HailTestSizeEast"
      :slot-c-value="model.HailTestSizeWest"
      :slot-d-value="model.HailTestSizeSouth"
      :slot-a-label="north"
      :slot-b-label="east"
      :slot-c-label="west"
      :slot-d-label="south"
      @onslotachanged="model.HailTestSizeNorth = $event"
      @onSlotBChanged="model.HailTestSizeEast = $event"
      @onSlotCChanged="model.HailTestSizeWest = $event"
      @onSlotDChanged="model.HailTestSizeSouth = $event"
    ></directional-numeric-wrapper-component>

    <numeric-camera-wrapper-component
      id="HailDamageNorthSf"
      hide-margin
      decimal
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.TestSquareNorth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.TestSquareNorth, 'Test Square ' + north)"
      :validate="validate"
      :current-value="model.HailDamageNorthSf"
      @onChanged="model.HailDamageNorthSf = $event"
      :label="'Test Square ' + north + ':'"
    ></numeric-camera-wrapper-component>
    <numeric-camera-wrapper-component
      id="HailDamageSouthSf"
      hide-margin
      decimal
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.TestSquareSouth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.TestSquareSouth, 'Test Square ' + south)"
      :validate="validate"
      :current-value="model.HailDamageSouthSf"
      @onChanged="model.HailDamageSouthSf = $event"
      :label="'Test Square ' + south + ':'"
    ></numeric-camera-wrapper-component>
    <numeric-camera-wrapper-component
      id="HailDamageEastSf"
      hide-margin
      decimal
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.TestSquareEast)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.TestSquareEast, 'Test Square ' + east)"
      :validate="validate"
      :current-value="model.HailDamageEastSf"
      @onChanged="model.HailDamageEastSf = $event"
      :label="'Test Square ' + east + ':'"
    ></numeric-camera-wrapper-component>
    <numeric-camera-wrapper-component
      id="HailDamageWestSf"
      hide-margin
      decimal
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.TestSquareWest)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.TestSquareWest, 'Test Square ' + west)"
      :validate="validate"
      :current-value="model.HailDamageWestSf"
      @onChanged="model.HailDamageWestSf = $event"
      :label="'Test Square ' + west + ':'"
    ></numeric-camera-wrapper-component>

    <boolean-wrapper-component
      id="HancockDisagreesHailDamage"
      hide-margin
      :validate="validate"
      :current-value="model.HancockDisagreesHailDamage"
      @onChanged="model.HancockDisagreesHailDamage = $event"
      v-bind:choices="['Yes', 'No']"
      label="Does Hancock disagrees with contractor hail damage?"
    ></boolean-wrapper-component>
    <directional-camera-wrapper-component
      v-show="fieldAssets.length < 100"
      label
      hide-margin
      :validate="false"
      :disable-camera="fieldAssets.length >= 100"
      :north-field-assets="ReturnFieldAssets(assetFieldEnum.HancockDisagreesNorth)"
      :north-asset-upload-model="ReturnAssetModel(assetFieldEnum.HancockDisagreesNorth, 'Hancock Disagrees ' + north)"
      :south-field-assets="ReturnFieldAssets(assetFieldEnum.HancockDisagreesSouth)"
      :south-asset-upload-model="ReturnAssetModel(assetFieldEnum.HancockDisagreesSouth, 'Hancock Disagrees ' + south)"
      :east-field-assets="ReturnFieldAssets(assetFieldEnum.HancockDisagreesEast)"
      :east-asset-upload-model="ReturnAssetModel(assetFieldEnum.HancockDisagreesEast, 'Hancock Disagrees ' + east)"
      :west-field-assets="ReturnFieldAssets(assetFieldEnum.HancockDisagreesWest)"
      :west-asset-upload-model="ReturnAssetModel(assetFieldEnum.HancockDisagreesWest, 'Hancock Disagrees ' + west)"
      :slot-a-label="north"
      :slot-b-label="east"
      :slot-c-label="south"
      :slot-d-label="west"
    ></directional-camera-wrapper-component>

    <directional-camera-wrapper-component
      label="Wind Damage Photos:"
      v-show="model.StormDamageType.includes('Wind') && fieldAssets.length < 100"
      :validate="false"
      :disable-camera="fieldAssets.length >= 100"
      hide-margin
      :north-field-assets="ReturnFieldAssets(assetFieldEnum.WindDamageNorth)"
      :north-asset-upload-model="ReturnAssetModel(assetFieldEnum.WindDamageNorth, 'Wind Damage ' + north)"
      :south-field-assets="ReturnFieldAssets(assetFieldEnum.WindDamageSouth)"
      :south-asset-upload-model="ReturnAssetModel(assetFieldEnum.WindDamageSouth, 'Wind Damage ' + south)"
      :east-field-assets="ReturnFieldAssets(assetFieldEnum.WindDamageEast)"
      :east-asset-upload-model="ReturnAssetModel(assetFieldEnum.WindDamageEast, 'Wind Damage ' + east)"
      :west-field-assets="ReturnFieldAssets(assetFieldEnum.WindDamageWest)"
      :west-asset-upload-model="ReturnAssetModel(assetFieldEnum.WindDamageWest, 'Wind Damage ' + west)"
      :slot-a-label="north"
      :slot-b-label="east"
      :slot-c-label="south"
      :slot-d-label="west"
    ></directional-camera-wrapper-component>
    <directional-numeric-wrapper-component
      label="Wind Damage Facet 1:"
      :validate="model.StormDamageType.includes('Wind')"
      v-show="model.StormDamageType.includes('Wind')"
      :disable-camera="fieldAssets.length >= 100"
      decimal
      :slot-a-value="model.WindDamageNorthOneSqft"
      :slot-b-value="model.WindDamageEastOneSqft"
      :slot-c-value="model.WindDamageSouthOneSqft"
      :slot-d-value="model.WindDamageWestOneSqft"
      :slot-a-label="north"
      :slot-b-label="east"
      :slot-c-label="south"
      :slot-d-label="west"
      @onslotachanged="model.WindDamageNorthOneSqft = $event"
      @onSlotBChanged="model.WindDamageEastOneSqft = $event"
      @onSlotCChanged="model.WindDamageSouthOneSqft = $event"
      @onSlotDChanged="model.WindDamageWestOneSqft = $event"
    ></directional-numeric-wrapper-component>

    <directional-numeric-wrapper-component
      label="Wind Damage Facet 2:"
      :validate="model.StormDamageType.includes('Wind')"
      :disable-camera="fieldAssets.length >= 100"
      v-show="model.StormDamageType.includes('Wind')"
      decimal
      :slot-a-value="model.WindDamageNorthTwoSqft"
      :slot-b-value="model.WindDamageEastTwoSqft"
      :slot-c-value="model.WindDamageSouthTwoSqft"
      :slot-d-value="model.WindDamageWestTwoSqft"
      :slot-a-label="north"
      :slot-b-label="east"
      :slot-c-label="south"
      :slot-d-label="west"
      @onslotachanged="model.WindDamageNorthTwoSqft = $event"
      @onSlotBChanged="model.WindDamageEastTwoSqft = $event"
      @onSlotCChanged="model.WindDamageSouthTwoSqft = $event"
      @onSlotDChanged="model.WindDamageWestTwoSqft = $event"
    ></directional-numeric-wrapper-component>

    <directional-numeric-wrapper-component
      label="Wind Damage Facet 3:"
      :validate="model.StormDamageType.includes('Wind')"
      v-show="model.StormDamageType.includes('Wind')"
      :disable-camera="fieldAssets.length >= 100"
      decimal
      :slot-a-value="model.WindDamageNorthThreeSqft"
      :slot-b-value="model.WindDamageEastThreeSqft"
      :slot-c-value="model.WindDamageSouthThreeSqft"
      :slot-d-value="model.WindDamageWestThreeSqft"
      :slot-a-label="north"
      :slot-b-label="east"
      :slot-c-label="south"
      :slot-d-label="west"
      @onslotachanged="model.WindDamageNorthThreeSqft = $event"
      @onSlotBChanged="model.WindDamageEastThreeSqft = $event"
      @onSlotCChanged="model.WindDamageSouthThreeSqft = $event"
      @onSlotDChanged="model.WindDamageWestThreeSqft = $event"
    ></directional-numeric-wrapper-component>

    <directional-numeric-wrapper-component
      label="Wind Damage Facet 4:"
      :validate="model.StormDamageType.includes('Wind')"
      v-show="model.StormDamageType.includes('Wind')"
      :disable-camera="fieldAssets.length >= 100"
      decimal
      :slot-a-value="model.WindDamageNorthFourSqft"
      :slot-b-value="model.WindDamageEastFourSqft"
      :slot-c-value="model.WindDamageSouthFourSqft"
      :slot-d-value="model.WindDamageWestFourSqft"
      :slot-a-label="north"
      :slot-b-label="east"
      :slot-c-label="south"
      :slot-d-label="west"
      @onslotachanged="model.WindDamageNorthFourSqft = $event"
      @onSlotBChanged="model.WindDamageEastFourSqft = $event"
      @onSlotCChanged="model.WindDamageSouthFourSqft = $event"
      @onSlotDChanged="model.WindDamageWestFourSqft = $event"
    ></directional-numeric-wrapper-component>

    <directional-numeric-wrapper-component
      label="Wind Damage Facet 5:"
      :validate="model.StormDamageType.includes('Wind')"
      v-show="model.StormDamageType.includes('Wind')"
      :disable-camera="fieldAssets.length >= 100"
      decimal
      :slot-a-value="model.WindDamageNorthFiveSqft"
      :slot-b-value="model.WindDamageEastFiveSqft"
      :slot-c-value="model.WindDamageSouthFiveSqft"
      :slot-d-value="model.WindDamageWestFiveSqft"
      :slot-a-label="north"
      :slot-b-label="east"
      :slot-c-label="west"
      :slot-d-label="south"
      @onslotachanged="model.WindDamageNorthFiveSqft = $event"
      @onSlotBChanged="model.WindDamageEastFiveSqft = $event"
      @onSlotCChanged="model.WindDamageSouthFiveSqft = $event"
      @onSlotDChanged="model.WindDamageWestFiveSqft = $event"
    ></directional-numeric-wrapper-component>

    <boolean-wrapper-component
      id="BrittlenessTestRequested"
      :validate="validate"
      :current-value="model.BrittlenessTestRequested"
      @onChanged="model.BrittlenessTestRequested = $event"
      v-bind:choices="['Yes', 'No']"
      label="Was a Brittleness Test Requested?"
    ></boolean-wrapper-component>

    <boolean-wrapper-component
      id="BrittlenessTestConducted"
      :validate="validate"
      :current-value="model.BrittlenessTestConducted"
      @onChanged="model.BrittlenessTestConducted = $event"
      v-bind:choices="['Yes', 'No']"
      label="Was a Brittleness Test Performed?"
    ></boolean-wrapper-component>

    <boolean-camera-wrapper-component
      id="BrittlenessTestNorth"
      hide-margin
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.BrittlenessTestNorthPerformed)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.BrittlenessTestNorthPerformed, 'Brittleness Test Performed ' + north)"
      :validate="isBrittlenessTestVisible('BrittlenessTestNorth')"
      :current-value="model.BrittlenessTestNorth"
      v-show="isBrittlenessTestVisible('BrittlenessTestNorth')"
      @onChanged="model.BrittlenessTestNorth = $event"
      v-bind:choices="['Yes', 'No']"
      v-bind:label="'Brittleness Test (' + north + ')?'"
    ></boolean-camera-wrapper-component>

    <checkbox-camera-wrapper-component
      id="BrittlenessTestNorthPass"
      hide-margin
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.BrittlenessTestNorthResult)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.BrittlenessTestNorthResult, 'Brittleness Test Result ' + north)"
      :validate="isBrittlenessTestVisible('BrittlenessTestNorth') && model.BrittlenessTestNorth"
      :current-value="model.BrittlenessTestNorthPass"
      v-show="model.BrittlenessTestConducted && model.BrittlenessTestNorth"
      @onChanged="model.BrittlenessTestNorthPass = $event"
      v-bind:choices="['Pass', 'Fail', 'NA']"
      v-bind:label="'Brittleness Test Result (' + north + ')?'"
    ></checkbox-camera-wrapper-component>

    <boolean-camera-wrapper-component
      id="BrittlenessTestSouth"
      hide-margin
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.BrittlenessTestSouthPerformed)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.BrittlenessTestSouthPerformed, 'Brittleness Test Performed ' + south)"
      :validate="isBrittlenessTestVisible('BrittlenessTestSouth')"
      :current-value="model.BrittlenessTestSouth"
      v-show="isBrittlenessTestVisible('BrittlenessTestSouth')"
      @onChanged="model.BrittlenessTestSouth = $event"
      v-bind:choices="['Yes', 'No']"
      v-bind:label="'Brittleness Test (' + south + ')?'"
    ></boolean-camera-wrapper-component>

    <checkbox-camera-wrapper-component
      id="BrittlenessTestSouthPass"
      hide-margin
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.BrittlenessTestSouthResult)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.BrittlenessTestSouthResult, 'Brittleness Test Result ' + south)"
      :validate="isBrittlenessTestVisible('BrittlenessTestSouth') && model.BrittlenessTestSouth"
      :current-value="model.BrittlenessTestSouthPass"
      v-show="model.BrittlenessTestConducted && model.BrittlenessTestSouth"
      @onChanged="model.BrittlenessTestSouthPass = $event"
      v-bind:choices="['Pass', 'Fail', 'NA']"
      v-bind:label="'Brittleness Test Result (' + south + ')?'"
    ></checkbox-camera-wrapper-component>

    <boolean-camera-wrapper-component
      id="BrittlenessTestEast"
      hide-margin
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.BrittlenessTestEastPerformed)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.BrittlenessTestEastPerformed, 'Brittleness Test Performed ' + east)"
      :validate="isBrittlenessTestVisible('BrittlenessTestEast')"
      :current-value="model.BrittlenessTestEast"
      v-show="isBrittlenessTestVisible('BrittlenessTestEast')"
      @onChanged="model.BrittlenessTestEast = $event"
      v-bind:choices="['Yes', 'No']"
      v-bind:label="'Brittleness Test (' + east + ')?'"
    ></boolean-camera-wrapper-component>

    <checkbox-camera-wrapper-component
      id="BrittlenessTestEastPass"
      hide-margin
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.BrittlenessTestEastResult)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.BrittlenessTestEastResult, 'Brittleness Test Result ' + east)"
      :validate="isBrittlenessTestVisible('BrittlenessTestEast') && model.BrittlenessTestEast"
      :current-value="model.BrittlenessTestEastPass"
      v-show="model.BrittlenessTestConducted && model.BrittlenessTestEast"
      @onChanged="model.BrittlenessTestEastPass = $event"
      v-bind:choices="['Pass', 'Fail', 'NA']"
      v-bind:label="'Brittleness Test Result (' + east + ')?'"
    ></checkbox-camera-wrapper-component>

    <boolean-camera-wrapper-component
      id="BrittlenessTestWest"
      hide-margin
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.BrittlenessTestWestPerformed)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.BrittlenessTestWestPerformed, 'Brittleness Test Performed ' + west)"
      :validate="isBrittlenessTestVisible('BrittlenessTestWest')"
      :current-value="model.BrittlenessTestWest"
      v-show="isBrittlenessTestVisible('BrittlenessTestWest')"
      @onChanged="model.BrittlenessTestWest = $event"
      v-bind:choices="['Yes', 'No']"
      v-bind:label="'Brittleness Test (' + west + ')?'"
    ></boolean-camera-wrapper-component>

    <checkbox-camera-wrapper-component
      id="BrittlenessTestWestPass"
      hide-margin
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.BrittlenessTestWestResult)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.BrittlenessTestWestResult, 'Brittleness Test Result ' + west)"
      :validate="isBrittlenessTestVisible('BrittlenessTestWest') && model.BrittlenessTestWest"
      :current-value="model.BrittlenessTestWestPass"
      v-show="model.BrittlenessTestConducted && model.BrittlenessTestWest"
      @onChanged="model.BrittlenessTestWestPass = $event"
      v-bind:choices="['Pass', 'Fail', 'NA']"
      v-bind:label="'Brittleness Test Result (' + west + ')?'"
    ></checkbox-camera-wrapper-component>

    <roof-damaged-items-section-component
      :is-all-state="model.AllStateInspection"
      :company-id="companyId"
      :project-id="projectId"
      :property-inspection-form-id="propertyInspectionFormId"
      :validate="false"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="fieldAssets"
    ></roof-damaged-items-section-component>

    <span class="sectionHeader">Indicate other Non Wind/Hail related conditions that exist on roof</span>

    <boolean-wrapper-component
      id="BlisterDamage"
      :validate="validate"
      :current-value="model.BlisterDamage"
      @onChanged="model.BlisterDamage = $event"
      v-bind:choices="['Yes', 'No']"
      label="Blistering Damaged?"
    ></boolean-wrapper-component>

    <checkbox-camera-wrapper-component
      id="BlistersNorth"
      hide-margin
      v-show="model.BlisterDamage"
      :validate="model.BlisterDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.BlistersNorth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.BlistersNorth, 'Blisters  ' + north)"
      :current-value="model.BlistersNorth"
      @onChanged="model.BlistersNorth = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Blisters (' + north + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="BlistersEast"
      hide-margin
      v-show="model.BlisterDamage"
      :validate="model.BlisterDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.BlistersEast)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.BlistersEast, 'Blisters  ' + east)"
      :current-value="model.BlistersEast"
      @onChanged="model.BlistersEast = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Blisters (' + east + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="BlistersSouth"
      hide-margin
      v-show="model.BlisterDamage"
      :validate="model.BlisterDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.BlistersSouth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.BlistersSouth, 'Blisters  ' + south)"
      :current-value="model.BlistersSouth"
      @onChanged="model.BlistersSouth = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Blisters (' + south + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="BlistersWest"
      hide-margin
      v-show="model.BlisterDamage"
      :validate="model.BlisterDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.BlistersWest)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.BlistersWest, 'Blisters  ' + west)"
      :current-value="model.BlistersWest"
      @onChanged="model.BlistersWest = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Blisters (' + west + ')?'"
    ></checkbox-camera-wrapper-component>

    <boolean-wrapper-component
      id="CloggedGutterDamage"
      :validate="model.GutterPresent"
      v-show="model.GutterPresent"
      :current-value="model.CloggedGutterDamage"
      @onChanged="model.CloggedGutterDamage = $event"
      v-bind:choices="['Yes', 'No']"
      label="Clogged Gutters?"
    ></boolean-wrapper-component>

    <checkbox-camera-wrapper-component
      id="CloggedGuttersNorth"
      hide-margin
      v-show="model.GutterPresent && model.CloggedGutterDamage"
      :validate="model.GutterPresent && model.CloggedGutterDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.CloggedGuttersNorth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.CloggedGuttersNorth, 'Clogged Gutters  ' + north)"
      :current-value="model.CloggedGuttersNorth"
      @onChanged="model.CloggedGuttersNorth = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Clogged Gutters (' + north + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="CloggedGuttersEast"
      hide-margin
      v-show="model.GutterPresent && model.CloggedGutterDamage"
      :validate="model.GutterPresent && model.CloggedGutterDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.CloggedGuttersEast)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.CloggedGuttersEast, 'Clogged Gutters  ' + east)"
      :current-value="model.CloggedGuttersEast"
      @onChanged="model.CloggedGuttersEast = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Clogged Gutters (' + east + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="CloggedGuttersSouth"
      hide-margin
      v-show="model.GutterPresent && model.CloggedGutterDamage"
      :validate="model.GutterPresent && model.CloggedGutterDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.CloggedGuttersSouth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.CloggedGuttersSouth, 'Clogged Gutters  ' + south)"
      :current-value="model.CloggedGuttersSouth"
      @onChanged="model.CloggedGuttersSouth = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Clogged Gutters (' + south + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="CloggedGuttersWest"
      hide-margin
      v-show="model.GutterPresent && model.CloggedGutterDamage"
      :validate="model.GutterPresent && model.CloggedGutterDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.CloggedGuttersWest)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.CloggedGuttersWest, 'Clogged Gutters  ' + west)"
      :current-value="model.CloggedGuttersWest"
      @onChanged="model.CloggedGuttersWest = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Clogged Gutters (' + west + ')?'"
    ></checkbox-camera-wrapper-component>

    <boolean-wrapper-component
      id="CuppedDamage"
      :validate="validate"
      :current-value="model.CuppedDamage"
      @onChanged="model.CuppedDamage = $event"
      v-bind:choices="['Yes', 'No']"
      label="Cupped/Curled Shingles?"
    ></boolean-wrapper-component>

    <checkbox-camera-wrapper-component
      id="CuppedNorth"
      hide-margin
      v-show="model.CuppedDamage"
      :validate="model.CuppedDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.CuppedNorth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.CuppedNorth, 'Cupped  ' + north)"
      :current-value="model.CuppedNorth"
      @onChanged="model.CuppedNorth = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Cupped/Curled (' + north + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="CuppedEast"
      hide-margin
      v-show="model.CuppedDamage"
      :validate="model.CuppedDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.CuppedEast)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.CuppedEast, 'Cupped  ' + east)"
      :current-value="model.CuppedEast"
      @onChanged="model.CuppedEast = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Cupped/Curled (' + east + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="CuppedSouth"
      hide-margin
      v-show="model.CuppedDamage"
      :validate="model.CuppedDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.CuppedSouth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.CuppedSouth, 'Cupped  ' + south)"
      :current-value="model.CuppedSouth"
      @onChanged="model.CuppedSouth = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Cupped/Curled (' + south + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="CuppedWest"
      hide-margin
      v-show="model.CuppedDamage"
      :validate="model.CuppedDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.CuppedWest)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.CuppedWest, 'Cupped  ' + west)"
      :current-value="model.CuppedWest"
      @onChanged="model.CuppedWest = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Cupped/Curled (' + west + ')?'"
    ></checkbox-camera-wrapper-component>

    <boolean-wrapper-component
      id="DeckingRottedDamage"
      :validate="validate"
      :current-value="model.DeckingRottedDamage"
      @onChanged="model.DeckingRottedDamage = $event"
      v-bind:choices="['Yes', 'No']"
      label="Decking Rotting/Rotted?"
    ></boolean-wrapper-component>

    <checkbox-camera-wrapper-component
      id="DeckingRottedNorth"
      hide-margin
      v-show="model.DeckingRottedDamage"
      :validate="model.DeckingRottedDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.DeckingRottedNorth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.DeckingRottedNorth, 'Decking Rotted  ' + north)"
      :current-value="model.DeckingRottedNorth"
      @onChanged="model.DeckingRottedNorth = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Decking Rotted (' + north + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="DeckingRottedEast"
      hide-margin
      v-show="model.DeckingRottedDamage"
      :validate="model.DeckingRottedDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.DeckingRottedEast)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.DeckingRottedEast, 'Decking Rotted  ' + east)"
      :current-value="model.DeckingRottedEast"
      @onChanged="model.DeckingRottedEast = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Decking Rotted (' + east + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="DeckingRottedSouth"
      hide-margin
      v-show="model.DeckingRottedDamage"
      :validate="model.DeckingRottedDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.DeckingRottedSouth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.DeckingRottedSouth, 'Decking Rotted  ' + south)"
      :current-value="model.DeckingRottedSouth"
      @onChanged="model.DeckingRottedSouth = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Decking Rotted (' + south + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="DeckingRottedWest"
      hide-margin
      v-show="model.DeckingRottedDamage"
      :validate="model.DeckingRottedDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.DeckingRottedWest)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.DeckingRottedWest, 'Decking Rotted  ' + west)"
      :current-value="model.DeckingRottedWest"
      @onChanged="model.DeckingRottedWest = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Decking Rotted (' + west + ')?'"
    ></checkbox-camera-wrapper-component>

    <boolean-wrapper-component
      id="FlashingNotSealedDamage"
      :validate="validate"
      :current-value="model.FlashingNotSealedDamage"
      @onChanged="model.FlashingNotSealedDamage = $event"
      v-bind:choices="['Yes', 'No']"
      label="Flashing Not Sealed?"
    ></boolean-wrapper-component>

    <checkbox-camera-wrapper-component
      id="FlashingNotSealedNorth"
      hide-margin
      v-show="model.FlashingNotSealedDamage"
      :validate="model.FlashingNotSealedDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.FlashingNotSealedNorth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.FlashingNotSealedNorth, 'Flashing Not Sealed  ' + north)"
      :current-value="model.FlashingNotSealedNorth"
      @onChanged="model.FlashingNotSealedNorth = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Flashing Not Sealed (' + north + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="FlashingNotSealedEast"
      hide-margin
      v-show="model.FlashingNotSealedDamage"
      :validate="model.FlashingNotSealedDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.FlashingNotSealedEast)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.FlashingNotSealedEast, 'Flashing Not Sealed  ' + east)"
      :current-value="model.FlashingNotSealedEast"
      @onChanged="model.FlashingNotSealedEast = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Flashing Not Sealed (' + east + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="FlashingNotSealedSouth"
      hide-margin
      v-show="model.FlashingNotSealedDamage"
      :validate="model.FlashingNotSealedDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.FlashingNotSealedSouth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.FlashingNotSealedSouth, 'Flashing Not Sealed  ' + south)"
      :current-value="model.FlashingNotSealedSouth"
      @onChanged="model.FlashingNotSealedSouth = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Flashing Not Sealed (' + south + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="FlashingNotSealedWest"
      hide-margin
      v-show="model.FlashingNotSealedDamage"
      :validate="model.FlashingNotSealedDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.FlashingNotSealedWest)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.FlashingNotSealedWest, 'Flashing Not Sealed  ' + west)"
      :current-value="model.FlashingNotSealedWest"
      @onChanged="model.FlashingNotSealedWest = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Flashing Not Sealed (' + west + ')?'"
    ></checkbox-camera-wrapper-component>
    <textbox-wrapper-component
      id="FlashingNotSealedNotes"
      :max-characters="8000"
      text-area
      hide-margin
      v-show="model.FlashingNotSealedDamage"
      :validate="model.FlashingNotSealedDamage"
      :current-value="model.FlashingNotSealedNotes"
      @onChanged="model.FlashingNotSealedNotes = $event"
      label="Flashing Notes:"
    ></textbox-wrapper-component>

    <boolean-wrapper-component
      id="GranuleLossDamage"
      :validate="validate"
      :current-value="model.GranuleLossDamage"
      @onChanged="model.GranuleLossDamage = $event"
      v-bind:choices="['Yes', 'No']"
      label="Granule Loss?"
    ></boolean-wrapper-component>

    <checkbox-camera-wrapper-component
      id="GranuleLossNorth"
      hide-margin
      v-show="model.GranuleLossDamage"
      :validate="model.GranuleLossDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.GranuleLossNorth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.GranuleLossNorth, 'Granule Loss  ' + north)"
      :current-value="model.GranuleLossNorth"
      @onChanged="model.GranuleLossNorth = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Granule Loss (' + north + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="GranuleLossEast"
      hide-margin
      v-show="model.GranuleLossDamage"
      :validate="model.GranuleLossDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.GranuleLossEast)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.GranuleLossEast, 'Granule Loss  ' + east)"
      :current-value="model.GranuleLossEast"
      @onChanged="model.GranuleLossEast = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Granule Loss (' + east + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="GranuleLossSouth"
      hide-margin
      v-show="model.GranuleLossDamage"
      :validate="model.GranuleLossDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.GranuleLossSouth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.GranuleLossSouth, 'Granule Loss  ' + south)"
      :current-value="model.GranuleLossSouth"
      @onChanged="model.GranuleLossSouth = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Granule Loss (' + south + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="GranuleLossWest"
      hide-margin
      v-show="model.GranuleLossDamage"
      :validate="model.GranuleLossDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.GranuleLossWest)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.GranuleLossWest, 'Granule Loss  ' + west)"
      :current-value="model.GranuleLossWest"
      @onChanged="model.GranuleLossWest = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Granule Loss (' + west + ')?'"
    ></checkbox-camera-wrapper-component>

    <boolean-camera-wrapper-component
      id="ManufacturedDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.ManufacturedDamage)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.ManufacturedDamage)"
      :validate="validate"
      :current-value="model.ManufacturedDamage"
      @onChanged="model.ManufacturedDamage = $event"
      v-bind:choices="['Yes', 'No']"
      label="Manufactured Damage:"
    ></boolean-camera-wrapper-component>

    <boolean-wrapper-component
      id="ManufacturedMarkDamage"
      :validate="validate"
      :current-value="model.ManufacturedMarkDamage"
      @onChanged="model.ManufacturedMarkDamage = $event"
      v-bind:choices="['Yes', 'No']"
      label="Manufactured Marks?"
    ></boolean-wrapper-component>

    <checkbox-camera-wrapper-component
      id="ManufacturedMarksNorth"
      hide-margin
      v-show="model.ManufacturedMarkDamage"
      :validate="model.ManufacturedMarkDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.ManufacturedMarksNorth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.ManufacturedMarksNorth, 'Manufactured Marks  ' + north)"
      :current-value="model.ManufacturedMarksNorth"
      @onChanged="model.ManufacturedMarksNorth = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Manufactured Marks (' + north + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="ManufacturedMarksEast"
      hide-margin
      v-show="model.ManufacturedMarkDamage"
      :validate="model.ManufacturedMarkDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.ManufacturedMarksEast)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.ManufacturedMarksEast, 'Manufactured Marks  ' + east)"
      :current-value="model.ManufacturedMarksEast"
      @onChanged="model.ManufacturedMarksEast = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Manufactured Marks (' + east + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="ManufacturedMarksSouth"
      hide-margin
      v-show="model.ManufacturedMarkDamage"
      :validate="model.ManufacturedMarkDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.ManufacturedMarksSouth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.ManufacturedMarksSouth, 'Manufactured Marks  ' + south)"
      :current-value="model.ManufacturedMarksSouth"
      @onChanged="model.ManufacturedMarksSouth = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Manufactured Marks (' + south + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="ManufacturedMarksWest"
      hide-margin
      v-show="model.ManufacturedMarkDamage"
      :validate="model.ManufacturedMarkDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.ManufacturedMarksWest)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.ManufacturedMarksWest, 'Manufactured Marks  ' + west)"
      :current-value="model.ManufacturedMarksWest"
      @onChanged="model.ManufacturedMarksWest = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Manufactured Marks (' + west + ')?'"
    ></checkbox-camera-wrapper-component>

    <boolean-camera-wrapper-component
      id="MechanicalDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.MechanicalDamage)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.MechanicalDamage)"
      :validate="validate"
      :current-value="model.MechanicalDamage"
      @onChanged="model.MechanicalDamage = $event"
      v-bind:choices="['Yes', 'No']"
      label="Mechanical Damage:"
    ></boolean-camera-wrapper-component>

    <boolean-wrapper-component
      id="MechanicalMarkDamage"
      :validate="validate"
      :current-value="model.MechanicalMarkDamage"
      @onChanged="model.MechanicalMarkDamage = $event"
      v-bind:choices="['Yes', 'No']"
      label="Mechanical Marks?"
    ></boolean-wrapper-component>

    <checkbox-camera-wrapper-component
      id="MechanicalMarksNorth"
      hide-margin
      v-show="model.MechanicalMarkDamage"
      :validate="model.MechanicalMarkDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.MechanicalMarksNorth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.MechanicalMarksNorth, 'Mechanical Marks  ' + north)"
      :current-value="model.MechanicalMarksNorth"
      @onChanged="model.MechanicalMarksNorth = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Mechanical Marks (' + north + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="MechanicalMarksEast"
      hide-margin
      v-show="model.MechanicalMarkDamage"
      :validate="model.MechanicalMarkDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.MechanicalMarksEast)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.MechanicalMarksEast, 'Mechanical Marks  ' + east)"
      :current-value="model.MechanicalMarksEast"
      @onChanged="model.MechanicalMarksEast = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Mechanical Marks (' + east + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="MechanicalMarksSouth"
      hide-margin
      v-show="model.MechanicalMarkDamage"
      :validate="model.MechanicalMarkDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.MechanicalMarksSouth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.MechanicalMarksSouth, 'Mechanical Marks  ' + south)"
      :current-value="model.MechanicalMarksSouth"
      @onChanged="model.MechanicalMarksSouth = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Mechanical Marks (' + south + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="MechanicalMarksWest"
      hide-margin
      v-show="model.MechanicalMarkDamage"
      :validate="model.MechanicalMarkDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.MechanicalMarksWest)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.MechanicalMarksWest, 'Mechanical Marks  ' + west)"
      :current-value="model.MechanicalMarksWest"
      @onChanged="model.MechanicalMarksWest = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Mechanical Marks (' + west + ')?'"
    ></checkbox-camera-wrapper-component>

    <boolean-wrapper-component
      id="NailPopDamaged"
      :validate="validate"
      :current-value="model.NailPopDamaged"
      @onChanged="model.NailPopDamaged = $event"
      v-bind:choices="['Yes', 'No']"
      label="Nail Pops ?"
    ></boolean-wrapper-component>

    <checkbox-camera-wrapper-component
      id="NailPopsNorth"
      hide-margin
      v-show="model.NailPopDamaged"
      :validate="model.NailPopDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.NailPopsNorth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.NailPopsNorth, 'Nail Pops  ' + north)"
      :current-value="model.NailPopsNorth"
      @onChanged="model.NailPopsNorth = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Nail Pops (' + north + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="NailPopsEast"
      hide-margin
      v-show="model.NailPopDamaged"
      :validate="model.NailPopDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.NailPopsEast)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.NailPopsEast, 'Nail Pops  ' + east)"
      :current-value="model.NailPopsEast"
      @onChanged="model.NailPopsEast = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Nail Pops (' + east + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="NailPopsSouth"
      hide-margin
      v-show="model.NailPopDamaged"
      :validate="model.NailPopDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.NailPopsSouth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.NailPopsSouth, 'Nail Pops  ' + south)"
      :current-value="model.NailPopsSouth"
      @onChanged="model.NailPopsSouth = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Nail Pops (' + south + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="NailPopsWest"
      hide-margin
      v-show="model.NailPopDamaged"
      :validate="model.NailPopDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.NailPopsWest)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.NailPopsWest, 'Nail Pops  ' + west)"
      :current-value="model.NailPopsWest"
      @onChanged="model.NailPopsWest = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Nail Pops (' + west + ')?'"
    ></checkbox-camera-wrapper-component>

    <boolean-wrapper-component
      id="RoofDebrisDamaged"
      :validate="validate"
      :current-value="model.RoofDebrisDamaged"
      @onChanged="model.RoofDebrisDamaged = $event"
      v-bind:choices="['Yes', 'No']"
      label="Roof Debris?"
    ></boolean-wrapper-component>

    <checkbox-camera-wrapper-component
      id="RoofDebrisNorth"
      hide-margin
      v-show="model.RoofDebrisDamaged"
      :validate="model.RoofDebrisDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.RoofDebrisNorth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.RoofDebrisNorth, 'Roof Debris  ' + north)"
      :current-value="model.RoofDebrisNorth"
      @onChanged="model.RoofDebrisNorth = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Roof Debris (' + north + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="RoofDebrisEast"
      hide-margin
      v-show="model.RoofDebrisDamaged"
      :validate="model.RoofDebrisDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.RoofDebrisEast)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.RoofDebrisEast, 'Roof Debris  ' + east)"
      :current-value="model.RoofDebrisEast"
      @onChanged="model.RoofDebrisEast = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Roof Debris (' + east + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="RoofDebrisSouth"
      hide-margin
      v-show="model.RoofDebrisDamaged"
      :validate="model.RoofDebrisDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.RoofDebrisSouth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.RoofDebrisSouth, 'Roof Debris  ' + south)"
      :current-value="model.RoofDebrisSouth"
      @onChanged="model.RoofDebrisSouth = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Roof Debris (' + south + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="RoofDebrisWest"
      hide-margin
      v-show="model.RoofDebrisDamaged"
      :validate="model.RoofDebrisDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.RoofDebrisWest)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.RoofDebrisWest, 'Roof Debris  ' + west)"
      :current-value="model.RoofDebrisWest"
      @onChanged="model.RoofDebrisWest = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Roof Debris (' + west + ')?'"
    ></checkbox-camera-wrapper-component>

    <boolean-wrapper-component
      id="ThermalCrackingDamage"
      :validate="validate"
      :current-value="model.ThermalCrackingDamage"
      @onChanged="model.ThermalCrackingDamage = $event"
      v-bind:choices="['Yes', 'No']"
      label="Thermal Cracking?"
    ></boolean-wrapper-component>

    <checkbox-camera-wrapper-component
      id="ThermalCrackingNorth"
      hide-margin
      v-show="model.ThermalCrackingDamage"
      :validate="model.ThermalCrackingDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.ThermalCrackingNorth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.ThermalCrackingNorth, 'Thermal Cracking  ' + north)"
      :current-value="model.ThermalCrackingNorth"
      @onChanged="model.ThermalCrackingNorth = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Thermal Cracking (' + north + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="ThermalCrackingEast"
      hide-margin
      v-show="model.ThermalCrackingDamage"
      :validate="model.ThermalCrackingDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.ThermalCrackingEast)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.ThermalCrackingEast, 'Thermal Cracking  ' + east)"
      :current-value="model.ThermalCrackingEast"
      @onChanged="model.ThermalCrackingEast = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Thermal Cracking (' + east + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="ThermalCrackingSouth"
      hide-margin
      v-show="model.ThermalCrackingDamage"
      :validate="model.ThermalCrackingDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.ThermalCrackingSouth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.ThermalCrackingSouth, 'Thermal Cracking  ' + south)"
      :current-value="model.ThermalCrackingSouth"
      @onChanged="model.ThermalCrackingSouth = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Thermal Cracking (' + south + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="ThermalCrackingWest"
      hide-margin
      v-show="model.ThermalCrackingDamage"
      :validate="model.ThermalCrackingDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.ThermalCrackingWest)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.ThermalCrackingWest, 'Thermal Cracking  ' + west)"
      :current-value="model.ThermalCrackingWest"
      @onChanged="model.ThermalCrackingWest = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Thermal Cracking (' + west + ')?'"
    ></checkbox-camera-wrapper-component>

    <boolean-camera-wrapper-component
      id="ExcessiveWeathering"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.ExcessiveWeathering)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.ExcessiveWeathering)"
      :validate="validate"
      :current-value="model.ExcessiveWeathering"
      @onChanged="model.ExcessiveWeathering = $event"
      v-bind:choices="['Yes', 'No']"
      label="Excessive Weathering:"
    ></boolean-camera-wrapper-component>

    <boolean-camera-wrapper-component
      id="RodentDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.RodentDamage)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.RodentDamage)"
      :validate="validate"
      :current-value="model.RodentDamage"
      @onChanged="model.RodentDamage = $event"
      v-bind:choices="['Yes', 'No']"
      label="Insect/Rodent Damage:"
    ></boolean-camera-wrapper-component>

    <boolean-camera-wrapper-component
      id="ExposedFasteners"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.ExposedFasteners)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.ExposedFasteners)"
      :validate="validate"
      :current-value="model.ExposedFasteners"
      @onChanged="model.ExposedFasteners = $event"
      v-bind:choices="['Yes', 'No']"
      label="Exposed Fasteners:"
    ></boolean-camera-wrapper-component>

    <boolean-camera-wrapper-component
      id="SpatterMarks"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.SpatterMarks)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.SpatterMarks)"
      :validate="validate"
      :current-value="model.SpatterMarks"
      @onChanged="model.SpatterMarks = $event"
      v-bind:choices="['Yes', 'No']"
      label="Spatter Marks:"
    ></boolean-camera-wrapper-component>

    <boolean-camera-wrapper-component
      id="InstallationError"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.InstallationError)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.InstallationError)"
      :validate="validate"
      :current-value="model.InstallationError"
      @onChanged="model.InstallationError = $event"
      v-bind:choices="['Yes', 'No']"
      label="Installation Error?"
    ></boolean-camera-wrapper-component>

    <checkbox-wrapper-component
      id="InstallationErrorDescription"
      allow-multiple
      v-show="model.InstallationError"
      hide-margin
      :validate="model.InstallationError"
      :current-value="model.InstallationErrorDescription"
      @onChanged="model.InstallationErrorDescription = $event"
      v-bind:choices="masterInstallationIssues"
      label="Installation Error Description"
    ></checkbox-wrapper-component>

    <textbox-wrapper-component
      id="InstallationErrorDescriptionOther"
      :max-characters="8000"
      text-area
      hide-margin
      v-show="model.InstallationError && model.InstallationErrorDescription == 'Other'"
      :validate="model.InstallationError && model.InstallationErrorDescription == 'Other'"
      :current-value="model.InstallationErrorDescriptionOther"
      @onChanged="model.InstallationErrorDescriptionOther = $event"
      label="Other Installation Error:"
    ></textbox-wrapper-component>

    <boolean-wrapper-component
      id="OtherConditions"
      :disable-camera="fieldAssets.length >= 100"
      :validate="validate"
      :current-value="model.OtherConditions"
      @onChanged="model.OtherConditions = $event"
      v-bind:choices="['Yes', 'No']"
      label="Other Conditions:"
    ></boolean-wrapper-component>
    <textbox-wrapper-component
      id="OtherConditionsName"
      hide-margin
      :max-characters="50"
      v-show="model.OtherConditions"
      :validate="model.OtherConditions"
      :current-value="model.OtherConditionsName"
      @onChanged="model.OtherConditionsName = $event"
      label="Other Conditions Name:"
    ></textbox-wrapper-component>
    <textbox-wrapper-component
      id="OtherConditionsDescription"
      hide-margin
      :max-characters="8000"
      text-area
      v-show="model.OtherConditions"
      :validate="model.OtherConditions"
      :current-value="model.OtherConditionsDescription"
      @onChanged="model.OtherConditionsDescription = $event"
      label="Other Conditions Description:"
    ></textbox-wrapper-component>
    <checkbox-camera-wrapper-component
      id="OtherConditionsNorth"
      hide-margin
      v-show="model.OtherConditions"
      :validate="model.OtherConditions"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.OtherConditionsNorth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.OtherConditionsNorth, 'Other Conditions  ' + north)"
      :current-value="model.OtherConditionsNorth"
      @onChanged="model.OtherConditionsNorth = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Other Conditions (' + north + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="OtherConditionsEast"
      hide-margin
      v-show="model.OtherConditions"
      :validate="model.OtherConditions"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.OtherConditionsEast)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.OtherConditionsEast, 'Other Conditions  ' + east)"
      :current-value="model.OtherConditionsEast"
      @onChanged="model.OtherConditionsEast = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Other Conditions (' + east + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="OtherConditionsSouth"
      hide-margin
      v-show="model.OtherConditions"
      :validate="model.OtherConditions"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.OtherConditionsSouth)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.OtherConditionsSouth, 'Other Conditions  ' + south)"
      :current-value="model.OtherConditionsSouth"
      @onChanged="model.OtherConditionsSouth = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Other Conditions (' + south + ')?'"
    ></checkbox-camera-wrapper-component>
    <checkbox-camera-wrapper-component
      id="OtherConditionsWest"
      hide-margin
      v-show="model.OtherConditions"
      :validate="model.OtherConditions"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.OtherConditionsWest)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.OtherConditionsWest, 'Other Conditions  ' + west)"
      :current-value="model.OtherConditionsWest"
      @onChanged="model.OtherConditionsWest = $event"
      v-bind:choices="['Yes', 'No']"
      :label="'Other Conditions (' + west + ')?'"
    ></checkbox-camera-wrapper-component>

    <span class="sectionHeader">Additional Information</span>

    <boolean-wrapper-component
      id="RoofMeasured"
      :validate="validate"
      :current-value="model.RoofMeasured"
      @onChanged="model.RoofMeasured = $event"
      v-bind:choices="['Yes', 'No']"
      label="Did You Measure The Roof?"
    ></boolean-wrapper-component>

    <numeric-wrapper-component
      id="RoofPitchZeroSqft"
      decimal
      label="Roof Pitch (0-6) Square Feet:"
      hide-margin
      v-show="model.RoofMeasured"
      :validate="model.RoofMeasured"
      :current-value="model.RoofPitchZeroSqft"
      @onChanged="model.RoofPitchZeroSqft = $event"
    ></numeric-wrapper-component>

    <numeric-wrapper-component
      id="RoofPitchSevenSqft"
      decimal
      label="Roof Pitch (7-9) Square Feet:"
      hide-margin
      v-show="model.RoofMeasured"
      :validate="model.RoofMeasured"
      :current-value="model.RoofPitchSevenSqft"
      @onChanged="model.RoofPitchSevenSqft = $event"
    ></numeric-wrapper-component>

    <numeric-wrapper-component
      id="RoofPitchTenSqft"
      decimal
      label="Roof Pitch (10-12) Square Feet:"
      hide-margin
      v-show="model.RoofMeasured"
      :validate="model.RoofMeasured"
      :current-value="model.RoofPitchTenSqft"
      @onChanged="model.RoofPitchTenSqft = $event"
    ></numeric-wrapper-component>

    <numeric-wrapper-component
      id="RoofStoryOneSqft"
      decimal
      label="First Story Square Feet:"
      hide-margin
      v-show="model.RoofMeasured"
      :validate="model.RoofMeasured"
      :current-value="model.RoofStoryOneSqft"
      @onChanged="model.RoofStoryOneSqft = $event"
    ></numeric-wrapper-component>

    <numeric-wrapper-component
      id="RoofStoryTwoSqft"
      decimal
      label="Second Story Square Feet:"
      hide-margin
      v-show="model.RoofMeasured"
      :validate="model.RoofMeasured"
      :current-value="model.RoofStoryTwoSqft"
      @onChanged="model.RoofStoryTwoSqft = $event"
    ></numeric-wrapper-component>

    <boolean-camera-wrapper-component
      id="RoofDiagramed"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.RoofDiagramed)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.RoofDiagramed)"
      :validate="validate"
      :current-value="model.RoofDiagramed"
      @onChanged="model.RoofDiagramed = $event"
      v-bind:choices="['Yes', 'No']"
      label="Did You Diagram The Roof?"
    ></boolean-camera-wrapper-component>

    <textbox-camera-wrapper-component
      id="AdditionalSummary"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.AdditionalSummary)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.AdditionalSummary)"
      :max-characters="8000"
      text-area
      :validate="validate"
      :current-value="model.AdditionalSummary"
      @onChanged="model.AdditionalSummary = $event"
      label="Additional Summary:"
    ></textbox-camera-wrapper-component>

    <boolean-camera-wrapper-component
      id="OutBuildingDmg"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.OutBuildingDmg)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.OutBuildingDmg)"
      :validate="validate"
      :current-value="model.OutBuildingDamage"
      @onChanged="model.OutBuildingDamage = $event"
      v-bind:choices="['Yes', 'No']"
      label="Out Building Damage?"
    ></boolean-camera-wrapper-component>

    <textbox-wrapper-component
      id="OutBuildingNotes"
      :max-characters="8000"
      text-area
      v-show="model.OutBuildingDamage"
      hide-margin
      :validate="model.OutBuildingDamage"
      :current-value="model.OutBuildingNotes"
      @onChanged="model.OutBuildingNotes = $event"
      label="Out Building Notes:"
    ></textbox-wrapper-component>

    <boolean-camera-wrapper-component
      id="RopeHarness"
      :custom-validator="model.RopeHarness ? 'Photo Required' : ''"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.RopeHarness)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.RopeHarness)"
      :validate="validate"
      :current-value="model.RopeHarness"
      @onChanged="model.RopeHarness = $event"
      v-bind:choices="['Yes', 'No']"
      label="Rope & Harness Used?"
    ></boolean-camera-wrapper-component>

    <boolean-camera-wrapper-component
      id="TarpInstall"
      :custom-validator="model.TarpInstall ? '8 Photos Required' : ''"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.TarpInstall)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.TarpInstall)"
      :validate="validate"
      :current-value="model.TarpInstall"
      @onChanged="model.TarpInstall = $event"
      v-bind:choices="['Yes', 'No']"
      label="Tarp Install?"
    ></boolean-camera-wrapper-component>

    <numeric-wrapper-component
      id="TarpInstallSizeSf"
      decimal
      hide-margin
      v-show="model.TarpInstall"
      :validate="model.TarpInstall"
      :current-value="model.TarpInstallSizeSf"
      @onChanged="model.TarpInstallSizeSf = $event"
      label="Tarp Install Size (SF):"
    ></numeric-wrapper-component>

    <numeric-wrapper-component
      id="TarpResetSizeSf"
      decimal
      hide-margin
      v-show="model.TarpInstall"
      :validate="model.TarpInstall"
      :current-value="model.TarpResetSizeSf"
      @onChanged="model.TarpResetSizeSf = $event"
      label="Tarp Install / Remove & Reset (SF):"
    ></numeric-wrapper-component>

    <boolean-wrapper-component
      id="EagleViewProvided"
      v-show="isAllState"
      :validate="isAllState"
      :current-value="model.EagleViewProvided"
      @onChanged="model.EagleViewProvided = $event"
      v-bind:choices="['Yes', 'No']"
      label="Was a copy of Eagleview Provided?"
    ></boolean-wrapper-component>

    <boolean-wrapper-component
      id="RoleExplained"
      v-show="isAllState"
      :validate="isAllState"
      :current-value="model.RoleExplained"
      @onChanged="model.RoleExplained = $event"
      v-bind:choices="['Yes', 'No']"
      label="Was Ladder Assist introduced & Role Explained?"
    ></boolean-wrapper-component>

    <boolean-wrapper-component
      id="OutsideAdjusterPresent"
      :validate="validate"
      :current-value="model.OutsideAdjusterPresent"
      @onChanged="model.OutsideAdjusterPresent = $event"
      v-bind:choices="['Yes', 'No']"
      label="Outside Adjuster Present During Inspection?"
    ></boolean-wrapper-component>

    <boolean-wrapper-component
      id="OutsideAdjusterPresentOnRoof"
      hide-margin
      v-show="model.OutsideAdjusterPresent"
      :validate="model.OutsideAdjusterPresent"
      :current-value="model.OutsideAdjusterPresentOnRoof"
      @onChanged="model.OutsideAdjusterPresentOnRoof = $event"
      v-bind:choices="['Yes', 'No']"
      label="Outside Adjuster On Roof During Inspection?"
    ></boolean-wrapper-component>

    <boolean-wrapper-component
      id="OutsideAdjusterOnEdge"
      v-show="isAllState && model.OutsideAdjusterPresent && !model.OutsideAdjusterPresentOnRoof"
      hide-margin
      :validate="isAllState && model.OutsideAdjusterPresent && !model.OutsideAdjusterPresentOnRoof"
      :current-value="model.OutsideAdjusterOnEdge"
      @onChanged="model.OutsideAdjusterOnEdge = $event"
      v-bind:choices="['Yes', 'No']"
      label="Outside Adjuster On Edge of Roof?"
    ></boolean-wrapper-component>

    <boolean-wrapper-component
      id="OutsideAdjusterOnLadder"
      v-show="isAllState && model.OutsideAdjusterPresent && !model.OutsideAdjusterPresentOnRoof"
      hide-margin
      :validate="isAllState && model.OutsideAdjusterPresent && !model.OutsideAdjusterPresentOnRoof"
      :current-value="model.OutsideAdjusterOnLadder"
      @onChanged="model.OutsideAdjusterOnLadder = $event"
      v-bind:choices="['Yes', 'No']"
      label="Outside Adjuster On Ladder During Inspection?"
    ></boolean-wrapper-component>

    <boolean-wrapper-component
      id="PublicAdjusterPresent"
      :validate="validate"
      :current-value="model.PublicAdjusterPresent"
      @onChanged="model.PublicAdjusterPresent = $event"
      v-bind:choices="['Yes', 'No']"
      label="Public Adjuster Present During Inspection?"
    ></boolean-wrapper-component>

    <boolean-wrapper-component
      id="RoofPublicAdjusterOnRoof"
      hide-margin
      v-show="model.PublicAdjusterPresent"
      :validate="model.PublicAdjusterPresent"
      :current-value="model.PublicAdjusterPresentOnRoof"
      @onChanged="model.PublicAdjusterPresentOnRoof = $event"
      v-bind:choices="['Yes', 'No']"
      label="Public  Adjuster On Roof During Inspection?"
    ></boolean-wrapper-component>

    <boolean-wrapper-component
      id="InsuredPresent"
      :validate="validate"
      :current-value="model.InsuredPresent"
      @onChanged="model.InsuredPresent = $event"
      v-bind:choices="['Yes', 'No']"
      label="Insured Present?"
    ></boolean-wrapper-component>

    <boolean-wrapper-component
      id="ContractorPresent"
      :validate="validate"
      :current-value="model.ContractorPresent"
      @onChanged="model.ContractorPresent = $event"
      v-bind:choices="['Yes', 'No']"
      label="Contractor Present During Inspection?"
    ></boolean-wrapper-component>

    <boolean-wrapper-component
      id="ContractorPresentOnRoof"
      hide-margin
      v-show="model.ContractorPresent"
      :validate="model.ContractorPresent"
      :current-value="model.ContractorPresentOnRoof"
      @onChanged="model.ContractorPresentOnRoof = $event"
      v-bind:choices="['Yes', 'No']"
      label="Contractor On Roof During Inspection?"
    ></boolean-wrapper-component>

    <boolean-wrapper-component
      id="LaAccompanied"
      v-show="isAllState"
      :validate="isAllState"
      :current-value="model.LaAccompanied"
      @onChanged="model.LaAccompanied = $event"
      v-bind:choices="['Yes', 'No']"
      label="Did LA Accompanied OA on walk around - collateral inspection?"
    ></boolean-wrapper-component>

    <boolean-wrapper-component
      id="LaOnTime"
      v-show="isAllState"
      :validate="isAllState"
      :current-value="model.LaOnTime"
      @onChanged="model.LaOnTime = $event"
      v-bind:choices="['Yes', 'No']"
      label="Did LA arrive on time to inspection?"
    ></boolean-wrapper-component>

    <boolean-wrapper-component
      id="OaReview"
      v-show="isAllState"
      :validate="isAllState"
      :current-value="model.OaReview"
      @onChanged="model.OaReview = $event"
      v-bind:choices="['Yes', 'No']"
      label="Did OA review RAF?"
    ></boolean-wrapper-component>

    <boolean-camera-wrapper-component
      id="OaInitialsRequired"
      :field-assets="ReturnFieldAssets(assetFieldEnum.OaSignature)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.OaSignature)"
      v-show="isAllState"
      :validate="isAllState"
      :disable-camera="true"
      :current-value="model.OaInitialsRequired"
      @onChanged="model.OaInitialsRequired = $event"
      v-bind:choices="['Yes', 'No']"
      label="OA Initials Required?"
    ></boolean-camera-wrapper-component>

    <canvas-button-component
      id="OaInitials"
      hide-margin
      :validate="isAllState && model.OaInitialsRequired"
      v-show="model.OaInitialsRequired && model.OaInitialsCaptured == null"
      :company-id="companyId"
      :project-id="projectId"
      :property-inspection-form-id="propertyInspectionFormId"
      @onChanged="model.OaInitialsCaptured = $event"
      :current-value="model.OaInitialsCaptured"
      label="Please sign your initials in the box to the right:"
    ></canvas-button-component>
  </div>
</template>

