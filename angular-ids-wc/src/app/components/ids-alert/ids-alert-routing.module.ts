import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsAlertComponent } from './ids-alert.component';
import { ExampleComponent } from './demos/example/example.component';

export const routes: Routes = [
  { 
    path: '', 
    component: IdsAlertComponent 
  },
  {
    path: 'example',
    component: ExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsAlertRoutingModule { }
