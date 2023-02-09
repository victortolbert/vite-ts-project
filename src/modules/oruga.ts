import Oruga from '@oruga-ui/oruga-next';
import { UserModule } from '~/@types';

// import '~/assets/css/oruga-bootstrap.css'
// import '@oruga-ui/oruga-next/dist/oruga.css'
// import '@oruga-ui/oruga-next/dist/oruga-full.css'

export const install: UserModule = ({ app }) => {
  app.use(Oruga, {
    iconPack: 'fas',
    iconComponent: 'FontAwesomeIcon',
    button: {
      override: true,
      rootClass: 'button',
      variantClass: 'is-',
      expandedClass: 'w-full',
      roundedClass: 'is-rounded',
      invertedClass: 'is-inverted',
      outlinedClass: 'is-outlined',
    },
    autocomplete: {
      override: true,
      menuClass:
        'border absolute z-10 bg-white shadow-lg rounded-md p-2 mt-2 max-h-72 overflow-auto',
      itemClass:
        'py-2 px-4 text-sm text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900',
      itemHoverClass: 'bg-gray-100',
    },
    checkbox: {
      override: true,
      rootClass: 'radio',
      labelClass: 'ml-1 text-sm font-medium text-gray-700',
      checkClass:
        'focus:ring-primary-500 h-4 w-4 rounded text-primary-600 border-gray-300',
      checkedClass: 'radio-checked',
    },
    radio: {
      override: true,
      rootClass: 'radio',
      labelClass: 'ml-1 text-sm font-medium text-gray-700',
      checkClass:
        'focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300',
      checkedClass: 'radio-checked',
    },
    field: {
      override: true,
      labelClass: 'block text-sm font-medium text-gray-700',
      messageClass: 'mt-1 text-sm text-gray-500',
      variantClassDanger: 'bg-red-500',
      variantDanger: 'bg-red-500',
      variantClass: 'text-',
    },
    input: {
      override: true,
      rootClass: 'relative',
      inputClass:
        'block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm',
      iconLeftClass:
        'absolute inset-y-0 left-0 pl-3 pointer-events-none text-gray-400',
      iconLeftSpaceClass: 'pl-10',
      iconRightClass:
        'absolute inset-y-0 right-0 pr-3 pointer-events-none text-gray-400',
      iconRightSpaceClass: 'pr-10',
      roundedClass: 'rounded-full',
      // roundedClass: 'rounded',
      variantClass: 'border-',
    },
    table: {
      override: true,
      borderedClass: 'border',
      detailedClass: 'border-red-500',
      thClass:
        'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider',
      thCheckboxClass: 'w-6',
      tdCheckboxClass: 'w-6',
      emptyClass: '',
      footerClass: '',
      hoverableClass: 'is-hoverable',
      mobileClass: '',
      mobileSortClass: '',
      narrowedClass: 'is-narrowed',
      paginationWrapperClass: 'p-8',
      scrollableClass: '',
      stickyHeaderClass: '',
      stripedClass: 'is-striped',
      tableClass: 'table min-w-full divide-y divide-gray-200',
      tdClass: 'py-2 px-6 whitespace-nowrap text-sm text-gray-500',
      tdDetailedChevronClass: '',
      tdPositionClass: '',
      tdStickyClass: '',
      thCurrentSortClass: '',
      thDetailedClass: '',
      thPositionClass: '',
      thSortIconClass: '',
      thSortableClass: '',
      thStickyClass: '',
      thUnselectableClass: '',
      trSelectedClass: 'is-selected',
      wrapperClass:
        'shadow overflow-hidden bg-white border-b border-gray-200 sm:rounded-lg',
    },
    pagination: {
      override: true,
      rootClass: 'mt-4 text-gray-600 flex items-center justify-end',
      listClass: 'ml-4 flex items-center space-x-1',
      linkClass:
        'rounded border border-gray-200 hover:border-gray-300 text-sm h-8 w-8 flex items-center justify-center',
      linkDisabledClass: 'text-gray-300',
      prevBtnClass: 'border',
      nextBtnClass: 'ml-1 border',
      linkCurrentClass: 'bg-primary-500 text-white',
      ellipsisClass: 'inline-flex',
      infoClass: 'border border-red-500',
      roundedClass: 'rounded-full',
      simpleClass: '',
      sizeClass: '',
      orderClass: '',
      mobileClass: '',
    },
    dropdown: {
      // override: true,
      rootClass: 'flex relative w-full lg:w-auto lg:inline-flex',
      disabledClass: '',
      expandedClass: '',
      inlineClass: '',
      itemActiveClass: 'bg-primary-500 text-white',
      itemClass:
        'm-1 py-1 px-4 h-11 flex items-center rounded lg:block relative lg:h-auto text-base font-normal leading-normal cursor-pointer outline-none',
      itemDisabledClass: '',
      menuActiveClass: '',
      menuClass:
        'absolute shadow left-0 mt-1 w-64 top-full block z-20 shadow p-0 bg-white',
      menuMobileOverlayClass: '',
      menuPositionClass: '',
      mobileClass: '',
      triggerClass: 'w-full lg:w-auto',
    },
    // dropdown: {
    //   menuClass: 'dropdown-menu',
    //   itemClass: 'dropdown-item',
    //   itemActiveClass: 'dropdown-item-active',
    // },
    // loading: {
    //   overlayClass: 'loading-background',
    // },
    // icon: {
    //   override: true,
    //   spinClass: 'fa-spin',
    // },
    // switch: {
    //   checkClass: 'switch',
    //   labelClass: 'switch-label',
    // },
  });
};
