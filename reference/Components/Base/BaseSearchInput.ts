import { Component, Vue } from 'vue-property-decorator'

import IconSearchSolid from '@ExemplarComponents/Icon/IconSearchSolid'

@Component({
  components: { IconSearchSolid },

  template: `<div class="rounded-md shadow-sm mt-1 relative">
        <div class="flex pl-3 inset-y-0 left-0 absolute items-center pointer-events-none">
            <icon-search-solid class="text-gray-400"></icon-search-solid>
        </div>
        <input
            id="search"
            type="text"
            name="search"
            class="rounded-md border-gray-300 w-full pl-10 block sm:text-sm focus:border-primary-500 focus:ring-primary-500"
            placeholder="Search for a field tech"
        />
    </div>`,
})
export default class BaseSearchInput extends Vue { }
