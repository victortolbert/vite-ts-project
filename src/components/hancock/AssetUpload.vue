<template  id="asset-upload-template">
  <b-modal
    id="uploadModal"
    v-model="uploadModal.open"
    header-class="card-header"
    :no-close-on-backdrop="uploadModal.noCloseOnBackdrop"
    :no-close-on-esc="uploadModal.noCloseOnEsc"
    v-on:hide="onCloseModal"
    size="md"
  >
    <div slot="modal-title">
      <span class="project">Upload {{ assetType }}</span>
    </div>

    <div v-if="showDescription" style="color:Black; padding:10px;margin:10px;">
      Description:
      <input v-model="description" class="form-control formValue tb" />
    </div>Kendo Upload
    <div>{{ validationMessage }}</div>
    <div class="demo-hint">
      Maximum allowed file size is
      <strong>10MB</strong>.
    </div>
    <div slot="modal-footer">
      <b-button variant="primary" v-on:click.prevent="onCloseModal">Close</b-button>
    </div>
  </b-modal>
</template>
