import { Component, Vue } from 'vue-property-decorator';

@Component({
    template: `<span class="flex flex-col font-medium leading-none select-none whitespace-nowrap sm:flex-row sm:space-x-1">
        <span class="text-sm leading-none uppercase sm:text-lg sm:normal-case">Hancock</span>
        <span class="text-sm leading-none uppercase sm:text-lg sm:normal-case">Claims Consultants</span>
    </span>`,
})
export default class AppTitle extends Vue {}
