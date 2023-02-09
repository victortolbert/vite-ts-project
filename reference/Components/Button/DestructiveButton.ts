import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    template: `<button
        type="button"
        class="border border-transparent rounded-md font-medium bg-red-100 py-2 px-4 text-red-700 inline-flex items-center justify-center sm:text-sm hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
    >
        Delete account
    </button>`,
})
export default class DestructiveButton extends Vue {

}
