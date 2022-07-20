<template>
  <header class="py-8 shadow-lg bg-primary-50 dark:text-primary-300 dark:bg-primary-800">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between">
      <div class="flex-1 min-w-0">
        <h1 class="mt-2 text-2xl font-bold leading-7 sm:text-3xl sm:truncate">
          Property Inspection Form Admin
        </h1>
        <!-- v-if -->
      </div>
      <div class="flex mt-5 xl:mt-0 xl:ml-4">
        <div class="flex items-center space-x-2">
          <div>
            <label for="project-search">Search</label>
            <input
              id="project-search"
              type="search"
              placeholder="Project Number"
              class="bg-white border rounded-lg shadow-lg border-primary-400"
            >
          </div>
          <button class="space-x-2 h-button">
            <svg
              class="svg-inline--fa fa-question-circle fa-lg"
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="question-circle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <g class="fa-duotone-group">
                <path
                  class="fa-secondary"
                  fill="currentColor"
                  d="M256 8C119 8 8 119.08 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 422a46 46 0 1 1 46-46 46.05 46.05 0 0 1-46 46zm40-131.33V300a12 12 0 0 1-12 12h-56a12 12 0 0 1-12-12v-4c0-41.06 31.13-57.47 54.65-70.66 20.17-11.31 32.54-19 32.54-34 0-19.82-25.27-33-45.7-33-27.19 0-39.44 13.14-57.3 35.79a12 12 0 0 1-16.67 2.13L148.82 170a12 12 0 0 1-2.71-16.26C173.4 113 208.16 90 262.66 90c56.34 0 116.53 44 116.53 102 0 77-83.19 78.21-83.19 106.67z"
                />
                <path
                  class="fa-primary"
                  fill="currentColor"
                  d="M256 338a46 46 0 1 0 46 46 46 46 0 0 0-46-46zm6.66-248c-54.5 0-89.26 23-116.55 63.76a12 12 0 0 0 2.71 16.24l34.7 26.31a12 12 0 0 0 16.67-2.13c17.86-22.65 30.11-35.79 57.3-35.79 20.43 0 45.7 13.14 45.7 33 0 15-12.37 22.66-32.54 34C247.13 238.53 216 254.94 216 296v4a12 12 0 0 0 12 12h56a12 12 0 0 0 12-12v-1.33c0-28.46 83.19-29.67 83.19-106.67 0-58-60.19-102-116.53-102z"
                />
              </g>
            </svg>
            <!-- <i class="fad fa-question-circle fa-lg"></i> Font Awesome fontawesome.com -->
            <span class="font-bold">Help</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
