<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
})
export default class AppButtonComponent extends Vue {
  @Prop({ default: 'primary' }) readonly type!: string
  @Prop({ default: false }) readonly processing!: boolean
}
</script>

<template>
  <button
    class="border rounded px-5 py-2 disabled:cursor-not-allowed" :class="{
      'bg-blue-600 hover:bg-blue-700': type === 'primary',
      'bg-purple-200 hover:bg-purple-400': type === 'secondary',
      'bg-gray-200 hover:bg-gray-400': type === 'muted',
      'is-loading': processing,
    }"
    :disabled="processing"
  >
    <slot />
  </button>
</template>
