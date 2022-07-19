import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue2'
import WindiCSS from 'vite-plugin-windicss'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@": `${path.resolve(__dirname, "src")}`,
    },
  },

  build: {
    minify: true,
  },

  plugins: [
    Vue(),
    WindiCSS(),
    Components({
      resolvers: [
        IconsResolver({
          componentPrefix: "",
        }),
      ],
      dts: "src/components.d.ts",
    }),
    Icons(),
    AutoImport({
      imports: ["@vueuse/core"],
      dts: "src/auto-imports.d.ts",
    }),
  ],
});
