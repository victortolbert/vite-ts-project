<script lang="ts">
import { Vue, PropSync, Component } from 'vue-property-decorator'

@Component({})
export default class TestComponent extends Vue {
  @PropSync('name', { type: String }) syncedName!: string
}
</script>

<template>
  <div>Testing {{ syncedName }}</div>
</template>
