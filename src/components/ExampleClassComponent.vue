<script lang="ts">
import { Component, PropSync, Vue } from 'vue-property-decorator'

@Component({})
export default class TestComponent extends Vue {
  @PropSync('name', { type: String }) syncedName!: string
}
</script>

<template>
  <div>Testing {{ syncedName }}</div>
</template>
