<template>
  <div>
    <div id="all-photos">
      <div class="base-container no-margin">
        <div class="label-container">
          Have All Photos Been Taken?
        </div>
        <div class="slot-container">
          <div class="slot-row">
            <div id="slot1">
              <div class="cb-container">
                <div class="e-checkbox box-label" />
                <span class="choice-text">Yes</span>
                &nbsp;&nbsp;
                <div class="e-checkbox box-label" />
                <span class="choice-text">No</span>
              </div>
            </div>
            <div id="slot2" />
          </div>
          <div class="slot-row">
            <div id="slot3" />
            <div id="slot4" />
          </div>
        </div>
      </div>
    </div>
    <div id="all-photos-elevation">
      <div class="base-container no-margin">
        <div class="label-container">
          Damaged Elevation(s)?
          <span style="color: red" />
          <span style="color: white; font-size: 2pt">null</span>
        </div>
        <div class="slot-container">
          <div class="slot-row">
            <div id="slot1">
              <div class="cb-container">
                <div class="e-checkbox box-label" />
                <span class="choice-text">Yes</span>
                &nbsp;&nbsp;
                <div class="e-checkbox box-label" />
                <span class="choice-text">No</span>
              </div>
            </div>
            <div id="slot2" />
          </div>
          <div class="slot-row">
            <div id="slot3" />
            <div id="slot4" />
          </div>
        </div>
      </div>
    </div>
    <div id="all-photos-assessment">
      <div class="base-container no-margin">
        <div class="label-container">
          Repairability Assessment?
          <span style="color: red" />
          <span style="color: white; font-size: 2pt">null</span>
        </div>
        <div class="slot-container">
          <div class="slot-row">
            <div id="slot1">
              <div class="cb-container">
                <div class="e-checkbox box-label" />
                <span class="choice-text">Yes</span>
                &nbsp;&nbsp;
                <div class="e-checkbox box-label" />
                <span class="choice-text">No</span>
              </div>
            </div>
            <div id="slot2" />
          </div>
          <div class="slot-row">
            <div id="slot3" />
            <div id="slot4" />
          </div>
        </div>
      </div>
    </div>
    <div id="all-photos-appearance">
      <div class="base-container no-margin">
        <div class="label-container">
          Appearance Test?
          <span style="color: red" />
          <span style="color: white; font-size: 2pt">null</span>
        </div>
        <div class="slot-container">
          <div class="slot-row">
            <div id="slot1">
              <div class="cb-container">
                <div class="e-checkbox box-label" />
                <span class="choice-text">Yes</span>
                &nbsp;&nbsp;
                <div class="e-checkbox box-label" />
                <span class="choice-text">No</span>
              </div>
            </div>
            <div id="slot2" />
          </div>
          <div class="slot-row">
            <div id="slot3" />
            <div id="slot4" />
          </div>
        </div>
      </div>
    </div>
    <div id="all-photos-shingle">
      <div class="base-container">
        <div class="label-container">
          Shingle Gauge Photo Taken?
          <span style="color: red" />
          <span style="color: white; font-size: 2pt">true</span>
        </div>
        <div class="slot-container">
          <div class="slot-row">
            <div id="slot1">
              <div class="cb-container">
                <div class="e-checkbox box-label answered" />
                <span class="choice-text">Yes</span>
                &nbsp;&nbsp;
                <div class="e-checkbox box-label" />
                <span class="choice-text">No</span>
              </div>
            </div>
            <div id="slot2">
              <div>
                <div class="flexRowSpaceBetweenNoWrap test">
                  <span class="assetCount"><span>(1)</span></span>
                  <div class="icon-container">
                    <div class="k-widget k-upload k-upload-async k-upload-empty">
                      <div class="k-dropzone">
                        <div class="k-button k-upload-button">
                          <input
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
                        <em class="k-dropzone-hint">Drop files here to upload</em>
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
    <div id="all-photos-pitch">
      <div class="base-container">
        <div class="label-container">
          Pitch Gauge Photo Taken?
          <span style="color: red" />
          <span style="color: white; font-size: 2pt">true</span>
        </div>
        <div class="slot-container">
          <div class="slot-row">
            <div id="slot1">
              <div class="cb-container">
                <div class="e-checkbox box-label answered" />
                <span class="choice-text">Yes</span>
                &nbsp;&nbsp;
                <div class="e-checkbox box-label" />
                <span class="choice-text">No</span>
              </div>
            </div>
            <div id="slot2">
              <div>
                <div class="flexRowSpaceBetweenNoWrap test">
                  <span class="assetCount"><span>(1)</span></span>
                  <div class="icon-container">
                    <div class="k-widget k-upload k-upload-async k-upload-empty">
                      <div class="k-dropzone">
                        <div class="k-button k-upload-button">
                          <input
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
                        <em class="k-dropzone-hint">Drop files here to upload</em>
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
  </div>
</template>
