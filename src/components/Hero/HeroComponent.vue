<script setup>
import { useSound } from '@vueuse/sound'
import {
  debounceFilter,
  throttleFilter,
  useBrowserLocation,
  useLocalStorage,
  useMouse,
  usePreferredDark,
} from '@vueuse/core'

import Button from '@/assets/sound/fanfare.mp3'

const location = useBrowserLocation()

// tracks mouse position
const { x, y } = useMouse({ eventFilter: debounceFilter(100) })

const { play, stop } = useSound(Button)

// is user prefers dark theme
const isDark = usePreferredDark()

// persist state in localStorage
const store = useLocalStorage('my-storage', {
  name: 'Apple',
  color: 'red',
})

// changes will write to localStorage with a throttled 1s
const storage = useLocalStorage(
  'my-key',
  { foo: 'bar' },
  { eventFilter: throttleFilter(1000) },
)
</script>

<template>
  <!--     -->
  <header
    class="h-32 p-8 bg-fixed border-t-2 border-accent-500 bg-primary-700"
    style="
      background-image: url('/assets/img/backgrounds/grid_dot_16.svg');
      background-position: 0 -2px;
    "
  >
    <div class="">
      <!-- page title and page actions container -->
      <div class="mt-2 md:flex md:items-center md:justify-between">
        <!-- page title container -->
        <div class="flex-1 min-w-0">
          <!-- Page Title -->
          <h2 class="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate">
            <!-- Gradient Text Effect -->
            <!--
                <span
                  class="text-transparent bg-gradient-to-r bg-clip-text from-purple-400 to-primary-500"
                >
            -->
            <span class="text-white bg-opacity-50 bg-clip-text">
              <pre class="text-xs font-bold tracking-widest uppercase">{{
                location.host
              }}</pre>

              <slot />
            </span>
          </h2>
        </div>

        <!-- page actions container -->
        <div class="flex flex-shrink-0 mt-1 sm:mt-2 md:mt-0 md:ml-4">
          <div class="flex space-x-4">
            <i-carbon-logo-linkedin class="text-white" />
            <i-carbon-logo-facebook class="text-white" />
            <i-carbon-logo-github class="text-white" />
            <i-carbon-logo-twitter class="text-white" />
            <i-carbon-logo-instagram class="text-white" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
