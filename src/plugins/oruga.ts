import '@oruga-ui/oruga/dist/oruga-full-vars.css'
import Vue from 'vue'
import Oruga from '@oruga-ui/oruga'

Vue.use(Oruga, {
  iconPack: 'fas',
  iconComponent: 'vue-fontawesome',
  statusIcon: false,
  button: {
    override: true,
    rootClass: 'btn',
  },
  // dropdown: {
  //   menuClass: 'dropdown-menu',
  //   itemClass: 'dropdown-item',
  //   itemActiveClass: 'dropdown-item-active',
  // },
  field: {
    override: true,
    labelClass: 'field-label',
    messageClass: 'text-xs italic',
    variantClass: 'field-',
  },
  loading: {
    overlayClass: 'loading-background',
  },
  icon: {
    override: true,
    spinClass: 'fa-spin',
  },
  input: {
    override: true,
    inputClass: 'input focus:outline-none focus:shadow-outline',
    roundedClass: 'rounded',
    variantClass: 'input-',
  },
  notification: {
    // override: true,
    // rootClass: 'border-2 border-red-500 rounded-lg p-2',
    // contentClass: 'border-2 border-red-500 rounded-lg p-2',
    wrapperClass: 'border-2 border-red-500 rounded-lg p-2',
    // noticeClass: 'border-2 border-red-500 rounded-lg p-2',
  },
  radio: {
    rootClass: 'radio',
    labelClass: 'radio-label',
    checkClass: 'radio-check',
    checkedClass: 'radio-checked',
  },
  // switch: {
  //   checkClass: 'switch',
  //   labelClass: 'switch-label',
  // },
})
