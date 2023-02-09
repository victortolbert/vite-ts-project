<template>
  <page-wrapper>
    <page-header>
      <h1>Regions</h1>
    </page-header>

    <article-section>
      <router-view v-slot="{ Component, route }">
        <transition
          mode="out-in"
          :enter-active-class="route.meta.transition || 'animate__animated animate__fadeIn'"
          :leave-active-class="'animate__animated animate__fadeOut'"
        >
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </article-section>
  </page-wrapper>
</template>
