<script setup lang="ts">
interface Props {
  currentValue?: number | string;

  maxCharacters?: number;
  minCharacters?: number;
  // textArea?: boolean;
  // hideMargin?: boolean;
  disabled?: boolean;
  visible?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  // count: 0,
  maxCharacters: 500,
  minCharacters: 500,
  disabled: false,
  visible: true,
})


const emit = defineEmits<{
  (e: 'onchanged', response: string | number): void,
}>()

const response = ref(props.currentValue != null ? props.currentValue : 0)

const onChange = (event: any) => {
  response.value = event.target.value

  emit('onchanged', response.value)

  console.log("this.response: " + response.value)
}
</script>

<template>
  <div class="flexRowStartNoWrap" style="width:100%">
    <div class="choiceContainer">
      <div>
        <kendo-numerictextbox
          v-on:change="onChange"
          :format="'n0'"
          :min="0"
          :value="response"
          :decimals="0"
          :round="false"
        ></kendo-numerictextbox>
      </div>
    </div>
  </div>
</template>
