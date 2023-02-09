<template>
  <hancock-page-wrapper>
    <hancock-page-heading>
      Service Territories and Areas
      <template #actions>
        <div class="flex items-center space-x-4">
          <button class="h-button">Edit Territory</button>
          <button class="h-button">Add Service Area</button>
          <button class="h-button">Edit Service Area</button>
        </div>
      </template>
    </hancock-page-heading>
    <router-view></router-view>
  </hancock-page-wrapper>
</template>
