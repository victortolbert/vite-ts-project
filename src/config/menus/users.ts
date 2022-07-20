export const usersMenu = [
  {
    title: 'Users',
    class: 'text-vue-three',
    hidden: false,
    hiddenOnCollapse: false,
    href: '/hancock/users',
    child: [
      {
        title: 'Users List',
        href: '/users',
        external: false,
        hidden: true,
      },
      {
        title: 'Add User',
        href: '/users/create',
        external: false,
        hidden: true,
      },
    ]
  }
]
