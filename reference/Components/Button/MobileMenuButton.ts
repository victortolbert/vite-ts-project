import { Component, Prop, Vue } from 'vue-property-decorator';

import IconXOutlined from "@ExemplarComponents/Icon/IconXOutlined";
import IconMenuOutlined from "@ExemplarComponents/Icon/IconMenuOutlined";

@Component({
    components: { IconXOutlined, IconMenuOutlined },

    template: `<button
        v-on:click="toggleMenu"
        type="button"
        class="rounded-md bg-primary-600 p-2 text-primary-200 inline-flex items-center justify-center hover:bg-primary-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-600"
        aria-controls="mobile-menu"
        aria-expanded="false"
    >
        <span class="sr-only">Open main menu</span>
        <icon-menu-outlined :class="isOpen ? 'hidden' : 'block'"></icon-menu-outlined>
        <icon-x-outlined  :class="isOpen ? 'block' : 'hidden'"></icon-x-outlined>
  </button>`,
})
export default class MobileMenuButton extends Vue {
    isOpen: boolean = false;

    toggleMenu() {
        this.isOpen = !this.isOpen;
    }
}
