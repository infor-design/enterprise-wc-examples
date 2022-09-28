import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdsCalendarComponent } from './ids-calendar.component';
import { ExampleComponent } from './demos/example/example.component';

export const routes: Routes = [
  {
    path: '',
    component: IdsCalendarComponent
  },
  {
    path: 'example',
    component: ExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsCalendarRoutingModule { }
