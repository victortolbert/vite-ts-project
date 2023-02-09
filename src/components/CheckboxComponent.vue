<script setup lang="ts">
interface Props {
  currentValue?: string | null;
  choices?: Array<string>;
  hideMargin?: boolean;
  allowMultiple?: boolean;
  validate?: boolean;

  maxCharacters?: number;
  minCharacters?: number;
  textArea?: boolean;
  disabled?: boolean;
  visible?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  validate: true,
})

const response = ref(props.currentValue != null ? props.currentValue : '')

const Selected = (choice: string) => {
  if (props.allowMultiple) {
    return response.value.includes(choice)
  } else {
    if (response.value == choice && response.value != 'Null' || (props.currentValue != null && props.currentValue == choice)) {
      return true;
    } else {
      return false;
    }
  }
}

const SetResponse = (choice: string, currentResponse: string) => {
  let result = ''

  if (currentResponse.length == 0) {
    result = choice

    response.value = result
    return result
  }

  if (!props.allowMultiple) {
    if (choice == currentResponse) {
      result = ''
    } else {
      result = choice
    }
  } else if (props.allowMultiple) {
    if (currentResponse.includes(choice)) {
      var removeLead = '|' + choice
      var removeTrail = choice + '|'

      result = props.allowMultiple
        ? currentResponse.replace(removeLead, '').replace(removeTrail, '').replace(choice, '')
        : ''
    } else {
      if (currentResponse.length == 0) {
        result = choice
      } else {
        result = currentResponse + '|' + choice
      }
    }
  }
  response.value = result
  return result
}
</script>

<template>
  <div class="w-full flexRowStartWrap">
    <div class="choiceContainer" v-for="choice in choices">
      <div
        class="eCheckbox boxLabel"
        v-bind:click="$emit('onchanged', SetResponse(choice, response))"
        v-bind:class="{ answered: Selected(choice) }"
      ></div>
      <span class="choiceText">{{ choice }}</span>
    </div>
  </div>
</template>
