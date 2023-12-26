import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsBreadcrumbComponent } from './ids-breadcrumb.component';
import { ExampleComponent } from './demos/example/example.component';
import { TruncatedComponent } from './demos/truncated/truncated.component';
import { ToolbarComponent } from './demos/toolbar/toolbar.component';
import { ControlFlowComponent } from './demos/control-flow/control-flow.component';
import { DataDrivenComponent } from './demos/data-driven/data-driven.component';
import { DeferredComponent } from './demos/deferred/deferred.component';
import { TemplateComponent } from './demos/template/template.component';

export const routes: Routes = [
  { 
    path: '',
    component: IdsBreadcrumbComponent
  },
  { 
    path: 'example',
    component: ExampleComponent,
    data: {
      type: 'Example',
      description: 'Simple breadcrumb in Angular',
    }
  },
  {
    path: 'control-flow',
    component: ControlFlowComponent,
    data: {
      type: 'Example',
      description: 'Using control flow features',
    }
  },
  {
    path: 'data-driven',
    component: DataDrivenComponent,
    data: {
      type: 'Example',
      description: 'Using data driven features',
    }
  },
  {
    path: 'deferred',
    component: DeferredComponent,
    data: {
      type: 'Example',
      description: 'Using defer blocks',
    }
  },
  { 
    path: 'truncated',
    component: TruncatedComponent,
    data: {
      type: 'Example',
      description: 'Shows truncation of breadcrumbs',
    }
  },
  { 
    path: 'toolbar',
    component: ToolbarComponent,
    data: {
      type: 'Example',
      description: 'Shows truncation of breadcrumbs',
    }
  },
  {
    path: 'template',
    component: TemplateComponent,
    data: {
      type: 'Example',
      description: 'Shows using a custom template',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsBreadcrumbRoutingModule { }
