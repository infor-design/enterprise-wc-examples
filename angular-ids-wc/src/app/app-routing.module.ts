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
      category: 'Form Inputs',
      description: 'Lookup Element'
    },
  },
  { 
    path: 'ids-alert', 
    loadChildren: () => import('./components/ids-alert/ids-alert.module').then(m => m.IdsAlertModule),
    data: {
      title: 'IDS Alert',
      category: 'Form Inputs',
      description: 'Lookup Element'
    },
  },
  { 
    path: 'ids-checkbox', 
    loadChildren: () => import('./components/ids-checkbox/ids-checkbox.module').then(m => m.IdsCheckboxModule),
    data: {
      title: 'IDS Checkbox',
      category: 'Form Inputs',
      description: 'Lookup Element'
    }
  },
  { 
    path: 'ids-checkbox-group',
    loadChildren: () => import('./components/ids-checkbox-group/ids-checkbox-group.module').then(m => m.IdsCheckboxGroupModule),
    data: {
      title: 'IDS Checkbox Group',
      category: 'Form Inputs',
      description: 'Lookup Element'
    }
  },
  { 
    path: 'ids-color-picker', 
    loadChildren: () => import('./components/ids-color-picker/ids-color-picker.module').then(m => m.IdsColorPickerModule),
    data: {
      title: 'IDS Color Picker',
      category: 'Form Inputs',
      description: 'Lookup Element'
    }
  },
  { 
    path: 'ids-data-label', 
    loadChildren: () => import('./components/ids-data-label/ids-data-label.module').then(m => m.IdsDataLabelModule),
    data: {
      title: 'IDS Data Label',
      category: 'Form Inputs',
      description: 'Lookup Element'
    }
  },
  { 
    path: 'ids-date-picker', 
    loadChildren: () => import('./components/ids-date-picker/ids-date-picker.module').then(m => m.IdsDatePickerModule),
    data: {
      title: 'IDS Date Picker',
      category: 'Form Inputs',
      description: 'Lookup Element'
    }
  },
  { 
    path: 'ids-dropdown',
    loadChildren: () => import('./components/ids-dropdown/ids-dropdown.module').then(m => m.IdsDropdownModule),
    data: {
      title: 'IDS Drodown',
      category: 'Form Inputs',
      description: 'Lookup Element'
    }
  },
  { 
    path: 'ids-editor',
    loadChildren: () => import('./components/ids-editor/ids-editor.module').then(m => m.IdsEditorModule),
    data: {
      title: 'IDS Editor',
      category: 'Form Inputs',
      description: 'Lookup Element'
    }
  },
  { 
    path: 'ids-input',
    loadChildren: () => import('./components/ids-input/ids-input.module').then(m => m.IdsInputModule),
    data: {
      title: 'IDS Input',
      category: 'Form Inputs',
      description: 'Lookup Element'
    }
  },
  { 
    path: 'ids-lookup',
    loadChildren: () => import('./components/ids-lookup/ids-lookup.module').then(m => m.IdsLookupModule),
    data: {
      title: 'IDS Lookups',
      category: 'Form Inputs',
      description: 'Lookup Element'
    }
  },
  { 
    path: 'ids-mask', 
    loadChildren: () => import('./components/ids-mask/ids-mask.module').then(m => m.IdsMaskModule),
    data: {
      title: 'IDS Mask',
      category: 'Form Inputs',
      description: 'Lookup Element'
    },
  },
  { 
    path: 'ids-popup', 
    loadChildren: () => import('./components/ids-popup/ids-popup.module').then(m => m.IdsPopupModule),
    data: {
      title: 'IDS Popup',
      category: 'Form Inputs',
      description: 'Lookup Element'
    }
  },
  { 
    path: 'ids-swaplist', 
    loadChildren: () => import('./components/ids-swaplist/ids-swaplist.module').then(m => m.IdsSwaplistModule),
    data: {
      title: 'IDS Swaplist',
      category: 'Form Inputs',
      description: 'Lookup Element'
    }
  },
  { 
    path: 'ids-tag', 
    loadChildren: () => import('./components/ids-tag/ids-tag.module').then(m => m.IdsTagModule),
    data: {
      title: 'IDS Tag',
      category: 'Form Inputs',
      description: 'Lookup Element'
    }
  },
  { 
    path: 'ids-tooltip', 
    loadChildren: () => import('./components/ids-tooltip/ids-tooltip.module').then(m => m.IdsTooltipModule),
    data: {
      title: 'IDS Tooltip',
      category: 'Form Inputs',
      description: 'Lookup Element'
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