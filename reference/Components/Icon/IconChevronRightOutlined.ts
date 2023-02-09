import { Component, Vue } from 'vue-property-decorator';

@Component({
  template: `<svg aria-hidden="true" width="24" height="24" fill="none" class="flex-none">
    <path
      d="M10.75 8.75l3.5 3.25-3.5 3.25"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>`,
})

export default class IconChevronRightOutlined extends Vue { }
