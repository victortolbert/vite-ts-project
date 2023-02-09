import { Component, Vue } from 'vue-property-decorator';

@Component({
    template: `<h3>
        <slot></slot>
    </h3>`,
})

export default class PageSubtitle extends Vue {}
