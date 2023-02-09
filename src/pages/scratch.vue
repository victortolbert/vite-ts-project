<script setup>
const someObject = reactive({
  foo: 'Foo',
  bar: 'Bar',
})
const choices = ref([
  'Front',
  'Back',
  'Left',
  'Right',

])
const label = 'Directionality North'
</script>

<template>
  <div>
    <div class="flex items-center justify-center h-screen p-4 bg-primary-700">
      <div class="flex-1 max-w-screen-lg p-4 rounded-lg shadow-xl bg-primary-600 sm:p-8">
        <!-- Video -->
        <div class="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/NX_NW6bt6_s"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>

    <app-header>Testing</app-header>

    <div class="hidden p-16">
      <img src="/assets/figures/itcss_layers.jpeg" class="object-cover rounded-lg shadow-lg" />
      <img src="/assets/figures/itcss.jpeg" class="object-cover rounded-lg shadow-lg" />
      <img src="/assets/figures/mvvm.jpeg" class="object-cover rounded-lg shadow-lg" />
      <img src="/assets/figures/props_events.jpeg" class="object-cover rounded-lg shadow-lg" />
      <img src="/assets/figures/state.jpeg" class="object-cover rounded-lg shadow-lg" />
      <img src="/assets/img/after.jpg" class="object-cover rounded-lg shadow-lg" />
      <img src="/assets/img/after.jpg" class="object-cover rounded-lg shadow-lg" />
    </div>

    <div class="grid grid-cols-3 gap-4 p-6 mt-4">
      <div class="relative h-0 pb-2/3 sm:pt-1/3 lg:pt-2/3">
        <div class="absolute inset-0 w-full h-full bg-red-500 rounded-lg shadow-lg"></div>
      </div>

      <div class="relative h-0 pb-2/3 sm:pt-1/3 lg:pt-2/3">
        <img
          src="/assets/img/before.jpg"
          class="absolute inset-0 object-cover w-full h-full bg-red-500 rounded-lg shadow-lg"
        />
      </div>
      <div class="relative h-0 pb-2/3 sm:pt-1/3 lg:pt-2/3">
        <img
          src="/assets/img/after.jpg"
          class="absolute inset-0 object-cover w-full h-full bg-red-500 rounded-lg shadow-lg"
        />
      </div>
    </div>

    <div class="grid grid-cols-4 gap-4 p-6 mt-4">
      <div class="aspect-w-3 aspect-h-2 sm:aspect-w-1 sm:aspect-h-1 lg:aspect-w-3 lg:aspect-h-4">
        <div class="bg-green-600 rounded-lg shadow-lg"></div>
      </div>

      <div class="aspect-w-3 aspect-h-2 sm:aspect-w-1 sm:aspect-h-1 lg:aspect-w-3 lg:aspect-h-4">
        <div class="rounded-lg shadow-lg bg-primary-500"></div>
      </div>

      <div class="aspect-w-3 aspect-h-2 sm:aspect-w-1 sm:aspect-h-1 lg:aspect-w-3 lg:aspect-h-4">
        <img src="/assets/img/before.jpg" class="object-cover rounded-lg shadow-lg" />
      </div>
      <div class="aspect-w-3 aspect-h-2 sm:aspect-w-1 sm:aspect-h-1 lg:aspect-w-3 lg:aspect-h-4">
        <img src="/assets/img/after.jpg" class="object-cover rounded-lg shadow-lg" />
      </div>
    </div>

    <!-- <customer-card /> -->

    <div class="p-6">
      <!-- Base Layout -->
      <div class="bg-white baseContainer">
        <div class="labelContainer">
          {{ label }}
          <span style="color: red">{ customValidator }</span>
          <span style="color: white; font-size: 2pt">{ baseValue }</span>
        </div>
        <div class="slotContainer">
          <div class="slotRow">
            <!-- CheckboxComponent -->
            <div id="slot1" class="flexRowStartWrap" style="width: 100%">
              <div class="choiceContainer">
                <input type="checkbox" class="eCheckbox boxLabel" />
                <span class="choiceText">Front</span>
              </div>
              <div class="choiceContainer">
                <input type="checkbox" class="eCheckbox boxLabel" />
                <span class="choiceText">Back</span>
              </div>
              <div class="choiceContainer">
                <input type="checkbox" class="eCheckbox boxLabel" />
                <span class="choiceText">Left</span>
              </div>
              <div class="choiceContainer">
                <input type="checkbox" class="eCheckbox boxLabel" checked />
                <span class="choiceText">Right</span>
              </div>
            </div>
            <div id="slot2" />
          </div>
          <div class="slotRow">
            <div id="slot3" />
            <div id="slot4" />
          </div>
        </div>
      </div>
      <!-- <props-table /> -->
      <!-- <overview-component /> -->
      <div v-if="false" class="grid max-w-sm grid-cols-5">
        <img src="/assets/svg/design-systems/component-library.svg" />
        <img src="/assets/svg/design-systems/component.svg" />
        <img src="/assets/svg/design-systems/design-system.svg" />
        <!-- <img src="/assets/svg/design-systems/design-systems-ds.svg" />
          <img src="/assets/svg/design-systems/design-systems-face.svg" />
        <img src="/assets/svg/design-systems/design-systems-shapes.svg" />-->
        <img src="/assets/svg/design-systems/governance.svg" />
        <img src="/assets/svg/design-systems/guidelines.svg" />
        <img src="/assets/svg/design-systems/pattern.svg" />
        <img src="/assets/svg/design-systems/pilot.svg" />
        <img src="/assets/svg/design-systems/reference-site.svg" />
        <img src="/assets/svg/design-systems/token.svg" />
        <img src="/assets/svg/design-systems/ui-kit.svg" />
      </div>
      <!-- <HancockFancyComponent v-model="someObject" /> -->
      <!--
      -->
      <features-grid v-if="false" />
    </div>
  </div>
</template>

<style lang="scss">
</style>
