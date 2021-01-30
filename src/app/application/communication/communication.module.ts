import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { CommunicationTemplateComponent } from './component/communication-template/communication-template.component';
import { CommunicationPageComponent } from './communication.component';
import { EmailLogComponent } from './component/email-log/email-log.component';
import { SmsLogComponent } from './component/sms-log/sms-log.component';
import { PushLogComponent } from './component/push-log/push-log.component';
import { DeviceComponent } from './component/device/device.component';
import { PushChannelComponent } from './component/push-channel/push-channel.component';
import { SmsSenderIdComponent } from './component/sms-sender-id/sms-sender-id.component';
import { CampaignComponent } from './component/campaign/campaign.component';

import { CommunicationRoutingModule } from './communication-routing.module';
import { AdminBuilderModule } from 'ngx-material-widget';
import { CommunicationService } from './service';

//import { FormModule } from 'ngx-material-widget/lib/form/form.module';
//import { ButtonModule } from 'ngx-material-widget/lib/button/button.module';
//import { CrudModule } from 'ngx-material-widget/lib/crud/crud.module';

@NgModule({
  declarations: [
    CommunicationPageComponent,
    CommunicationTemplateComponent,
    EmailLogComponent, 
    SmsLogComponent, 
    PushLogComponent, 
    DeviceComponent, 
    PushChannelComponent, 
    SmsSenderIdComponent, 
    CampaignComponent
  ],
  imports: [
    CommonModule,
    CommunicationRoutingModule,
    MatCardModule,
    // FormModule,
    // ButtonModule,
    // CrudModule
    AdminBuilderModule
  ],
  exports: [
    CommunicationTemplateComponent,
    EmailLogComponent, 
    SmsLogComponent, 
    PushLogComponent, 
    DeviceComponent, 
    PushChannelComponent, 
    SmsSenderIdComponent
  ],
  providers: [
    CommunicationService
  ]
})
export class CommunicationModule { }
