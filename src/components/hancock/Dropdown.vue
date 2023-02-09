<template>
  <div class="relative flex items-center w-full">
    <i-heroicons-solid v-if="showLoader" name="refresh" class="absolute z-10 ml-2 animate-spin"></i-heroicons-solid>
    <kendo-dropdownlist
      style="width: 100%; min-width: 160px"
      ref="ddList"
      @change="$emit('onchanged', $event)"
      @dataBound="onDataBound"
      :data-source="dataSource"
      :data-text-field="'text'"
      :data-value-field="'value'"
    ></kendo-dropdownlist>
  </div>
</template>
