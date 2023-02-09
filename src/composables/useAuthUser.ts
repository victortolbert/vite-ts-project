import { ref } from 'vue';
const user = ref(null);

export default function useAuthUser() {
  const login = async ({ email, password }) => {};
  const loginWithSocialProvider = (provider) => {};
  const logout = async () => {};
  const isLoggedIn = () => {};
  const register = async ({ email, password, ...meta }) => {};
  const update = async (data) => {};
  const sendPasswordResetEmail = async (email) => {};
  return {
    user,
    login,
    loginWithSocialProvider,
    isLoggedIn,
    logout,
    register,
    update,
    sendPasswordResetEmail,
  };
}
