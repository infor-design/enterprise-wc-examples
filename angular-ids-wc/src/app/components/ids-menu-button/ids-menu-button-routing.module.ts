import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsMenuButtonComponent } from './ids-menu-button.component';
import { ExampleComponent } from './demos/example/example.component';
import { DisabledComponent } from './demos/disabled/disabled.component';
import { DisplaySelectedComponent } from './demos/display-selected/display-selected.component';

export const routes: Routes = [
  { 
    path: '',
    component: IdsMenuButtonComponent
  },
  { 
    path: 'example',
    component: ExampleComponent,
    data: {
      type: 'Example',
      description: 'Various menu buttons in angular',
    }
  },
  { 
    path: 'disabled',
    component: DisabledComponent,
    data: {
      type: 'Example',
      description: 'Disabled menu buttons in Angular',
    }
  },
  { 
    path: 'display-selected',
    component: DisplaySelectedComponent,
    data: {
      type: 'Example',
      description: 'Change button content based on selection',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsMenuButtonRoutingModule { }
