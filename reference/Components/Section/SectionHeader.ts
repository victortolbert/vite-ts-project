import { Component, Vue } from 'vue-property-decorator';

import SectionTitle from "@ExemplarComponents/Section/SectionTitle";
import SectionSubtitle from "@ExemplarComponents/Section/SectionSubtitle";

@Component({
    components: { SectionTitle, SectionSubtitle },

    template: `<header>
        <div class="px-4">
            <div class="mx-auto w-full p-4">
                <div class="mt-2 justify-end md:flex md:items-center md:justify-between">
                    <div class="flex-1 min-w-0">
                        <section-title>
                            <slot></slot>
                        </section-title>
                        <section-subtitle v-if="hasSubtitleSlot">
                            <slot name="subtitle"></slot>
                        </section-subtitle>
                    </div>
                    <!-- Actions -->
                    <div v-if="hasActionsSlot" class="flex mt-4 w-full md:mt-0 md:ml-4 md:w-1/2 md:items-center md:justify-end">
                        <slot name="actions"></slot>
                    </div>
                </div>
            </div>
        </div>
    </header>`,
})
export default class SectionHeader extends Vue {
    get hasActionsSlot() {
        return !!this.$slots.actions
    }

    get hasSubtitleSlot() {
        return !!this.$slots.subtitle
    }
}
