import { Component, Prop, Vue } from 'vue-property-decorator';

import IconCheckSolid from "@ExemplarComponents/Icon/IconCheckSolid";
import IconXSolid from "@ExemplarComponents/Icon/IconXSolid";

@Component({
    components: { IconCheckSolid, IconXSolid },

    template: `<div :class="'p-4 rounded-md bg-'+color+'-50'">
        <div class="flex">
            <div :class="'flex-shrink-0 text-'+color+'-400'">
                <slot name="icon">
                    <icon-check-solid></icon-check-solid>
                </slot>
            </div>
            <div class="ml-3">
                <p :class="'text-sm font-medium text-'+color+'-800'">
                    <slot></slot>
                </p>
            </div>
            <div class="ml-auto pl-3">
                <div class="-my-1.5 -mx-1.5">
                    <button
                        type="button"
                        :class="'inline-flex bg-'+color+'-50 rounded-md p-1.5 text-'+color+'-500 hover:bg-'+color+'-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-'+color+'-50 focus:ring-'+color+'-600'">
                        <span class="sr-only">Dismiss</span>
                        <icon-x-solid></icon-x-solid>
                    </button>
                </div>
            </div>
        </div>
    </div>`,
})
export default class AppAlert extends Vue {
    @Prop({ default: "info" }) readonly variant!: string;

    get color() {
        let color = '';
        switch (this.variant) {
          case 'success':
            color = 'green';
            break;
          case 'warning':
            color = 'yellow';
            break;
          case 'danger':
          case 'error':
            color = 'red';
            break;
          case 'info':
            color = 'blue';
            break;
          default:
            color = 'gray';
            break;
        }

        return color;
      }
}
