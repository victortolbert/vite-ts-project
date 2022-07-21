<script>
export default {
  data() {
    return {
      count: 1,
    }
  },
  mounted() {
    setTimeout(() => {
      this.count++
    }, 3 * 1000)
  },
}
</script>

<template>
  <o-tabs type="boxed">
    <o-tab-item>
      <template #header>
        <o-icon icon="info-circle" root-class="custom-icon" />
        <span> Issues 3 </span>
      </template>
    </o-tab-item>
    <o-tab-item>
      <template #header>
        <o-icon icon="retweet" root-class="custom-icon" />
        <span> Pull Requests {{ count }} </span>
      </template>
    </o-tab-item>
  </o-tabs>
</template>

<style>
  .custom-icon {
    margin-right: 5px;
  }
</style>
