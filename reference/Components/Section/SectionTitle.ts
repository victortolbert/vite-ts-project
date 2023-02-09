import { Component, Vue } from 'vue-property-decorator';

@Component({
    template: `<h3 class="font-bold text-lg text-primary-500 leading-7 sm:text-xl sm:truncate">
        <slot></slot>
    </h3>`,
})
export default class PageTitle extends Vue {}
