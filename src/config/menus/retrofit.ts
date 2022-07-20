export const retrofitMenu = [
  {
    header: 'Base',
  },
  {
    title: 'Card',
    hidden: false,
    href: '/card',
    hiddenOnCollapse: true
  },
  {
    title: 'Form',
    hidden: false,
    href: '/form',
    hiddenOnCollapse: true
  },
  {
    title: 'Form Elements',
    hidden: false,
    href: '/form-elements',
    hiddenOnCollapse: true
  },
  {
    title: 'Input',
    hidden: false,
    href: '/input',
    hiddenOnCollapse: true
  },
  {
    title: 'Table',
    hidden: false,
    href: '/table',
    hiddenOnCollapse: true,
    child: [
      {
        title: 'Kendo UI Grid'
      },
    ]
  },
  {
    title: 'Multiselect',
    hidden: false,
    href: '/multiselect',
    hiddenOnCollapse: true
  },
  {
    title: 'App',
    hidden: true,
    child: [
      {
        title: 'Layout',
        child: [
          {
            title: 'AppLayout',
            href: '/hancock/app-layout',
            hidden: false,
          },
          {
            title: 'BaseLayout',
            href: '/hancock/base-layout',
            hidden: false,
          },
          {
            title: 'PifaLayout',
            href: '/hancock/pifa-layouts',
            hidden: false,
          },
        ]
      },
      {
        title: 'Headers',
        child: [
          {
            title: 'AppHeader',
            href: '/hancock/app-header',
            hidden: false,
          },
        ]
      },
    ]
  },
  {
    title: 'Common',
    href: '/hancock/common',
    hidden: false,
    child: [
      {
        title: 'Form Elements',
        hidden: false,
        child: [

        ]
      },
      {
        title: 'BooleanTemplate',
        href: '',
        hidden: false,
      },

      {
        title: 'CameraTemplate',
        href: '',
        hidden: false,
      },
      {
        title: 'CheckboxTemplate',
        href: '',
        hidden: false,
      },
      {
        title: 'NumericTemplate',
        href: '',
      },
      {
        title: 'KeyPad',
        href: '',
      },
    ]
  },
  {
    title: 'Areas',
    hidden: false,
    child: [
      {
        title: 'Dashboard',
        href: '/hancock/dashboard',
        hidden: false,
      },
      {
        title: 'Auto Scheduler',
        href: '/hancock/autoscheduler',
        hidden: true,
      },
      {
        title: 'Billing',
        href: '/hancock/billing',
        hidden: true,
      },
      {
        title: 'Calendar',
        href: '/hancock/calendar',
        hidden: true,
      },
      {
        title: 'Companies',
        href: '/hancock/companies',
        hidden: true,
      },
      {
        title: 'Projects',
        href: '/hancock/projects',
        hidden: true,
      },
      {
        title: 'Properties',
        href: '/hancock/properties',
        hidden: true,
      },
      {
        title: 'Property Inspections',
        href: '/hancock/inspections',
        hidden: true,
        hiddenOnCollapse: true,
        child: [
          {
            title: 'BaseLayoutTemplate',
            href: '',
            hidden: false,
          },
          {
            title: 'BooleanCameraWrapperTemplate',
            href: '',
            hidden: false,
          },
          {
            title: 'BooleanWrapperTemplate',
            href: '',
            hidden: false,
          },
          {
            title: 'CanvasButtonTemplate',
            href: '',
            hidden: false,
          },
          {
            title: 'CheckboxCameraWrapperTemplate',
            href: '',
            hidden: false,
          },
          {
            title: 'CheckboxWrapperTemplate',
            href: '',
            hidden: false,
          },

          {
            title: 'DirectionalCameraWrapperTemplate',
            href: '',
            hidden: false,
          },
          {
            title: 'DirectionalNumericWrapperTemplate',
            href: '',
            hidden: false,
          },
          {
            title: 'EditAssetModal',
            href: '',
            hidden: false,
          },
          {
            title: 'ElevationSectionTemplate',
            href: '',
            hidden: false,
          },
          {
            title: 'InteriorSectionTemplate',
            href: '',
          },

          {
            title: 'MainSectionTemplate',
            href: '',
          },

          {
            title: 'NumericCameraWrapperTemplate',
            href: '',
          },
          {
            title: 'NumericWrapperTemplate',
            href: '',
          },
          {
            title: 'PhotoTemplate',
            href: '',
          },
          {
            title: 'PifaHeaderTemplate',
            href: '',
          },
          {
            title: 'PifFormModal',
            href: '',
          },
          {
            title: 'PifHeader',
            href: '',
          },
          {
            title: 'ProjectDetailsTemplate',
            href: '',
          },
          {
            title: 'RecoverAssetModal',
            href: '',
          },

          {
            title: 'RoofDamageItemsSectionTemplate',
            href: '',
          },
          {
            title: 'RoofSectionTemplate',
            href: '',
          },
          {
            title: 'SendAssetModal',
            href: '',
          },
          {
            title: 'SliderTemplate',
            href: '',
          },
          {
            title: 'TextboxCameraWrapperTemplate',
            href: '',
          },
          {
            title: 'TextboxTemplate',
            href: '',
          },
          {
            title: 'TextboxWrapperTemplate',
            href: '',
          },
          {
            title: 'Unauthorized',
            href: '',
          },

        ]
      },
      {
        title: 'Reports',
        href: '/hancock/reports',
        hidden: true,
      },
      {
        title: 'Service Types',
        href: '/hancock/service-types',
        hidden: false,
        child: [
          {
            title: 'Data Table View',
            href: '/hancock/service-types/table-view',
          },
          {
            title: 'Card Grid View',
            href: '/hancock/service-types/card-view',
          },
          {
            title: 'Edit Service Type',
            href: '/hancock/service-types/create',
          },
        ]
      },
      {
        title: 'Settings',
        href: '/hancock/settings',
        hidden: true,
      },
      {
        title: 'Technicians',
        hidden: true,
        child: [
          {
            title: 'ServiceTechListTemplate',
            href: '',
          },
        ]
      },
      {
        title: 'Users',
        href: '/hancock/users',
        hidden: true,
      },
    ]
  },
  {
    title: 'Static Pages',
    hidden: true,
    child: [
      {
        title: 'Home',
        href: '/hancock',
        hidden: false,
      },
      {
        title: 'Error',
        href: '/hancock/error',
        hidden: true,
      },
      {
        title: 'Privacy',
        href: '/hancock/privacy',
        hidden: false,
      },
      {
        title: 'Authorization',
        hidden: false,
        child: [
          {
            title: 'AccessDenied',
            href: '/hancock/access-denied',
          }
        ]
      },
    ]
  },
  {
    title: 'Grids',
    href: '/hancock/grids',
    hidden: true,
    child: [
      {
        title: 'AssetGridDetails',
        href: '/hancock/assets/',
        hidden: false,
      },
      {
        title: 'AssetGridHeader',
        href: '/hancock/assets',
        hidden: false,
      },
      {
        title: 'AssetGridIcons',
        href: '/hancock/assets',
        hidden: false,
      },
      {
        title: 'AssetGridMenuTemplate',
        href: '/hancock/assets',
        hidden: false,
      },
      {
        title: 'AssetGridRow',
        href: '/hancock/assets',
        hidden: false,
      },
      {
        title: 'AssetGridSubMenu',
        href: '/hancock/assets',
        hidden: false,
      },
      {
        title: 'AssetGridTemplate',
        href: '',
        hidden: false,
      },
      {
        title: 'AssetUploadTemplate',
        href: '',
        hidden: false,
      },

      {
        title: 'AssetViewerTemplate',
        href: '',
        hidden: false,
      },

    ]
  },
  {
    title: 'Emails',
    hidden: true,
    child: [
      {

        title: 'LibtyAssetEmail',
        href: '/hancock/emails/liberty-asset',
        hidden: false,
      },
      {

        title: 'PdfCompression',
        href: '/hancock/emails/pdf-compression',
        hidden: false,
      },
      {

        title: 'SendAsset',
        href: '/hancock/emails/send-asset',
        hidden: false,
      },
    ]
  },
  {
    title: 'Forms',
    hidden: true,
    child: [
      {
        title: 'CreateCustomAsset',
        href: '',
        hidden: false,
      },
      {
        title: 'CreatePdfHeader',
        href: '',
        hidden: false,
      },
      {
        title: 'External Claims',
        href: '',
        hidden: false,
      },
      {
        title: 'External Payments',
        href: '/hancock/payments',
        hidden: false,
      },
    ]
  },
  {
    title: 'Help',
    href: '/hancock/help',
    hidden: false,
    child: [
      {
        title: 'AssetGrid',
        href: '/hancock/help',
        hidden: true,
      },
      {
        title: 'AssetGridToolbar',
        href: '/hancock/help',
        hidden: true,
      },
      {
        title: 'Glossary',
        href: '/hancock/glossary',
        hidden: false,
      },
      {
        title: 'HowTo',
        href: '/hancock/help',
        hidden: true,
      },
      {
        title: 'Toc',
        hidden: true,
      },
    ]
  },
  {
    title: 'Modals',
    href: '/hancock/modals',
    hidden: true,
    child: [
      {
        title: 'AssetViewerModal',
        href: '',
        hidden: false,
      },
      {
        title: 'CreateAssetModal',
        href: '',
        hidden: false,
      },
      {
        title: 'DeleteAssetModal',
        href: '',
        hidden: false,
      },
      {
        title: 'DeleteSectionModal',
        href: '',
        hidden: false,
      },
      {
        title: 'DeleteModal',
        href: '/hancock/modals/delete',
        hidden: false,
      },
      {
        title: 'EditTemplate',
        href: '/hancock/modals/edit',
        hidden: false,
      },
      {
        title: 'ReportsModal',
        href: '',
      },
      {
        title: 'UnauthorizedModal',
        href: '/hancock/modals/unauthorized',
        hidden: false,
      },
      {
        title: 'UploadModal',
        href: '/hancock/modals/upload',
        hidden: false,
      },
      {
        title: 'UploadValidationModal',
        href: '/hancock/modals/upload-validation',
        hidden: false,
      },
    ]
  },
]
