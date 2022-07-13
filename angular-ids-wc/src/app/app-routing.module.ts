import { IdsAccordionComponent } from './components/ids-accordion/ids-accordion.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

// IDS Components
import { IdsSwaplistComponent } from './components/ids-swaplist/ids-swaplist.component';
import { IdsTagComponent } from './components/ids-tag/ids-tag.component';
import { IdsTooltipComponent } from './components/ids-tooltip/ids-tooltip.component';

// IDS Accordion Examples
import { IdsAccordionLpComponent } from './components/ids-accordion/ids-accordion-lp/ids-accordion-lp.component';
import { IdsAccordionExampleComponent } from './components/ids-accordion/demos/ids-accordion-example/ids-accordion-example.component';
import { IdsAccordionIconComponent } from './components/ids-accordion/demos/ids-accordion-icon/ids-accordion-icon.component';
import { IdsAccordionDisabledComponent } from './components/ids-accordion/demos/ids-accordion-disabled/ids-accordion-disabled.component';
import { IdsAccordionNestedComponent } from './components/ids-accordion/demos/ids-accordion-nested/ids-accordion-nested.component';

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