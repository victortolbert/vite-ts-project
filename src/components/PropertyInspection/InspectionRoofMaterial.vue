<template>
  <div id="RoofMaterial">
    <div class="baseContainer">
      <div class="labelContainer">
        Roof Material:
        <span style="color: red" />
        <span style="color: white; font-size: 2pt">Other</span>
      </div>
      <div class="slotContainer">
        <div class="slotRow">
          <div id="slot1">
            <div class="flexRowStartWrap">
              <div class="choiceContainer">
                <div class="eCheckbox boxLabel" />
                <span class="choiceText">Flat</span>
              </div>
              <div class="choiceContainer">
                <div class="eCheckbox boxLabel" />
                <span class="choiceText">Metal</span>
              </div>
              <div class="choiceContainer">
                <div class="eCheckbox boxLabel" />
                <span class="choiceText">Tile</span>
              </div>
              <div class="choiceContainer">
                <div class="eCheckbox boxLabel" />
                <span class="choiceText">Wood</span>
              </div>
              <div class="choiceContainer">
                <div class="eCheckbox boxLabel" />
                <span class="choiceText">20 Year Comp.</span>
              </div>
              <div class="choiceContainer">
                <div class="eCheckbox boxLabel" />
                <span class="choiceText">25 Year Comp.</span>
              </div>
              <div class="choiceContainer">
                <div class="eCheckbox boxLabel" />
                <span class="choiceText">25 Year Organic</span>
              </div>
              <div class="choiceContainer">
                <div class="eCheckbox boxLabel" />
                <span class="choiceText">30 Year Organic</span>
              </div>
              <div class="choiceContainer">
                <div class="eCheckbox boxLabel" />
                <span class="choiceText">Laminate 30 Year</span>
              </div>
              <div class="choiceContainer">
                <div class="eCheckbox boxLabel" />
                <span class="choiceText">Rolled</span>
              </div>
              <div class="choiceContainer">
                <div class="eCheckbox boxLabel" />
                <span class="choiceText">Mod Bit</span>
              </div>
              <div class="choiceContainer">
                <div class="eCheckbox boxLabel answered" />
                <span class="choiceText">Other</span>
              </div>
            </div>
          </div>
          <div id="slot2">
            <div>
              <div class="flexRowSpaceBetweenNoWrap test">
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
        <div class="slotRow">
          <div id="slot3" />
          <div id="slot4" />
        </div>
      </div>
    </div>
  </div>
</template>
