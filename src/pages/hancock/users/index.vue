<script setup>
</script>

<template>
  <page-wrapper>
    <page-header>
      <nav>
        Users
      </nav>
    </page-header>

    <article-section>

      <ul class="list-inside list-square" v-if="isFinished">
        <li><router-link :to="{ name: 'users-id', params: { id: 1 } }"> User 1 </router-link></li>
        <li><router-link :to="{ name: 'users-id', params: { id: 2 } }"> User 2 </router-link></li>
      </ul>

      <router-view  v-slot="{ Component, route }">
        <transition
          mode="out-in"
          :enter-active-class="route.meta.transition || 'animate__animated animate__fadeIn'"
          :leave-active-class="'animate__animated animate__fadeOut'"
        >
        <keep-alive>
          <component :is="Component" :key="route.path" />
        </keep-alive>
        </transition>
      </router-view>
    </article-section>
  </page-wrapper>
</template>
