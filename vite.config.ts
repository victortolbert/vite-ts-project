import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue2'
import WindiCSS from 'vite-plugin-windicss'
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
    WindiCSS(),
    Components({
      resolvers: [
        IconsResolver({
          componentPrefix: '',
        }),
      ],
      dts: 'src/components.d.ts',
    }),
    Icons({
      // experimental
      autoInstall: true,
      compiler: 'vue2',
    }),
    AutoImport({
      imports: ['@vueuse/core'],
      dts: 'src/auto-imports.d.ts',
    }),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'jsdom',
    deps: {
      inline: ['@vue', '@vueuse', 'vue-demi'],
    },
  },
})
