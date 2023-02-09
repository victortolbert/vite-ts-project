<template>
  <div class="flexRowStartNoWrap" style="width:100%">
    <div class="choiceContainer">
      <div>
        <input
          v-if="!textArea && !disabled"
          @keyup="KeyPressEvent"
          v-bind:maxlength="maxCharacters"
          :value="response"
          class="form-control formValue tb tbAlpha"
        />
        <input
          v-if="!textArea && disabled"
          disabled
          v-bind:maxlength="maxCharacters"
          :value="response"
          class="form-control formValue tb tbAlpha"
        />
        <textarea
          v-if="textArea && !disabled"
          rows="2"
          @keyup="KeyPressEvent"
          v-bind:maxlength="maxCharacters"
          cols="450"
          :value="response"
          class="form-control formValue tb tbArea"
        ></textarea>
        <textarea
          v-if="textArea && disabled"
          rows="2"
          v-bind:maxlength="maxCharacters"
          disabled
          cols="450"
          :value="response"
          class="form-control formValue tb tbArea"
        ></textarea>
        <div style="font-size:x-small; padding-top:2px;">
          Remaining Characters:
          <b>{{ maxCharacters - charsEntered }}</b>
        </div>
      </div>
    </div>
  </div>
</template>
