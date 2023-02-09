export const productsMenu = [
  {
    title: 'Products',
    class: 'text-vue-three',
    hidden: false,
    hiddenOnCollapse: false,
    child: [
      {
        title: 'Service Type List',
        href: '/service-types',
        external: false,
        hidden: false,
      },
      {
        title: 'Add Service Type',
        href: '/service-types/create',
        external: false,
        hidden: false,
      },
    ],
  },
];
