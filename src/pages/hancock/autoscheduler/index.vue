<route lang="yaml">
meta:
  layout: home
</route>


<template>
  <div class="flex flex-col w-full min-h-screen">
    <page-header class="bg-white shadow">Auto Scheduler</page-header>

    <main class="flex-1">
      <section id="route-filters" v-show="false" class="mt-4 md:px-6">
        <base-box></base-box>
        <span
          class="block px-4 py-2 mt-4 text-sm font-semibold bg-yellow-100 border rounded shadow"
          v-show="false"
        >Approved By</span>
      </section>
      <!-- Loading Indicator -->
      <section v-show="false" class="md:px-6">
        <base-box class="flex items-center justify-center min-h-full mt-4">
          <page-loading-indicator></page-loading-indicator>
        </base-box>
      </section>
      <article v-if="false" class="flex flex-col w-full min-h-screen p-5">
        There are no available Routes for service area
        <br />
        <div v-if="false">
          There are unassigned project inspections including the following:
          <div>
            <section></section>
          </div>
        </div>
      </article>
      <article class="mt-4 md:px-6">
        <div>
          <!-- Area Schedule -->
          <section
            id="area-schedule"
            style="height: 500px"
            v-if="true"
            class="relative mt-4 overflow-x-auto border rounded border-primary-200"
          >
            <h3
              class="absolute flex items-center w-40 h-10 px-4 font-bold border-b bg-primary-50 border-primary-200 text-primary-500"
            >Area Schedule</h3>
            <div class="relative ml-40">
              <section class="relative flex w-auto gap-0 mx-auto"></section>
            </div>
          </section>
          <!-- Secondary Button Group -->
          <base-box v-if="true" class="mt-4 space-x-4">
            <button
              type="button"
              v-show="false"
              class="inline-flex items-center px-4 py-2 text-sm font-medium border border-transparent rounded-md select-none bg-primary-100 text-primary-700 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >Add Exception Route</button>
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 text-sm font-medium border border-transparent rounded-md select-none bg-primary-100 text-primary-700 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <span v-if="true">View Travel Log</span>
              <span v-else>Close Travel Log</span>
            </button>
          </base-box>
          <base-box v-if="true" class="mt-4 bg-white"></base-box>
        </div>
      </article>
    </main>
    <app-footer class="mt-16" style="margin-top: 176px">
      <span>&copy; Hancock Claims Consultants, LLC. All rights reserved.</span>
    </app-footer>
  </div>
</template>
