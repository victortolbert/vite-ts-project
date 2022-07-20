<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class BaseBox extends Vue {}
</script>

<template>
  <section class="p-6 bg-white rounded shadow">
    <slot />
  </section>
</template>
