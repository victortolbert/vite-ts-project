import { Component, Vue } from 'vue-property-decorator';

import IconBellOutlined from "@ExemplarComponents/Icon/IconBellOutlined";

@Component({
    components: { IconBellOutlined },

    template: `<button type="button" class="rounded-full bg-primary-600 flex-shrink-0 p-1 text-primary-200 hover:text-white focus:outline-none focus:ring-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-600">
        <span class="sr-only">View notifications</span>
        <icon-bell-outlined></icon-bell-outlined>
    </button>`,
})
export default class AppNotificationsButton extends Vue {
    isOpen: boolean = false;

    toggle() {
        this.isOpen = !this.isOpen;
    }
}
