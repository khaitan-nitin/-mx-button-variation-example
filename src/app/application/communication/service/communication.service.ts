import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SmsLog, EmailLog, PushLog, Device, PushTemplate, NotificationTemplate, WhatsAppTemplate, SmsTemplate, EmailTemplate, PushChannel, SmsSenderId } from '../model';
import { environment } from 'src/environments/environment';
import { Campaign } from '../model/campaign.model';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  private _jsonURL = environment.apiBasePath + '/assets/data';

  constructor(private http: HttpClient) { }

  public getCommunicationTemplates(): Observable<Array<EmailTemplate | SmsTemplate | WhatsAppTemplate | NotificationTemplate | PushTemplate>> {
    return this.http.get<Array<EmailTemplate | SmsTemplate | WhatsAppTemplate | NotificationTemplate | PushTemplate>>(this._jsonURL + '/communication/notification-template/list.data.json');
  }

  public getCommunicationTemplate(id: number): Observable<EmailTemplate | SmsTemplate | WhatsAppTemplate | NotificationTemplate | PushTemplate> {
    let fileName = "";
    if (id == 1)  {
      fileName = "find-one-email"; 
    } else if (id == 2)  {
      fileName = "find-one-sms-whatsapp"; 
    } else if (id == 3)  {
      fileName = "find-one-notification"; 
    } else if (id == 4)  {
      fileName = "find-one-push"; 
    }

    return this.http.get<EmailTemplate | SmsTemplate | WhatsAppTemplate | NotificationTemplate | PushTemplate>(this._jsonURL + '/communication/notification-template/' + fileName + '.data.json');
  }

  public getDevices(): Observable<Array<Device>> {
    return this.http.get<Array<Device>>(this._jsonURL + '/communication/device/list.data.json');
  }

  public getDevice(id: number): Observable<Device> {
    return this.http.get<Device>(this._jsonURL + '/communication/device/find-one.data.json');
  }

  public getCampaigns(): Observable<Array<Campaign>> {
    return this.http.get<Array<Campaign>>(this._jsonURL + '/communication/campaign/list.data.json');
  }

  public getCampaign(id: number): Observable<Campaign> {
    return this.http.get<Campaign>(this._jsonURL + '/communication/campaign/find-one.data.json');
  }

  public getPushChannels(): Observable<Array<PushChannel>> {
    return this.http.get<Array<PushChannel>>(this._jsonURL + '/communication/push-channel/list.data.json');
  }

  public getPushChannel(id: number): Observable<PushChannel> {
    return this.http.get<PushChannel>(this._jsonURL + '/communication/push-channel/find-one.data.json');
  }

  public getSmsSenderIds(): Observable<Array<SmsSenderId>> {
    return this.http.get<Array<SmsSenderId>>(this._jsonURL + '/communication/sms-sender-id/list.data.json');
  }

  public getSmsSenderId(id: number): Observable<SmsSenderId> {
    return this.http.get<SmsSenderId>(this._jsonURL + '/communication/sms-sender-id/find-one.data.json');
  }

  public getSmsLogs(): Observable<Array<SmsLog>> {
    return this.http.get<Array<SmsLog>>(this._jsonURL + '/communication/sms-log/list.data.json');
  }

  public getSmsLog(id: number): Observable<SmsLog> {
    return this.http.get<SmsLog>(this._jsonURL + '/communication/sms-log/find-one.data.json');
  }

  public getEmailLogs(): Observable<Array<EmailLog>> {
    return this.http.get<Array<EmailLog>>(this._jsonURL + '/communication/email-log/list.data.json');
  }

  public getEmailLog(id: number): Observable<EmailLog> {
    return this.http.get<EmailLog>(this._jsonURL + '/communication/email-log/find-one.data.json');
  }

  public getPushLogs(): Observable<Array<PushLog>> {
    return this.http.get<Array<PushLog>>(this._jsonURL + '/communication/push-log/list.data.json');
  }

  public getPushLog(id: number): Observable<PushLog> {
    return this.http.get<PushLog>(this._jsonURL + '/communication/push-log/find-one.data.json');
  }
}
