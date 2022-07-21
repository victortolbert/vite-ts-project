<script>
export default {
  name: 'MySignaturePad',
  methods: {
    undo() {
      this.$refs.signaturePad.undoSignature()
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature()
      console.log(isEmpty)
      console.log(data)
    },
    onBegin() {
      console.log('=== Begin ===')
    },
    onEnd() {
      console.log('=== End ===')
    },

  },
}
</script>

<template>
  <div id="app">
    <VueSignaturePad
      ref="signaturePad" class="border-2 border-red-500 h-16"
      :options="{ onBegin, onEnd }"
    />
    <div>
      <button @click="save">
        Save
      </button>
      <button @click="undo">
        Undo
      </button>
      </vuesignaturepad>
    </div>
  </div>
</template>
