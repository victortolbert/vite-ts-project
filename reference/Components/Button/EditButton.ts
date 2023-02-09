import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    template: `<button
        type="button"
        class="bg-white border rounded-md font-medium border-gray-300 shadow-sm text-sm py-2 px-4 text-gray-700 inline-flex items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
    >
        Edit
    </button>`,
})
export default class EditButton extends Vue {

}
