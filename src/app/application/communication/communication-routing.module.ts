import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunicationPageComponent } from './communication.component';
import { CommunicationTemplateComponent } from './component/communication-template/communication-template.component';
import { SmsLogComponent } from './component/sms-log/sms-log.component';
import { EmailLogComponent } from './component/email-log/email-log.component';
import { PushLogComponent } from './component/push-log/push-log.component';
import { DeviceComponent } from './component/device/device.component';
import { PushChannelComponent } from './component/push-channel/push-channel.component';
import { SmsSenderIdComponent } from './component/sms-sender-id/sms-sender-id.component';
import { CampaignComponent } from './component/campaign/campaign.component';

const communicationRoutes: Routes = [{
    path: '',
    component: CommunicationPageComponent,
    children: [
        {
            path: 'campaign',
            component: CampaignComponent,
        },
        {
            path: 'campaign/:id',
            component: CampaignComponent,
        },
        {
            path: 'communication-template',
            component: CommunicationTemplateComponent,
        },
        {
            path: 'communication-template/:id',
            component: CommunicationTemplateComponent,
        },
        {
            path: 'device',
            component: DeviceComponent,
        },
        {
            path: 'device/:id',
            component: DeviceComponent,
        },
        {
            path: 'push-channel',
            component: PushChannelComponent,
        },
        {
            path: 'push-channel/:id',
            component: PushChannelComponent,
        },
        {
            path: 'sms-sender-id',
            component: SmsSenderIdComponent,
        },
        {
            path: 'sms-sender-id/:id',
            component: SmsSenderIdComponent,
        },
        {
            path: 'sms-log',
            component: SmsLogComponent,
        },
        {
            path: 'sms-log/:id',
            component: SmsLogComponent,
        },
        {
            path: 'email-log',
            component: EmailLogComponent,
        },
        {
            path: 'email-log/:id',
            component: EmailLogComponent,
        },
        {
            path: 'push-log',
            component: PushLogComponent,
        },
        {
            path: 'push-log/:id',
            component: PushLogComponent,
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(communicationRoutes)],
    exports: [RouterModule],
})
export class CommunicationRoutingModule { }