<script setup lang="ts">
import { DataAccess } from "~/@types"
import { DropdownListValues } from "@ExemplarViewModels/DropdownListValues"

interface Props {
  bindList: boolean
  uri: string
}

const props = withDefaults(defineProps<Props>(), {
  bindList: false,
})


const accessToken = ref('ACCESS_TOKEN')

const dataSource = ref(new Array<DropdownListValues>())
const hasDataBound = ref(false)
const showLoader = ref(true)
const dataAccess = ref(new DataAccess(accessToken.value))
const ddList = ref(null)

onMounted(async () => {
  if (props.bindList) {
    await GetData()
  }
})

const GetDataCallback = (model: Array<DropdownListValues>) => {
  dataSource.value = model

  if (model && model.length > 0) {
    dataSource.value.unshift(new DropdownListValues('Please select from list...', '0'))
  }

  hasDataBound.value = true
  showLoader.value = false
}


const GetData = async () => {
  console.log("GetData")

  if (props.bindList) {
    await dataAccess.value.GetAsync(props.uri, GetDataCallback, null);
  }
}


const onDataBound = () => {
  if (hasDataBound.value) {
    var ddl: kendo.ui.DropDownList = (<any>ddList.value).kendoWidget()

    ddl.select(0)
    ddl.trigger('change')
  }
}

const reset = () => {
  var ddl: kendo.ui.DropDownList = (<any>ddList.value).kendoWidget()
  ddl.select(0)
}
</script>

<template>
  <div class="relative flex items-center w-full">
    <i-heroicons-solid-refresh
      v-if="showLoader"
      name="refresh"
      class="absolute z-10 ml-2 animate-spin"
    />

    <kendo-dropdownlist
      style="width: 100%; min-width: 160px"
      ref="ddList"
      v-on:change="$emit('onchanged', $event)"
      v-on:dataBound="onDataBound"
      :data-source="dataSource"
      :data-text-field="'text'"
      :data-value-field="'value'"
    ></kendo-dropdownlist>
  </div>
</template>
