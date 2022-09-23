import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsMenuComponent } from './ids-menu.component';
import { ExampleComponent } from './demos/example/example.component';

export const routes: Routes = [
  { 
    path: '',
    component: IdsMenuComponent
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
export class IdsMenuRoutingModule { }
