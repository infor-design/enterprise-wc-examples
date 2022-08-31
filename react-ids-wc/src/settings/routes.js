// Component categories appear on the homepage
export const categories = {
  FORMS: 'Form Inputs', // 0
  NAVS: 'Navigation and Interaction', // 1
  MESSAGES: 'Messages and Alerts', // 2
  LISTS: 'Lists', // 3
  LAYOUTS: 'Layouts', // 4
  CHARTS: 'Charts and Visualizations', // 5
  FONTS: 'Typography' // 6
};

// List of all pages with correspondant components
// Used on homepage to render components list and in router to attach a component to a route
export const routes = [
  {
    route: 'ids-about',
    name: 'IdsAbout',
    title: 'About',
    category: categories.MESSAGES,
  },
  {
    route: 'ids-accordion',
    name: 'IdsAccordion',
    title: 'Accordion',
    category: categories.LAYOUTS,
  },
  {
    route: 'ids-alert',
    name: 'IdsAlert',
    title: 'Alert',
    category: categories.FORMS,
  },
  {
    route: 'ids-badge',
    name: 'IdsBadge',
    title: 'Badge',
    category: categories.NAVS,
  },
  {
    route: 'ids-block-grid',
    name: 'IdsBlockgrid',
    title: 'Block Grid',
    category: categories.LAYOUTS,
  },
  {
    route: 'ids-breadcrumb',
    name: 'IdsBreadcrumb',
    title: 'Breadcrumb',
    category: categories.NAVS,
  },
  {
    route: 'ids-button',
    name: 'IdsButton',
    title: 'Button',
    category: categories.NAVS,
  },
  {
    route: 'ids-card',
    name: 'IdsCard',
    title: 'Card',
    category: categories.LAYOUTS,
  },
  {
    route: 'ids-checkbox',
    name: 'IdsCheckbox',
    title: 'Checkbox',
    category: categories.FORMS,
  },
  {
    route: 'ids-color',
    name: 'IdsColor',
    title: 'Color',
    category: categories.CHARTS,
  },
  {
    route: 'ids-color-picker',
    name: 'IdsColorPicker',
    title: 'Color Picker',
    category: categories.FORMS,
  },
  {
    route: 'ids-counts',
    name: 'IdsCounts',
    title: 'Counts',
    category: categories.CHARTS,
  },
  {
    route: 'ids-data-grid',
    name: 'IdsDataGrid',
    title: 'Data Grid',
    category: categories.LISTS
  },
  {
    route: 'ids-draggable',
    name: 'IdsDraggable',
    title: 'Draggable',
    category: categories.LISTS
  },
  {
    route: 'ids-expandable-area',
    name: 'IdsExpandableArea',
    title: 'Expandable Area',
    category: categories.LAYOUTS,
  },
  {
    route: 'ids-fieldset',
    name: 'IdsFieldset',
    title: 'Fieldset',
    category: categories.LAYOUTS,
  },
  {
    route: 'ids-header',
    name: 'IdsHeader',
    title: 'Header',
    category: categories.NAVS,
  },
  {
    route: 'ids-hyperlink',
    name: 'IdsHyperlink',
    title: 'Hyperlink',
    category: categories.FONTS,
  },
  {
    route: 'ids-icon',
    name: 'IdsIcon',
    title: 'Icon',
    category: categories.MESSAGES,
  },
  {
    route: 'ids-input',
    name: 'IdsInput',
    title: 'Input',
    category: categories.FORMS,
  },
  {
    route: 'ids-layout-grid',
    name: 'IdsLayoutGrid',
    title: 'Layout Grid',
    category: categories.LAYOUTS,
  },
  {
    route: 'ids-list-view',
    name: 'IdsListView',
    title: 'List View',
    category: categories.LISTS
  },
  {
    route: 'ids-loading-indicator',
    name: 'IdsLoadingIndicator',
    title: 'Loading Indicator',
    category: categories.NAVS,
  },
  {
    route: 'ids-mask',
    name: 'IdsMask',
    title: 'Mask',
    category: categories.FORMS,
  },
  {
    route: 'ids-menu',
    name: 'IdsMenu',
    title: 'Menu',
    category: categories.NAVS,
  },
  {
    route: 'ids-menu-button',
    name: 'IdsMenuButton',
    title: 'Menu Button',
    category: categories.NAVS,
  },
  {
    route: 'ids-message',
    name: 'IdsMessage',
    title: 'Message',
    category: categories.MESSAGES,
  },
  {
    route: 'ids-modal',
    name: 'IdsModal',
    title: 'Modal',
    category: categories.NAVS,
  },
  {
    route: 'ids-notification-banner',
    name: 'IdsNotificationBanner',
    title: 'Notification Banner',
    category: categories.LISTS
  },
  {
    route: 'ids-pager',
    name: 'IdsPager',
    title: 'Pager',
    category: categories.NAVS,
  },
  {
    route: 'ids-popup',
    name: 'IdsPopup',
    title: 'Popup',
    category: categories.LAYOUTS,
  },
  {
    route: 'ids-popup-menu',
    name: 'IdsPopupMenu',
    title: 'Popup Menu',
    category: categories.NAVS,
  },
  {
    route: 'ids-progress-bar',
    name: 'IdsProgressBar',
    title: 'Progress Bar',
    category: categories.MESSAGES,
  },
  {
    route: 'ids-progress-chart',
    name: 'IdsProgressChart',
    title: 'Progress Chart',
    category: categories.CHARTS,
  },
  {
    route: 'ids-radio',
    name: 'IdsRadio',
    title: 'Radio',
    category: categories.FORMS,
  },
  {
    route: 'ids-rating',
    name: 'IdsRating',
    title: 'Rating',
    category: categories.CHARTS,
  },
  {
    route: 'ids-render-loop',
    name: 'IdsRenderLoop',
    title: 'Render Loop',
    category: categories.NAVS,
  },
  {
    route: 'ids-scroll-view',
    name: 'IdsScrollView',
    title: 'Scroll View',
    category: categories.NAVS,
  },
  {
    route: 'ids-skip-link',
    name: 'IdsSkipLink',
    title: 'Skip Link',
    category: categories.NAVS,
  },
  {
    route: 'ids-slider',
    name: 'IdsSlider',
    title: 'Slider',
    category: categories.CHARTS,
  },
  {
    route: 'ids-spinbox',
    name: 'IdsSpinbox',
    title: 'Spinbox',
    category: categories.FORMS,
  },
  {
    route: 'ids-step-chart',
    name: 'IdsStepChart',
    title: 'Step Chart',
    category: categories.NAVS,
  },
  {
    route: 'ids-summary-field',
    name: 'IdsSummaryField',
    title: 'Summary Field',
    category: categories.FORMS,
  },
  {
    route: 'ids-swaplist',
    name: 'IdsSwapList',
    title: 'Swap List',
    category: categories.LISTS
  },
  {
    route: 'ids-swipe-action',
    name: 'IdsSwipeAction',
    title: 'Swipe Action',
    category: categories.LAYOUTS,
  },
  {
    route: 'ids-switch',
    name: 'IdsSwitch',
    title: 'Switch',
    category: categories.FORMS,
  },
  {
    route: 'ids-tabs',
    name: 'IdsTabs',
    title: 'Tabs',
    category: categories.NAVS,
  },
  {
    route: 'ids-tag',
    name: 'IdsTag',
    title: 'Tag',
    category: categories.NAVS,
  },
  {
    route: 'ids-text',
    name: 'IdsText',
    title: 'Text',
    category: categories.FONTS,
  },
  {
    route: 'ids-textarea',
    name: 'IdsTextarea',
    title: 'Text Area',
    category: categories.FORMS,
  },
  {
    route: 'ids-theme-switcher',
    name: 'IdsThemeSwitcher',
    title: 'Theme Switcher',
    category: categories.NAVS,
  },
  {
    route: 'ids-toast',
    name: 'IdsToast',
    title: 'Toast',
    category: categories.MESSAGES,
  },
  {
    route: 'ids-toggle-button',
    name: 'IdsToggleButton',
    title: 'Toggle Button',
    category: categories.NAVS,
  },
  {
    route: 'ids-toolbar',
    name: 'IdsToolbar',
    title: 'Toolbar',
    category: categories.LAYOUTS,
  },
  {
    route: 'ids-tooltip',
    name: 'IdsTooltip',
    title: 'Tooltip',
    category: categories.MESSAGES,
  },
  {
    route: 'ids-tree',
    name: 'IdsTree',
    title: 'Tree',
    category: categories.NAVS,
  },
  {
    route: 'ids-trigger-field',
    name: 'IdsTriggerField',
    title: 'Trigger Field',
    category: categories.FORMS,
  },
  {
    route: 'ids-upload',
    name: 'IdsUpload',
    title: 'Upload',
    category: categories.FORMS,
  },
  {
    route: 'ids-upload-advanced',
    name: 'IdsUploadAdvanced',
    title: 'Upload Advanced',
    category: categories.FORMS,
  },
  {
    route: 'ids-virtual-scroll',
    name: 'IdsVirtualScroll',
    title: 'Virtual Scroll',
    category: categories.NAVS,
  },
  {
    route: 'ids-wizard',
    name: 'IdsWizard',
    title: 'Wizard',
    category: categories.NAVS,
  }
];
