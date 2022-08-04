<script>
export default {
  inject: ['sortableListHandleClass'],
  mounted() {
    this.$el.classList.add(this.sortableListHandleClass)
  },
  render() {
    // eslint-disable-next-line vue/require-slots-as-functions
    return this.$slots.default[0]
  },
}
</script>
