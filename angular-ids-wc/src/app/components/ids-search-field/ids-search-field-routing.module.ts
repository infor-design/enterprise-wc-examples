import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsSearchFieldComponent } from './ids-search-field.component';
import { ExampleComponent } from './demos/example/example.component';

export const routes: Routes = [
  { 
    path: '',
    component: IdsSearchFieldComponent
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
export class IdsSearchFieldRoutingModule { }
