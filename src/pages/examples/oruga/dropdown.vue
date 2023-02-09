<script>
  export default {
    data() {
      return {
        selectedOptions: []
      }
    }
  }
</script>

<template>
  <section>
    <o-dropdown v-model="selectedOptions" multiple aria-role="list">
      <template #trigger>
        <button type="button" class="flex items-center space-x-2">
          <span>Selected ({{ selectedOptions.length }})</span>
          <i-heroicons-solid-chevron-down />
        </button>
      </template>

      <o-dropdown-item value="option1" aria-role="listitem">
        <span>Option 1</span>
      </o-dropdown-item>

      <o-dropdown-item value="option2" aria-role="listitem">
        <span>Option 2</span>
      </o-dropdown-item>

      <o-dropdown-item value="option3" aria-role="listitem">
        <span>Option 3</span>
      </o-dropdown-item>
    </o-dropdown>

     <p class="mt-32" v-if="selectedOptions.length">
       <b>selected</b>
       <pre>{{ selectedOptions }}</pre>
      </p>
  </section>
</template>
