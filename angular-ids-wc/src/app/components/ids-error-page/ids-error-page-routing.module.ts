import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsErrorPageComponent } from './ids-error-page.component';
import { ExampleComponent } from './demos/example/example.component';

export const routes: Routes = [
  { 
    path: '', 
    component: IdsErrorPageComponent
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
export class IdsErrorPageRoutingModule { }
