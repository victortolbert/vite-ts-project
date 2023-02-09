<script lang="ts">
import { Grid, GridToolbar, GridNoRecords } from '@progress/kendo-vue-grid'
import { filterBy, orderBy, process } from '@progress/kendo-data-query'
import CommandCell from '~/components/CommandCell.vue'
import faker from 'faker'

export default {
  components: {
    Grid,
    'grid-toolbar': GridToolbar,
    'grid-norecords': GridNoRecords,
    'custom': CommandCell,
  },
  data() {
    return {
      filter: {
        logic: "and",
        filters: [
          { field: "UnitPrice", operator: "neq", value: 18 },
          { field: "FirstOrderedOn", operator: "gte", value: new Date("1996-10-10") }
        ]
      },
      sort: [
        { field: 'ProductName', dir: 'asc' }
      ],
      pageable: true,
      gridData: [],
      skip: 0,
      take: 10,
      total: 100,
      updatedData: [],
      editID: null,
      group: [{ field: 'UnitsInStock' }],
      expandedItems: [],
      columns: [
        {
          field: 'ProductID',
          filterable: false,
          editable: false,
          title: 'ID',
          width: '80px',
          className: "!text-right"
        },
        {
          field: 'ProductName',
          title: 'Name',
          width: '240px',
          // minWidth: '180px',
        },
        {
          field: 'FirstOrderedOn',
          editor: 'date',
          title: 'First Ordered',
          width: '240px',
          // format: '{0:d}',
        },
        {
          field: 'UnitsInStock',
          title: 'Units',
          width: '150px',
          editor: 'numeric',
        },
        {
          field: 'Discontinued',
          title: 'Discontinued',
          editor: 'boolean',
        },
      ],
      gridData: [
        {
          'ProductID': 1,
          'ProductName': 'Chai',
          'UnitsInStock': 39,
          'Discontinued': false,
          'FirstOrderedOn': new Date(1996, 8, 20),
        },
        {
          'ProductID': 2,
          'ProductName': 'Chang',
          'UnitsInStock': 17,
          'Discontinued': false,
          'FirstOrderedOn': new Date(1996, 7, 12),
        },
        {
          'ProductID': 3,
          'ProductName': 'Aniseed Syrup',
          'UnitsInStock': 13,
          'Discontinued': false,
          'FirstOrderedOn': new Date(1996, 8, 26),
        },
        {
          'ProductID': 4,
          'ProductName': "Chef Anton's Cajun Seasoning",
          'UnitsInStock': 53,
          'Discontinued': false,
          'FirstOrderedOn': new Date(1996, 9, 19),
        },
      ],
    }
  },
  computed: {
    result: {
      get() {
        return orderBy(this.createRandomData(500), this.sort)
      }
    },
    getData() {
      return this.result.map(
        (item) => Object.assign({ inEdit: item.ProductID === this.editID }, item))
    },
    hasItemsInEdit() {
      return this.result.filter(p => p.inEdit).length > 0;
    }
  },
  // created: function () {
  //   this.updatedData = this.createRandomData(this.total);
  //   this.getData();
  // },
  methods: {
    itemChange(event) {
      const data = this.result.slice()
      const index = data.findIndex(d => d.ProductID === event.dataItem.ProductID)
      data[index] = { ...data[index], [event.field]: e.value }
      this.result = data
      if (event.dataItem) {
        event.dataItem[event.field] = event.value
      }
    },
    rowClick(event) {
      this.editID = event.dataItem.ProductID
      event.dataItem.inEdit = true
    },
    closeEdit(event) {
      if (event.target === event.currentTarget) {
        this.editID = null
      }
    },
    addRecord() {
      const newRecord = { ProductID: this.result.length + 1 }
      const data = this.result.slice()
      data.unshift(newRecord)
      this.result = data
      this.editID = newRecord.ProductID
    },
    createRandomData(count) {
      const productNames = ['Chai', 'Chang', 'Syrup', 'Apple', 'Orange', 'Banana', 'Lemon', 'Pineapple', 'Tea', 'Milk']
      const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120]
      const units = [2, 7, 12, 25, 67, 233, 123, 53, 67, 89]

      return Array(count).fill({}).map((_, index) => ({
        ProductID: index + 1,
        FirstOrderedOn: faker.date.past(2),
        Discontinued: faker.random.arrayElement([true, false]),
        ProductName: productNames[Math.floor(Math.random() * productNames.length)],
        UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
        UnitsInStock: units[Math.floor(Math.random() * units.length)]
      }));
    },
    sortChangeHandler(event) {
      this.sort = event.sort
    },
    filterChange(event) {
      this.filter = event.filter
    },
    getNestedValue(fieldName, dataItem) {
      const path = fieldName.split('.')
      let data = dataItem;
      path.forEach((p) => {
        data = data ? data[p] : undefined
      })

      return data
    }
  },
}
</script>

<script setup lang="ts">
const cardMode = ref(true)
const editMode = ref(false)
const model = reactive([
  {
    "Id": 37,
    "Name": "Ladder Assist",
    "ShortName": "LA",
    "CustomerDescription": "Adjuster and Technician meet on site at specified time to perform inspection.",
    "IsActive": false,
    "OnExternalForm": true,
    "CreatedBy": "1",
    "CreatedByName": "SYSTEM USER",
    "CreatedOn": "2013-07-19T13:07:34",
    "Duration": 90,
    "HasDescription": false,
    "HasQuantity": false,
    "RequiresDate": true,
    "RequiresPhone": false,
    "ShowCalendar": true
  },
  {
    "Id": 38,
    "Name": "Ladder Assist with Eagle View",
    "ShortName": "EV",
    "CustomerDescription": "Adjuster and Technician meet on site at specified time to perform inspection.",
    "IsActive": true,
    "OnExternalForm": false,
    "CreatedBy": "124",
    "CreatedByName": "Cristina Vielhaber",
    "CreatedOn": "2014-01-17T12:59:36",
    "Duration": 10,
    "HasDescription": false,
    "HasQuantity": false,
    "RequiresDate": true,
    "RequiresPhone": false,
    "ShowCalendar": false
  },
  {
    "Id": 39,
    "Name": "Direct Inspection",
    "ShortName": "DI",
    "CustomerDescription": "Hancock or adjuster sets appointment time with Insured.  Inspection reporting provided within 48 hours of inspection. ** Insured contact information required**",
    "IsActive": true,
    "OnExternalForm": true,
    "CreatedBy": "1",
    "CreatedByName": "SYSTEM USER",
    "CreatedOn": "2013-07-19T13:07:34",
    "Duration": 10,
    "HasDescription": false,
    "HasQuantity": false,
    "RequiresDate": false,
    "RequiresPhone": true,
    "ShowCalendar": true
  },
  {
    "Id": 40,
    "Name": "Estimate Repair",
    "ShortName": "EST",
    "CustomerDescription": null,
    "IsActive": true,
    "OnExternalForm": false,
    "CreatedBy": "1",
    "CreatedByName": "SYSTEM USER",
    "CreatedOn": "2013-07-19T13:07:34",
    "Duration": 30,
    "HasDescription": false,
    "HasQuantity": false,
    "RequiresDate": true,
    "RequiresPhone": false,
    "ShowCalendar": false
  },
  {
    "Id": 41,
    "Name": "Tarp Remove & Reset",
    "ShortName": "R&R",
    "CustomerDescription": "Technician removes and resets existing tarp to complete inspection.",
    "IsActive": true,
    "OnExternalForm": true,
    "CreatedBy": "1",
    "CreatedByName": "SYSTEM USER",
    "CreatedOn": "2013-07-19T13:07:34",
    "Duration": 30,
    "HasDescription": false,
    "HasQuantity": false,
    "RequiresDate": false,
    "RequiresPhone": true,
    "ShowCalendar": false
  },
])
const ShowEditForm = (Id: string) => {
  console.log(Id)
}
</script>

<template>
  <div class="px-8 py-0 mt-8" style="padding: 0 2rem">
    <div
      class="flex items-center p-4 space-x-4 bg-white border rounded-lg shadow-lg dark:border-primary-600 dark:bg-primary-700"
      style="padding: 1rem 2rem"
    >
      <button
        type="button"
        v-on:click="cardMode = false"
        class="flex items-center space-x-2 focus:outline-none"
      >
        <i-heroicons-solid-view-list class="text-gray-500" />
        <span>Grid View</span>
      </button>

      <button
        type="button"
        v-on:click="cardMode = true"
        class="flex items-center space-x-2 focus:outline-none"
      >
        <i-heroicons-solid-view-grid class="text-gray-500" />
        <span>Card View</span>
      </button>
    </div>
  </div>

  <div v-if="cardMode && !editMode" class="px-8 mt-4 card-view-container">
    <div v-for="serviceType in model" class="card-view-template">
      <div
        class="flex flex-col h-full bg-white border-gray-200 rounded-lg shadow-md"
        style="height: 24rem"
      >
        <header class="mt-4 h-card-header">
          <div class="flex items-center justify-between px-6">
            <h3 class="flex items-center space-x-2 font-medium leading-5">
              <span class="h-avatar">{{ serviceType.ShortName }}</span>
              <span>{{ serviceType.Name }}</span>
            </h3>
            <button type="button" v-on:click="ShowEditForm(serviceType.Id)">
              <i class="far fa-edit"></i>
            </button>
          </div>
        </header>

        <!-- Main -->
        <div class="flex-1 p-6 mt-4 overflow-y-auto text-gray-500 border-t card-body">
          <p>{{ serviceType.CustomerDescription }}</p>

          <div class="flex justify-between mt-4 text-gray-500 item-start">
            <div class="w-1/2">
              <div class="h-card-field">
                <label for="duration" class="h-card-label">Duration</label>
                <span id="duration">{{ serviceType.Duration }}</span>
              </div>
            </div>
            <div class="w-1/2">
              <div class="text-right h-card-field">
                <label for="on-external-form" class="h-card-label">On External Form</label>
                <span id="on-external-form">{{ serviceType.OnExternalForm }}</span>
              </div>
            </div>
          </div>

          <div class="w-1/2 mt-4">
            <div class="h-card-field">
              <label for="created-on" class="h-card-label">Created</label>
              <span id="created-on">{{ serviceType.CreatedOn }}</span>
            </div>
          </div>
        </div>

        <footer class="flex items-center justify-between h-card-footer">
          <span
            id="is-active"
            :class="[
              'inline-block px-4 py-1 text-sm font-bold border rounded-full is-active',
              {
                'bg-green-100 text-green-800': serviceType.IsActive,
                'bg-red-100 text-red-800': !serviceType.IsActive
              },
            ]"
          >{{ serviceType.IsActive ? 'Active' : 'Not Active' }}</span>

          <!-- Right Side -->
          <div>Some Icons</div>
        </footer>
      </div>
    </div>
  </div>

  <div v-else class="px-8 mt-4">
    <Grid
      ref="grid"
      :style="{ height: '520px' }"
      :sortable="true"
      :sort="sort"
      :filterable="true"
      :filter="filter"
      :data-items="getData"
      :edit-field="'inEdit'"
      :columns="columns"
      :cell-render="'myTemplate'"
      @rowclick="rowClick"
      @itemchange="itemChange"
      @sortchange="sortChangeHandler"
      @filterchange="filterChange"
    >
      <template v-slot:myTemplate="{ props, listeners }">
        <td :class="props.className">{{ getNestedValue(props.field, props.dataItem) }}</td>
      </template>

      <grid-toolbar>
        <div @click="closeEdit">
          <button title="Add new" class="k-button k-primary" @click="addRecord">Add new</button>
        </div>
      </grid-toolbar>
    </Grid>
  </div>
</template>
