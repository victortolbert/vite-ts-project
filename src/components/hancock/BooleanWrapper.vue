<template>
  <div style="width:100%">
    <base-layout-component
      :validate="validate"
      :base-value="String(currentValue)"
      :label="label"
      :hide-margin="hideMargin"
    >
      <template v-slot:component1>
        <boolean-component
          @onChanged="$emit('onchanged', $event)"
          :current-value="currentValue"
          :choices="choices"
        ></boolean-component>
      </template>
    </base-layout-component>
  </div>
</template>
