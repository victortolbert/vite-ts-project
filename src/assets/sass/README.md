# CSS Custom Properties

**Full Calendar**

```css
:root {
  --fc-border-color: black;
  --fc-daygrid-event-dot-width: 5px;
  --fc-small-font-size: 0.85em;
  --fc-page-bg-color: #fff;
  --fc-neutral-bg-color: rgba(208, 208, 208, 0.3);
  --fc-neutral-text-color: #808080;
  --fc-border-color: #ddd;
  --fc-button-text-color: #fff;
  --fc-button-bg-color: var(--color-primary);
  --fc-button-border-color: var(--color-primary);
  --fc-button-hover-bg-color: theme('colors.primary.600');
  --fc-button-hover-border-color: theme('colors.primary.600');
  --fc-button-active-bg-color: theme('colors.primary.700');
  --fc-button-active-border-color: theme('colors.primary.700');
  --fc-event-bg-color: var(--color-primary);
  --fc-event-border-color: var(--color-primary);
  --fc-event-text-color: #fff;
  --fc-event-selected-overlay-color: rgba(0, 0, 0, 0.25);
  --fc-event-resizer-thickness: 8px;
  --fc-event-resizer-dot-total-width: 8px;
  --fc-event-resizer-dot-border-width: 1px;
  --fc-non-business-color: rgba(215, 215, 215, 0.3);
  --fc-bg-event-color: rgb(143, 223, 130);
  --fc-bg-event-opacity: 0.3;
  --fc-highlight-color: rgba(188, 232, 241, 0.3);
  --fc-today-bg-color: rgba(255, 220, 40, 0.15);
  --fc-today-bg-color: theme('colors.secondary.100');
  --fc-now-indicator-color: red;

  /* Full Calendar Daygrid */
  --fc-daygrid-event-dot-width: 8px;

  /* Full Calendar Event dot */
  --fc-list-event-dot-width: 10px;
  --fc-list-event-hover-bg-color: #f5f5f5;
}
```

**Oruga**

```
inputClasses

itemClass
itemHoveredClass
itemDisabledClass
openedTopClass
expandedClass
menuClass
rootClass
appendToBody
iconRightClickable
iconRight
debounceTyping
clearable
keepOpen
openOnFocus
clearOnSelect
keepFirst
rounded
```

```css
@import '~@oruga-ui/oruga/dist/oruga-full-vars.css';

:root {
  /* Oruga */
  --oruga-variant-primary: theme('colors.primary.500');
  --oruga-variant-secondary: theme('colors.secondary.500');
  --oruga-variant-danger: var(--color-danger);
  --oruga-button-background-color: transparent;

  --oruga-base-border-radius: theme('borderRadius.lg');
  --oruga-color-primary: theme('colors.primary.500');
  --oruga-color-primary-invert: theme('colors.white');
  --oruga-color-secondary: var(--color-raven);
  --oruga-color-danger: var(--color-danger);
  --oruga-color-warning: var(--color-warning);
  --oruga-color-success: var(--color-success);
  --oruga-color-info: var(--color-info);

  --oruga-checkbox-active-background-color: theme('colors.primary.500');
  --oruga-dropdown-item-background-active: theme('colors.primary.500');
  --oruga-pagination-link-current-background-color: theme('colors.primary.500');
  --oruga-pagination-link-current-border-color: theme('colors.primary.500');
  --oruga-radio-active-background-color: theme('colors.primary.500');
  --oruga-select-border-color: theme('colors.gray.300');
  --oruga-select-border-width: 1px;
  --oruga-select-arrow-size: 0.75em;

  /*
    --oruga-select-border-radius
    --oruga-select-rounded-border-radius
    --oruga-select-box-shadow
    --oruga-select-color
    --oruga-select-height
    --oruga-select-line-height
    --oruga-select-padding
    --oruga-select-arrow-size
    --oruga-select-icon-zindex
  */

  --oruga-sidebar-content-background-color: theme('colors.gray.50');
  --oruga-sidebar-width: 450px;
  --oruga-steps-active-color: theme('colors.primary.500');
  --oruga-steps-previous-color: theme('colors.primary.500');

  --oruga-tooltip-background-color: theme('colors.primary.500');

  /*
    --oruga-autocomplete-item-color
    --oruga-autocomplete-item-disabled-opacity
    --oruga-autocomplete-item-font-size
    --oruga-autocomplete-item-hover-background-color
    --oruga-autocomplete-item-hover-color
    --oruga-autocomplete-item-line-height
    --oruga-autocomplete-item-padding
    --oruga-autocomplete-menu-background
    --oruga-autocomplete-menu-border-radius
    --oruga-autocomplete-menu-box-shadow
    --oruga-autocomplete-menu-margin
    --oruga-autocomplete-menu-max-height
    --oruga-autocomplete-menu-padding
    --oruga-autocomplete-menu-zindex
  */

  /*
    --oruga-button-background-color
    --oruga-button-border-radius
    --oruga-button-border
    --oruga-button-box-shadow
    --oruga-button-color
    --oruga-button-font-size
    --oruga-button-font-weight
    --oruga-button-line-height
    --oruga-button-margin-border-to-icon
    --oruga-button-margin-icon-to-text
    --oruga-button-icon-width
    --oruga-button-margin
    --oruga-button-height
    --oruga-button-padding
    --oruga-button-rounded-border-radius
    --oruga-button-disabled-opacity
  */

  /*
    --oruga-checkbox-active-background-color
    --oruga-checkbox-background-color
    --oruga-checkbox-border-color
    --oruga-checkbox-border-radius
    --oruga-checkbox-border-width
    --oruga-checkbox-checked-box-shadow-color
    --oruga-checkbox-checked-box-shadow-length
    --oruga-checkbox-checked-box-shadow-opacity
    --oruga-checkbox-checkmark-color
    --oruga-checkbox-disabled-opacity
    --oruga-checkbox-focus-sibiling-box-shadow
    --oruga-checkbox-label-padding
    --oruga-checkbox-margin-sibiling
    --oruga-checkbox-size
    --oruga-checkbox-line-height
  */

  /*
    --oruga-dropdown-disabled-opacity
    --oruga-dropdown-item-background-active
    --oruga-dropdown-item-color-active
    --oruga-dropdown-item-color
    --oruga-dropdown-item-disabled-opacity
    --oruga-dropdown-item-font-size
    --oruga-dropdown-item-hover-background-color
    --oruga-dropdown-item-hover-color
    --oruga-dropdown-item-line-height
    --oruga-dropdown-item-padding
    --oruga-dropdown-item-font-weight
    --oruga-dropdown-menu-background
    --oruga-dropdown-menu-border-radius
    --oruga-dropdown-menu-box-shadow
    --oruga-dropdown-menu-margin
    --oruga-dropdown-menu-padding
    --oruga-dropdown-menu-width
    --oruga-dropdown-menu-zindex
    --oruga-dropdown-mobile-breakpoint
    --oruga-dropdown-mobile-max-height
    --oruga-dropdown-mobile-max-width
    --oruga-dropdown-mobile-overlay-color
    --oruga-dropdown-mobile-overlay-zindex
    --oruga-dropdown-mobile-width
    --oruga-dropdown-mobile-zindex
  */

  /*
    --oruga-field-label-color
    --oruga-field-label-font-size
    --oruga-field-label-font-weight
    --oruga-field-margin-bottom
    --oruga-field-message-font-size
    --oruga-field-message-margin-top
    --oruga-field-horizontal-breakpoint
    --oruga-field-horizontal-label-margin
  */

  /*
    --oruga-icon-spin-duration
  */

  /*
    --oruga-input-control-icon-zindex
    --oruga-input-control-icon-color
    --oruga-input-counter-font-size
    --oruga-input-counter-margin
    --oruga-input-height
    --oruga-input-line-height
    --oruga-input-margin
    --oruga-input-max-width
    --oruga-input-padding
    --oruga-input-textarea-max-height
    --oruga-input-textarea-min-height
    --oruga-input-textarea-padding
    --oruga-input-width
  */

  /*
    --oruga-loading-background-legacy
    --oruga-loading-background
    --oruga-loading-fullpage-icon-size
    --oruga-loading-icon-size
    --oruga-loading-zindex
  */

  /*
    --oruga-modal-content-background-color
    --oruga-modal-content-padding
    --oruga-modal-content-border-radius
    --oruga-modal-background-background-color
    --oruga-modal-close-border-radius
    --oruga-modal-close-height
    --oruga-modal-close-right
    --oruga-modal-close-top
    --oruga-modal-close-width
    --oruga-modal-content-fullscreen-background-color
    --oruga-modal-content-max-height
    --oruga-modal-content-margin
    --oruga-modal-mobile-breakpoint
    --oruga-modal-zindex
  */

  /*
    --oruga-pagination-disabled-opacity
    --oruga-pagination-ellipsis-color
    --oruga-pagination-font-size
    --oruga-pagination-link-border-color
    --oruga-pagination-link-border-radius
    --oruga-pagination-link-border
    --oruga-pagination-link-color
    --oruga-pagination-link-current-background-color
    --oruga-pagination-link-current-border-color
    --oruga-pagination-link-current-color
    --oruga-pagination-link-height
    --oruga-pagination-link-hover-border-color
    --oruga-pagination-link-hover-color
    --oruga-pagination-link-line-height
    --oruga-pagination-link-margin
    --oruga-pagination-link-min-width
    --oruga-pagination-margin
    --oruga-pagination-mobile-breakpoint
    --oruga-pagination-rounded-border-radius
  */

  /*
    --oruga-radio-active-background-color
    --oruga-radio-border
    --oruga-radio-checked-box-shadow-color
    --oruga-radio-checked-box-shadow-length
    --oruga-radio-checked-box-shadow-opacity
    --oruga-radio-disabled-opacity
    --oruga-radio-focus-sibiling-box-shadow
    --oruga-radio-label-padding
    --oruga-radio-margin-sibiling
    --oruga-radio-size
    --oruga-radio-line-height
  */

  /*
    --oruga-select-background-color
    --oruga-select-border-color
    --oruga-select-border-width
    --oruga-select-border-style
    --oruga-select-border-radius
    --oruga-select-box-shadow
    --oruga-select-color
    --oruga-select-control-icon-zindex
    --oruga-select-control-icon-color
    --oruga-select-empty-color
    --oruga-select-font-size
    --oruga-select-height
    --oruga-select-line-height
    --oruga-select-margin
    --oruga-select-max-width
    --oruga-select-optgroup-color
    --oruga-select-optgroup-font-style
    --oruga-select-optgroup-font-weight
    --oruga-select-optgroup-padding
    --oruga-select-option-color
    --oruga-select-option-disabled-opacity
    --oruga-select-option-padding
    --oruga-select-padding
  */

  /*
    --oruga-sidebar-background
    --oruga-sidebar-box-shadow
    --oruga-sidebar-content-background-color
    --oruga-sidebar-mobile-breakpoint
    --oruga-sidebar-mobile-width
    --oruga-sidebar-width
    --oruga-sidebar-zindex
  */

  /*
    --oruga-skeleton-background
    --oruga-skeleton-border-radius
    --oruga-skeleton-duration
    --oruga-skeleton-margin
  */

  /*
    --oruga-slider-background
    --oruga-slider-focus-margin
    --oruga-slider-focus-padding
    --oruga-slider-margin
    --oruga-slider-mark-size
    --oruga-slider-radius
    --oruga-slider-rounded-borded-radius
    --oruga-slider-thumb-background
    --oruga-slider-thumb-border
    --oruga-slider-thumb-disabled-transform
    --oruga-slider-thumb-radius
    --oruga-slider-thumb-shadow
    --oruga-slider-thumb-to-track-ratio
    --oruga-slider-thumb-transform
    --oruga-slider-tick-background
    --oruga-slider-tick-radius
    --oruga-slider-tick-to-track-ratio
    --oruga-slider-tick-width
    --oruga-slider-track-background
    --oruga-slider-track-border-radius
    --oruga-slider-track-border
    --oruga-slider-track-disabled
    --oruga-slider-track-radius
    --oruga-slider-track-shadow
  */

  /*
    --oruga-steps-details-background-color
    --oruga-steps-details-padding
    --oruga-steps-maker-default-background
    --oruga-steps-maker-default-color
    --oruga-steps-marker-default-border
    --oruga-steps-maker-font-weight
    --oruga-steps-marker-rounded-border-radius
    --oruga-steps-default-color
    --oruga-steps-previous-color
    --oruga-steps-active-color
    --oruga-steps-divider-height
    --oruga-steps-vertical-padding
    --oruga-steps-mobile-max-width
    --oruga-steps-item-line-height
    --oruga-steps-link-color
    --oruga-steps-content-padding
    --oruga-steps-details-title-font-weight
  */

  /*
    --oruga-switch-active-background-color-opacity
    --oruga-switch-active-background-color
    --oruga-switch-active-box-shadow-color
    --oruga-switch-active-box-shadow-length
    --oruga-switch-active-box-shadow-opacity
    --oruga-swtich-action-background
    --oruga-switch-background
    --oruga-switch-border-radius
    --oruga-switch-box-shadow
    --oruga-switch-checked-box-shadow-color
    --oruga-switch-checked-box-shadow-length
    --oruga-switch-checked-box-shadow-opacity
    --oruga-switch-disabled-opacity
    --oruga-switch-hover-background-color
    --oruga-switch-hover-border-color-opacity
    --oruga-switch-hover-border-color
    --oruga-switch-label-padding
    --oruga-switch-margin-sibling
    --oruga-switch-outlined-background
    --oruga-switch-outlined-border-color-opacity
    --oruga-switch-outlined-border-color
    --oruga-switch-outlined-border-style
    --oruga-switch-outlined-border-width
    --oruga-switch-padding
    --oruga-switch-rounded-border-radius
    --oruga-switch-width-number
    --oruga-switch-width
  */

  /*
    --oruga-table-background-color
    --oruga-table-background
    --oruga-table-boder
    --oruga-table-border-radius
    --oruga-table-bordered-border-width
    --oruga-table-bordered-bottom-color
    --oruga-table-card-box-shadow
    --oruga-table-card-cell-font-weight
    --oruga-table-card-cell-padding
    --oruga-table-card-cell-text-align
    --oruga-table-card-detail-margin
    --oruga-table-card-margin
    --oruga-table-color
    --oruga-table-current-sort-border-color
    --oruga-table-current-sort-font-weight
    --oruga-table-current-sort-hover-border-color
    --oruga-table-detail-background
    --oruga-table-detail-box-shadow
    --oruga-table-detail-chevron-color
    --oruga-table-detail-chevron-width
    --oruga-table-detail-padding
    --oruga-table-focus-border-color
    --oruga-table-focus-box-shadow
    --oruga-table-hoverable-background-color
    --oruga-table-mobile-breakpoint
    --oruga-table-multi-column-reset-icon-margin
    --oruga-table-narrow-padding
    --oruga-table-row-active-background-color
    --oruga-table-row-active-color
    --oruga-table-sticky-header-height
    --oruga-table-sticky-zindex
    --oruga-table-striped-background-color
    --oruga-table-td-border-color
    --oruga-table-td-border-style
    --oruga-table-td-border-width
    --oruga-table-td-padding
    --oruga-table-th-border-color
    --oruga-table-th-border-style
    --oruga-table-th-border-width
    --oruga-table-th-checkbox-width
    --oruga-table-th-color
    --oruga-table-th-detail-width
    --oruga-table-th-font-weight
    --oruga-table-th-padding
    --oruga-table-th-wrap-icon-margin
  */

  /*
    --oruga-tabs-disabled-opacity
    --oruga-tabs-font-size
    --oruga-tabs-icon-margin
    --oruga-tabs-content-padding
    --oruga-tabs-margin-bottom
    --oruga-tabs-border-bottom-color
    --oruga-tabs-border-bottom-style
    --oruga-tabs-border-bottom-width
    --oruga-tabs-link-color
    --oruga-tabs-link-hover-border-bottom-color
    --oruga-tabs-link-hover-color
    --oruga-tabs-link-active-border-bottom-color
    --oruga-tabs-link-active-color
    --oruga-tabs-link-line-height
    --oruga-tabs-link-padding
    --oruga-tabs-boxed-link-radius
    --oruga-tabs-boxed-link-hover-background-color
    --oruga-tabs-boxed-link-hover-border-bottom-color
    --oruga-tabs-boxed-link-active-background-color
    --oruga-tabs-boxed-link-active-border-color
    --oruga-tabs-boxed-link-active-border-bottom-color
    --oruga-tabs-toggle-link-border-color
    --oruga-tabs-toggle-link-border-style
    --oruga-tabs-toggle-link-border-width
    --oruga-tabs-toggle-link-hover-background-color
    --oruga-tabs-toggle-link-hover-border-color
    --oruga-tabs-toggle-link-radius
    --oruga-tabs-toggle-link-active-background-color
    --oruga-tabs-toggle-link-active-border-color
    --oruga-tabs-toggle-link-active-color
  */

  /*
    --oruga-tooltip-arrow-margin
    --oruga-tooltip-arrow-size
    --oruga-tooltip-background-color
    --oruga-tooltip-color
    --oruga-tooltip-content-box-shadow
    --oruga-tooltip-content-font-size
    --oruga-tooltip-content-max-width
    --oruga-tooltip-content-multiline-width
    --oruga-tooltip-content-padding
    --oruga-tooltip-content-radius-large
    --oruga-tooltip-content-weight-normal
    --oruga-tooltip-content-zindex
  */

  /*
    --oruga-upload-draggable-border
    --oruga-upload-draggable-border-radius
    --oruga-upload-draggable-disabled-opacity
    --oruga-upload-draggable-padding
  */
}
```
