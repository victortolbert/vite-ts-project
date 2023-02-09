import { ref } from 'vue';
import { User } from '~/@types';

const isLoggedIn = ref(false);

export const nameOrLength = (userOrUsers: User | User[]) => {
  if (Array.isArray(userOrUsers)) {
    // Inside this side of the if, userOrUsers' type is User[].
    return userOrUsers.length;
  } else {
    // Inside this side of the if, userOrUsers' type is User.
    return userOrUsers.FirstName;
  }
};

export default function useUser() {
  const login = () => {
    isLoggedIn.value = true;
  };

  return {
    isLoggedIn,
    login,
  };
}
