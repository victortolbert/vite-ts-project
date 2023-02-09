import { Component, Prop, Vue } from 'vue-property-decorator';

import IconXSolid from "@ExemplarComponents/Icon/IconXSolid";

@Component({
    components: { IconXSolid},
    template: `<button
        type="button"
        class="bg-white border rounded-md cursor-pointer font-medium border-gray-300 shadow-sm text-sm w-full py-2 px-4 text-gray-700 inline-flex items-center justify-center whitespace-nowrap sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
    >
        <icon-x-solid class="mr-2 -ml-1 text-gray-400" />
        <span>Close</span>
    </button>`,
})
export default class CloseButton extends Vue {

}
