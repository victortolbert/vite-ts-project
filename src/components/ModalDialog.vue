<script>
export default {
  props: ['show'],
  emits: ['close'],
  watch: {
    show: {
      immediate: true,
      handler(show) {
        if (show)
          document.body.style.setProperty('overflow', 'hidden')
        else
          document.body.style.removeProperty('overflow')
      },
    },
  },
  created() {
    const escapeHandler = (e) => {
      if (e.key === 'Escape' && this.show)
        this.dismiss()
    }
    document.addEventListener('keydown', escapeHandler)
    this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', escapeHandler)
    })
  },
  methods: {
    dismiss() {
      this.$emit('close')
    },
  },
}
</script>

<template>
  <portal v-if="show" to="overlays">
    <div v-show="show" class="modal-backdrop">
      <div class="modal">
        <slot />
      </div>
    </div>
  </portal>
</template>
