<template>
  <boolean-wrapper-component
    id="HasCovid"
    :current-value="model.HasCovid"
    @onChanged="model.HasCovid = $event"
    v-bind:choices="['Yes', 'No']"
    v-show="isAllState"
    :validate="false"
    label="Is there anyone who lives in the home who currently has COVID-19 or has had it within the last 14 days, has been exposed to someone with COVID-19 within the past 14 days, or has any symptoms related to COVID-19?"
  ></boolean-wrapper-component>

  <checkbox-camera-wrapper-component
    id="AtticDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.AtticDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.AtticDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.AtticDamaged)"
    @onChanged="model.AtticDamaged = $event"
    v-bind:choices="masterYesNoNa"
    label="Attic:"
  ></checkbox-camera-wrapper-component>
  <textbox-wrapper-component
    id="AtticDescription"
    text-area
    :max-characters="1500"
    hide-margin
    v-show="model.AtticDamaged == 'Yes'"
    :validate="model.AtticDamaged == 'Yes'"
    :current-value="model.AtticDescription"
    @onChanged="model.AtticDescription = $event"
    label="Damage Description:"
  ></textbox-wrapper-component>
  <numeric-wrapper-component
    label="Damage (SQFT):"
    decimal
    hide-margin
    v-show="model.AtticDamaged == 'Yes'"
    :validate="model.AtticDamaged == 'Yes'"
    :current-value="model.AtticSf"
    @onChanged="model.AtticSf = $event"
  ></numeric-wrapper-component>

  <checkbox-camera-wrapper-component
    id="BasementDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.BasementDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.BasementDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.BasementDamaged)"
    @onChanged="model.BasementDamaged = $event"
    v-bind:choices="masterYesNoNa"
    label="Basement:"
  ></checkbox-camera-wrapper-component>
  <textbox-wrapper-component
    id="BasementDescription"
    text-area
    :max-characters="1500"
    hide-margin
    v-show="model.BasementDamaged == 'Yes'"
    :validate="model.BasementDamaged == 'Yes'"
    :current-value="model.BasementDescription"
    @onChanged="model.BasementDescription = $event"
    label="Damage Description:"
  ></textbox-wrapper-component>
  <numeric-wrapper-component
    label="Damage (SQFT):"
    decimal
    hide-margin
    v-show="model.BasementDamaged == 'Yes'"
    :validate="model.BasementDamaged == 'Yes'"
    :current-value="model.BasementSf"
    @onChanged="model.BasementSf = $event"
  ></numeric-wrapper-component>

  <checkbox-camera-wrapper-component
    id="BathroomTwoDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.BathroomTwoDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.BathroomTwoDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.BathroomTwoDamaged)"
    @onChanged="model.BathroomTwoDamaged = $event"
    v-bind:choices="masterYesNoNa"
    label="Bathroom #2:"
  ></checkbox-camera-wrapper-component>
  <textbox-wrapper-component
    id="BathroomTwoDescription"
    text-area
    :max-characters="1500"
    hide-margin
    v-show="model.BathroomTwoDamaged == 'Yes'"
    :validate="model.BathroomTwoDamaged == 'Yes'"
    :current-value="model.BathroomTwoDescription"
    @onChanged="model.BathroomTwoDescription = $event"
    label="Damage Description:"
  ></textbox-wrapper-component>
  <numeric-wrapper-component
    label="Damage (SQFT):"
    decimal
    hide-margin
    v-show="model.BathroomTwoDamaged == 'Yes'"
    :validate="model.BathroomTwoDamaged == 'Yes'"
    :current-value="model.BathroomTwoSf"
    @onChanged="model.BathroomTwoSf = $event"
  ></numeric-wrapper-component>

  <checkbox-camera-wrapper-component
    id="BathroomThreeDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.BathroomThreeDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.BathroomThreeDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.BathroomThreeDamaged)"
    @onChanged="model.BathroomThreeDamaged = $event"
    v-bind:choices="masterYesNoNa"
    label="Bathroom #3:"
  ></checkbox-camera-wrapper-component>
  <textbox-wrapper-component
    id="BathroomThreeDescription"
    text-area
    :max-characters="1500"
    hide-margin
    v-show="model.BathroomThreeDamaged == 'Yes'"
    :validate="model.BathroomThreeDamaged == 'Yes'"
    :current-value="model.BathroomThreeDescription"
    @onChanged="model.BathroomThreeDescription = $event"
    label="Damage Description:"
  ></textbox-wrapper-component>
  <numeric-wrapper-component
    label="Damage (SQFT):"
    decimal
    hide-margin
    v-show="model.BathroomThreeDamaged == 'Yes'"
    :validate="model.BathroomThreeDamaged == 'Yes'"
    :current-value="model.BathroomThreeSf"
    @onChanged="model.BathroomThreeSf = $event"
  ></numeric-wrapper-component>

  <checkbox-camera-wrapper-component
    id="BedroomTwoDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.BedroomTwoDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.BedroomTwoDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.BedroomTwoDamaged)"
    @onChanged="model.BedroomTwoDamaged = $event"
    v-bind:choices="masterYesNoNa"
    label="Bedroom #2:"
  ></checkbox-camera-wrapper-component>
  <textbox-wrapper-component
    id="BedroomTwoDescription"
    text-area
    :max-characters="1500"
    hide-margin
    v-show="model.BedroomTwoDamaged == 'Yes'"
    :validate="model.BedroomTwoDamaged == 'Yes'"
    :current-value="model.BedroomTwoDescription"
    @onChanged="model.BedroomTwoDescription = $event"
    label="Damage Description:"
  ></textbox-wrapper-component>
  <numeric-wrapper-component
    label="Damage (SQFT):"
    decimal
    hide-margin
    v-show="model.BedroomTwoDamaged == 'Yes'"
    :validate="model.BedroomTwoDamaged == 'Yes'"
    :current-value="model.BedroomTwoSf"
    @onChanged="model.BedroomTwoSf = $event"
  ></numeric-wrapper-component>

  <checkbox-camera-wrapper-component
    id="BedroomTwoClosetDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.BedroomTwoClosetDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.BedroomTwoClosetDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.BedroomTwoClosetDamaged)"
    @onChanged="model.BedroomTwoClosetDamaged = $event"
    v-bind:choices="masterYesNoNa"
    label="Bedroom #2 Closet:"
  ></checkbox-camera-wrapper-component>
  <textbox-wrapper-component
    id="BedroomTwoClosetDescription"
    text-area
    :max-characters="1500"
    hide-margin
    v-show="model.BedroomTwoClosetDamaged == 'Yes'"
    :validate="model.BedroomTwoClosetDamaged == 'Yes'"
    :current-value="model.BedroomTwoClosetDescription"
    @onChanged="model.BedroomTwoClosetDescription = $event"
    label="Damage Description:"
  ></textbox-wrapper-component>
  <numeric-wrapper-component
    label="Damage (SQFT):"
    decimal
    hide-margin
    v-show="model.BedroomTwoClosetDamaged == 'Yes'"
    :validate="model.BedroomTwoClosetDamaged == 'Yes'"
    :current-value="model.BedroomTwoClosetSf"
    @onChanged="model.BedroomTwoClosetSf = $event"
  ></numeric-wrapper-component>

  <checkbox-camera-wrapper-component
    id="BedroomThreeDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.BedroomThreeDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.BedroomThreeDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.BedroomThreeDamaged)"
    @onChanged="model.BedroomThreeDamaged = $event"
    v-bind:choices="masterYesNoNa"
    label="Bedroom #3:"
  ></checkbox-camera-wrapper-component>
  <textbox-wrapper-component
    id="BedroomThreeDescription"
    text-area
    :max-characters="1500"
    hide-margin
    v-show="model.BedroomThreeDamaged == 'Yes'"
    :validate="model.BedroomThreeDamaged == 'Yes'"
    :current-value="model.BedroomThreeDescription"
    @onChanged="model.BedroomThreeDescription = $event"
    label="Damage Description:"
  ></textbox-wrapper-component>
  <numeric-wrapper-component
    label="Damage (SQFT):"
    decimal
    hide-margin
    v-show="model.BedroomThreeDamaged == 'Yes'"
    :validate="model.BedroomThreeDamaged == 'Yes'"
    :current-value="model.BedroomThreeSf"
    @onChanged="model.BedroomThreeSf = $event"
  ></numeric-wrapper-component>

  <checkbox-camera-wrapper-component
    id="BedroomThreeClosetDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.BedroomThreeClosetDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.BedroomThreeClosetDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.BedroomThreeClosetDamaged)"
    @onChanged="model.BedroomThreeClosetDamaged = $event"
    v-bind:choices="masterYesNoNa"
    label="Bedroom #3 Closet:"
  ></checkbox-camera-wrapper-component>
  <textbox-wrapper-component
    id="BedroomThreeClosetDescription"
    text-area
    :max-characters="1500"
    hide-margin
    v-show="model.BedroomThreeClosetDamaged == 'Yes'"
    :validate="model.BedroomThreeClosetDamaged == 'Yes'"
    :current-value="model.BedroomThreeClosetDescription"
    @onChanged="model.BedroomThreeClosetDescription = $event"
    label="Damage Description:"
  ></textbox-wrapper-component>
  <numeric-wrapper-component
    label="Damage (SQFT):"
    decimal
    hide-margin
    v-show="model.BedroomThreeClosetDamaged == 'Yes'"
    :validate="model.BedroomThreeClosetDamaged == 'Yes'"
    :current-value="model.BedroomThreeClosetSf"
    @onChanged="model.BedroomThreeClosetSf = $event"
  ></numeric-wrapper-component>

  <checkbox-camera-wrapper-component
    id="BedroomFourDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.BedroomFourDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.BedroomFourDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.BedroomFourDamaged)"
    @onChanged="model.BedroomFourDamaged = $event"
    v-bind:choices="masterYesNoNa"
    label="Bedroom #4:"
  ></checkbox-camera-wrapper-component>
  <textbox-wrapper-component
    id="BedroomFourDescription"
    text-area
    :max-characters="1500"
    hide-margin
    v-show="model.BedroomFourDamaged == 'Yes'"
    :validate="model.BedroomFourDamaged == 'Yes'"
    :current-value="model.BedroomFourDescription"
    @onChanged="model.BedroomFourDescription = $event"
    label="Damage Description:"
  ></textbox-wrapper-component>
  <numeric-wrapper-component
    label="Damage (SQFT):"
    decimal
    hide-margin
    v-show="model.BedroomFourDamaged == 'Yes'"
    :validate="model.BedroomFourDamaged == 'Yes'"
    :current-value="model.BedroomFourSf"
    @onChanged="model.BedroomFourSf = $event"
  ></numeric-wrapper-component>

  <checkbox-camera-wrapper-component
    id="BedroomFourClosetDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.BedroomFourClosetDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.BedroomFourClosetDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.BedroomFourClosetDamaged)"
    @onChanged="model.BedroomFourClosetDamaged = $event"
    v-bind:choices="masterYesNoNa"
    label="Bedroom #4 Closet:"
  ></checkbox-camera-wrapper-component>
  <textbox-wrapper-component
    id="BedroomFourClosetDescription"
    text-area
    :max-characters="1500"
    hide-margin
    v-show="model.BedroomFourClosetDamaged == 'Yes'"
    :validate="model.BedroomFourClosetDamaged == 'Yes'"
    :current-value="model.BedroomFourClosetDescription"
    @onChanged="model.BedroomFourClosetDescription = $event"
    label="Damage Description:"
  ></textbox-wrapper-component>
  <numeric-wrapper-component
    label="Damage (SQFT):"
    decimal
    hide-margin
    v-show="model.BedroomFourClosetDamaged == 'Yes'"
    :validate="model.BedroomFourClosetDamaged == 'Yes'"
    :current-value="model.BedroomFourClosetSf"
    @onChanged="model.BedroomFourClosetSf = $event"
  ></numeric-wrapper-component>

  <checkbox-camera-wrapper-component
    id="BreakfastAreaDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.BreakfastAreaDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.BreakfastAreaDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.BreakfastAreaDamaged)"
    @onChanged="model.BreakfastAreaDamaged = $event"
    v-bind:choices="masterYesNoNa"
    label="Breakfast Area:"
  ></checkbox-camera-wrapper-component>
  <textbox-wrapper-component
    id="BreakfastAreaDescription"
    text-area
    :max-characters="1500"
    hide-margin
    v-show="model.BreakfastAreaDamaged == 'Yes'"
    :validate="model.BreakfastAreaDamaged == 'Yes'"
    :current-value="model.BreakfastAreaDescription"
    @onChanged="model.BreakfastAreaDescription = $event"
    label="Damage Description:"
  ></textbox-wrapper-component>
  <numeric-wrapper-component
    label="Damage (SQFT):"
    decimal
    hide-margin
    v-show="model.BreakfastAreaDamaged == 'Yes'"
    :validate="model.BreakfastAreaDamaged == 'Yes'"
    :current-value="model.BreakfastAreaSf"
    @onChanged="model.BreakfastAreaSf = $event"
  ></numeric-wrapper-component>

  <checkbox-camera-wrapper-component
    id="ContentsDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.ContentsDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.ContentsDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.ContentsDamaged)"
    @onChanged="model.ContentsDamaged = $event"
    v-bind:choices="masterYesNoNa"
    label="Contents:"
  ></checkbox-camera-wrapper-component>
  <textbox-wrapper-component
    id="ContentsDescription"
    text-area
    :max-characters="1500"
    hide-margin
    v-show="model.ContentsDamaged == 'Yes'"
    :validate="model.ContentsDamaged == 'Yes'"
    :current-value="model.ContentsDescription"
    @onChanged="model.ContentsDescription = $event"
    label="Damage Description:"
  ></textbox-wrapper-component>

  <checkbox-camera-wrapper-component
    id="CrawlSpaceDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.CrawlSpaceDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.CrawlSpaceDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.CrawlSpaceDamaged)"
    @onChanged="model.CrawlSpaceDamaged = $event"
    v-bind:choices="masterYesNoNa"
    label="Crawlspace:"
  ></checkbox-camera-wrapper-component>
  <textbox-wrapper-component
    id="CrawlSpaceDescription"
    text-area
    :max-characters="1500"
    hide-margin
    v-show="model.CrawlSpaceDamaged == 'Yes'"
    :validate="model.CrawlSpaceDamaged == 'Yes'"
    :current-value="model.CrawlSpaceDescription"
    @onChanged="model.CrawlSpaceDescription = $event"
    label="Damage Description:"
  ></textbox-wrapper-component>
  <numeric-wrapper-component
    label="Damage (SQFT):"
    decimal
    hide-margin
    v-show="model.CrawlSpaceDamaged == 'Yes'"
    :validate="model.CrawlSpaceDamaged == 'Yes'"
    :current-value="model.CrawlSpaceSf"
    @onChanged="model.CrawlSpaceSf = $event"
  ></numeric-wrapper-component>

  <checkbox-camera-wrapper-component
    id="DiningRoomDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.DiningRoomDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.DiningRoomDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.DiningRoomDamaged)"
    @onChanged="model.DiningRoomDamaged = $event"
    v-bind:choices="masterYesNoNa"
    label="Dining Room:"
  ></checkbox-camera-wrapper-component>
  <textbox-wrapper-component
    id="DiningRoomDescription"
    text-area
    :max-characters="1500"
    hide-margin
    v-show="model.DiningRoomDamaged == 'Yes'"
    :validate="model.DiningRoomDamaged == 'Yes'"
    :current-value="model.DiningRoomDescription"
    @onChanged="model.DiningRoomDescription = $event"
    label="Damage Description:"
  ></textbox-wrapper-component>
  <numeric-wrapper-component
    label="Damage (SQFT):"
    decimal
    hide-margin
    v-show="model.DiningRoomDamaged == 'Yes'"
    :validate="model.DiningRoomDamaged == 'Yes'"
    :current-value="model.DiningRoomSf"
    @onChanged="model.DiningRoomSf = $event"
  ></numeric-wrapper-component>

  <checkbox-camera-wrapper-component
    id="FamilyRoomDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.FamilyRoomDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.FamilyRoomDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.FamilyRoomDamaged)"
    @onChanged="model.FamilyRoomDamaged = $event"
    v-bind:choices="masterYesNoNa"
    label="Family Room:"
  ></checkbox-camera-wrapper-component>
  <textbox-wrapper-component
    id="FamilyRoomDescription"
    text-area
    :max-characters="1500"
    hide-margin
    v-show="model.FamilyRoomDamaged == 'Yes'"
    :validate="model.FamilyRoomDamaged == 'Yes'"
    :current-value="model.FamilyRoomDescription"
    @onChanged="model.FamilyRoomDescription = $event"
    label="Damage Description:"
  ></textbox-wrapper-component>
  <numeric-wrapper-component
    label="Damage (SQFT):"
    decimal
    hide-margin
    v-show="model.FamilyRoomDamaged == 'Yes'"
    :validate="model.FamilyRoomDamaged == 'Yes'"
    :current-value="model.FamilyRoomSf"
    @onChanged="model.FamilyRoomSf = $event"
  ></numeric-wrapper-component>

  <checkbox-camera-wrapper-component
    id="FoyerDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.FoyerDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.FoyerDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.FoyerDamaged)"
    @onChanged="model.FoyerDamaged = $event"
    v-bind:choices="masterYesNoNa"
    label="Foyer:"
  ></checkbox-camera-wrapper-component>
  <textbox-wrapper-component
    id="FoyerDescription"
    text-area
    :max-characters="1500"
    hide-margin
    v-show="model.FoyerDamaged == 'Yes'"
    :validate="model.FoyerDamaged == 'Yes'"
    :current-value="model.FoyerDescription"
    @onChanged="model.FoyerDescription = $event"
    label="Damage Description:"
  ></textbox-wrapper-component>
  <numeric-wrapper-component
    label="Damage (SQFT):"
    decimal
    hide-margin
    v-show="model.FoyerDamaged == 'Yes'"
    :validate="model.FoyerDamaged == 'Yes'"
    :current-value="model.FoyerSf"
    @onChanged="model.FoyerSf = $event"
  ></numeric-wrapper-component>

  <checkbox-camera-wrapper-component
    id="GameRoomDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.GameRoomDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.GameRoomDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.GameRoomDamaged)"
    @onChanged="model.GameRoomDamaged = $event"
    v-bind:choices="masterYesNoNa"
    label="Game Room:"
  ></checkbox-camera-wrapper-component>
  <textbox-wrapper-component
    id="GameRoomDescription"
    text-area
    :max-characters="1500"
    hide-margin
    v-show="model.GameRoomDamaged == 'Yes'"
    :validate="model.GameRoomDamaged == 'Yes'"
    :current-value="model.GameRoomDescription"
    @onChanged="model.GameRoomDescription = $event"
    label="Damage Description:"
  ></textbox-wrapper-component>
  <numeric-wrapper-component
    label="Damage (SQFT):"
    decimal
    hide-margin
    v-show="model.GameRoomDamaged == 'Yes'"
    :validate="model.GameRoomDamaged == 'Yes'"
    :current-value="model.GameRoomSf"
    @onChanged="model.GameRoomSf = $event"
  ></numeric-wrapper-component>

  <checkbox-camera-wrapper-component
    id="HallDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.HallDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.HallDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.HallDamaged)"
    @onChanged="model.HallDamaged = $event"
    v-bind:choices="masterYesNoNa"
    label="Hall:"
  ></checkbox-camera-wrapper-component>
  <textbox-wrapper-component
    id="HallDescription"
    text-area
    :max-characters="1500"
    hide-margin
    v-show="model.HallDamaged == 'Yes'"
    :validate="model.HallDamaged == 'Yes'"
    :current-value="model.HallDescription"
    @onChanged="model.HallDescription = $event"
    label="Damage Description:"
  ></textbox-wrapper-component>
  <numeric-wrapper-component
    label="Damage (SQFT):"
    decimal
    hide-margin
    v-show="model.HallDamaged == 'Yes'"
    :validate="model.HallDamaged == 'Yes'"
    :current-value="model.HallSf"
    @onChanged="model.HallSf = $event"
  ></numeric-wrapper-component>

  <checkbox-camera-wrapper-component
    id="HallClosetDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.HallClosetDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.HallClosetDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.HallClosetDamaged)"
    @onChanged="model.HallClosetDamaged = $event"
    v-bind:choices="masterYesNoNa"
    label="Hall Closet:"
  ></checkbox-camera-wrapper-component>
  <textbox-wrapper-component
    id="HallClosetDescription"
    text-area
    :max-characters="1500"
    hide-margin
    v-show="model.HallClosetDamaged == 'Yes'"
    :validate="model.HallClosetDamaged == 'Yes'"
    :current-value="model.HallClosetDescription"
    @onChanged="model.HallClosetDescription = $event"
    label="Damage Description:"
  ></textbox-wrapper-component>
  <numeric-wrapper-component
    label="Damage (SQFT):"
    decimal
    hide-margin
    v-show="model.HallClosetDamaged == 'Yes'"
    :validate="model.HallClosetDamaged == 'Yes'"
    :current-value="model.HallClosetSf"
    @onChanged="model.HallClosetSf = $event"
  ></numeric-wrapper-component>

  <checkbox-camera-wrapper-component
    id="KitchenDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.KitchenDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.KitchenDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.KitchenDamaged)"
    @onChanged="model.KitchenDamaged = $event"
    v-bind:choices="masterYesNoNa"
    label="Kitchen:"
  ></checkbox-camera-wrapper-component>
  <textbox-wrapper-component
    id="KitchenDescription"
    text-area
    :max-characters="1500"
    hide-margin
    v-show="model.KitchenDamaged == 'Yes'"
    :validate="model.KitchenDamaged == 'Yes'"
    :current-value="model.KitchenDescription"
    @onChanged="model.KitchenDescription = $event"
    label="Damage Description:"
  ></textbox-wrapper-component>
  <numeric-wrapper-component
    label="Damage (SQFT):"
    decimal
    hide-margin
    v-show="model.KitchenDamaged == 'Yes'"
    :validate="model.KitchenDamaged == 'Yes'"
    :current-value="model.KitchenSf"
    @onChanged="model.KitchenSf = $event"
  ></numeric-wrapper-component>

  <checkbox-camera-wrapper-component
    id="LivingRoomDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.LivingRoomDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.LivingRoomDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.LivingRoomDamaged)"
    @onChanged="model.LivingRoomDamaged = $event"
    v-bind:choices="masterYesNoNa"
    label="Living Room:"
  ></checkbox-camera-wrapper-component>
  <textbox-wrapper-component
    id="LivingRoomDescription"
    text-area
    :max-characters="1500"
    hide-margin
    v-show="model.LivingRoomDamaged == 'Yes'"
    :validate="model.LivingRoomDamaged == 'Yes'"
    :current-value="model.LivingRoomDescription"
    @onChanged="model.LivingRoomDescription = $event"
    label="Damage Description:"
  ></textbox-wrapper-component>
  <numeric-wrapper-component
    label="Damage (SQFT):"
    decimal
    hide-margin
    v-show="model.LivingRoomDamaged == 'Yes'"
    :validate="model.LivingRoomDamaged == 'Yes'"
    :current-value="model.LivingRoomSf"
    @onChanged="model.LivingRoomSf = $event"
  ></numeric-wrapper-component>

  <checkbox-camera-wrapper-component
    id="MasterBedroomDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.MasterBedroomDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.MasterBedroomDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.MasterBedroomDamaged)"
    @onChanged="model.MasterBedroomDamaged = $event"
    v-bind:choices="masterYesNoNa"
    label="Master Bedroom:"
  ></checkbox-camera-wrapper-component>
  <textbox-wrapper-component
    id="MasterBedroomDescription"
    text-area
    :max-characters="1500"
    hide-margin
    v-show="model.MasterBedroomDamaged == 'Yes'"
    :validate="model.MasterBedroomDamaged == 'Yes'"
    :current-value="model.MasterBedroomDescription"
    @onChanged="model.MasterBedroomDescription = $event"
    label="Damage Description:"
  ></textbox-wrapper-component>
  <numeric-wrapper-component
    label="Damage (SQFT):"
    decimal
    hide-margin
    v-show="model.MasterBedroomDamaged == 'Yes'"
    :validate="model.MasterBedroomDamaged == 'Yes'"
    :current-value="model.MasterBedroomSf"
    @onChanged="model.MasterBedroomSf = $event"
  ></numeric-wrapper-component>

  <checkbox-camera-wrapper-component
    id="MasterClosetDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.MasterClosetDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.MasterClosetDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.MasterClosetDamaged)"
    @onChanged="model.MasterClosetDamaged = $event"
    v-bind:choices="masterYesNoNa"
    label="Master Bedroom Closet:"
  ></checkbox-camera-wrapper-component>
  <textbox-wrapper-component
    id="MasterClosetDescription"
    text-area
    :max-characters="1500"
    hide-margin
    v-show="model.MasterClosetDamaged == 'Yes'"
    :validate="model.MasterClosetDamaged == 'Yes'"
    :current-value="model.MasterClosetDescription"
    @onChanged="model.MasterClosetDescription = $event"
    label="Damage Description:"
  ></textbox-wrapper-component>
  <numeric-wrapper-component
    label="Damage (SQFT):"
    decimal
    hide-margin
    v-show="model.MasterClosetDamaged == 'Yes'"
    :validate="model.MasterClosetDamaged == 'Yes'"
    :current-value="model.MasterClosetSf"
    @onChanged="model.MasterClosetSf = $event"
  ></numeric-wrapper-component>

  <checkbox-camera-wrapper-component
    id="MasterBathroomDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.MasterBathroomDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.MasterBathroomDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.MasterBathroomDamaged)"
    @onChanged="model.MasterBathroomDamaged = $event"
    v-bind:choices="masterYesNoNa"
    label="Master Bathroom:"
  ></checkbox-camera-wrapper-component>
  <textbox-wrapper-component
    id="MasterBathroomDescription"
    text-area
    :max-characters="1500"
    hide-margin
    v-show="model.MasterBathroomDamaged == 'Yes'"
    :validate="model.MasterBathroomDamaged == 'Yes'"
    :current-value="model.MasterBathroomDescription"
    @onChanged="model.MasterBathroomDescription = $event"
    label="Damage Description:"
  ></textbox-wrapper-component>
  <numeric-wrapper-component
    label="Damage (SQFT):"
    decimal
    hide-margin
    v-show="model.MasterBathroomDamaged == 'Yes'"
    :validate="model.MasterBathroomDamaged == 'Yes'"
    :current-value="model.MasterBathroomSf"
    @onChanged="model.MasterBathroomSf = $event"
  ></numeric-wrapper-component>

  <checkbox-camera-wrapper-component
    id="OfficeDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.OfficeDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.OfficeDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.OfficeDamaged)"
    @onChanged="model.OfficeDamaged = $event"
    v-bind:choices="masterYesNoNa"
    label="Office / Study:"
  ></checkbox-camera-wrapper-component>
  <textbox-wrapper-component
    id="OfficeDescription"
    text-area
    :max-characters="1500"
    hide-margin
    v-show="model.OfficeDamaged == 'Yes'"
    :validate="model.OfficeDamaged == 'Yes'"
    :current-value="model.OfficeDescription"
    @onChanged="model.OfficeDescription = $event"
    label="Damage Description:"
  ></textbox-wrapper-component>
  <numeric-wrapper-component
    label="Damage (SQFT):"
    decimal
    hide-margin
    v-show="model.OfficeDamaged == 'Yes'"
    :validate="model.OfficeDamaged == 'Yes'"
    :current-value="model.OfficeSf"
    @onChanged="model.OfficeSf = $event"
  ></numeric-wrapper-component>

  <checkbox-camera-wrapper-component
    id="PantryDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.PantryDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.PantryDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.PantryDamaged)"
    @onChanged="model.PantryDamaged = $event"
    v-bind:choices="masterYesNoNa"
    label="Pantry:"
  ></checkbox-camera-wrapper-component>
  <textbox-wrapper-component
    id="PantryDescription"
    text-area
    :max-characters="1500"
    hide-margin
    v-show="model.PantryDamaged == 'Yes'"
    :validate="model.PantryDamaged == 'Yes'"
    :current-value="model.PantryDescription"
    @onChanged="model.PantryDescription = $event"
    label="Damage Description:"
  ></textbox-wrapper-component>
  <numeric-wrapper-component
    label="Damage (SQFT):"
    decimal
    hide-margin
    v-show="model.PantryDamaged == 'Yes'"
    :validate="model.PantryDamaged == 'Yes'"
    :current-value="model.PantrySf"
    @onChanged="model.PantrySf = $event"
  ></numeric-wrapper-component>

  <checkbox-camera-wrapper-component
    id="UtilityDamaged"
    :disable-camera="fieldAssets.length >= 100"
    :validate="validate"
    :current-value="model.UtilityDamaged"
    :field-assets="ReturnFieldAssets(assetFieldEnum.UtilityDamaged)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.UtilityDamaged)"
    @onChanged="model.UtilityDamaged = $event"
    v-bind:choices="masterYesNoNa"
    label="Utility:"
  ></checkbox-camera-wrapper-component>
  <textbox-wrapper-component
    id="UtilityDescription"
    text-area
    :max-characters="1500"
    hide-margin
    v-show="model.UtilityDamaged == 'Yes'"
    :validate="model.UtilityDamaged == 'Yes'"
    :current-value="model.UtilityDescription"
    @onChanged="model.UtilityDescription = $event"
    label="Damage Description:"
  ></textbox-wrapper-component>
  <numeric-wrapper-component
    label="Damage (SQFT):"
    decimal
    hide-margin
    v-show="model.UtilityDamaged == 'Yes'"
    :validate="model.UtilityDamaged == 'Yes'"
    :current-value="model.UtilitySf"
    @onChanged="model.UtilitySf = $event"
  ></numeric-wrapper-component>

  <textbox-camera-wrapper-component
    id="AdditionalOneArea"
    :disable-camera="fieldAssets.length >= 100"
    :max-characters="100"
    :validate="false"
    :field-assets="ReturnFieldAssets(assetFieldEnum.AdditionalItem1Damage)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.AdditionalItem1Damage)"
    :current-value="model.AdditionalOneArea"
    @onChanged="model.AdditionalOneArea = $event"
    label="Area/Item:"
  ></textbox-camera-wrapper-component>
  <checkbox-wrapper-component
    id="AdditionalOneDamaged"
    hide-margin
    v-show="model.AdditionalOneArea.length > 0"
    :validate="model.AdditionalOneArea.length > 0"
    :current-value="model.AdditionalOneDamaged"
    @onChanged="model.AdditionalOneDamaged = $event"
    v-bind:choices="masterYesNo"
    label="Was There Damage?"
  ></checkbox-wrapper-component>
  <textbox-wrapper-component
    id="AdditionalOneDescription"
    hide-margin
    v-show="model.AdditionalOneDamaged == 'Yes'"
    :validate="model.AdditionalOneDamaged == 'Yes'"
    text-area
    :max-characters="1500"
    :current-value="model.AdditionalOneDescription"
    @onChanged="model.AdditionalOneDescription = $event"
    label="Damage Description:"
  ></textbox-wrapper-component>
  <numeric-wrapper-component
    id="AdditionalOneSf"
    hide-margin
    v-show="model.AdditionalOneDamaged == 'Yes'"
    :validate="model.AdditionalOneDamaged == 'Yes'"
    :current-value="model.AdditionalOneSf"
    @onChanged="model.AdditionalOneSf = $event"
    label="Damage (SQFT):"
    decimal
  ></numeric-wrapper-component>

  <textbox-camera-wrapper-component
    id="AdditionalTwoArea"
    :disable-camera="fieldAssets.length >= 100"
    :max-characters="100"
    :validate="false"
    :field-assets="ReturnFieldAssets(assetFieldEnum.AdditionalItem2Damage)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.AdditionalItem2Damage)"
    :current-value="model.AdditionalTwoArea"
    @onChanged="model.AdditionalTwoArea = $event"
    label="Area/Item:"
  ></textbox-camera-wrapper-component>
  <checkbox-wrapper-component
    id="AdditionalTwoDamaged"
    hide-margin
    v-show="model.AdditionalTwoArea.length > 0"
    :validate="model.AdditionalTwoArea.length > 0"
    :current-value="model.AdditionalTwoDamaged"
    @onChanged="model.AdditionalTwoDamaged = $event"
    v-bind:choices="masterYesNo"
    label="Was There Damage?"
  ></checkbox-wrapper-component>
  <textbox-wrapper-component
    id="AdditionalTwoDescription"
    hide-margin
    v-show="model.AdditionalTwoDamaged == 'Yes'"
    :validate="model.AdditionalTwoDamaged == 'Yes'"
    text-area
    :max-characters="1500"
    :current-value="model.AdditionalTwoDescription"
    @onChanged="model.AdditionalTwoDescription = $event"
    label="Damage Description:"
  ></textbox-wrapper-component>
  <numeric-wrapper-component
    id="AdditionalTwoSf"
    hide-margin
    v-show="model.AdditionalTwoDamaged == 'Yes'"
    :validate="model.AdditionalTwoDamaged == 'Yes'"
    :current-value="model.AdditionalTwoSf"
    @onChanged="model.AdditionalTwoSf = $event"
    label="Damage (SQFT):"
    decimal
  ></numeric-wrapper-component>

  <textbox-camera-wrapper-component
    id="AdditionalThreeArea"
    :disable-camera="fieldAssets.length >= 100"
    :max-characters="100"
    :validate="false"
    :field-assets="ReturnFieldAssets(assetFieldEnum.AdditionalItem3Damage)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.AdditionalItem3Damage)"
    :current-value="model.AdditionalThreeArea"
    @onChanged="model.AdditionalThreeArea = $event"
    label="Area/Item:"
  ></textbox-camera-wrapper-component>
  <checkbox-wrapper-component
    id="AdditionalThreeDamaged"
    hide-margin
    v-show="model.AdditionalThreeArea.length > 0"
    :validate="model.AdditionalThreeArea.length > 0"
    :current-value="model.AdditionalThreeDamaged"
    @onChanged="model.AdditionalThreeDamaged = $event"
    v-bind:choices="masterYesNo"
    label="Was There Damage?"
  ></checkbox-wrapper-component>
  <textbox-wrapper-component
    id="AdditionalThreeDescription"
    hide-margin
    v-show="model.AdditionalThreeDamaged == 'Yes'"
    :validate="model.AdditionalThreeDamaged == 'Yes'"
    text-area
    :max-characters="1500"
    :current-value="model.AdditionalThreeDescription"
    @onChanged="model.AdditionalThreeDescription = $event"
    label="Damage Description:"
  ></textbox-wrapper-component>
  <numeric-wrapper-component
    id="AdditionalThreeSf"
    hide-margin
    v-show="model.AdditionalThreeDamaged == 'Yes'"
    :validate="model.AdditionalThreeDamaged == 'Yes'"
    :current-value="model.AdditionalThreeSf"
    @onChanged="model.AdditionalThreeSf = $event"
    label="Damage (SQFT):"
    decimal
  ></numeric-wrapper-component>

  <textbox-camera-wrapper-component
    id="AdditionalFourArea"
    :disable-camera="fieldAssets.length >= 100"
    :max-characters="100"
    :validate="false"
    :field-assets="ReturnFieldAssets(assetFieldEnum.AdditionalItem4Damage)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.AdditionalItem4Damage)"
    :current-value="model.AdditionalFourArea"
    @onChanged="model.AdditionalFourArea = $event"
    label="Area/Item:"
  ></textbox-camera-wrapper-component>
  <checkbox-wrapper-component
    id="AdditionalFourDamaged"
    hide-margin
    v-show="model.AdditionalFourArea.length > 0"
    :validate="model.AdditionalFourArea.length > 0"
    :current-value="model.AdditionalFourDamaged"
    @onChanged="model.AdditionalFourDamaged = $event"
    v-bind:choices="masterYesNo"
    label="Was There Damage?"
  ></checkbox-wrapper-component>
  <textbox-wrapper-component
    id="AdditionalFourDescription"
    hide-margin
    v-show="model.AdditionalFourDamaged == 'Yes'"
    :validate="model.AdditionalFourDamaged == 'Yes'"
    text-area
    :max-characters="1500"
    :current-value="model.AdditionalFourDescription"
    @onChanged="model.AdditionalFourDescription = $event"
    label="Damage Description:"
  ></textbox-wrapper-component>
  <numeric-wrapper-component
    id="AdditionalFourSf"
    hide-margin
    v-show="model.AdditionalFourDamaged == 'Yes'"
    :validate="model.AdditionalFourDamaged == 'Yes'"
    :current-value="model.AdditionalFourSf"
    @onChanged="model.AdditionalFourSf = $event"
    label="Damage (SQFT):"
    decimal
  ></numeric-wrapper-component>

  <textbox-camera-wrapper-component
    id="AdditionalFiveArea"
    :disable-camera="fieldAssets.length >= 100"
    :max-characters="100"
    :validate="false"
    :field-assets="ReturnFieldAssets(assetFieldEnum.AdditionalItem5Damage)"
    :asset-upload-model="ReturnAssetModel(assetFieldEnum.AdditionalItem5Damage)"
    :current-value="model.AdditionalFiveArea"
    @onChanged="model.AdditionalFiveArea = $event"
    label="Area/Item:"
  ></textbox-camera-wrapper-component>
  <checkbox-wrapper-component
    id="AdditionalFiveDamaged"
    hide-margin
    v-show="model.AdditionalFiveArea.length > 0"
    :validate="model.AdditionalFiveArea.length > 0"
    :current-value="model.AdditionalFiveDamaged"
    @onChanged="model.AdditionalFiveDamaged = $event"
    v-bind:choices="masterYesNo"
    label="Was There Damage?"
  ></checkbox-wrapper-component>
  <textbox-wrapper-component
    id="AdditionalFiveDescription"
    hide-margin
    v-show="model.AdditionalFiveDamaged == 'Yes'"
    :validate="model.AdditionalFiveDamaged == 'Yes'"
    text-area
    :max-characters="1500"
    :current-value="model.AdditionalFiveDescription"
    @onChanged="model.AdditionalFiveDescription = $event"
    label="Damage Description:"
  ></textbox-wrapper-component>
  <numeric-wrapper-component
    id="AdditionalFiveSf"
    hide-margin
    v-show="model.AdditionalFiveDamaged == 'Yes'"
    :validate="model.AdditionalFiveDamaged == 'Yes'"
    :current-value="model.AdditionalFiveSf"
    @onChanged="model.AdditionalFiveSf = $event"
    label="Damage (SQFT):"
    decimal
  ></numeric-wrapper-component>
</template>
