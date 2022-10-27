import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './demos/example/example.component';
import { IdsExpandableAreaComponent } from './ids-expandable-area.component';

export const routes: Routes = [
  {
    path: '',
    component: IdsExpandableAreaComponent
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
export class IdsExpandableAreaRoutingModule { }
