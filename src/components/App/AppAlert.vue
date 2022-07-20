<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export default class AppAlert extends Vue {
  @Prop({ default: 'info' }) readonly variant!: string

  get color() {
    let color = ''

    switch (this.variant) {
      case 'success':
        color = 'green'
        break
      case 'warning':
        color = 'yellow'
        break
      case 'danger':
      case 'error':
        color = 'red'
        break
      case 'info':
        color = 'blue'
        break
      default:
        color = 'gray'
        break
    }

    return color
  }
}
</script>

<template>
  <div :class="`p-4 rounded-md bg-${color}-50`">
    <div class="flex">
      <div :class="`flex-shrink-0 text-${color}-400`">
        <slot name="icon">
          <i-carbon-checkmark />
        </slot>
      </div>
      <div class="ml-3">
        <p :class="`text-sm font-medium text-${color}-800`">
          <slot />
        </p>
      </div>
      <div class="pl-3 ml-auto">
        <div class="-my-1.5 -mx-1.5">
          <button
            type="button"
            :class="`inline-flex bg-${color}-50 rounded-md p-1.5 text-${color}-500 hover:bg-${color}-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-${color}-50 focus:ring-${color}-600`"
          >
            <span class="sr-only">Dismiss</span>
            <i-carbon-close />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
