import { defineStore } from 'pinia'
interface Member {
  id: string
  name: string
  email: string
  status: string
}

export const useTeamStore = defineStore('team', {
  state: () => ({
    name: '',
    spots: 0,
    members: [] as Member[],
  }),

  actions: {
    async fill() {
      const r = await import('@/team.json')

      this.$state = r.default
    },

    grow(spots) {
      this.spots = spots
    },
  },

  getters: {
    spotsRemaining(): number {
      return this.spots - this.members.length
    },
  },
})
