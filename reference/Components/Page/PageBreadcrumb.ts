import { Component, Vue } from 'vue-property-decorator';

@Component({
    template: `<nav
        aria-label="Breadcrumb"
        class="flex font-medium space-x-2 text-sm text-gray-500 items-center whitespace-nowrap">
        <a href="/Technician/AutoScheduler" class="hover:text-gray-900">Dashboard</a>
        <span>&bull;</span>
        <a a href="#" aria-current="page" class="cursor-pointer truncate hover:text-gray-900">Field Tech Availability</a>
    </nav>`,
})
export default class PageBreadcrumb extends Vue {
}
