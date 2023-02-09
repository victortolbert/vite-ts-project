<template id="checkbox-wrapper-template">
  <base-layout-component
    :validate="validate"
    :base-value="String(currentValue)"
    :label="label"
    :hide-margin="hideMargin"
  >
    <template v-slot:component1>
      <checkbox-component
        :current-value="currentValue"
        :allow-multiple="allowMultiple"
        @onChanged="$emit('onchanged', $event)"
        v-bind:choices="choices"
      ></checkbox-component>
    </template>
  </base-layout-component>
</template>
