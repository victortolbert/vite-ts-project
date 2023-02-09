// import { markRaw } from 'vue'

// const separator = {
//   template: '<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">',
// }

export const hancockMenu = [
  {
    header: 'Main Navigation',
    hidden: false,
    hiddenOnCollapse: true,
  },
  {
    title: 'Dashboards',
    hidden: false,
    icon: 'fad fa-columns',
    child: [
      {
        title: 'My Dashboard',
        href: '/',
        hidden: false,
      },
      {
        title: 'Super Dashboard',
        href: '/Home/SuperDashboard',
        hidden: false,
      },
      {
        title: 'PIF',
        href: '/PropertyInspection/PropertyInspections/1',
        hidden: false,
      },
      {
        title: 'PIFA',
        href: '/PropertyInspection/PropertyInspections/1/admin',
        hidden: false,
      },
    ],
  },
  {
    title: 'Projects',
    hidden: false,
    icon: 'fad fa-tasks',
    child: [
      {
        title: 'Project List',
        href: '/Project',
        hidden: false,
      },
      {
        title: 'Project Assignment',
        href: '/Scheduler/Shuffle',
        hidden: false,
      },
      {
        title: 'Add Project',
        href: '/Project/CreateProject',
        hidden: false,
      },
      {
        title: 'Archived Projects',
        href: '/Project/ArchivedProjects',
        hidden: false,
      },
      {
        title: 'Closed Projects',
        href: '/Project/ClosedProjects',
        hidden: false,
      },
      {
        title: 'Upload Projects',
        href: '/Project/UploadProjects',
        hidden: false,
      },
      {
        title: 'Pending Claims',
        href: '/Project/PendingClaimsList',
        hidden: false,
      },
      {
        title: 'External Claims',
        href: '/Project/ExternalClaimsList',
        hidden: false,
      },
      {
        title: 'EagleView Projects',
        href: '/Project/EVProjects',
        hidden: false,
      },
    ],
  },
  {
    title: 'Auto Scheduler',
    href: '/Technician/AutoScheduler',
    hidden: false,
    icon: 'fad fa-calendar-star',
  },
  {
    title: 'Calendar',
    href: '/Calendar',
    hidden: false,
    icon: 'fad fa-calendar',
  },
  {
    title: 'Events',
    href: '/Events',
    hidden: false,
    icon: 'fad fa-calendar',
  },
  {
    title: 'Customers',
    hidden: false,
    icon: 'fad fa-building',
    child: [
      {
        title: 'Customer List',
        href: '/Customer',
        hidden: false,
      },
      {
        title: 'Add Customer',
        href: '/Customer/CreateInsCompany',
        hidden: false,
      },
      {
        title: 'Add Business Unit',
        href: '/Customer/CreateBusinessUnit',
        hidden: false,
      },
    ],
  },
  {
    title: 'Billing',
    href: '/Billing',
    hidden: false,
    icon: 'fad fa-credit-card',
  },
  {
    title: 'Users',
    hidden: false,
    icon: 'fad fa-users',
    child: [
      {
        title: 'User List',
        href: '/User',
        hidden: false,
      },
      {
        title: 'Bulk Assign',
        href: '/User/UserBulkAssignment',
        hidden: false,
      },
      {
        title: 'Add Application User',
        href: '/User/Create?userType=ApplicationUser',
        hidden: false,
      },
      {
        title: 'Add Service Tech',
        href: '/User/Create?userType=ServiceTech',
        hidden: false,
      },
      {
        title: 'Add Insurance Adjuster',
        href: '/User/Create?userType=InsAdjuster',
        hidden: false,
      },
    ],
  },
  {
    title: 'Reports',
    hidden: false,
    icon: 'fad fa-file-chart-line',
    child: [
      {
        title: 'Report List',
        href: '/Report',
        hidden: false,
      },
      {
        title: 'Add Report',
        href: '/Report/CreateReport',
        hidden: false,
      },
      {
        title: 'User Reports',
        href: '/Report/UserReports',
        hidden: false,
      },
    ],
  },
  {
    title: 'Settings',
    hidden: false,
    icon: 'fad fa-cog',
    child: [
      {
        title: 'Service Type List',
        href: '/ServiceType',
        hidden: false,
      },
      {
        title: 'Add Service Type',
        href: '/ServiceType/CreateServiceType',
        hidden: false,
      },
      // {
      //   component: markRaw(separator),
      // },
      {
        title: 'Announcement List',
        href: '/Announcement',
        hidden: false,
      },
      {
        title: 'Add Announcement',
        href: '/Announcement/CreateAnnouncement',
        hidden: false,
      },
      {
        title: 'FAQ List',
        href: '/Helpdesk',
        hidden: false,
      },
      {
        title: 'Territory List',
        href: '/Region',
        hidden: false,
      },
      {
        title: 'Add Service Area',
        href: '/Region/CreateServiceArea',
        hidden: false,
      },
      {
        title: 'Edit Role Permissions',
        href: '/Permission/RolePermissions',
        hidden: false,
      },
      {
        title: 'IA Firms List',
        href: '/Customer/IAFirms',
        hidden: false,
      },
      {
        title: 'Release Information',
        href: '/Announcement/ReleaseInformation',
        hidden: false,
      },
      {
        title: 'Tokens',
        href: '/Tokens',
        hidden: false,
      },
    ],
  },
]
