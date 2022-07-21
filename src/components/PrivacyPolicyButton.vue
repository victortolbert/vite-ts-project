<script lang="ts">
import { defineComponent } from 'vue'
import PrivacyPolicyModal from './PrivacyPolicyModal.vue'

export default defineComponent({
  components: {
    PrivacyPolicyModal,
  },
  data() {
    return {
      modalOpen: false,
    }
  },
})
</script>

<template>
  <button
    class="text-blue-500 border-b border-blue-500 border-dotted hover:border-solid"
    @click="modalOpen = true"
  >
    Privacy Policy
    <portal v-if="modalOpen" to="overlays">
      <PrivacyPolicyModal :show="modalOpen" @close="modalOpen = false" />
    </portal>
  </button>
</template>
x
