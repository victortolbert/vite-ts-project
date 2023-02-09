<template>
  <div style="width:100%">
    <base-layout-component
      :validate="validate"
      :base-value="String(currentValue)"
      :label="label"
      :hide-margin="hideMargin"
    >
      <template v-slot:component1>
        <numeric-component
          :decimal="decimal"
          :current-value="currentValue"
          @onChanged="$emit('onchanged', $event)"
        ></numeric-component>
      </template>

      <template v-slot:component2>
        <camera-component
          :disable="disableCamera"
          :current-value="currentValue != null ? String(currentValue) : ''"
          :field-assets="fieldAssets"
          :asset-upload-model="assetUploadModel"
        ></camera-component>
      </template>
    </base-layout-component>
  </div>
</template>
