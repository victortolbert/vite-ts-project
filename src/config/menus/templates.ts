export const templatesMenu = [
  {
    title: 'Layouts',
    hidden: false,
    child: [
      {
        title: 'Base',
        href: '/hancock/base-layout-template',
        external: false,
      },
      {
        title: 'PIF',
        href: '/hancock/components/pif-layout',
        external: false,
      },
    ],
  },
  {
    title: 'Common',
    class: 'text-vue-three',
    hiddenOnCollapse: false,
    hidden: false,
    child: [
      {
        title: 'Directional Camera Wrapper',
        href: '/hancock/components/directional-camera-wrapper-template',
        hidden: true,
      },
      {
        title: 'Directional Numeric Wrapper',
        href: '/hancock/components/directional-numeric-wrapper-template',
        hidden: true,
      },
      {
        title: 'Boolean',
        href: '/hancock/components/boolean-template',
        hidden: true,
      },
      {
        title: 'Boolean Wrapper',
        href: '/hancock/components/boolean-wrapper-template',
        hidden: true,
      },
      {
        title: 'Boolean Camera Wrapper',
        href: '/hancock/components/boolean-camera-wrapper-template',
        hidden: true,
      },
      {
        title: 'Camera',
        href: '/hancock/components/camera-template',
        hidden: true,
      },
      {
        title: 'Canvas Button',
        href: '/hancock/components/canvas-button-template',
        hidden: true,
      },
      {
        title: 'Checkbox',
        href: '/hancock/components/checkbox-template',
        hidden: true,
      },
      {
        title: 'Checkbox Camera Wrapper',
        href: '/hancock/components/checkbox-camera-wrapper-template',
        hidden: true,
      },
      {
        title: 'Checkbox Wrapper',
        href: '/hancock/components/checkbox-wrapper-template',
        hidden: true,
      },
      {
        title: 'Key Pad',
        href: '/hancock/components/key-pad',
        hidden: true,
      },
      {
        title: 'Numeric',
        href: 'Numeric Template',
      },
      {
        title: 'Numeric Camera Wrapper',
        href: '/hancock/components/numeric-camera-wrapper-template',
        hidden: true,
      },
      {
        title: 'Numeric Wrapper',
        href: '/hancock/components/numeric-wrapper-template',
        hidden: true,
      },
      {
        title: 'Photo',
        href: '/hancock/components/photo-template',
        hidden: true,
      },
      {
        title: 'Textbox',
        href: '/hancock/components/textbox-template',
        hidden: true,
      },
      {
        title: 'Textbox Camera Wrapper',
        href: '/hancock/components/textbox-camera-wrapper-template',
        hidden: true,
      },
      {
        title: 'Textbox Wrapper',
        href: '/hancock/components/textbox-wrapper-template',
        hidden: true,
      },
    ],
  },
  {
    title: 'Pages',
    class: 'text-vue-three',
    hiddenOnCollapse: false,
    hidden: false,
    child: [
      {
        title: 'Home',
        href: '/hancock/components/home',
        hidden: true,
        external: false,
      },
      {
        title: 'Authorization',
        external: false,
        child: [
          {
            title: 'Access Denied',
            href: '/hancock/components/access-denied',
            hidden: true,
          },
        ],
      },
      {
        title: 'Error',
        href: '/hancock/components/error',
        hidden: true,
        external: false,
      },
      {
        title: 'Privacy',
        href: '/hancock/components/privacy',
        hidden: true,
        external: false,
      },
    ],
  },
  {
    title: 'Sections',
    class: 'text-vue-three',
    hiddenOnCollapse: false,
    hidden: false,
    child: [
      {
        title: 'Main',
        href: 'main-section-template',
      },
      {
        title: 'Interior',
        href: 'interior-section-template',
      },
      {
        title: 'Elevation',
        href: '/hancock/components/elevation-section-template',
        hidden: true,
        external: false,
      },
      {
        title: 'Roof',
        href: 'roof-section-template',
      },
      {
        title: 'Roof Damage Items',
        href: 'roof-damage-items-section-template',
      },
    ],
  },
  {
    title: 'Modals',
    class: 'text-vue-three',
    hiddenOnCollapse: false,
    hidden: false,
    child: [
      {
        title: 'Asset Viewer',
        href: '/hancock/components/asset-viewer-modal',
        hidden: true,
      },
      {
        title: 'Create Asset',
        href: '/hancock/components/create-asset-modal',
        hidden: true,
      },
      {
        title: 'Delete',
        href: '/hancock/components/delete-modal',
        hidden: true,
      },
      {
        title: 'Delete Asset',
        href: '/hancock/components/delete-asset-modal',
        hidden: true,
      },
      {
        title: 'Delete Section',
        href: '/hancock/components/delete-section-modal',
        hidden: true,
      },
      {
        title: 'Edit',
        href: '/hancock/components/edit-modal',
        hidden: true,
      },
      {
        title: 'Edit Asset',
        href: '/hancock/components/edit-asset-modal',
        hidden: true,
      },
      {
        title: 'PIF',
        href: '/hancock/components/pif-form-modal',
        hidden: true,
      },
      {
        title: 'Recover Asset',
        href: '/hancock/components/recover-asset-modal',
        hidden: true,
      },
      {
        title: 'Reports',
        href: '/hancock/components/reports-modal',
        hidden: true,
      },
      {
        title: 'Send Asset',
        href: '/hancock/components/send-asset-modal',
        hidden: true,
      },
      {
        title: 'Unauthorized',
        href: '/hancock/components/unauthorized-modal',
        hidden: true,
      },
      {
        title: 'Upload',
        href: '/hancock/components/upload-modal',
        hidden: true,
      },
      {
        title: 'Upload Validation',
        href: '/hancock/components/upload-validation-modal',
        hidden: true,
      },
    ],
  },
  {
    title: 'Other Patterns',
    class: 'text-vue-three',
    hiddenOnCollapse: false,
    hidden: false,
    child: [
      {
        title: 'PDF Compression',
        href: '/hancock/components/pdf-compression',
        hidden: true,
      },
      {
        title: 'PIF Admin Header',
        href: '/hancock/components/pifa-header-template',
        hidden: true,
      },
      {
        title: 'PIF Header',
        href: '/hancock/components/pif-header-template',
        hidden: true,
      },
      {
        title: 'Project Details',
        href: '/hancock/components/project-details-template',
        hidden: true,
      },
      {
        title: 'Service Tech List',
        href: '/hancock/components/service-tech-list-template',
        hidden: true,
      },
      {
        title: 'Slider',
        href: '/hancock/components/slider-template',
        hidden: true,
      },
      {
        title: 'Unauthorized',
        href: '/hancock/components/unauthorized',
        hidden: true,
      },
      {
        title: 'Create Custom Asset',
        href: '/hancock/components/create-custom-asset',
        hidden: true,
      },
      {
        title: 'Create PDF Header',
        href: '/hancock/components/create-pdf-header',
        hidden: true,
      },
    ],
  },
  {
    title: 'Emails',
    class: 'text-vue-three',
    hiddenOnCollapse: false,
    hidden: false,
    child: [
      {
        title: 'Liberty Asset',
        href: '/hancock/components/liberty-asset',
        hidden: true,
        external: false,
      },
      {
        title: 'PDF Compression',
        href: '/hancock/components/pdf-compression',
        hidden: true,
        external: false,
      },
      {
        title: 'Send Asset',
        href: '/hancock/components/send-asset',
        hidden: true,
      },
    ],
  },
  {
    title: 'Help',
    class: 'text-vue-three',
    hiddenOnCollapse: false,
    child: [
      {
        title: 'Table of Contents',
        href: '/hancock/components/toc',
        hidden: true,
        external: false,
      },
      {
        title: 'Asset Grid',
        href: '/hancock/components/asset-grid',
        hidden: true,
        external: false,
      },
      {
        title: 'Asset Grid Toolbar',
        href: '/hancock/components/asset-grid-toolbar',
        hidden: true,
        external: false,
      },
      {
        title: 'Glossary',
        href: '/hancock/components/glossary',
        hidden: true,
        external: false,
      },
      {
        title: 'How-to',
        href: '/hancock/components/how-to',
        hidden: true,
        external: false,
      },
      {
        title: 'PIF Admin Layout',
        href: '/hancock/components/pifa-layout',
        hidden: true,
        external: false,
      },
    ],
  },
];
