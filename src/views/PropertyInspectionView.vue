<script lang="ts" setup>
import LossLocationComponent from '@/components/PropertyInspection/LossLocationComponent.vue'
import InspectionDirectionNorth from '@/components/PropertyInspection/InspectionDirectionNorth.vue'
// import InspectionOutsideTemp from '@/components/PropertyInspection/InspectionOutsideTemp.vue'
import InspectionAllPhotos from '@/components/PropertyInspection/InspectionAllPhotos.vue'
import InspectionRoofMaterial from '@/components/PropertyInspection/InspectionRoofMaterial.vue'
import InspectionElevation from '@/components/PropertyInspection/InspectionElevation.vue'
import InspectionInterior from '@/components/PropertyInspection/InspectionInterior.vue'
import InspectionRoof from '@/components/PropertyInspection/InspectionRoof.vue'
import Outbuildings from '@/components/PropertyInspection/Outbuildings/Outbuildings.vue'
import TheNavbar from '@/components/TheNavbar.vue'
// import InspectionForm from '@/components/PropertyInspection/InspectionForm.vue'
</script>

<template>
  <div>
    <TheNavbar />

    <div class="grid gap-4">
      <section class="px-8 mt-8">
        <header>
          <h1>Property Inspection Form</h1>
        </header>

        <LossLocationComponent class="mt-4 p-4 bg-white border-4 rounded-lg" />
        <Outbuildings class="mt-4 rounded-lg border-4" />

        <div class="mt-4 border-4 border-dashed rounded-lg border-primary-200 h-96" />
        <InspectionDirectionNorth class="mt-4 p-4 bg-white border shadow" />
        <!-- <InspectionOutsideTemp class="p-4 bg-white border shadow" /> -->
        <InspectionAllPhotos class="mt-4 p-4 bg-white border shadow" />
        <InspectionRoofMaterial class="mt-4 p-4 bg-white border shadow" />
        <InspectionElevation />
        <InspectionInterior />
        <InspectionRoof />
        <!-- <inspection-form /> -->
        <footer>
          <button class="btn btn-primary">
            Submit
          </button>
        </footer>
      </section>
    </div>
  </div>
</template>
