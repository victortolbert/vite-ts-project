<script setup lang="ts">

import { useUserStore } from '~/stores/user'

const user = useUserStore()
const name = ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <page-wrapper>
    <article-wrapper>
      <h2>{{ user }}</h2>

      <ul>
        <li v-for="route in router.options.routes">
          <router-link :to="route.path">
            {{ route.path }}
          </router-link>
        </li>
      </ul>

      <router-view></router-view>
    </article-wrapper>
  </page-wrapper>
</template>
