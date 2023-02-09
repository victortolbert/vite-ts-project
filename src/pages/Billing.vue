<template>
  <hancock-page-wrapper>
    <hancock-page-heading>
      Billing
      <template #actions>
        <div class="flex items-center space-x-4">
          <button class="h-button">Export to QBXML & to CSV</button>
          <button class="h-button">Reset Billed to Complete</button>
          <button class="h-button">Close Billed Projects</button>
        </div>
      </template>
    </hancock-page-heading>

    <router-view></router-view>
  </hancock-page-wrapper>
</template>
