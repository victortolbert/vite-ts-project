import { Component, Vue } from 'vue-property-decorator'

@Component({
  template: `<div class="flex flex-col min-h-screen w-full">
        <header v-if="hasHeaderSlot">
            <slot name="header" />
        </header>

        <main class="flex-1">
            <slot></slot>
        </main>

        <footer v-if="hasFooterSlot">
            <slot name="footer"></slot>
        </footer>
    </div>`,
})
export default class BaseLayout extends Vue {
  get hasHeaderSlot() {
    return !!this.$slots.header
  }

  get hasFooterSlot() {
    return !!this.$slots.footer
  }
}
