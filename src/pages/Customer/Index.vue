<template>
  <hancock-page-wrapper>
    <div class="grid grid-cols-1 gap-8 mx-8 lg:grid-cols-2">
      <div
        class="flex flex-col items-center justify-center p-8 mt-8 bg-white rounded-lg shadow-lg dark:bg-primary-700"
      >
        <div class="flex items-center justify-between w-full">
          <h1 class="text-2xl font-medium">State Farm (STFM)</h1>
          <button type="button" class="text-blue-500 underline">Deactivate</button>
        </div>

        <div class="flex items-center justify-between w-full">
          <div>
            123 ABC Street
            <br />Boston, MA 02116
          </div>
          <div>
            Adjuster Manager: John Doe
            <br />Bill Received By: Jenny Simmons
          </div>
        </div>

        <div class="flex items-center mt-4 space-x-4">
          <button
            type="button"
            class="flex flex-col items-center justify-center space-y-1 border rounded dark:border-primary-600 dark:hover:border-primary-400 h-28 w-28"
          >
            <i class="fad fa-3x fa-info-circle"></i>
            <span class="text-sm whitespace-nowrap">Details</span>
          </button>
          <button
            type="button"
            class="flex flex-col items-center justify-center space-y-1 border rounded dark:border-primary-600 dark:hover:border-primary-400 h-28 w-28"
          >
            <i class="fad fa-3x fa-paper-plane"></i>
            <span class="text-sm whitespace-nowrap">Email Accounts</span>
          </button>
          <button
            type="button"
            class="flex flex-col items-center justify-center space-y-1 border rounded dark:border-primary-600 dark:hover:border-primary-400 h-28 w-28"
          >
            <i class="fad fa-3x fa-concierge-bell"></i>
            <span class="text-sm whitespace-nowrap">Services</span>
          </button>
          <button
            type="button"
            class="flex flex-col items-center justify-center space-y-1 border rounded dark:border-primary-600 dark:hover:border-primary-400 h-28 w-28"
          >
            <i class="fad fa-3x fa-bell"></i>
            <span class="text-sm whitespace-nowrap">Notifications</span>
          </button>
        </div>
      </div>
      <div
        class="flex flex-col items-center justify-center p-8 mt-8 bg-white rounded-lg shadow-lg dark:bg-primary-700"
      >
        <div class="flex items-center space-x-4">
          <button
            type="button"
            class="flex flex-col items-center justify-center space-y-1 border rounded dark:border-primary-600 dark:hover:border-primary-400 h-28 w-28"
          >
            <i class="fad fa-3x fa-info-square"></i>
            <span class="text-sm whitespace-nowrap">Details</span>
          </button>
          <button
            type="button"
            class="flex flex-col items-center justify-center space-y-1 border rounded dark:border-primary-600 dark:hover:border-primary-400 h-28 w-28"
          >
            <i class="fad fa-3x fa-paper-plane"></i>
            <span class="text-sm whitespace-nowrap">Email Accounts</span>
          </button>
          <button
            type="button"
            class="flex flex-col items-center justify-center space-y-1 border rounded dark:border-primary-600 dark:hover:border-primary-400 h-28 w-28"
          >
            <i class="fad fa-3x fa-concierge-bell"></i>
            <span class="text-sm whitespace-nowrap">Services</span>
          </button>
          <button
            type="button"
            class="flex flex-col items-center justify-center space-y-1 border rounded dark:border-primary-600 dark:hover:border-primary-400 h-28 w-28"
          >
            <i class="fad fa-3x fa-bell"></i>
            <span class="text-sm whitespace-nowrap">Notifications</span>
          </button>
        </div>
      </div>
    </div>

    <article-section v-if="false" class="mt-8">
      <div class="flex items-center justify-center p-16 bg-primary-500">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
            <div class="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
              <img
                class="object-contain grayscale max-h-12"
                src="/assets/img/companies/allstate.png"
                alt="Allstate"
              />
            </div>
            <div class="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
              <img
                class="object-contain grayscale max-h-12"
                src="/assets/img/companies/state-farm.png"
                alt="State Farm"
              />
            </div>
            <div class="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
              <img
                class="object-contain grayscale max-h-12"
                src="/assets/img/companies/metlife.png"
                alt="MetLife"
              />
            </div>
            <div class="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
              <img
                class="object-contain grayscale max-h-12"
                src="/assets/img/companies/american-strategic.png"
                alt="American Strategic"
              />
            </div>
            <div class="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
              <img
                class="object-contain grayscale max-h-12"
                src="/assets/img/companies/farmers-mutual.png"
                alt="Farmers Mutual"
              />
            </div>
            <div class="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
              <img
                class="object-contain grayscale max-h-12"
                src="/assets/img/companies/iat.png"
                alt="IAT Insurance Group"
              />
            </div>
          </div>
        </div>
      </div>
    </article-section>
  </hancock-page-wrapper>
</template>
