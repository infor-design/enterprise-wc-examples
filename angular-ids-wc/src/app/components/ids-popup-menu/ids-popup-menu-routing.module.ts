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
    component: ExampleComponent
  },
  {
    path: 'data-driven',
    component: DataDrivenComponent
  },
  {
    path: 'selected-state',
    component: SelectedStateComponent
  },
  {
    path: 'trigger-immediate',
    component: TriggerImmediateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsPopupMenuRoutingModule { }
