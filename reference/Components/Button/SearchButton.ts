import { Component, Prop, Vue } from 'vue-property-decorator';

import IconSearchSolid from "@ExemplarComponents/Icon/IconSearchSolid";

@Component({
    components: { IconSearchSolid },

    template: `<button
        type="button"
        class="border border-transparent rounded-md cursor-pointer font-medium bg-primary-600 shadow-sm text-sm text-white w-full py-2 px-4 inline-flex items-center justify-center sm:ml-3 sm:w-auto hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
    >
        <icon-search-solid class="mr-2 -ml-1 text-gray-400"></icon-search-solid>
        <span>Search</span>
    </button>`,
})

export default class SearchButton extends Vue {

}
