<script setup lang="ts">
import { version as piniaVersion } from 'pinia/package.json'
import { version as vueVersion } from 'vue/package.json'
import { appTitle } from '~/app.config'
// import AppHeaderCartCount from '~/components/app/AppHeaderCartCount.vue'

const isCollapsed = ref(true)

const handleToggle = (collapsed: boolean) => {
  isCollapsed.value = collapsed
}
</script>

<template>
  <app-layout id="app-layout" :class="['app-layout', isCollapsed ? 'collapsed' : '']">
    <!-- <template #header>
      <app-navbar class="fixed w-full">
        <template #actions>
          <app-header-cart-count></app-header-cart-count>
          <app-quick-search></app-quick-search>
          <app-navbar-search-input></app-navbar-search-input>
          <dark-toggle />
        </template>
      </app-navbar>
    </template>-->

    <router-view v-slot="{ Component, route }">
      <transition
        mode="out-in"
        :enter-active-class="route.meta.transition || 'animate__animated animate__fadeIn'"
        :leave-active-class="'animate__animated animate__fadeOut'"
      >
        <component :is="Component" :key="`${route.path}-${route.name}`" />
      </transition>
    </router-view>

    <app-sidebar
      v-model:collapsed="isCollapsed"
      @toggle="handleToggle"
      :title="appTitle"
      initial-state="collapsed"
    />

    <template #footer>Using Vue v{{ vueVersion }} and Pinia v{{ piniaVersion }}.</template>
  </app-layout>
</template>

