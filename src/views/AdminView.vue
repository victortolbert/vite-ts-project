<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { orderBy } from '@progress/kendo-data-query'
import { SidebarMenu } from 'vue-sidebar-menu'
import { EventBus } from '@/event-bus'
import type { Theme } from '@/types'

// Menu Component
import { menu } from '@/app.config'
import TheHeader from '@/components/TheHeader.vue'
import TheNavbar from '@/components/TheNavbar.vue'
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
    <TheNavbar />
    <!-- <TheHeader /> -->
    <section class="px-8 mt-8">
      <div class="border-4 border-dashed rounded-lg border-primary-200 h-96" />
    </section>

    <div v-if="isOnMobile && !collapsed" class="sidebar-overlay" @click="collapsed = true" />
    <portal-target class="z-10" name="overlays" />
  </main>
</template>

<style lang="scss">
// _variables.scss
// ######################################################################################################
$app-header-height:           4rem;    // 64px
$app-sidebar-width:           16.5rem; // 264px
$app-sidebar-width-collapsed: 3rem;    // 48px
$spacing-unit:                0.25rem; // 4px

// Bootstrap Options
$spacer: $spacing-unit * 4;
$enable-rounded: true;
$enable-caret: false;
$enable-grid-classes: false;
$enable-transitions: false;
$enable-print-styles: false;
$enable-shadows: false;
$enable-gradients: true;
$enable-validation-icons: false;

// Grid
$grid-breakpoints: (
  xs: 0,
  sm: 640px,
  md: 768px,
  lg: 1024px,
  xl: 1280px,
  2xl: 1536px,
);

/*
 * Color
 * Used by Bootstrap Grid system
 */
$color-torea-bay:  #002894;      // Brand
$color-san-juan:   #314b6f;      // Primary
$color-tango:      #ee7d1e;      // Accent

$color-white: #fff;
$color-blue: $color-san-juan;
$color-orange: $color-tango;

// Grays
$blue-gray: #64748B;
$cool-gray: #6B7280;
$gray: #71717A;
$true-gray: #737373;
$warm-gray: #78716C;

$red:     #EF4444;
$orange:  #F97316;
$amber:   #F59E0B;
$yellow:  #EAB308;
$lime:    #84CC16;
$green:   #22C55E;
$emerald: #10B981;
$teal:    #14B8A6;
$cyan:    #06B6D4;
$sky:     #0EA5E9;
$blue:    #3B82F6;
$indigo:  #6366F1;
$violet:  #8B5CF6;
$purple:  #A855F7;
$fushia:  #D946EF;
$pink:    #EC4899;
$rose:    #F43F5E;

// $color-blue-100: #eaedf1;
// $color-blue-600: blue;
// $color-blue-700: #253853;

$color-gray-50: #f9fafb;
$color-gray-100: #f3f4f6;
$color-gray-300: #d1d5db;
$color-gray-500: #6b7280;
$color-gray-600: #4b5563;
$color-gray-800: #1f2937;
$color-red-400: #f43f5e;
$color-red-500: #fb7185;
$color-green-500: #10b981;

// Derived colors
$color-primary:   $color-san-juan;
$color-primary-50: #f5f6f8;
$color-primary-100: #eaedf1;
$color-primary-200: #ccd2db;
$color-primary-300: #adb7c5;
$color-primary-400: #6f819a;
$color-primary-500: $color-san-juan;
$color-primary-600: #2c4464;
$color-primary-700: #253853;
$color-primary-800: #1d2d43;
$color-primary-900: #182536;

$color-secondary: $color-tango;
$color-secondary-50: #fef9f4;
$color-secondary-100: #fdf2e9;
$color-secondary-200: #fbdfc7;
$color-secondary-300: #f8cba5;
$color-secondary-400: #f3a462;
$color-secondary-500: $color-tango;
$color-secondary-600: #d6711b;
$color-secondary-700: #b35e17;
$color-secondary-800: #8f4b12;
$color-secondary-900: #753d0f;

$color-brand: $color-torea-bay;
$color-brand-50: #f2f4fa;
$color-brand-100: #e6eaf4;
$color-brand-200: #bfc9e4;
$color-brand-300: #99a9d4;
$color-brand-400: #4d69b4;
$color-brand-500: $color-torea-bay;
$color-brand-600: #002485;
$color-brand-700: #001e6f;
$color-brand-800: #001859;
$color-brand-900: #001449;

$gray-100: #f8f9fa;

// ### Bootstrap Color variable overrides
$theme-colors: (
  'primary': #314b6f,
  'secondary': #eaedf1,
  'brand': #002894,
  'accent': #ee7d1e,
  'success': #15803d,
  'info': #bfdbfe,
  'warning': #fcd34d,
  'danger': #dc2626,
  'light': $gray-100,
  'dark': #001738,
);

// Font Family
$font-family-sans-serif: Inter, sans-serif;
$font-family-monospace: 'Cascadia Code', monospace;
$font-family-base: $font-family-sans-serif;

// Font Size
$line-height-base: 1.5;
$font-size-base: 1rem;      // Assumes the browser default, typically `16px`
$font-size-2xs: 0.625rem;   // 10px
$font-size-xs: 0.75rem;     // 12px
$font-size-sm: 0.875rem;    // 14px $font-size-base * 0.875;
$font-size-base: 1rem;      // 16px
$font-size-lg: 1.125rem;    // 18px $font-size-base * 1.25;
$font-size-xl: 1.5rem;      //
$font-size-2xl: 1.5rem;     //
$font-size-3xl: 1.5rem;     //
$font-size-4xl: 1.5rem;     //
$font-size-5xl: 1.5rem;     //

// TODO: Define as Map
// text-xs   font-size: 0.75rem;  line-height: 1rem;
// text-sm   font-size: 0.875rem; line-height: 1.25rem;
// text-base font-size: 1rem;     line-height: 1.5rem;
// text-lg   font-size: 1.125rem; line-height: 1.75rem;
// text-xl   font-size: 1.25rem;  line-height: 1.75rem;
// text-2xl  font-size: 1.5rem;   line-height: 2rem;
// text-3xl  font-size: 1.875rem; line-height: 2.25rem;
// text-4xl  font-size: 2.25rem;  line-height: 2.5rem;
// text-5xl  font-size: 3rem;     line-height: 1;
// text-6xl  font-size: 3.75rem;  line-height: 1;
// text-7xl  font-size: 4.5rem;   line-height: 1;
// text-8xl  font-size: 6rem;     line-height: 1;
// text-9xl  font-size: 8rem;     line-height: 1;

// Font Weight
$font-thin: 100;
$font-extralight: 200;
$font-light: 300;
$font-normal: 400;
$font-medium: 500;
$font-semibold: 600;
$font-bold: 700;
$font-extrabold: 800;
$font-black: 900;

// Bootstrap Font Weights
$font-weight-lighter: $font-extralight;
$font-weight-light: $font-light;
$font-weight-normal: $font-normal;
$font-weight-bold: $font-bold;
$font-weight-bolder: $font-extrabold;
$font-weight-base: $font-weight-normal;
/////////////////////////////////////

// Bootstrap Heading Font Sizes
$h1-font-size: $font-size-base * 2.5;
$h2-font-size: $font-size-base * 2;
$h3-font-size: $font-size-base * 1.75;
$h4-font-size: $font-size-base * 1.5;
$h5-font-size: $font-size-base * 1.25;
$h6-font-size: $font-size-base;

$headings-margin-bottom: $spacer * 0.5;
$headings-font-family: null;
$headings-font-weight: 500;
$headings-line-height: 1.2;
$headings-color: null;
////////////////////////////////////

// Bootstrap Buttons
$btn-padding-y: 0.25rem;
$btn-padding-x: 2rem;

// ######################################################################################################
$primary-color: #4285f4;
$base-bg: $color-primary-600;
// $base-bg: #1d2d43;

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
