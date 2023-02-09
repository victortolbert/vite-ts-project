<script setup>
import { title, description } from '~/app.config'

useHead({
  title,
  meta: [
    { name: 'description', content: description },
  ],
})

const dummyUser = reactive({
  FirstName: 'Victor',
  LastName: 'Tolbert',
})
</script>

<template>
  <router-view :user="dummyUser" v-slot="{ Component, route }">
    <component :is="Component" :key="route.path" />
  </router-view>
</template>

<style lang="scss">
@import "~/assets/sass/components/debug-grid";
:root {
  --color-blue-500: #00f;
}
.k-grid th {
  font-weight: bold;
}

html {
  scroll-behavior: smooth;
}

// focus  shadow outline
// active background
// hover

// .h-button {
//   display: inline-flex;
//   appearance: none;
//   align-items: center;
//   justify-content: center;
//   transition: all 250ms ease 0s;
//   user-select: none;
//   position: relative;
//   white-space: nowrap;
//   vertical-align: middle;
//   outline: none;
//   width: auto;
//   line-height: 1.2;
//   border-radius: var(--radii-md);
//   font-weight: var(--fontWeights-semibold);
//   height: var(--sizes-10);
//   min-width: var(--sizes-10);
//   font-size: var(--fontSizes-md);
//   padding-inline-start: var(--space-4);
//   padding-inline-end: var(--space-4);
//   background: var(--colors-blue-500);
//   color: var(--colors-white);
//   margin-right: var(--space-3);
// }

/* Query based dark mode */
@media (prefers-color-scheme: dark) {
  .shiki-light {
    display: none;
  }
}

@media (prefers-color-scheme: light), (prefers-color-scheme: no-preference) {
  .shiki-dark {
    display: none;
  }
}

/* Class based dark mode */
html.dark .shiki-light {
  display: none;
}

html:not(.dark) .shiki-dark {
  display: none;
}

/*** TRANSITIONS ***/
.fade-enter {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
.slide-up-enter {
  transform: translateY(10px);
  opacity: 0;
}
.slide-up-enter-active {
  transition: all 0.2s ease;
}
.slide-up-move {
  transition: transform 0.8s ease-in;
}

.rotate-slow {
  animation: rotate 10s linear infinite;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: rotate;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes animateOpen {
  from {
    width: 0;
    opacity: 0;
  }

  to {
    width: 100%;
    opacity: 1;
  }
}

@keyframes unmask {
  from {
    width: 110%;
  }

  to {
    width: 0;
  }
}

@keyframes highlighter {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

@counter-style fisheye {
  system: cyclic;
  symbols: ◉;
  suffix: " ";
}
@counter-style space-counter {
  symbols: "\1F680""\1F6F8""\1F6F0""\1F52D";
  suffix: " ";
}

@counter-style thumbs-up {
  symbols: "\1F44D";
  suffix: " ";
}
@counter-style globe {
  symbols: "\1F30E";
  suffix: " ";
}
@counter-style check {
  symbols: "\1F5F9";
  suffix: " ";
}
@counter-style heart {
  symbols: "\2714";
  suffix: " ";
}
@counter-style lemon {
  symbols: "\1F34B";
  suffix: " ";
}
</style>
