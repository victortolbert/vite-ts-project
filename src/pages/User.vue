<template>
  <hancock-page-wrapper>
    <hancock-page-heading>
      Users
      <template #actions>
        <div class="flex items-center space-x-4">
          <button class="h-button">Add Application User</button>
          <button class="h-button">Add Service Tech</button>
          <button class="h-button">Add Insurance Adjuster</button>
        </div>
      </template>
    </hancock-page-heading>
    <router-view></router-view>
  </hancock-page-wrapper>
</template>
