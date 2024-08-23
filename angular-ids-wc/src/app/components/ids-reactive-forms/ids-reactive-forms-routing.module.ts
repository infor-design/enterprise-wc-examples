import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsReactiveFormsComponent } from './ids-reactive-forms.component';
import { ExampleComponent } from './demos/example/example.component';
import { FormControlComponent } from './demos/form-control/form-control.component';

export const routes: Routes = [
  {
    path: '',
    component: IdsReactiveFormsComponent
  },
  {
    path: 'example',
    component: ExampleComponent,
    data: {
      type: 'Example',
      description: 'All fields in a reactive form '
    }
  },
  {
    path: 'form-control',
    component: FormControlComponent,
    data: {
      type: 'Example',
      description: 'FormControl and value binding'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsReactiveFormsRoutingModule { }
