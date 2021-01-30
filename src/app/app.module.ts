import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ButtonComponent } from './app.component';

import { AdminBuilderModule } from 'ngx-material-widget'; 
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminBuilderModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [ButtonComponent]
})
export class AppModule { }
