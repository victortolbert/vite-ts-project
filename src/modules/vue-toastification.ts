import Toast from 'vue-toastification';
import { UserModule } from '~/@types';
import 'vue-toastification/dist/index.css';

const toastOptions = {
  maxToasts: 20,
  newestOnTop: true,
};

export const install: UserModule = ({ app }) => {
  app.use(Toast, toastOptions);
};
