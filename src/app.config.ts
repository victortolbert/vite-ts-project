import { ref } from 'vue'
import MenuDivider from '@/components/MenuDivider.vue'

export const title = 'My App'

export const menu = ref([
  // item
  {
    header: true,
    title: 'Views',
    hiddenOnCollapse: true,
    // hidden: false
    // class: ''
    // attributes: {}
  },
  {
    component: MenuDivider,
  },
  {
    href: '/',
    /* with vue-router you can use :to prop
    href: { path: '/' }
    you can mark link as external
    // external: true
    */

    title: 'Dashboard',

    // icon class
    // icon: 'fa fa-user',
    // or custom icon
    icon: {
      element: 'i',
      class: 'fa fa-columns',
      attributes: {},
      text: '',
    },
    // child: []
    // disabled: true
    // class: ''
    // attributes: {}
    // exactPath: true // match path only (ignore query and hash)
    // alias: '/path' // or array of paths (for advanced matching patterns see: https://github.com/pillarjs/path-to-regexp/tree/v1.7.0#parameters)
    // hidden: false
    // hiddenOnCollapse: true
  },
  {
    href: '/',
    /* with vue-router you can use :to prop
    href: { path: '/' }
    you can mark link as external
    // external: true
    */

    title: 'AutoScheduler',

    // icon class
    // icon: 'fa fa-user',
    // or custom icon
    icon: {
      element: 'i',
      class: 'fa fa-calendar',
      attributes: {},
      text: '',
    },
    // child: []
    // disabled: true
    // class: ''
    // attributes: {}
    // exactPath: true // match path only (ignore query and hash)
    // alias: '/path' // or array of paths (for advanced matching patterns see: https://github.com/pillarjs/path-to-regexp/tree/v1.7.0#parameters)
    // hidden: false
    // hiddenOnCollapse: true
  },
  {
    href: '/',
    /* with vue-router you can use :to prop
    href: { path: '/' }
    you can mark link as external
    // external: true
    */

    title: 'External Claims Form',

    // icon class
    // icon: 'fa fa-user',
    // or custom icon
    icon: {
      element: 'i',
      class: 'fa fa-calendar',
      attributes: {},
      text: '',
    },
    // child: []
    // disabled: true
    // class: ''
    // attributes: {}
    // exactPath: true // match path only (ignore query and hash)
    // alias: '/path' // or array of paths (for advanced matching patterns see: https://github.com/pillarjs/path-to-regexp/tree/v1.7.0#parameters)
    // hidden: false
    // hiddenOnCollapse: true
  },
  {
    href: '/',
    /* with vue-router you can use :to prop
    href: { path: '/' }
    you can mark link as external
    // external: true
    */

    title: 'Portal',

    // icon class
    // icon: 'fa fa-user',
    // or custom icon
    icon: {
      element: 'i',
      class: 'fa fa-calendar',
      attributes: {},
      text: '',
    },
    // child: []
    // disabled: true
    // class: ''
    // attributes: {}
    // exactPath: true // match path only (ignore query and hash)
    // alias: '/path' // or array of paths (for advanced matching patterns see: https://github.com/pillarjs/path-to-regexp/tree/v1.7.0#parameters)
    // hidden: false
    // hiddenOnCollapse: true
  },
  {
    href: '/',
    /* with vue-router you can use :to prop
    href: { path: '/' }
    you can mark link as external
    // external: true
    */

    title: 'Property Inspection Form',

    // icon class
    // icon: 'fa fa-user',
    // or custom icon
    icon: {
      element: 'i',
      class: 'fa fa-bookmark',
      attributes: {},
      text: '',
    },
    badge: {
      text: 'new',
      class: 'vsm--badge_default',
      // attributes: {}
      // element: 'span'
    },
    // child: []
    // disabled: true
    // class: ''
    // attributes: {}
    // exactPath: true // match path only (ignore query and hash)
    // alias: '/path' // or array of paths (for advanced matching patterns see: https://github.com/pillarjs/path-to-regexp/tree/v1.7.0#parameters)
    // hidden: false
    // hiddenOnCollapse: true
  },
  {
    component: MenuDivider,
  },
  {
    href: '/disabled',
    title: 'Disabled page',
    icon: 'fa fa-lock',
    disabled: true,
    hidden: true,
  },
  // component item
  {
    // component: componentName
    // props: componentProps
    // hidden: false
    // hiddenOnCollapse: true
  },
])

export default {
  menu,
  title,
}
