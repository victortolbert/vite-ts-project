<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { orderBy } from '@progress/kendo-data-query'
import { SidebarMenu } from 'vue-sidebar-menu'
import { EventBus } from '@/event-bus'
import type { Theme } from '@/types'

// Menu Component
import { menu } from '@/app.config'
const collapsed = ref(true)
const isOnMobile = ref(false)
onMounted(() => {
  onResize()
  window.addEventListener('resize', onResize)
})
const onToggleCollapse = () => {
  collapsed.value = !collapsed.value
}
const onItemClick = (event: any, item: any, node: any) => {
  console.log('onItemClick')
  console.log('onItemClick', {
    event,
    item,
    node,
  })
}

const onResize = () => {
  if (window.innerWidth <= 767) {
    isOnMobile.value = true
    collapsed.value = true
  }
  else {
    isOnMobile.value = false
    collapsed.value = false
  }
}

const selectedTheme = ref('')
const themes: Theme[] = [
  {
    name: 'Default theme',
    input: '',
  },
  {
    name: 'White theme',
    input: 'white-theme',
  },
]
console.log({ themes })

const data = [
  { name: 'Pork', category: 'Food', subcategory: 'Meat' },
  { name: 'Pepper', category: 'Food', subcategory: 'Vegetables' },
  { name: 'Beef', category: 'Food', subcategory: 'Meat' },
]
const result = orderBy(data, [{ field: 'name', dir: 'asc' }])
console.log({ result })

const clickHandler = function (clickCount) {
  console.log(`The button has been clicked ${clickCount} times!`)
}

// EventBus.$once('clicked', clickHandler)
EventBus.$on('clicked', clickHandler)
// EventBus.$off('clicked', clickHandler)
</script>

<script lang="ts">
export default {
  metaInfo() {
    return {
      htmlAttrs: {
        lang: 'en',
      },
      title: '',

      titleTemplate: '%s | Prototype',

      meta: [
        { name: 'og:title', content: 'store.state.pageTitle' },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: window.location.href },
        { name: 'og:image', content: 'store.state.pageImage' },
        { name: 'og:description', content: 'store.state.pageDescription' },
        { name: 'og:locale', content: 'store.state.locale' },
        { name: 'author', content: window.location.href },
        { name: 'publisher', content: window.location.href },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: 'store.state.twitter' },
        { name: 'twitter:creator', content: 'store.state.twitter' },
        { name: 'twitter:title', content: 'store.state.pageTitle' },
        { name: 'twitter:description', content: 'store.state.pageDescription' },
        { name: 'twitter:image', content: 'store.state.pageImage' },
      ],

      link: [
        { rel: 'stylesheet', href: '/assets/css/debug.css' },
        { rel: 'favicon', href: 'favicon.ico' },
      ],
    }
  },
}
</script>

<template>
  <main id="app" class="w-full" :class="[{ collapsed, onmobile: isOnMobile }]">
    <SidebarMenu
      width="360px"
      width-collapsed="52px"
      :menu="menu"
      :collapsed="collapsed"
      :theme="selectedTheme"
      :show-child="true"
      :show-one-child="true"
      :relative="false"
      :rtl="false"
      :hide-toggle="true"
      :disable-hover="true"
      @toggle-collapse="onToggleCollapse"
      @item-click="onItemClick"
    />
    <div v-if="isOnMobile && !collapsed" class="sidebar-overlay" @click="collapsed = true" />
    <portal-target class="z-10" name="overlays" />
  </main>
</template>

<style lang="scss">
$primary-color: #4285f4;
$base-bg: #1d2d43;

$item-color: #fff;

$item-active-color: null;
$item-active-bg: null;

$item-open-color: #fff;
$item-open-bg: $primary-color;

$item-hover-color: null;
$item-hover-bg: rgba(darken($base-bg, 5%), 0.5);

$icon-color: null;
$icon-bg: darken( $base-bg, 5% );

$icon-active-color: null;
$icon-active-bg: null;

$icon-open-color: null;
$icon-open-bg: $item-open-bg;

$mobile-item-color: #fff;
$mobile-item-bg: $primary-color;
$mobile-icon-color: $mobile-item-color;
$mobile-icon-bg: $mobile-item-bg;

$dropdown-bg: lighten( $base-bg, 5% );
$dropdown-color: null;

$item-font-size: 16px;
$item-line-height: 30px;
$item-padding: 10px;
$icon-height: 30px;
$icon-width: 30px;

/* white-theme
$base-bg: #fff;
$item-color: #262626;
$icon-bg: #bbc5d6;
$icon-active-color: #fff;
$icon-active-bg: $item-color;
$item-hover-bg: rgba(darken($base-bg, 5%), 0.5);
$dropdown-bg: #e3e3e3;
*/

@import "vue-sidebar-menu/src/scss/vue-sidebar-menu.scss";

#app {
  --oruga-variant-primary: theme(colors.primary.500);
  --oruga-variant-info: theme(colors.info);
  --oruga-variant-success: theme(colors.success);
  --oruga-variant-warning: theme(colors.warning);
  --oruga-variant-danger: theme(colors.danger);
}

#app {
  padding-left: 360px;
  transition: 0.3s ease;
}

#app.collapsed {
  padding-left: 52px;
}

#app.onmobile {
  padding-left: 52px;
}

.sidebar-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 900;
}

// Modal
.modal {
  @apply fixed bottom-0 inset-x-0 px-4 pb-6;
}

.modal-panel {
  @apply bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all;
}

@screen sm {
  .modal {
    @apply inset-0 p-0 flex items-center justify-center;
  }

  .modal-panel {
    @apply max-w-3xl w-full p-6;
  }
}
</style>
