<script lang="ts">
import '@/assets/sass/reports.scss'
</script>

<template>
  <div class="h-screen reports-layout bg-primary-100">
    <section class="p-8">
      <h1 class="text-lg font-bold">
        <hancock-logo />
        <span>Direct Inspection Report</span>
      </h1>
    </section>

    <div class="grid gap-8 sm:grid-cols-8">
      <div
        class="col-span-8 p-0 bg-white border-2 border-green-500 print:p-0 lg:col-span-6"
      >
        <inspection-overview-component />

        <table>
          <thead>
            <tr class="text-white bg-blue-600">
              <th class="p-2 text-xs font-bold text-left uppercase">
                Inspection Details
              </th>
              <th class="p-2 text-xs font-bold text-left uppercase">
                Inspection Details
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="col-span-8 border-2 border-green-500 print:hidden lg:col-span-2">
        <project-details-component />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
// // 1. Configuration and helpers
// @use 'abstracts/variables';
// @use '../assets/sass/abstracts/variables';
// @use 'abstracts/functions';
// @use 'abstracts/mixins';

// // 2. Vendors
// @use 'vendors/normalize';

// // 3. Base stuff
// @use 'base/base';
// @use 'base/fonts';
// @use 'base/typography';
// @use 'base/helpers';

// // 4. Layout-related sections
// @use 'layout/header';
// @use 'layout/footer';

// // 5. Components
// @use 'components/button';

// // 6. Page-specific styles
// @use 'pages/home';

// // 7. Themes
// @use 'themes/default';
</style>
