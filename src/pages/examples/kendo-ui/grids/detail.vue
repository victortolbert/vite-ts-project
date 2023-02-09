<script>
import { Grid } from '@progress/kendo-vue-grid'
import { products } from '~/api/products'
import DetailComponent from '~/components/DetailComponent.vue'

export default {
  components: {
    Grid,
    DetailComponent
  },
  data () {
    return {
      cellTemplate: 'myTemplate',
      products: products,
      products: products,
      expandedItems: [],
      columns: [
        { field: 'CategoryID', title: 'ID', width: '50px', className: 'text-right', headerCell: this.headerCellFunction },
        { field: 'CategoryName', title: 'Name', className: '', headerCell: 'headerTemplate'  },
      ],
      categories: [
        { CategoryID: 1, CategoryName: 'Beverages', Descriptions: 'Soft drinks, coffees, teas, beers, and ales' },
        { CategoryID: 2, CategoryName: 'Condiments', Descriptions: 'Sweet and savory sauces, relishes, spreads, and seasonings' },
        { CategoryID: 3, CategoryName: 'Confections', Descriptions: 'Desserts, candies, and sweet breads' },
        { CategoryID: 4, CategoryName: 'Dairy Products', Descriptions: 'Cheeses' },
        { CategoryID: 5, CategoryName: 'Grains/Cereals', Descriptions: 'Breads, crackers, pasta, and cereal' },
        { CategoryID: 6, CategoryName: 'Meat/Poultry', Descriptions: 'Prepared meats' },
        { CategoryID: 7, CategoryName: 'Produce', Descriptions: 'Dried fruit and bean curd' },
        { CategoryID: 8, CategoryName: 'Seafood', Descriptions: 'Seaweed and fish' },
      ]
    }
  },
  methods: {
    expandChange (event) {
      event.dataItem[event.target.$props.expandField] = !event.dataItem.expanded
    },
    getFilteredProducts(catId) {
      const result = filterBy(products, { field: 'Category.CategoryID', operator: 'eq', value: catId })

      return result
    },
            customHandler: function(e){
            console.log('customHandler', e);
        },
        headerCellFunction: function (h, emptyElement , props, listeners ) {
            return h('span', {
                onClick: this.customHandler
            }, ['custom ' + props.field]);
        },
  }
}
</script>

<template>
  <grid
    ref="grid"
    :style="{ height: '350px' }"
    :data-items="categories"
    :detail="cellTemplate"
    :columns="columns"
    @expandchange="expandChange"
    :expand-field="'expanded'"
  >
    <template v-slot:myTemplate="{ props }">
      <detail-component :data-item="props.dataItem" />
    </template>

             <template v-slot:headerTemplate="{props}">
            <span @click="customHandler">{{ props.field }}</span>
        </template>
  </grid>
</template>
