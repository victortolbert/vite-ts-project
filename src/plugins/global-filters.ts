import Vue from 'vue'

Vue.filter('difficulty', (difficulty: string) => {
  const difficulties: any = {
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard',
  }

  return difficulties[difficulty]
})
