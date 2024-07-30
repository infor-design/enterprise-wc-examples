import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsMultiselectComponent } from './ids-multiselect.component';
import { ExampleComponent } from './demos/example/example.component';
import { ExampleTypeaheadComponent } from './demos/typeahead/typeahead.component';

export const routes: Routes = [
  {
    path: '',
    component: IdsMultiselectComponent,
  },
  {
    path: 'example',
    component: ExampleComponent,
  },
  {
    path: 'typeahead',
    component: ExampleTypeaheadComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsMultiselectRoutingModule { }
