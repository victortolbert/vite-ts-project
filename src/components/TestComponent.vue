<script lang="ts">
import { Vue, PropSync } from 'vue-property-decorator'

export default class TestComponent extends Vue {
  @PropSync('name', { type: String }) syncedName!: string
}
</script>

<template>
  <b>Testing {{ name }}</b>
</template>
