import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  template: '<img class="rounded-full h-avatar h-8 w-8" :src="imageSrc" alt="">',
})
export default class CoreAvatar extends Vue {
  @Prop(String) readonly src: string | undefined

  get imageSrc() {
    return this.src ? `${this.src}` : '/assets/img/users/michael.jpg'
  }
}
