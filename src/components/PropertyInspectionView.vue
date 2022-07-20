<script lang="ts" setup>
import LossLocationComponent from './PropertyInspection/LossLocationComponent.vue'
import InspectionDirectionNorth from './PropertyInspection/InspectionDirectionNorth.vue'
import InspectionOutsideTemp from './PropertyInspection/InspectionOutsideTemp.vue'
import InspectionAllPhotos from './PropertyInspection/InspectionAllPhotos.vue'
import InspectionRoofMaterial from './PropertyInspection/InspectionRoofMaterial.vue'
import InspectionElevation from './PropertyInspection/InspectionElevation.vue'
import InspectionInterior from './PropertyInspection/InspectionInterior.vue'
import InspectionRoof from './PropertyInspection/InspectionRoof.vue'
import ExampleKendo from './ExampleKendo.vue'
import OutBuildingsComponent from './OutBuildings/OutBuildingsComponent.vue'
// import InspectionForm from './PropertyInspection/InspectionForm.vue'
</script>

<template>
  <article class="px-4 mt-4">
    <div class="grid gap-4">
      <OutBuildingsComponent />
      <ExampleKendo />
      <LossLocationComponent class="p-4 bg-white border-2 rounded-lg shadow" />
      <InspectionDirectionNorth class="p-4 bg-white border shadow" />
      <InspectionOutsideTemp class="p-4 bg-white border shadow" />
      <InspectionAllPhotos class="p-4 bg-white border shadow" />
      <InspectionRoofMaterial class="p-4 bg-white border shadow" />
    </div>
    <InspectionElevation />
    <InspectionInterior />
    <InspectionRoof />
    <!-- <inspection-form /> -->
  </article>
</template>
