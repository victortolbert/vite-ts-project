<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class OutBuildingComponent extends Vue {
  hello = 'Hello'
  world = 'World'

  created() {
    // eslint-disable-next-line no-console
    console.log(`${this.hello} ${this.world}!`) // -> Hello World!
  }
}
</script>

<template>
  <div>
    Out Building
  </div>
</template>
