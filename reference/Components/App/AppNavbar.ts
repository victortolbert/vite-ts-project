import { Component, Vue } from 'vue-property-decorator';
import AppLogo from "./AppLogo";
import AppTitle from "./AppTitle";
import AppSearchInput from "./AppSearchInput";
import AppMobileMenuButton from "./AppMobileMenuButton";
import AppNotificationsButton from "./AppNotificationsButton";
import AppProfileButton from "./AppProfileButton";

@Component({
    components: {
        AppLogo, AppTitle, AppSearchInput, AppMobileMenuButton, AppNotificationsButton, AppProfileButton,
    },

    template: `<nav class="border-b bg-primary-600 border-opacity-25 border-primary-300 lg:border-none">
        <div class="mx-auto px-2 sm:px-4 lg:px-4">
            <div class="flex h-16 relative items-center justify-between lg:border-b lg:border-primary-400 lg:border-opacity-25">
                <div class="flex px-2 items-center lg:px-0">
                    <div class="flex-shrink-0">
                        <!-- Navbar branding -->
                        <a class="flex mr-4 text-white pr-4 items-center no-underline" href="/Technician/AutoScheduler">
                            <app-logo></app-logo>
                            <app-title></app-title>
                        </a>
                    </div>

                    <!-- Navbar items -->
                    <div class="hidden lg:ml-10 lg:block">
                        <div class="flex space-x-4"></div>
                    </div>
                </div>

                <div class="flex flex-1 px-2 justify-center lg:ml-6 lg:justify-end">
                    <app-search-input v-if="false"></app-search-input>
                </div>

                <div class="flex lg:hidden">
                    <app-mobile-menu-button></app-mobile-menu-button>
                </div>

                <div class="hidden lg:ml-4 lg:block">
                    <div class="flex space-x-4 items-center">
                        <div class="flex-shrink-0">
                            <slot name="actions"></slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div v-if="false" id="mobile-menu" class="lg:hidden">
            <div class="space-y-1 px-2 pt-2 pb-3">
                <a href="/Technician/AutoScheduler" class="rounded-md font-medium bg-primary-700 text-white text-sm py-2 px-3 hover:bg-primary-500 hover:bg-opacity-75 ">
                    AutoScheduler
                </a>
            </div>
            <div class="border-t border-primary-700 pt-4 pb-3">
                <div class="flex px-5 items-center">
                    <div class="flex-shrink-0">
                        <base-avatar></base-avatar>
                    </div>
                    <div class="ml-3">
                        <div class="font-medium text-base text-white">Michael Houser</div>
                        <div class="font-medium text-sm text-primary-300">michael@example.com</div>
                    </div>
                    <button
                        type="button"
                        class="rounded-full ml-auto bg-primary-600 flex-shrink-0 p-1 text-primary-200 hover:text-white focus:outline-none focus:ring-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-600"
                    >
                        <span class="sr-only">View notifications</span>
                        <icon-bell-solid></icon-bell-solid>
                    </button>
                </div>
                <div class="space-y-1 mt-3 px-2">
                    <a
                        href="#"
                        class="rounded-md font-medium text-base text-white py-2 px-3 block hover:bg-primary-500 hover:bg-opacity-75"
                    >Settings</a>

                    <a
                        href="#"
                        class="rounded-md font-medium text-base text-white py-2 px-3 block hover:bg-primary-500 hover:bg-opacity-75"
                    >Sign out</a>
                </div>
            </div>
        </div>
    </nav>`,
})
export default class AppNavbar extends Vue {
    isOpen: boolean = false;

    navLinks = [
        {
          label: 'Auto Scheduler',
          url: '/'
        },
    ]
}
