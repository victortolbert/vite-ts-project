<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import OutBuilding from './OutBuilding.vue'
import { Log } from '../decorators'

@Component({
  components: {
    OutBuilding
  }
})
export default class OutBuildings extends Vue {
  // `message` will be reactive with `null` value
  message = null
  firstName = 'John'
  lastName = 'Doe'
  outBuildings = []

  created() {
    fetch('/outBuildings.json')
      .then(res => res.json())
      .then(outBuildings => {
        this.outBuildings = outBuildings
      })
}

  // Declare mounted lifecycle hook
  mounted() {
    console.log('mounted')
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
    return this.firstName + ' ' + this.lastName
  }

  // Declared as computed property setter
  set name(value) {
    const splitted = value.split(' ')
    this.firstName = splitted[0]
    this.lastName = splitted[1] || ''
  }

  // Declared as component method
  @Log
  hello(arg) {
    console.log('Hello World!', arg)
  }

  // Declare render function
  // render() {
  //   return <div>Hello World!</div>
  // }
}
</script>

<template>
  <div>
    <OutBuilding v-for="n in 6" :key="n"/>
    <input v-model="name">
    {{ outBuildings }}
    <button @click="hello('param')">Hello Button</button>
  </div>
</template>
