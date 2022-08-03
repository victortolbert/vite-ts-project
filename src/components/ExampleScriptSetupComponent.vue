<script setup>
import { ref } from 'vue'
import TabbableTextarea from '@/components/TabbableTextarea.vue'
import { state } from '@/stores/quizStore'
import { useCounterStore } from '@/stores/CounterStore'
import IconAccessibility from '~icons/carbon/accessibility'
import IconAccountBox from '~icons/mdi/account-box'

const counter = useCounterStore()
const styles = ref('')

const injectStyles = () => {
  styles.value = 'button { background: red }'
}

const food = ref(localStorage.getItem('food') || 'pizza')
const comment = ref('initial textarea value')
function write() {
  localStorage.setItem('food', food.value)
}
</script>

<template>
  <main class="text-white">
    <IconAccessibility />
    <IconAccountBox style="font-size: 2em; color: red" />

    <form @submit.prevent>
      <h5>{{ state.name }}</h5>
      <h1>{{ counter.count }}</h1>

      <button
        :disabled="!counter.remaining"
        @click="counter.increment()"
      >
        Increment ({{ counter.remaining }} Remaining)
      </button>

      <TabbableTextarea v-model="comment" style="width: 100%; height: 300px;" class="bg-gray-900 text-white" />

      <label class="text-white">What is your favorite food?</label>
      <input v-model="food" class="text-black" type="text" @input="write">
    </form>
  </main>
</template>
