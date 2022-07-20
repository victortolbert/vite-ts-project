<template>
  <section class="p-4">
    <div class="pif-asset-container">
      <!-- PIF Status -->
      <div
        id="pif-status"
        class="flex items-center justify-between p-2 mt-2 text-xs bg-yellow-100 shadow dark:text-primary-800 pif-form-status-container"
      >
        <span>Created On: Not Created</span>
        <span>Last Updated On: 12/20/2021, 8:38:29 AM</span>
      </div>
      <header
        id="form-header-container"
        class="mt-8 flex items-center justify-between pif-form-header-container"
      >
        <div>
          <label
            for="select-pif"
            class="block text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Select PIF
          </label>
          <select id="select-pif" style="min-width: 250px">
            <option>Structure 1</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </select>
        </div>

        <!-- Form Links -->
        <div id="form-links" class="flex items-center space-x-4">
          <a
            href="/PropertyInspection/PropertyInspections/1"
            class="flex flex-col items-center justify-center pif-icon-menu pif-form-icons-active cursor"
          >
            <i-carbon-edit />
            <span>Edit PIF</span>
          </a>
          <div
            class="flex flex-col items-center justify-center pifIconMenu pifFormIconsActive cursor"
          >
            <i-carbon-copy />
            <span>New PIF</span>
          </div>
          <div
            class="flex flex-col items-center justify-center pifIconMenu pifFormIconsActive cursor"
          >
            <i-carbon-delete />
            <span>Delete PIF</span>
          </div>
        </div>
      </header>
    </div>

    <!--  -->
    <div class="mt-4 flex items-center justify-between pif-asset-button">
      <div class="asset-button">
        <button
          type="button"
          class="border py-1 px-2 shadow flex items-center space-x-2 whitespace-nowrap asset-button-width btn btn-sm btn-warning"
        >
          <i-carbon-add />
          <span>Select All</span>
        </button>
      </div>
      <div class="asset-button">
        <div
          id="__BVID__12"
          class="flex items-center dropdown b-dropdown asset-button-width createAsset btn-group"
          style="height: 30.67px !important"
        >
          <button
            id="__BVID__12__BV_toggle_"
            aria-haspopup="true"
            aria-expanded="false"
            type="button"
            class="border py-1 px-2 shadow flex items-center space-x-2 whitespace-nowrap btn dropdown-toggle btn-warning"
          >
            <i-carbon-upload />
            <span>Upload Asset</span>
          </button>
          <ul
            v-if="false"
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
              <button role="menuitem" type="button" class="dropdown-item">
                Upload Hover Invoice
              </button>
            </li>
            <li role="presentation">
              <button role="menuitem" type="button" class="dropdown-item">
                Upload Hover Measurements
              </button>
            </li>
            <li role="presentation">
              <button role="menuitem" type="button" class="dropdown-item">
                Upload User Asset
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="asset-button">
        <button
          type="button"
          class="border py-1 px-2 shadow flex items-center space-x-2 whitespace-nowrap asset-button-width btn btn-sm btn-warning"
        >
          <i-carbon-send />
          <span class="">Email Asset</span>
        </button>
      </div>
      <div class="asset-button">
        <div
          id="__BVID__20"
          class="dropdown b-dropdown asset-button-width createAsset btn-group"
        >
          <button
            id="__BVID__20__BV_toggle_"
            aria-haspopup="true"
            aria-expanded="false"
            type="button"
            disabled=""
            class="border py-1 px-2 shadow flex items-center space-x-2 btn dropdown-toggle btn-warning disabled"
          >
            <i-carbon-add-alt />
            <span>Create Asset</span>
          </button>
          <ul
            v-if="false"
            role="menu"
            tabindex="-1"
            class="hidden dropdown-menu"
            aria-labelledby="__BVID__20__BV_toggle_"
          >
            <li role="presentation">
              <button role="menuitem" type="button" class="dropdown-item">
                Auto Create Photo Form
              </button>
            </li>
            <li role="presentation">
              <button role="menuitem" type="button" class="dropdown-item">
                Manually Create Photo Form
              </button>
            </li>
            <li role="presentation">
              <button role="menuitem" type="button" class="dropdown-item">
                Create Diagram
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="asset-button">
        <button
          type="button"
          class="border py-1 px-2 shadow flex items-center justify-center space-x-2 whitespace-nowrap asset-button-width btn btn-sm btn-warning"
        >
          <i-carbon-delete />
          <span>Delete Asset(s)</span>
        </button>
      </div>
      <div class="asset-button">
        <button
          id="btn-download-asset"
          type="button"
          class="border py-1 px-2 shadow flex items-center justify-center space-x-2 asset-button-width btn btn-sm btn-warning"
        >
          <i-carbon-download />
          <span>Zip File</span>
        </button>
      </div>
    </div>

    <!-- Assets Table -->
    <table v-if="true" class="mt-4 border table-fixed">
      <thead>
        <tr>
          <th class="w-16" />
          <th class="text-left" />
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        <!-- v-if -->
        <tr>
          <td class="border text-center p-2">
            <i-carbon-schematics class="w-10 h-10 inline" />
          </td>
          <td>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue gravida cras
            quis ac duis pretium ullamcorper consequat. Integer pellentesque eu.
          </td>
          <td />
          <td />
        </tr>
        <tr>
          <td class="border text-center p-2">
            <i-carbon-drone class="w-10 h-10 inline" />
          </td>
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td class="border text-center p-2">
            <i-carbon-camera class="w-10 h-10 inline" />
          </td>
          <td />
          <td />
          <td />
        </tr>
      </tbody>
    </table>

    <!--  -->
    <div v-if="false" class="w-full">
      <div id="asset-grid" class="asset-grid-container">
        <div class="">
          <div class="flex items-center justify-evenly pif-asset-buttons">
            <div class="asset-button">
              <button
                type="button"
                class="flex items-center space-x-2 whitespace-nowrap asset-button-width btn btn-sm btn-warning"
              >
                <i-carbon-add />
                <span>Select All</span>
              </button>
            </div>
            <div class="asset-button">
              <div
                id="__BVID__12"
                class="flex items-center dropdown b-dropdown asset-button-width createAsset btn-group"
                style="height: 30.67px !important"
              >
                <button
                  id="__BVID__12__BV_toggle_"
                  aria-haspopup="true"
                  aria-expanded="false"
                  type="button"
                  class="flex items-center space-x-2 whitespace-nowrap btn dropdown-toggle btn-warning"
                >
                  <i-carbon-upload />
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
                      <span class="whitespace-nowrap">
                        Upload Diagram - Auto Create Asset
                      </span>
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
                    <button role="menuitem" type="button" class="dropdown-item">
                      Upload Hover Invoice
                    </button>
                  </li>
                  <li role="presentation">
                    <button role="menuitem" type="button" class="dropdown-item">
                      Upload Hover Measurements
                    </button>
                  </li>
                  <li role="presentation">
                    <button role="menuitem" type="button" class="dropdown-item">
                      Upload User Asset
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div class="asset-button">
              <button
                type="button"
                class="flex items-center space-x-2 whitespace-nowrap asset-button-width btn btn-sm btn-warning"
              >
                <i-carbon-send />
                <span class="">Email Asset</span>
              </button>
            </div>
            <div class="asset-button">
              <div
                id="__BVID__20"
                class="dropdown b-dropdown asset-button-width createAsset btn-group"
              >
                <button
                  id="__BVID__20__BV_toggle_"
                  aria-haspopup="true"
                  aria-expanded="false"
                  type="button"
                  disabled=""
                  class="flex items-center space-x-2 btn dropdown-toggle btn-warning disabled"
                >
                  <i-carbon-add-alt />
                  <span>Create Asset</span>
                </button>
                <ul
                  role="menu"
                  tabindex="-1"
                  class="hidden dropdown-menu"
                  aria-labelledby="__BVID__20__BV_toggle_"
                >
                  <li role="presentation">
                    <button role="menuitem" type="button" class="dropdown-item">
                      Auto Create Photo Form
                    </button>
                  </li>
                  <li role="presentation">
                    <button role="menuitem" type="button" class="dropdown-item">
                      Manually Create Photo Form
                    </button>
                  </li>
                  <li role="presentation">
                    <button role="menuitem" type="button" class="dropdown-item">
                      Create Diagram
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div class="asset-button">
              <button
                type="button"
                class="flex items-center justify-center space-x-2 whitespace-nowrap asset-button-width btn btn-sm btn-warning"
              >
                <i-carbon-delete />
                <span>Delete Asset(s)</span>
              </button>
            </div>
            <div class="asset-button">
              <button
                id="btn-download-asset"
                type="button"
                class="flex items-center space-x-2 asset-button-width whitespace-nowrap btn btn-sm btn-warning"
              >
                <i-carbon-download />
                <span>Zip File</span>
              </button>
            </div>
          </div>
        </div>
        <div class="hidden asset-header">
          <span class="grow">1 Non-Field Asset(s)</span>
          <span style="padding-left: 15px">
            Show Deleted Assets
            <span
              class="k-switch k-widget k-switch-off"
              role="switch"
              tabindex="0"
              aria-checked="false"
            >
              <input type="checkbox" name="switch" data-role="switch">
              <span class="k-switch-container">
                <span class="k-switch-label-on">On</span>
                <span class="k-switch-label-off">Off</span>
                <span class="k-switch-handle" />
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
              <input type="checkbox" name="switch" data-role="switch">
              <span class="k-switch-container">
                <span class="k-switch-label-on">On</span>
                <span class="k-switch-label-off">Off</span>
                <span class="k-switch-handle" />
              </span>
            </span>
          </span>
        </div>
        <div class="hidden">
          <div class="asset-row">
            <div>
              <div class="w-full e-checkbox">
&nbsp;
              </div>
            </div>
            <div style="padding-left: 20px">
              <div class="pif-asset-icon-container">
                Email Icon
                <span class="asset-type">Email</span>
              </div>
            </div>
            <div class="asset-details grow">
              <div class="asset-row-padding">
                <span class="asset-label">Name:</span>
                <span class="asset-text">Confirmation Email</span>
              </div>
              <div class="asset-row-padding">
                <span class="asset-label">Created By:</span>
                <span class="asset-text">SYSTEM USER</span>
              </div>
              <div class="asset-row-padding">
                <span class="asset-label">Created On:</span>
                <span class="asset-text">03/13/2020 8:30 PM</span>
              </div>
              <div class="asset-row-padding" style="display: none">
                <span class="asset-label">Device:</span>
                <span class="asset-text">-</span>
              </div>
              <div class="asset-row-padding" style="display: none">
                <span style="display: none">
                  <span class="asset-label">Original File Type:</span>
                  <span class="asset-text" />
                </span>
                <span style="display: none">
                  <span class="asset-label">Resolution:</span>
                  <span class="asset-text">X: Y:</span>
                </span>
              </div>
            </div>

            <div>
              <button type="button" class="btn btn-sm btn-warning">
                <i-carbon-edit />
                <span>Edit</span>
              </button>
              <button type="button" class="btn btn-sm btn-warning">
                <i-carbon-download />
                <span>Download</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
