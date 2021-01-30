import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialWidgetModule } from 'ngx-material-widget'; 

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MaterialWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
