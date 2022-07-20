import { reactive } from '@vue/composition-api'

const state = reactive({
  user: null,
})

const methods = {
  setUser(payload) {
    state.user = payload ? payload.user : null
  },
}

export default {
  state,
  methods,
}
