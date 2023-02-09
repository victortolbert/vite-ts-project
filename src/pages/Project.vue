<template>
  <hancock-page-wrapper>
    <hancock-page-heading>
      Projects
      <template #eyelid>
        <hancock-breadcrumb />
      </template>

      <template #actions>
        <div class="flex items-center space-x-4">
          <button class="space-x-2 h-button">
            <i class="text-gray-400 fad fa-folder-plus fa-lg"></i>
            <span class="font-bold">Add Project</span>
          </button>

          <button class="space-x-2 h-button">
            <i class="text-gray-400 fad fa-download fa-lg"></i>
            <span class="font-bold">Export to CSV</span>
          </button>

          <button class="space-x-2 h-button">
            <i class="text-gray-400 fad fa-user-plus fa-lg"></i>
            <span>Bulk Assign</span>
          </button>

          <button class="space-x-2 h-button">
            <i class="text-gray-400 fad fa-check fa-lg"></i>
            <span class="font-bold">Accept</span>
          </button>
        </div>
      </template>
    </hancock-page-heading>

    <div class="p-8">
      <router-view></router-view>
    </div>
  </hancock-page-wrapper>
</template>
