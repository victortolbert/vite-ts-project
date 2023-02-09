<template>
  <Menu>
    <MenuButton as="template">
      <button>More</button>
    </MenuButton>

    <MenuItems>
      <MenuItem v-slot="{ active }">
        <a :class="{ 'bg-primary-500': active }" href="/account-settings">Account settings</a>
      </MenuItem>
    </MenuItems>
  </Menu>
</template>
