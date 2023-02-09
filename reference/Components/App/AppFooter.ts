import { Component, Vue } from 'vue-property-decorator';

@Component({
    template: `<footer class="bg-primary-900 mt-8 text-sm py-2 px-6 text-primary-50">
        <slot></slot>
    </footer>`,
})
export default class AppAlert extends Vue {}
