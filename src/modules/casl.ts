import { UserModule } from '~/@types';
import { abilitiesPlugin } from '@casl/vue';
import ability from '~/services/ability';

export const install: UserModule = ({ app }) => {
  app.use(abilitiesPlugin, ability, {
    useGlobalProperties: true,
  });
};
