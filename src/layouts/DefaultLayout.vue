<script lang="ts">
import { SidebarMenu } from 'vue-sidebar-menu'
import { SidebarItem, SidebarComponentItem, SidebarHeaderItem } from '@/types'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'DefaultLayout',
  data() {
    return {
      collapsed: false,
      isOnMobile: false,
      menu: [
        {
          header: true,
          title: 'Main Navigation',
          hiddenOnCollapse: true,
        },
        {
          href: '#',
          title: 'Dashboard',
          icon: {
            element: 'base-icon-outlined',
            class: 'text-gray-300',
            attributes: {
              name: 'template',
            },
          },
        },
        {
          href: '#',
          title: 'Projects',
          icon: {
            element: 'base-icon-outlined',
            class: 'text-gray-300',
            attributes: {
              name: 'collection',
            },
          },
        },
        {
          href: '#',
          title: 'Calendar',
          icon: {
            element: 'base-icon-outlined',
            class: 'text-gray-300',
            attributes: {
              name: 'calendar',
            },
          },
        },
        {
          href: '#',
          title: 'Billing',
          icon: {
            element: 'base-icon-outlined',
            class: 'text-gray-300',
            attributes: {
              name: 'credit-card',
            },
          },
        },
        {
          href: '#',
          title: 'Reports',
          icon: {
            element: 'base-icon-outlined',
            class: 'text-gray-300',
            attributes: {
              name: 'document-report',
            },
          },
        },
        {
          href: '#',
          title: 'Documentation',
          icon: {
            element: 'base-icon-outlined',
            class: 'text-gray-300',
            attributes: {
              name: 'document-text',
            },
          },
        },
        {
          title: 'Master Data',
          icon: {
            element: 'base-icon-outlined',
            class: 'text-gray-300',
            attributes: {
              name: 'cog',
            },
          },
          child: [
            {
              title: 'Customers',
              child: [
                {
                  title: 'Customer List',
                  href: `/Customer/Customers`,
                }
              ],
            },
            {
                title: 'Territories',
                child: [
                  {
                    title: 'Territory List',
                    href: `/Territory/Territories`,
                  }
                ],
            },
            {
              title: 'Service Areas',
              child: [
                {
                  title: 'Service Area List',
                  href: '/ServiceArea/ServiceAreas',
                }
              ],
            },
            {
              title: 'Service Types',
              child: [
                {
                  title: 'Service Type List',
                  href: '/ServiceType/ServiceTypes',
                }
              ],
            },
            {
              title: 'Users',
              child: [
                {
                  title: 'User List',
                  href: '/User/Users',
                }
              ],
            },
          ],
        },
      ]
    }
  },
  computed: {
    hasHeaderSlot() {
      return !!this.$slots.header
    },

    hasFooterSlot() {
      return !!this.$slots.footer
    },
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      if (window.innerWidth <= 767) {
        this.isOnMobile = false
        this.collapsed = true
      } else {
        this.isOnMobile = false
        this.collapsed = false
      }
    },
    onToggleCollapse(collapsed: boolean) {
      console.log(collapsed)
      this.collapsed = collapsed
      this.$emit('toggle-collapse', collapsed)
    },
    onItemClick(event: PointerEvent, item: SidebarItem | SidebarComponentItem | SidebarHeaderItem, vnode: Vue) {
      console.log('onItemClick', { event, item, vnode })
    }
  },
  components: {
    SidebarMenu,
  },
})
</script>

<template>
  <div class="flex flex-col w-full min-h-screen">
    <header class="print:hidden" v-if="hasHeaderSlot">
      <slot name="header" />
    </header>

    <slot />

    <footer class="print:hidden" v-if="hasFooterSlot">
      <slot name="footer" />
    </footer>

    <sidebar-menu
      v-if="false"
      width="264px"
      width-collapsed="48px"
      :menu="menu"
      :collapsed="collapsed"
      :show-one-child="true"
      v-on:toggle-collapse="onToggleCollapse"
      v-on:item-click="onItemClick"
    >
      <div slot="header">
        <a href="#" class="app-sidebar-header">
          <base-logo name="hancock-h" />
          <span v-if="!collapsed">
            Claims Consultants
          </span>
        </a>
      </div>

      <span slot="toggle-icon" class="flex items-center app-sidebar-toggle-icon">
        <i-carbon-chevron-right :class="collapsed ? '' : 'rotate-180'" />

        <span class="whitespace-nowrap" v-if="!collapsed">
          Toggle Toolbar
        </span>
      </span>

      <span slot="dropdown-icon">
        <i-carbon-chevron-right />
      </span>
    </sidebar-menu>
  </div>
</template>
