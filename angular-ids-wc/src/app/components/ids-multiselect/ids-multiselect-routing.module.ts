import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsMultiselectComponent } from './ids-multiselect.component';
import { ExampleComponent } from './demos/example/example.component';
import { ExampleComponent as ExampleComponent2 } from './demos/dropdown/example.component';

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
    path: 'dropdown',
    component: ExampleComponent2,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsMultiselectRoutingModule { }
