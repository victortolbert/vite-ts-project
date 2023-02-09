<template>
  <div style="width:100%">
    <base-layout-component
      :validate="validate"
      :base-value="String(currentValue)"
      :label="label"
      :hide-margin="hideMargin"
    >
      <template v-slot:component1>
        <checkbox-component
          :current-value="currentValue"
          @onChanged="$emit('onchanged', $event)"
          v-bind:choices="choices"
        ></checkbox-component>
      </template>
      <template v-slot:component2>
        <camera-component
          :disable="disableCamera"
          :current-value="currentValue"
          :field-assets="fieldAssets"
          :asset-upload-model="assetUploadModel"
        ></camera-component>
      </template>
    </base-layout-component>
  </div>
</template>
