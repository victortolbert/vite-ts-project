// @ts-check
import { defineStore } from 'pinia';
import axios from 'axios';

export const useMovies = defineStore({
  id: 'movies',

  actions: {
    async fetch() {
      await axios.get('...');
    },
  },
});
