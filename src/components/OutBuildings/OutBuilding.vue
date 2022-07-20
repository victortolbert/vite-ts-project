<script>
export default {
  props: {
    outBuilding: Object,
  },
}
</script>

<template>
  <!-- eslint-disable vue/no-mutating-props -->
  <li>
    <div>
      <div class="mt-4 flex items-center">
        <select v-model="outBuilding.name">
          <option :value="null" disabled>
            Select Out Building...
          </option>
          <option>Barn</option>
          <option>Shed</option>
          <option>Pool House</option>
          <option>Green House</option>
          <option>Detached Garage</option>
          <option>Other</option>
        </select>

        <div class="flex items-center">
          <label>Is Damaged?</label>

          <div>
            <div class="flex items-center space-x-2">
              <label>Yes</label>
              <input v-model="outBuilding.damaged" type="checkbox" class="">
            </div>
          </div>
        </div>
      </div>

      <div class="p-4" v-if="outBuilding.damaged">
        <div class="flex justify-between">
          <label>Interior Damage Description</label>
          <textarea class="flex-1" v-model="outBuilding.interiorDamageDescription" name="" cols="30" rows="3" />
          <input type="file" name="interiorDamageAssets">
        </div>
        <div class="flex justify-between">
          <label>Elevation Damage Description</label>
          <textarea class="flex-1" v-model="outBuilding.elevationDamageDescription" name="" cols="30" rows="3" />
          <input type="file" name="elevationDamageAssets">
        </div>
        <div class="flex justify-between">
          <label>Roof Damage Description</label>
          <textarea class="flex-1" v-model="outBuilding.roofDamageDescription" name="" cols="30" rows="3" />
          <input type="file" name="roofDamageAssets">
        </div>
      </div>
    </div>
  </li>
</template>
