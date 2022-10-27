import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './demos/example/example.component';
import { IdsFieldsetComponent } from './ids-fieldset.component';

export const routes: Routes = [
  {
    path: '',
    component: IdsFieldsetComponent
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
export class IdsFieldsetRoutingModule { }
