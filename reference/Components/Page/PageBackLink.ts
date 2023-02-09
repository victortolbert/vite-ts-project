import { Component, Vue } from 'vue-property-decorator';

import IconChevronLeftSolid from "@ExemplarComponents/Icon/IconChevronLeftSolid";

@Component({
    components: { IconChevronLeftSolid, },

    template: `<nav class="md:hidden" aria-label="Back">
        <a href="javascript:history.go(-1)" class="flex font-medium text-sm text-gray-500 items-center hover:text-gray-700">
            <icon-chevron-left-solid class="flex-shrink-0 mr-1 -ml-1 text-gray-400"></icon-chevron-left-solid>
            <span>Back</span>
        </a>
    </nav>`,
})
export default class PageBackLink extends Vue {}
