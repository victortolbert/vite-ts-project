<script>
import { Grid } from '@progress/kendo-vue-grid'
import { products } from '~/api/products'

export default {
  components: {
    Grid,
  },
  data() {
    return {
      columns: [
        { field: 'ProductName', title: 'Product Name', className: "product-name " },
        // { field: 'UnitPrice', title: 'Unit Price', cell: "myCellTemplate" },
        { field: 'UnitPrice', title: 'Unit Price', cell: this.headerCellFunction },
        { field: 'UnitsOnOrder', title: 'Units On Order', editor: "numeric" },
        { field: 'ReorderLevel', title: 'Reorder Level' },
        { title: "Total value", cell: this.cellWithBackGround },
      ],
      items: products,
      data: null,
      initialData: [
        {
          ProductID: 1,
          ProductName: 'Tea',
          UnitPrice: 18,
          UnitsOnOrder: 20,
          inEdit: true,
        },
        {
          ProductID: 2,
          ProductName: 'Coffee',
          UnitPrice: 10,
          UnitsOnOrder: 55,
          inEdit: true,
        },
      ],
    }
  },
  mounted () {
    this.data = this.initialData
  },
  methods: {
    customHandler (event) {
      console.log('customHandler', event)
    },
    headerCellFunction (h, emptyElement, props, listeners) {
      return h('span', {
        onClick: this.customHandler
      }, ['custom ' + props.field])
    },
    itemChange (event) {
      const field = event.field || ""
      event.dataItem[field] = event.value
      let newData = this.data.map((item) => {
        if (item.ProductID === event.dataItem.ProductID) {
          item[field] = event.value
        }

        return item
      })
      this.data = newData
    },
    cellWithBackGround (h, tdElement, props, listeners) {
      const product = props.dataItem.UnitPrice * props.dataItem.UnitsOnOrder

      if (product < 400) {
        return h('td',
          {
            style: { "background-color": "rgb(55, 180, 0,0.32)" }
          },
          [product])
      }

      return h('td',
        {
          style: { "background-color": "rgb(243, 23, 0, 0.32)" }
        },
        [product, h('span', {}, ' Maximum exceeded')])
    },
    cellBackground(dataItem) {
      const examplePrice = dataItem.UnitPrice < 15

      return {
        "background-color": examplePrice
          ? "rgb(243, 23, 0, 0.32)"
          : "rgb(55, 180, 0,0.32)"
      }
    },
    cellFunction(h, trElement, defaultSlots, props) {
      const available = !props.dataItem.Discontinued
      const green = {
        backgroundColor: "rgb(55, 180, 0,0.32)",
      }
      const red = {
        backgroundColor: "rgb(243, 23, 0, 0.32)",
      }
      const trProps = {
        style: available ? green : red,
      }

      return h( 'tr', trProps, defaultSlots)
    }
  }
}
</script>

<template>
  <grid
    :style="{ height: '280px' }"
    :data-items="data"
    :columns="columns"
    :row-render="cellFunction"
    :editField="'inEdit'"
    :scrollable="'none'"
    @itemchange="itemChange"
  >
    <template v-slot:headerTemplate="{ props }">
      <button @click="customHandler">{{ props.field }}</button>
    </template>

    <template v-slot:myCellTemplate="{ props }">
      <td :style="cellBackground(props.dataItem)">
        {{ props.dataItem[props.field] }}
        <span v-if="props.dataItem.UnitPrice < 15">
          <span class="k-icon k-i-sort-desc-sm" />
        </span>
        <span v-else>
          <span class="k-icon k-i-sort-asc-sm" />
        </span>
      </td>
    </template>
  </grid>
</template>

<style>
.k-header > .k-link > .k-i-sort-asc-sm {
  color: red;
}

.k-pager-numbers .k-link,
.k-pager-numbers .k-link:link {
  color: black;
}

.product-name {
  color: #f0ffff;
  background-color: #888888;
}
</style>
