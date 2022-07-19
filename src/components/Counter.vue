<script lang="ts">
import Component from 'vue-class-component'
import Super from '@/super'

// Define the component in class-style
@Component
export default class Counter extends Super {
  created() {
    // eslint-disable-next-line no-console
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
    <button @click="decrement">
      -
    </button>
    {{ count }}
    <button @click="increment">
      +
    </button>
  </div>
</template>
