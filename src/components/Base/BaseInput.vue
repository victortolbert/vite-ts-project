<script>
import useUniqueID from '~/composables/useUniqueID'
import useForm from '~/composables/useForm'

export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
  },
  setup(props, context) {
    const { updateValue } = useForm(props, context)
    const uuid = useUniqueID().getID()
    return {
      updateValue,
      uuid
    }
  },

}
</script>

<style>
.h-label {
  --tw-text-opacity: 1;
  display: block;
  color: rgb(37 56 83 / var(--tw-text-opacity));
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem; /* 20px */
  font-weight: 500;
}
.dark .h-label {
  --tw-text-opacity: 1;
  color: rgba(250, 250, 249, var(--tw-text-opacity));
}
</style>

<template>
  <label
    class="block text-sm font-medium text-primary-700 dark:text-primary-50"
    v-if="label"
    :for="uuid"
  >{{ label }}</label>
  <input
    class="block w-full text-black border-gray-300 rounded-md shadow-sm dark:text-primary-50 dark:border-primary-800 dark:bg-primary-600 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
    v-bind="{
      ...$attrs,
      onInput: updateValue
    }"
    :id="uuid"
    :value="modelValue"
    :placeholder="label"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : false"
    :class="{ '!border-red-600': error }"
  />
  <BaseErrorMessage
    class="mt-1 text-xs text-red-600 sentence first-letter:uppercase"
    v-if="error"
    :id="`${uuid}-error`"
  >{{ error }}</BaseErrorMessage>
</template>
