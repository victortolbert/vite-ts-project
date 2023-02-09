<script>
import { Grid, GridToolbar, GridNoRecords } from '@progress/kendo-vue-grid'
import { process } from '@progress/kendo-data-query'
import EditInlineCommandCell from '~/components/EditInlineCommandCell.vue'

export default {
    components: {
        'Grid': Grid,
        'grid-toolbar': GridToolbar,
        'grid-norecords': GridNoRecords,
        'custom': EditInlineCommandCell,
    },
    data: function () {
        return {
            filter: null,
            sort: null,
            pageable: true,
            gridData: [],
            skip: 0,
            take: 10,
            total: 100,
            updatedData: [],
            editID: null,
            columns: [
                { field: 'ProductID', filterable: false, editable: false, title: 'ID', width: '80px', },
                { field: 'ProductName', title: 'Name', },
                { field: 'UnitPrice', filter: 'numeric', title: 'Unit Price', },
                { field: 'UnitsInStock', title: 'Units', filter: 'numeric', width: '200px', editor: 'numeric', },
                { field: 'Discontinued', title: 'Discontinued', editor:'boolean', },
                { cell: 'myTemplate', filterable: false, width: '210px', },
            ],
            gridData: [],
        }
    },
    computed: {
        hasItemsInEdit() {
            return this.gridData.filter(p => p.inEdit).length > 0
        }
    },
    created() {
        this.updatedData = this.createRandomData(this.total)
        this.getData()
    },
    methods: {
        itemChange (event) {
            if (event.dataItem.ProductID) {
              let index = this.gridData.findIndex(p => p.ProductID === event.dataItem.ProductID)
              let updated = Object.assign({},this.gridData[index], {[event.field]:event.value})
              this.gridData.splice(index, 1, updated)
            } else {
              event.dataItem[event.field] = event.value
            }
        },
        insert() {
            const dataItem = { inEdit: true }
            this.gridData.splice(0, 0, dataItem)
        },
        edit (event) {
            let index = this.gridData.findIndex(p => p.ProductID === event.dataItem.ProductID)
            let updated = Object.assign({},this.gridData[index], { inEdit: true })
            this.gridData.splice(index, 1, updated)
        },
        save(event) {
            let index = this.gridData.findIndex(p => p.ProductID === event.dataItem.ProductID)
            let item = this.gridData[index]
            let updated = Object.assign(this.update(this.gridData.slice(), item), {inEdit:undefined})
            this.gridData.splice(index, 1, updated)
            let updateDataIndex = this.updatedData.findIndex(p => p.ProductID === event.dataItem.ProductID)
            this.updatedData.splice(updateDataIndex, 1, updated)
        },
        update(data, item, remove) {
            let updated
            let index = data.findIndex(p => item.ProductID && p.ProductID === item.ProductID)
            if (index >= 0) {
                updated = Object.assign({}, item)
                data[index] = updated
            } else {
                let id = 1
                this.updatedData.forEach(p => { if (p.ProductID) { id = Math.max(p.ProductID + 1, id) } })
                updated = Object.assign({}, item, { ProductID: id })
                data.unshift(updated)
                index = 0
            }

            if (remove) {
                data = data.splice(index, 1)
            }
            return data[index]
        },
        cancel(event) {
            if (event.dataItem.ProductID) {
                let index = this.gridData.findIndex(p => p.ProductID === event.dataItem.ProductID)
                let updateDataIndex = this.updatedData.findIndex(p => p.ProductID === event.dataItem.ProductID)
                let updated = Object.assign(this.updatedData[updateDataIndex], {'inEdit': undefined})
                this.gridData.splice(index, 1, updated)
            } else {
              let index = this.gridData.findIndex(p => JSON.stringify(event.dataItem) === JSON.stringify(p))

              this.gridData.splice(index, 1)
            }
        },
        remove(event) {
            event.dataItem.inEdit = undefined
            this.update(this.gridData, event.dataItem, true)
            this.update(this.updatedData, event.dataItem, true)
        },
        cancelChanges () {
             let editedItems = this.updatedData.filter(p => p.inEdit === true)
             if(editedItems.length){
                editedItems.forEach(
                    item => {
                       item.inEdit = undefined
                     })
             }
            this.getData()
        },
         getData () {
            this.gridData = process(
              this.updatedData,
             {
               take: this.take,
               skip: this.skip,
               sort: this.sort,
               filter: this.filter
            }).data

           this.total = process(
              this.updatedData,
             {
               filter: this.filter
            }).total
        },
        createAppState (dataState) {
            this.take = dataState.take
            this.skip = dataState.skip
            this.filter = dataState.filter
            this.sort = dataState.sort
            this.getData()
        },
        dataStateChange (event) {
            this.createAppState(event.data)
        },
        createRandomData(count) {
            const productNames = ['Chai', 'Chang', 'Syrup', 'Apple', 'Orange', 'Banana', 'Lemon', 'Pineapple', 'Tea', 'Milk']
            const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120]
            const units = [2, 7, 12, 25,  67, 233, 123, 53, 67, 89]
            const trueFalse = [true, false]

            return Array(count).fill({}).map((_, index) => ({
                ProductID: index + 1,
                ProductName: productNames[Math.floor(Math.random() * productNames.length)],
                UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
                UnitsInStock: units[Math.floor(Math.random() * units.length)],
                Discontinued: trueFalse[Math.floor(Math.random() * trueFalse.length)],
            }))
        }
    }
}
</script>

<template>
 <Grid ref="grid"
          :style="{height: '440px'}"
          :data-items="gridData"
          :edit-field="'inEdit'"
          :sortable="true"
          :pageable="pageable"
          :take="take"
          :skip="skip"
          :total="total"
          @itemchange="itemChange"
          @datastatechange="dataStateChange"
          :columns="columns">
        <template v-slot:myTemplate="{props}">
            <custom :data-item="props.dataItem"
                    @edit="edit"
                    @save="save"
                    @remove="remove"
                    @cancel="cancel"/>
        </template>
        <grid-toolbar>
            <button title="Add new"
                    class="k-button k-primary"
                    @click='insert' >
                Add new
            </button>
            <button v-if="hasItemsInEdit"
                    title="Cancel current changes"
                    class="k-button"
                    @click="cancelChanges">
                    Cancel current changes
            </button>
        </grid-toolbar>
        <grid-norecords>
            There is no data available custom
        </grid-norecords>
    </Grid>
</template>
