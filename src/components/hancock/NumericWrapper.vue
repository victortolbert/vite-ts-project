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
        />
      </template>
    </base-layout-component>
  </div>
</template>
