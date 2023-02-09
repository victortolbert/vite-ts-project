<template>
  <div id="RoofQuestions">
    <span class="sectionContainer">Damaged Items List</span>

    <boolean-camera-wrapper-component
      id="BoxVentsPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.BoxVentsPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.BoxVentsPresent)"
      :validate="validate"
      :current-value="model.BoxVentsPresent"
      @onChanged="model.BoxVentsPresent = $event"
      v-bind:choices="['Yes', 'No']"
      label="Box Vent Present?"
    ></boolean-camera-wrapper-component>
    <boolean-wrapper-component
      id="BoxVentsPainted"
      hide-margin
      v-show="model.BoxVentsPresent"
      :validate="model.BoxVentsPresent"
      :current-value="model.BoxVentsPainted"
      @onChanged="model.BoxVentsPainted = $event"
      v-bind:choices="['Yes', 'No']"
      label="Painted?"
    ></boolean-wrapper-component>
    <checkbox-wrapper-component
      id="BoxVentsMaterial"
      :max-characters="25"
      hide-margin
      v-show="model.BoxVentsPresent"
      :validate="model.BoxVentsPresent"
      :current-value="model.BoxVentsMaterial"
      @onChanged="model.BoxVentsMaterial = $event"
      v-bind:choices="masterBoxVent"
      label="Box Vent Material:"
    ></checkbox-wrapper-component>
    <numeric-wrapper-component
      label="Qty:"
      hide-margin
      v-show="model.BoxVentsPresent"
      :validate="model.BoxVentsPresent"
      :current-value="model.BoxVentsQty"
      @onChanged="ValidateQty($event, 'BoxVentsQty', 'BoxVentsQtyDamaged')"
    ></numeric-wrapper-component>
    <numeric-wrapper-component
      label="Qty Damaged:"
      hide-margin
      v-show="model.BoxVentsPresent"
      :validate="model.BoxVentsPresent && model.BoxVentsQty > 0"
      :current-value="model.BoxVentsQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'BoxVentsQty', 'BoxVentsQtyDamaged')"
    ></numeric-wrapper-component>

    <boolean-camera-wrapper-component
      id="CanVentsPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.CanVentsPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.CanVentsPresent)"
      :validate="validate"
      :current-value="model.CanVentsPresent"
      @onChanged="model.CanVentsPresent = $event"
      v-bind:choices="['Yes', 'No']"
      label="Can Vent Present?"
    ></boolean-camera-wrapper-component>
    <boolean-wrapper-component
      id="CanVentsPainted"
      hide-margin
      v-show="model.CanVentsPresent"
      :validate="model.CanVentsPresent"
      :current-value="model.CanVentsPainted"
      @onChanged="model.CanVentsPainted = $event"
      v-bind:choices="['Yes', 'No']"
      label="Painted?"
    ></boolean-wrapper-component>
    <numeric-wrapper-component
      label="Qty:"
      hide-margin
      v-show="model.CanVentsPresent"
      :validate="model.CanVentsPresent"
      :current-value="model.CanVentsQty"
      @onChanged="ValidateQty($event, 'CanVentsQty', 'CanVentsQtyDamaged')"
    ></numeric-wrapper-component>
    <numeric-wrapper-component
      label="Qty Damaged:"
      hide-margin
      v-show="model.CanVentsPresent"
      :validate="model.CanVentsPresent"
      :current-value="model.CanVentsQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'CanVentsQty', 'CanVentsQtyDamaged')"
    ></numeric-wrapper-component>

    <boolean-camera-wrapper-component
      id="ChimneyCapSmallPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.ChimneyCapSmallPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.ChimneyCapSmallPresent)"
      :validate="validate"
      :current-value="model.ChimneyCapSmallPresent"
      @onChanged="model.ChimneyCapSmallPresent = $event"
      v-bind:choices="['Yes', 'No']"
      label="Small Chimney Cap Present?"
    ></boolean-camera-wrapper-component>
    <boolean-wrapper-component
      id="ChimneyCapSmallPainted"
      hide-margin
      v-show="model.ChimneyCapSmallPresent"
      :validate="model.ChimneyCapSmallPresent"
      :current-value="model.ChimneyCapSmallPainted"
      @onChanged="model.ChimneyCapSmallPainted = $event"
      v-bind:choices="['Yes', 'No']"
      label="Painted?"
    ></boolean-wrapper-component>
    <numeric-wrapper-component
      label="Qty:"
      hide-margin
      v-show="model.ChimneyCapSmallPresent"
      :validate="model.ChimneyCapSmallPresent"
      :current-value="model.ChimneyCapSmallQty"
      @onChanged="ValidateQty($event, 'ChimneyCapSmallQty', 'ChimneyCapSmallQtyDamaged')"
    ></numeric-wrapper-component>
    <numeric-wrapper-component
      label="Qty Damaged:"
      hide-margin
      v-show="model.ChimneyCapSmallPresent"
      :validate="model.ChimneyCapSmallPresent"
      :current-value="model.ChimneyCapSmallQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'ChimneyCapSmallQty', 'ChimneyCapSmallQtyDamaged')"
    ></numeric-wrapper-component>

    <boolean-camera-wrapper-component
      id="ChimneyCapMediumPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.ChimneyCapMediumPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.ChimneyCapMediumPresent)"
      :validate="validate"
      :current-value="model.ChimneyCapMediumPresent"
      @onChanged="model.ChimneyCapMediumPresent = $event"
      v-bind:choices="['Yes', 'No']"
      label="Medium Chimney Cap Present?"
    ></boolean-camera-wrapper-component>
    <boolean-wrapper-component
      id="ChimneyCapMediumPainted"
      hide-margin
      v-show="model.ChimneyCapMediumPresent"
      :validate="model.ChimneyCapMediumPresent"
      :current-value="model.ChimneyCapMediumPainted"
      @onChanged="model.ChimneyCapMediumPainted = $event"
      v-bind:choices="['Yes', 'No']"
      label="Painted?"
    ></boolean-wrapper-component>
    <numeric-wrapper-component
      label="Qty:"
      hide-margin
      v-show="model.ChimneyCapMediumPresent"
      :validate="model.ChimneyCapMediumPresent"
      :current-value="model.ChimneyCapMediumQty"
      @onChanged="ValidateQty($event, 'ChimneyCapMediumQty', 'ChimneyCapMediumQtyDamaged')"
    ></numeric-wrapper-component>
    <numeric-wrapper-component
      label="Qty Damaged:"
      hide-margin
      v-show="model.ChimneyCapMediumPresent"
      :validate="model.ChimneyCapMediumPresent"
      :current-value="model.ChimneyCapMediumQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'ChimneyCapMediumQty', 'ChimneyCapMediumQtyDamaged')"
    ></numeric-wrapper-component>

    <boolean-camera-wrapper-component
      id="ChimneyCapLargePresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.ChimneyCapLargePresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.ChimneyCapLargePresent)"
      :validate="validate"
      :current-value="model.ChimneyCapLargePresent"
      @onChanged="model.ChimneyCapLargePresent = $event"
      v-bind:choices="['Yes', 'No']"
      label="Large Chimney Cap Present?"
    ></boolean-camera-wrapper-component>
    <boolean-wrapper-component
      id="ChimneyCapLargePainted"
      hide-margin
      v-show="model.ChimneyCapLargePresent"
      :validate="model.ChimneyCapLargePresent"
      :current-value="model.ChimneyCapLargePainted"
      @onChanged="model.ChimneyCapLargePainted = $event"
      v-bind:choices="['Yes', 'No']"
      label="Painted?"
    ></boolean-wrapper-component>
    <numeric-wrapper-component
      label="Qty:"
      hide-margin
      v-show="model.ChimneyCapLargePresent"
      :validate="model.ChimneyCapLargePresent"
      :current-value="model.ChimneyCapLargeQty"
      @onChanged="ValidateQty($event, 'ChimneyCapLargeQty', 'ChimneyCapLargeQtyDamaged')"
    ></numeric-wrapper-component>
    <numeric-wrapper-component
      label="Qty Damaged:"
      hide-margin
      v-show="model.ChimneyCapLargePresent"
      :validate="model.ChimneyCapLargePresent"
      :current-value="model.ChimneyCapLargeQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'ChimneyCapLargeQty', 'ChimneyCapLargeQtyDamaged')"
    ></numeric-wrapper-component>

    <boolean-camera-wrapper-component
      id="DripEdgePresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.DripEdgeEavePresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.DripEdgeEavePresent)"
      :validate="validate"
      :current-value="model.DripEdgeEavePresent"
      @onChanged="model.DripEdgeEavePresent = $event"
      v-bind:choices="['Yes', 'No']"
      label="Drip Edge Eaves Present?"
    ></boolean-camera-wrapper-component>
    <boolean-wrapper-component
      id="DripEdgeEavePainted"
      hide-margin
      v-show="model.DripEdgeEavePresent"
      :validate="model.DripEdgeEavePresent"
      :current-value="model.DripEdgeEavePainted"
      @onChanged="model.DripEdgeEavePainted = $event"
      v-bind:choices="['Yes', 'No']"
      label="Painted?"
    ></boolean-wrapper-component>
    <numeric-wrapper-component
      label="Qty:"
      hide-margin
      v-show="model.DripEdgeEavePresent"
      :validate="model.DripEdgeEavePresent"
      :current-value="model.DripEdgeEaveQty"
      @onChanged="ValidateQty($event, 'DripEdgeEaveQty', 'DripEdgeEaveQtyDamaged')"
    ></numeric-wrapper-component>
    <numeric-camera-wrapper-component
      label="Qty Damaged:"
      hide-margin
      v-show="model.DripEdgeEavePresent"
      :validate="model.DripEdgeEavePresent"
      :disable-camera="fieldAssets.length >= 100"
      :current-value="model.DripEdgeEaveQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'DripEdgeEaveQty', 'DripEdgeEaveQtyDamaged')"
      :field-assets="ReturnFieldAssets(assetFieldEnum.DripEdgeEaveQtyDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.DripEdgeEaveQtyDamaged)"
    ></numeric-camera-wrapper-component>

    <boolean-camera-wrapper-component
      id="DripEdgeRakePresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.DripEdgeRakePresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.DripEdgeRakePresent)"
      :validate="validate"
      :current-value="model.DripEdgeRakePresent"
      @onChanged="model.DripEdgeRakePresent = $event"
      v-bind:choices="['Yes', 'No']"
      label="Drip Edge Rake Present?"
    ></boolean-camera-wrapper-component>
    <boolean-wrapper-component
      id="DripEdgeRakePainted"
      hide-margin
      v-show="model.DripEdgeRakePresent"
      :validate="model.DripEdgeRakePresent"
      :current-value="model.DripEdgeRakePainted"
      @onChanged="model.DripEdgeRakePainted = $event"
      v-bind:choices="['Yes', 'No']"
      label="Painted?"
    ></boolean-wrapper-component>
    <numeric-wrapper-component
      id="DripEdgeRakeQty"
      label="Qty:"
      hide-margin
      v-show="model.DripEdgeRakePresent"
      :validate="model.DripEdgeRakePresent"
      :current-value="model.DripEdgeRakeQty"
      @onChanged="ValidateQty($event, 'DripEdgeRakeQty', 'DripEdgeRakeQtyDamaged')"
    ></numeric-wrapper-component>
    <numeric-camera-wrapper-component
      label="Qty Damaged:"
      hide-margin
      v-show="model.DripEdgeRakePresent"
      :validate="model.DripEdgeRakePresent"
      :disable-camera="fieldAssets.length >= 100"
      :current-value="model.DripEdgeRakeQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'DripEdgeRakeQty', 'DripEdgeRakeQtyDamaged')"
      :field-assets="ReturnFieldAssets(assetFieldEnum.DripEdgeRakeQtyDamaged)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.DripEdgeRakeQtyDamaged)"
    ></numeric-camera-wrapper-component>

    <boolean-camera-wrapper-component
      id="FlashingPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.FlashingPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.FlashingPresent)"
      :validate="validate"
      :current-value="model.FlashingPresent"
      @onChanged="model.FlashingPresent = $event"
      v-bind:choices="['Yes', 'No']"
      label="Flashing Present?"
    ></boolean-camera-wrapper-component>
    <boolean-wrapper-component
      id="FlashingPainted"
      hide-margin
      v-show="model.FlashingPresent"
      :validate="model.FlashingPresent"
      :current-value="model.FlashingPainted"
      @onChanged="model.FlashingPainted = $event"
      v-bind:choices="['Yes', 'No']"
      label="Painted?"
    ></boolean-wrapper-component>
    <numeric-wrapper-component
      label="Qty:"
      hide-margin
      v-show="model.FlashingPresent"
      :validate="model.FlashingPresent"
      :current-value="model.FlashingQty"
      @onChanged="ValidateQty($event, 'FlashingQty', 'FlashingQtyDamaged')"
    ></numeric-wrapper-component>
    <numeric-wrapper-component
      label="Qty Damaged:"
      hide-margin
      v-show="model.FlashingPresent"
      :validate="model.FlashingPresent"
      :current-value="model.FlashingQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'FlashingQty', 'FlashingQtyDamaged')"
    ></numeric-wrapper-component>

    <boolean-camera-wrapper-component
      id="GableVentPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.GableVentPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.GableVentPresent)"
      :validate="validate"
      :current-value="model.GableVentPresent"
      @onChanged="model.GableVentPresent = $event"
      v-bind:choices="['Yes', 'No']"
      label="Gable Vent Present?"
    ></boolean-camera-wrapper-component>
    <numeric-wrapper-component
      label="Qty:"
      hide-margin
      v-show="model.GableVentPresent"
      :validate="model.GableVentPresent"
      :current-value="model.GableVentQty"
      @onChanged="ValidateQty($event, 'GableVentQty', 'GableVentQtyDamaged')"
    ></numeric-wrapper-component>
    <numeric-wrapper-component
      label="Qty Damaged:"
      hide-margin
      v-show="model.GableVentPresent"
      :validate="model.GableVentPresent"
      :current-value="model.GableVentQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'GableVentQty', 'GableVentQtyDamaged')"
    ></numeric-wrapper-component>

    <boolean-camera-wrapper-component
      id="HvacFourPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.HvacFourPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.HvacFourPresent)"
      :validate="validate"
      :current-value="model.HvacFourPresent"
      @onChanged="model.HvacFourPresent = $event"
      v-bind:choices="['Yes', 'No']"
      label="4 inch Hvac Vent Present?"
    ></boolean-camera-wrapper-component>
    <boolean-wrapper-component
      id="HvacFourPainted"
      hide-margin
      v-show="model.HvacFourPresent"
      :validate="model.HvacFourPresent"
      :current-value="model.HvacFourPainted"
      @onChanged="model.HvacFourPainted = $event"
      v-bind:choices="['Yes', 'No']"
      label="Painted?"
    ></boolean-wrapper-component>
    <numeric-wrapper-component
      label="Qty:"
      hide-margin
      v-show="model.HvacFourPresent"
      :validate="model.HvacFourPresent"
      :current-value="model.HvacFourQty"
      @onChanged="ValidateQty($event, 'HvacFourQty', 'HvacFourQtyDamaged')"
    ></numeric-wrapper-component>
    <numeric-wrapper-component
      label="Qty Damaged:"
      hide-margin
      v-show="model.HvacFourPresent"
      :validate="model.HvacFourPresent"
      :current-value="model.HvacFourQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'HvacFourQty', 'HvacFourQtyDamaged')"
    ></numeric-wrapper-component>

    <boolean-camera-wrapper-component
      id="HvacSixPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.HvacSixPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.HvacSixPresent)"
      :validate="validate"
      :current-value="model.HvacSixPresent"
      @onChanged="model.HvacSixPresent = $event"
      v-bind:choices="['Yes', 'No']"
      label="6 inch Hvac Vent Present?"
    ></boolean-camera-wrapper-component>
    <boolean-wrapper-component
      id="HvacSixPainted"
      hide-margin
      v-show="model.HvacSixPresent"
      :validate="model.HvacSixPresent"
      :current-value="model.HvacSixPainted"
      @onChanged="model.HvacSixPainted = $event"
      v-bind:choices="['Yes', 'No']"
      label="Painted?"
    ></boolean-wrapper-component>
    <numeric-wrapper-component
      label="Qty:"
      hide-margin
      v-show="model.HvacSixPresent"
      :validate="model.HvacSixPresent"
      :current-value="model.HvacSixQty"
      @onChanged="ValidateQty($event, 'HvacSixQty', 'HvacSixQtyDamaged')"
    ></numeric-wrapper-component>
    <numeric-wrapper-component
      label="Qty Damaged:"
      hide-margin
      v-show="model.HvacSixPresent"
      :validate="model.HvacSixPresent"
      :current-value="model.HvacSixQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'HvacSixQty', 'HvacSixQtyDamaged')"
    ></numeric-wrapper-component>

    <boolean-camera-wrapper-component
      id="HvacEightPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.HvacEightPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.HvacEightPresent)"
      :validate="validate"
      :current-value="model.HvacEightPresent"
      @onChanged="model.HvacEightPresent = $event"
      v-bind:choices="['Yes', 'No']"
      label="8 inch Hvac Vent Present?"
    ></boolean-camera-wrapper-component>
    <boolean-wrapper-component
      id="HvacEightPainted"
      hide-margin
      v-show="model.HvacEightPresent"
      :validate="model.HvacEightPresent"
      :current-value="model.HvacEightPainted"
      @onChanged="model.HvacEightPainted = $event"
      v-bind:choices="['Yes', 'No']"
      label="Painted?"
    ></boolean-wrapper-component>
    <numeric-wrapper-component
      label="Qty:"
      hide-margin
      v-show="model.HvacEightPresent"
      :validate="model.HvacEightPresent"
      :current-value="model.HvacEightQty"
      @onChanged="ValidateQty($event, 'HvacEightQty', 'HvacEightQtyDamaged')"
    ></numeric-wrapper-component>
    <numeric-wrapper-component
      label="Qty Damaged:"
      hide-margin
      v-show="model.HvacEightPresent"
      :validate="model.HvacEightPresent"
      :current-value="model.HvacEightQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'HvacEightQty', 'HvacEightQtyDamaged')"
    ></numeric-wrapper-component>

    <boolean-camera-wrapper-component
      id="MastheadPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.MastheadPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.MastheadPresent)"
      :validate="validate"
      :current-value="model.MastheadPresent"
      @onChanged="model.MastheadPresent = $event"
      v-bind:choices="['Yes', 'No']"
      label="Masthead Present?"
    ></boolean-camera-wrapper-component>
    <boolean-wrapper-component
      id="MastheadPainted"
      hide-margin
      v-show="model.MastheadPresent"
      :validate="model.MastheadPresent"
      :current-value="model.MastheadPainted"
      @onChanged="model.MastheadPainted = $event"
      v-bind:choices="['Yes', 'No']"
      label="Painted?"
    ></boolean-wrapper-component>
    <numeric-wrapper-component
      label="Qty:"
      hide-margin
      v-show="model.MastheadPresent"
      :validate="model.MastheadPresent"
      :current-value="model.MastheadQty"
      @onChanged="ValidateQty($event, 'MastheadQty', 'MastheadQtyDamaged')"
    ></numeric-wrapper-component>
    <numeric-wrapper-component
      label="Qty Damaged:"
      hide-margin
      v-show="model.MastheadPresent"
      :validate="model.MastheadPresent"
      :current-value="model.MastheadQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'MastheadQty', 'MastheadQtyDamaged')"
    ></numeric-wrapper-component>

    <boolean-camera-wrapper-component
      id="PlasticPipebootPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.PlasticPipebootPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.PlasticPipebootPresent)"
      :validate="validate"
      :current-value="model.PlasticPipebootPresent"
      @onChanged="model.PlasticPipebootPresent = $event"
      v-bind:choices="['Yes', 'No']"
      label="Plastic Pipeboot Present?"
    ></boolean-camera-wrapper-component>
    <boolean-wrapper-component
      id="PlasticPipebootPainted"
      hide-margin
      v-show="model.PlasticPipebootPresent"
      :validate="model.PlasticPipebootPresent"
      :current-value="model.PlasticPipebootPainted"
      @onChanged="model.PlasticPipebootPainted = $event"
      v-bind:choices="['Yes', 'No']"
      label="Painted?"
    ></boolean-wrapper-component>
    <numeric-wrapper-component
      id="PlasticPipebootQty"
      label="Qty:"
      hide-margin
      v-show="model.PlasticPipebootPresent"
      :validate="model.PlasticPipebootPresent"
      :current-value="model.PlasticPipebootQty"
      @onChanged="ValidateQty($event, 'PlasticPipebootQty', 'PlasticPipebootQtyDamaged')"
    ></numeric-wrapper-component>
    <numeric-wrapper-component
      id="PlasticPipebootQtyDamaged"
      label="Qty Damaged:"
      hide-margin
      v-show="model.PlasticPipebootPresent"
      :validate="model.PlasticPipebootPresent"
      :current-value="model.PlasticPipebootQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'PlasticPipebootQty', 'PlasticPipebootQtyDamaged')"
    ></numeric-wrapper-component>

    <boolean-camera-wrapper-component
      id="LeadPipebootPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.LeadPipebootPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.LeadPipebootPresent)"
      :validate="validate"
      :current-value="model.LeadPipebootPresent"
      @onChanged="model.LeadPipebootPresent = $event"
      v-bind:choices="['Yes', 'No']"
      label="Lead Pipeboot Present?"
    ></boolean-camera-wrapper-component>
    <boolean-wrapper-component
      id="LeadPipebootPainted"
      hide-margin
      v-show="model.LeadPipebootPresent"
      :validate="model.LeadPipebootPresent"
      :current-value="model.LeadPipebootPainted"
      @onChanged="model.LeadPipebootPainted = $event"
      v-bind:choices="['Yes', 'No']"
      label="Painted?"
    ></boolean-wrapper-component>
    <numeric-wrapper-component
      id="LeadPipebootQty"
      label="Qty:"
      hide-margin
      v-show="model.LeadPipebootPresent"
      :validate="model.LeadPipebootPresent"
      :current-value="model.LeadPipebootQty"
      @onChanged="ValidateQty($event, 'LeadPipebootQty', 'LeadPipebootQtyDamaged')"
    ></numeric-wrapper-component>
    <numeric-wrapper-component
      id="LeadPipebootQtyDamaged"
      label="Qty Damaged:"
      hide-margin
      v-show="model.LeadPipebootPresent"
      :validate="model.LeadPipebootPresent"
      :current-value="model.LeadPipebootQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'LeadPipebootQty', 'LeadPipebootQtyDamaged')"
    ></numeric-wrapper-component>

    <boolean-camera-wrapper-component
      id="PowerVentsPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.PowerVentsPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.PowerVentsPresent)"
      :validate="validate"
      :current-value="model.PowerVentsPresent"
      @onChanged="model.PowerVentsPresent = $event"
      v-bind:choices="['Yes', 'No']"
      label="Power Vents Present?"
    ></boolean-camera-wrapper-component>
    <boolean-wrapper-component
      id="PowerVentsPainted"
      hide-margin
      v-show="model.PowerVentsPresent"
      :validate="model.PowerVentsPresent"
      :current-value="model.PowerVentsPainted"
      @onChanged="model.PowerVentsPainted = $event"
      v-bind:choices="['Yes', 'No']"
      label="Painted?"
    ></boolean-wrapper-component>
    <checkbox-wrapper-component
      id="PowerVentsMaterial"
      :max-characters="25"
      hide-margin
      v-show="model.PowerVentsPresent"
      :validate="model.PowerVentsPresent"
      :current-value="String(model.PowerVentsMaterial)"
      @onChanged="model.PowerVentsMaterial = $event"
      v-bind:choices="masterPowerVentMaterial"
      label="Power Vent Material:"
    ></checkbox-wrapper-component>
    <numeric-wrapper-component
      label="Qty:"
      hide-margin
      v-show="model.PowerVentsPresent"
      :validate="model.PowerVentsPresent"
      :current-value="model.PowerVentsQty"
      @onChanged="ValidateQty($event, 'PowerVentsQty', 'PowerVentsQtyDamaged')"
    ></numeric-wrapper-component>
    <numeric-wrapper-component
      label="Qty Damaged:"
      hide-margin
      v-show="model.PowerVentsPresent"
      :validate="model.PowerVentsPresent"
      :current-value="model.PowerVentsQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'PowerVentsQty', 'PowerVentsQtyDamaged')"
    ></numeric-wrapper-component>

    <boolean-camera-wrapper-component
      id="PowerVentCoversPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.PowerVentCoversPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.PowerVentCoversPresent)"
      :validate="validate"
      :current-value="model.PowerVentCoversPresent"
      @onChanged="model.PowerVentCoversPresent = $event"
      v-bind:choices="['Yes', 'No']"
      label="Power Vent Covers Present?"
    ></boolean-camera-wrapper-component>
    <boolean-wrapper-component
      id="PowerVentCoversPainted"
      hide-margin
      v-show="model.PowerVentCoversPresent"
      :validate="model.PowerVentCoversPresent"
      :current-value="model.PowerVentCoversPainted"
      @onChanged="model.PowerVentCoversPainted = $event"
      v-bind:choices="['Yes', 'No']"
      label="Painted?"
    ></boolean-wrapper-component>
    <checkbox-wrapper-component
      id="PowerVentCoversMaterial"
      :max-characters="25"
      hide-margin
      v-show="model.PowerVentCoversPresent"
      :validate="model.PowerVentCoversPresent"
      :current-value="String(model.PowerVentCoversMaterial)"
      @onChanged="model.PowerVentCoversMaterial = $event"
      v-bind:choices="masterPowerVentMaterial"
      label="Power Vent Material:"
    ></checkbox-wrapper-component>
    <numeric-wrapper-component
      label="Qty:"
      hide-margin
      v-show="model.PowerVentCoversPresent"
      :validate="model.PowerVentCoversPresent"
      :current-value="model.PowerVentCoversQty"
      @onChanged="ValidateQty($event, 'PowerVentCoversQty', 'PowerVentCoversQtyDamaged')"
    ></numeric-wrapper-component>
    <numeric-wrapper-component
      label="Qty Damaged:"
      hide-margin
      v-show="model.PowerVentCoversPresent"
      :validate="model.PowerVentCoversPresent"
      :current-value="model.PowerVentCoversQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'PowerVentCoversQty', 'PowerVentCoversQtyDamaged')"
    ></numeric-wrapper-component>

    <boolean-camera-wrapper-component
      id="RainDivertersPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.RainDivertersPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.RainDivertersPresent)"
      :validate="validate"
      :current-value="model.RainDivertersPresent"
      @onChanged="model.RainDivertersPresent = $event"
      v-bind:choices="['Yes', 'No']"
      label="Rain Diverter Present?"
    ></boolean-camera-wrapper-component>
    <numeric-wrapper-component
      label="Qty:"
      hide-margin
      v-show="model.RainDivertersPresent"
      :validate="model.RainDivertersPresent"
      :current-value="model.RainDivertersQty"
      @onChanged="ValidateQty($event, 'RainDivertersQty', 'RainDivertersQtyDamaged')"
    ></numeric-wrapper-component>
    <numeric-wrapper-component
      label="Qty Damaged:"
      hide-margin
      v-show="model.RainDivertersPresent"
      :validate="model.RainDivertersPresent"
      :current-value="model.RainDivertersQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'RainDivertersQty', 'RainDivertersQtyDamaged')"
    ></numeric-wrapper-component>

    <boolean-camera-wrapper-component
      id="RidgeVentsPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.RidgeVentsPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.RidgeVentsPresent)"
      :validate="validate"
      :current-value="model.RidgeVentsPresent"
      @onChanged="model.RidgeVentsPresent = $event"
      v-bind:choices="['Yes', 'No']"
      label="Ridge Vents Present?"
    ></boolean-camera-wrapper-component>
    <boolean-wrapper-component
      id="RidgeVentsPainted"
      hide-margin
      v-show="model.RidgeVentsPresent"
      :validate="model.RidgeVentsPresent"
      :current-value="model.RidgeVentsPainted"
      @onChanged="model.RidgeVentsPainted = $event"
      v-bind:choices="['Yes', 'No']"
      label="Painted?"
    ></boolean-wrapper-component>
    <checkbox-wrapper-component
      id="RidgeVentsMaterial"
      :max-characters="25"
      hide-margin
      v-show="model.RidgeVentsPresent"
      :validate="model.RidgeVentsPresent"
      :current-value="String(model.RidgeVentsMaterial)"
      @onChanged="model.RidgeVentsMaterial = $event"
      v-bind:choices="masterRidgeVentMaterial"
      label="Ridge Vent Material:"
    ></checkbox-wrapper-component>
    <numeric-wrapper-component
      label="Qty:"
      hide-margin
      v-show="model.RidgeVentsPresent"
      :validate="model.RidgeVentsPresent"
      :current-value="model.RidgeVentsQty"
      @onChanged="ValidateQty($event, 'RidgeVentsQty', 'RidgeVentsQtyDamaged')"
    ></numeric-wrapper-component>
    <numeric-wrapper-component
      label="Qty Damaged:"
      hide-margin
      v-show="model.RidgeVentsPresent"
      :validate="model.RidgeVentsPresent"
      :current-value="model.RidgeVentsQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'RidgeVentsQty', 'RidgeVentsQtyDamaged')"
    ></numeric-wrapper-component>

    <boolean-camera-wrapper-component
      id="SatelliteDishPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.SatelliteDishPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.SatelliteDishPresent)"
      :validate="validate"
      :current-value="model.SatelliteDishPresent"
      @onChanged="model.SatelliteDishPresent = $event"
      v-bind:choices="['Yes', 'No']"
      label="Satellite Dish Present?"
    ></boolean-camera-wrapper-component>
    <numeric-wrapper-component
      label="Qty:"
      hide-margin
      v-show="model.SatelliteDishPresent"
      :validate="model.SatelliteDishPresent"
      :current-value="model.SatelliteDishQty"
      @onChanged="ValidateQty($event, 'SatelliteDishQty', 'SatelliteDishQtyDamaged')"
    ></numeric-wrapper-component>
    <numeric-wrapper-component
      label="Qty Damaged:"
      hide-margin
      v-show="model.SatelliteDishPresent"
      :validate="model.SatelliteDishPresent"
      :current-value="model.SatelliteDishQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'SatelliteDishQty', 'SatelliteDishQtyDamaged')"
    ></numeric-wrapper-component>

    <boolean-camera-wrapper-component
      id="SkylightsPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.SkylightsPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.SkylightsPresent)"
      :validate="validate"
      :current-value="model.SkylightsPresent"
      @onChanged="model.SkylightsPresent = $event"
      v-bind:choices="['Yes', 'No']"
      label="Skylight Present?"
    ></boolean-camera-wrapper-component>
    <boolean-wrapper-component
      id="SkylightsPainted"
      hide-margin
      v-show="model.SkylightsPresent"
      :validate="model.SkylightsPresent"
      :current-value="model.SkylightsPainted"
      @onChanged="model.SkylightsPainted = $event"
      v-bind:choices="['Yes', 'No']"
      label="Painted?"
    ></boolean-wrapper-component>
    <numeric-wrapper-component
      label="Qty:"
      hide-margin
      v-show="model.SkylightsPresent"
      :validate="model.SkylightsPresent"
      :current-value="model.SkylightsQty"
      @onChanged="ValidateQty($event, 'SkylightsQty', 'SkylightsQtyDamaged')"
    ></numeric-wrapper-component>
    <numeric-wrapper-component
      label="Qty Damaged:"
      hide-margin
      v-show="model.SkylightsPresent"
      :validate="model.SkylightsPresent"
      :current-value="model.SkylightsQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'SkylightsQty', 'SkylightsQtyDamaged')"
    ></numeric-wrapper-component>

    <boolean-camera-wrapper-component
      id="SoffitVentsPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.SoffitVentsPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.SoffitVentsPresent)"
      :validate="validate"
      :current-value="model.SoffitVentsPresent"
      @onChanged="model.SoffitVentsPresent = $event"
      v-bind:choices="['Yes', 'No']"
      label="Soffit Vent Present?"
    ></boolean-camera-wrapper-component>
    <boolean-wrapper-component
      id="SoffitVentsPainted"
      hide-margin
      v-show="model.SoffitVentsPresent"
      :validate="model.SoffitVentsPresent"
      :current-value="model.SoffitVentsPainted"
      @onChanged="model.SoffitVentsPainted = $event"
      v-bind:choices="['Yes', 'No']"
      label="Painted?"
    ></boolean-wrapper-component>
    <numeric-wrapper-component
      label="Qty:"
      hide-margin
      v-show="model.SoffitVentsPresent"
      :validate="model.SoffitVentsPresent"
      :current-value="model.SoffitVentsQty"
      @onChanged="ValidateQty($event, 'SoffitVentsQty', 'SoffitVentsQtyDamaged')"
    ></numeric-wrapper-component>
    <numeric-wrapper-component
      label="Qty Damaged:"
      hide-margin
      v-show="model.SoffitVentsPresent"
      :validate="model.SoffitVentsPresent"
      :current-value="model.SoffitVentsQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'SoffitVentsQty', 'SoffitVentsQtyDamaged')"
    ></numeric-wrapper-component>

    <boolean-camera-wrapper-component
      id="TurbinesPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.TurbinesPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.TurbinesPresent)"
      :validate="validate"
      :current-value="model.TurbinesPresent"
      @onChanged="model.TurbinesPresent = $event"
      v-bind:choices="['Yes', 'No']"
      label="Turbine Present?"
    ></boolean-camera-wrapper-component>
    <boolean-wrapper-component
      id="TurbinesPainted"
      hide-margin
      v-show="model.TurbinesPresent"
      :validate="model.TurbinesPresent"
      :current-value="model.TurbinesPainted"
      @onChanged="model.TurbinesPainted = $event"
      v-bind:choices="['Yes', 'No']"
      label="Painted?"
    ></boolean-wrapper-component>
    <numeric-wrapper-component
      label="Qty:"
      hide-margin
      v-show="model.TurbinesPresent"
      :validate="model.TurbinesPresent"
      :current-value="model.TurbinesQty"
      @onChanged="ValidateQty($event, 'TurbinesQty', 'TurbinesQtyDamaged')"
    ></numeric-wrapper-component>
    <numeric-wrapper-component
      label="Qty Damaged:"
      hide-margin
      v-show="model.TurbinesPresent"
      :validate="model.TurbinesPresent"
      :current-value="model.TurbinesQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'TurbinesQty', 'TurbinesQtyDamaged')"
    ></numeric-wrapper-component>

    <boolean-camera-wrapper-component
      id="ValleyMetalPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.ValleyMetalPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.ValleyMetalPresent)"
      :validate="validate"
      :current-value="model.ValleyMetalPresent"
      @onChanged="model.ValleyMetalPresent = $event"
      v-bind:choices="['Yes', 'No']"
      label="Valley Metal Present?"
    ></boolean-camera-wrapper-component>
    <boolean-wrapper-component
      id="ValleyMetalPainted"
      hide-margin
      v-show="model.ValleyMetalPresent"
      :validate="model.ValleyMetalPresent"
      :current-value="model.ValleyMetalPainted"
      @onChanged="model.ValleyMetalPainted = $event"
      v-bind:choices="['Yes', 'No']"
      label="Painted?"
    ></boolean-wrapper-component>
    <checkbox-wrapper-component
      id="ValleyMetalMaterial"
      :max-characters="25"
      hide-margin
      v-show="model.ValleyMetalPresent"
      :validate="model.ValleyMetalPresent"
      :current-value="String(model.ValleyMetalMaterial)"
      @onChanged="model.ValleyMetalMaterial = $event"
      v-bind:choices="masterValleyMetal"
      label="Valley Metal Material:"
    ></checkbox-wrapper-component>
    <numeric-wrapper-component
      label="Qty:"
      hide-margin
      v-show="model.ValleyMetalPresent"
      :validate="model.ValleyMetalPresent"
      :current-value="model.ValleyMetalQty"
      @onChanged="ValidateQty($event, 'ValleyMetalQty', 'ValleyMetalQtyDamaged')"
    ></numeric-wrapper-component>
    <numeric-wrapper-component
      label="Qty Damaged:"
      hide-margin
      v-show="model.ValleyMetalPresent"
      :validate="model.ValleyMetalPresent"
      :current-value="model.ValleyMetalQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'ValleyMetalQty', 'ValleyMetalQtyDamaged')"
    ></numeric-wrapper-component>

    <boolean-camera-wrapper-component
      id="OtherPresent"
      :disable-camera="fieldAssets.length >= 100"
      :field-assets="ReturnFieldAssets(assetFieldEnum.OtherPresent)"
      :asset-upload-model="ReturnAssetModel(assetFieldEnum.OtherPresent)"
      :validate="validate"
      :current-value="model.OtherPresent"
      @onChanged="model.OtherPresent = $event"
      v-bind:choices="['Yes', 'No']"
      label="Other Present?"
    ></boolean-camera-wrapper-component>
    <numeric-wrapper-component
      label="Qty:"
      hide-margin
      v-show="model.OtherPresent"
      :validate="model.OtherPresent"
      :current-value="model.OtherQty"
      @onChanged="ValidateQty($event, 'OtherQty', 'OtherQtyDamaged')"
    ></numeric-wrapper-component>
    <numeric-wrapper-component
      label="Qty Damaged:"
      hide-margin
      v-show="model.OtherPresent"
      :validate="model.OtherPresent"
      :current-value="model.OtherQtyDamaged"
      @onChanged="ValidateQtyDamaged($event, 'OtherQty', 'OtherQtyDamaged')"
    ></numeric-wrapper-component>
  </div>
</template>

