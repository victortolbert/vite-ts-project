<template>
  <b-modal
    ref="DeleteAssetModal"
    v-model="unauthorized"
    :no-close-on-backdrop="true"
    :no-close-on-esc="true"
    header-class="card-header"
  >
    <div slot="modal-header">
      <span>Unauthorized</span>
    </div>
    <p>Your session has expired. Please log in again.</p>
    <div slot="modal-footer">
      <b-button variant="primary" v-on:click.prevent="LogIn()">Log In</b-button>
    </div>
  </b-modal>
</template>
