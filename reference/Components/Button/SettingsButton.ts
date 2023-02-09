import { Component, Prop, Vue } from 'vue-property-decorator';

import IconCogSolid from "@ExemplarComponents/Icon/IconCogSolid";

@Component({
    components: {
        IconCogSolid
    },
    template: `<button
        class="rounded cursor-pointer py-2 px-4 inline-flex items-center whitespace-nowrap hover:bg-primary-800"
        @click="toggle"
    >
        <icon-cog-solid class="mr-2 -ml-1 text-gray-400"></icon-cog-solid>
        <span>Settings</span>
    </button>`,
})
export default class SettingsButton extends Vue {
    isOpen: boolean = false

    toggle() {
        this.isOpen = !this.isOpen
    }
}
