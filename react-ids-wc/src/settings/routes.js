// Component categories appear on the homepage
export const categories = [
  'Form Inputs', // 0
  'Navigation and Interaction', // 1
  'Messages and Alerts', // 2
  'Lists', // 3
  'Layouts', // 4
  'Charts and Visualizations', // 5
  'Typography' // 6
]

// List of all pages with correspondant components
// Used on homepage to render components list and in router to attach a component to a route
export const routes = [
  {
    route: 'ids-about',
    name: 'IdsAbout',
    title: 'About',
    category: categories[2]
  },
  {
    route: 'ids-accordion',
    name: 'IdsAccordion',
    title: 'Accordion',
    category: categories[4]
  },
  {
    route: 'ids-alert',
    name: 'IdsAlert',
    title: 'Alert',
    category: categories[0]
  },
  {
    route: 'ids-badge',
    name: 'IdsBadge',
    title: 'Badge',
    category: categories[1]
  },
  {
    route: 'ids-block-grid',
    name: 'IdsBlockgrid',
    title: 'Block Grid',
    category: categories[4]
  },
  {
    route: 'ids-breadcrumb',
    name: 'IdsBreadcrumb',
    title: 'Breadcrumb',
    category: categories[1]
  },
  {
    route: 'ids-button',
    name: 'IdsButton',
    title: 'Button',
    category: categories[1]
  },
  {
    route: 'ids-card',
    name: 'IdsCard',
    title: 'Card',
    category: categories[4]
  },
  {
    route: 'ids-checkbox',
    name: 'IdsCheckbox',
    title: 'Checkbox',
    category: categories[0]
  },
  {
    route: 'ids-color',
    name: 'IdsColor',
    title: 'Color',
    category: categories[5]
  },
  {
    route: 'ids-color-picker',
    name: 'IdsColorPicker',
    title: 'Color Picker',
    category: categories[0]
  },
  {
    route: 'ids-counts',
    name: 'IdsCounts',
    title: 'Counts',
    category: categories[5]
  },
  {
    route: 'ids-data-grid',
    name: 'IdsDataGrid',
    title: 'Data Grid',
    category: categories[3]
  },
  {
    route: 'ids-draggable',
    name: 'IdsDraggable',
    title: 'Draggable',
    category: categories[3]
  },
  {
    route: 'ids-expandable-area',
    name: 'IdsExpandableArea',
    title: 'Expandable Area',
    category: categories[4]
  },
  {
    route: 'ids-fieldset',
    name: 'IdsFieldset',
    title: 'Fieldset',
    category: categories[4]
  },
  {
    route: 'ids-header',
    name: 'IdsHeader',
    title: 'Header',
    category: categories[1]
  },
  {
    route: 'ids-hyperlink',
    name: 'IdsHyperlink',
    title: 'Hyperlink',
    category: categories[6]
  },
  {
    route: 'ids-icon',
    name: 'IdsIcon',
    title: 'Icon',
    category: categories[2]
  },
  {
    route: 'ids-input',
    name: 'IdsInput',
    title: 'Input',
    category: categories[0]
  },
  {
    route: 'ids-layout-grid',
    name: 'IdsLayoutGrid',
    title: 'Layout Grid',
    category: categories[4]
  },
  {
    route: 'ids-list-view',
    name: 'IdsListView',
    title: 'List View',
    category: categories[3]
  },
  {
    route: 'ids-loading-indicator',
    name: 'IdsLoadingIndicator',
    title: 'Loading Indicator',
    category: categories[1]
  },
  {
    route: 'ids-mask',
    name: 'IdsMask',
    title: 'Mask',
    category: categories[0]
  },
  {
    route: 'ids-menu',
    name: 'IdsMenu',
    title: 'Menu',
    category: categories[1]
  },
  {
    route: 'ids-menu-button',
    name: 'IdsMenuButton',
    title: 'Menu Button',
    category: categories[1]
  },
  {
    route: 'ids-message',
    name: 'IdsMessage',
    title: 'Message',
    category: categories[2]
  },
  {
    route: 'ids-modal',
    name: 'IdsModal',
    title: 'Modal',
    category: categories[1]
  },
  {
    route: 'ids-notification-banner',
    name: 'IdsNotificationBanner',
    title: 'Notification Banner',
    category: categories[3]
  },
  {
    route: 'ids-pager',
    name: 'IdsPager',
    title: 'Pager',
    category: categories[1]
  },
  {
    route: 'ids-popup',
    name: 'IdsPopup',
    title: 'Popup',
    category: categories[4]
  },
  {
    route: 'ids-popup-menu',
    name: 'IdsPopupMenu',
    title: 'Popup Menu',
    category: categories[1]
  },
  {
    route: 'ids-progress-bar',
    name: 'IdsProgressBar',
    title: 'Progress Bar',
    category: categories[2]
  },
  {
    route: 'ids-progress-chart',
    name: 'IdsProgressChart',
    title: 'Progress Chart',
    category: categories[5]
  },
  {
    route: 'ids-radio',
    name: 'IdsRadio',
    title: 'Radio',
    category: categories[0]
  },
  {
    route: 'ids-rating',
    name: 'IdsRating',
    title: 'Rating',
    category: categories[5]
  },
  {
    route: 'ids-render-loop',
    name: 'IdsRenderLoop',
    title: 'Render Loop',
    category: categories[1]
  },
  {
    route: 'ids-scroll-view',
    name: 'IdsScrollView',
    title: 'Scroll View',
    category: categories[1]
  },
  {
    route: 'ids-skip-link',
    name: 'IdsSkipLink',
    title: 'Skip Link',
    category: categories[1]
  },
  {
    route: 'ids-slider',
    name: 'IdsSlider',
    title: 'Slider',
    category: categories[5]
  },
  {
    route: 'ids-spinbox',
    name: 'IdsSpinbox',
    title: 'Spinbox',
    category: categories[0]
  },
  {
    route: 'ids-step-chart',
    name: 'IdsStepChart',
    title: 'Step Chart',
    category: categories[1]
  },
  {
    route: 'ids-summary-field',
    name: 'IdsSummaryField',
    title: 'Summary Field',
    category: categories[0]
  },
  {
    route: 'ids-swipe-action',
    name: 'IdsSwipeAction',
    title: 'Swipe Action',
    category: categories[4]
  },
  {
    route: 'ids-switch',
    name: 'IdsSwitch',
    title: 'Switch',
    category: categories[0]
  },
  {
    route: 'ids-tabs',
    name: 'IdsTabs',
    title: 'Tabs',
    category: categories[1]
  },
  {
    route: 'ids-tag',
    name: 'IdsTag',
    title: 'Tag',
    category: categories[1]
  },
  {
    route: 'ids-text',
    name: 'IdsText',
    title: 'Text',
    category: categories[6]
  },
  {
    route: 'ids-textarea',
    name: 'IdsTextarea',
    title: 'Text Area',
    category: categories[0]
  },
  {
    route: 'ids-theme-switcher',
    name: 'IdsThemeSwitcher',
    title: 'Theme Switcher',
    category: categories[1]
  },
  {
    route: 'ids-toast',
    name: 'IdsToast',
    title: 'Toast',
    category: categories[2]
  },
  {
    route: 'ids-toggle-button',
    name: 'IdsToggleButton',
    title: 'Toggle Button',
    category: categories[1]
  },
  {
    route: 'ids-toolbar',
    name: 'IdsToolbar',
    title: 'Toolbar',
    category: categories[4]
  },
  {
    route: 'ids-tooltip',
    name: 'IdsTooltip',
    title: 'Tooltip',
    category: categories[2]
  },
  {
    route: 'ids-tree',
    name: 'IdsTree',
    title: 'Tree',
    category: categories[1]
  },
  {
    route: 'ids-trigger-field',
    name: 'IdsTriggerField',
    title: 'Trigger Field',
    category: categories[0]
  },
  {
    route: 'ids-upload',
    name: 'IdsUpload',
    title: 'Upload',
    category: categories[0]
  },
  {
    route: 'ids-upload-advanced',
    name: 'IdsUploadAdvanced',
    title: 'Upload Advanced',
    category: categories[0]
  },
  {
    route: 'ids-virtual-scroll',
    name: 'IdsVirtualScroll',
    title: 'Virtual Scroll',
    category: categories[1]
  },
  {
    route: 'ids-wizard',
    name: 'IdsWizard',
    title: 'Wizard',
    category: categories[1]
  }
];
