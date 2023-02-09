<template>
  <hancock-page-wrapper>
    <hancock-page-heading>
      Announcements
      <template #actions>
        <div class="flex items-center space-x-4">
          <router-link to="/Announcement/CreateAnnouncement" class="space-x-2 h-button">
            <i class="text-gray-400 fad fa-comment-alt-plus fa-lg"></i>
            <span class="font-bold">Add Announcement</span>
          </router-link>
        </div>
      </template>
    </hancock-page-heading>
    <router-view></router-view>
  </hancock-page-wrapper>
</template>
