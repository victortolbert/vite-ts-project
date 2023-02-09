<template>
  <div v-if="ready">
    <directional-camera-wrapper-component
      v-show="fieldAssets.length < 100"
      label="Elevation Photos:"
      hide-margin
      :validate="false"
      :disable-camera="fieldAssets.length >= 100"
      :north-field-assets="ReturnFieldAssets(assetFieldEnum.ElevationNorth)"
      :north-asset-upload-model="ReturnAssetModel(assetFieldEnum.ElevationNorth, 'Elevation ' + north)"
      :south-field-assets="ReturnFieldAssets(assetFieldEnum.ElevationSouth)"
      :south-asset-upload-model="ReturnAssetModel(assetFieldEnum.ElevationSouth, 'Elevation ' + south)"
      :east-field-assets="ReturnFieldAssets(assetFieldEnum.ElevationEast)"
      :east-asset-upload-model="ReturnAssetModel(assetFieldEnum.ElevationEast, 'Elevation ' + east)"
      :west-field-assets="ReturnFieldAssets(assetFieldEnum.ElevationWest)"
      :west-asset-upload-model="ReturnAssetModel(assetFieldEnum.ElevationWest, 'Elevation ' + west)"
      :slot-a-label="north"
      :slot-b-label="east"
      :slot-c-label="south"
      :slot-d-label="west"
    ></directional-camera-wrapper-component>

    <boolean-camera-wrapper-component
      id="AllPhotosFront"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.FrontRisk)"
      :validate="validate"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.FrontRisk)"
      :current-value="model.AllPhotosFront"
      @onChanged="model.AllPhotosFront = $event"
      v-bind:choices="['Yes', 'No']"
      label="Front Risk Photo Taken?"
    ></boolean-camera-wrapper-component>

    <checkbox-camera-wrapper-component
      id="LandscapeDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.LandscapeDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.LandscapeDamaged)"
      :validate="validate"
      :current-value="model.LandscapeDamaged"
      @onChanged="model.LandscapeDamaged = $event"
      v-bind:choices="masterYesNoNa"
      label="Landscape Damage?"
    ></checkbox-camera-wrapper-component>

    <checkbox-camera-wrapper-component
      id="PatioFurniture"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.PatioFurnitureDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.PatioFurnitureDamaged)"
      :validate="validate"
      :current-value="model.PatioFurnitureDamaged"
      @onChanged="model.PatioFurnitureDamaged = $event"
      v-bind:choices="masterYesNoNa"
      label="Patio Furniture Damage?"
    ></checkbox-camera-wrapper-component>

    <checkbox-camera-wrapper-component
      id="RefrigerationCoilsDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.RefrigerationCoilsDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.RefrigerationCoilsDamaged)"
      :validate="validate"
      :current-value="model.RefrigerationCoilsDamaged"
      @onChanged="model.RefrigerationCoilsDamaged = $event"
      v-bind:choices="masterYesNoNa"
      label="Refrigeration Coil Damage?"
    ></checkbox-camera-wrapper-component>

    <numeric-wrapper-component
      label="Coils Damaged (Units):"
      :validate="model.RefrigerationCoilsDamaged == 'Yes'"
      v-show="model.RefrigerationCoilsDamaged == 'Yes'"
      hide-margin
      :current-value="model.RefrigerationCoilUnits"
      @onChanged="model.RefrigerationCoilUnits = $event"
    ></numeric-wrapper-component>

    <checkbox-camera-wrapper-component
      id="DeckDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.DeckDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.DeckDamaged)"
      :validate="validate"
      :current-value="model.DeckDamaged"
      @onChanged="model.DeckDamaged = $event"
      v-bind:choices="masterYesNoNa"
      label="Deck Damage?"
    ></checkbox-camera-wrapper-component>

    <numeric-wrapper-component
      label="Deck Damage (SQFT):"
      decimal
      :validate="model.DeckDamaged == 'Yes'"
      v-show="model.DeckDamaged == 'Yes'"
      hide-margin
      :current-value="model.DeckSf"
      @onChanged="model.DeckSf = $event"
    ></numeric-wrapper-component>

    <boolean-wrapper-component
      id="DeckPainted"
      hide-margin
      :validate="model.DeckDamaged == 'Yes'"
      v-show="model.DeckDamaged == 'Yes'"
      :current-value="model.DeckPainted"
      @onChanged="model.DeckPainted = $event"
      v-bind:choices="['Yes', 'No']"
      label="Deck Painted?"
    ></boolean-wrapper-component>

    <boolean-wrapper-component
      id="DeckStained"
      hide-margin
      :validate="model.DeckDamaged == 'Yes'"
      v-show="model.DeckDamaged == 'Yes'"
      :current-value="model.DeckStained"
      @onChanged="model.DeckStained = $event"
      v-bind:choices="['Yes', 'No']"
      label="Deck Stained?"
    ></boolean-wrapper-component>

    <checkbox-wrapper-component
      id="DeckMaterial"
      hide-margin
      :validate="model.DeckDamaged == 'Yes'"
      v-show="model.DeckDamaged == 'Yes'"
      :current-value="model.DeckMaterial"
      @onChanged="model.DeckMaterial = $event"
      v-bind:choices="masterDeckMaterial"
      label="Deck Material:"
    ></checkbox-wrapper-component>

    <checkbox-camera-wrapper-component
      id="HandrailDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.HandrailDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.HandrailDamaged)"
      :validate="validate"
      :current-value="model.HandrailDamaged"
      @onChanged="model.HandrailDamaged = $event"
      v-bind:choices="masterYesNoNa"
      label="Deck Handrail Damage?"
    ></checkbox-camera-wrapper-component>

    <numeric-wrapper-component
      label="Handrail Damaged (LF):"
      decimal
      :validate="model.HandrailDamaged == 'Yes'"
      v-show="model.HandrailDamaged == 'Yes'"
      hide-margin
      :current-value="model.HandrailLf"
      @onChanged="model.HandrailLf = $event"
    ></numeric-wrapper-component>

    <boolean-wrapper-component
      id="HandrailPainted"
      hide-margin
      :validate="model.HandrailDamaged == 'Yes'"
      v-show="model.HandrailDamaged == 'Yes'"
      :current-value="model.HandrailPainted"
      @onChanged="model.HandrailPainted = $event"
      v-bind:choices="['Yes', 'No']"
      label="Handrail Painted?"
    ></boolean-wrapper-component>

    <boolean-wrapper-component
      id="HandrailStained"
      hide-margin
      :validate="model.HandrailDamaged == 'Yes'"
      v-show="model.HandrailDamaged == 'Yes'"
      :current-value="model.HandrailStained"
      @onChanged="model.HandrailStained = $event"
      v-bind:choices="['Yes', 'No']"
      label="Handrail Stained?"
    ></boolean-wrapper-component>

    <checkbox-wrapper-component
      id="HandrailMaterial"
      hide-margin
      :validate="model.HandrailDamaged == 'Yes'"
      v-show="model.HandrailDamaged == 'Yes'"
      :current-value="model.HandrailMaterial"
      @onChanged="model.HandrailMaterial = $event"
      v-bind:choices="masterHandRailMaterial"
      label="Handrail Material:"
    ></checkbox-wrapper-component>

    <checkbox-camera-wrapper-component
      id="FenceDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.FenceDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.FenceDamaged)"
      :validate="validate"
      :current-value="model.FenceDamaged"
      @onChanged="model.FenceDamaged = $event"
      v-bind:choices="masterYesNoNa"
      label="Fences Damage?"
    ></checkbox-camera-wrapper-component>

    <numeric-wrapper-component
      label="Fence Damage (LF):"
      decimal
      :validate="model.FenceDamaged == 'Yes'"
      v-show="model.FenceDamaged == 'Yes'"
      hide-margin
      :current-value="model.FenceSf"
      @onChanged="model.FenceSf = $event"
    ></numeric-wrapper-component>

    <numeric-wrapper-component
      label="Fence Height (LF):"
      decimal
      :validate="model.FenceDamaged == 'Yes'"
      v-show="model.FenceDamaged == 'Yes'"
      hide-margin
      :current-value="model.FenceHeightLf"
      @onChanged="model.FenceHeightLf = $event"
    ></numeric-wrapper-component>

    <boolean-wrapper-component
      id="FencePainted"
      hide-margin
      :validate="model.FenceDamaged == 'Yes'"
      v-show="model.FenceDamaged == 'Yes'"
      :current-value="model.FencePainted"
      @onChanged="model.FencePainted = $event"
      v-bind:choices="['Yes', 'No']"
      label="Fences Painted?"
    ></boolean-wrapper-component>

    <boolean-wrapper-component
      id="FenceStained"
      hide-margin
      :validate="model.FenceDamaged == 'Yes'"
      v-show="model.FenceDamaged == 'Yes'"
      :current-value="model.FenceStained"
      @onChanged="model.FenceStained = $event"
      v-bind:choices="['Yes', 'No']"
      label="Fences Stained?"
    ></boolean-wrapper-component>

    <checkbox-wrapper-component
      id="FenceMaterial"
      hide-margin
      :validate="model.FenceDamaged == 'Yes'"
      v-show="model.FenceDamaged == 'Yes'"
      :current-value="model.FenceMaterial"
      @onChanged="model.FenceMaterial = $event"
      v-bind:choices="masterFenceMaterial"
      label="Fence Material:"
    ></checkbox-wrapper-component>

    <textbox-wrapper-component
      id="FenceMaterialOther"
      :max-characters="50"
      hide-margin
      :validate="model.FenceMaterial == 'Other'"
      v-show="model.FenceMaterial == 'Other' && model.FenceDamaged == 'Yes'"
      :current-value="model.FenceMaterialOther"
      @onChanged="model.FenceMaterialOther = $event"
      label="Fence Material:"
    ></textbox-wrapper-component>

    <checkbox-camera-wrapper-component
      id="GarageDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :validate="validate"
      :current-value="model.GarageDamaged"
      :field-assets="ReturnFieldAssets(assetFieldEnum.GarageDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.GarageDamaged)"
      @onChanged="model.GarageDamaged = $event"
      v-bind:choices="masterYesNoNa"
      label="Garage Damaged:"
    ></checkbox-camera-wrapper-component>

    <textbox-wrapper-component
      id="GarageDescription"
      text-area
      :max-characters="1500"
      hide-margin
      v-show="model.GarageDamaged == 'Yes'"
      :validate="model.GarageDamaged == 'Yes'"
      :current-value="model.GarageDescription"
      @onChanged="model.GarageDescription = $event"
      label="Damage Description:"
    ></textbox-wrapper-component>

    <numeric-wrapper-component
      label="Damage (SQFT):"
      decimal
      hide-margin
      v-show="model.GarageDamaged == 'Yes'"
      :validate="model.GarageDamaged == 'Yes'"
      :current-value="model.GarageSf"
      @onChanged="model.GarageSf = $event"
    ></numeric-wrapper-component>

    <checkbox-camera-wrapper-component
      id="WindowsDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.WindowsDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.WindowsDamaged)"
      :validate="validate"
      :current-value="model.WindowsDamaged"
      @onChanged="model.WindowsDamaged = $event"
      v-bind:choices="masterYesNoNa"
      label="Window Damage?"
    ></checkbox-camera-wrapper-component>

    <directional-numeric-wrapper-component
      label="Window Damage (Qty):"
      v-show="model.WindowsDamaged == 'Yes'"
      :validate="model.WindowsDamaged == 'Yes'"
      hide-margin
      decimal
      :disable-camera="fieldAssets.length >= 100"
      :slot-a-value="model.WindowSmallSf"
      :slot-b-value="model.WindowMediumSf"
      :slot-c-value="model.WindowLargeSf"
      :slot-d-value="model.WindowXlargeSf"
      slot-a-label="Small (4-8 SF) Window Damage: "
      slot-b-label="Medium (9-12 SF) Window Damage: "
      slot-c-label="Large (13-19 SF) Window Damage: "
      slot-d-label="X-Large (20-28 SF) Window Damage: "
      @onslotachanged="model.WindowSmallSf = $event"
      @onSlotBChanged="model.WindowMediumSf = $event"
      @onSlotCChanged="model.WindowLargeSf = $event"
      @onSlotDChanged="model.WindowXlargeSf = $event"
    ></directional-numeric-wrapper-component>

    <numeric-wrapper-component
      label="Other Window Damage (Qty):"
      decimal
      :validate="model.WindowsDamaged == 'Yes'"
      v-show="model.WindowsDamaged == 'Yes'"
      large-label
      hide-margin
      :current-value="model.WindowOtherSf"
      @onChanged="model.WindowOtherSf = $event"
    ></numeric-wrapper-component>

    <textbox-wrapper-component
      id="WindowOtherDescription"
      text-area
      :max-characters="1500"
      hide-margin
      v-show="model.WindowOtherSf > 0"
      :validate="model.WindowOtherSf > 0"
      :current-value="model.WindowOtherDescription"
      @onChanged="model.WindowOtherDescription = $event"
      label="Other Window Damage Description:"
    ></textbox-wrapper-component>

    <checkbox-camera-wrapper-component
      id="ScreenDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.WindowScreenDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.WindowScreenDamaged)"
      :validate="validate"
      :current-value="model.WindowScreenDamaged"
      @onChanged="model.WindowScreenDamaged = $event"
      v-bind:choices="masterYesNoNa"
      label="Window Screen Damage?"
    ></checkbox-camera-wrapper-component>

    <directional-numeric-wrapper-component
      label="Window Screen Damage (Qty):"
      :validate="model.WindowScreenDamaged == 'Yes'"
      v-show="model.WindowScreenDamaged == 'Yes'"
      hide-margin
      decimal
      :disable-camera="fieldAssets.length >= 100"
      :slot-a-value="model.WindowScreenSmallSf"
      :slot-b-value="model.WindowScreenMediumSf"
      :slot-c-value="model.WindowScreenLargeSf"
      :slot-d-value="model.WindowScreenXlargeSf"
      slot-a-label="Small (1-9 SF)  Screen Damage: "
      slot-b-label="Medium (10-16 SF)  Screen Damage: "
      slot-c-label="Large (17-25 SF)  Screen Damage: "
      slot-d-label="X-Large (26-32 SF)  Screen Damage: "
      @onslotachanged="model.WindowScreenSmallSf = $event"
      @onSlotBChanged="model.WindowScreenMediumSf = $event"
      @onSlotCChanged="model.WindowScreenLargeSf = $event"
      @onSlotDChanged="model.WindowScreenXlargeSf = $event"
    ></directional-numeric-wrapper-component>

    <checkbox-camera-wrapper-component
      id="WindowWrapDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.WindowWrapDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.WindowWrapDamaged)"
      :validate="validate"
      :current-value="model.WindowWrapDamaged"
      @onChanged="model.WindowWrapDamaged = $event"
      v-bind:choices="masterYesNoNa"
      label="Window Wrap Damage?"
    ></checkbox-camera-wrapper-component>

    <numeric-wrapper-component
      decimal
      :validate="model.WindowWrapDamaged == 'Yes'"
      v-show="model.WindowWrapDamaged == 'Yes'"
      hide-margin
      :current-value="model.WindowWrapLf"
      @onChanged="model.WindowWrapLf = $event"
      label="Window Wrap Damage (LF):"
    ></numeric-wrapper-component>

    <boolean-wrapper-component
      id="WindowWrapPainted"
      hide-margin
      :validate="model.WindowWrapDamaged == 'Yes'"
      v-show="model.WindowWrapDamaged == 'Yes'"
      :current-value="model.WindowWrapPainted"
      @onChanged="model.WindowWrapPainted = $event"
      v-bind:choices="['Yes', 'No']"
      label="Window Wrap Painted?"
    ></boolean-wrapper-component>

    <checkbox-wrapper-component
      id="WindowWrapMaterial"
      hide-margin
      :validate="model.WindowWrapDamaged == 'Yes'"
      v-show="model.WindowWrapDamaged == 'Yes'"
      :current-value="model.WindowWrapMaterial"
      @onChanged="model.WindowWrapMaterial = $event"
      v-bind:choices="masterWindowWrapMaterial"
      label="Window Wrap Material:"
    ></checkbox-wrapper-component>

    <textbox-wrapper-component
      id="FenceMaterialOther"
      :max-characters="50"
      hide-margin
      :validate="model.WindowWrapMaterial == 'Other'"
      v-show="model.WindowWrapMaterial == 'Other' && model.WindowWrapDamaged == 'Yes'"
      :current-value="model.WindowWrapMaterialOther"
      @onChanged="model.WindowWrapMaterialOther = $event"
      label="Window Wrap Material:"
    ></textbox-wrapper-component>

    <checkbox-camera-wrapper-component
      id="AwningDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.AwningDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.AwningDamaged)"
      :validate="validate"
      :current-value="model.AwningDamaged"
      @onChanged="model.AwningDamaged = $event"
      v-bind:choices="masterYesNoNa"
      label="Awnings/Patio Cover Damage?"
    ></checkbox-camera-wrapper-component>

    <checkbox-wrapper-component
      id="AwningMaterial"
      :validate="model.AwningDamaged == 'Yes'"
      v-show="model.AwningDamaged == 'Yes'"
      hide-margin
      :current-value="model.AwningMaterial"
      @onChanged="model.AwningMaterial = $event"
      v-bind:choices="masterAwningMaterial"
      label="Awning/Patio Material:"
    ></checkbox-wrapper-component>

    <textbox-wrapper-component
      id="AwningMaterialOther"
      :max-characters="50"
      hide-margin
      :validate="model.AwningDamaged == 'Yes' && model.AwningMaterial == 'Other'"
      v-show="model.AwningDamaged == 'Yes' && model.AwningMaterial == 'Other'"
      :current-value="model.AwningMaterialOther"
      @onChanged="model.AwningMaterialOther = $event"
      label="Awning/Patio Material:"
    ></textbox-wrapper-component>

    <checkbox-camera-wrapper-component
      id="NeighborhoodDamaged"
      :disable-camera="fieldAssets.length >= 100"
      :validate="isAllState"
      v-show="isAllState"
      :field-assets="ReturnFieldAssets(assetFieldEnum.NeighborhoodDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.NeighborhoodDamaged)"
      :current-value="model.NeighborhoodDamaged"
      @onChanged="model.NeighborhoodDamaged = $event"
      v-bind:choices="masterYesNoNa"
      label="Neighborhood Damage?"
    ></checkbox-camera-wrapper-component>

    <checkbox-camera-wrapper-component
      id="SidingDamage"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.SidingDamage)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.SidingDamage)"
      :validate="validate"
      :current-value="model.SidingDamage"
      @onChanged="model.SidingDamage = $event"
      v-bind:choices="masterYesNoNa"
      label="Siding  Damage?"
    ></checkbox-camera-wrapper-component>

    <directional-numeric-wrapper-component
      label="Siding Damage (SF):"
      v-show="model.SidingDamage == 'Yes'"
      :validate="model.SidingDamage == 'Yes'"
      hide-margin
      decimal
      :disable-camera="fieldAssets.length >= 100"
      :slot-a-value="model.SidingNorthQty"
      :slot-b-value="model.SidingEastQty"
      :slot-c-value="model.SidingSouthQty"
      :slot-d-value="model.SidingWestQty"
      :slot-a-label="north"
      :slot-b-label="east"
      :slot-c-label="west"
      :slot-d-label="south"
      @onSlotAChanged="model.SidingNorthQty = $event"
      @onSlotBChanged="model.SidingEastQty = $event"
      @onSlotCChanged="model.SidingSouthQty = $event"
      @onSlotDChanged="model.SidingWestQty = $event"
    ></directional-numeric-wrapper-component>

    <checkbox-wrapper-component
      id="SidingMaterial"
      hide-margin
      :validate="model.SidingDamage == 'Yes'"
      v-show="model.SidingDamage == 'Yes'"
      :current-value="model.SidingMaterial"
      @onChanged="model.SidingMaterial = $event"
      v-bind:choices="masterSidingMaterial"
      label="Siding Material:"
    ></checkbox-wrapper-component>

    <textbox-wrapper-component
      id="SidingMaterialOther"
      :max-characters="50"
      hide-margin
      :validate="model.SidingDamage == 'Yes' && model.SidingMaterial == 'Other'"
      v-show="model.SidingDamage == 'Yes' && model.SidingMaterial == 'Other'"
      :current-value="model.SidingMaterialOther"
      @onChanged="model.SidingMaterialOther = $event"
      label="Siding Material Other:"
    ></textbox-wrapper-component>

    <textbox-wrapper-component
      id="SidingNotes"
      :max-characters="8000"
      :validate="model.SidingDamage == 'Yes'"
      v-show="model.SidingDamage == 'Yes'"
      hide-margin
      text-area
      :current-value="model.SidingNotes"
      @onChanged="model.SidingNotes = $event"
      label="Siding Notes:"
    ></textbox-wrapper-component>

    <boolean-wrapper-component
      id="DownSpoutsPainted"
      :validate="validate"
      :current-value="model.DownSpoutsPainted"
      @onChanged="model.DownSpoutsPainted = $event"
      v-bind:choices="['Yes', 'No']"
      label="Downspout Painted?"
    ></boolean-wrapper-component>

    <checkbox-wrapper-component
      id="DownSpoutsMaterial"
      hide-margin
      :validate="validate"
      :current-value="model.DownSpoutsMaterial"
      @onChanged="model.DownSpoutsMaterial = $event"
      v-bind:choices="masterDownspoutMaterial"
      label="Downspout Material:"
    ></checkbox-wrapper-component>

    <textbox-wrapper-component
      id="DownSpoutsMaterialOther"
      :max-characters="50"
      hide-margin
      :validate="model.DownSpoutsMaterial == 'Other'"
      v-show="model.DownSpoutsMaterial == 'Other'"
      :current-value="model.DownSpoutsMaterialOther"
      @onChanged="model.DownSpoutsMaterialOther = $event"
      label="Downspout Material:"
    ></textbox-wrapper-component>

    <checkbox-wrapper-component
      id="DownSpoutsSize"
      hide-margin
      :validate="validate"
      :current-value="model.DownSpoutsSize == '0' ? 'Other' : String(model.DownSpoutsSize)"
      @onChanged="model.DownSpoutsSize = $event === 'Other' ? 0 : $event"
      v-bind:choices="masterDownspoutSize"
      label="Downspout Size (inches):"
    ></checkbox-wrapper-component>

    <numeric-wrapper-component
      id="DownSpoutsSizeOther"
      decimal
      hide-margin
      label="Downspout Size (inches):"
      :validate="model.DownSpoutsSize == 0"
      v-show="model.DownSpoutsSize == 0"
      :current-value="model.DownSpoutsSizeOther"
      @onChanged="model.DownSpoutsSizeOther = $event"
    ></numeric-wrapper-component>

    <checkbox-wrapper-component
      id="DownSpoutsDamaged"
      hide-margin
      :validate="validate"
      :current-value="model.DownSpoutsDamaged"
      @onChanged="model.DownSpoutsDamaged = $event"
      v-bind:choices="masterYesNoNa"
      label="Downspout Damaged?"
    ></checkbox-wrapper-component>

    <textbox-wrapper-component
      id="DownSpoutsDamageDescription"
      text-area
      :max-characters="8000"
      hide-margin
      is-text-area
      :validate="model.DownSpoutsDamaged == 'Yes'"
      v-show="model.DownSpoutsDamaged == 'Yes'"
      :current-value="model.DownSpoutsDamageDescription"
      @onChanged="model.DownSpoutsDamageDescription = $event"
      label="Damage Description:"
    ></textbox-wrapper-component>

    <checkbox-camera-wrapper-component
      id="DownSpoutsNorthDamaged"
      v-show="model.DownSpoutsDamaged == 'Yes'"
      :disable-camera="fieldAssets.length >= 100"
      :validate="model.DownSpoutsDamaged == 'Yes'"
      :field-assets="ReturnFieldAssets(assetFieldEnum.DownSpoutsNorthDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.DownSpoutsNorthDamaged, 'DownSpouts Damaged ' + north)"
      hide-margin
      :current-value="model.DownSpoutsNorthDamaged"
      @onChanged="model.DownSpoutsNorthDamaged = $event"
      v-bind:choices="masterYesNo"
      v-bind:label="'Downspouts Damaged (' + north + '):'"
    ></checkbox-camera-wrapper-component>

    <numeric-wrapper-component
      v-bind:label="'Downspouts Damaged (' + north + ') (LF):'"
      decimal
      :validate="model.DownSpoutsNorthDamaged == 'Yes'"
      v-show="model.DownSpoutsNorthDamaged == 'Yes'"
      hide-margin
      :current-value="model.DownSpoutsNorthLf"
      @onChanged="model.DownSpoutsNorthLf = $event"
    ></numeric-wrapper-component>

    <checkbox-camera-wrapper-component
      id="DownSpoutsEastDamaged"
      v-show="model.DownSpoutsDamaged == 'Yes'"
      :disable-camera="fieldAssets.length >= 100"
      :validate="model.DownSpoutsDamaged == 'Yes'"
      :field-assets="ReturnFieldAssets(assetFieldEnum.DownSpoutsEastDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.DownSpoutsEastDamaged, 'DownSpouts Damaged ' + east)"
      hide-margin
      :current-value="model.DownSpoutsEastDamaged"
      @onChanged="model.DownSpoutsEastDamaged = $event"
      v-bind:choices="masterYesNo"
      v-bind:label="'Downspouts Damaged (' + east + '):'"
    ></checkbox-camera-wrapper-component>

    <numeric-wrapper-component
      v-bind:label="'Downspouts Damaged (' + east + ') (LF):'"
      decimal
      :validate="model.DownSpoutsEastDamaged == 'Yes'"
      v-show="model.DownSpoutsEastDamaged == 'Yes'"
      hide-margin
      :current-value="model.DownSpoutsEastLf"
      @onChanged="model.DownSpoutsEastLf = $event"
    ></numeric-wrapper-component>

    <checkbox-camera-wrapper-component
      id="DownSpoutsSouthDamaged"
      v-show="model.DownSpoutsDamaged == 'Yes'"
      :disable-camera="fieldAssets.length >= 100"
      :validate="model.DownSpoutsDamaged == 'Yes'"
      :field-assets="ReturnFieldAssets(assetFieldEnum.DownSpoutsSouthDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.DownSpoutsSouthDamaged, 'DownSpouts Damaged ' + south)"
      hide-margin
      :current-value="model.DownSpoutsSouthDamaged"
      @onChanged="model.DownSpoutsSouthDamaged = $event"
      v-bind:choices="masterYesNo"
      v-bind:label="'Downspouts Damaged (' + south + '):'"
    ></checkbox-camera-wrapper-component>

    <numeric-wrapper-component
      v-bind:label="'Downspouts Damaged (' + south + ') (LF):'"
      decimal
      :validate="model.DownSpoutsSouthDamaged == 'Yes'"
      v-show="model.DownSpoutsSouthDamaged == 'Yes'"
      hide-margin
      :current-value="model.DownSpoutsSouthLf"
      @onChanged="model.DownSpoutsSouthLf = $event"
    ></numeric-wrapper-component>

    <checkbox-camera-wrapper-component
      id="DownSpoutsWestDamaged"
      v-show="model.DownSpoutsDamaged == 'Yes'"
      :disable-camera="fieldAssets.length >= 100"
      :validate="model.DownSpoutsDamaged == 'Yes'"
      :field-assets="ReturnFieldAssets(assetFieldEnum.DownSpoutsWestDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.DownSpoutsWestDamaged, 'DownSpouts Damaged ' + west)"
      hide-margin
      :current-value="model.DownSpoutsWestDamaged"
      @onChanged="model.DownSpoutsWestDamaged = $event"
      v-bind:choices="masterYesNo"
      v-bind:label="'Downspouts Damaged (' + west + '):'"
    ></checkbox-camera-wrapper-component>

    <numeric-wrapper-component
      v-bind:label="'Downspouts Damaged (' + west + ') (LF):'"
      decimal
      :validate="model.DownSpoutsWestDamaged == 'Yes'"
      v-show="model.DownSpoutsWestDamaged == 'Yes'"
      hide-margin
      :current-value="model.DownSpoutsWestLf"
      @onChanged="model.DownSpoutsWestLf = $event"
    ></numeric-wrapper-component>

    <checkbox-wrapper-component
      id="FasciaMaterial"
      :validate="validate"
      :current-value="model.FasciaMaterial"
      @onChanged="model.FasciaMaterial = $event"
      v-bind:choices="masterFasciaMaterials"
      label="Fascia Material:"
    ></checkbox-wrapper-component>

    <textbox-wrapper-component
      id="FasciaMaterialOther"
      hide-margin
      :max-characters="50"
      :validate="model.FasciaMaterial == 'Other'"
      v-show="model.FasciaMaterial == 'Other'"
      :current-value="model.FasciaMaterialOther"
      @onChanged="model.FasciaMaterialOther = $event"
      label="Fascia Material Other:"
    ></textbox-wrapper-component>

    <checkbox-wrapper-component
      id="FasciaSize"
      hide-margin
      :validate="validate"
      :current-value="model.FasciaSize == '0' ? 'Other' : String(model.FasciaSize)"
      @onChanged="model.FasciaSize = $event === 'Other' ? 0 : $event"
      v-bind:choices="masterFasciaSize"
      label="Fascia Size (inches):"
    ></checkbox-wrapper-component>

    <numeric-wrapper-component
      label="Fascia Size (inches):"
      hide-margin
      decimal
      :validate="String(model.FasciaSize).length > 0 && model.FasciaSize == 0"
      v-show="String(model.FasciaSize).length > 0 && model.FasciaSize == 0"
      :current-value="model.FasciaSizeOther"
      @onChanged="model.FasciaSizeOther = $event"
    ></numeric-wrapper-component>

    <checkbox-wrapper-component
      id="FasciaDamaged"
      hide-margin
      :validate="validate"
      :current-value="model.FasciaDamaged"
      @onChanged="model.FasciaDamaged = $event"
      v-bind:choices="masterYesNoNa"
      label="Fascia Damaged?"
    ></checkbox-wrapper-component>

    <checkbox-camera-wrapper-component
      id="FasciaNorthDamaged"
      v-show="model.FasciaDamaged == 'Yes'"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.FasciaNorthDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.FasciaNorthDamaged, 'Fascia Damaged ' + north)"
      hide-margin
      :validate="model.FasciaDamaged == 'Yes'"
      :current-value="model.FasciaNorthDamaged"
      @onChanged="model.FasciaNorthDamaged = $event"
      v-bind:choices="masterYesNo"
      v-bind:label="'Fascia Damaged (' + north + '):'"
    ></checkbox-camera-wrapper-component>

    <numeric-wrapper-component
      v-bind:label="'Fascia Damaged (' + north + ') (LF):'"
      decimal
      :validate="model.FasciaNorthDamaged == 'Yes'"
      v-show="model.FasciaNorthDamaged == 'Yes'"
      hide-margin
      :current-value="model.FasciaNorthLf"
      @onChanged="model.FasciaNorthLf = $event"
    ></numeric-wrapper-component>

    <checkbox-camera-wrapper-component
      id="FasciaEastDamaged"
      v-show="model.FasciaDamaged == 'Yes'"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.FasciaEastDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.FasciaEastDamaged, 'Fascia Damaged ' + east)"
      hide-margin
      :validate="model.FasciaDamaged == 'Yes'"
      :current-value="model.FasciaEastDamaged"
      @onChanged="model.FasciaEastDamaged = $event"
      v-bind:choices="masterYesNo"
      v-bind:label="'Fascia Damaged (' + east + '):'"
    ></checkbox-camera-wrapper-component>

    <numeric-wrapper-component
      v-bind:label="'Fascia Damaged (' + east + ') (LF):'"
      decimal
      :validate="model.FasciaEastDamaged == 'Yes'"
      v-show="model.FasciaEastDamaged == 'Yes'"
      hide-margin
      :current-value="model.FasciaEastLf"
      @onChanged="model.FasciaEastLf = $event"
    ></numeric-wrapper-component>

    <checkbox-camera-wrapper-component
      id="FasciaSouthDamaged"
      v-show="model.FasciaDamaged == 'Yes'"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.FasciaSouthDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.FasciaSouthDamaged, 'Fascia Damaged ' + south)"
      hide-margin
      :validate="model.FasciaDamaged == 'Yes'"
      :current-value="model.FasciaSouthDamaged"
      @onChanged="model.FasciaSouthDamaged = $event"
      v-bind:choices="masterYesNo"
      v-bind:label="'Fascia Damaged (' + south + '):'"
    ></checkbox-camera-wrapper-component>

    <numeric-wrapper-component
      v-bind:label="'Fascia Damaged (' + south + ') (LF):'"
      decimal
      :validate="model.FasciaSouthDamaged == 'Yes'"
      v-show="model.FasciaSouthDamaged == 'Yes'"
      hide-margin
      :current-value="model.FasciaSouthLf"
      @onChanged="model.FasciaSouthLf = $event"
    ></numeric-wrapper-component>

    <checkbox-camera-wrapper-component
      id="FasciaWestDamaged"
      v-show="model.FasciaDamaged == 'Yes'"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.FasciaWestDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.FasciaWestDamaged, 'Fascia Damaged ' + west)"
      hide-margin
      :validate="model.FasciaDamaged == 'Yes'"
      :current-value="model.FasciaWestDamaged"
      @onChanged="model.FasciaWestDamaged = $event"
      v-bind:choices="masterYesNo"
      v-bind:label="'Fascia Damaged (' + west + '):'"
    ></checkbox-camera-wrapper-component>

    <numeric-wrapper-component
      v-bind:label="'Fascia Damaged (' + west + ') (LF):'"
      decimal
      :validate="model.FasciaWestDamaged == 'Yes'"
      v-show="model.FasciaWestDamaged == 'Yes'"
      hide-margin
      :current-value="model.FasciaWestLf"
      @onChanged="model.FasciaWestLf = $event"
    ></numeric-wrapper-component>
  </div>
</template>


