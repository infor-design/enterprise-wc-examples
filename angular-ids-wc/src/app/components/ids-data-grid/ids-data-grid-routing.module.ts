import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdsDataGridComponent } from './ids-data-grid.component';
import { ExampleComponent } from './demos/example/example.component';

export const routes: Routes = [
  { 
    path: '', 
    component: IdsDataGridComponent
  },
  { 
    path: 'example', 
    component: ExampleComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsDataGridRoutingModule { }
