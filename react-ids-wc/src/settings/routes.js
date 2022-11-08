// Component categories appear on the homepage
export const categories = {
  FORMS: 'Form Inputs', // 0
  NAVS: 'Navigation and Interaction', // 1
  MESSAGES: 'Messages and Alerts', // 2
  LISTS: 'Lists', // 3
  LAYOUTS: 'Layouts', // 4
  PATTERNS: 'Patterns', // 7
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
    category: categories.MESSAGES
  },
  {
    route: 'ids-accordion',
    name: 'IdsAccordion',
    title: 'Accordion',
    category: categories.LAYOUTS
  },
  {
    route: 'ids-alert',
    name: 'IdsAlert',
    title: 'Alert',
    category: categories.FORMS
  },
  {
    route: 'ids-action-sheet',
    name: 'IdsActionSheet',
    title: 'Action Sheet',
    category: categories.NAVS
  },
  {
    route: 'ids-app-menu',
    name: 'IdsAppMenu',
    title: 'App Menu',
    category: categories.NAVS
  },
  {
    route: 'ids-action-panel',
    name: 'IdsActionPanel',
    title: 'Action Panel',
    category: categories.NAVS
  },
  {
    route: 'ids-area-chart',
    name: 'IdsAreaChart',
    title: 'Area Chart',
    category: categories.CHARTS
  },
  {
    route: 'ids-axis-chart',
    name: 'IdsAxisChart',
    title: 'Axis Chart',
    category: categories.CHARTS
  },
  {
    route: 'ids-bar-chart',
    name: 'IdsBarChart',
    title: 'Bar Chart',
    category: categories.CHARTS
  },
  {
    route: 'ids-badge',
    name: 'IdsBadge',
    title: 'Badge',
    category: categories.NAVS
  },
  {
    route: 'ids-block-grid',
    name: 'IdsBlockgrid',
    title: 'Block Grid',
    category: categories.LAYOUTS
  },
  {
    route: 'ids-breadcrumb',
    name: 'IdsBreadcrumb',
    title: 'Breadcrumb',
    category: categories.NAVS
  },
  {
    route: 'ids-button',
    name: 'IdsButton',
    title: 'Button',
    category: categories.NAVS
  },
  {
    route: 'ids-calendar',
    name: 'IdsCalendar',
    title: 'Calendar',
    category: categories.LAYOUTS
  },
  {
    route: 'ids-container',
    name: 'IdsContainer',
    title: 'Container',
    category: categories.LAYOUTS
  },
  {
    route: 'ids-empty-message',
    name: 'IdsEmptyMessage',
    title: 'Empty Message',
    category: categories.MESSAGES
  },
  {
    route: 'ids-error-page',
    name: 'IdsErrorPage',
    title: 'Error Page',
    category: categories.MESSAGES
  },
  {
    route: 'ids-card',
    name: 'IdsCard',
    title: 'Card',
    category: categories.LAYOUTS
  },
  {
    route: 'ids-checkbox',
    name: 'IdsCheckbox',
    title: 'Checkbox',
    category: categories.FORMS
  },
  {
    route: 'ids-checkbox-group',
    name: 'IdsCheckboxGroup',
    title: 'Checkbox Group',
    category: categories.FORMS
  },
  {
    route: 'ids-color',
    name: 'IdsColor',
    title: 'Color',
    category: categories.CHARTS
  },
  {
    route: 'ids-color-picker',
    name: 'IdsColorPicker',
    title: 'Color Picker',
    category: categories.FORMS
  },
  {
    route: 'ids-counts',
    name: 'IdsCounts',
    title: 'Counts',
    category: categories.CHARTS
  },
  {
    route: 'ids-data-grid',
    name: 'IdsDataGrid',
    title: 'Data Grid',
    category: categories.LISTS
  },
  {
    route: 'ids-data-label',
    name: 'IdsDataLabel',
    title: 'Data Label',
    category: categories.FORMS
  },
  {
    route: 'ids-date-picker',
    name: 'IdsDatePicker',
    title: 'Date Picker',
    category: categories.FORMS
  },
  {
    route: 'ids-draggable',
    name: 'IdsDraggable',
    title: 'Draggable',
    category: categories.LISTS
  },
  {
    route: 'ids-dropdown',
    name: 'IdsDropdown',
    title: 'Dropdown',
    category: categories.FORMS
  },
  {
    route: 'ids-editor',
    name: 'IdsEditor',
    title: 'Editor',
    category: categories.FORMS
  },
  {
    route: 'ids-expandable-area',
    name: 'IdsExpandableArea',
    title: 'Expandable Area',
    category: categories.LAYOUTS
  },
  {
    route: 'ids-fieldset',
    name: 'IdsFieldset',
    title: 'Fieldset',
    category: categories.LAYOUTS
  },
  {
    route: 'ids-form',
    name: 'IdsForm',
    title: 'Form',
    category: categories.FORMS
  },
  {
    route: 'ids-header',
    name: 'IdsHeader',
    title: 'Header',
    category: categories.LAYOUTS
  },
  {
    route: 'ids-hidden',
    name: 'IdsHidden',
    title: 'Hidden',
    category: categories.LAYOUTS
  },
  {
    route: 'ids-hierarchy',
    name: 'IdsHierarchy',
    title: 'Hierarchy',
    category: categories.LAYOUTS
  },
  {
    route: 'ids-home-page',
    name: 'IdsHomePage',
    title: 'Home Page',
    category: categories.LAYOUTS
  },
  {
    route: 'ids-image',
    name: 'IdsImage',
    title: 'Image',
    category: categories.LAYOUTS
  },
  {
    route: 'ids-hyperlink',
    name: 'IdsHyperlink',
    title: 'Hyperlink',
    category: categories.FONTS
  },
  {
    route: 'ids-icon',
    name: 'IdsIcon',
    title: 'Icon',
    category: categories.MESSAGES
  },
  {
    route: 'ids-input',
    name: 'IdsInput',
    title: 'Input',
    category: categories.FORMS
  },
  {
    route: 'ids-layout-grid',
    name: 'IdsLayoutGrid',
    title: 'Layout Grid',
    category: categories.LAYOUTS
  },
  {
    route: 'ids-layout-flex',
    name: 'IdsLayoutFlex',
    title: 'Layout Flex',
    category: categories.LAYOUTS
  },
  {
    route: 'ids-list-box',
    name: 'IdsListBox',
    title: 'List Box',
    category: categories.LAYOUTS
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
    category: categories.NAVS
  },
  {
    route: 'ids-lookup',
    name: 'IdsLookup',
    title: 'Lookup',
    category: categories.FORMS
  },
  {
    route: 'ids-list-builder',
    name: 'IdsListBuilder',
    title: 'List Builder',
    category: categories.LISTS
  },
  {
    route: 'ids-locale',
    name: 'IdsLocale',
    title: 'Locale',
    category: categories.PATTERNS
  },
  {
    route: 'ids-line-chart',
    name: 'IdsLineChart',
    title: 'Line Chart',
    category: categories.CHARTS
  },
  {
    route: 'ids-mask',
    name: 'IdsMask',
    title: 'Mask',
    category: categories.FORMS
  },
  {
    route: 'ids-menu',
    name: 'IdsMenu',
    title: 'Menu',
    category: categories.NAVS
  },
  {
    route: 'ids-menu-button',
    name: 'IdsMenuButton',
    title: 'Menu Button',
    category: categories.NAVS
  },
  {
    route: 'ids-message',
    name: 'IdsMessage',
    title: 'Message',
    category: categories.MESSAGES
  },
  {
    route: 'ids-modal',
    name: 'IdsModal',
    title: 'Modal',
    category: categories.NAVS
  },
  {
    route: 'ids-masthead',
    name: 'IdsMasthead',
    title: 'Masthead',
    category: categories.LAYOUTS
  },
  {
    route: 'ids-month-view',
    name: 'IdsMonthView',
    title: 'Month View',
    category: categories.LAYOUTS
  },
  {
    route: 'ids-multiselect',
    name: 'IdsMultiselect',
    title: 'Multiselect',
    category: categories.FORMS
  },
  {
    route: 'ids-notification-banner',
    name: 'IdsNotificationBanner',
    title: 'Notification Banner',
    category: categories.MESSAGES
  },
  {
    route: 'ids-pager',
    name: 'IdsPager',
    title: 'Pager',
    category: categories.NAVS
  },
  {
    route: 'ids-popup',
    name: 'IdsPopup',
    title: 'Popup',
    category: categories.LAYOUTS
  },
  {
    route: 'ids-popup-menu',
    name: 'IdsPopupMenu',
    title: 'Popup Menu',
    category: categories.NAVS
  },
  {
    route: 'ids-progress-bar',
    name: 'IdsProgressBar',
    title: 'Progress Bar',
    category: categories.MESSAGES
  },
  {
    route: 'ids-progress-chart',
    name: 'IdsProgressChart',
    title: 'Progress Chart',
    category: categories.CHARTS
  },
  {
    route: 'ids-pie-chart',
    name: 'IdsPieChart',
    title: 'Pie Chart',
    category: categories.CHARTS
  },
  {
    route: 'ids-process-indicator',
    name: 'IdsProcessIndicator',
    title: 'Process Indicator',
    category: categories.CHARTS
  },
  {
    route: 'ids-radio',
    name: 'IdsRadio',
    title: 'Radio',
    category: categories.FORMS
  },
  {
    route: 'ids-rating',
    name: 'IdsRating',
    title: 'Rating',
    category: categories.CHARTS
  },
  {
    route: 'ids-scroll-view',
    name: 'IdsScrollView',
    title: 'Scroll View',
    category: categories.NAVS
  },
  {
    route: 'ids-search-field',
    name: 'IdsSearchField ',
    title: 'Search Field',
    category: categories.FORMS
  },
  {
    route: 'ids-skip-link',
    name: 'IdsSkipLink',
    title: 'Skip Link',
    category: categories.NAVS
  },
  {
    route: 'ids-slider',
    name: 'IdsSlider',
    title: 'Slider',
    category: categories.CHARTS
  },
  {
    route: 'ids-spinbox',
    name: 'IdsSpinbox',
    title: 'Spinbox',
    category: categories.FORMS
  },
  {
    route: 'ids-step-chart',
    name: 'IdsStepChart',
    title: 'Step Chart',
    category: categories.CHARTS
  },
  {
    route: 'ids-swaplist',
    name: 'IdsSwapList',
    title: 'Swap List',
    category: categories.LISTS
  },
  {
    route: 'ids-separator',
    name: 'IdsSeparator',
    title: 'Separator',
    category: categories.LAYOUTS
  },
  {
    route: 'ids-splitter',
    name: 'IdsSplitter',
    title: 'Splitter',
    category: categories.LAYOUTS
  },
  {
    route: 'ids-swipe-action',
    name: 'IdsSwipeAction',
    title: 'Swipe Action',
    category: categories.LAYOUTS
  },
  {
    route: 'ids-switch',
    name: 'IdsSwitch',
    title: 'Switch',
    category: categories.FORMS
  },
  {
    route: 'ids-swappable',
    name: 'IdsSwappable',
    title: 'Swappable',
    category: categories.PATTERNS
  },
  {
    route: 'ids-tabs',
    name: 'IdsTabs',
    title: 'Tabs',
    category: categories.NAVS
  },
  {
    route: 'ids-tag',
    name: 'IdsTag',
    title: 'Tag',
    category: categories.NAVS
  },
  {
    route: 'ids-text',
    name: 'IdsText',
    title: 'Text',
    category: categories.FONTS
  },
  {
    route: 'ids-textarea',
    name: 'IdsTextarea',
    title: 'Text Area',
    category: categories.FORMS
  },
  {
    route: 'ids-theme-switcher',
    name: 'IdsThemeSwitcher',
    title: 'Theme Switcher',
    category: categories.NAVS
  },
  {
    route: 'ids-toast',
    name: 'IdsToast',
    title: 'Toast',
    category: categories.MESSAGES
  },
  {
    route: 'ids-toggle-button',
    name: 'IdsToggleButton',
    title: 'Toggle Button',
    category: categories.NAVS
  },
  {
    route: 'ids-toolbar',
    name: 'IdsToolbar',
    title: 'Toolbar',
    category: categories.LAYOUTS
  },
  {
    route: 'ids-tooltip',
    name: 'IdsTooltip',
    title: 'Tooltip',
    category: categories.MESSAGES
  },
  {
    route: 'ids-tree',
    name: 'IdsTree',
    title: 'Tree',
    category: categories.NAVS
  },
  {
    route: 'ids-trigger-field',
    name: 'IdsTriggerField',
    title: 'Trigger Field',
    category: categories.FORMS
  },
  {
    route: 'ids-time-picker',
    name: 'IdsTimePicker',
    title: 'Time Picker',
    category: categories.FORMS
  },
  {
    route: 'ids-treemap',
    name: 'IdsTreemap',
    title: 'Treemap',
    category: categories.CHARTS
  },
  {
    route: 'ids-upload',
    name: 'IdsUpload',
    title: 'Upload',
    category: categories.FORMS
  },
  {
    route: 'ids-upload-advanced',
    name: 'IdsUploadAdvanced',
    title: 'Upload Advanced',
    category: categories.FORMS
  },
  {
    route: 'ids-virtual-scroll',
    name: 'IdsVirtualScroll',
    title: 'Virtual Scroll',
    category: categories.NAVS
  },
  {
    route: 'ids-wizard',
    name: 'IdsWizard',
    title: 'Wizard',
    category: categories.NAVS
  },
  {
    route: 'ids-week-view',
    name: 'IdsWeekView',
    title: 'Week View',
    category: categories.LAYOUTS
  }
];
