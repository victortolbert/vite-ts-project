import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    template: `<button
        type="button"
        class="border border-transparent rounded-md font-medium bg-primary-600 shadow-sm text-sm text-white ml-3 py-2 px-4 inline-flex items-center hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
    >
        Publish
    </button>`,
})
export default class PublishButton extends Vue {

}
