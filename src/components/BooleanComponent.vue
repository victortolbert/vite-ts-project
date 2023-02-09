<script setup lang="ts">
interface Props {
  currentValue?: boolean | null
  choices?: Array<string>
  camera?: boolean
  validate?: boolean
  visible?: boolean
  customValidator?: string | null
}

const props = withDefaults(defineProps<Props>(), {
  validate: true,
  visible: true
})

const response = ref(props.currentValue)

const SetResponse = (currentResponse: boolean) => {
  if (currentResponse == response.value) {
    response.value = null
  } else {
    response.value = currentResponse;
  }
  return response.value
}
</script>

<template>
  <div class="cbContainer">
    <div
      class="eCheckbox boxLabel"
      v-on:click="$emit('onchanged', SetResponse(true))"
      v-bind:class="{ answered: (currentValue != null) && response && response != null }"
    ></div>
    <span class="choiceText">{{ choices[0] }}</span>
    &nbsp;&nbsp;
    <div
      class="eCheckbox boxLabel"
      v-on:click="$emit('onchanged', SetResponse(false))"
      v-bind:class="{ answered: (currentValue != null) && !response && response != null }"
    ></div>
    <span class="choiceText">{{ choices[1] }}</span>
  </div>
</template>
