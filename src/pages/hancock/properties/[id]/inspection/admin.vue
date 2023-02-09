<template>
  <div class="flexColumnStartWrap">
    <div id="Admin" class="w-full">
      <div class="p-6 topMargin">
        <div id="AdminContainer" class="grid w-full grid-cols-12 gap-6 pifAdminContainer">
          <div class="col-span-3">
            <div id="ProjectDetails">
              <div class="pifDetailsContainer">
                <div class="border-t border-gray-200">
                  <dl class="sm:divide-y sm:divide-gray-200">
                    <div class="py-4 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4">
                      <dt class="text-sm font-medium text-gray-500">Project Number</dt>
                      <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">2003130436</dd>
                    </div>
                    <div class="py-4 sm:py-2sm:grid sm:grid-cols-3 sm:gap-4">
                      <dt class="text-sm font-medium text-gray-500">Claim Number</dt>
                      <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">328576-GK</dd>
                    </div>
                    <div class="py-4 sm:py-2sm:grid sm:grid-cols-3 sm:gap-4">
                      <dt class="text-sm font-medium text-gray-500">Company</dt>
                      <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Nationwide</dd>
                    </div>
                    <div class="py-4 sm:py-2sm:grid sm:grid-cols-3 sm:gap-4">
                      <dt class="text-sm font-medium text-gray-500">Insured Name</dt>
                      <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">RAJA</dd>
                    </div>
                    <div class="py-4 sm:py-2sm:grid sm:grid-cols-3 sm:gap-4">
                      <dt class="text-sm font-medium text-gray-500">Insured Primary Phone</dt>
                      <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">(330) 328-8706</dd>
                    </div>
                    <div class="py-4 sm:py-2sm:grid sm:grid-cols-3 sm:gap-4">
                      <dt class="text-sm font-medium text-gray-500">Insured Primary Email</dt>
                      <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"></dd>
                    </div>
                    <div class="py-4 sm:py-2sm:grid sm:grid-cols-3 sm:gap-4">
                      <dt class="text-sm font-medium text-gray-500">Adjuster</dt>
                      <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Mark Kasberg</dd>
                    </div>
                    <div class="py-4 sm:py-2sm:grid sm:grid-cols-3 sm:gap-4">
                      <dt class="text-sm font-medium text-gray-500">Adjuster Email</dt>
                      <dd
                        class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                      >kasberm1@nationwide.com</dd>
                    </div>
                    <div class="py-4 sm:py-2sm:grid sm:grid-cols-3 sm:gap-4">
                      <dt class="text-sm font-medium text-gray-500">Technician</dt>
                      <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"></dd>
                    </div>
                    <div class="py-4 sm:py-2sm:grid sm:grid-cols-3 sm:gap-4">
                      <dt class="text-sm font-medium text-gray-500">Technician Phone</dt>
                      <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"></dd>
                    </div>
                  </dl>
                </div>

                <div class="pifDetailContainer">
                  <span>Address:</span>
                  <br />
                  <span class="pifClaimDetail">
                    7730 INDIAN SPRINGS DR
                    <br />POWELL, Ohio 43065
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-9">
            <div class="pifAssetContainer">
              <div
                id="FormHeaderContainer"
                class="flex items-center justify-between bg-primary-50 pifFormHeaderContainer"
              >
                <div id="FormDropdown">
                  <div class="whitespace-nowrap">
                    <span class="block pifFormName">Select PIF</span>
                    <span
                      class="k-widget k-dropdown"
                      unselectable="on"
                      role="listbox"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      tabindex="0"
                      aria-owns="fc53650c-7338-4f41-9943-74cb67c4085b_listbox"
                      aria-controls="fc53650c-7338-4f41-9943-74cb67c4085b_listbox"
                      aria-live="polite"
                      aria-disabled="false"
                      aria-readonly="false"
                      aria-busy="false"
                      aria-activedescendant="b9f0ffc7-c13f-471c-98ad-f54ff5cc0ad5"
                    >
                      <span unselectable="on" class="k-dropdown-wrap k-state-default">
                        <span
                          id="b9f0ffc7-c13f-471c-98ad-f54ff5cc0ad5"
                          unselectable="on"
                          role="option"
                          aria-selected="true"
                          class="k-input"
                        >Structure1</span>
                        <span role="button" unselectable="on" class="k-select" aria-label="select">
                          <span class="k-icon k-i-arrow-60-down"></span>
                        </span>
                      </span>
                      <input data-role="dropdownlist" style="display: none" />
                    </span>
                  </div>
                </div>
                <div id="FormLinks" class="flex items-center space-x-4">
                  <div
                    class="flex flex-col items-center justify-center pifIconMenu pifFormIconsActive cursor"
                  >
                    <i class="fas fa-edit"></i>
                    <span>Edit PIF</span>
                  </div>
                  <div
                    class="flex flex-col items-center justify-center pifIconMenu pifFormIconsActive cursor"
                  >
                    <i class="fas fa-copy"></i>
                    <span>New PIF</span>
                  </div>
                  <div
                    class="flex flex-col items-center justify-center pifIconMenu pifFormIconsActive cursor"
                  >
                    <i class="fas fa-trash"></i>
                    <span>Delete PIF</span>
                  </div>
                </div>
              </div>

              <div
                id="PifStatus"
                class="flex items-center justify-between p-2 text-xs bg-yellow-100 pifFormStatusContainer"
              >
                <span>Created On: Not Created</span>
                <span>Last Updated On: 12/20/2021, 8:38:29 AM</span>
              </div>
            </div>
            <!--  -->
            <div class="flex items-center justify-evenly pifAssetButtons">
              <div class="assetButton">
                <button
                  type="button"
                  class="flex items-center space-x-2 whitespace-nowrap assetButtonWidth btn btn-sm btn-warning"
                >
                  <i class="fas fa-plus-square"></i>
                  <span>Select All</span>
                </button>
              </div>
              <div class="assetButton">
                <div
                  class="flex items-center dropdown b-dropdown assetButtonWidth createAsset btn-group"
                  id="__BVID__12"
                  style="height: 30.67px !important"
                >
                  <button
                    aria-haspopup="true"
                    aria-expanded="false"
                    type="button"
                    class="flex items-center space-x-2 whitespace-nowrap btn dropdown-toggle btn-warning"
                    id="__BVID__12__BV_toggle_"
                  >
                    <i class="fas fa-plus-circle"></i>
                    <span>Upload Asset</span>
                  </button>
                  <ul
                    role="menu"
                    tabindex="-1"
                    class="hidden dropdown-menu"
                    aria-labelledby="__BVID__12__BV_toggle_"
                  >
                    <li role="presentation">
                      <button role="menuitem" type="button" class="dropdown-item">
                        <span class="whitespace-nowrap">Upload Diagram</span>
                      </button>
                    </li>
                    <li role="presentation">
                      <button role="menuitem" type="button" class="dropdown-item">
                        <span class="whitespace-nowrap">Upload Diagram - Auto Create Asset</span>
                      </button>
                    </li>
                    <li role="presentation">
                      <button role="menuitem" type="button" class="dropdown-item">
                        <span>Upload Hover ESX</span>
                      </button>
                    </li>
                    <li role="presentation">
                      <button role="menuitem" type="button" class="dropdown-item">
                        <span class="whitespace-nowrap">Upload Hover XML</span>
                      </button>
                    </li>
                    <li role="presentation">
                      <button
                        role="menuitem"
                        type="button"
                        class="dropdown-item"
                      >Upload Hover Invoice</button>
                    </li>
                    <li role="presentation">
                      <button
                        role="menuitem"
                        type="button"
                        class="dropdown-item"
                      >Upload Hover Measurements</button>
                    </li>
                    <li role="presentation">
                      <button role="menuitem" type="button" class="dropdown-item">Upload User Asset</button>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="assetButton">
                <button
                  type="button"
                  class="flex items-center space-x-2 whitespace-nowrap assetButtonWidth btn btn-sm btn-warning"
                >
                  <i class="fas fa-envelope"></i>
                  <span class>Email Asset</span>
                </button>
              </div>
              <div class="assetButton">
                <div
                  class="dropdown b-dropdown assetButtonWidth createAsset btn-group"
                  id="__BVID__20"
                >
                  <button
                    aria-haspopup="true"
                    aria-expanded="false"
                    type="button"
                    disabled
                    class="flex items-center space-x-2 btn dropdown-toggle btn-warning disabled"
                    id="__BVID__20__BV_toggle_"
                  >
                    <i class="fas fa-plus-circle"></i>
                    <span>Create Asset</span>
                  </button>
                  <ul
                    role="menu"
                    tabindex="-1"
                    class="hidden dropdown-menu"
                    aria-labelledby="__BVID__20__BV_toggle_"
                  >
                    <li role="presentation">
                      <button
                        role="menuitem"
                        type="button"
                        class="dropdown-item"
                      >Auto Create Photo Form</button>
                    </li>
                    <li role="presentation">
                      <button
                        role="menuitem"
                        type="button"
                        class="dropdown-item"
                      >Manually Create Photo Form</button>
                    </li>
                    <li role="presentation">
                      <button role="menuitem" type="button" class="dropdown-item">Create Diagram</button>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="assetButton">
                <button
                  type="button"
                  class="flex items-center justify-center space-x-2 whitespace-nowrap assetButtonWidth btn btn-sm btn-warning"
                >
                  <i class="fas fa-trash"></i>
                  <span>Delete Asset(s)</span>
                </button>
              </div>
              <div class="assetButton">
                <button
                  type="button"
                  id="btnDownloadAsset"
                  class="assetButtonWidth btn btn-sm btn-warning"
                >
                  <i class="fas fa-file-download"></i>
                  <span>Zip File</span>
                </button>
              </div>
            </div>

            <!--  -->
            <table class="table-fixed">
              <thead>
                <tr>
                  <th class="w-16"></th>
                  <th class="text-left"></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="false">
                  <td class="text-center">
                    <font-awesome-icon size="2x" fixed-width :icon="['fad', 'calendar']" />
                  </td>
                  <td>
                    <dl class="grid">
                      <div class="pb-1 font-mono text-xs leading-5 border-b border-gray-200">
                        <dt class="sr-only">CSS class</dt>
                        <dd>font-body</dd>
                      </div>
                      <div
                        class="col-start-2 pb-1 font-mono text-xs leading-5 text-right text-gray-400 border-b border-gray-200"
                      >
                        <dt class="sr-only">Font size</dt>
                        <dd style="opacity:1">14pt</dd>
                      </div>
                      <div class="col-span-2 mt-4 text-sm leading-6 text-gray-700">
                        <dt class="sr-only">Sample</dt>
                        <dd
                          style="opacity:1"
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue gravida cras quis ac duis pretium ullamcorper consequat. Integer pellentesque eu.</dd>
                      </div>
                    </dl>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="text-center">
                    <font-awesome-icon size="2x" fixed-width :icon="['fad', 'project-diagram']" />
                  </td>
                  <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue gravida cras quis ac duis pretium ullamcorper consequat. Integer pellentesque eu.</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="text-center">
                    <font-awesome-icon size="2x" fixed-width :icon="['fad', 'drone']" />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="text-center">
                    <font-awesome-icon size="2x" fixed-width :icon="['fad', 'camera-alt']" />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>

            <!--  -->
            <div class="w-full" style="width: 100%">
              <div id="AssetGrid" class="assetGridContainer">
                <div class>
                  <div class="flex items-center justify-evenly pifAssetButtons">
                    <div class="assetButton">
                      <button
                        type="button"
                        class="flex items-center space-x-2 whitespace-nowrap assetButtonWidth btn btn-sm btn-warning"
                      >
                        <i class="fas fa-plus-square"></i>
                        <span>Select All</span>
                      </button>
                    </div>
                    <div class="assetButton">
                      <div
                        class="flex items-center dropdown b-dropdown assetButtonWidth createAsset btn-group"
                        id="__BVID__12"
                        style="height: 30.67px !important"
                      >
                        <button
                          aria-haspopup="true"
                          aria-expanded="false"
                          type="button"
                          class="flex items-center space-x-2 whitespace-nowrap btn dropdown-toggle btn-warning"
                          id="__BVID__12__BV_toggle_"
                        >
                          <i class="fas fa-plus-circle"></i>
                          <span>Upload Asset</span>
                        </button>
                        <ul
                          role="menu"
                          tabindex="-1"
                          class="hidden dropdown-menu"
                          aria-labelledby="__BVID__12__BV_toggle_"
                        >
                          <li role="presentation">
                            <button role="menuitem" type="button" class="dropdown-item">
                              <span class="whitespace-nowrap">Upload Diagram</span>
                            </button>
                          </li>
                          <li role="presentation">
                            <button role="menuitem" type="button" class="dropdown-item">
                              <span class="whitespace-nowrap">Upload Diagram - Auto Create Asset</span>
                            </button>
                          </li>
                          <li role="presentation">
                            <button role="menuitem" type="button" class="dropdown-item">
                              <span>Upload Hover ESX</span>
                            </button>
                          </li>
                          <li role="presentation">
                            <button role="menuitem" type="button" class="dropdown-item">
                              <span class="whitespace-nowrap">Upload Hover XML</span>
                            </button>
                          </li>
                          <li role="presentation">
                            <button
                              role="menuitem"
                              type="button"
                              class="dropdown-item"
                            >Upload Hover Invoice</button>
                          </li>
                          <li role="presentation">
                            <button
                              role="menuitem"
                              type="button"
                              class="dropdown-item"
                            >Upload Hover Measurements</button>
                          </li>
                          <li role="presentation">
                            <button
                              role="menuitem"
                              type="button"
                              class="dropdown-item"
                            >Upload User Asset</button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="assetButton">
                      <button
                        type="button"
                        class="flex items-center space-x-2 whitespace-nowrap assetButtonWidth btn btn-sm btn-warning"
                      >
                        <i class="fas fa-envelope"></i>
                        <span class>Email Asset</span>
                      </button>
                    </div>
                    <div class="assetButton">
                      <div
                        class="dropdown b-dropdown assetButtonWidth createAsset btn-group"
                        id="__BVID__20"
                      >
                        <button
                          aria-haspopup="true"
                          aria-expanded="false"
                          type="button"
                          disabled
                          class="flex items-center space-x-2 btn dropdown-toggle btn-warning disabled"
                          id="__BVID__20__BV_toggle_"
                        >
                          <i class="fas fa-plus-circle"></i>
                          <span>Create Asset</span>
                        </button>
                        <ul
                          role="menu"
                          tabindex="-1"
                          class="hidden dropdown-menu"
                          aria-labelledby="__BVID__20__BV_toggle_"
                        >
                          <li role="presentation">
                            <button
                              role="menuitem"
                              type="button"
                              class="dropdown-item"
                            >Auto Create Photo Form</button>
                          </li>
                          <li role="presentation">
                            <button
                              role="menuitem"
                              type="button"
                              class="dropdown-item"
                            >Manually Create Photo Form</button>
                          </li>
                          <li role="presentation">
                            <button
                              role="menuitem"
                              type="button"
                              class="dropdown-item"
                            >Create Diagram</button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="assetButton">
                      <button
                        type="button"
                        class="flex items-center justify-center space-x-2 whitespace-nowrap assetButtonWidth btn btn-sm btn-warning"
                      >
                        <i class="fas fa-trash"></i>
                        <span>Delete Asset(s)</span>
                      </button>
                    </div>
                    <div class="assetButton">
                      <button
                        type="button"
                        id="btnDownloadAsset"
                        class="flex items-center space-x-2 assetButtonWidth whitespace-nowrap btn btn-sm btn-warning"
                      >
                        <i class="fas fa-file-download"></i>
                        <span>Zip File</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="hidden assetHeader">
                  <span class="grow">1 Non-Field Asset(s)</span>
                  <span style="padding-left: 15px">
                    Show Deleted Assets
                    <span
                      class="k-switch k-widget k-switch-off"
                      role="switch"
                      tabindex="0"
                      aria-checked="false"
                    >
                      <input type="checkbox" name="switch" data-role="switch" />
                      <span class="k-switch-container">
                        <span class="k-switch-label-on">On</span>
                        <span class="k-switch-label-off">Off</span>
                        <span class="k-switch-handle"></span>
                      </span>
                    </span>
                  </span>
                  <span style="padding-left: 15px">
                    Show Field/User Assets
                    <span
                      class="k-switch k-widget k-switch-off"
                      role="switch"
                      tabindex="0"
                      aria-checked="false"
                    >
                      <input type="checkbox" name="switch" data-role="switch" />
                      <span class="k-switch-container">
                        <span class="k-switch-label-on">On</span>
                        <span class="k-switch-label-off">Off</span>
                        <span class="k-switch-handle"></span>
                      </span>
                    </span>
                  </span>
                </div>
                <div class="hidden">
                  <div class="assetRow">
                    <div>
                      <div class="eCheckbox" style="width: 100%">&nbsp;</div>
                    </div>
                    <div style="padding-left: 20px">
                      <div class="pifAssetIconContainer">
                        Email Icon
                        <span class="assetType">Email</span>
                      </div>
                    </div>
                    <div class="assetDetails grow">
                      <div class="assetRowPadding">
                        <span class="assetLabel">Name:</span>
                        <span class="assetText">Confirmation Email</span>
                      </div>
                      <div class="assetRowPadding">
                        <span class="assetLabel">Created By:</span>
                        <span class="assetText">SYSTEM USER</span>
                      </div>
                      <div class="assetRowPadding">
                        <span class="assetLabel">Created On:</span>
                        <span class="assetText">03/13/2020 8:30 PM</span>
                      </div>
                      <div class="assetRowPadding" style="display: none">
                        <span class="assetLabel">Device:</span>
                        <span class="assetText">-</span>
                      </div>
                      <div class="assetRowPadding" style="display: none">
                        <span style="display: none">
                          <span class="assetLabel">Original File Type:</span>
                          <span class="assetText"></span>
                        </span>
                        <span style="display: none">
                          <span class="assetLabel">Resolution:</span>
                          <span class="assetText">X: Y:</span>
                        </span>
                      </div>
                    </div>
                    <div>
                      <button type="button" class="btn btn-sm btn-warning">
                        <i class="fas fa-file-download"></i>
                        <span>Edit</span>
                      </button>
                      <button type="button" class="btn btn-sm btn-warning">
                        <i class="fas fa-file-download"></i>
                        <span>Download</span>
                      </button>
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
</template>


<style scoped>
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
.baseContainer {
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
}
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
  fas fa-2x fa-calculator
  class="form-control formValue tb tbArea" */
</style>
