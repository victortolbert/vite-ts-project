import SmartTable from 'vuejs-smart-table';
import { UserModule } from '~/@types';

export const install: UserModule = ({ app }) => {
  app.use(SmartTable);
};
