import { Component, Vue } from 'vue-property-decorator';

import PageTitle from "@ExemplarComponents/Page/PageTitle";
import PageSubtitle from "@ExemplarComponents/Page/PageSubtitle";

@Component({
    components: { PageTitle, PageSubtitle },

    template: `<header class="page-header shadow">
        <div class="px-4">
            <div class="mx-auto w-full p-4">
                <div v-if="hasBreadcrumbsSlot">
                    <slot name="breadcrumbs"></slot>
                </div>
                <div class="mt-2 justify-end md:flex md:items-center md:justify-between">
                    <div class="flex-1 min-w-0">
                        <page-title>
                            <slot></slot>
                        </page-title>
                        <page-subtitle v-if="hasSubtitleSlot">
                            <slot name="subtitle"></slot>
                        </page-subtitle>
                    </div>
                    <!-- Actions -->
                    <div v-if="hasActionsSlot" class="page-header-actions flex mt-4 w-full md:mt-0 md:ml-4 md:w-1/2 md:items-center md:justify-end space-x-4">
                        <slot name="actions"></slot>
                    </div>
                </div>
            </div>
        </div>
    </header>`,
})
export default class PageHeader extends Vue {
    get hasActionsSlot() {
        return !!this.$slots.actions
    }
    get hasBreadcrumbsSlot() {
        return !!this.$slots.breadcrumbs
    }
    get hasSubtitleSlot() {
        return !!this.$slots.subtitle
    }
}
