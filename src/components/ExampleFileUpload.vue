<script>
import vueFilePond from 'vue-filepond'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'

// Create component
const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
)

export default {
  name: 'App',
  components: {
    FilePond,
  },
  data() {
    return { myFiles: ['cat.jpeg'] }
  },
  methods: {
    handleFilePondInit() {
      // eslint-disable-next-line no-console
      console.log('FilePond has initialized')

      // FilePond instance methods are available on `this.$refs.pond`
    },
  },
}
</script>

<template>
  <div id="app">
    <FilePond
      ref="pond"
      name="test"
      label-idle="Drop files here..."
      :allow-multiple="true"
      accepted-file-types="image/jpeg, image/png"
      server="/api"
      :files="myFiles"
      @init="handleFilePondInit"
    />
  </div>
</template>
