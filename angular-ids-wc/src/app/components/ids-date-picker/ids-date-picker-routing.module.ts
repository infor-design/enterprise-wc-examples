import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsDatePickerComponent } from './ids-date-picker.component';
import { ExampleComponent } from './demos/example/example.component';
import { RangeComponent } from './demos/range/range.component';
import { SizesComponent } from './demos/sizes/sizes.component';
import { DisabledDatesComponent } from './demos/disabled-dates/disabled-dates.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';
import { AxeComponent } from './demos/axe/axe.component';

export const routes: Routes = [
  { 
    path: '',
    component: IdsDatePickerComponent
  },
  {
    path: 'example',
    component: ExampleComponent
  },
  {
    path: 'range',
    component: RangeComponent
  },
  {
    path: 'sizes',
    component: SizesComponent
  },
  {
    path: 'disabled-dates',
    component: DisabledDatesComponent
  },
  {
    path: 'sandbox',
    component: SandboxComponent
  },
  {
    path: 'axe',
    component: AxeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsDatePickerRoutingModule { }
