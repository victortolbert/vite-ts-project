export const vueMenu = [
  {
    title: 'Vue 3',
    icon: 'fab fa-vuejs',
    class: 'text-vue-three',
    hidden: false,
    hiddenOnCollapse: false,
    child: [
      {
        title: 'Layout',
        href: '/layout',
        external: false,
        hidden: false,
      },
      {
        title: 'Charts',
        href: '/charts',
        external: false,
        hidden: false,
      },
      {
        title: 'Grids',
        href: '/grids',
        external: false,
        hidden: false,
        badge: {
          text: 'new',
          class: 'vsm--badge_default',
          attributes: {},
          element: 'span',
        }
      },
      {
        title: 'Motion',
        href: '/motion',
        external: false,
        hidden: false,
      },
      {
        title: 'Navigation',
        href: '/navigation',
        external: false,
        hidden: false,
      },
      {
        title: 'Forms',
        href: '/forms',
        external: false,
        hidden: false,
      },
    ],
  }
]
