<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <div>
    <HelloWorld>
      <h1 slot-scope="{ subject }">
        Hello {{ subject }}!
      </h1>
    </HelloWorld>
  </div>
</template>

<style src="@/assets/css/app.css" />
