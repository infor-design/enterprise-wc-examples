import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsDropdownComponent } from './ids-dropdown.component';
import { ExampleComponent } from './demos/example/example.component';
import { TypeaheadComponent } from './demos/typeahead/typeahead.component';
import { SizesComponent } from './demos/sizes/sizes.component';

export const routes: Routes = [
  { 
    path: '',
    component: IdsDropdownComponent
  },
  {
    path: 'example',
    component: ExampleComponent
  },
  {
    path: 'typeahead',
    component: TypeaheadComponent
  },
  {
    path: 'sizes',
    component: SizesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsDropdownRoutingModule { }
