import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiLogComponent } from './component/api-log/api-log.component';
import { ErrorLogComponent } from './component/error-log/error-log.component';
import { AppLogComponent } from './component/app-log/app-log.component';
import { LoggingPageComponent } from './logging.component';

import { LoggingRoutingModule } from './logging-routing.module';
import { AdminBuilderModule } from 'ngx-material-widget';
import { LogService } from './service';

//import { CrudModule } from 'src/app/@common/control/crud/crud.module';

@NgModule({
  declarations: [
    LoggingPageComponent,
    ApiLogComponent, 
    ErrorLogComponent, 
    AppLogComponent
  ],
  imports: [
    CommonModule,
    LoggingRoutingModule,
    // CrudModule
    AdminBuilderModule
  ],
  providers: [
    LogService
  ]
})
export class LoggingModule { }
