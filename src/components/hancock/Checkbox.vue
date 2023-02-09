<template>
  <div class="flexRowStartWrap" style="width:100%;">
    <div class="choiceContainer" v-for="choice in choices">
      <div
        class="eCheckbox boxLabel"
        @click="$emit('onchanged', SetResponse(choice, response))"
        v-bind:class="{ answered: Selected(choice) }"
      ></div>
      <span class="choiceText">{{ choice }}</span>
    </div>
  </div>
</template>
