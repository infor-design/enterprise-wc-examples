import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsButtonComponent } from './ids-button.component';
import { ExampleComponent } from './demos/example/example.component';
import { ResponsiveComponent } from './demos/responsive/responsive.component';
import { TestFallbackSlotComponent } from './demos/test-fallback-slot/test-fallback-slot.component';
import { PerformanceComponent } from './demos/performance/performance.component';

export const routes: Routes = [
  { 
    path: '',
    component: IdsButtonComponent
  },
  { 
    path: 'example',
    component: ExampleComponent,
    data: {
      type: 'Example',
      description: 'Shows all button examples',
    }
  },
  { 
    path: 'responsive',
    component: ResponsiveComponent,
    data: {
      type: 'Example',
      description: 'Shows 100% button width',
    }
  },
  { 
    path: 'test-fallback-slot',
    component: TestFallbackSlotComponent,
    data: {
      type: 'Example',
      description: 'Shows using a fallback slot',
    }
  },
  { 
    path: 'performance',
    component: PerformanceComponent,
    data: {
      type: 'Example',
      description: 'Shows a performance example',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsButtonRoutingModule { }
