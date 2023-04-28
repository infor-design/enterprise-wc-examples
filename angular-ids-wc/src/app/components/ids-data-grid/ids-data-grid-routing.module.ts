import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdsDataGridComponent } from './ids-data-grid.component';
import { ExampleComponent } from './demos/example/example.component';
import { InstancesComponent } from './demos/instances/instances.component';

export const routes: Routes = [
  { 
    path: '', 
    component: IdsDataGridComponent
  },
  {
    path: 'example',
    component: ExampleComponent
  },
  {
    path: 'instances',
    component: InstancesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsDataGridRoutingModule { }
