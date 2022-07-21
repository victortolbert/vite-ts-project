<script setup>
import { onMounted, ref } from 'vue'
import { SidebarMenu } from 'vue-sidebar-menu'
import { orderBy } from '@progress/kendo-data-query'
import InfoNavbar from './components/InfoNavbar.vue'
import TheNavbar from './components/TheNavbar.vue'
import PropertyInspectionView from '@/components/PropertyInspectionView.vue'
import MenuDivider from '@/components/MenuDivider.vue'

const data = [
  { name: 'Pork', category: 'Food', subcategory: 'Meat' },
  { name: 'Pepper', category: 'Food', subcategory: 'Vegetables' },
  { name: 'Beef', category: 'Food', subcategory: 'Meat' },
]

const result = orderBy(data, [{ field: 'name', dir: 'asc' }])

console.log(result)

/* output
[
  { "name": "Beef", "category": "Food", "subcategory": "Meat" },
  { "name": "Pepper", "category": "Food", "subcategory": "Vegetables" },
  { "name": "Pork", "category": "Food", "subcategory": "Meat" }
]
*/
// #1e3050 dark:section-bg
// #071b3e dark:section-container-bg
// #f0f1f3 dark:section-text-color
// #61697b dark:section-subtitle-color

const menu = ref([
  // item
  {
    header: true,
    title: 'UI Patterns and Component Factory',
    hiddenOnCollapse: true,
    // hidden: false
    // class: ''
    // attributes: {}
  },
  {
    component: MenuDivider,
  },
  {
    href: '/',
    /* with vue-router you can use :to prop
    href: { path: '/' }
    you can mark link as external
    // external: true
    */

    title: 'Property Inspection',

    // icon class
    // icon: 'fa fa-user',
    // or custom icon
    icon: {
      element: 'i',
      class: 'fa fa-user',
      attributes: {},
      text: '',
    },
    badge: {
      text: 'new',
      class: 'vsm--badge_default',
      // attributes: {}
      // element: 'span'
    },
    // child: []
    // disabled: true
    // class: ''
    // attributes: {}
    // exactPath: true // match path only (ignore query and hash)
    // alias: '/path' // or array of paths (for advanced matching patterns see: https://github.com/pillarjs/path-to-regexp/tree/v1.7.0#parameters)
    // hidden: false
    // hiddenOnCollapse: true
  },
  {
    component: MenuDivider,
  },
  {
    href: '/disabled',
    title: 'Disabled page',
    icon: 'fa fa-lock',
    disabled: true,
    hidden: true,
  },
  // component item
  {
    // component: componentName
    // props: componentProps
    // hidden: false
    // hiddenOnCollapse: true
  },
])
const collapsed = ref(true)
const isOnMobile = ref(false)
const selectedTheme = ref('')
const themes = ref ([
  {
    name: 'Default theme',
    input: '',
  },
  {
    name: 'White theme',
    input: 'white-theme',
  },
])

const onToggleCollapse = () => {
  collapsed.value = !collapsed.value
}

const onItemClick = (event, item, node) => {
  console.log('onItemClick')
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

onMounted(() => {
  onResize()
  window.addEventListener('resize', onResize)
})
</script>

<template>
  <main
    id="demo"
    class="w-full"
    :class="[{
      collapsed,
      onmobile: isOnMobile,
    }]"
  >
    <InfoNavbar />
    <TheNavbar />
    <PropertyInspectionView class="px-8" />
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
    >
      <template #header>
        header
      </template>
      <template #footer>
        footer
      </template>
      <template #toggle-icon>
        toggle-icon
      </template>
      <template #dropdown-icon>
        dropdown-icon
      </template>
    </SidebarMenu>
    <div
      v-if="isOnMobile && !collapsed"
      class="sidebar-overlay"
      @click="collapsed = true"
    />
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
#demo {
  padding-left: 360px;
  transition: 0.3s ease;
}
#demo.collapsed {
  padding-left: 52px;
}
#demo.onmobile {
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
</style>
