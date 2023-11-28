import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsRadioComponent } from './ids-radio.component';
import { ExampleComponent } from './demos/example/example.component';
import { ControlFlowComponent } from './demos/control-flow/control-flow.component';
import { DataDrivenComponent } from './demos/data-driven/data-driven.component';
import { DeferredComponent } from './demos/deferred/deferred.component';

export const routes: Routes = [
  { 
    path: '',
    component: IdsRadioComponent 
  },
  {
    path: 'example',
    component: ExampleComponent
  },
  {
    path: 'control-flow',
    component: ControlFlowComponent
  },
  {
    path: 'data-driven',
    component: DataDrivenComponent
  },
  {
    path: 'deferred',
    component: DeferredComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsRadioRoutingModule { }
