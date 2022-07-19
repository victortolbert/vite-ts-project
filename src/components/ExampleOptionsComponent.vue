<script>
import { useFlash } from '../composables/useFlash'

export default {
  setup() {
    const { flash } = useFlash()
    return { flash }
  },
}
</script>

<template>
  <div>
    <button @click="flash('Yay!', 'It works in the ExampleOptions Component', 'info')">
      Flash
    </button>
  </div>
</template>
