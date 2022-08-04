<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import type { Outbuilding } from '@/types/Outbuilding'

@Component({})
export default class OutbuildingCreateComponent extends Vue {
  newOutbuilding: Outbuilding = {}

  add() {
    this.$emit('add', this.newOutbuilding)
    this.newOutbuilding = {}
  }
}
</script>

<template>
  <form @submit.prevent="add">
    <div class="">
      <input v-model="newOutbuilding.name" type="hidden" class="block">

      <button
        type="submit"
        class="
          mt-6
          border
          px-4
          py-1
          rounded
          bg-primary-200
          hover:bg-primary-300"
      >
        Add Another Outbuilding?
      </button>
    </div>
  </form>
</template>
