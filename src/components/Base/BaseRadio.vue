<script>
import useUniqueID from '~/composables/useUniqueID'
import useForm from '~/composables/useForm'

export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number]
    },
    value: {
      type: [String, Number]
    },
    error: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    const uuid = useUniqueID().getID()
    const { updateValue } = useForm(props, context)
    return {
      updateValue,
      uuid
    }
  }
}
</script>

<template>
  <input
    type="radio"
    v-bind="{ ...$attrs, onChange: updateValue }"
    :checked="modelValue === value"
    :id="uuid"
    class="w-4 h-4 border-gray-300 focus:ring-primary-500 text-primary-600"
  />
  <label class="ml-2" v-if="label" :for="uuid">{{ label }}</label>
  <BaseErrorMessage v-if="error" :id="`${uuid}-error`">{{ error }}</BaseErrorMessage>
</template>
