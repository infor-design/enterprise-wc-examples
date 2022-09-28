import { IdsContainerComponent } from './ids-container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './demos/example/example.component';

export const routes: Routes = [
  {
    path: '',
    component: IdsContainerComponent
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
export class IdsContainerRoutingModule { }
