import { acceptHMRUpdate, defineStore } from 'pinia';

export const useMenuStore = defineStore('menu', () => {
  const main = ref('');

  return {
    main,
  };
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useMenuStore, import.meta.hot));
