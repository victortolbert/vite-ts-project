<script>
import users from '~/data/users-vue-dataset.json'
// import '~/assets/sass/vue-dataset.scss'

import { filterList, clone, isoDateToEuroDate, searchAsEuroDate } from '~/utilities'
import { debounce } from '~/helpers'

// const lessUsers = clone(data).slice(0, 2);
export default {
  data () {
    return {
      users,
      startsWith: '',
      onlineFilter: '',
      statusClass: {
        Active: 'text-success',
        Away: 'text-warning',
        'Do not disturb': 'text-danger',
        Invisible: 'text-secondary'
      },
      firstNameAsc: true
    }
  },
  computed: {
    sortFirstName() {
      return this.firstNameAsc ? 'firstName' : '-firstName'
    }
  },
  created() {
    this.startWithInput = debounce((e) => {
      this.startsWith = e.target.value
    }, 100)
  },
  methods: {
    filterList,
    isoDateToEuroDate,
    searchAsEuroDate,
    updateData() {
      const updatedUsers = clone(users).slice(5, 10)
      this.users = updatedUsers
    },
    startsWithFilter(value) {
      return value.toLowerCase().startsWith(this.startsWith.toLowerCase())
    }
  }
}
</script>

<template>
  <div>
    <!--
    <div class="mb-4 row">
      <div class="col">
        <button type="button" class="btn btn-primary" @click="updateData">Update data</button>
      </div>
    </div>
    -->
    <h3>Custom filters</h3>
    <div class="mb-1 row">
      <div class="mb-2 col-md-6 mb-md-0">
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-outline-secondary"
            :class="[onlineFilter === '' && 'active']"
            @click.prevent="onlineFilter = ''"
          >
            <span class="bg-white badge text-secondary">{{ users.length }}</span> All
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary"
            :class="[onlineFilter === 'Active' && 'active']"
            @click.prevent="onlineFilter = 'Active'"
          >
            <span class="text-white badge bg-success">{{ filterList(users, { onlineStatus: 'Active' }).length }}</span> Active
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary"
            :class="[onlineFilter === 'Away' && 'active']"
            @click.prevent="onlineFilter = 'Away'"
          >
            <span class="text-white badge bg-warning">{{ filterList(users, { onlineStatus: 'Away' }).length }}</span> Away
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary"
            :class="[onlineFilter === 'Do not disturb' && 'active']"
            @click.prevent="onlineFilter = 'Do not disturb'"
          >
            <span class="text-white badge bg-danger">{{ filterList(users, { onlineStatus: 'Do not disturb' }).length }}</span>
            Do not disturb
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary"
            :class="[onlineFilter === 'Invisible' && 'active']"
            @click.prevent="onlineFilter = 'Invisible'"
          >
            <span class="text-white badge bg-secondary">{{ filterList(users, { onlineStatus: 'Invisible' }).length }}</span>
            Invisible
          </button>
        </div>
      </div>
      <div class="col-md-6">
        <input
          type="text"
          class="form-control"
          placeholder="Name starts with"
          :value="startsWith"
          @input="startWithInput($event)"
        />
      </div>
    </div>
    <hr class="mb-1" />
    <h3>Sorting</h3>
    <div class="mb-2 row">
      <div class="mb-2 col-md-6 mb-md-0">
        <button type="button" class="btn btn-outline-secondary" @click="firstNameAsc = !firstNameAsc">
          First name {{ firstNameAsc ? 'asc' : 'desc' }}
        </button>
      </div>
    </div>
    <hr />
    <dataset
      v-slot="{ ds }"
      :ds-data="users"
      :ds-filter-fields="{ onlineStatus: onlineFilter, name: startsWithFilter }"
      :ds-sortby="[sortFirstName]"
      :ds-search-in="['balance', 'birthdate', 'name', 'company', 'email', 'phone', 'address', 'favoriteAnimal']"
      :ds-search-as="{ birthdate: searchAsEuroDate }"
    >
      <div class="mb-2 row" :data-page-count="ds.dsPagecount">
        <div class="mb-2 col-md-6 mb-md-0">
          <dataset-show />
        </div>
        <div class="col-md-6">
          <dataset-search ds-search-placeholder="Search..." />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <dataset-item class="mb-3 form-row" style="overflow-y: auto; max-height: 400px">
            <template #default="{ row, rowIndex }">
              <div class="col-md-4">
                <div class="mb-2 card">
                  <div class="px-3 pt-3 pb-2 card-body">
                    <h5 class="mb-2 card-title text-truncate" :title="`Index: ${rowIndex}`">
                      <span :class="['font-16', statusClass[row.onlineStatus]]">⬤</span> {{ row.name }}
                    </h5>
                    <h6 class="card-subtitle text-truncate text-muted">{{ row.email }}</h6>
                    <p class="mb-0 card-text text-truncate">{{ row.balance }}</p>
                    <p class="text-right card-text text-truncate">{{ isoDateToEuroDate(row.birthdate) }}</p>
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


<style scoped>
.btn-group .badge {
  position: absolute;
  top: -10px;
  right: -10px;
  z-index: 10;
}
</style>
