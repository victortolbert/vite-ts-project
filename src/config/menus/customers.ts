export const customersMenu = [
  {
    title: 'Customers',
    class: 'text-vue-three',
    hidden: false,
    hiddenOnCollapse: false,
    child: [
      {
        title: 'Customers List',
        href: '/customers',
        external: false,
        hidden: false,
      },
      {
        title: 'Add Customer',
        href: '/customers/create',
        external: false,
        hidden: false,
      },
    ],
  },
];
