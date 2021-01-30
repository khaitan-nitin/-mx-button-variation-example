import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialWidgetModule } from 'ngx-material-widget'; 

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
