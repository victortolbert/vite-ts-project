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
      type: Boolean
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
    v-bind="{ ...$attrs, onChange: updateValue }"
    :checked="modelValue"
    :id="uuid"
    type="checkbox"
    class="w-4 h-4 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
  />
  <label class="ml-2" :for="uuid" v-if="label">{{ label }}</label>
  <BaseErrorMessage v-if="error" :id="`${uuid}-error`">{{ error }}</BaseErrorMessage>
</template>
