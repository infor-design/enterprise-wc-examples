import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsDropdownComponent } from './ids-dropdown.component';
import { ExampleComponent } from './demos/example/example.component';

const routes: Routes = [
  { 
    path: '',
    component: IdsDropdownComponent
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
export class IdsDropdownRoutingModule { }
