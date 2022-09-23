import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsRadioComponent } from './ids-radio.component';
import { ExampleComponent } from './demos/example/example.component';

export const routes: Routes = [
  { 
    path: '',
    component: IdsRadioComponent 
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
export class IdsRadioRoutingModule { }
