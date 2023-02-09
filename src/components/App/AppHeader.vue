<script setup lang="ts">
defineProps<{ showTitle?: boolean }>()
</script>

<template>
  <header class="bg-white border-b h-16 px-4">
    <nav class="flex h-full items-center justify-between">
      <div>
        <h1 v-if="showTitle" class="-ml-4">
          <slot />
        </h1>
      </div>

      <div v-if="false" class="flex ml-6 items-center">
        <button>
          <base-icon-outlined class="h-6 w-6" name="question-mark-circle" />
        </button>
        <button>
          <base-icon-outlined class="h-6 w-6" name="cog" />
        </button>
        <button>
          <base-icon-outlined class="h-6 w-6" name="bell" />
        </button>
      </div>
    </nav>
  </header>
</template>
