<template>
  <div class="col-span-9">
    <div class="pifAssetContainer">
      <div
        id="FormHeaderContainer"
        class="flex items-center justify-between bg-primary-50 pifFormHeaderContainer"
      >
        <div>
          <label
            for="select-pif"
            class="block text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Select PIF
          </label>
          <select
            id="select-pif"
            class="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            style="min-width: 250px"
          >
            <option>Structure 1</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </select>
        </div>
        <div id="FormLinks" class="flex items-center space-x-4">
          <a
            href="/PropertyInspection/PropertyInspections/1"
            class="flex flex-col items-center justify-center pifIconMenu pifFormIconsActive cursor"
          >
            <svg
              class="svg-inline--fa fa-edit"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="edit"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"
              />
            </svg>
            <!-- <i class="fas fa-edit"></i> Font Awesome fontawesome.com -->
            <span>Edit PIF</span>
          </a>
          <div
            class="flex flex-col items-center justify-center pifIconMenu pifFormIconsActive cursor"
          >
            <svg
              class="svg-inline--fa fa-copy"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="copy"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"
              />
            </svg>
            <!-- <i class="fas fa-copy"></i> Font Awesome fontawesome.com -->
            <span>New PIF</span>
          </div>
          <div
            class="flex flex-col items-center justify-center pifIconMenu pifFormIconsActive cursor"
          >
            <svg
              class="svg-inline--fa fa-trash"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="trash"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"
              />
            </svg>
            <!-- <i class="fas fa-trash"></i> Font Awesome fontawesome.com -->
            <span>Delete PIF</span>
          </div>
        </div>
      </div>
      <!-- PifStatus -->
      <div
        id="PifStatus"
        class="flex items-center justify-between p-2 mt-2 text-xs bg-yellow-100 shadow-lg dark:text-primary-800 pifFormStatusContainer"
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
          <svg
            class="svg-inline--fa fa-plus-square"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="plus-square"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
            />
          </svg>
          <!-- <i class="fas fa-plus-square"></i> Font Awesome fontawesome.com -->
          <span>Select All</span>
        </button>
      </div>
      <div class="assetButton">
        <div
          id="__BVID__12"
          class="flex items-center dropdown b-dropdown assetButtonWidth createAsset btn-group"
          style="height: 30.67px !important"
        >
          <button
            id="__BVID__12__BV_toggle_"
            aria-haspopup="true"
            aria-expanded="false"
            type="button"
            class="flex items-center space-x-2 whitespace-nowrap btn dropdown-toggle btn-warning"
          >
            <svg
              class="svg-inline--fa fa-plus-circle"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="plus-circle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
              />
            </svg>
            <!-- <i class="fas fa-plus-circle"></i> Font Awesome fontawesome.com -->
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
      <div class="assetButton">
        <button
          type="button"
          class="flex items-center space-x-2 whitespace-nowrap assetButtonWidth btn btn-sm btn-warning"
        >
          <svg
            class="svg-inline--fa fa-envelope"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="envelope"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
            />
          </svg>
          <!-- <i class="fas fa-envelope"></i> Font Awesome fontawesome.com -->
          <span class="">Email Asset</span>
        </button>
      </div>
      <div class="assetButton">
        <div
          id="__BVID__20"
          class="dropdown b-dropdown assetButtonWidth createAsset btn-group"
        >
          <button
            id="__BVID__20__BV_toggle_"
            aria-haspopup="true"
            aria-expanded="false"
            type="button"
            disabled=""
            class="flex items-center space-x-2 btn dropdown-toggle btn-warning disabled"
          >
            <svg
              class="svg-inline--fa fa-plus-circle"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="plus-circle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
              />
            </svg>
            <!-- <i class="fas fa-plus-circle"></i> Font Awesome fontawesome.com -->
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
      <div class="assetButton">
        <button
          type="button"
          class="flex items-center justify-center space-x-2 whitespace-nowrap assetButtonWidth btn btn-sm btn-warning"
        >
          <svg
            class="svg-inline--fa fa-trash"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="trash"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"
            />
          </svg>
          <!-- <i class="fas fa-trash"></i> Font Awesome fontawesome.com -->
          <span>Delete Asset(s)</span>
        </button>
      </div>
      <div class="assetButton">
        <button
          id="btnDownloadAsset"
          type="button"
          class="flex items-center justify-center space-x-2 assetButtonWidth btn btn-sm btn-warning"
        >
          <svg
            class="svg-inline--fa fa-file-download"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="file-download"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"
            />
          </svg>
          <!-- <i class="fas fa-file-download"></i> Font Awesome fontawesome.com -->
          <span>Zip File</span>
        </button>
      </div>
    </div>
    <!--  -->
    <table class="table-fixed">
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
          <td class="text-center">
            <svg
              class="svg-inline--fa fa-project-diagram fa-fw fa-2x"
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="project-diagram"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <g class="fa-duotone-group">
                <path
                  class="fa-secondary"
                  fill="currentColor"
                  d="M416 128H164.65l91.63 160H256a63.79 63.79 0 0 0-55.12 32L54.78 64H416z"
                />
                <path
                  class="fa-primary"
                  fill="currentColor"
                  d="M384 320H256a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32zM160 0H32A32 32 0 0 0 0 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32zm448 0H480a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32z"
                />
              </g>
            </svg>
          </td>
          <td>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue gravida cras
            quis ac duis pretium ullamcorper consequat. Integer pellentesque eu.
          </td>
          <td />
          <td />
        </tr>
        <tr>
          <td class="text-center">
            <svg
              v-if="false"
              class="svg-inline--fa fa-drone fa-fw fa-2x"
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="drone"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g class="fa-duotone-group">
                <path
                  class="fa-secondary"
                  fill="currentColor"
                  d="M300.34 160l38.86-28.06a64.05 64.05 0 1 1 40.86 40.86L352 211.66v1.56A111.93 111.93 0 1 0 298.78 160zm-88.68 192L172 380.64a64.06 64.06 0 1 1-40.25-41.17L160 300.34v-1.08A111.93 111.93 0 1 0 212.22 352zM111 0a112 112 0 1 0 49 212.74v-1.08l-28.25-39.13A64 64 0 1 1 172 131.36L211.66 160h.56A112 112 0 0 0 111 0zm289 288a111.58 111.58 0 0 0-48 10.78v1.56l28.06 38.86a64.05 64.05 0 1 1-40.86 40.86L300.34 352h-1.56A112 112 0 1 0 400 288z"
                />
                <path
                  class="fa-primary"
                  fill="currentColor"
                  d="M432 399.19a31.91 31.91 0 1 1-63.8 1.81l-67.86-49h-88.68l-67.86 49a31.91 31.91 0 1 1-32.8-32.8l49-67.86v-88.68l-49-67.86a31.91 31.91 0 1 1 32.8-32.8l67.86 49h88.68l67.86-49a31.91 31.91 0 1 1 32.8 32.8l-49 67.86v88.68l49 67.86a31.9 31.9 0 0 1 31 30.99z"
                />
              </g>
            </svg>
            <i-carbon-drone class="h-6 w-6 text-primary-500" />
          </td>
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td class="text-center">
            <svg
              class="svg-inline--fa fa-camera-alt fa-fw fa-2x"
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="camera-alt"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g class="fa-duotone-group">
                <path
                  class="fa-secondary"
                  fill="currentColor"
                  d="M256 200a88 88 0 1 0 88 88 88.13 88.13 0 0 0-88-88zm0 56a32.09 32.09 0 0 0-32 32 16 16 0 0 1-32 0 64.06 64.06 0 0 1 64-64 16 16 0 0 1 0 32z"
                />
                <path
                  class="fa-primary"
                  fill="currentColor"
                  d="M464 96h-88l-12.4-32.9A47.93 47.93 0 0 0 318.7 32H193.2a47.93 47.93 0 0 0-44.9 31.1L136 96H48a48 48 0 0 0-48 48v288a48 48 0 0 0 48 48h416a48 48 0 0 0 48-48V144a48 48 0 0 0-48-48zM256 408a120 120 0 1 1 120-120 120.1 120.1 0 0 1-120 120z"
                />
              </g>
            </svg>
          </td>
          <td />
          <td />
          <td />
        </tr>
      </tbody>
    </table>
    <!--  -->
    <div class="w-full" style="width: 100%">
      <div id="AssetGrid" class="assetGridContainer">
        <div class="">
          <div class="flex items-center justify-evenly pifAssetButtons">
            <div class="assetButton">
              <button
                type="button"
                class="flex items-center space-x-2 whitespace-nowrap assetButtonWidth btn btn-sm btn-warning"
              >
                <svg
                  class="svg-inline--fa fa-plus-square"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="plus-square"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
                  />
                </svg>
                <!-- <i class="fas fa-plus-square"></i> Font Awesome fontawesome.com -->
                <span>Select All</span>
              </button>
            </div>
            <div class="assetButton">
              <div
                id="__BVID__12"
                class="flex items-center dropdown b-dropdown assetButtonWidth createAsset btn-group"
                style="height: 30.67px !important"
              >
                <button
                  id="__BVID__12__BV_toggle_"
                  aria-haspopup="true"
                  aria-expanded="false"
                  type="button"
                  class="flex items-center space-x-2 whitespace-nowrap btn dropdown-toggle btn-warning"
                >
                  <svg
                    class="svg-inline--fa fa-plus-circle"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="plus-circle"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
                    />
                  </svg>
                  <!-- <i class="fas fa-plus-circle"></i> Font Awesome fontawesome.com -->
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
            <div class="assetButton">
              <button
                type="button"
                class="flex items-center space-x-2 whitespace-nowrap assetButtonWidth btn btn-sm btn-warning"
              >
                <svg
                  class="svg-inline--fa fa-envelope"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="envelope"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                  />
                </svg>
                <!-- <i class="fas fa-envelope"></i> Font Awesome fontawesome.com -->
                <span class="">Email Asset</span>
              </button>
            </div>
            <div class="assetButton">
              <div
                id="__BVID__20"
                class="dropdown b-dropdown assetButtonWidth createAsset btn-group"
              >
                <button
                  id="__BVID__20__BV_toggle_"
                  aria-haspopup="true"
                  aria-expanded="false"
                  type="button"
                  disabled=""
                  class="flex items-center space-x-2 btn dropdown-toggle btn-warning disabled"
                >
                  <svg
                    class="svg-inline--fa fa-plus-circle"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="plus-circle"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
                    />
                  </svg>
                  <!-- <i class="fas fa-plus-circle"></i> Font Awesome fontawesome.com -->
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
            <div class="assetButton">
              <button
                type="button"
                class="flex items-center justify-center space-x-2 whitespace-nowrap assetButtonWidth btn btn-sm btn-warning"
              >
                <svg
                  class="svg-inline--fa fa-trash"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="trash"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"
                  />
                </svg>
                <!-- <i class="fas fa-trash"></i> Font Awesome fontawesome.com -->
                <span>Delete Asset(s)</span>
              </button>
            </div>
            <div class="assetButton">
              <button
                id="btnDownloadAsset"
                type="button"
                class="flex items-center space-x-2 assetButtonWidth whitespace-nowrap btn btn-sm btn-warning"
              >
                <svg
                  class="svg-inline--fa fa-file-download"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="file-download"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"
                  />
                </svg>
                <!-- <i class="fas fa-file-download"></i> Font Awesome fontawesome.com -->
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
          <div class="assetRow">
            <div>
              <div class="eCheckbox" style="width: 100%">
&nbsp;
              </div>
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
                  <span class="assetText" />
                </span>
                <span style="display: none">
                  <span class="assetLabel">Resolution:</span>
                  <span class="assetText">X: Y:</span>
                </span>
              </div>
            </div>
            <div>
              <button type="button" class="btn btn-sm btn-warning">
                <svg
                  class="svg-inline--fa fa-file-download"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="file-download"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"
                  />
                </svg>
                <!-- <i class="fas fa-file-download"></i> Font Awesome fontawesome.com -->
                <span>Edit</span>
              </button>
              <button type="button" class="btn btn-sm btn-warning">
                <svg
                  class="svg-inline--fa fa-file-download"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="file-download"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"
                  />
                </svg>
                <!-- <i class="fas fa-file-download"></i> Font Awesome fontawesome.com -->
                <span>Download</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
