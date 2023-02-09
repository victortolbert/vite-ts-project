import { Component, Vue } from 'vue-property-decorator';

import AppLogo from "./AppLogo";
import AppTitle from "./AppTitle";
import AppSettingsButton from "./AppSettingsButton";

@Component({
    components: { AppLogo, AppTitle, AppSettingsButton },

    template: `<header class="bg-primary text-white">
        <div class="flex py-1 px-4 items-center justify-between">
            <a class="flex mr-4 text-white pr-4 items-center no-underline" href="/Technician/AutoScheduler">
                <app-logo></app-logo>
                <app-title></app-title>
            </a>

            <form class="flex space-x-2 items-center">
                <app-settings-button></app-settings-button>
            </form>
        </div>
  </header>`,
})
export default class AppHeader extends Vue {}
