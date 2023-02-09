<script>
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

<template>
  <div>
    <article>
      <section class="p-6 mt-4 bg-white rounded-lg shadow-lg dark:text-white dark:bg-black">
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
            <td :class="props.className">
              {{ getNestedValue(props.field, props.dataItem) }}
            </td>
          </template>

          <grid-toolbar>
            <div @click="closeEdit">
              <button title="Add new" class="k-button k-primary" @click="addRecord">Add new</button>
            </div>
          </grid-toolbar>
        </Grid>
      </section>
    </article>
  </div>
</template>

