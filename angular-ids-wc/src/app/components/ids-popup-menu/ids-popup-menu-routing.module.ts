import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsPopupMenuComponent } from './ids-popup-menu.component';
import { ExampleComponent } from './demos/example/example.component';
import { DataDrivenComponent } from './demos/data-driven/data-driven.component';
import { SelectedStateComponent } from './demos/selected-state/selected-state.component';
import { TriggerImmediateComponent } from './demos/trigger-immediate/trigger-immediate.component';

export const routes: Routes = [
  { 
    path: '',
    component: IdsPopupMenuComponent
  },
  {
    path: 'example',
    component: ExampleComponent,
    data: {
      type: 'Example',
      description: 'Simple popup example in angular',
    }
  },
  {
    path: 'data-driven',
    component: DataDrivenComponent,
    data: {
      type: 'Example',
      description: 'Data driven angular popup example',
    }
  },
  {
    path: 'selected-state',
    component: SelectedStateComponent,
    data: {
      type: 'Example',
      description: 'Data driven angular selection states',
    }
  },
  {
    path: 'trigger-immediate',
    component: TriggerImmediateComponent,
    data: {
      type: 'Example',
      description: 'Using immediate trigger',
    }
  },
  {
    path: 'async-callback',
    component: TriggerImmediateComponent,
    data: {
      type: 'Example',
      description: 'Using viewchild to setup before show callback',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsPopupMenuRoutingModule { }
