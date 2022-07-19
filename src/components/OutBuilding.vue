<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export class HelloWorld extends Vue {
  hello = 'Hello'
  world = 'World'

  created () {
    console.log(this.hello + ' ' + this.world + '!') // -> Hello World!
  }
}
</script>

<template>
  <div>
    Out Building
  </div>
</template>
