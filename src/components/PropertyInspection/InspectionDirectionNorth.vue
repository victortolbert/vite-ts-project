<template>
  <div id="direction-north">
    <div class="base-container">
      <div class="label-container">
        <h2 class="text-lg font-semibold">
          Directionality North
        </h2>
        <span style="color: red" />
        <span style="color: white; font-size: 2pt">Front</span>
      </div>
      <div class="slot-container">
        <div class="slot-row">
          <div id="slot1">
            <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-4 flex-row-start-wrap">
              <div class="choice-container">
                <div class="e-checkbox box-label answered" />
                <span class="choice-text">Front</span>
              </div>
              <div class="choice-container">
                <div class="e-checkbox" />
                <span class="choice-text">Back</span>
              </div>
              <div class="choice-container">
                <div class="e-checkbox" />
                <span class="choice-text">Left</span>
              </div>
              <div class="choice-container">
                <div class="e-checkbox" />
                <span class="choice-text">Right</span>
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
