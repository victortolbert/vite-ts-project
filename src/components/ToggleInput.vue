<script>
export default {
  props: ['value'],
  emits: ['input'],
  methods: {
    toggle() {
      this.$emit('input', !this.value)
    },
  },
}
</script>

<template>
  <span
    class="toggle flex-no-shrink" role="checkbox" tabindex="0"
    :aria-checked="value.toString()"
    @click="toggle"
    @keydown.space.prevent="toggle"
  />
</template>
