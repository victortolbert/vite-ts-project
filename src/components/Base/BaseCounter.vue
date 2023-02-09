<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: ['name'],
  template: ``
})
export default class BaseCounter extends Vue {
  // Class properties will be component data
  count = 0

  // Methods will be component methods
  increment() {
    this.count++
  }

  decrement() {
    this.count--
  }
}
</script>

<template>
  <div>
    <button v-on:click="decrement">-</button>
      {{count}}
    <button v-on:click="increment">+</button>
  </div>
</template>
