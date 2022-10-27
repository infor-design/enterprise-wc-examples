import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsMessageComponent } from './ids-message.component';
import { ExampleComponent } from './demos/example/example.component';
import { TypesComponent } from './demos/types/types.component';
import { OverlayOpacityComponent } from './demos/overlay-opacity/overlay-opacity.component';
import { EventsComponent } from './demos/events/events.component';

export const routes: Routes = [
  { 
    path: '',
    component: IdsMessageComponent 
  },
  { 
    path: 'example',
    component: ExampleComponent 
  },
  { 
    path: 'types',
    component: TypesComponent
  },
  { 
    path: 'overlay-opacity',
    component: OverlayOpacityComponent
  },
  { 
    path: 'events',
    component: EventsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsMessageRoutingModule { }
