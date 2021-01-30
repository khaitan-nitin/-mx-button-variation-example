import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SettingModule } from './application/setting/setting.module';

import { AuthModule } from './application/auth/auth.module';
// import { CommonModule } from '@angular/common';
import { MasterDataService, PropertyService } from './application/setting/service';
import { MessageModule } from './application/message/message.module';

import { AbilityModule } from '@casl/angular';
import { Ability, PureAbility } from '@casl/ability';

import { AdminBuilderModule } from 'ngx-material-widget'; 
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

export function init_app(masterDataService: MasterDataService, propertyService: PropertyService) {
  return () => {
    masterDataService.setMasterDataToLocalStore();
    propertyService.setPropertiesToLocalStore();
  }
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    // NoopAnimationsModule, 
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    AuthModule,
    SettingModule,
    MessageModule,
    AdminBuilderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    AbilityModule
  ],
  providers: [
    { provide: Ability, useValue: new Ability() },
    { provide: PureAbility, useExisting: Ability },
    { provide: APP_INITIALIZER, useFactory: init_app, deps: [MasterDataService, PropertyService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
