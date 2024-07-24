import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: {
      title: 'Home',
    }
  },
  { 
    path: 'ids-alert', 
    loadChildren: () => import('./components/ids-alert/ids-alert.module').then(m => m.IdsAlertModule),
    data: {
      title: 'Alert',
      category: 'Form Inputs',
      description: 'Alert Indicator/icon'
    },
  },
  { 
    path: 'ids-checkbox', 
    loadChildren: () => import('./components/ids-checkbox/ids-checkbox.module').then(m => m.IdsCheckboxModule),
    data: {
      title: 'Checkbox',
      category: 'Form Inputs',
      description: 'Checkbox Input Element'
    }
  },
  { 
    path: 'ids-checkbox-group',
    loadChildren: () => import('./components/ids-checkbox-group/ids-checkbox-group.module').then(m => m.IdsCheckboxGroupModule),
    data: {
      title: 'Checkbox Group',
      category: 'Form Inputs',
      description: 'Group of checkboxes with label'
    }
  },
  { 
    path: 'ids-color-picker', 
    loadChildren: () => import('./components/ids-color-picker/ids-color-picker.module').then(m => m.IdsColorPickerModule),
    data: {
      title: 'Color Picker',
      category: 'Form Inputs',
      description: 'Input field for colors'
    }
  },
  { 
    path: 'ids-data-label', 
    loadChildren: () => import('./components/ids-data-label/ids-data-label.module').then(m => m.IdsDataLabelModule),
    data: {
      title: 'Data Label',
      category: 'Form Inputs',
      description: 'Readonly data/label component'
    }
  },
  { 
    path: 'ids-date-picker', 
    loadChildren: () => import('./components/ids-date-picker/ids-date-picker.module').then(m => m.IdsDatePickerModule),
    data: {
      title: 'Date Picker',
      category: 'Form Inputs',
      description: 'Input field for date'
    }
  },
  { 
    path: 'ids-dropdown',
    loadChildren: () => import('./components/ids-dropdown/ids-dropdown.module').then(m => m.IdsDropdownModule),
    data: {
      title: 'Dropdown',
      category: 'Form Inputs',
      description: 'Select from a list of items'
    }
  },
  { 
    path: 'ids-editor',
    loadChildren: () => import('./components/ids-editor/ids-editor.module').then(m => m.IdsEditorModule),
    data: {
      title: 'Editor',
      category: 'Form Inputs',
      description: 'An input for multi line rich text'
    }
  },
  { 
    path: 'ids-input',
    loadChildren: () => import('./components/ids-input/ids-input.module').then(m => m.IdsInputModule),
    data: {
      title: 'Input',
      category: 'Form Inputs',
      description: 'Input element and features'
    }
  },
  { 
    path: 'ids-lookup',
    loadChildren: () => import('./components/ids-lookup/ids-lookup.module').then(m => m.IdsLookupModule),
    data: {
      title: 'Lookups',
      category: 'Form Inputs',
      description: 'Select from a data grid list'
    }
  },
  { 
    path: 'ids-mask', 
    loadChildren: () => import('./components/ids-mask/ids-mask.module').then(m => m.IdsMaskModule),
    data: {
      title: 'Mask',
      category: 'Form Inputs',
      description: 'Util for masking input'
    },
  },
  {
    path: 'ids-splitter',
    loadChildren: () => import('./components/ids-splitter/ids-splitter.module').then(m => m.IdsSplitterModule),
    data: {
      title: 'Splitter',
      category: 'Layouts',
      description: 'Split Content Panes'
    }
  },
  { 
    path: 'ids-swaplist', 
    loadChildren: () => import('./components/ids-swaplist/ids-swaplist.module').then(m => m.IdsSwaplistModule),
    data: {
      title: 'Swaplist',
      category: 'Lists',
      description: 'Displays Swaplist component'
    }
  },
  { 
    path: 'ids-tag', 
    loadChildren: () => import('./components/ids-tag/ids-tag.module').then(m => m.IdsTagModule),
    data: {
      title: 'Tag',
      category: 'Navigation and Interaction',
      description: 'UI Classification'
    }
  },
  { 
    path: 'ids-text', 
    loadChildren: () => import('./components/ids-text/ids-text.module').then(m => m.IdsTextModule),
    data: {
      title: 'Text',
      category: 'Typography',
      description: 'An element for plain text'
    }
  },
  { 
    path: 'ids-tooltip', 
    loadChildren: () => import('./components/ids-tooltip/ids-tooltip.module').then(m => m.IdsTooltipModule),
    data: {
      title: 'Tooltip',
      category: 'Messages and Alerts',
      description: 'A message tooltip that shows on click/hover/focus'
    },
  },
  { 
    path: 'ids-multiselect',
    loadChildren: () => import('./components/ids-multiselect/ids-multiselect.module').then(m => m.IdsMultiselectModule),
    data: {
      title: 'Multiselect',
      category: 'Form Inputs',
      description: 'Select multiple values from a list'
    },
  },
  { 
    path: 'ids-radio',
    loadChildren: () => import('./components/ids-radio/ids-radio.module').then(m => m.IdsRadioModule),
    data: {
      title: 'Radio',
      category: 'Form Inputs',
      description: 'Input Radio Element'
    },
  },
  { 
    path: 'ids-search-field', 
    loadChildren: () => import('./components/ids-search-field/ids-search-field.module').then(m => m.IdsSearchFieldModule),
    data: {
      title: 'Search Field',
      category: 'Form Inputs',
      description: 'Interactive input for typing into search'
    },
  },
  { 
    path: 'ids-spinbox', 
    loadChildren: () => import('./components/ids-spinbox/ids-spinbox.module').then(m => m.IdsSpinboxModule),
    data: {
      title: 'Spinbox',
      category: 'Form Inputs',
      description: 'Input element for numbers'
    },
  },
  { 
    path: 'ids-switch',
    loadChildren: () => import('./components/ids-switch/ids-switch.module').then(m => m.IdsSwitchModule),
    data: {
      title: 'Switch',
      category: 'Form Inputs',
      description: 'Input element with on/off capabilities'
    },
  },
  { 
    path: 'ids-textarea', 
    loadChildren: () => import('./components/ids-textarea/ids-textarea.module').then(m => m.IdsTextareaModule),
    data: {
      title: 'Textarea',
      category: 'Form Inputs',
      description: 'An input for multi line text'
    },
  },
  { 
    path: 'ids-time-picker',
    loadChildren: () => import('./components/ids-time-picker/ids-time-picker.module').then(m => m.IdsTimePickerModule),
    data: {
      title: 'Time Picker',
      category: 'Form Inputs',
      description: 'Input field for time and dates'
    },
  },
  { 
    path: 'ids-trigger-field',
    loadChildren: () => import('./components/ids-trigger-field/ids-trigger-field.module').then(m => m.IdsTriggerFieldModule),
    data: {
      title: 'Trigger Field',
      category: 'Form Inputs',
      description: 'An input field with an icon'
    },
  },
  { 
    path: 'ids-upload',
    loadChildren: () => import('./components/ids-upload/ids-upload.module').then(m => m.IdsUploadModule),
    data: {
      title: 'Upload',
      category: 'Form Inputs',
      description: 'Upload a single file in a field'
    },
  },
  { 
    path: 'ids-upload-advanced',
    loadChildren: () => import('./components/ids-upload-advanced/ids-upload-advanced.module').then(m => m.IdsUploadAdvancedModule),
    data: {
      title: 'Upload Advanced',
      category: 'Form Inputs',
      description: 'Upload multiple files'
    },
  },
  {
    path: "ids-alert",
    loadChildren: () =>
      import("./components/ids-alert/ids-alert.module").then(
        (m) => m.IdsAlertModule
      ),
    data: {
      title: "Alert",
      category: "Form Inputs",
      description: "Alert Indicator/icon",
    },
  },
  { 
    path: 'ids-reactive-forms',
    loadChildren: () => import('./components/ids-reactive-forms/ids-reactive-forms.module').then(m => m.IdsReactiveFormsModule),
    data: {
      title: 'Angular Reactive Forms',
      category: 'Form Inputs',
      description: 'Reactive forms examples'
    },
  },
  { 
    path: 'ids-action-sheet', 
    loadChildren: () => import('./components/ids-action-sheet/ids-action-sheet.module').then(m => m.IdsActionSheetModule),
    data: {
      title: 'Action Sheet',
      category: 'Navigation and Interaction',
      description: 'Displays a menu at the bottom of your screen on mobile devices'
    },
  },
  { 
    path: 'ids-action-panel', 
    loadChildren: () => import('./components/ids-action-panel/ids-action-panel.module').then(m => m.IdsActionPanelModule),
    data: {
      title: 'Action Panel',
      category: 'Navigation and Interaction',
      description: 'Displays a menu at the bottom of your screen on mobile devices'
    },
  },
  { 
    path: 'ids-app-menu', 
    loadChildren: () => import('./components/ids-app-menu/ids-app-menu.module').then(m => m.IdsAppMenuModule),
    data: {
      title: 'App Menu',
      category: 'Navigation and Interaction',
      description: 'Application Nav'
    },
  },
  { 
    path: 'ids-badge', 
    loadChildren: () => import('./components/ids-badge/ids-badge.module').then(m => m.IdsBadgeModule),
    data: {
      title: 'Badge',
      category: 'Navigation and Interaction',
      description: 'Ui Text decoration'
    },
  },
  { 
    path: 'ids-breadcrumb',
    loadChildren: () => import('./components/ids-breadcrumb/ids-breadcrumb.module').then(m => m.IdsBreadcrumbModule),
    data: {
      title: 'Breadcrumb',
      category: 'Navigation and Interaction',
      description: 'Navigational Wayfinding'
    },
  },
  { 
    path: 'ids-button',
    loadChildren: () => import('./components/ids-button/ids-button.module').then(m => m.IdsButtonModule),
    data: {
      title: 'Button',
      category: 'Navigation and Interaction',
      description: 'Simple HTMLButtonElement'
    },
  },
  { 
    path: 'ids-loading-indicator', 
    loadChildren: () => import('./components/ids-loading-indicator/ids-loading-indicator.module').then(m => m.IdsLoadingIndicatorModule),
    data: {
      title: 'Loading Indicator',
      category: 'Navigation and Interaction',
      description: 'Animation for loading'
    },
  },
  { 
    path: 'ids-menu',
    loadChildren: () => import('./components/ids-menu/ids-menu.module').then(m => m.IdsMenuModule),
    data: {
      title: 'Menu',
      category: 'Navigation and Interaction',
      description: 'A static UI menu'
    },
  },
  {
    path: "ids-checkbox",
    loadChildren: () =>
      import("./components/ids-checkbox/ids-checkbox.module").then(
        (m) => m.IdsCheckboxModule
      ),
    data: {
      title: "Checkbox",
      category: "Form Inputs",
      description: "Checkbox Input Element",
    },
  },
  {
    path: "ids-checkbox-group",
    loadChildren: () =>
      import("./components/ids-checkbox-group/ids-checkbox-group.module").then(
        (m) => m.IdsCheckboxGroupModule
      ),
    data: {
      title: "Checkbox Group",
      category: "Form Inputs",
      description: "Group of checkboxes with label",
    },
  },
  {
    path: "ids-color-picker",
    loadChildren: () =>
      import("./components/ids-color-picker/ids-color-picker.module").then(
        (m) => m.IdsColorPickerModule
      ),
    data: {
      title: "Color Picker",
      category: "Form Inputs",
      description: "Input field for colors",
    },
  },
  {
    path: "ids-data-label",
    loadChildren: () =>
      import("./components/ids-data-label/ids-data-label.module").then(
        (m) => m.IdsDataLabelModule
      ),
    data: {
      title: "Data Label",
      category: "Form Inputs",
      description: "Readonly data/label component",
    },
  },
  {
    path: "ids-date-picker",
    loadChildren: () =>
      import("./components/ids-date-picker/ids-date-picker.module").then(
        (m) => m.IdsDatePickerModule
      ),
    data: {
      title: "Date Picker",
      category: "Form Inputs",
      description: "Input field for date",
    },
  },
  {
    path: "ids-dropdown",
    loadChildren: () =>
      import("./components/ids-dropdown/ids-dropdown.module").then(
        (m) => m.IdsDropdownModule
      ),
    data: {
      title: "Dropdown",
      category: "Form Inputs",
      description: "Select from a list of items",
    },
  },
  {
    path: "ids-editor",
    loadChildren: () =>
      import("./components/ids-editor/ids-editor.module").then(
        (m) => m.IdsEditorModule
      ),
    data: {
      title: "Editor",
      category: "Form Inputs",
      description: "An input for multi line rich text",
    },
  },
  {
    path: "ids-input",
    loadChildren: () =>
      import("./components/ids-input/ids-input.module").then(
        (m) => m.IdsInputModule
      ),
    data: {
      title: "Input",
      category: "Form Inputs",
      description: "Input element and features",
    },
  },
  {
    path: "ids-lookup",
    loadChildren: () =>
      import("./components/ids-lookup/ids-lookup.module").then(
        (m) => m.IdsLookupModule
      ),
    data: {
      title: "Lookups",
      category: "Form Inputs",
      description: "Select from a data grid list",
    },
  },
  {
    path: "ids-mask",
    loadChildren: () =>
      import("./components/ids-mask/ids-mask.module").then(
        (m) => m.IdsMaskModule
      ),
    data: {
      title: "Mask",
      category: "Form Inputs",
      description: "Util for masking input",
    },
  },
  {
    path: "ids-swaplist",
    loadChildren: () =>
      import("./components/ids-swaplist/ids-swaplist.module").then(
        (m) => m.IdsSwaplistModule
      ),
    data: {
      title: "Swaplist",
      category: "Lists",
      description: "Displays Swaplist component",
    },
  },
  {
    path: "ids-tag",
    loadChildren: () =>
      import("./components/ids-tag/ids-tag.module").then((m) => m.IdsTagModule),
    data: {
      title: "Tag",
      category: "Navigation and Interaction",
      description: "UI Classification",
    },
  },
  {
    path: "ids-text",
    loadChildren: () =>
      import("./components/ids-text/ids-text.module").then(
        (m) => m.IdsTextModule
      ),
    data: {
      title: "Text",
      category: "Typography",
      description: "An element for plain text",
    },
  },
  {
    path: "ids-tooltip",
    loadChildren: () =>
      import("./components/ids-tooltip/ids-tooltip.module").then(
        (m) => m.IdsTooltipModule
      ),
    data: {
      title: "Tooltip",
      category: "Messages and Alerts",
      description: "A message tooltip that shows on click/hover/focus",
    },
  },
  {
    path: "ids-multiselect",
    loadChildren: () =>
      import("./components/ids-multiselect/ids-multiselect.module").then(
        (m) => m.IdsMultiselectModule
      ),
    data: {
      title: "Multiselect",
      category: "Form Inputs",
      description: "Select multiple values from a list",
    },
  },
  {
    path: "ids-radio",
    loadChildren: () =>
      import("./components/ids-radio/ids-radio.module").then(
        (m) => m.IdsRadioModule
      ),
    data: {
      title: "Radio",
      category: "Form Inputs",
      description: "Input Radio Element",
    },
  },
  {
    path: "ids-search-field",
    loadChildren: () =>
      import("./components/ids-search-field/ids-search-field.module").then(
        (m) => m.IdsSearchFieldModule
      ),
    data: {
      title: "Search Field",
      category: "Form Inputs",
      description: "Interactive input for typing into search",
    },
  },
  {
    path: "ids-spinbox",
    loadChildren: () =>
      import("./components/ids-spinbox/ids-spinbox.module").then(
        (m) => m.IdsSpinboxModule
      ),
    data: {
      title: "Spinbox",
      category: "Form Inputs",
      description: "Input element for numbers",
    },
  },
  {
    path: "ids-switch",
    loadChildren: () =>
      import("./components/ids-switch/ids-switch.module").then(
        (m) => m.IdsSwitchModule
      ),
    data: {
      title: "Switch",
      category: "Form Inputs",
      description: "Input element with on/off capabilities",
    },
  },
  {
    path: "ids-textarea",
    loadChildren: () =>
      import("./components/ids-textarea/ids-textarea.module").then(
        (m) => m.IdsTextareaModule
      ),
    data: {
      title: "Textarea",
      category: "Form Inputs",
      description: "An input for multi line text",
    },
  },
  {
    path: "ids-time-picker",
    loadChildren: () =>
      import("./components/ids-time-picker/ids-time-picker.module").then(
        (m) => m.IdsTimePickerModule
      ),
    data: {
      title: "Time Picker",
      category: "Form Inputs",
      description: "Input field for time and dates",
    },
  },
  {
    path: "ids-trigger-field",
    loadChildren: () =>
      import("./components/ids-trigger-field/ids-trigger-field.module").then(
        (m) => m.IdsTriggerFieldModule
      ),
    data: {
      title: "Trigger Field",
      category: "Form Inputs",
      description: "An input field with an icon",
    },
  },
  {
    path: "ids-upload",
    loadChildren: () =>
      import("./components/ids-upload/ids-upload.module").then(
        (m) => m.IdsUploadModule
      ),
    data: {
      title: "Upload",
      category: "Form Inputs",
      description: "Upload a single file in a field",
    },
  },
  {
    path: "ids-upload-advanced",
    loadChildren: () =>
      import(
        "./components/ids-upload-advanced/ids-upload-advanced.module"
      ).then((m) => m.IdsUploadAdvancedModule),
    data: {
      title: "Upload Advanced",
      category: "Form Inputs",
      description: "Upload multiple files",
    },
  },
  {
    path: "ids-forms",
    loadChildren: () =>
      import("./components/ids-forms/ids-forms.module").then(
        (m) => m.IdsFormsModule
      ),
    data: {
      title: "Angular Forms",
      category: "Form Inputs",
      description: "Angular Forms examples",
    },
  },
  {
    path: "ids-reactive-forms",
    loadChildren: () =>
      import("./components/ids-reactive-forms/ids-reactive-forms.module").then(
        (m) => m.IdsReactiveFormsModule
      ),
    data: {
      title: "Angular Reactive Forms",
      category: "Form Inputs",
      description: "Reactive forms examples",
    },
  },
  {
    path: "ids-action-sheet",
    loadChildren: () =>
      import("./components/ids-action-sheet/ids-action-sheet.module").then(
        (m) => m.IdsActionSheetModule
      ),
    data: {
      title: "Action Sheet",
      category: "Navigation and Interaction",
      description:
        "Displays a menu at the bottom of your screen on mobile devices",
    },
  },
  {
    path: "ids-app-menu",
    loadChildren: () =>
      import("./components/ids-app-menu/ids-app-menu.module").then(
        (m) => m.IdsAppMenuModule
      ),
    data: {
      title: "App Menu",
      category: "Navigation and Interaction",
      description: "Application Nav",
    },
  },
  {
    path: "ids-badge",
    loadChildren: () =>
      import("./components/ids-badge/ids-badge.module").then(
        (m) => m.IdsBadgeModule
      ),
    data: {
      title: "Badge",
      category: "Navigation and Interaction",
      description: "Ui Text decoration",
    },
  },
  {
    path: "ids-breadcrumb",
    loadChildren: () =>
      import("./components/ids-breadcrumb/ids-breadcrumb.module").then(
        (m) => m.IdsBreadcrumbModule
      ),
    data: {
      title: "Breadcrumb",
      category: "Navigation and Interaction",
      description: "Navigational Wayfinding",
    },
  },
  {
    path: "ids-button",
    loadChildren: () =>
      import("./components/ids-button/ids-button.module").then(
        (m) => m.IdsButtonModule
      ),
    data: {
      title: "Button",
      category: "Navigation and Interaction",
      description: "Simple HTMLButtonElement",
    },
  },
  {
    path: "ids-loading-indicator",
    loadChildren: () =>
      import(
        "./components/ids-loading-indicator/ids-loading-indicator.module"
      ).then((m) => m.IdsLoadingIndicatorModule),
    data: {
      title: "Loading Indicator",
      category: "Navigation and Interaction",
      description: "Animation for loading",
    },
  },
  {
    path: "ids-menu",
    loadChildren: () =>
      import("./components/ids-menu/ids-menu.module").then(
        (m) => m.IdsMenuModule
      ),
    data: {
      title: "Menu",
      category: "Navigation and Interaction",
      description: "A static UI menu",
    },
  },
  {
    path: "ids-menu-button",
    loadChildren: () =>
      import("./components/ids-menu-button/ids-menu-button.module").then(
        (m) => m.IdsMenuButtonModule
      ),
    data: {
      title: "Menu Button",
      category: "Navigation and Interaction",
      description: "A button with a popup menu",
    },
  },
  {
    path: "ids-modal",
    loadChildren: () =>
      import("./components/ids-modal/ids-modal.module").then(
        (m) => m.IdsModalModule
      ),
    data: {
      title: "Modal",
      category: "Navigation and Interaction",
      description: "Displays a Modal Dialog",
    },
  },
  {
    path: "ids-module-nav",
    loadChildren: () =>
      import("./components/ids-module-nav/ids-module-nav.module").then(
        (m) => m.IdsModuleNavModule
      ),
    data: {
      title: "Module Nav",
      category: "Navigation and Interaction",
      description: "Top-Level Navigation",
    },
  },
  {
    path: "ids-pager",
    loadChildren: () =>
      import("./components/ids-pager/ids-pager.module").then(
        (m) => m.IdsPagerModule
      ),
    data: {
      title: "Pager",
      category: "Navigation and Interaction",
      description: "Displays a Pager for lists",
    },
  },
  {
    path: "ids-pie-chart",
    loadChildren: () =>
      import("./components/ids-pie-chart/ids-pie-chart.module").then(
        (m) => m.IdsPieChartModule
      ),
    data: {
      title: "Pie Chart",
      category: "Charts and Visualizations",
      description: "Configurable circle chart divided into sections",
    },
  },
  {
    path: "ids-popup-menu",
    loadChildren: () =>
      import("./components/ids-popup-menu/ids-popup-menu.module").then(
        (m) => m.IdsPopupMenuModule
      ),
    data: {
      title: "Popup Menu",
      category: "Navigation and Interaction",
      description: "Displays a context menu",
    },
  },
  {
    path: "ids-scroll-view",
    loadChildren: () =>
      import("./components/ids-scroll-view/ids-scroll-view.module").then(
        (m) => m.IdsScrollViewModule
      ),
    data: {
      title: "Scroll View",
      category: "Navigation and Interaction",
      description: "Swipe / Scroll Container",
    },
  },
  {
    path: "ids-skip-link",
    loadChildren: () =>
      import("./components/ids-skip-link/ids-skip-link.module").then(
        (m) => m.IdsSkipLinkModule
      ),
    data: {
      title: "Skip Link",
      category: "Navigation and Interaction",
      description: "Accessibile Navigation",
    },
  },
  {
    path: "ids-tabs",
    loadChildren: () =>
      import("./components/ids-tabs/ids-tabs.module").then(
        (m) => m.IdsTabModule
      ),
    data: {
      title: "Tabs",
      category: "Navigation and Interaction",
      description: "Segment different areas",
    },
  },
  {
    path: "ids-theme-switcher",
    loadChildren: () =>
      import("./components/ids-theme-switcher/ids-theme-switcher.module").then(
        (m) => m.IdsThemeSwitcherModule
      ),
    data: {
      title: "Theme Switcher",
      category: "Navigation and Interaction",
      description: "Set and control themes",
    },
  },
  {
    path: "ids-toggle-button",
    loadChildren: () =>
      import("./components/ids-toggle-button/ids-toggle-button.module").then(
        (m) => m.IdsToggleButtonModule
      ),
    data: {
      title: "Toggle Button",
      category: "Navigation and Interaction",
      description: "An on/off toggle button",
    },
  },
  {
    path: "ids-tree",
    loadChildren: () =>
      import("./components/ids-tree/ids-tree.module").then(
        (m) => m.IdsTreeModule
      ),
    data: {
      title: "Tree",
      category: "Navigation and Interaction",
      description: "Hierarchical view of items and subitems",
    },
  },
  {
    path: "ids-virtual-scroll",
    loadChildren: () =>
      import("./components/ids-virtual-scroll/ids-virtual-scroll.module").then(
        (m) => m.IdsVirtualScrollModule
      ),
    data: {
      title: "Virtual Scroll",
      category: "Navigation and Interaction",
      description: "Fast scrolling for lots of data",
    },
  },
  {
    path: "ids-wizard",
    loadChildren: () =>
      import("./components/ids-wizard/ids-wizard.module").then(
        (m) => m.IdsWizardModule
      ),
    data: {
      title: "Wizard",
      category: "Navigation and Interaction",
      description: "A clickable 4 step wizard",
    },
  },
  {
    path: "ids-about",
    loadChildren: () =>
      import("./components/ids-about/ids-about.module").then(
        (m) => m.IdsAboutModule
      ),
    data: {
      title: "About",
      category: "Messages and Alerts",
      description:
        "Displays info about a product with copyright and browser specs",
    },
  },
  {
    path: "ids-empty-message",
    loadChildren: () =>
      import("./components/ids-empty-message/ids-empty-message.module").then(
        (m) => m.IdsEmptyMessageModule
      ),
    data: {
      title: "Empty Message",
      category: "Messages and Alerts",
      description: "Format for empty message alert",
    },
  },
  {
    path: "ids-error-page",
    loadChildren: () =>
      import("./components/ids-error-page/ids-error-page.module").then(
        (m) => m.IdsErrorPageModule
      ),
    data: {
      title: "Error Page",
      category: "Messages and Alerts",
      description: "Displays error message",
    },
  },
  {
    path: "ids-icon",
    loadChildren: () =>
      import("./components/ids-icon/ids-icon.module").then(
        (m) => m.IdsIconModule
      ),
    data: {
      title: "Icon",
      category: "Messages and Alerts",
      description: "SVG icons",
    },
  },
  {
    path: "ids-message",
    loadChildren: () =>
      import("./components/ids-message/ids-message.module").then(
        (m) => m.IdsMessageModule
      ),
    data: {
      title: "Message",
      category: "Messages and Alerts",
      description: "Displays a Message Dialog",
    },
  },
  {
    path: "ids-notification-banner",
    loadChildren: () =>
      import(
        "./components/ids-notification-banner/ids-notification-banner.module"
      ).then((m) => m.IdsNotificationBannerModule),
    data: {
      title: "Notification Banner",
      category: "Messages and Alerts",
      description: "Displays a Top Level Application Message",
    },
  },
  {
    path: "ids-progress-bar",
    loadChildren: () =>
      import("./components/ids-progress-bar/ids-progress-bar.module").then(
        (m) => m.IdsProgressBarModule
      ),
    data: {
      title: "Progress Bar",
      category: "Messages and Alerts",
      description: "Displays feedback on a process",
    },
  },
  {
    path: "ids-toast",
    loadChildren: () =>
      import("./components/ids-toast/ids-toast.module").then(
        (m) => m.IdsToastModule
      ),
    data: {
      title: "Toast",
      category: "Messages and Alerts",
      description: "Provides feedback after an action has taken place",
    },
  },
  {
    path: "ids-list-box",
    loadChildren: () =>
      import("./components/ids-list-box/ids-list-box.module").then(
        (m) => m.IdsListBoxModule
      ),
    data: {
      title: "IDS List Box",
      category: "Lists",
      description: "Displays List Box component",
    },
  },
  {
    path: "ids-list-builder",
    loadChildren: () =>
      import("./components/ids-list-builder/ids-list-builder.module").then(
        (m) => m.IdsListBuilderModule
      ),
    data: {
      title: "List Builder",
      category: "Lists",
      description: "Displays List Builder component",
    },
  },
  {
    path: "ids-list-view",
    loadChildren: () =>
      import("./components/ids-list-view/ids-list-view.module").then(
        (m) => m.IdsListViewModule
      ),
    data: {
      title: "List View",
      category: "Lists",
      description: "Use to display a list of records",
    },
  },
  {
    path: "ids-data-grid",
    loadChildren: () =>
      import("./components/ids-data-grid/ids-data-grid.module").then(
        (m) => m.IdsDataGridModule
      ),
    data: {
      title: "Data Grid",
      category: "Lists",
      description: "Tabular Data",
    },
  },
  {
    path: "ids-draggable",
    loadChildren: () =>
      import("./components/ids-draggable/ids-draggable.module").then(
        (m) => m.IdsDraggableModule
      ),
    data: {
      title: "Draggable",
      category: "Lists",
      description: "Drag API",
    },
  },
  {
    path: "ids-accordion",
    loadChildren: () =>
      import("./components/ids-accordion/ids-accordion.module").then(
        (m) => m.IdsAccordionModule
      ),
    data: {
      title: "Accordion",
      category: "Layouts",
      description: "Vertically Stacked Sections",
    },
  },
  {
    path: "ids-block-grid",
    loadChildren: () =>
      import("./components/ids-block-grid/ids-block-grid.module").then(
        (m) => m.IdsBlockGridModule
      ),
    data: {
      title: "Block Grid",
      category: "Layouts",
      description: "Box/Block Grid Layout",
    },
  },
  {
    path: "ids-layout-grid",
    loadChildren: () =>
      import("./components/ids-layout-grid/ids-layout-grid.module").then(
        (m) => m.IdsLayoutGridModule
      ),
    data: {
      title: "Layout Grid",
      category: "Layouts",
      description: "CSS Grid Layout Component",
    },
  },
  {
    path: "ids-calendar",
    loadChildren: () =>
      import("./components/ids-calendar/ids-calendar.module").then(
        (m) => m.IdsCalendarModule
      ),
    data: {
      title: "Calendar",
      category: "Layouts",
      description: "Displays month, week, day views",
    },
  },
  {
    path: "ids-card",
    loadChildren: () =>
      import("./components/ids-card/ids-card.module").then(
        (m) => m.IdsCardModule
      ),
    data: {
      title: "Card",
      category: "Layouts",
      description: "Card / Widget Layout",
    },
  },
  {
    path: "ids-container",
    loadChildren: () =>
      import("./components/ids-container/ids-container.module").then(
        (m) => m.IdsContainerModule
      ),
    data: {
      title: "Container",
      category: "Layouts",
      description: "Main container for themes / locale",
    },
  },
  {
    path: "ids-expandable-area",
    loadChildren: () =>
      import(
        "./components/ids-expandable-area/ids-expandable-area.module"
      ).then((m) => m.IdsExpandableAreaModule),
    data: {
      title: "Expandable Area",
      category: "Layouts",
      description: "Collapsible form sections",
    },
  },
  {
    path: "ids-popup",
    loadChildren: () =>
      import("./components/ids-popup/ids-popup.module").then(
        (m) => m.IdsPopupModule
      ),
    data: {
      title: "Popup",
      category: "Layouts",
      description: "Displays a Popup container",
    },
  },
  {
    path: "ids-toolbar",
    loadChildren: () =>
      import("./components/ids-toolbar/ids-toolbar.module").then(
        (m) => m.IdsToolbarModule
      ),
    data: {
      title: "Toolbar",
      category: "Layouts",
      description: "A container for buttons",
    },
  },
  {
    path: "ids-masthead",
    loadChildren: () =>
      import("./components/ids-masthead/ids-masthead.module").then(
        (m) => m.IdsMastheadModule
      ),
    data: {
      title: "Masthead",
      category: "Layouts",
      description: "Masthead component",
    },
  },
  {
    path: "ids-fieldset",
    loadChildren: () =>
      import("./components/ids-fieldset/ids-fieldset.module").then(
        (m) => m.IdsFieldsetModule
      ),
    data: {
      title: "Field Set",
      category: "Layouts",
      description: "Divide Form Areas",
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled",
      scrollOffset: [0, 145],
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
