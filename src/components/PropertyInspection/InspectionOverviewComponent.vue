<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  metaInfo: {
    title: 'Property Overview',
  },
})
</script>

<template>
  <article id="property-overview" class="px-8 mt-8">
    <section>
      <img
        class="w-full border rounded-lg shadow-lg aspect-video"
        src="/assets/img/home.jpg"
        alt="property"
      >
      <h1 class="mt-8 text-2xl font-bold text-primary-500">
        Property Overview
      </h1>

      <div id="roof">
        <h2 class="mt-4 text-lg font-semibold">
          Roof
        </h2>
        <p class="mt-2">
          The structure accessed was a
          <span class="font-bold">two story single family dwelling</span>
          with a
          <span class="font-bold">thirty year laminated shingle</span>
          on a predominately
          <span class="font-bold">Pitch</span>
          .
        </p>
        <p class="mt-2">
          (Then either)
        </p>
        <p class="mt-2">
          Damages to the following components were observed:
        </p>
        <p class="mt-2">
          (OR)
        </p>
        <p class="mt-2">
          There were no damages observed
        </p>
      </div>
      <div id="elevation">
        <h2 class="mt-4 text-lg font-semibold">
          Elevation
        </h2>
        <p class="mt-2">
          A walk around inspection of all elevations was completed revealing the presence
          of hardy plank siding, 5 inch downspouts,
        </p>
        <p class="mt-2">
          (Then either)
        </p>
        <p class="mt-2">
          Damages to the following components were observed:
        </p>
        <p class="mt-2">
          (OR)
        </p>
        <p>There were no damages observed</p>
      </div>
      <div id="interior">
        <h2 class="mt-4 text-lg font-semibold">
          Interior
        </h2>
        <p class="mt-2">
          An interior inspection was completed and the following areas were documented
          with possible damage:
        </p>
        <p class="mt-2">
          (Then either)
        </p>
        <p class="mt-2">
          Damages to the following components were observed:
        </p>
        <p class="mt-2">
          (OR)
        </p>
        <p class="mt-2">
          There were no damages observed
        </p>
      </div>
      <div id="other-structures">
        <h2 class="mt-4 text-lg font-semibold">
          Other Structures
        </h2>
        <p class="mt-2">
          Other Structures inspected included (FILL from PIF descriptors).
        </p>
        <p class="mt-2">
          (Then either)
        </p>
        <p class="mt-2">
          Damages were found to: (Fill from PIF)
        </p>
        <p class="mt-2">
          (OR)
        </p>
        <p class="mt-2">
          There were no damages observed
        </p>
      </div>
      <div id="video-link">
        <h2 class="mt-4 text-lg font-semibold">
          Video Link
        </h2>
      </div>
    </section>
  </article>
</template>
