<script>
import ConfirmDeleteModal from './ConfirmDeleteModal.vue'

export default {
  components: {
    ConfirmDeleteModal,
  },
  props: ['accountId'],
  data() {
    return {
      modalOpen: false,
    }
  },
}
</script>

<template>
  <button type="button" @click="modalOpen = true">
    <slot />
    <ConfirmDeleteModal
      :show="modalOpen"
      :account-id="accountId"
      @close="modalOpen = false"
    />
  </button>
</template>
