<script>
import { Prism } from '~/helpers'

export default {
  props: {
    lang: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isHighlighted: false
    }
  },
  mounted () {
    if (!this.isHighlighted) {
      Prism.highlightElement(this.$refs.code)
      this.isHighlighted = true
    }
  }
}
</script>

<template>
  <pre>
    <code
      ref="code"
      :class="`language-${lang}`"
    >
      <slot />
    </code>
  </pre>
</template>
