<script>
import { Grid } from '@progress/kendo-vue-grid'

export default {
  components: {
    'Grid': Grid,
  },
  data () {
    return {
      dataItems: [],
      skip: 0,
      take: 10,
      columns: [
        { field: 'ProductID' },
        { field: 'ProductName', title: 'Product Name' },
        { field: 'UnitPrice', title: 'Unit Price' },
      ],
    }
  },
  computed: {
    result: {
      get () {
        return this.dataItems.slice(this.skip, this.take + this.skip)
      }
    },
    total() {
      return this.dataItems ? this.dataItems.length : 0
    }
  },
  methods: {
    pageChangeHandler (event) {
      this.skip = event.page.skip
      this.take = event.page.take
    },
    createRandomData(count) {
      const productNames = ['Chai', 'Chang', 'Syrup', 'Apple', 'Orange', 'Banana', 'Lemon', 'Pineapple', 'Tea', 'Milk']
      const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120]

      return Array(count).fill({}).map((_, idx) => ({
        ProductID: idx + 1,
        ProductName: productNames[Math.floor(Math.random() * productNames.length)],
        UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)]
      }))
    }
  },
  mounted() {
    this.dataItems = this.createRandomData(1000)
  }
}
</script>

<template>
  <Grid
    :style="{ height: '450px' }"
    :data-items="result"
    :pageable="true"
    :skip="skip"
    :take="take"
    :total="total"
    :columns="columns"
    @pagechange="pageChangeHandler"
  />
</template>
