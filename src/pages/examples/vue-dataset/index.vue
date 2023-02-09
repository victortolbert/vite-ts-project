<script>
import users from '~/data/users-vue-dataset.json'

export default {
  data() {
    return {
      users,
      statusClass: {
        Active: 'text-success',
        Away: 'text-warning',
        'Do not disturb': 'text-danger',
        Invisible: 'text-secondary'
      },
      selected: 5
    }
  }
}
</script>

<template>
  <div>
    <dataset
      v-slot="{ ds }"
      :ds-data="users"
      :ds-filter-fields="{}"
      :ds-sortby="['name']"
      :ds-search-in="['balance', 'birthdate', 'name', 'company', 'email', 'phone', 'address', 'favoriteAnimal']"
      :ds-search-as="{}"
    >
      <div class="mb-2 row" :data-page-count="ds.dsPagecount">
        <div class="mb-2 col-md-6 mb-md-0">
          <dataset-show :ds-show-entries="selected" @changed="selected = $event" />
        </div>
        <div class="col-md-6">
          <dataset-search ds-search-placeholder="Search..." />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <dataset-item class="mb-3 form-row">
            <template #default="{ row, rowIndex }">
              <div class="col-md-4">
                <div class="mb-2 card">
                  <div class="px-3 pt-3 pb-2 card-body">
                    <h5 class="mb-2 card-title text-truncate" :title="`Index: ${rowIndex}`">
                      <span :class="['font-16', statusClass[row.onlineStatus]]">⬤</span>
                      {{ row.name }}
                    </h5>
                    <h6 class="card-subtitle text-truncate text-muted">{{ row.email }}</h6>
                    <p class="mb-0 card-text text-truncate">{{ row.balance }}</p>
                    <p class="text-right card-text text-truncate">{{ row.birthdate }}</p>
                  </div>
                </div>
              </div>
            </template>
            <template #noDataFound>
              <div class="pt-2 col-md-12">
                <p class="text-center">No results found</p>
              </div>
            </template>
          </dataset-item>
        </div>
      </div>
      <div class="d-flex flex-md-row flex-column justify-content-between align-items-center">
        <dataset-info class="mb-2 mb-md-0" />
        <dataset-pager />
      </div>
    </dataset>
  </div>
</template>

