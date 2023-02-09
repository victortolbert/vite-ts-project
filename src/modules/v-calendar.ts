// import VCalendar from "v-calendar"; <=== COMMENT OUT OR REMOVE THIS IMPORT
import { UserModule } from '~/utils/types';

export const install: UserModule = async ({ isClient, router, app }) => {
  if (!isClient) return;

  const calendar = await import('v-calendar');
  app.use(calendar.default || calendar, {});
};
