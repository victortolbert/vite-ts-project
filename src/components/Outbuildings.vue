<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import OutBuilding from "./OutBuilding.vue";
import { Log } from "../decorators";

@Component({
  components: {
    OutBuilding,
  },
})
export default class OutBuildings extends Vue {
  @Prop({ default: {} }) readonly outBuilding!: object
  // `message` will be reactive with `null` value
  message = null;
  firstName = "John";
  lastName = "Doe";
  outBuildings = [];

  created() {
    fetch("/outBuildings.json")
      .then((res) => res.json())
      .then((outBuildings) => {
        this.outBuildings = outBuildings;
      });
  }

  // Declare mounted lifecycle hook
  mounted() {
    console.log("mounted");
  }

  // // See Hooks section for details about `data` hook inside class.
  // data() {
  //   return {
  //     // `hello` will be reactive as it is declared via `data` hook.
  //     hello: undefined
  //   }
  // }

  // Declared as computed property getter
  get name() {
    return this.firstName + " " + this.lastName;
  }

  // Declared as computed property setter
  set name(value) {
    const splitted = value.split(" ");
    this.firstName = splitted[0];
    this.lastName = splitted[1] || "";
  }

  // Declared as component method
  @Log
  hello(arg) {
    console.log("Hello World!", arg);
  }

  // Declare render function
  // render() {
  //   return <div>Hello World!</div>
  // }
}
</script>

<template>
  <div>
    <input
      id="quantity"
      type="number"
      name="quantity"
      min="1"
      max="6"
      value="1"
      class="border border-black"
    />

    <div id="OutBuildingDmg" style="width: 100%">
      <div class="baseContainer">
        <div class="labelContainer">
          Out Building Damage?
          <span style="color: red" />
          <span style="color: white; font-size: 2pt"> true</span>
        </div>
        <div class="slotContainer">
          <div class="slotRow">
            <div id="slot1">
              <div class="cbContainer">
                <div class="eCheckbox boxLabel answered" />
                <span class="choiceText"> Yes </span>
                &nbsp;&nbsp;
                <div class="eCheckbox boxLabel" />
                <span class="choiceText"> No </span>
              </div>
            </div>
            <div id="slot2">
              <div style="width: 100%">
                <div class="flexRowSpaceBetweenNoWrap test">
                  <div class="icon-container">
                    <div
                      class="k-widget k-upload k-upload-async k-upload-empty"
                    >
                      <div class="k-dropzone">
                        <div class="k-button k-upload-button">
                          <input
                            id="file"
                            type="file"
                            name="file"
                            data-role="upload"
                            aria-label=""
                            multiple="multiple"
                            autocomplete="off"
                          /><span />
                        </div>
                        <em class="k-dropzone-hint"
                          >Drop files here to upload</em
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="slotRow">
            <div id="slot3" />
            <div id="slot4" />
          </div>
        </div>
      </div>
    </div>
    <OutBuilding v-for="n in 6" :key="n" />
    <input v-model="name" />
    {{ outBuildings }}
    <button @click="hello('param')">Hello Button</button>
  </div>
</template>
