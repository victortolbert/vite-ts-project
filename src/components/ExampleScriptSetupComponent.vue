<script setup>
import { ref } from 'vue'
import TabbableTextarea from '@/components/TabbableTextarea.vue'
import { state } from '@/stores/quizStore'
// import { counter } from '@/stores/counterStoreBasic'
import { useCounterStore } from '@/stores/CounterStore'
const counter = useCounterStore()

const food = ref(localStorage.getItem('food') || 'pizza')
const comment = ref('initial textarea value')
function write() {
  localStorage.setItem('food', food.value)
}
</script>

<template>
  <main class="text-white">
    <form @submit.prevent>
      <h5>{{ state.name }}</h5>
      <h1>{{ counter.count }}</h1>

      <!-- <button @click="counter.increment()">
        Increment
      </button> -->

      <button
        :disabled="!counter.remaining"
        @click="counter.increment()"
      >
        Increment ({{ counter.remaining }} Remaining)
      </button>

      <TabbableTextarea v-model="comment" style="width: 100%; height: 300px;" class="text-black" />

      <label class="text-white">What is your favorite food?</label>
      <input v-model="food" class="text-black" type="text" @input="write">
    </form>
  </main>
</template>
