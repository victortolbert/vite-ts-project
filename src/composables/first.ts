export const first = <T>(item: Array<T> | T): T => {
  return Array.isArray(item) ? item[0] : item;
};
