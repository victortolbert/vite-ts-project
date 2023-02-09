import {defineStore} from 'pinia'
import axios from 'axios'
import {useAxios} from '@vueuse/integrations'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
})

export const useMainStore = defineStore({
  id: 'main',
  // can also be defined with an arrow function if you prefer that syntax
  state() {
    return {
      // all these properties will have their type inferred automatically
      counter: 0,
      name: 'Eduardo',
      isAdmin: true,
    }
  },
  getters: {
    doubleCount() {
      return this.counter * 2
    },
    doubleCountPlusOne() {
      // autocompletion ✨
      return this.doubleCount + 1
    },
    // otherGetter() {
    //   const otherStore = useOtherStore()
    //   return this.localData + otherStore.data
    // },
  },
  actions: {
    increment() {
      this.counter++
    },
    randomizeCounter() {
      this.counter = Math.round(100 * Math.random())
    },

    // async fetchUserPreferences(preferences) {
    //   const auth = useAuthStore()
    //   if (auth.isAuthenticated) {
    //     this.preferences = await fetchPreferences()
    //   } else {
    //     throw new Error('User must be authenticated')
    //   }
    // },
  },
})

export const useTodoStore = defineStore({
  id: 'todos',
  state: () => ({
    /** @type {{ text: string, id: number, isFinished: boolean }[]} */
    todos: [],
    /** @type {'all' | 'finished' | 'unfinished'} */
    filter: 'all',
    // type will be automatically inferred to number
    nextId: 0,
  }),
  getters: {
    finishedTodos() {
      // autocompletion! ✨
      return this.todos.filter(todo => todo.isFinished)
    },
    unfinishedTodos() {
      return this.todos.filter(todo => !todo.isFinished)
    },
    filteredTodos() {
      if (this.filter === 'finished') {
        // call other getters with autocompletion ✨
        return this.finishedTodos
      } else if (this.filter === 'unfinished') {
        return this.unfinishedTodos
      }
      return this.todos
    },
  },
  actions: {
    // any amount of arguments, return a promise or not
    addTodo(text) {
      // you can directly mutate the state
      this.todos.push({text, id: this.nextId++, isFinished: false})
    },
  },
})

export const useCart = defineStore({
  id: 'cart',

  actions: {
    purchase() {
      const user = useUserStore()
      if (!user.isAuthenticated()) {
        this.$nuxt.redirect('/login')
      }
    },
  },
})

export const useMovieStore = defineStore({
  id: 'movies',
  state() {
    return {
      movies: [{id: 1, title: 'Movie 1'}],
    }
  },

  getters: {
    favoriteMovies() {
      return this.movies.filter(
        movie => movie.isFavorite || movie.vote_average >= 7,
      )
    },
    filteredMovies() {
      if (this.filter === 'favorites') {
        return this.favoriteMovies
      } else if (this.filter === 'watched') {
        return this.watchedMovies
      }
      return this.todos
    },
  },

  actions: {
    async fetchMovies() {
      const {data, finished} = useAxios(
        `/movie/top_rated?api_key=b9cd5a762895c83f26b6b01835fa9f08`,
        instance,
      )
      return {
        data,
        finished,
      }
    },
  },
})
