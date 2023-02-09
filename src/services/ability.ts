import { defineAbility } from '@casl/ability';

export default defineAbility((can, cannot) => {
  can('read', 'Article');

  can('manage', 'all');
  cannot('delete', 'User');
});
