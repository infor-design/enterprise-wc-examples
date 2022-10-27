import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsBreadcrumbComponent } from './ids-breadcrumb.component';
import { ExampleComponent } from './demos/example/example.component';
import { TruncatedComponent } from './demos/truncated/truncated.component';
import { ToolbarComponent } from './demos/toolbar/toolbar.component';

export const routes: Routes = [
  { 
    path: '',
    component: IdsBreadcrumbComponent
  },
  { 
    path: 'example',
    component: ExampleComponent
  },
  { 
    path: 'truncated',
    component: TruncatedComponent
  },
  { 
    path: 'toolbar',
    component: ToolbarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsBreadcrumbRoutingModule { }
