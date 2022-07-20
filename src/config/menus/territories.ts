export const territoriesMenu = [
  {
    title: 'Territories (Regions)',
    class: 'text-vue-three',
    href: '/hancock/territories',
    hidden: false,
    hiddenOnCollapse: false,
    child: [
      {
        title: 'Territories List',
        href: '/hancock/territories',
        external: false,
        hidden: true,
      },
      {
        title: 'Add Territory',
        href: '/hancock/territories/create',
        external: false,
        hidden: true,
      },
    ]
  }
]
