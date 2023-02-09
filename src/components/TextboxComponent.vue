<script setup lang="ts">
interface Props {
  currentValue?: string;
  maxCharacters?: number;
  minCharacters?: number;
  textArea?: boolean;
  hideMargin?: boolean;
  disabled?: boolean;
  visible?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  maxCharacters: 500,
  minCharacters: 500,
  disabled: false,
  visible: true,
})

const charsEntered = ref(0)

const response = ref(props.currentValue != null ? props.currentValue : '');


onMounted(() => {
  charsEntered.value = response.value != null ? response.value.length : 0
})


const emit = defineEmits<{
  (e: 'changed', response: string): void,
  (e: 'onchanged', response: string): void,
}>()

const KeyPressEvent = (event: any) => {
  if (event.key === "Backspace") {
    response.value = event.target.value;
    if (charsEntered.value > 0) {
      charsEntered.value--;
    }
    emit('changed', response.value)
    return;
  }

  if (charsEntered.value < props.maxCharacters) {
    response.value = event.target.value
    charsEntered.value++
    emit('onchanged', response.value)
  }
}
</script>

<template>
  <div class="w-full flexRowStartNoWrap">
    <div class="choiceContainer">
      <div>
        <input
          v-if="!textArea && !disabled"
          v-on:keyup="KeyPressEvent"
          :maxlength="maxCharacters"
          :value="response"
          class="form-control formValue tb tbAlpha"
        />

        <input
          v-if="!textArea && disabled"
          disabled
          :maxlength="maxCharacters"
          :value="response"
          class="form-control formValue tb tbAlpha"
        />

        <textarea
          v-if="textArea && !disabled"
          v-on:keyup="KeyPressEvent"
          :maxlength="maxCharacters"
          :value="response"
          cols="450"
          class="h-textarea form-control formValue"
          rows="2"
        ></textarea>

        <textarea
          v-if="textArea && disabled"
          :maxlength="maxCharacters"
          :value="response"
          cols="450"
          class="h-textarea form-control formValue"
          rows="2"
          disabled
        ></textarea>

        <div class="mt-1 text-xs">
          Remaining Characters:
          <b>{{ maxCharacters - charsEntered }}</b>
        </div>
      </div>
    </div>
  </div>
</template>
