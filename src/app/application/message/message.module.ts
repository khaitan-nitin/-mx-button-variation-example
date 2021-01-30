import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorCodeComponent } from './component/error-code/error-code.component';
import { MessageComponent } from './component/message/message.component';

import { MessagePageComponent } from './message.component';
import { MessageRoutingModule } from './message-routing.module';
import { AdminBuilderModule } from 'ngx-material-widget';
import { ErrorCodeService, MessageService } from './service';
import { MessageRowHoverComponent } from './component/message/message-row-hover/message-row-hover.component';

//import { FormModule } from 'ngx-material-widget/lib/form/form.module';
//import { ButtonModule } from 'ngx-material-widget/lib/button/button.module';
//import { CrudModule } from 'ngx-material-widget/lib/crud/crud.module';

@NgModule({
  declarations: [
    MessagePageComponent,
    ErrorCodeComponent, 
    MessageComponent, 
    MessageRowHoverComponent
  ],
  imports: [
    CommonModule,
    MessageRoutingModule,
    // FormModule,
    // ButtonModule,
    // CrudModule
    AdminBuilderModule
  ],
  exports: [
    ErrorCodeComponent, 
    MessageComponent
  ],
  providers: [
    ErrorCodeService,
    MessageService
  ],
  entryComponents: [
    MessageRowHoverComponent
  ]
})
export class MessageModule { }
