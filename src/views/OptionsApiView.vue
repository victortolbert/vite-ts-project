<script>
export default {
  mounted() {
    console.log('mounted')
    console.log('this.$el', this.$el)
    console.log('this.$parent', this.$parent)
    console.log('this.$root', this.$root)
  },
}
</script>

<template>
  <article>
    <ul>
      <li><pre>{{ $slots }}</pre></li>
      <li><pre>{{ $attrs }}</pre></li>
    </ul>
  </article>
</template>
