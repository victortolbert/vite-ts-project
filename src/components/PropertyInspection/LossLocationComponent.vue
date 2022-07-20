<script lang="ts" setup>
</script>

<template>
  <div id="loss-location">
    <div class="base-container">
      <div class="label-container">
        <h2 class="text-lg font-semibold">
          Loss Location
        </h2>
      </div>
      <div class="slot-container">
        <div class="slot-row">
          <div id="slot1">
            <div class="flex-row-start-no-wrap">
              <div class="choice-container">
                <div>
                  <!-- class="text-sm border-transparent rounded form-control form-value tb tb-area" -->
                  <textarea rows="2" maxlength="100">
240 EAST WOODLAND ST HOUSTON, Texas 77009
</textarea>
                  <p class="text-sm text-left">
                    Remaining Characters:
                    <b>57</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="slot2">
            <div>
              <div class="mt-4 flex-row-space-between-no-wrap test">
                <div class="icon-container">
                  <div class="k-widget k-upload k-upload-async k-upload-empty">
                    <div class="k-dropzone">
                      <div class="k-button k-upload-button">
                        <input
                          type="file"
                          class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
                        >

                        <input
                          v-if="false"
                          id="file"
                          type="file"
                          name="file"
                          data-role="upload"
                          aria-label=""
                          multiple=""
                          autocomplete="off"
                        >
                        <span />
                      </div>
                      <em v-if="false" class="k-dropzone-hint">
                        Drop files here to upload
                      </em>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="slot-row">
          <div id="slot3" />
          <div id="slot4" />
        </div>
      </div>
    </div>
  </div>
</template>
