<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const container = ref(null)
// eslint-disable-next-line no-alert
onClickOutside(container, () => alert('Good. Better to click outside.'))
</script>

<template>
  <div>
    <p>Hey there, here's some text.</p>
    <div ref="container" class="container" >
      <p>Please don't click in here.</p>
    </div>
  </div>
</template>
