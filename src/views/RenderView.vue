<script lang="ts" setup>
import TagInput from '@/components/TagInput.vue'
import InlineTagInput from '@/components/InlineTagInput.vue'
import StackedTagInput from '@/components/StackedTagInput.vue'
const tags = ref(['awesome', 'excellent', 'amazing'])
</script>

<template>
  <div id="app" class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-sm mx-auto card mt-8">
      <label class="form-label mb-2">Stacked Tag Input</label>
      <StackedTagInput v-model="tags" />
    </div>

    <div class="max-w-sm mx-auto card mt-8">
      <label class="form-label mb-2">Inline Tag Input</label>
      <InlineTagInput v-model="tags" />
    </div>

    <div class="max-w-sm mx-auto card mt-8">
      <label class="form-label mb-2">Original Tag Input</label>
      <TagInput v-model="tags" />
    </div>
  </div>
</template>

<style src="@/assets/css/app.css" />
