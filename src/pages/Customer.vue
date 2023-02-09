<template>
  <hancock-page-wrapper>
    <hancock-page-heading>
      Customers
      <template #actions>
        <div class="flex items-center space-x-4">
          <router-link to="/Customer/CreateInsCompany" class="h-button">Add Customer</router-link>
          <router-link to="/Customer/CreateBusinessUnit" class="h-button">Add Business Unit</router-link>
        </div>
      </template>
    </hancock-page-heading>

    <router-view></router-view>
  </hancock-page-wrapper>
</template>
