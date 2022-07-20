/// <reference types="vitest" />

import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue2'
// import WindiCSS from 'vite-plugin-windicss'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}`,
    },
  },

  build: {
    sourcemap: true,
    minify: false,
  },

  plugins: [
    Vue(),
    // WindiCSS(),
    Components({
      resolvers: [
        IconsResolver({
          prefix: 'i',
        }),
      ],
      dts: 'src/components.d.ts',
    }),
    Icons({
      // compiler: null, // 'vue2', 'vue3', 'jsx'
      compiler: 'vue2',
      scale: 1.2, // Scale of icons against 1em
      defaultStyle: '', // Style apply to icons
      defaultClass: '', // Class names apply to icons
      jsx: 'react', // 'react' or 'preact'
      autoInstall: true, // experimental
    }),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      dirs: ['./composables'],
      dts: 'src/auto-imports.d.ts',
    }),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    globals: true,
    include: ['test/**/*.test.ts'],
    environment: 'jsdom',
    deps: {
      inline: ['@vue', '@vueuse', 'vue-demi'],
    },
    setupFiles: ['./src/setup.ts'],
  },
})
