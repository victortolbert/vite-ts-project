import { Component, Vue } from 'vue-property-decorator';

@Component({
    template: `<h2 class="font-bold text-2xl text-primary-500 leading-7 sm:text-3xl sm:truncate">
        <slot></slot>
    </h2>`,
})
export default class PageTitle extends Vue {}
