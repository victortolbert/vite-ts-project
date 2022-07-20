<template>
  <section>
    <!-- eslint-disable vue/no-deprecated-v-bind-sync -->
    <o-sidebar fullheight right :open.sync="open">
      <h3>Example</h3>
    </o-sidebar>

    <o-button @click="open = true">Show</o-button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    }
  },
}
</script>

<style>
.sidebar-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
}
.sidebar-layout {
  display: flex;
  flex-direction: row;
  min-height: 100%;
}
</style>
