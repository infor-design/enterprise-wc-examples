import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsDatePickerComponent } from './ids-date-picker.component';
import { ExampleComponent } from './demos/example/example.component';

const routes: Routes = [
  { 
    path: '',
    component: IdsDatePickerComponent
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
export class IdsDatePickerRoutingModule { }
