import { User } from '~/@types';

export const nameOrLength = (userOrUsers: User | User[]) => {
  if (Array.isArray(userOrUsers)) {
    // Inside this side of the if, userOrUsers' type is User[].
    return userOrUsers.length;
  } else {
    // Inside this side of the if, userOrUsers' type is User.
    return userOrUsers.FirstName;
  }
};
