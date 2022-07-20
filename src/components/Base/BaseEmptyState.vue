<script lang="ts">
export default {
  name: 'BaseEmptyState',
}
</script>

<template>
  <section class="section p-8 border-2 max-w-screen-md mx-auto m-8 shadow">
    <div class="flex flex-col items-center justify-center text-center text-gray-400">
      <i-carbon-face-dissatisfied class="text-5xl" />

      <slot>
        <p class="text-lg">
          There is no data to display.
        </p>
      </slot>
    </div>
  </section>
</template>
