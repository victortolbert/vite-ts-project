<template>
  <div class="flexColumnStartWrap asSectionContainer">
    <b-modal
      id="editModal"
      v-model="editModal.open"
      header-class="card-header"
      :no-close-on-backdrop="editModal.noCloseOnBackdrop"
      :no-close-on-esc="editModal.noCloseOnEsc"
      v-on:hide="onHide"
      size="md"
    >
      <div slot="modal-header" class="flex items-center justify-between w-full">
        <span class="text-lg font-semibold">{{ title }}</span>
        <button v-on:click.prevent="editModal.open = false">
          <i-heroicons-solid-x />
        </button>
      </div>

      <div class="modalMessage validation" v-show="editModal.validator">
        <label class="col-sm-12">{{ editModal.validator }}</label>
      </div>

      <div>
        <slot name="form"></slot>
      </div>

      <div slot="modal-footer">
        <div v-if="editModal.showUnsavedChangesWarning">
          <b-alert show variant="warning">You have unsaved changes. Are you sure you want to cancel?</b-alert>
        </div>
        <div v-if="editModal.showUnsavedChangesWarning" class="text-right">
          <b-button variant="primary" v-on:click.prevent="confirmed">Yes</b-button>
          <b-button
            variant="outline-primary"
            v-on:click.prevent="showUnsavedChangesWarning = false"
          >No</b-button>
        </div>
        <div>
          <b-button variant="outline-primary" v-on:click.prevent="cancel">Cancel</b-button>
          <b-button
            variant="primary"
            v-bind:disabled="editModal.busy"
            v-on:click.prevent="Save"
          >Save</b-button>
        </div>
      </div>
    </b-modal>
  </div>
</template>
