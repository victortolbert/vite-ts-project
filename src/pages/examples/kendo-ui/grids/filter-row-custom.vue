<script>
import { Grid } from '@progress/kendo-vue-grid'
import { filterBy } from '@progress/kendo-data-query'
import { products } from '~/api/products'

export default {
  components: {
    Grid
  },
  data () {
    return {
      filter: {
        logic: 'and',
        filters: [
          { field: 'UnitPrice', operator: 'neq', value: 18 },
          { field: 'FirstOrderedOn', operator: 'gte', value: new Date('1996-10-10') }
        ]
      }
    }
  },
  computed: {
    products () {
      return filterBy(products, this.filter)
    },
    columns () {
      return [
        { field: 'ProductID', filterable: false, title: 'Product ID', width: '50px' },
        { field: 'ProductName', title: 'Product Name' },
        { field: 'FirstOrderedOn', filter: 'date', title: 'First Ordered On' },
        { field: 'UnitPrice', filter: 'numeric', title: 'Unit Price' },
        { field: 'Discontinued', filter: 'boolean', title: 'Discontinued' }
      ]
    }
  },
  methods: {
    filterChange (event) {
      this.filter = event.filter
    }
  }
}

</script>

<template>
  <Grid
    :data-items="products"
    :filterable="true"
    :filter="filter"
    @filterchange="filterChange"
    :columns="columns"
  ></Grid>
</template>
