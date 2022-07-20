<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

Component({})
export default class BaseStatusIndicator extends Vue {
  @Prop({ default: 'green' })
  public color!: string

  @Prop({ default: 'Active' })
  public title!: string

  iconClass() {
    return 'bg-green-100 border-green-900 text-green-900'
  }

  titleClass() {
    return 'font-medium text-green-900'
  }
}
</script>

<template>
  <div class="flex items-center leading-none">
    <span :class="iconClass" class="inline-block w-8 h-8" style="width: 32px; height: 32px" />

    <div class="flex flex-col ml-2">
      <span :class="titleClass">{{ title }}</span>

      <span class="text-xs">
        <slot />
      </span>
    </div>
  </div>
</template>
