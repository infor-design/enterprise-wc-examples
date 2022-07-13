import { AppRoutingModule } from './app-routing.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

// IDS Components
import { IdsSwaplistComponent } from './components/ids-swaplist/ids-swaplist.component';
import { IdsTagComponent } from './components/ids-tag/ids-tag.component';
import { IdsAccordionComponent } from './components/ids-accordion/ids-accordion.component';
import { IdsTooltipComponent } from './components/ids-tooltip/ids-tooltip.component';

// IDS Accordion Examples
import { IdsAccordionExampleComponent } from './components/ids-accordion/demos/ids-accordion-example/ids-accordion-example.component';
import { IdsAccordionDisabledComponent } from './components/ids-accordion/demos/ids-accordion-disabled/ids-accordion-disabled.component';
import { IdsAccordionIconComponent } from './components/ids-accordion/demos/ids-accordion-icon/ids-accordion-icon.component';
import { IdsAccordionNestedComponent } from './components/ids-accordion/demos/ids-accordion-nested/ids-accordion-nested.component';
import { IdsAccordionLpComponent } from './components/ids-accordion/ids-accordion-lp/ids-accordion-lp.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    AppRoutingModule,
  ],
  declarations: [ 
    AppComponent,
    IdsSwaplistComponent,
    HomeComponent, 
    IdsTagComponent,
    IdsTooltipComponent,
    IdsAccordionComponent,
    IdsAccordionExampleComponent,
    IdsAccordionDisabledComponent,
    IdsAccordionIconComponent,
    IdsAccordionNestedComponent,
    IdsAccordionLpComponent,
  ],
  bootstrap:    [ AppComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
