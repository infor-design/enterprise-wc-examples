import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home',
    }
  },
  { 
    path: 'ids-accordion', 
    loadChildren: () => import('./components/ids-accordion/ids-accordion.module').then(m => m.IdsAccordionModule),
    data: {
      title: 'IDS Accordion',
      category: 'Layouts',
      description: 'Vertically Stacked Sections'
    },
  },
  { 
    path: 'ids-alert', 
    loadChildren: () => import('./components/ids-alert/ids-alert.module').then(m => m.IdsAlertModule),
    data: {
      title: 'IDS Alert',
      category: 'Form Inputs',
      description: 'Alert Indicator/icon'
    },
  },
  { 
    path: 'ids-checkbox', 
    loadChildren: () => import('./components/ids-checkbox/ids-checkbox.module').then(m => m.IdsCheckboxModule),
    data: {
      title: 'IDS Checkbox',
      category: 'Form Inputs',
      description: 'Checkbox Input Element'
    }
  },
  { 
    path: 'ids-checkbox-group',
    loadChildren: () => import('./components/ids-checkbox-group/ids-checkbox-group.module').then(m => m.IdsCheckboxGroupModule),
    data: {
      title: 'IDS Checkbox Group',
      category: 'Form Inputs',
      description: 'Group of checkboxes with label'
    }
  },
  { 
    path: 'ids-color-picker', 
    loadChildren: () => import('./components/ids-color-picker/ids-color-picker.module').then(m => m.IdsColorPickerModule),
    data: {
      title: 'IDS Color Picker',
      category: 'Form Inputs',
      description: 'Input field for colors'
    }
  },
  { 
    path: 'ids-data-label', 
    loadChildren: () => import('./components/ids-data-label/ids-data-label.module').then(m => m.IdsDataLabelModule),
    data: {
      title: 'IDS Data Label',
      category: 'Form Inputs',
      description: 'Readonly data/label component'
    }
  },
  { 
    path: 'ids-date-picker', 
    loadChildren: () => import('./components/ids-date-picker/ids-date-picker.module').then(m => m.IdsDatePickerModule),
    data: {
      title: 'IDS Date Picker',
      category: 'Form Inputs',
      description: 'Input field for date'
    }
  },
  { 
    path: 'ids-dropdown',
    loadChildren: () => import('./components/ids-dropdown/ids-dropdown.module').then(m => m.IdsDropdownModule),
    data: {
      title: 'IDS Drodown',
      category: 'Form Inputs',
      description: 'Select from a list of items'
    }
  },
  { 
    path: 'ids-editor',
    loadChildren: () => import('./components/ids-editor/ids-editor.module').then(m => m.IdsEditorModule),
    data: {
      title: 'IDS Editor',
      category: 'Form Inputs',
      description: 'An input for multi line rich text'
    }
  },
  { 
    path: 'ids-input',
    loadChildren: () => import('./components/ids-input/ids-input.module').then(m => m.IdsInputModule),
    data: {
      title: 'IDS Input',
      category: 'Form Inputs',
      description: 'Input element and features'
    }
  },
  { 
    path: 'ids-lookup',
    loadChildren: () => import('./components/ids-lookup/ids-lookup.module').then(m => m.IdsLookupModule),
    data: {
      title: 'IDS Lookups',
      category: 'Form Inputs',
      description: 'Select from a data grid list'
    }
  },
  { 
    path: 'ids-mask', 
    loadChildren: () => import('./components/ids-mask/ids-mask.module').then(m => m.IdsMaskModule),
    data: {
      title: 'IDS Mask',
      category: 'Form Inputs',
      description: 'Util for masking input'
    },
  },
  { 
    path: 'ids-popup', 
    loadChildren: () => import('./components/ids-popup/ids-popup.module').then(m => m.IdsPopupModule),
    data: {
      title: 'IDS Popup',
      category: 'Layouts',
      description: 'Displays a Popup container'
    }
  },
  { 
    path: 'ids-swaplist', 
    loadChildren: () => import('./components/ids-swaplist/ids-swaplist.module').then(m => m.IdsSwaplistModule),
    data: {
      title: 'IDS Swaplist',
      category: 'Lists',
      description: 'Displays Swaplist component'
    }
  },
  { 
    path: 'ids-tag', 
    loadChildren: () => import('./components/ids-tag/ids-tag.module').then(m => m.IdsTagModule),
    data: {
      title: 'IDS Tag',
      category: 'Navigation and Interaction',
      description: 'UI Classification'
    }
  },
  { 
    path: 'ids-tooltip', 
    loadChildren: () => import('./components/ids-tooltip/ids-tooltip.module').then(m => m.IdsTooltipModule),
    data: {
      title: 'IDS Tooltip',
      category: 'Messages and Alerts',
      description: 'A message tooltip that shows on click/hover/focus'
    },
  },
  { 
    path: 'ids-multiselect',
    loadChildren: () => import('./components/ids-multiselect/ids-multiselect.module').then(m => m.IdsMultiselectModule),
    data: {
      title: 'IDS Multiselect',
      category: 'Form Inputs',
      description: 'Select multiple values from a list'
    },
  },
  { 
    path: 'ids-radio',
    loadChildren: () => import('./components/ids-radio/ids-radio.module').then(m => m.IdsRadioModule),
    data: {
      title: 'IDS Radio',
      category: 'Form Inputs',
      description: 'Input Radio Element'
    },
  },
  { 
    path: 'ids-search-field', 
    loadChildren: () => import('./components/ids-search-field/ids-search-field.module').then(m => m.IdsSearchFieldModule),
    data: {
      title: 'IDS Search Field',
      category: 'Form Inputs',
      description: 'Interactive input for typing into search'
    },
  },
  { 
    path: 'ids-spinbox', 
    loadChildren: () => import('./components/ids-spinbox/ids-spinbox.module').then(m => m.IdsSpinboxModule),
    data: {
      title: 'IDS Spinbox',
      category: 'Form Inputs',
      description: 'Input element for numbers'
    },
  },
  { 
    path: 'ids-switch',
    loadChildren: () => import('./components/ids-switch/ids-switch.module').then(m => m.IdsSwitchModule),
    data: {
      title: 'IDS Switch',
      category: 'Form Inputs',
      description: 'Input element with on/off capabilities'
    },
  },
  { 
    path: 'ids-textarea', 
    loadChildren: () => import('./components/ids-textarea/ids-textarea.module').then(m => m.IdsTextareaModule),
    data: {
      title: 'IDS Textarea',
      category: 'Form Inputs',
      description: 'An input for multi line text'
    },
  },
  { 
    path: 'ids-time-picker',
    loadChildren: () => import('./components/ids-time-picker/ids-time-picker.module').then(m => m.IdsTimePickerModule),
    data: {
      title: 'IDS Time Picker',
      category: 'Form Inputs',
      description: 'Input field for time and dates'
    },
  },
  { 
    path: 'ids-trigger-field',
    loadChildren: () => import('./components/ids-trigger-field/ids-trigger-field.module').then(m => m.IdsTriggerFieldModule),
    data: {
      title: 'IDS Trigger Field',
      category: 'Form Inputs',
      description: 'An input field with an icon'
    },
  },
  { 
    path: 'ids-upload',
    loadChildren: () => import('./components/ids-upload/ids-upload.module').then(m => m.IdsUploadModule),
    data: {
      title: 'IDS Upload',
      category: 'Form Inputs',
      description: 'Upload a single file in a field'
    },
  },
  { 
    path: 'ids-upload-advanced',
    loadChildren: () => import('./components/ids-upload-advanced/ids-upload-advanced.module').then(m => m.IdsUploadAdvancedModule),
    data: {
      title: 'IDS Upload Advanced',
      category: 'Form Inputs',
      description: 'Upload multiple files'
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 145],
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }