import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsAccordionComponent } from './ids-accordion.component';
import { ExampleComponent } from './demos/example/example.component';
import { DisabledComponent } from './demos/disabled/disabled.component';
import { IconComponent } from './demos/icon/icon.component';
import { NestedComponent } from './demos/nested/nested.component';
import { NestedSelectedEventComponent } from './demos/nested-selected-event/nested-selected-event.component';

export const routes: Routes = [
  {
    path: '',
    component: IdsAccordionComponent
  },
  {
    path: 'example',
    component: ExampleComponent,
    data: {
      type: 'Example',
      description: 'Shows default accordion example',
    }
  },
  {
    path: 'disabled',
    component: DisabledComponent,
    data: {
      type: 'Example',
      description: 'Shows a disabled accordion example',
    }
  },
  {
    path: 'icon',
    component: IconComponent,
    data: {
      type: 'Example',
      description: 'Shows an accordion with icons',
    }
  },
  {
    path: 'nested',
    component: NestedComponent,
    data: {
      type: 'Example',
      description: 'Shows a "tree", accordion nested example',
    }
  },
  {
    path: 'nested-selected-event',
    component: NestedSelectedEventComponent,
    data: {
      type: 'Example',
      description: 'Shows a "tree", accordion nested example with selected event',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsAccordionRoutingModule { }
