<script>
import UserSettingsForm from '@/components/UserSettingsForm.vue'
import AnnouncementModal from '@/components/AnnouncementModal.vue'

export default {
  components: {
    UserSettingsForm,
    AnnouncementModal,
  },
  data() {
    return {
      accountId: 7,
      showAnnouncement: true,
    }
  },
}
</script>

<template>
  <div>
    <div class="opacity-25">
      <AnnouncementModal
        :show="showAnnouncement"
        @close="showAnnouncement = false"
      />
    </div>

    <div class="min-h-screen bg-grey-darker p-8">
      <div class="max-w-sm mx-auto">
        <UserSettingsForm :account-id="accountId" />
      </div>
    </div>
  </div>
</template>

<style src="@/assets/css/app.css" />
