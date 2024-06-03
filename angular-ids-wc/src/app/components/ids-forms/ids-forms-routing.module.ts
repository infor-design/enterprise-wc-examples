import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsFormsComponent } from './ids-forms.component';
import { ExampleComponent } from './demos/example/example.component';
import { SubmitButtonComponent } from './demos/submit-button/submit-button.component';

export const routes: Routes = [
  {
    path: '',
    component: IdsFormsComponent
  },
  {
    path: 'example',
    component: ExampleComponent,
    data: {
      type: 'Example',
      description: 'All fields in a form'
    }
  },
  {
    path: 'submit-button',
    component: SubmitButtonComponent,
    data: {
      type: 'Example',
      description: 'With a submit button and attached event listener'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsFormsRoutingModule { }
