import { Component, Vue } from 'vue-property-decorator';

@Component({
  template: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path
      fill-rule="evenodd"
      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
      clip-rule="evenodd"
    />
  </svg>`,
})

export default class IconMinusSolid extends Vue { }
