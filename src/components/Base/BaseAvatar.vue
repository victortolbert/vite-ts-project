<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export default class BaseAvatar extends Vue {
  @Prop(String) readonly src: string | undefined

  get imageSrc() {
    return this.src ? `${this.src}` : '/images/users/michael.jpg'
  }
}
</script>

<template>
  <img class="w-8 h-8 rounded-full h-avatar" :src="imageSrc" alt="">
</template>
