import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsPopupComponent } from './ids-popup.component';
import { ExampleComponent } from './demos/example/example.component';

export const routes: Routes = [
  { 
    path: '', 
    component: IdsPopupComponent 
  },
  {
    path: 'example',
    component: ExampleComponent,
    data: {
      type: 'Example',
      description: 'Simple popup in Angular',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsPopupRoutingModule { }
