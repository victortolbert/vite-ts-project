import { Component, Vue } from 'vue-property-decorator'

@Component({
  //   template: '#card-component-template'
  template: `<div id="card-component" class="flex flex-col min-h-screen w-full">
        <header v-if="hasHeaderSlot" id="app-header" class="bg-red-500 z-10">
            <slot name="header" />
        </header>
        <nav v-if="hasNavbarSlot" id="app-navbar">
            <slot name="navbar" />
        </nav>
        <main id="main-content" class="flex flex-col flex-1">
            <slot />
        </main>
        <aside v-if="hasSidebarSlot" id="app-sidebar">
            <slot name="sidebar" />
        </aside>
        <footer v-if="hasFooterSlot" id="app-footer">
            <slot name="footer" />
        </footer>
    </div>
    `,
})
export default class CardComponent extends Vue {
  get hasHeaderSlot() {
    return !!this.$slots.header
  }

  get hasNavbarSlot() {
    return !!this.$slots.navbar
  }

  get hasSidebarSlot() {
    return !!this.$slots.sidebar
  }

  get hasFooterSlot() {
    return !!this.$slots.footer
  }
}
