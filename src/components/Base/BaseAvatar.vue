<script>
import victor from '/assets/img/users/victor.jpg'

export default {
  name: 'BaseAvatar',
  props: {
    src: {
      type: String,
      default: ''
    },
  },
  computed: {
    imageSrc() {
      return this.src ? `${this.src}` : victor
    }
  }
}
</script>

<template>
  <img class="flex-shrink-0 w-10 h-10 rounded-full" :src="imageSrc" alt="avatar" />
</template>
