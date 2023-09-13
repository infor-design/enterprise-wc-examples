import { AppRoutingModule } from './app-routing.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DataService } from './shared/mock/data.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
  ],
  providers: [ DataService ],
  bootstrap:    [ AppComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
