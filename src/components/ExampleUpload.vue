<script>
export default {
  data() {
    return {
      dropFiles: [],
    }
  },
  methods: {
    deleteDropFile(index) {
      this.dropFiles.splice(index, 1)
    },
  },
}
</script>

<template>
  <o-field>
    <o-upload v-model="dropFiles" multiple drag-drop>
      <section class="ex-center">
        <p>
          <o-icon icon="upload" size="is-large" />
        </p>
        <!-- <p>Drop your files here or click to upload</p> -->
      </section>
    </o-upload>
  </o-field>
</template>

<style>
  .ex-center {
    text-align: center;
  }
</style>
