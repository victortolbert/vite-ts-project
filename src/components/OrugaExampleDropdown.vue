<template>
  <o-dropdown aria-role="list">
    <template #trigger="{ active }">
      Custom
      <o-icon variant="success" :icon="active ? 'caret-up' : 'caret-down'" />
    </template>

    <o-dropdown-item aria-role="listitem">
      Action
    </o-dropdown-item>
    <o-dropdown-item aria-role="listitem">
      Another action
    </o-dropdown-item>
    <o-dropdown-item aria-role="listitem">
      Something else
    </o-dropdown-item>
  </o-dropdown>
</template>
