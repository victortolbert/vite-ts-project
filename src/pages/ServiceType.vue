<template>
  <hancock-page-wrapper>
    <hancock-page-heading>
      Service Types
      <template #actions>
        <div class="flex items-center space-x-4">
          <router-link to="/ServiceType/CreateServiceType" class="h-button">Add Service Type</router-link>
        </div>
      </template>
    </hancock-page-heading>
    <router-view></router-view>
  </hancock-page-wrapper>
</template>
