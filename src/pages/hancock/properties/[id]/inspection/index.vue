<script setup>
const disabled = ref(true)
</script>

<template>
  <page-wrapper>
    <page-header>Property Details</page-header>

    <article>
      <article-section>
        <p>Please remember to save your work and wait for all uploads to complete before returning to the PIFA.</p>
      </article-section>

      <article-section v-if="false" class="mt-12">
        <table class="w-full table-fixed">
          <caption>Color names and values</caption>
          <tbody>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">HEX</th>
              <th scope="col">HSLa</th>
              <th scope="col">RGBa</th>
            </tr>
            <tr>
              <th scope="row">Teal</th>
              <td>
                <code>#51F6F6</code>
              </td>
              <td>
                <code>hsla(180, 90%, 64%, 1)</code>
              </td>
              <td>
                <code>rgba(81, 246, 246, 1)</code>
              </td>
            </tr>
            <tr>
              <th scope="row">Goldenrod</th>
              <td>
                <code>#F6BC57</code>
              </td>
              <td>
                <code>hsla(38, 90%, 65%, 1)</code>
              </td>
              <td>
                <code>rgba(246, 188, 87, 1)</code>
              </td>
            </tr>
          </tbody>
        </table>
      </article-section>

      <!--  -->
      <div class="p-6">
        <div id="LossLocation">
          <div class="baseContainer">
            <div class="labelContainer">
              Loss Location
              <span style="color: red;"></span>
              <span style="color: white; font-size: 2pt;">240 EAST WOODLAND ST HOUSTON, Texas 77009</span>
            </div>
            <div class="slotContainer">
              <div class="slotRow">
                <div id="slot1">
                  <div class="flexRowStartNoWrap">
                    <div class="choiceContainer">
                      <div>
                        <textarea
                          rows="2"
                          maxlength="100"
                          :disabled="disabled"
                          class="form-control formValue tb tbArea"
                        />
                        <div style="font-size: x-small; padding-top: 2px;">
                          Remaining Characters:
                          <b>57</b>
                        </div>
                      </div>
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
                                type="file"
                                id="file"
                                name="file"
                                data-role="upload"
                                aria-label
                                multiple="multiple"
                                autocomplete="off"
                              />
                              <span></span>
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
                <div id="slot3"></div>
                <div id="slot4"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="DirectionNorth">
          <div class="baseContainer">
            <div class="labelContainer">
              Directionality North:
              <span style="color: red;"></span>
              <span style="color: white; font-size: 2pt;">Front</span>
            </div>
            <div class="slotContainer">
              <div class="slotRow">
                <div id="slot1">
                  <div class="flex items-center flexRowStartWrap">
                    <div class="choiceContainer">
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">Front</span>
                    </div>
                    <div class="choiceContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Back</span>
                    </div>
                    <div class="choiceContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Left</span>
                    </div>
                    <div class="choiceContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Right</span>
                    </div>
                  </div>
                </div>
                <div id="slot2"></div>
              </div>
              <div class="slotRow">
                <div id="slot3"></div>
                <div id="slot4"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="OutsideTemp">
          <div class="baseContainer">
            <div class="labelContainer">
              Outside Temperature (F):
              <span style="color: red;"></span>
              <span style="color: white; font-size: 2pt;">55</span>
            </div>
            <div class="slotContainer">
              <div class="slotRow">
                <div id="slot1">
                  <div class="items-center border numericContainer">
                    <div class="flexRowSpaceBetweenNoWrap">
                      <div class="labelContainer">
                        <span>55</span>
                      </div>
                      <div class="iconEnabled">
                        <i class="fad fa-2x fa-calculator"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="slot2"></div>
              </div>
              <div class="slotRow">
                <div id="slot3"></div>
                <div id="slot4"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="AllStateInspection">
          <div class="baseContainer">
            <div class="labelContainer">
              Allstate Inspection?
              <span style="color: red;"></span>
              <span style="color: white; font-size: 2pt;">true</span>
            </div>
            <div class="slotContainer">
              <div class="slotRow">
                <div id="slot1">
                  <div class="cbContainer">
                    <div class="eCheckbox boxLabel answered"></div>
                    <span class="choiceText">Yes</span>
                    &nbsp;&nbsp;
                    <div class="eCheckbox boxLabel"></div>
                    <span class="choiceText">No</span>
                  </div>
                </div>
                <div id="slot2"></div>
              </div>
              <div class="slotRow">
                <div id="slot3"></div>
                <div id="slot4"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="CollaborationSuccessfull">
          <div class="baseContainer noMargin">
            <div class="labelContainer">
              Was the virtual collaboration successful?
              <span style="color: red;"></span>
              <span style="color: white; font-size: 2pt;">Yes</span>
            </div>
            <div class="slotContainer">
              <div class="slotRow">
                <div id="slot1">
                  <div class="flexRowStartWrap">
                    <div class="choiceContainer">
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">Yes</span>
                    </div>
                    <div class="choiceContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">No</span>
                    </div>
                    <div class="choiceContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">NA</span>
                    </div>
                  </div>
                </div>
                <div id="slot2"></div>
              </div>
              <div class="slotRow">
                <div id="slot3"></div>
                <div id="slot4"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="AllPhotos">
          <div class="baseContainer noMargin">
            <div class="labelContainer">
              Have All Photos Been Taken?
              <span style="color: red;"></span>
              <span style="color: white; font-size: 2pt;">null</span>
            </div>
            <div class="slotContainer">
              <div class="slotRow">
                <div id="slot1">
                  <div class="cbContainer">
                    <div class="eCheckbox boxLabel"></div>
                    <span class="choiceText">Yes</span>
                    &nbsp;&nbsp;
                    <div class="eCheckbox boxLabel"></div>
                    <span class="choiceText">No</span>
                  </div>
                </div>
                <div id="slot2"></div>
              </div>
              <div class="slotRow">
                <div id="slot3"></div>
                <div id="slot4"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="AllPhotosElevation">
          <div class="baseContainer noMargin">
            <div class="labelContainer">
              Damaged Elevation(s)?
              <span style="color: red;"></span>
              <span style="color: white; font-size: 2pt;">null</span>
            </div>
            <div class="slotContainer">
              <div class="slotRow">
                <div id="slot1">
                  <div class="cbContainer">
                    <div class="eCheckbox boxLabel"></div>
                    <span class="choiceText">Yes</span>
                    &nbsp;&nbsp;
                    <div class="eCheckbox boxLabel"></div>
                    <span class="choiceText">No</span>
                  </div>
                </div>
                <div id="slot2"></div>
              </div>
              <div class="slotRow">
                <div id="slot3"></div>
                <div id="slot4"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="AllPhotosAssessment">
          <div class="baseContainer noMargin">
            <div class="labelContainer">
              Repairability Assessment?
              <span style="color: red;"></span>
              <span style="color: white; font-size: 2pt;">null</span>
            </div>
            <div class="slotContainer">
              <div class="slotRow">
                <div id="slot1">
                  <div class="cbContainer">
                    <div class="eCheckbox boxLabel"></div>
                    <span class="choiceText">Yes</span>
                    &nbsp;&nbsp;
                    <div class="eCheckbox boxLabel"></div>
                    <span class="choiceText">No</span>
                  </div>
                </div>
                <div id="slot2"></div>
              </div>
              <div class="slotRow">
                <div id="slot3"></div>
                <div id="slot4"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="AllPhotosAppearance">
          <div class="baseContainer noMargin">
            <div class="labelContainer">
              Appearance Test?
              <span style="color: red;"></span>
              <span style="color: white; font-size: 2pt;">null</span>
            </div>
            <div class="slotContainer">
              <div class="slotRow">
                <div id="slot1">
                  <div class="cbContainer">
                    <div class="eCheckbox boxLabel"></div>
                    <span class="choiceText">Yes</span>
                    &nbsp;&nbsp;
                    <div class="eCheckbox boxLabel"></div>
                    <span class="choiceText">No</span>
                  </div>
                </div>
                <div id="slot2"></div>
              </div>
              <div class="slotRow">
                <div id="slot3"></div>
                <div id="slot4"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="AllPhotosShingle">
          <div class="baseContainer">
            <div class="labelContainer">
              Shingle Gauge Photo Taken?
              <span style="color: red;"></span>
              <span style="color: white; font-size: 2pt;">true</span>
            </div>
            <div class="slotContainer">
              <div class="slotRow">
                <div id="slot1">
                  <div class="cbContainer">
                    <div class="eCheckbox boxLabel answered"></div>
                    <span class="choiceText">Yes</span>
                    &nbsp;&nbsp;
                    <div class="eCheckbox boxLabel"></div>
                    <span class="choiceText">No</span>
                  </div>
                </div>
                <div id="slot2">
                  <div>
                    <div class="flexRowSpaceBetweenNoWrap test">
                      <span class="assetCount">
                        <span>(1)</span>
                      </span>
                      <div class="icon-container">
                        <div class="k-widget k-upload k-upload-async k-upload-empty">
                          <div class="k-dropzone">
                            <div class="k-button k-upload-button">
                              <input
                                type="file"
                                id="file"
                                name="file"
                                data-role="upload"
                                aria-label
                                multiple="multiple"
                                autocomplete="off"
                              />
                              <span></span>
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
                <div id="slot3"></div>
                <div id="slot4"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="AllPhotosPitch">
          <div class="baseContainer">
            <div class="labelContainer">
              Pitch Gauge Photo Taken?
              <span style="color: red;"></span>
              <span style="color: white; font-size: 2pt;">true</span>
            </div>
            <div class="slotContainer">
              <div class="slotRow">
                <div id="slot1">
                  <div class="cbContainer">
                    <div class="eCheckbox boxLabel answered"></div>
                    <span class="choiceText">Yes</span>
                    &nbsp;&nbsp;
                    <div class="eCheckbox boxLabel"></div>
                    <span class="choiceText">No</span>
                  </div>
                </div>
                <div id="slot2">
                  <div>
                    <div class="flexRowSpaceBetweenNoWrap test">
                      <span class="assetCount">
                        <span>(1)</span>
                      </span>
                      <div class="icon-container">
                        <div class="k-widget k-upload k-upload-async k-upload-empty">
                          <div class="k-dropzone">
                            <div class="k-button k-upload-button">
                              <input
                                type="file"
                                id="file"
                                name="file"
                                data-role="upload"
                                aria-label
                                multiple="multiple"
                                autocomplete="off"
                              />
                              <span></span>
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
                <div id="slot3"></div>
                <div id="slot4"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="ElevationInspected">
          <div class="baseContainer">
            <div class="labelContainer">
              Was the Elevation Inspected?
              <span style="color: red;"></span>
              <span style="color: white; font-size: 2pt;">true</span>
            </div>
            <div class="slotContainer">
              <div class="slotRow">
                <div id="slot1">
                  <div class="cbContainer">
                    <div class="eCheckbox boxLabel answered"></div>
                    <span class="choiceText">Yes</span>
                    &nbsp;&nbsp;
                    <div class="eCheckbox boxLabel"></div>
                    <span class="choiceText">No</span>
                  </div>
                </div>
                <div id="slot2"></div>
              </div>
              <div class="slotRow">
                <div id="slot3"></div>
                <div id="slot4"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="InteriorInspected">
          <div class="baseContainer">
            <div class="labelContainer">
              Was the Interior Inspected?
              <span style="color: red;"></span>
              <span style="color: white; font-size: 2pt;">false</span>
            </div>
            <div class="slotContainer">
              <div class="slotRow">
                <div id="slot1">
                  <div class="cbContainer">
                    <div class="eCheckbox boxLabel"></div>
                    <span class="choiceText">Yes</span>
                    &nbsp;&nbsp;
                    <div class="eCheckbox boxLabel answered"></div>
                    <span class="choiceText">No</span>
                  </div>
                </div>
                <div id="slot2"></div>
              </div>
              <div class="slotRow">
                <div id="slot3"></div>
                <div id="slot4"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="RoofInspected">
          <div class="baseContainer">
            <div class="labelContainer">
              Was the Roof Inspected?
              <span style="color: red;"></span>
              <span style="color: white; font-size: 2pt;">true</span>
            </div>
            <div class="slotContainer">
              <div class="slotRow">
                <div id="slot1">
                  <div class="cbContainer">
                    <div class="eCheckbox boxLabel answered"></div>
                    <span class="choiceText">Yes</span>
                    &nbsp;&nbsp;
                    <div class="eCheckbox boxLabel"></div>
                    <span class="choiceText">No</span>
                  </div>
                </div>
                <div id="slot2"></div>
              </div>
              <div class="slotRow">
                <div id="slot3"></div>
                <div id="slot4"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="sectionContainer">Elevation Inspection</div>
        <div>
          <div>
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Elevation Photos:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div class="labelContainer">
                          <span>North/Front</span>
                        </div>
                        <span class="assetCount">
                          <span>(1)</span>
                        </span>
                        <div class="icon-container">
                          <div class="k-widget k-upload k-upload-async k-upload-empty">
                            <div class="k-dropzone">
                              <div class="k-button k-upload-button">
                                <input
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
                              </div>
                              <em class="k-dropzone-hint">Drop files here to upload</em>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div class="labelContainer">
                          <span>East/Left</span>
                        </div>
                        <span class="assetCount">
                          <span>(1)</span>
                        </span>
                        <div class="icon-container">
                          <div class="k-widget k-upload k-upload-async k-upload-empty">
                            <div class="k-dropzone">
                              <div class="k-button k-upload-button">
                                <input
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div class="labelContainer">
                          <span>South/Back</span>
                        </div>
                        <span class="assetCount">
                          <span>(1)</span>
                        </span>
                        <div class="icon-container">
                          <div class="k-widget k-upload k-upload-async k-upload-empty">
                            <div class="k-dropzone">
                              <div class="k-button k-upload-button">
                                <input
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
                              </div>
                              <em class="k-dropzone-hint">Drop files here to upload</em>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot4">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div class="labelContainer">
                          <span>West/Right</span>
                        </div>
                        <span class="assetCount">
                          <span>(1)</span>
                        </span>
                        <div class="icon-container">
                          <div class="k-widget k-upload k-upload-async k-upload-empty">
                            <div class="k-dropzone">
                              <div class="k-button k-upload-button">
                                <input
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
                              </div>
                              <em class="k-dropzone-hint">Drop files here to upload</em>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="AllPhotosFront">
            <div class="baseContainer">
              <div class="labelContainer">
                Front Risk Photo Taken?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">true</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <span class="assetCount">
                          <span>(1)</span>
                        </span>
                        <div class="icon-container">
                          <div class="k-widget k-upload k-upload-async k-upload-empty">
                            <div class="k-dropzone">
                              <div class="k-button k-upload-button">
                                <input
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="LandscapeDamaged">
            <div class="baseContainer">
              <div class="labelContainer">
                Landscape Damage?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">No</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">No</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">NA</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="PatioFurniture">
            <div class="baseContainer">
              <div class="labelContainer">
                Patio Furniture Damage?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">No</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">No</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">NA</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="RefrigerationCoilsDamaged">
            <div class="baseContainer">
              <div class="labelContainer">
                Refrigeration Coil Damage?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">No</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">No</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">NA</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Coils Damaged (Units):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span></span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="DeckDamaged">
            <div class="baseContainer">
              <div class="labelContainer">
                Deck Damage?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">No</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">No</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">NA</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Deck Damage (SQFT):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span></span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="DeckPainted" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Deck Painted?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="DeckStained" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Deck Stained?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="DeckMaterial" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Deck Material:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Composite</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Vinyl</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Wood</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="HandrailDamaged">
            <div class="baseContainer">
              <div class="labelContainer">
                Deck Handrail Damage?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">No</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">No</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">NA</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Handrail Damaged (LF):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span></span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="HandrailPainted" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Handrail Painted?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="HandrailStained" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Handrail Stained?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="HandrailMaterial" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Handrail Material:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Composite</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Vinyl</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Wood</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="FenceDamaged">
            <div class="baseContainer">
              <div class="labelContainer">
                Fences Damage?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">No</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">No</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">NA</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Fence Damage (LF):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span></span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Fence Height (LF):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span></span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="FencePainted" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Fences Painted?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="FenceStained" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Fences Stained?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="FenceMaterial" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Fence Material:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Barbed Wire</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Chainlink</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Plastic</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Vinyl</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Wood</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Other</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="FenceMaterialOther" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Fence Material:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartNoWrap">
                      <div class="choiceContainer">
                        <div>
                          <input maxlength="50" class="form-control formValue tb tbAlpha" />

                          <div style="font-size: x-small; padding-top: 2px;">
                            Remaining Characters:
                            <b>50</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="GarageDamaged">
            <div class="baseContainer">
              <div class="labelContainer">
                Garage Damaged:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">No</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">No</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">NA</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="GarageDescription" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Damage Description:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartNoWrap">
                      <div class="choiceContainer">
                        <div>
                          <textarea
                            rows="2"
                            maxlength="1500"
                            class="form-control formValue tb tbArea"
                          ></textarea>

                          <div style="font-size: x-small; padding-top: 2px;">
                            Remaining Characters:
                            <b>1500</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Damage (SQFT):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span></span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="WindowsDamaged">
            <div class="baseContainer">
              <div class="labelContainer">
                Window Damage?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">No</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">No</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">NA</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Window Damage (Qty):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>Small (4-8 SF) Window Damage:</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>Medium (9-12 SF) Window Damage:</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>Large (13-19 SF) Window Damage:</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot4">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>X-Large (20-28 SF) Window Damage:</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div large-label style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Other Window Damage (Qty):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span></span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="WindowOtherDescription" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Other Window Damage Description:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartNoWrap">
                      <div class="choiceContainer">
                        <div>
                          <textarea
                            rows="2"
                            maxlength="1500"
                            class="form-control formValue tb tbArea"
                          ></textarea>

                          <div style="font-size: x-small; padding-top: 2px;">
                            Remaining Characters:
                            <b>1500</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="ScreenDamaged">
            <div class="baseContainer">
              <div class="labelContainer">
                Window Screen Damage?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">No</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">No</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">NA</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Window Screen Damage (Qty):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>Small (1-9 SF) Screen Damage:</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>Medium (10-16 SF) Screen Damage:</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>Large (17-25 SF) Screen Damage:</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot4">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>X-Large (26-32 SF) Screen Damage:</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="WindowWrapDamaged">
            <div class="baseContainer">
              <div class="labelContainer">
                Window Wrap Damage?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">No</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">No</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">NA</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Window Wrap Damage (LF):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span></span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="WindowWrapPainted" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Window Wrap Painted?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="WindowWrapMaterial" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Window Wrap Material:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Aluminum</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Copper</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Vinyl</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Wood</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Other</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="FenceMaterialOther" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Window Wrap Material:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartNoWrap">
                      <div class="choiceContainer">
                        <div>
                          <input maxlength="50" class="form-control formValue tb tbAlpha" />

                          <div style="font-size: x-small; padding-top: 2px;">
                            Remaining Characters:
                            <b>50</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="AwningDamaged">
            <div class="baseContainer">
              <div class="labelContainer">
                Awnings/Patio Cover Damage?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">No</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">No</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">NA</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="AwningMaterial" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Awning/Patio Material:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Aluminum</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Cloth</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Fiberglass</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Vinyl</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Other</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="AwningMaterialOther" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Awning/Patio Material:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartNoWrap">
                      <div class="choiceContainer">
                        <div>
                          <input maxlength="50" class="form-control formValue tb tbAlpha" />

                          <div style="font-size: x-small; padding-top: 2px;">
                            Remaining Characters:
                            <b>50</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="NeighborhoodDamaged">
            <div class="baseContainer">
              <div class="labelContainer">
                Neighborhood Damage?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">No</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">No</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">NA</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="SidingDamage">
            <div class="baseContainer">
              <div class="labelContainer">
                Siding Damage?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">No</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">No</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">NA</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Siding Damage (SF):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>North/Front</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>East/Left</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>West/Right</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot4">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>South/Back</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="SidingMaterial" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Siding Material:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Aluminum</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Composite</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Guage Metal</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Hardy Plank</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Stucco</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Vinyl</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Wood</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Other</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="SidingMaterialOther" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Siding Material Other:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartNoWrap">
                      <div class="choiceContainer">
                        <div>
                          <input maxlength="50" class="form-control formValue tb tbAlpha" />

                          <div style="font-size: x-small; padding-top: 2px;">
                            Remaining Characters:
                            <b>50</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="SidingNotes" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Siding Notes:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartNoWrap">
                      <div class="choiceContainer">
                        <div>
                          <textarea
                            rows="2"
                            maxlength="8000"
                            class="form-control formValue tb tbArea"
                          ></textarea>

                          <div style="font-size: x-small; padding-top: 2px;">
                            Remaining Characters:
                            <b>8000</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="DownSpoutsPainted">
            <div class="baseContainer">
              <div class="labelContainer">
                Downspout Painted?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">true</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="DownSpoutsMaterial">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Downspout Material:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">Aluminum</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">Aluminum</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Copper</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Galvanized</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Plastic</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Other</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="DownSpoutsMaterialOther" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Downspout Material:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartNoWrap">
                      <div class="choiceContainer">
                        <div>
                          <input maxlength="50" class="form-control formValue tb tbAlpha" />

                          <div style="font-size: x-small; padding-top: 2px;">
                            Remaining Characters:
                            <b>50</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="DownSpoutsSize">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Downspout Size (inches):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">4</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">2</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">3</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">4</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Other</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="DownSpoutsSizeOther" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Downspout Size (inches):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span></span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="DownSpoutsDamaged">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Downspout Damaged?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">Yes</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">NA</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="DownSpoutsDamageDescription" is-text-area>
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Damage Description:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">It's all jacked.</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartNoWrap">
                      <div class="choiceContainer">
                        <div>
                          <textarea
                            rows="2"
                            maxlength="8000"
                            class="form-control formValue tb tbArea"
                          ></textarea>

                          <div style="font-size: x-small; padding-top: 2px;">
                            Remaining Characters:
                            <b>7984</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="DownSpoutsNorthDamaged">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Downspouts Damaged (North/Front):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">Yes</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <span class="assetCount">
                          <span>(1)</span>
                        </span>
                        <div class="icon-container">
                          <div class="k-widget k-upload k-upload-async k-upload-empty">
                            <div class="k-dropzone">
                              <div class="k-button k-upload-button">
                                <input
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Downspouts Damaged (North/Front) (LF):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">55</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>55</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="DownSpoutsEastDamaged">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Downspouts Damaged (East/Left):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">No</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">No</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Downspouts Damaged (East/Left) (LF):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span></span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="DownSpoutsSouthDamaged">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Downspouts Damaged (South/Back):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">No</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">No</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Downspouts Damaged (South/Back) (LF):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span></span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="DownSpoutsWestDamaged">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Downspouts Damaged (West/Right):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">No</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">No</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Downspouts Damaged (West/Right) (LF):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span></span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="FasciaMaterial">
            <div class="baseContainer">
              <div class="labelContainer">
                Fascia Material:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">Aluminum</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">Aluminum</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Vinyl</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Wood</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Other</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="FasciaMaterialOther" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Fascia Material Other:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartNoWrap">
                      <div class="choiceContainer">
                        <div>
                          <input maxlength="50" class="form-control formValue tb tbAlpha" />

                          <div style="font-size: x-small; padding-top: 2px;">
                            Remaining Characters:
                            <b>50</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="FasciaSize">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Fascia Size (inches):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">6</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">4</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">6</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">8</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">10</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Other</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Fascia Size (inches):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span></span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="FasciaDamaged">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Fascia Damaged?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">No</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">No</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">NA</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="FasciaNorthDamaged" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Fascia Damaged (North/Front):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Fascia Damaged (North/Front) (LF):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span></span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="FasciaEastDamaged" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Fascia Damaged (East/Left):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Fascia Damaged (East/Left) (LF):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span></span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="FasciaSouthDamaged" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Fascia Damaged (South/Back):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Fascia Damaged (South/Back) (LF):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span></span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="FasciaWestDamaged" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Fascia Damaged (West/Right):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Fascia Damaged (West/Right) (LF):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span></span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sectionContainer" style="display: none">Interior Inspection</div>

        <div class="sectionContainer">Roof Inspection</div>
        <div>
          <div>
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Roof Overview Photos:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div class="labelContainer">
                          <span>North/Front</span>
                        </div>
                        <span class="assetCount">
                          <span>(1)</span>
                        </span>
                        <div class="icon-container">
                          <div class="k-widget k-upload k-upload-async k-upload-empty">
                            <div class="k-dropzone">
                              <div class="k-button k-upload-button">
                                <input
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
                              </div>
                              <em class="k-dropzone-hint">Drop files here to upload</em>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div class="labelContainer">
                          <span>East/Left</span>
                        </div>

                        <div class="icon-container">
                          <div class="k-widget k-upload k-upload-async k-upload-empty">
                            <div class="k-dropzone">
                              <div class="k-button k-upload-button">
                                <input
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div class="labelContainer">
                          <span>South/Back</span>
                        </div>
                        <span class="assetCount">
                          <span>(4)</span>
                        </span>
                        <div class="icon-container">
                          <div class="k-widget k-upload k-upload-async k-upload-empty">
                            <div class="k-dropzone">
                              <div class="k-button k-upload-button">
                                <input
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
                              </div>
                              <em class="k-dropzone-hint">Drop files here to upload</em>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot4">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div class="labelContainer">
                          <span>West/Right</span>
                        </div>

                        <div class="icon-container">
                          <div class="k-widget k-upload k-upload-async k-upload-empty">
                            <div class="k-dropzone">
                              <div class="k-button k-upload-button">
                                <input
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
                              </div>
                              <em class="k-dropzone-hint">Drop files here to upload</em>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="RoofType" max-characters="50">
            <div class="baseContainer">
              <div class="labelContainer">
                Roof Type:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">Combination</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">Combination</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Gable</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Gambrel</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Flat</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Hip</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Mansard</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Multiple Facet</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Shed</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Split Level</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Other</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="RoofTypeOther" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Other Roof Type:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartNoWrap">
                      <div class="choiceContainer">
                        <div>
                          <input maxlength="100" class="form-control formValue tb tbAlpha" />

                          <div style="font-size: x-small; padding-top: 2px;">
                            Remaining Characters:
                            <b>100</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="RoofAgeYears">
            <div class="baseContainer">
              <div class="labelContainer">
                Roof Age (Years):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">0-5 Yrs</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">0-5 Yrs</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">6-10 Yrs</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">11-15 Yrs</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">16-20 Yrs</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">21+ Yrs</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="RoofMaterial">
            <div class="baseContainer">
              <div class="labelContainer">
                Roof Material:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">Other</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Flat</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Metal</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Tile</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Wood</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">20 Year Comp.</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">25 Year Comp.</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">25 Year Organic</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">30 Year Organic</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Laminate 30 Year</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Rolled</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Mod Bit</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="RoofMaterialOther">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Other Roof Material:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">Slate</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartNoWrap">
                      <div class="choiceContainer">
                        <div>
                          <input maxlength="100" class="form-control formValue tb tbAlpha" />

                          <div style="font-size: x-small; padding-top: 2px;">
                            Remaining Characters:
                            <b>95</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="ShingleType">
            <div class="baseContainer">
              <div class="labelContainer">
                Shingle Type:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">40 yr</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">20 yr</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">25 yr</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">30 yr</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">35 yr</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">40 yr</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">NA</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="IceWaterShield">
            <div class="baseContainer">
              <div class="labelContainer">
                Ice &amp; Water Shield?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div medium-label style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Ice &amp; Water Shield Length (LF):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span></span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div medium-label>
            <div class="baseContainer">
              <div class="labelContainer">
                Soffit Depth (Inches):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">6</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>6</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="Stories">
            <div class="baseContainer">
              <div class="labelContainer">
                Number of Stories:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">1</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">1</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">2</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">3</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">4</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Other</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="StoriesOther" text-area style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Stories:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span></span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="PitchNorth">
            <div class="baseContainer">
              <div class="labelContainer">
                Predominant Pitch (North/Front)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">6/12</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">0/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">1/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">2/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">3/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">4/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">5/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">6/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">7/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">8/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">9/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">10/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">11/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">12/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Other</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">NA</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <span class="assetCount">
                          <span>(1)</span>
                        </span>
                        <div class="icon-container">
                          <div class="k-widget k-upload k-upload-async k-upload-empty">
                            <div class="k-dropzone">
                              <div class="k-button k-upload-button">
                                <input
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="PitchNorthOther" medium-label style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Pitch North Other:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartNoWrap">
                      <div class="choiceContainer">
                        <div>
                          <input maxlength="10" class="form-control formValue tb tbAlpha" />

                          <div style="font-size: x-small; padding-top: 2px;">
                            Remaining Characters:
                            <b>10</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="PitchEast">
            <div class="baseContainer">
              <div class="labelContainer">
                Predominant Pitch (East/Left)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">6/12</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">0/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">1/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">2/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">3/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">4/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">5/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">6/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">7/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">8/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">9/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">10/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">11/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">12/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Other</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">NA</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="PitchEastOther" medium-label style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Pitch East Other:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartNoWrap">
                      <div class="choiceContainer">
                        <div>
                          <input maxlength="10" class="form-control formValue tb tbAlpha" />

                          <div style="font-size: x-small; padding-top: 2px;">
                            Remaining Characters:
                            <b>10</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="PitchSouth">
            <div class="baseContainer">
              <div class="labelContainer">
                Predominant Pitch (South/Back)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">6/12</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">0/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">1/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">2/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">3/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">4/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">5/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">6/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">7/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">8/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">9/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">10/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">11/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">12/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Other</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">NA</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="PitchSouthOther" medium-label style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Pitch South Other:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartNoWrap">
                      <div class="choiceContainer">
                        <div>
                          <input maxlength="10" class="form-control formValue tb tbAlpha" />

                          <div style="font-size: x-small; padding-top: 2px;">
                            Remaining Characters:
                            <b>10</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="PitchWest">
            <div class="baseContainer">
              <div class="labelContainer">
                Predominant Pitch (West/Right)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">6/12</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">0/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">1/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">2/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">3/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">4/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">5/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">6/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">7/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">8/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">9/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">10/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">11/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">12/12</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Other</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">NA</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="PitchWestOther" medium-label style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Pitch West Other:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartNoWrap">
                      <div class="choiceContainer">
                        <div>
                          <input maxlength="10" class="form-control formValue tb tbAlpha" />

                          <div style="font-size: x-small; padding-top: 2px;">
                            Remaining Characters:
                            <b>10</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="Felt">
            <div class="baseContainer">
              <div class="labelContainer">
                Felt?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="FeltDescription" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Felt Type:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">15lb</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">30lb</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Synthetic</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="LayerType">
            <div class="baseContainer">
              <div class="labelContainer">
                Layer Type:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">Other</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">OSB</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Plywood</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Shake</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Spaced Decking</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">Other</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="LayerTypeOther">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Other Layer Type:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">Sparkling wood</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartNoWrap">
                      <div class="choiceContainer">
                        <div>
                          <input maxlength="100" class="form-control formValue tb tbAlpha" />

                          <div style="font-size: x-small; padding-top: 2px;">
                            Remaining Characters:
                            <b>86</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="LayerQty">
            <div class="baseContainer">
              <div class="labelContainer">
                Number of Layers:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">1</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">1</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">2</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">3</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">4</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">5</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">6</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">7</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">8</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">9</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="ValleyType">
            <div class="baseContainer">
              <div class="labelContainer">
                Valley Type:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">Weaved</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Closed</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Open</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Valley Metal</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">Weaved</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">NA</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="RakeStarter">
            <div class="baseContainer">
              <div class="labelContainer">
                Rake Starter?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="EaveStarter">
            <div class="baseContainer">
              <div class="labelContainer">
                Eave Starter?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="GutterPresent">
            <div class="baseContainer">
              <div class="labelContainer">
                Gutters Present?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="GutterPainted" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Gutters Painted?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="GutterMaterial" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Gutter Material:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Aluminum</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Copper</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Galvanized</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Other</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="GutterMaterialOther" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Gutter Material Other:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartNoWrap">
                      <div class="choiceContainer">
                        <div>
                          <input maxlength="100" class="form-control formValue tb tbAlpha" />

                          <div style="font-size: x-small; padding-top: 2px;">
                            Remaining Characters:
                            <b>100</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="GutterSize" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Gutter Size:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">5 inch</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">6 inch</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Halfround</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Other</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <span class="assetCount">
                          <span>(1)</span>
                        </span>
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="GutterSizeOther" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Gutter Size Other:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartNoWrap">
                      <div class="choiceContainer">
                        <div>
                          <input maxlength="50" class="form-control formValue tb tbAlpha" />

                          <div style="font-size: x-small; padding-top: 2px;">
                            Remaining Characters:
                            <b>50</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="GuttersDamage" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Gutters Damaged?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="GutterDescription" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Gutter Description:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartNoWrap">
                      <div class="choiceContainer">
                        <div>
                          <textarea
                            rows="2"
                            maxlength="8000"
                            class="form-control formValue tb tbArea"
                          ></textarea>

                          <div style="font-size: x-small; padding-top: 2px;">
                            Remaining Characters:
                            <b>8000</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="GutterNorthDamaged" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Gutter North Damage?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="GutterNorthLf" medium-label style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Gutters North Damage LF:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span></span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="GutterSouthDamaged" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Gutter South Damage?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="GutterSouthLf" medium-label style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Gutters South Damage LF:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span></span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="GutterEastDamaged" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Gutter East Damage?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="GutterEastLf" medium-label style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Gutters East Damage LF:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span></span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="GutterWestDamaged" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Gutter West Damage?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="GutterWestLf" medium-label style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Gutters West Damage LF:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span></span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="PriorRepairs">
            <div class="baseContainer">
              <div class="labelContainer">
                Prior Repairs ?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">No</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">No</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">NA</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="PriorRepairsNorth" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Prior Repairs (North/Front)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">NA</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="PriorRepairsSouth" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Prior Repairs (South/Back)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">NA</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="PriorRepairsEast" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Prior Repairs (East/Left)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">NA</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="PriorRepairsWest" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Prior Repairs (West/Right)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">NA</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id=" Damage">
            <div class="baseContainer">
              <div class="labelContainer">
                Storm Damage Present?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">true</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="StormDirection">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Storm Direction:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">North</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">North</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">South</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">West</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">East</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">NA</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="StormDamageType" medium-label>
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                What type of damage is present:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">Hail|Wind</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">Hail</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">Wind</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Other</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="StormDamageTypeOther" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Other Storm Damage Type:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartNoWrap">
                      <div class="choiceContainer">
                        <div>
                          <input maxlength="50" class="form-control formValue tb tbAlpha" />

                          <div style="font-size: x-small; padding-top: 2px;">
                            Remaining Characters:
                            <b>50</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="OtherDamageNorth" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Other Damage North/Front:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span></span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="OtherDamageSouth" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Other Damage South/Back:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span></span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="OtherDamageEast" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Other Damage East/Left:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span></span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="OtherDamageWest" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Other Damage West/Right:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span></span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="HailSize">
            <div class="baseContainer">
              <div class="labelContainer">
                Hail Size:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">1 1/2 - 2 inch</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">0 - 1/2 inch</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">1/2 - 1 inch</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">1 - 1 1/2 inch</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">1 1/2 - 2 inch</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">2 - 3 inch</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">3+ inch</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">NA</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Hail Test Size (SF):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">1</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>North/Front 5</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>East/Left 5</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>West/Right 5</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot4">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>South/Back 3</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="HailDamageNorthSf">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Test Square North/Front:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">8</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>8</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="HailDamageSouthSf">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Test Square South/Back:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">55</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>55</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="HailDamageEastSf">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Test Square East/Left:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">45</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>45</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="HailDamageWestSf">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Test Square West/Right:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">5</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>5</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="HancockDisagreesHailDamage">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Does Hancock disagrees with contractor hail damage?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div class="labelContainer">
                          <span>North/Front</span>
                        </div>

                        <div class="icon-container">
                          <div class="k-widget k-upload k-upload-async k-upload-empty">
                            <div class="k-dropzone">
                              <div class="k-button k-upload-button">
                                <input
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
                              </div>
                              <em class="k-dropzone-hint">Drop files here to upload</em>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div class="labelContainer">
                          <span>East/Left</span>
                        </div>

                        <div class="icon-container">
                          <div class="k-widget k-upload k-upload-async k-upload-empty">
                            <div class="k-dropzone">
                              <div class="k-button k-upload-button">
                                <input
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div class="labelContainer">
                          <span>South/Back</span>
                        </div>

                        <div class="icon-container">
                          <div class="k-widget k-upload k-upload-async k-upload-empty">
                            <div class="k-dropzone">
                              <div class="k-button k-upload-button">
                                <input
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
                              </div>
                              <em class="k-dropzone-hint">Drop files here to upload</em>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot4">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div class="labelContainer">
                          <span>West/Right</span>
                        </div>

                        <div class="icon-container">
                          <div class="k-widget k-upload k-upload-async k-upload-empty">
                            <div class="k-dropzone">
                              <div class="k-button k-upload-button">
                                <input
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
                              </div>
                              <em class="k-dropzone-hint">Drop files here to upload</em>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Wind Damage Photos:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div class="labelContainer">
                          <span>North/Front</span>
                        </div>

                        <div class="icon-container">
                          <div class="k-widget k-upload k-upload-async k-upload-empty">
                            <div class="k-dropzone">
                              <div class="k-button k-upload-button">
                                <input
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
                              </div>
                              <em class="k-dropzone-hint">Drop files here to upload</em>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div class="labelContainer">
                          <span>East/Left</span>
                        </div>

                        <div class="icon-container">
                          <div class="k-widget k-upload k-upload-async k-upload-empty">
                            <div class="k-dropzone">
                              <div class="k-button k-upload-button">
                                <input
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div class="labelContainer">
                          <span>South/Back</span>
                        </div>

                        <div class="icon-container">
                          <div class="k-widget k-upload k-upload-async k-upload-empty">
                            <div class="k-dropzone">
                              <div class="k-button k-upload-button">
                                <input
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
                              </div>
                              <em class="k-dropzone-hint">Drop files here to upload</em>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot4">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div class="labelContainer">
                          <span>West/Right</span>
                        </div>

                        <div class="icon-container">
                          <div class="k-widget k-upload k-upload-async k-upload-empty">
                            <div class="k-dropzone">
                              <div class="k-button k-upload-button">
                                <input
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
                              </div>
                              <em class="k-dropzone-hint">Drop files here to upload</em>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="baseContainer">
              <div class="labelContainer">
                Wind Damage Facet 1:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">1</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>North/Front 5</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>East/Left 4</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>South/Back 4</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot4">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>West/Right 0</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="baseContainer">
              <div class="labelContainer">
                Wind Damage Facet 2:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">1</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>North/Front 0</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>East/Left 5</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>South/Back 2</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot4">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>West/Right 5</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="baseContainer">
              <div class="labelContainer">
                Wind Damage Facet 3:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">1</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>North/Front 3</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>East/Left 3</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>South/Back 3</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot4">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>West/Right 2</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="baseContainer">
              <div class="labelContainer">
                Wind Damage Facet 4:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">1</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>North/Front 3</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>East/Left 3</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>South/Back 5</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot4">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>West/Right 2</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="baseContainer">
              <div class="labelContainer">
                Wind Damage Facet 5:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">1</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>North/Front 5</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>East/Left 5</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>West/Right 5</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot4">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span>South/Back 22</span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="BrittlenessTestRequested">
            <div class="baseContainer">
              <div class="labelContainer">
                Was a Brittleness Test Requested?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="BrittlenessTestConducted">
            <div class="baseContainer">
              <div class="labelContainer">
                Was a Brittleness Test Performed?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="BrittlenessTestNorth" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Brittleness Test (North/Front)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="BrittlenessTestNorthPass" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Brittleness Test Result (North/Front)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Pass</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Fail</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">NA</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="BrittlenessTestSouth" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Brittleness Test (South/Back)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="BrittlenessTestSouthPass" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Brittleness Test Result (South/Back)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Pass</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Fail</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">NA</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="BrittlenessTestEast" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Brittleness Test (East/Left)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="BrittlenessTestEastPass" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Brittleness Test Result (East/Left)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Pass</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Fail</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">NA</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="BrittlenessTestWest" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Brittleness Test (West/Right)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="BrittlenessTestWestPass" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Brittleness Test Result (West/Right)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Pass</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Fail</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">NA</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="RoofQuestions">
              <span class="sectionContainer">Damaged Items List</span>
              <div id="BoxVentsPresent">
                <div class="baseContainer">
                  <div class="labelContainer">
                    Box Vent Present?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">false</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel answered"></div>
                          <span class="choiceText">No</span>
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
                                      type="file"
                                      id="file"
                                      name="file"
                                      data-role="upload"
                                      aria-label
                                      multiple="multiple"
                                      autocomplete="off"
                                    />
                                    <span></span>
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
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="BoxVentsPainted" style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Painted?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">No</span>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="BoxVentsMaterial" max-characters="25" style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Box Vent Material:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;"></span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="flexRowStartWrap">
                          <div class="choiceContainer">
                            <div class="eCheckbox boxLabel"></div>
                            <span class="choiceText">Metal</span>
                          </div>
                          <div class="choiceContainer">
                            <div class="eCheckbox boxLabel"></div>
                            <span class="choiceText">Plastic</span>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty Damaged:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="CanVentsPresent">
                <div class="baseContainer">
                  <div class="labelContainer">
                    Can Vent Present?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">false</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel answered"></div>
                          <span class="choiceText">No</span>
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
                                      type="file"
                                      id="file"
                                      name="file"
                                      data-role="upload"
                                      aria-label
                                      multiple="multiple"
                                      autocomplete="off"
                                    />
                                    <span></span>
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
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="CanVentsPainted" style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Painted?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">No</span>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty Damaged:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="ChimneyCapSmallPresent">
                <div class="baseContainer">
                  <div class="labelContainer">
                    Small Chimney Cap Present?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">No</span>
                        </div>
                      </div>
                      <div id="slot2">
                        <div>
                          <div class="flexRowSpaceBetweenNoWrap test">
                            <div>
                              <i-heroicons-solid-camera class="text-gray-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="ChimneyCapSmallPainted" style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Painted?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">No</span>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty Damaged:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="ChimneyCapMediumPresent">
                <div class="baseContainer">
                  <div class="labelContainer">
                    Medium Chimney Cap Present?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">No</span>
                        </div>
                      </div>
                      <div id="slot2">
                        <div>
                          <div class="flexRowSpaceBetweenNoWrap test">
                            <div>
                              <i-heroicons-solid-camera class="text-gray-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="ChimneyCapMediumPainted" style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Painted?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">No</span>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty Damaged:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="ChimneyCapLargePresent">
                <div class="baseContainer">
                  <div class="labelContainer">
                    Large Chimney Cap Present?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">No</span>
                        </div>
                      </div>
                      <div id="slot2">
                        <div>
                          <div class="flexRowSpaceBetweenNoWrap test">
                            <div>
                              <i-heroicons-solid-camera class="text-gray-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="ChimneyCapLargePainted" style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Painted?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">No</span>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty Damaged:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="DripEdgePresent">
                <div class="baseContainer">
                  <div class="labelContainer">
                    Drip Edge Eaves Present?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">false</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel answered"></div>
                          <span class="choiceText">No</span>
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
                                      type="file"
                                      id="file"
                                      name="file"
                                      data-role="upload"
                                      aria-label
                                      multiple="multiple"
                                      autocomplete="off"
                                    />
                                    <span></span>
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
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="DripEdgeEavePainted" style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Painted?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">No</span>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty Damaged:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2">
                        <div>
                          <div class="flexRowSpaceBetweenNoWrap test">
                            <div>
                              <i-heroicons-solid-camera class="text-gray-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="DripEdgeRakePresent">
                <div class="baseContainer">
                  <div class="labelContainer">
                    Drip Edge Rake Present?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">false</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel answered"></div>
                          <span class="choiceText">No</span>
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
                                      type="file"
                                      id="file"
                                      name="file"
                                      data-role="upload"
                                      aria-label
                                      multiple="multiple"
                                      autocomplete="off"
                                    />
                                    <span></span>
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
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="DripEdgeRakePainted" style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Painted?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">No</span>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="DripEdgeRakeQty" style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty Damaged:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2">
                        <div>
                          <div class="flexRowSpaceBetweenNoWrap test">
                            <div>
                              <i-heroicons-solid-camera class="text-gray-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="FlashingPresent">
                <div class="baseContainer">
                  <div class="labelContainer">
                    Flashing Present?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">false</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel answered"></div>
                          <span class="choiceText">No</span>
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
                                      type="file"
                                      id="file"
                                      name="file"
                                      data-role="upload"
                                      aria-label
                                      multiple="multiple"
                                      autocomplete="off"
                                    />
                                    <span></span>
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
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="FlashingPainted" style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Painted?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">No</span>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty Damaged:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="GableVentPresent">
                <div class="baseContainer">
                  <div class="labelContainer">
                    Gable Vent Present?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">false</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel answered"></div>
                          <span class="choiceText">No</span>
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
                                      type="file"
                                      id="file"
                                      name="file"
                                      data-role="upload"
                                      aria-label
                                      multiple="multiple"
                                      autocomplete="off"
                                    />
                                    <span></span>
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
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty Damaged:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="HvacFourPresent">
                <div class="baseContainer">
                  <div class="labelContainer">
                    4 inch Hvac Vent Present?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">false</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel answered"></div>
                          <span class="choiceText">No</span>
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
                                      type="file"
                                      id="file"
                                      name="file"
                                      data-role="upload"
                                      aria-label
                                      multiple="multiple"
                                      autocomplete="off"
                                    />
                                    <span></span>
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
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="HvacFourPainted" style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Painted?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">No</span>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty Damaged:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="HvacSixPresent">
                <div class="baseContainer">
                  <div class="labelContainer">
                    6 inch Hvac Vent Present?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">true</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel answered"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">No</span>
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
                                      type="file"
                                      id="file"
                                      name="file"
                                      data-role="upload"
                                      aria-label
                                      multiple="multiple"
                                      autocomplete="off"
                                    />
                                    <span></span>
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
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="HvacSixPainted">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Painted?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">true</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel answered"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">No</span>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">75</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span>75</span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty Damaged:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">55</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span>55</span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="HvacEightPresent">
                <div class="baseContainer">
                  <div class="labelContainer">
                    8 inch Hvac Vent Present?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">true</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel answered"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">No</span>
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
                                      type="file"
                                      id="file"
                                      name="file"
                                      data-role="upload"
                                      aria-label
                                      multiple="multiple"
                                      autocomplete="off"
                                    />
                                    <span></span>
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
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="HvacEightPainted">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Painted?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">false</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel answered"></div>
                          <span class="choiceText">No</span>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">7</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span>7</span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty Damaged:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">5</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span>5</span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="MastheadPresent">
                <div class="baseContainer">
                  <div class="labelContainer">
                    Masthead Present?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">false</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel answered"></div>
                          <span class="choiceText">No</span>
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
                                      type="file"
                                      id="file"
                                      name="file"
                                      data-role="upload"
                                      aria-label
                                      multiple="multiple"
                                      autocomplete="off"
                                    />
                                    <span></span>
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
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="MastheadPainted" style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Painted?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">No</span>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty Damaged:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="PlasticPipebootPresent">
                <div class="baseContainer">
                  <div class="labelContainer">
                    Plastic Pipeboot Present?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">No</span>
                        </div>
                      </div>
                      <div id="slot2">
                        <div>
                          <div class="flexRowSpaceBetweenNoWrap test">
                            <div>
                              <i-heroicons-solid-camera class="text-gray-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="PlasticPipebootPainted" style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Painted?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">No</span>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="PlasticPipebootQty" style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="PlasticPipebootQtyDamaged" style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty Damaged:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="LeadPipebootPresent">
                <div class="baseContainer">
                  <div class="labelContainer">
                    Lead Pipeboot Present?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">No</span>
                        </div>
                      </div>
                      <div id="slot2">
                        <div>
                          <div class="flexRowSpaceBetweenNoWrap test">
                            <div>
                              <i-heroicons-solid-camera class="text-gray-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="LeadPipebootPainted" style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Painted?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">No</span>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="LeadPipebootQty" style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="LeadPipebootQtyDamaged" style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty Damaged:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="PowerVentsPresent">
                <div class="baseContainer">
                  <div class="labelContainer">
                    Power Vents Present?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">false</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel answered"></div>
                          <span class="choiceText">No</span>
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
                                      type="file"
                                      id="file"
                                      name="file"
                                      data-role="upload"
                                      aria-label
                                      multiple="multiple"
                                      autocomplete="off"
                                    />
                                    <span></span>
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
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="PowerVentsPainted" style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Painted?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">No</span>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="PowerVentsMaterial" max-characters="25" style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Power Vent Material:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;"></span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="flexRowStartWrap">
                          <div class="choiceContainer">
                            <div class="eCheckbox boxLabel"></div>
                            <span class="choiceText">Metal</span>
                          </div>
                          <div class="choiceContainer">
                            <div class="eCheckbox boxLabel"></div>
                            <span class="choiceText">Plastic</span>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty Damaged:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="PowerVentCoversPresent">
                <div class="baseContainer">
                  <div class="labelContainer">
                    Power Vent Covers Present?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">false</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel answered"></div>
                          <span class="choiceText">No</span>
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
                                      type="file"
                                      id="file"
                                      name="file"
                                      data-role="upload"
                                      aria-label
                                      multiple="multiple"
                                      autocomplete="off"
                                    />
                                    <span></span>
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
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="PowerVentCoversPainted" style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Painted?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">No</span>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="PowerVentCoversMaterial" max-characters="25" style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Power Vent Material:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;"></span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="flexRowStartWrap">
                          <div class="choiceContainer">
                            <div class="eCheckbox boxLabel"></div>
                            <span class="choiceText">Metal</span>
                          </div>
                          <div class="choiceContainer">
                            <div class="eCheckbox boxLabel"></div>
                            <span class="choiceText">Plastic</span>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty Damaged:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="RainDivertersPresent">
                <div class="baseContainer">
                  <div class="labelContainer">
                    Rain Diverter Present?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">false</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel answered"></div>
                          <span class="choiceText">No</span>
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
                                      type="file"
                                      id="file"
                                      name="file"
                                      data-role="upload"
                                      aria-label
                                      multiple="multiple"
                                      autocomplete="off"
                                    />
                                    <span></span>
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
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty Damaged:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="RidgeVentsPresent">
                <div class="baseContainer">
                  <div class="labelContainer">
                    Ridge Vents Present?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">false</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel answered"></div>
                          <span class="choiceText">No</span>
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
                                      type="file"
                                      id="file"
                                      name="file"
                                      data-role="upload"
                                      aria-label
                                      multiple="multiple"
                                      autocomplete="off"
                                    />
                                    <span></span>
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
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="RidgeVentsPainted" style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Painted?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">No</span>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="RidgeVentsMaterial" max-characters="25" style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Ridge Vent Material:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;"></span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="flexRowStartWrap">
                          <div class="choiceContainer">
                            <div class="eCheckbox boxLabel"></div>
                            <span class="choiceText">Aluminum</span>
                          </div>
                          <div class="choiceContainer">
                            <div class="eCheckbox boxLabel"></div>
                            <span class="choiceText">Mesh</span>
                          </div>
                          <div class="choiceContainer">
                            <div class="eCheckbox boxLabel"></div>
                            <span class="choiceText">Plastic</span>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty Damaged:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="SatelliteDishPresent">
                <div class="baseContainer">
                  <div class="labelContainer">
                    Satellite Dish Present?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">false</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel answered"></div>
                          <span class="choiceText">No</span>
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
                                      type="file"
                                      id="file"
                                      name="file"
                                      data-role="upload"
                                      aria-label
                                      multiple="multiple"
                                      autocomplete="off"
                                    />
                                    <span></span>
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
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty Damaged:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="SkylightsPresent">
                <div class="baseContainer">
                  <div class="labelContainer">
                    Skylight Present?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">false</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel answered"></div>
                          <span class="choiceText">No</span>
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
                                      type="file"
                                      id="file"
                                      name="file"
                                      data-role="upload"
                                      aria-label
                                      multiple="multiple"
                                      autocomplete="off"
                                    />
                                    <span></span>
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
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="SkylightsPainted" style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Painted?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">No</span>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty Damaged:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="SoffitVentsPresent">
                <div class="baseContainer">
                  <div class="labelContainer">
                    Soffit Vent Present?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">false</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel answered"></div>
                          <span class="choiceText">No</span>
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
                                      type="file"
                                      id="file"
                                      name="file"
                                      data-role="upload"
                                      aria-label
                                      multiple="multiple"
                                      autocomplete="off"
                                    />
                                    <span></span>
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
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="SoffitVentsPainted" style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Painted?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">No</span>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty Damaged:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="TurbinesPresent">
                <div class="baseContainer">
                  <div class="labelContainer">
                    Turbine Present?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">false</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel answered"></div>
                          <span class="choiceText">No</span>
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
                                      type="file"
                                      id="file"
                                      name="file"
                                      data-role="upload"
                                      aria-label
                                      multiple="multiple"
                                      autocomplete="off"
                                    />
                                    <span></span>
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
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="TurbinesPainted" style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Painted?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">No</span>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty Damaged:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="ValleyMetalPresent">
                <div class="baseContainer">
                  <div class="labelContainer">
                    Valley Metal Present?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">false</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel answered"></div>
                          <span class="choiceText">No</span>
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
                                      type="file"
                                      id="file"
                                      name="file"
                                      data-role="upload"
                                      aria-label
                                      multiple="multiple"
                                      autocomplete="off"
                                    />
                                    <span></span>
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
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="ValleyMetalPainted" style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Painted?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">No</span>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="ValleyMetalMaterial" max-characters="25" style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Valley Metal Material:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;"></span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="flexRowStartWrap">
                          <div class="choiceContainer">
                            <div class="eCheckbox boxLabel"></div>
                            <span class="choiceText">Aluminum</span>
                          </div>
                          <div class="choiceContainer">
                            <div class="eCheckbox boxLabel"></div>
                            <span class="choiceText">Copper</span>
                          </div>
                          <div class="choiceContainer">
                            <div class="eCheckbox boxLabel"></div>
                            <span class="choiceText">Galvanized</span>
                          </div>
                          <div class="choiceContainer">
                            <div class="eCheckbox boxLabel"></div>
                            <span class="choiceText">Pre-formed</span>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty Damaged:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="OtherPresent">
                <div class="baseContainer">
                  <div class="labelContainer">
                    Other Present?
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">false</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="cbContainer">
                          <div class="eCheckbox boxLabel"></div>
                          <span class="choiceText">Yes</span>
                          &nbsp;&nbsp;
                          <div class="eCheckbox boxLabel answered"></div>
                          <span class="choiceText">No</span>
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
                                      type="file"
                                      id="file"
                                      name="file"
                                      data-role="upload"
                                      aria-label
                                      multiple="multiple"
                                      autocomplete="off"
                                    />
                                    <span></span>
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
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: none">
                <div class="baseContainer noMargin">
                  <div class="labelContainer">
                    Qty Damaged:
                    <span style="color: red;"></span>
                    <span style="color: white; font-size: 2pt;">null</span>
                  </div>
                  <div class="slotContainer">
                    <div class="slotRow">
                      <div id="slot1">
                        <div class="numericContainer">
                          <div class="flexRowSpaceBetweenNoWrap">
                            <div class="labelContainer">
                              <span></span>
                            </div>
                            <div class="iconEnabled">
                              <i class="fad fa-2x fa-calculator"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="slot2"></div>
                    </div>
                    <div class="slotRow">
                      <div id="slot3"></div>
                      <div id="slot4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span
            class="sectionHeader"
          >Indicate other Non Wind/Hail related conditions that exist on roof</span>
          <div id="BlisterDamage">
            <div class="baseContainer">
              <div class="labelContainer">
                Blistering Damaged?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="BlistersNorth" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Blisters (North/Front)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="BlistersEast" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Blisters (East/Left)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="BlistersSouth" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Blisters (South/Back)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="BlistersWest" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Blisters (West/Right)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="CloggedGutterDamage" style="display: none">
            <div class="baseContainer">
              <div class="labelContainer">
                Clogged Gutters?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="CloggedGuttersNorth" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Clogged Gutters (North/Front)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="CloggedGuttersEast" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Clogged Gutters (East/Left)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="CloggedGuttersSouth" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Clogged Gutters (South/Back)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="CloggedGuttersWest" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Clogged Gutters (West/Right)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="CuppedDamage">
            <div class="baseContainer">
              <div class="labelContainer">
                Cupped/Curled Shingles?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="CuppedNorth" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Cupped/Curled (North/Front)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="CuppedEast" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Cupped/Curled (East/Left)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="CuppedSouth" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Cupped/Curled (South/Back)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="CuppedWest" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Cupped/Curled (West/Right)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="DeckingRottedDamage">
            <div class="baseContainer">
              <div class="labelContainer">
                Decking Rotting/Rotted?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="DeckingRottedNorth" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Decking Rotted (North/Front)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="DeckingRottedEast" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Decking Rotted (East/Left)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="DeckingRottedSouth" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Decking Rotted (South/Back)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="DeckingRottedWest" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Decking Rotted (West/Right)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="FlashingNotSealedDamage">
            <div class="baseContainer">
              <div class="labelContainer">
                Flashing Not Sealed?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="FlashingNotSealedNorth" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Flashing Not Sealed (North/Front)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="FlashingNotSealedEast" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Flashing Not Sealed (East/Left)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="FlashingNotSealedSouth" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Flashing Not Sealed (South/Back)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="FlashingNotSealedWest" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Flashing Not Sealed (West/Right)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="FlashingNotSealedNotes" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Flashing Notes:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartNoWrap">
                      <div class="choiceContainer">
                        <div>
                          <textarea
                            rows="2"
                            maxlength="8000"
                            class="form-control formValue tb tbArea"
                          ></textarea>

                          <div style="font-size: x-small; padding-top: 2px;">
                            Remaining Characters:
                            <b>8000</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="GranuleLossDamage">
            <div class="baseContainer">
              <div class="labelContainer">
                Granule Loss?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="GranuleLossNorth" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Granule Loss (North/Front)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="GranuleLossEast" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Granule Loss (East/Left)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="GranuleLossSouth" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Granule Loss (South/Back)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="GranuleLossWest" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Granule Loss (West/Right)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="ManufacturedDamage">
            <div class="baseContainer">
              <div class="labelContainer">
                Manufactured Damage:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="ManufacturedMarkDamage">
            <div class="baseContainer">
              <div class="labelContainer">
                Manufactured Marks?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="ManufacturedMarksNorth" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Manufactured Marks (North/Front)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="ManufacturedMarksEast" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Manufactured Marks (East/Left)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="ManufacturedMarksSouth" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Manufactured Marks (South/Back)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="ManufacturedMarksWest" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Manufactured Marks (West/Right)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="MechanicalDamage">
            <div class="baseContainer">
              <div class="labelContainer">
                Mechanical Damage:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="MechanicalMarkDamage">
            <div class="baseContainer">
              <div class="labelContainer">
                Mechanical Marks?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">true</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="MechanicalMarksNorth">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Mechanical Marks (North/Front)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">No</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">No</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="MechanicalMarksEast">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Mechanical Marks (East/Left)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">No</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">No</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="MechanicalMarksSouth">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Mechanical Marks (South/Back)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">No</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">No</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="MechanicalMarksWest">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Mechanical Marks (West/Right)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">No</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel answered"></div>
                        <span class="choiceText">No</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="NailPopDamaged">
            <div class="baseContainer">
              <div class="labelContainer">
                Nail Pops ?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="NailPopsNorth" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Nail Pops (North/Front)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="NailPopsEast" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Nail Pops (East/Left)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="NailPopsSouth" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Nail Pops (South/Back)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="NailPopsWest" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Nail Pops (West/Right)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="RoofDebrisDamaged">
            <div class="baseContainer">
              <div class="labelContainer">
                Roof Debris?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="RoofDebrisNorth" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Roof Debris (North/Front)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="RoofDebrisEast" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Roof Debris (East/Left)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="RoofDebrisSouth" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Roof Debris (South/Back)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="RoofDebrisWest" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Roof Debris (West/Right)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="ThermalCrackingDamage">
            <div class="baseContainer">
              <div class="labelContainer">
                Thermal Cracking?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="ThermalCrackingNorth" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Thermal Cracking (North/Front)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="ThermalCrackingEast" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Thermal Cracking (East/Left)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="ThermalCrackingSouth" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Thermal Cracking (South/Back)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="ThermalCrackingWest" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Thermal Cracking (West/Right)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="ExcessiveWeathering">
            <div class="baseContainer">
              <div class="labelContainer">
                Excessive Weathering:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="RodentDamage">
            <div class="baseContainer">
              <div class="labelContainer">
                Insect/Rodent Damage:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="ExposedFasteners">
            <div class="baseContainer">
              <div class="labelContainer">
                Exposed Fasteners:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="SpatterMarks">
            <div class="baseContainer">
              <div class="labelContainer">
                Spatter Marks:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="InstallationError">
            <div class="baseContainer">
              <div class="labelContainer">
                Installation Error?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="InstallationErrorDescription" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Installation Error Description
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Fastener not on nail line</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Improper application</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Improper fastener installation</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Improper fastener size</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Improper flashing</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Improper material use</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Improper shingle exposure</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Layout</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Manufacturer defect</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Other</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="InstallationErrorDescriptionOther" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Other Installation Error:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartNoWrap">
                      <div class="choiceContainer">
                        <div>
                          <textarea
                            rows="2"
                            maxlength="8000"
                            class="form-control formValue tb tbArea"
                          ></textarea>

                          <div style="font-size: x-small; padding-top: 2px;">
                            Remaining Characters:
                            <b>8000</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="OtherConditions">
            <div class="baseContainer">
              <div class="labelContainer">
                Other Conditions:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="OtherConditionsName" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Other Conditions Name:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartNoWrap">
                      <div class="choiceContainer">
                        <div>
                          <input maxlength="50" class="form-control formValue tb tbAlpha" />

                          <div style="font-size: x-small; padding-top: 2px;">
                            Remaining Characters:
                            <b>50</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="OtherConditionsDescription" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Other Conditions Description:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartNoWrap">
                      <div class="choiceContainer">
                        <div>
                          <textarea
                            rows="2"
                            maxlength="8000"
                            class="form-control formValue tb tbArea"
                          ></textarea>

                          <div style="font-size: x-small; padding-top: 2px;">
                            Remaining Characters:
                            <b>8000</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="OtherConditionsNorth" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Other Conditions (North/Front)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="OtherConditionsEast" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Other Conditions (East/Left)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="OtherConditionsSouth" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Other Conditions (South/Back)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="OtherConditionsWest" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Other Conditions (West/Right)?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartWrap">
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">Yes</span>
                      </div>
                      <div class="choiceContainer">
                        <div class="eCheckbox boxLabel"></div>
                        <span class="choiceText">No</span>
                      </div>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <span class="sectionHeader">Additional Information</span>
          <div id="RoofMeasured">
            <div class="baseContainer">
              <div class="labelContainer">
                Did You Measure The Roof?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="RoofPitchZeroSqft" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Roof Pitch (0-6) Square Feet:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span></span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="RoofPitchSevenSqft" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Roof Pitch (7-9) Square Feet:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span></span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="RoofPitchTenSqft" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Roof Pitch (10-12) Square Feet:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span></span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="RoofStoryOneSqft" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                First Story Square Feet:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span></span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="RoofStoryTwoSqft" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Second Story Square Feet:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span></span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="RoofDiagramed">
            <div class="baseContainer">
              <div class="labelContainer">
                Did You Diagram The Roof?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="AdditionalSummary">
            <div class="baseContainer">
              <div class="labelContainer">
                Additional Summary:
                <span style="color: red;"></span>
                <span
                  style="color: white; font-size: 2pt;"
                >This is an example of the additional summary content with the font changed to Arial Narrow to see how much can fit on one line. This is an example of the additional summary content with the font changed to Arial Narrow to see how much can fit on one line. This is an example of the additional summary content with the font changed to Arial Narrow to see how much can fit on one line. This is an example of the additional summary content with the font changed to Arial Narrow to see how much can fit on one line.</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartNoWrap">
                      <div class="choiceContainer">
                        <div>
                          <textarea
                            rows="2"
                            maxlength="8000"
                            class="form-control formValue tb tbArea"
                          ></textarea>

                          <div style="font-size: x-small; padding-top: 2px;">
                            Remaining Characters:
                            <b>7489</b>
                          </div>
                        </div>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="OutBuildingDmg">
            <div class="baseContainer">
              <div class="labelContainer">
                Out Building Damage?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="OutBuildingNotes" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Out Building Notes:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;"></span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="flexRowStartNoWrap">
                      <div class="choiceContainer">
                        <div>
                          <textarea
                            rows="2"
                            maxlength="8000"
                            class="form-control formValue tb tbArea"
                          ></textarea>

                          <div style="font-size: x-small; padding-top: 2px;">
                            Remaining Characters:
                            <b>8000</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="RopeHarness">
            <div class="baseContainer">
              <div class="labelContainer">
                Rope &amp; Harness Used?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="TarpInstall">
            <div class="baseContainer">
              <div class="labelContainer">
                Tarp Install?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
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
                                  type="file"
                                  id="file"
                                  name="file"
                                  data-role="upload"
                                  aria-label
                                  multiple="multiple"
                                  autocomplete="off"
                                />
                                <span></span>
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
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="TarpInstallSizeSf" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Tarp Install Size (SF):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span></span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="TarpResetSizeSf" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Tarp Install / Remove &amp; Reset (SF):
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="numericContainer">
                      <div class="flexRowSpaceBetweenNoWrap">
                        <div class="labelContainer">
                          <span></span>
                        </div>
                        <div class="iconEnabled">
                          <i class="fad fa-2x fa-calculator"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="EagleViewProvided">
            <div class="baseContainer">
              <div class="labelContainer">
                Was a copy of Eagleview Provided?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="RoleExplained">
            <div class="baseContainer">
              <div class="labelContainer">
                Was Ladder Assist introduced &amp; Role Explained?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="OutsideAdjusterPresent">
            <div class="baseContainer">
              <div class="labelContainer">
                Outside Adjuster Present During Inspection?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="OutsideAdjusterPresentOnRoof" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Outside Adjuster On Roof During Inspection?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="OutsideAdjusterOnEdge" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Outside Adjuster On Edge of Roof?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="OutsideAdjusterOnLadder" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Outside Adjuster On Ladder During Inspection?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="PublicAdjusterPresent">
            <div class="baseContainer">
              <div class="labelContainer">
                Public Adjuster Present During Inspection?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="RoofPublicAdjusterOnRoof" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Public Adjuster On Roof During Inspection?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="InsuredPresent">
            <div class="baseContainer">
              <div class="labelContainer">
                Insured Present?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">true</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="ContractorPresent">
            <div class="baseContainer">
              <div class="labelContainer">
                Contractor Present During Inspection?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="ContractorPresentOnRoof" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Contractor On Roof During Inspection?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="LaAccompanied">
            <div class="baseContainer">
              <div class="labelContainer">
                Did LA Accompanied OA on walk around - collateral inspection?
                <span
                  style="color: red;"
                ></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="LaOnTime">
            <div class="baseContainer">
              <div class="labelContainer">
                Did LA arrive on time to inspection?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="OaReview">
            <div class="baseContainer">
              <div class="labelContainer">
                Did OA review RAF?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2"></div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="OaInitialsRequired">
            <div class="baseContainer">
              <div class="labelContainer">
                OA Initials Required?
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">false</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <div class="cbContainer">
                      <div class="eCheckbox boxLabel"></div>
                      <span class="choiceText">Yes</span>
                      &nbsp;&nbsp;
                      <div class="eCheckbox boxLabel answered"></div>
                      <span class="choiceText">No</span>
                    </div>
                  </div>
                  <div id="slot2">
                    <div>
                      <div class="flexRowSpaceBetweenNoWrap test">
                        <div>
                          <i-heroicons-solid-camera />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="OaInitials" style="display: none">
            <div class="baseContainer noMargin">
              <div class="labelContainer">
                Please sign your initials in the box to the right:
                <span style="color: red;"></span>
                <span style="color: white; font-size: 2pt;">null</span>
              </div>
              <div class="slotContainer">
                <div class="slotRow">
                  <div id="slot1">
                    <canvas
                      id="signature"
                      width="200"
                      height="70"
                      prefix="my-canvas"
                      class="signature-pad"
                      style="left: 0px; top: 0px; border: 1px solid rgb(0, 123, 255); touch-action: none;"
                    ></canvas>
                  </div>
                  <div id="slot2">
                    <div style="margin: 6px;">
                      <button type="button" class="btn btn-primary">Save</button>
                      <button type="button" class="btn btn-primary">Clear</button>
                    </div>
                  </div>
                </div>
                <div class="slotRow">
                  <div id="slot3"></div>
                  <div id="slot4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="background-color: red;">
          <div style="background-color: yellow; z-index: 3;"></div>
        </div>
      </div>
    </article>
  </page-wrapper>
</template>

<style lang="scss">
table,
th,
td {
  border: 1px solid;
}

table {
  /* width: 100%; */
  /* max-width: 400px; */
  /* height: 240px; */
  /* margin: 0 auto; */
  /* display: block; */
  /* overflow-x: auto; */
  /* border-spacing: 0; */
}

tbody {
  /* white-space: nowrap; */
}

th,
td {
  padding: 0.5rem;
  /* border-top-width: 0; */
  /* border-left-width: 0; */
}

th {
  /* position: sticky; */
  /* top: 0; */
  /* background: #fff; */
  /* vertical-align: bottom; */
}

th:last-child,
td:last-child {
  /* border-right-width: 0; */
}

tr:last-child td {
  /* border-bottom-width: 0; */
}
</style>

<style>
/* .baseContainer {
  background-color: #fafafa;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
}
.slotRow {
  margin: 1rem;
  border: 1px solid red;
  padding: 1rem;
}
.slotContainer {
  margin-top: 1rem;
  border: 1px solid green;
  padding: 1rem;
}
.labelContainer {
  border: 1px solid rebeccapurple;
  font-weight: 700;
  padding: 1rem;
} */
/* .cbContainer {

  }
  .eCheckbox {} */
/* eCheckbox boxLabel */
/* eCheckbox boxLabel answered */
/* .boxLabel {}
  .choiceText{}
  numericContainer
  noMargin
  flexRowSpaceBetweenNoWrap
  iconEnabled
  fad fa-2x fa-calculator
  class="form-control formValue tb tbArea" */
</style>
