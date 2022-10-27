import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsSpinboxComponent } from './ids-spinbox.component';
import { ExampleComponent } from './demos/example/example.component';

export const routes: Routes = [
  { 
    path: '', 
    component: IdsSpinboxComponent 
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
export class IdsSpinboxRoutingModule { }
