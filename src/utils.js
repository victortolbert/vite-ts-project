import { onMounted, onUnmounted } from 'vue'

export function useEventListener(event, callback, element = null) {
  const target = element || window

  onMounted(() => {
    target.addEventListener(event, callback)
  })

  onUnmounted(() => {
    target.removeEventListener(event, callback)
  })
}
