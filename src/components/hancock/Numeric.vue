<template>
  <div class="numericContainer">
    <div class="flexRowSpaceBetweenNoWrap">
      <div class="labelContainer">
        <span>{{ label }} {{ response }}</span>
      </div>
      <div class="iconEnabled" v-if="!showPad" v-on:click="Reset()">
        <i class="fas fa-2x fa-calculator"></i>
      </div>
      <div
        class="iconEnabled"
        v-if="showPad"
        v-on:click="showPad = false"
        @click="$emit('onchanged', response == null ? null : Number(response))"
      >
        <i class="fas fa-2x fa-check-square"></i>
      </div>
    </div>
    <div v-if="showPad" class="keyPadContainer">
      <div id="keyPadContainer">
        <div class="keyPadRow">
          <div class="keyPad keyEnabled" v-on:click="OnClick('1')">1</div>
          <div class="keyPad keyEnabled" v-on:click="OnClick('2')">2</div>
          <div class="keyPad keyEnabled" v-on:click="OnClick('3')">3</div>
        </div>
        <div class="keyPadRow">
          <div class="keyPad keyEnabled" v-on:click="OnClick('4')">4</div>
          <div class="keyPad keyEnabled" v-on:click="OnClick('5')">5</div>
          <div class="keyPad keyEnabled" v-on:click="OnClick('6')">6</div>
        </div>
        <div class="keyPadRow">
          <div class="keyPad keyEnabled" v-on:click="OnClick('7')">7</div>
          <div class="keyPad keyEnabled" v-on:click="OnClick('8')">8</div>
          <div class="keyPad keyEnabled" v-on:click="OnClick('9')">9</div>
        </div>
        <div class="keyPadRow">
          <div class="keyPad keyEnabled" @click="response = ''">CE</div>
          <div class="keyPad keyEnabled" v-on:click="OnClick('0')">0</div>
          <div v-if="decimal" class="keyPad keyEnabled" v-on:click="OnClick('.')">.</div>
          <div v-else class="keyPad keyDisabled">.</div>
        </div>
      </div>
    </div>
  </div>
</template>
