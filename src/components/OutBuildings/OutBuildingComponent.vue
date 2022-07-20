<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class OutBuildingComponent extends Vue {
  @Prop({
    type: Object,
    default() {
      return { name: '' }
    },
  }) readonly outBuilding: any
}
</script>

<template>
  <li>
    <div>
      <div class="mt-4 flex items-center justify-between">
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

      <div v-if="outBuilding.damaged" class="p-4">
        <div class="flex justify-between">
          <label>Interior Damage Description</label>
          <textarea v-model="outBuilding.interiorDamageDescription" class="flex-1" name="" cols="30" rows="3" />
          <input type="file" name="interiorDamageAssets">
        </div>
        <div class="flex justify-between">
          <label>Elevation Damage Description</label>
          <textarea v-model="outBuilding.elevationDamageDescription" class="flex-1" name="" cols="30" rows="3" />
          <input type="file" name="elevationDamageAssets">
        </div>
        <div class="flex justify-between">
          <label>Roof Damage Description</label>
          <textarea v-model="outBuilding.roofDamageDescription" class="flex-1" name="" cols="30" rows="3" />
          <input type="file" name="roofDamageAssets">
        </div>
      </div>
    </div>
  </li>
</template>
