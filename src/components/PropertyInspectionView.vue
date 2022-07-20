<script lang="ts" setup>
import LossLocationComponent from './PropertyInspection/LossLocationComponent.vue'
import InspectionDirectionNorth from './PropertyInspection/InspectionDirectionNorth.vue'
import InspectionOutsideTemp from './PropertyInspection/InspectionOutsideTemp.vue'
import InspectionAllPhotos from './PropertyInspection/InspectionAllPhotos.vue'
import InspectionRoofMaterial from './PropertyInspection/InspectionRoofMaterial.vue'
</script>

<template>
  <article class="px-4 mt-4 max-w-screen-md">
    <div class="grid gap-4">
      <LossLocationComponent class="p-4 bg-white border-2 rounded-lg shadow" />
      <InspectionDirectionNorth class="p-4 bg-white border shadow" />
      <InspectionOutsideTemp class="p-4 bg-white border shadow" />
      <InspectionAllPhotos class="p-4 bg-white border shadow" />
      <InspectionRoofMaterial class="p-4 bg-white border shadow" />
    </div>
    <!-- <inspection-elevation /> -->
    <!-- <inspection-interior /> -->
    <!-- <inspection-roof /> -->
    <!-- <inspection-form /> -->
  </article>
</template>
