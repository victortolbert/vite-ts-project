<script setup>
import { onMounted, ref } from 'vue'
import { SidebarMenu } from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import OutBuildingsComponent from './components/OutBuildings/OutBuildingsComponent.vue'

const menu = ref([
  {
    header: true,
    title: 'Main Navigation',
    hiddenOnCollapse: true,
  },
  {
    href: '/',
    title: 'Property Inspection Form',
    icon: 'fa fa-user',
  },
])
const collapsed = ref(false)
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
  <main id="demo" class="w-full" :class="[{ collapsed }, { onmobile: isOnMobile }]">
    <SidebarMenu
      width="360px"
      width-collapsed="50px"
      :menu="menu"
      :collapsed="collapsed"
      :theme="selectedTheme"
      :show-one-child="true"
      @toggle-collapse="onToggleCollapse"
      @item-click="onItemClick"
    />
    <OutBuildingsComponent />
  </main>
</template>

<style lang="scss">
#demo {
  padding-left: 360px;
  transition: 0.3s ease;
}
#demo.collapsed {
  padding-left: 50px;
}
#demo.onmobile {
  padding-left: 50px;
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
.demo {
  padding: 50px;
}
</style>
