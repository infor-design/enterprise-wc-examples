import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdsDataGridComponent } from './ids-data-grid.component';
import { ExampleComponent } from './demos/example/example.component';
import { UserSettingsComponent } from './demos/user-settings/user-settings.component';

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
    path: 'user-settings', 
    component: UserSettingsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsDataGridRoutingModule { }
