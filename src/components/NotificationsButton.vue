<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    NotificationsSidebar: () => import('./NotificationsSidebar.vue'),
  },
  setup() {
    const showNotifications = ref(false)

    return {
      showNotifications,
    }
  },
})
</script>

<template>
  <button
    class="p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
    @click="showNotifications = !showNotifications"
  >
    <span class="sr-only">View notifications</span>
    <!-- <i-carbon-notification v-if="!showNotifications" class="w-6 h-6" /> -->
    <!-- <i-carbon-close v-if="showNotifications" class="w-6 h-6" /> -->
    Notifications
    <portal v-if="showNotifications" to="overlays">
      <!-- eslint-disable vue/no-deprecated-v-bind-sync -->
      <NotificationsSidebar
        :open.sync="showNotifications"
        @close="showNotifications = false"
      />
    </portal>
  </button>
</template>
