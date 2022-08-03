<script>
export default {
  provide() {
    return {
      accordionListState: this.sharedState,
    }
  },
  data() {
    return {
      sharedState: {
        activeItem: 1,
      },
    }
  },
}
</script>

<template>
  <div class="accordion-list">
    <slot />
  </div>
</template>
