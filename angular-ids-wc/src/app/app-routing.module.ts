import { IdsLookupExampleComponent } from './components/ids-lookup/demos/ids-lookup-example/ids-lookup-example.component';
import { IdsLookupComponent } from './components/ids-lookup/ids-lookup.component';
import { IdsEditorExampleComponent } from './components/ids-editor/demos/ids-editor-example/ids-editor-example.component';
import { IdsEditorComponent } from './components/ids-editor/ids-editor.component';
import { IdsInputExampleComponent } from './components/ids-input/demos/ids-input-example/ids-input-example.component';
import { IdsInputComponent } from './components/ids-input/ids-input.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

// IDS Components
import { IdsSwaplistComponent } from './components/ids-swaplist/ids-swaplist.component';
import { IdsTagComponent } from './components/ids-tag/ids-tag.component';
import { IdsTooltipComponent } from './components/ids-tooltip/ids-tooltip.component';

import { IdsAccordionComponent } from './components/ids-accordion/ids-accordion.component';
import { IdsAccordionLpComponent } from './components/ids-accordion/ids-accordion-lp/ids-accordion-lp.component';
import { IdsAccordionExampleComponent } from './components/ids-accordion/demos/ids-accordion-example/ids-accordion-example.component';
import { IdsAccordionIconComponent } from './components/ids-accordion/demos/ids-accordion-icon/ids-accordion-icon.component';
import { IdsAccordionDisabledComponent } from './components/ids-accordion/demos/ids-accordion-disabled/ids-accordion-disabled.component';
import { IdsAccordionNestedComponent } from './components/ids-accordion/demos/ids-accordion-nested/ids-accordion-nested.component';

import { IdsAlertComponent } from './components/ids-alert/ids-alert.component';
import { IdsAlertExampleComponent } from './components/ids-alert/demos/ids-alert-example/ids-alert-example.component';

import { IdsCheckboxComponent } from './components/ids-checkbox/ids-checkbox.component';
import { IdsCheckboxExampleComponent } from './components/ids-checkbox/demos/ids-checkbox-example/ids-checkbox-example.component';

import { IdsDataLabelComponent } from './components/ids-data-label/ids-data-label.component';
import { IdsDataLabelExampleComponent } from './components/ids-data-label/demos/ids-data-label-example/ids-data-label-example.component';

import { IdsDropdownComponent } from './components/ids-dropdown/ids-dropdown.component';
import { IdsDropdownExampleComponent } from './components/ids-dropdown/demos/ids-dropdown-example/ids-dropdown-example.component';

import { IdsPopupExampleComponent } from './components/ids-popup/demos/ids-popup-example/ids-popup-example.component';
import { IdsPopupComponent } from './components/ids-popup/ids-popup.component';

import { IdsDatePickerComponent } from './components/ids-date-picker/ids-date-picker.component';
import { IdsDatePickerExampleComponent } from './components/ids-date-picker/demos/ids-date-picker-example/ids-date-picker-example.component';

import { IdsColorPickerComponent } from './components/ids-color-picker/ids-color-picker.component';
import { IdsColorPickerExampleComponent } from './components/ids-color-picker/demos/ids-color-picker-example/ids-color-picker-example.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home',
    }
  },
  {
    path: 'ids-tag',
    component: IdsTagComponent,
    data: {
      title: 'IDS Tag',
      category: 'Navigation and Interaction',
      description: 'UI Classification'
    }
  },
  {
    path: 'ids-swaplist',
    component: IdsSwaplistComponent,
    data: {
      title: 'IDS Swaplist',
      category: 'Lists',
      description: 'Displays Swaplist Component'
    }
  },
  {
    path: 'ids-accordion',
    component: IdsAccordionComponent,
    data: {
      title: 'IDS Accordion',
      category: 'Layouts',
      description: 'Vertically Stacked Sections'
    },
    children: [
      {
        path: '',
        component: IdsAccordionLpComponent
      },
      { 
        path: 'example', 
        component: IdsAccordionExampleComponent,
        data: {
          title: 'Example',
          type: 'Main Example',
          description: 'Shows a basic accordion'
        }
      },
      { 
        path: 'disabled', 
        component: IdsAccordionDisabledComponent,
        data: {
          title: 'Disabled',
          type: 'Main Example',
          description: 'Shows a basic accordion'
        }
      },
      { 
        path: 'icon', 
        component: IdsAccordionIconComponent,
        data: {
          title: 'Icon',
          type: 'Main Example',
          description: 'Shows a basic accordion'
        }
      },
      { 
        path: 'nested', 
        component: IdsAccordionNestedComponent,
        data: {
          title: 'Nested',
          type: 'Main Example',
          description: 'Shows a basic accordion'
        }
      },
    ]
  },
  {
    path: 'ids-alert',
    component: IdsAlertComponent,
    data: {
      title: 'IDS Alert',
      category: 'Form Inputs',
      description: 'Alert Indicator/Icon'
    },
    children: [
      { 
        path: 'example', 
        component: IdsAlertExampleComponent,
        data: {
          title: 'Example',
          type: 'Main Example',
          description: 'Shows all alert types'
        }
      }
    ]
  },
  {
    path: 'ids-checkbox',
    component: IdsCheckboxComponent,
    data: {
      title: 'IDS Checkbox',
      category: 'Form Inputs',
      description: 'Checkbox Input Element'
    },
    children: [
      { 
        path: 'example', 
        component: IdsCheckboxExampleComponent,
        data: {
          title: 'Example',
          type: 'Main Example',
          description: 'Shows all checkbox settings and states'
        }
      }
    ]
  },
  {
    path: 'ids-color-picker',
    component: IdsColorPickerComponent,
    data: {
      title: 'IDS Color Picker',
      category: 'Form Inputs',
      description: 'Checkbox Input Element'
    },
    children: [
      { 
        path: 'example', 
        component: IdsColorPickerExampleComponent,
        data: {
          title: 'Example',
          type: 'Main Example',
          description: 'Shows all color picker settings and states'
        }
      }
    ]
  },
  {
    path: 'ids-data-label',
    component: IdsDataLabelComponent,
    data: {
      title: 'IDS Data Label',
      category: 'Form Inputs',
      description: 'Checkbox Input Element'
    },
    children: [
      { 
        path: 'example', 
        component: IdsDataLabelExampleComponent,
        data: {
          title: 'Example',
          type: 'Main Example',
          description: 'Shows all color picker settings and states'
        }
      }
    ]
  },
  {
    path: 'ids-date-picker',
    component: IdsDatePickerComponent,
    data: {
      title: 'IDS Date Picker',
      category: 'Form Inputs',
      description: 'Checkbox Input Element'
    },
    children: [
      {
        path: 'example', 
        component: IdsDatePickerExampleComponent,
        data: {
          title: 'Example',
          type: 'Main Example',
          description: 'Shows all date picker settings and states'
        }
      }
    ]
  },
  {
    path: 'ids-dropdown',
    component: IdsDropdownComponent,
    data: {
      title: 'IDS Dropdown',
      category: 'Form Inputs',
      description: 'Checkbox Input Element'
    },
    children: [
      {
        path: 'example', 
        component: IdsDropdownExampleComponent,
        data: {
          title: 'Example',
          type: 'Main Example',
          description: 'Shows all date picker settings and states'
        }
      }
    ]
  },
  {
    path: 'ids-popup',
    component: IdsPopupComponent,
    data: {
      title: 'IDS Dropdown',
      category: 'Form Inputs',
      description: 'Checkbox Input Element'
    },
    children: [
      {
        path: 'example', 
        component: IdsPopupExampleComponent,
        data: {
          title: 'Example',
          type: 'Main Example',
          description: 'Shows all date picker settings and states'
        }
      }
    ]
  },
  {
    path: 'ids-input',
    component: IdsInputComponent,
    data: {
      title: 'IDS Input',
      category: 'Form Inputs',
      description: 'Input Element'
    },
    children: [
      {
        path: 'example', 
        component: IdsInputExampleComponent,
        data: {
          title: 'Example',
          type: 'Main Example',
          description: 'Shows input'
        }
      }
    ]
  },
  {
    path: 'ids-editor',
    component: IdsEditorComponent,
    data: {
      title: 'IDS Editor',
      category: 'Form Inputs',
      description: 'Editor Element'
    },
    children: [
      {
        path: 'example', 
        component: IdsEditorExampleComponent,
        data: {
          title: 'Example',
          type: 'Main Example',
          description: 'Shows input'
        }
      }
    ]
  },
  {
    path: 'ids-lookup',
    component: IdsLookupComponent,
    data: {
      title: 'IDS Lookup',
      category: 'Form Inputs',
      description: 'Lookup Element'
    },
    children: [
      {
        path: 'example', 
        component: IdsLookupExampleComponent,
        data: {
          title: 'Example',
          type: 'Main Example',
          description: 'Shows input'
        }
      }
    ]
  },
  {
    path: 'ids-tooltip',
    component: IdsTooltipComponent,
    data: {
      title: 'IDS Tooltip',
      category: 'Layouts',
      description: 'A container for buttons'
    }
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