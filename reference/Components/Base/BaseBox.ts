import { Component, Vue } from 'vue-property-decorator'

@Component({
  template: `<section class="bg-white rounded shadow p-6">
        <slot></slot>
    </section>`,
})
export default class BaseBox extends Vue { }
