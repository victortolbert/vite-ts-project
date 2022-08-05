<script lang="ts" setup>
import TheNavbar from '@/components/TheNavbar.vue'
import ProjectDetailsComponent from '@/components/Project/ProjectDetailsComponent.vue'
import HeroComponent from '@/components/Hero/HeroComponent.vue'
</script>

<template>
  <div>
    <TheNavbar />
    <HeroComponent>
      Legacy View
    </HeroComponent>
    <ProjectDetailsComponent />
  </div>
</template>
