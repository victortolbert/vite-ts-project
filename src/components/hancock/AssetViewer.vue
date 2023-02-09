<template>
  <div style="width:100%;background-color:red">
    <div style="width:100%;background-color:yellow;z-index: 3;">
      <b-modal
        id="assetViewer"
        v-model="assetViewer.open"
        header-class="card-header"
        :no-close-on-backdrop="assetViewer.noCloseOnBackdrop"
        :no-close-on-esc="assetViewer.noCloseOnEsc"
        size="md"
      >
        <div slot="modal-title">
          <span>Asset Viewer</span>
        </div>

        <div class="assetRow" v-for="asset in assetViewer.data">
          <div class="viewerContainer">
            <div class="viewerRow">
              <div class="viewerItem" v-on:click="asset.IsSelected = !asset.IsSelected">
                <div
                  style="width:100%"
                  class="eCheckbox"
                  v-bind:class="{ answered: asset.IsSelected }"
                >&nbsp;</div>
              </div>
              <div>
                <img
                  class="pifAssetImage img-responsive img-thumbnail"
                  v-bind:src="urlBuilder(asset.FullPath)"
                />
              </div>

              <div class="viewerItem">
                <span class="assetLabel">AssetName:</span>
                <span class="assetText">{{ asset.AssetName }}</span>
                <br />
                <span
                  class="noMetadata"
                  v-if="asset.HasMetaData != null && !asset.HasMetaData"
                >Missing Metadata! Will not be included in Emails or Photo Forms.</span>
              </div>
            </div>
          </div>
        </div>

        <div slot="modal-footer">
          <button
            v-if="ShowDelete()"
            v-on:click.prevent="DeleteAsset"
            type="button"
            class="btn btn-primary btn-s"
          >Delete Selected Assets</button>
          <b-button variant="primary" v-on:click.prevent="assetViewer.open = false">Close</b-button>
        </div>
      </b-modal>
    </div>
  </div>
</template>
