import { UserModule } from '~/@types';
import PrismCode from '~/components/PrismCode.vue';

import 'prismjs';
import 'prismjs/themes/prism.css';

export const install: UserModule = ({ app }) => {
  app.component('prism-code', PrismCode);
};
