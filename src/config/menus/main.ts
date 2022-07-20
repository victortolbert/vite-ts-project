export const mainMenu = [
  {
    header: 'Main',
    attributes: {},
    class: 'mt-4',
    hidden: false,
    hiddenOnCollapse: true,
  },
  {
    title: 'Reports',
    href: '/reports',
    icon: 'fad fa-file-contract',
    hidden: false,
    external: false,
  },
  {
    title: 'Inbox',
    href: '/inbox',
    icon: 'fad fa-inbox',
    hidden: false,
    external: false,
  },
  {
    title: 'Scratchpad',
    href: '/scratch',
    icon: 'fad fa-lightbulb-on',
    hidden: false,
    external: false,
  },
  {
    title: 'Archive',
    href: '/archive',
    icon: 'fad fa-archive',
    hidden: false,
    external: false,
  },
  {
    title: 'Composables',
    href: '/composables',
    icon: 'fad fa-function',
    hidden: true,
    external: false,
  },
  {
    title: 'Resources',
    href: '/resources',
    icon: 'fad fa-books',
    hidden: false,
    external: false,
  },

  {
    title: 'Layout',
    icon: 'fad fa-swatchbook',
    href: '/layout',
    hidden: false,
    child: [
      {
        title: '24 Columm CSS Grid',
        href: '/css-grid',
        external: false,
        hidden: false,
      },
    ],
  },
  {
    title: 'Web Components',
    icon: 'fad fa-atom-alt',
    hidden: true,
    child: [
      {
        title: 'Hancock Claims',
        icon: 'fad fa-building',
        child: [
          {
            title: 'Dashboard',
            href: '/dashboard',
            icon: 'fad fa-analytics',
            external: false,
            hidden: true,
          },
          {
            title: 'Billing',
            href: '/billing',
            icon: 'fad fa-credit-card',
            external: false,
            hidden: true,
          },
          {
            title: 'Claims',
            href: '/claims',
            icon: 'fad fa-credit-card',
            external: false,
            hidden: true,
          },
          {
            title: 'Customers',
            href: '/customers',
            icon: 'fad fa-building',
            external: false,
            hidden: true,
          },

          {
            title: 'Projects',
            icon: 'fad fa-folders',
            child: [
              {
                title: 'Projects List',
                href: '/projects',
                icon: 'fad fa-list',
                external: false,
                hidden: true,
              }
            ]
          },
          {
            title: 'Users',
            href: '/users',
            icon: 'fad fa-users',
            external: false,
            hidden: true,
          },
          {
            title: 'Reports',
            href: '/reports',
            icon: 'fad fa-users',
            external: false,
            hidden: true,
          },
          {
            title: 'Auto Scheduler',
            href: '/autoscheduler',
            icon: 'fad fa-calendar-star',
            external: false,
            hidden: true,
          },
          {
            title: 'Property Inspection',
            href: '/properties/1/inspection',
            icon: 'fad fa-laptop-house',
            external: false,
            hidden: true,
          },
        ]
      },
      {
        title: 'Books',
        href: '/books',
        icon: 'fad fa-book-heart',
        external: false,
        hidden: true,
      },
      {
        title: 'Calendar',
        href: '/calendar',
        icon: 'fad fa-calendar-alt',
        external: false,
        hidden: true,
      },
      {
        title: 'Events',
        href: '/events',
        icon: 'fad fa-ticket',
        external: false,
        hidden: true,
      },
      {
        title: 'Messages',
        href: '/messages',
        icon: 'fad fa-credit-card',
        external: false,
        hidden: true,
      },
      {
        title: 'Movies',
        href: '/movies',
        icon: 'fad fa-camera-movie',
        external: false,
        hidden: true,
      },
      {
        title: 'Music',
        href: '/music',
        icon: 'fad fa-cassette-tape',
        external: false,
        hidden: true,
      },
      {
        title: 'Plants',
        href: '/plants',
        icon: 'fad fa-seedling',
        external: false,
        hidden: true,
      },
    ],
  },
  {
    title: 'Bootstrap',
    href: '/style',
    icon: 'fab fa-bootstrap',
    external: false,
    hidden: true,
  },
  {
    title: 'Kendo UI',
    href: '/style',
    icon: 'fab fa-vuejs',
    external: false,
    hidden: true,
  },
]
