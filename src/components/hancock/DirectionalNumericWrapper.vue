<template>
  <div style="width:100%">
    <base-layout-component
      :validate="validate"
      :base-value="SendBase()"
      :label="label"
      :hide-margin="hideMargin"
    >
      <template v-slot:component1>
        <numeric-component
          :decimal="decimal"
          :label="slotALabel"
          :current-value="slotAValue"
          @onChanged="$emit('onslotachanged', $event)"
        ></numeric-component>
      </template>
      <template v-slot:component2>
        <numeric-component
          :decimal="decimal"
          :label="slotBLabel"
          :current-value="slotBValue"
          @onChanged="$emit('onslotbchanged', $event)"
        ></numeric-component>
      </template>
      <template v-slot:component3>
        <numeric-component
          :decimal="decimal"
          :label="slotCLabel"
          :current-value="slotCValue"
          @onChanged="$emit('onslotcchanged', $event)"
        ></numeric-component>
      </template>
      <template v-slot:component4>
        <numeric-component
          :decimal="decimal"
          :label="slotDLabel"
          :current-value="slotDValue"
          @onChanged="$emit('onslotdchanged', $event)"
        ></numeric-component>
      </template>
    </base-layout-component>
  </div>
</template>
