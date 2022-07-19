<script lang="ts">
import 'reflect-metadata'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class MyComponent extends Vue {
  @Prop() age!: number
}
</script>

<template>
  <div>
    <div>My age is {{ age }}</div>
  </div>
</template>
