<template>
  <div id="outside-temp">
    <div class="flex items-center justify-between base-container">
      <div class="label-container">
        <h2 class="text-lg font-semibold">
          Outside Temperature (F)
        </h2>
      </div>
      <div class="flex items-center justify-between slot-container">
        <div class="flex items-center justify-between slot-row">
          <div id="slot1">
            <div class="numeric-container">
              <div
                class="grid items-center grid-cols-2 gap-1 flex-row-space-between-no-wrap"
              >
                <div class="text-2xl label-container">
                  <span>55</span>
                  <span>&deg;</span>
                </div>
                <div class="icon-enabled">
                  <i-carbon-calculator class="w-10 h-10" />
                </div>
              </div>
            </div>
          </div>
          <div id="slot2" />
        </div>
        <div class="slot-row">
          <div id="slot3" />
          <div id="slot4" />
        </div>
      </div>
    </div>
  </div>
</template>
