<script lang="ts" setup>
import { ref } from 'vue'
import { useTeamStore } from '@/stores/TeamStore'
import Modal from '@/components/Modal.vue'

const showModal = ref(false)
const team = useTeamStore()
</script>

<template>
  <button
    class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
    :disabled="!team.spotsRemaining"
    @click="showModal = true"
  >
    Add Member ({{ team.spotsRemaining }} Spots Left)
  </button>

  <portal v-if="showModal" to="overlays">
    <!-- <Teleport to="body"> -->
    <Modal :show="showModal" @close="showModal = false">
      <template #default>
        <p>Need to add a new member to your team?</p>

        <form class="mt-6">
          <div class="flex gap-2">
            <input type="email" placeholder="Email Address..." class="flex-1">
            <button>Add</button>
          </div>
        </form>
      </template>
    </Modal>
    <!-- </Teleport> -->
  </portal>
</template>
