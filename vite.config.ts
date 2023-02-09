import path from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import WindiCSS from 'vite-plugin-windicss';
import Vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';
import Layouts from 'vite-plugin-vue-layouts';
import Pages from 'vite-plugin-pages';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';
import Inspect from 'vite-plugin-inspect';
import Markdown from 'vite-plugin-vue-markdown';
// import Prism from 'markdown-it-prism'
import Shiki from 'markdown-it-shiki';
import MarkdownAnchor from 'markdown-it-anchor';

// @ts-expect-error
import MarkdownTOC from 'markdown-it-table-of-contents';
// @ts-expect-error
import LinkAttributes from 'markdown-it-link-attributes';
import { name, primaryColor, shortName } from './src/app.config';

// import sourceData from './src/data.json'
// @ts-expect-error
import SVG from 'vite-plugin-vue-svg';

import OptimizationPersist from 'vite-plugin-optimize-persist';
import PkgConfig from 'vite-plugin-package-config';

const markdownWrapperClasses = 'prose mx-auto text-left font-sans w-full p-6';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      '@vue/compiler-sfc': '@vue/compiler-sfc/dist/compiler-sfc.esm-browser.js',
    },
  },
  plugins: [
    // https://github.com/antfu/vite-plugin-windicss
    WindiCSS({
      safelist: markdownWrapperClasses,
    }),

    VueJsx(),

    Vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue', 'md', 'tsx'],
      extendRoute(route) {
        if (route.name === 'about')
          route.props = (route: any) => ({ query: route.query.q });

        if (route.name === 'components') {
          return {
            ...route,
            beforeEnter: (route: any) => {
              // eslint-disable-next-line no-console
              console.log(route);
            },
          };
        }
      },
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/core',
        '@vueuse/head',
        'vitest',
      ],
      dts: 'src/auto-imports.d.ts',
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md', 'svg'],

      directoryAsNamespace: true,
      dts: 'src/components.d.ts',
      globalNamespaces: [
        'app',
        'base',
        'card',
        'checkout-wizard',
        'event',
        'example',
        'feature',
        'form',
        'global',
        'icon',
        'inspection',
        'page',
        'profile',
        'project',
        'service-type',
        'service-type',
        'user',
      ],
      importPathTransform: (path) =>
        path.endsWith('.svg') ? `${path}?component` : undefined,

      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],

      // custom resolvers
      resolvers: [
        HeadlessUiResolver({ prefix: '' }),

        // auto import icons
        // https://github.com/antfu/unplugin-icons
        IconsResolver({
          prefix: 'i',
          componentPrefix: '',
          enabledCollections: [
            'carbon',
            'cif',
            'fa-brands',
            'feather',
            'flat-ui',
            'heroicons-outline',
            'heroicons-solid',
            'icon-park-outline',
            'icon-park',
            'icons8',
            'logos',
            'maki',
            'map',
            'mdi',
            'ri',
            'tabler',
            'twemoji',
            'vscode-icons',
            'uim',
            'zondicons',
          ],
        }),
      ],
    }),

    // https://github.com/antfu/unplugin-icons
    Icons({
      autoInstall: true,
    }),

    // https://github.com/antfu/vite-plugin-md
    Markdown({
      wrapperClasses: markdownWrapperClasses,
      headEnabled: true,
      markdownItSetup(md) {
        // https://prismjs.com/
        // md.use(Prism)

        // https://shiki.matsu.io/
        md.use(Shiki, {
          theme: 'nord',
          // theme: {
          //   dark: 'min-dark',
          //   light: 'min-light'
          // }
        });

        md.use(MarkdownAnchor),
          md.use(MarkdownTOC),
          md.use(LinkAttributes, {
            pattern: /^https?:\/\//,
            attrs: {
              target: '_blank',
              rel: 'noopener',
            },
          });
      },
    }),

    SVG(),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      mode: 'development',
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'safari-pinned-tab.svg'],
      manifest: {
        name,
        short_name: shortName,
        theme_color: primaryColor,
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),

    PkgConfig(),
    OptimizationPersist(),

    // https://github.com/antfu/vite-plugin-inspect
    Inspect({
      // change this to enable inspect for debugging
      enabled: true,
    }),
  ],

  server: {
    fs: {
      strict: true,
    },
  },

  // https://github.com/antfu/vite-ssg
  // ssgOptions: {
  //   script: 'async',
  //   formatting: 'minify',
  // },

  optimizeDeps: {
    include: [
      '@vueuse/integrations',
      '@vueform/multiselect',
      'canvas-confetti',
    ],
    exclude: ['vue-demi'],
  },

  // https://github.com/vitest-dev/vitest
  test: {
    /* for example, use global to avoid globals imports (describe, test, expect): */
    globals: true,
    globalSetup: [
      './setupFiles/default-export.js',
      './setupFiles/named-exports.js',
      './setupFiles/ts-with-imports.ts',
    ],
    environment: 'jsdom',
    // environment: 'happy-dom',
    // environment: 'node',
    snapshotFormat: {
      printBasicPrototype: true,
    },
    // threads: false,
    // testTimeout: 2000,
    transformMode: {
      web: [/.[tj]sx$/],
    },
    deps: {
      inline: ['@vue', '@vueuse', 'vue-demi'],
      external: [/src\/external\.mjs/],
    },
    // setupFiles: ['./test/setup.ts'],
    // exclude: ['**\/node_modules\/**', '**\/cypress\/**'],
  },

  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
});
