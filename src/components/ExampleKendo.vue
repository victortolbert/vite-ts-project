<script lang="ts" setup>
import { Button } from '@progress/kendo-vue-buttons'
</script>

<template>
  <div class="flex">
    <Button icon="calendar" theme-color="primary">
      Kendo UI for Vue Font Icon
    </Button>

    <Button icon-class="fa fa-calendar fa-fw">
      Font Awesome Icon
    </Button>

    <Button
      :disabled="true"
      image-url="https://demos.telerik.com/kendo-ui/content/shared/icons/sports/snowboarding.png"
    >
      Image Icon
    </Button>
  </div>
</template>

<style scoped>
.k-button {
  margin-right: 3px;
}

.k-button > .k-image {
  width: 20px;
  height: 20px;
}
</style>
