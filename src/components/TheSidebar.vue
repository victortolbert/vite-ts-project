<script setup>
import { onMounted, ref } from 'vue'
import { SidebarMenu } from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

const menu = ref([
  {
    header: true,
    title: 'UI Patterns',
    hiddenOnCollapse: true,
  },
  {
    href: '/',
    title: 'Property Inspection Form',
    icon: 'fa fa-user',
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
  // onResize()
  // window.addEventListener('resize', onResize)
})
</script>

<template>
  <div>
    <SidebarMenu
      width="360px"
      width-collapsed="52px"
      :menu="menu"
      :collapsed="collapsed"
      :theme="selectedTheme"
      :show-one-child="true"
      disable-hover="true"
      @toggle-collapse="onToggleCollapse"
      @item-click="onItemClick"
    />
    <div
      v-show="isOnMobile && !collapsed"
      class="sidebar-overlay"
      @click="collapsed = true"
    />
  </div>
</template>

<style>
/* .v-sidebar-menu {}
.v-sidebar-menu.vsm_expanded {}
.v-sidebar-menu.vsm_collapsed {}
.v-sidebar-menu.vsm_rtl {}
.v-sidebar-menu .vsm--item {}
.v-sidebar-menu .vsm--item.vsm--item_open {}
.v-sidebar-menu .vsm--link {}
.v-sidebar-menu .vsm--link.vsm--link_active {}
.v-sidebar-menu .vsm--link.vsm--link_exact-active {}
.v-sidebar-menu .vsm--link.vsm--link_mobile-item {}
.v-sidebar-menu .vsm--link.vsm--link_level-[n] {}
.v-sidebar-menu .vsm--link.vsm--link_disabled {}
.v-sidebar-menu .vsm--title {}
.v-sidebar-menu .vsm--icon {}
.v-sidebar-menu .vsm--arrow {}
.v-sidebar-menu .vsm--arrow.vsm--arrow_open {}
.v-sidebar-menu .vsm--badge {}
.v-sidebar-menu .vsm--header {}
.v-sidebar-menu .vsm--list {}
.v-sidebar-menu .vsm--dropdown>.vsm--list {}
.v-sidebar-menu .vsm--mobile-item {}
.v-sidebar-menu .vsm--mobile-bg {}
.v-sidebar-menu .vsm--toggle-btn {} */
</style>
