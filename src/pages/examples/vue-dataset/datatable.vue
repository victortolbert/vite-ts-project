<script>
import users from '~/data/users-vue-dataset.json'
// import '~/assets/sass/vue-dataset.scss'

import { isoDateToEuroDate, isoDateToDate, searchAsEuroDate } from '~/utilities'

export default {
  data() {
    return {
      users,
      cols: [
        {
          name: 'Name',
          field: 'name',
          sort: ''
        },
        {
          name: 'Email',
          field: 'email',
          sort: ''
        },
        {
          name: 'Birthdate',
          field: 'birthdate',
          sort: ''
        }
      ]
    }
  },
  computed: {
    sortBy() {
      return this.cols.reduce((acc, o) => {
        if (o.sort) {
          o.sort === 'asc' ? acc.push(o.field) : acc.push('-' + o.field)
        }
        return acc
      }, [])
    }
  },
  methods: {
    click(event, i) {
      let toset
      const sortEl = this.cols[i]
      if (!event.shiftKey) {
        this.cols.forEach((o) => {
          if (o.field !== sortEl.field) {
            o.sort = ''
          }
        })
      }
      if (!sortEl.sort) {
        toset = 'asc'
      }
      if (sortEl.sort === 'desc') {
        toset = event.shiftKey ? '' : 'asc'
      }
      if (sortEl.sort === 'asc') {
        toset = 'desc'
      }
      sortEl.sort = toset
    },
    isoDateToEuroDate,
    isoDateToDate,
    searchAsEuroDate
  }
}
</script>

<template>
  <article class="mt-8 px-8">
    <base-box>
      <div class>
        <dataset
          v-slot="{ ds }"
          :ds-data="users"
          :ds-sortby="sortBy"
          :ds-sort-as="{ birthdate: isoDateToDate }"
          :ds-search-in="['balance', 'birthdate', 'name', 'company', 'email', 'phone', 'address', 'favoriteAnimal']"
          :ds-search-as="{ birthdate: searchAsEuroDate }"
        >
          <div class="grid gap-8 grid-cols-2 items-center">
            <dataset-show class="flex items-center space-x-2" />
            <dataset-search ds-search-placeholder="Search..." />
          </div>

          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden shadow-md sm:rounded-lg">
                <table class="table-fixed min-w-full">
                  <thead class="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      <th scope="col">#</th>
                      <th
                        scope="col"
                        v-for="(th, index) in cols"
                        :key="th.field"
                        :class="['sort py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400', th.sort]"
                        @click="click($event, index)"
                      >
                        {{ th.name }}
                        <i class="float-right gg-select"></i>
                      </th>
                      <th scope="col" class="relative py-3 px-6">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>

                  <dataset-item tag="tbody">
                    <template #default="{ row, rowIndex }">
                      <tr
                        class="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600"
                      >
                        <th scope="row">{{ rowIndex + 1 }}</th>
                        <td
                          class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >{{ row.name }}</td>
                        <td
                          class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
                        >{{ row.email }}</td>
                        <td
                          class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
                        >{{ isoDateToEuroDate(row.birthdate) }}</td>
                        <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                          <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                      </tr>
                    </template>
                  </dataset-item>
                </table>
              </div>
            </div>
          </div>

          <dataset-info />
          <dataset-pager />
        </dataset>
      </div>
    </base-box>
  </article>
</template>



<style lang="scss">
.gg-select {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(1);
  width: 22px;
  height: 22px;
}
.gg-select::after,
.gg-select::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 8px;
  height: 8px;
  left: 7px;
  transform: rotate(-45deg);
}
.gg-select::before {
  border-left: 2px solid;
  border-bottom: 2px solid;
  bottom: 4px;
  opacity: 0.3;
}
.gg-select::after {
  border-right: 2px solid;
  border-top: 2px solid;
  top: 4px;
  opacity: 0.3;
}
th.sort {
  cursor: pointer;
  user-select: none;
  &.asc {
    .gg-select::after {
      opacity: 1;
    }
  }
  &.desc {
    .gg-select::before {
      opacity: 1;
    }
  }
}
</style>
