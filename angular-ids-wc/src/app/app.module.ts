import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IdsSwaplistComponent } from './components/ids-swaplist/ids-swaplist.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, IdsSwaplistComponent ],
  bootstrap:    [ AppComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
