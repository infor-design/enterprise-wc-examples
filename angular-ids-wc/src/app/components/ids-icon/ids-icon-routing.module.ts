import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsIconComponent } from './ids-icon.component';
import { ExampleComponent } from './demos/example/example.component';
import { NotificationBadgeComponent } from './demos/notification-badge/notification-badge.component';
import { VariantAlternateComponent } from './demos/variant-alternate/variant-alternate.component';

export const routes: Routes = [
  { 
    path: '', 
    component: IdsIconComponent
  },
  { 
    path: 'example', 
    component: ExampleComponent
  },
  { 
    path: 'notification-badge', 
    component: NotificationBadgeComponent
  },
  { 
    path: 'variant-alternate', 
    component: VariantAlternateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsIconRoutingModule { }
