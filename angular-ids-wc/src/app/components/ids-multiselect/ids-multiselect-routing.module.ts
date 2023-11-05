import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsMultiselectComponent } from './ids-multiselect.component';
import { ExampleComponent } from './demos/example/example.component';

export const routes: Routes = [
  { 
    path: '', 
    component: IdsMultiselectComponent,
  },
  { 
    path: 'example',
    component: ExampleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsMultiselectRoutingModule { }
