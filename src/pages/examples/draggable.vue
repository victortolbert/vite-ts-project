<script>
import { ref } from 'vue'

export default {
  setup() {
    const dragging = ref(false)
    const mouseX = ref(0)
    const mouseY = ref(0)
    const x = ref(100)
    const y = ref(100)

    window.addEventListener('mousemove', (e) => {
      if (dragging.value) {
        const diffX = e.clientX - mouseX.value
        const diffY = e.clientY - mouseY.value
        x.value += diffX
        y.value += diffY
      }
      mouseX.value = e.clientX
      mouseY.value = e.clientY
    })

    window.addEventListener('mouseup', () => {
      dragging.value = false
    })

    return {
      x,
      y,
      dragging,
    }
  },
}
</script>

<template>
  <div class="drag-container">
    <img
      alt="Vue logo"
      src="../../assets/logo.png"
      :style="{
        left: `${x}px`,
        top: `${y}px`,
        cursor: dragging ? 'grabbing' : 'grab',
      }"
      draggable="false"
      @mousedown="dragging = true"
    />
  </div>
</template>

<style scoped>
.drag-container {
  /* width: 100vw;
  height: 100vh; */
}

img {
  cursor: grab;
  position: relative;
}
</style>
