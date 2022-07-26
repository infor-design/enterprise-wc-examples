import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsDataLabelComponent } from './ids-data-label.component';
import { ExampleComponent } from './demos/example/example.component';

export const routes: Routes = [
  { 
    path: '',
    component: IdsDataLabelComponent
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
export class IdsDataLabelRoutingModule { }
