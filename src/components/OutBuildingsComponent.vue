<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Log } from '../decorators'
import OutBuildingList from './OutBuildingList.vue'

@Component({
  components: {
    OutBuildingList,
  },
})
export default class OutBuildingsComponent extends Vue {
  @Prop({ default: {} }) readonly outBuilding!: object
  // `message` will be reactive with `null` value
  message = null
  firstName = 'John'
  lastName = 'Doe'
  outBuildings = [] as any[]

  created() {
    fetch('/outBuildings.json')
      .then(res => res.json())
      .then((outBuildings) => {
        this.outBuildings = outBuildings
      })
  }

  // Declare mounted lifecycle hook
  mounted() {
    // eslint-disable-next-line no-console
    console.log('mounted')
  }

  // // See Hooks section for details about `data` hook inside class.
  // data() {
  //   return {
  //     // `hello` will be reactive as it is declared via `data` hook.
  //     hello: undefined
  //   }
  // }

  get filters() {
    return {
      isNotDamaged: this.outBuildings.filter(outBuilding => !outBuilding.isDamaged),
      isDamaged: this.outBuildings.filter(outBuilding => outBuilding.isDamaged),
    }
  }

  // Declared as computed property getter
  get name() {
    return `${this.firstName} ${this.lastName}`
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
    // eslint-disable-next-line no-console
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
    <section class="space-y-6">
      <out-building-list :out-buildings="filters.isDamaged" title="Damaged" />
      <out-building-list :out-buildings="filters.isNotDamaged" title="Is Not Damaged" />
    </section>
  </div>
</template>
