<template>
  <div class="cbContainer">
    <div
      class="eCheckbox boxLabel"
      @click="$emit('onchanged', SetResponse(true))"
      v-bind:class="{ answered: (currentValue != null) && response && response != null }"
    ></div>
    <span class="choiceText">{{ choices[0] }}</span>
    &nbsp;&nbsp;
    <div
      class="eCheckbox boxLabel"
      @click="$emit('onchanged', SetResponse(false))"
      v-bind:class="{ answered: (currentValue != null) && !response && response != null }"
    ></div>
    <span class="choiceText">{{ choices[1] }}</span>
  </div>
</template>

