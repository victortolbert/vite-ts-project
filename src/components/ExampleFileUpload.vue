<script>
import vueFilePond from 'vue-filepond'
import 'filepond/dist/filepond.min.css'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'

// Create component
const FilePond = vueFilePond(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
)

export default {
  name: 'App',
  components: {
    FilePond,
  },
  data() {
    return {
      // fake server to simulate loading a 'local' server file and processing a file
      myServer: {
        process: (fieldName, file, metadata, load) => {
          // simulates uploading a file
          setTimeout(() => {
            load(Date.now())
          }, 1500)
        },
        load: (source, load) => {
          // simulates loading a file from the server
          fetch(source).then(res => res.blob()).then(load)
        },
      },
      myFiles: [{
        source: '/assets/img/home.jpg',
        options: {
          type: 'local',
        },
      }],
    }
  },
  methods: {
    handleFilePondInit() {
      // FilePond instance methods are available on `this.$refs.pond`
      console.log('FilePond has initialized')
    },
  },
}
</script>

<template>
  <div id="component">
    <FilePond
      ref="pond"
      name="test"
      label-idle="Drop files here..."
      allow-multiple="true"
      :server="myServer"
      :files="myFiles"
      @init="handleFilePondInit"
    />
  </div>
</template>
