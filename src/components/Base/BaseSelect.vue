<script>
import useUniqueID from '~/composables/useUniqueID'
import useForm from '~/composables/useForm'

export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number]
    }
  },
  setup(props, context) {
    const { updateValue } = useForm(props, context)
    const uuid = useUniqueID().getID()
    return {
      updateValue,
      uuid
    }
  }
}
</script>

<template>
  <label
    v-if="label"
    :for="uuid"
    class="block text-sm font-medium text-primary-700 dark:text-primary-50"
  >{{ label }}</label>
  <select
    class="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md dark:border-primary-800 dark:bg-primary-600 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
    v-bind="{
      ...$attrs,
      onChange: updateValue
    }"
    :value="modelValue"
    :id="uuid"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : false"
    :class="{ error }"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
    >{{ option }}</option>
  </select>
  <BaseErrorMessage
    class="mt-1 text-xs text-red-600 sentence first-letter:uppercase"
    v-if="error"
    :id="`${uuid}-error`"
  >{{ error }}</BaseErrorMessage>
</template>
