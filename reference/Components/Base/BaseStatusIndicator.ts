import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  template: `<div class="flex leading-none items-center">
        <span :class="iconClass" class="inline-block h-8 w-8" style="width: 32px height: 32px"></span>
        <div class="flex flex-col ml-2">
            <span :class="titleClass">{{ title }}</span>
            <span class="text-xs">
                <slot></slot>
            </span>
        </div>
    </div>`,
})
export default class BaseStatusIndicator extends Vue {
  @Prop({ default: 'green' })
  public color!: string

  @Prop({ default: 'Active' })
  public title!: string

  iconClass() {
    return 'bg-green-100 border-green-900 text-green-900'
  }

  titleClass() {
    return 'font-medium text-green-900'
  }
}
