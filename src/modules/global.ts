import { UserModule } from '~/@types';
import GStore from '~/store';

export const install: UserModule = ({ app }) => {
  app.provide('GStore', GStore);
};
