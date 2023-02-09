import { Component, Vue } from 'vue-property-decorator';

@Component({
    template: `<div class="flex-shrink-0 ml-3 relative">
        <div>
            <button
                v-on:click="isOpen = !isOpen"
                id="user-menu-button"
                type="button"
                class="rounded-full flex bg-primary-600 text-sm text-white focus:outline-none focus:ring-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-600"
                aria-expanded="false"
                aria-haspopup="true"
            >
                <span class="sr-only">Open user menu</span>
                <base-avatar></base-avatar>
            </button>
        </div>

        <div
            v-if="isOpen"
            class="bg-white rounded-md shadow-lg ring-black mt-2 py-1 origin-top-right right-0 ring-1 ring-opacity-5 w-48 absolute focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabindex="-1">
            <a id="user-menu-item-1" href="#" class="text-sm py-2 px-4 text-gray-700 block" role="menuitem" tabindex="-1">
                Settings
            </a>
            <a id="user-menu-item-2" href="#" class="text-sm py-2 px-4 text-gray-700 block" role="menuitem" tabindex="-1">
                Sign out
            </a>
        </div>
    </div>`,
})
export default class AppProfileDropdown extends Vue {
    isOpen: boolean = false
}
