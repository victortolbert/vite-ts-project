export const hasLoggedIn = (times: number | true) => {
  return typeof times === 'boolean' ? true : times > 0;
};
