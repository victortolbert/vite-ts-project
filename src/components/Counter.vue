<script lang="ts">
import Super from '@/super'
import Component from 'vue-class-component'

// Define the component in class-style
@Component
export default class Counter extends Super {
  created() {
    console.log(this.superValue) // -> Hello
  }

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
    {{ count }}
    <button v-on:click="increment">+</button>
  </div>
</template>
