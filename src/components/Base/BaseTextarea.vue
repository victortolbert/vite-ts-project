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
    }
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

<template>
  <div>
    <label class="block text-sm font-medium text-primary-700 dark:text-primary-50" v-if="label" :for="uuid">{{ label }}</label>
    <div class="mt-1">
      <textarea
        v-model="message"
        rows="4"
        :id="uuid"
        class="block w-full border-gray-300 rounded-md shadow-sm text-primary-900 dark:text-primary-100 dark:border-primary-800 dark:bg-primary-600 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
      />
    </div>
  </div>
</template>
