import { Component, Prop, Vue } from 'vue-property-decorator';

import IconDocumentTextSolid from "@ExemplarComponents/Icon/IconDocumentTextSolid";

@Component({
    components: { IconDocumentTextSolid },

    template: `<button
        type="button"
        class="bg-white border rounded-md cursor-pointer font-medium border-gray-300 shadow-sm text-sm w-full py-2 px-4 text-gray-700 inline-flex items-center justify-center whitespace-nowrap btn btn-warning sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
    >
        <icon-document-text-solid class="h-5 mr-2 -ml-1 text-gray-400 w-5" />
        <span class="whitespace-nowrap">View Mileage Log</span>
    </button>`,
})
export default class MileageLogButton extends Vue {

}
