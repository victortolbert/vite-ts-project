<script>
import ProfileCard from '@/components/ProfileCard.vue'

export default {
  components: {
    ProfileCard,
  },
}
</script>

<template>
  <div class="min-h-screen bg-grey-darker p-4">
    <div style="width: 420px" class="mx-auto border-l border-r border-dashed border-grey-dark py-4 mb-4">
      <ProfileCard />
    </div>
    <div style="width: 300px" class="border-l border-r border-dashed border-grey-dark py-4 mx-auto">
      <ProfileCard />
    </div>
  </div>
</template>

<style src="@/assets/css/app.css" />
