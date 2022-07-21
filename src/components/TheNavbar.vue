<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import AppLogo from './App/AppLogo.vue'
import HancockClaimsText from './Hancock/HancockClaimsText.vue'
import NotificationsButton from './NotificationsButton.vue'
const app = {
  title: 'Titan',
  menu: [
    {
      slug: 'inspection',
      name: 'Inspection',
      href: '/inspection',
      icon: 'folder',
      current: false,
    },
    // {
    //   slug: 'inspection-admin',
    //   name: 'PIFA',
    //   href: '/inspection',
    //   icon: 'folder',
    //   current: false,
    // },

    // {
    //   slug: 'home',
    //   name: 'Home',
    //   href: '/',
    //   icon: 'home',
    //   current: false,
    // },

    {
      slug: 'projects',
      name: 'Projects',
      href: '/projects',
      icon: 'folder',
      current: false,
    },
    {
      slug: 'reports',
      name: 'Reports',
      href: '/reports',
      icon: 'report',
      current: true,
    },
    {
      slug: 'dashboard',
      name: 'Dashboard',
      href: '/dashboard',
      icon: 'dashboard',
      current: false,
    },
    {
      slug: 'schedule-claim',
      name: 'Schedule a Claim',
      href: '/schedule-claim',
      icon: 'folder',
      current: false,
    },
    {
      slug: 'autoscheduler',
      name: 'Auto Scheduler',
      href: '/autoscheduler',
      icon: 'folder',
      current: false,
    },

    {
      slug: 'portal',
      name: 'Portal',
      href: '/portal',
      icon: 'folder',
      current: false,
    },

    // {
    //   slug: 'resources',
    //   name: 'Resources',
    //   href: '/resources',
    //   icon: 'box',
    //   current: false,
    // },
    // {
    //   slug: 'calendar',
    //   name: 'Calendar',
    //   href: '/calendar',
    //   icon: 'calendar',
    //   current: false,
    // },
    // {
    //   slug: 'recipes',
    //   name: 'Recipes',
    //   href: '/recipes',
    //   icon: 'notebook',
    //   current: true,
    // },

    // { slug: 'team', name: 'Team', href: '/team', icon: 'group', current: true },
    {
      slug: 'scratch',
      name: 'Scratch Pad',
      href: '/scratch',
      icon: 'folder',
      current: false,
    },
    { slug: 'templates', name: 'Templates', href: '/templates', current: true },
  ],
}
const menu = [
  {
    slug: 'dashboard',
    name: 'Dashboard',
    href: '/dashboard',
    icon: 'dashboard',
    current: false,
  },
  {
    slug: 'projects',
    name: 'Projects',
    href: '/projects',
    icon: 'folder',
    current: false,
  },
  {
    slug: 'resources',
    name: 'Resources',
    href: '/resources',
    icon: 'box',
    current: false,
  },
  {
    slug: 'calendar',
    name: 'Calendar',
    href: '/calendar',
    icon: 'calendar',
    current: false,
  },
  { slug: 'recipes', name: 'Recipes', href: '/recipes', icon: 'notebook', current: true },
  { slug: 'reports', name: 'Reports', href: '/reports', icon: 'report', current: true },
  { slug: 'team', name: 'Team', href: '/team', icon: 'group', current: true },
  { slug: 'templates', name: 'Templates', href: '/templates', current: true },
  // { slug: 'portal', name: "Portal", href: "/portal", current: true },
  // { slug: 'posts', name: "Posts", href: "/posts", current: true },
]

export default defineComponent({
  components: {
    AppLogo,
    HancockClaimsText,
    NotificationsButton,
  },
  data: () => ({
    app,
    menu,
    showMobileMenu: false,
    showProfileDropdown: false,
  }),
})
</script>

<template>
  <nav class="bg-primary-600 print:hidden">
    <div class="px-4 mx-auto sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div
            class="flex items-center flex-shrink-0 px-4 -ml-2 text-lg text-white sm:-ml-4 lg:-ml-6 font-display"
          >
            <AppLogo class="w-auto h-8" />
            <HancockClaimsText class="w-auto h-6" />
          </div>
          <div class="hidden md:block">
            <div class="flex items-baseline ml-4 space-x-4 whitespace-nowrap">
              <o-dropdown aria-role="list">
                <div slot="trigger">
                  <div
                    class="flex items-center space-x-1 py-1 cursor-pointer text-white text-sm"
                  >
                    <span>Projects</span>
                    <!-- <i-carbon-caret-down /> -->
                  </div>
                  <!-- <o-icon variant="success" icon="caret-down" slot="trigger" role="button" /> -->
                </div>

                <o-dropdown-item aria-role="listitem">
                  Projects List
                </o-dropdown-item>
                <o-dropdown-item aria-role="listitem">
                  Another action
                </o-dropdown-item>
                <o-dropdown-item aria-role="listitem">
                  Something else
                </o-dropdown-item>
              </o-dropdown>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="flex items-center ml-4 md:ml-6">
            <!-- NotificationsButton -->
            <NotificationsButton>Notifications</NotificationsButton>

            <!-- ProfileDropdownMenu -->
            <div class="relative ml-3">
              <div>
                <button
                  id="user-menu-button"
                  type="button"
                  class="flex items-center max-w-xs text-sm rounded-full bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-600 focus:ring-white"
                  aria-expanded="false"
                  aria-haspopup="true"
                  @click="showProfileDropdown = !showProfileDropdown"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="w-8 h-8 rounded-full grayscale"
                    src="/assets/img/users/victor.jpg"
                    alt="Avatar of Victor"
                  >
                </button>
              </div>
              <!--
                    Dropdown menu, show/hide based on menu state.
                    Entering: "transition ease-out duration-100"
                      From: "transform opacity-0 scale-95"
                      To: "transform opacity-100 scale-100"
                    Leaving: "transition ease-in duration-75"
                      From: "transform opacity-100 scale-100"
                      To: "transform opacity-0 scale-95"
                -->
              <div
                v-show="showProfileDropdown"
                class="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
              >
                <a
                  id="user-menu-item-2"
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                >
                  <span class="flex items-center space-x-1">
                    <!-- <i-carbon-logout /> -->
                    <span>Logout</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="flex -mr-2 md:hidden">
          <!-- MobileMenuButton -->
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md bg-primary-600 text-primary-200 hover:text-white hover:bg-primary-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-600 focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="showMobileMenu = !showMobileMenu"
          >
            <span class="sr-only">Open main menu</span>
            <!-- <i-carbon-menu class="h-6 w-6" :class="[showMobileMenu ? 'hidden' : 'block']" /> -->
            <!-- <i-carbon-close class="h-6 w-6" :class="[showMobileMenu ? 'block' : 'hidden']" /> -->
          </button>
        </div>
      </div>
    </div>

    <!-- MobileMenuComponent, show/hide based on menu state. -->
    <div v-show="showMobileMenu" id="mobile-menu" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a
          v-for="item in app.menu"
          :key="item.name"
          :href="item.href"
          class="text-white hover:bg-primary-500 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium" :class="[
            item.current ? 'bg-primary-700 text-white' : '',
          ]"
          :area-current="item.current ? 'page' : undefined"
        >
          {{ item.name }}
        </a>
      </div>
      <!--  -->
      <div class="pt-4 pb-3 border-t border-primary-700">
        <!-- MobileMenuUser -->
        <div class="flex items-center px-5">
          <!-- AvatarComponent -->
          <div class="flex-shrink-0">
            <img
              class="w-10 h-10 rounded-full grayscale"
              src="/assets/img/users/victor.jpg"
              alt="Avatar of Victor"
            >
          </div>
          <!-- Name / Email -->
          <div class="ml-3">
            <div class="text-base font-medium text-white">
              Victor Tolbert
            </div>
            <a
              href="mailto:vtolbert@hancockclaims.com"
              class="text-sm font-medium text-primary-300 hover:underline"
            >
              vtolbert@hancockclaims.com
            </a>
          </div>
          <!-- NotificationsButton -->
          <button
            type="button"
            class="flex-shrink-0 p-1 ml-auto rounded-full bg-primary-600 text-primary-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-600 focus:ring-white"
          >
            <span class="sr-only">View notifications</span>
            <!-- <i-carbon-notification class="w-6 h-6" /> -->
          </button>
        </div>

        <!-- MobileMenuProfileLinks -->
        <div class="px-2 mt-3 space-y-1">
          <!-- Your Profile Link -->
          <a
            href="#"
            class="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-primary-500 hover:bg-opacity-75"
          >
            <span class="flex items-center space-x-1">
              <!-- <i-carbon-identification /> -->
              <span>Your Profile</span>
            </span>
          </a>

          <!-- Settings Link -->
          <a
            href="#"
            class="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-primary-500 hover:bg-opacity-75"
          >
            <span class="flex items-center space-x-1">
              <!-- <i-carbon-settings /> -->
              <span>Settings</span>
            </span>
          </a>

          <!-- Logout Link -->
          <a
            href="#"
            class="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-primary-500 hover:bg-opacity-75"
          >
            <span class="flex items-center space-x-1">
              <!-- <i-carbon-logout /> -->
              <span>Logout</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
