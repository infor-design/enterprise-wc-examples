import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsTimePickerComponent } from './ids-time-picker.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';
import { IntervalsComponent } from './demos/intervals/intervals.component';
import { ExampleComponent } from './demos/example/example.component';
import { SizesComponent } from './demos/sizes/sizes.component';
import { OpenComponent } from './demos/open/open.component';

export const routes: Routes = [
  { 
    path: '', 
    component: IdsTimePickerComponent
  },
  {
    path: 'example',
    component: ExampleComponent
  },
  {
    path: 'sizes',
    component: SizesComponent
  },
  {
    path: 'intervals',
    component: IntervalsComponent
  },
  {
    path: 'sandbox',
    component: SandboxComponent
  },
  {
    path: 'open',
    component: OpenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsTimePickerRoutingModule { }
