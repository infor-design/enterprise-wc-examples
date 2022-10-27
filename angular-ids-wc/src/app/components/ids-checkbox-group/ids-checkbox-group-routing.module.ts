import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsCheckboxGroupComponent } from './ids-checkbox-group.component';
import { ExampleComponent } from './demos/example/example.component';

export const routes: Routes = [
  { 
    path: '',
    component: IdsCheckboxGroupComponent 
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
export class IdsCheckboxGroupRoutingModule { }
