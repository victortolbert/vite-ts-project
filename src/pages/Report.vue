<template>
  <hancock-page-wrapper>
    <hancock-page-heading>
      Reports
      <template #actions>
        <div class="flex items-center space-x-4">
          <button class="h-button">Add Report</button>
        </div>
      </template>
    </hancock-page-heading>
    <router-view></router-view>
  </hancock-page-wrapper>
</template>
