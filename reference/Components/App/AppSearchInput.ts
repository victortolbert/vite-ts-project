import { Component, Vue } from 'vue-property-decorator';
import IconSearchSolid from "@ExemplarComponents/Icon/IconSearchSolid";

@Component({
    components: {
        IconSearchSolid
    },
    template: `<div class="max-w-lg w-full lg:max-w-xs">
        <label for="search" class="sr-only">Search</label>
        <div class="text-gray-400 relative focus-within:text-gray-600">
            <div class="flex pl-3 inset-y-0 left-0 absolute items-center pointer-events-none">
                <icon-search-solid></icon-search-solid>
            </div>

            <input
                id="search"
                class="bg-white border border-transparent rounded-md w-full py-2 pr-3 pl-10 placeholder-gray-500 text-gray-900 leading-5 block sm:text-sm focus:border-white focus:outline-none focus:ring-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-600"
                placeholder="Search for Field Tech"
                type="search"
                name="search"
            />
        </div>
    </div>`,
})
export default class AppSearchInput extends Vue {}
