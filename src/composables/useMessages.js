import { ref, computed, onMounted } from 'vue'
import MessageService from '~/services/MessageService'

import { strip } from '~/helpers'
import { useRoute } from 'vue-router'

export default function useMessages() {
  const route = useRoute()

  console.log({
    tag: route.params.tag,
  })

  const messages = ref([])
  const checked = ref([])
  const isCheckAll = ref(false)

  onMounted(async () => {
    const res = await MessageService.getMessages()

    console.log({
      response: res
    })

    messages.value = res.data
  })

  const filteredMessages = computed(() => {
    if (route.params.tag) {
      return messages.value.filter(message => message.tags.includes(route.params.tag))
    }
    return messages.value
  })

  const tags = computed(() =>
    messages.value
      .map(message => message.tags)
      .flat()
      .reduce((obj, tag) => {
        if (!obj[tag]) {
          obj[tag] = 0
        }
        obj[tag]++
        return obj
      }, {}),
  )

  function removeMessage(index) {
    messages.value.splice(index, 1)
  }

  function removeMessages() {
    messages.value = []
  }

  function markAllRead() {
    messages.value.forEach(message => (message.hasBeenRead = true))
    console.log(messages)
  }

  function checkAll() {
    isCheckAll.value = !isCheckAll.value
    checked.value = []

    if (isCheckAll.value) {
      for (const key in messages.value) {
        checked.value.push(messages.value[key])
      }
    }
  }

  function updateCheckAll() {
    if (checked.value.length === messages.value.length) {
      isCheckAll.value = true
    } else {
      isCheckAll.value = false
    }
  }

  function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return new Date(date).toLocaleDateString('en', options)
  }

  function truncate(str) {
    return `${strip(str).substr(0, 50)}...`
  }

  return {
    messages,
    checked,
    isCheckAll,
    tags,
    checkAll,
    updateCheckAll,
    truncate,
    formatDate,
    removeMessage,
    removeMessages,
    filteredMessages,
    markAllRead,
  }
}
