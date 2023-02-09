import { Component, Vue } from 'vue-property-decorator';

@Component({
  template: `<button class="border border-transparent rounded-md font-medium space-x-2 bg-primary-100 text-sm py-2 px-4 text-primary-700 inline-flex items-center select-none hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500" :disabled="isLoading" @click="handleClick">
        <div v-if="isLoading" class="rounded-full border-b-2 h-4 animate-spin w-4"></div>
        <div v-else class="rounded-full border-b-2 border-gray-900 h-4 w-4"></div>
        <span>
            <slot>Button Slot</slot>
        </span>
    </button>`,
})
export default class BaseButton extends Vue {
  isLoading = false

  handleClick() {
    this.isLoading = true;
    setTimeout(() => (this.isLoading = false), 3000);
  }
}
