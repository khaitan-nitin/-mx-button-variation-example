import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Record, StringUtils, CollectionUtils, KeyMapUtils, KeyMap, KeyMapAssociation, KeyMapOptionType, Button, Badge, Action, CrudListComponentInterface, CrudHeader, ActionPage, CrudFormData, CrudListData, CrudSearch, CrudList, CrudForm } from 'ngx-material-widget';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { CommunicationService } from '../../service';
import { smsLogCrud } from '../../config/sms-log.config';
import { CommunicationUtils } from '../../utility/communication.utility';

@Component({
  selector: 'cf-sms-log',
  templateUrl: './sms-log.component.html',
  styleUrls: ['./sms-log.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SmsLogComponent extends CrudListComponentInterface implements OnInit {
  //  Common Config
  identifier: string;
  header: CrudHeader;
  actions: Array<Button>;
  actionPages: Array<ActionPage>;
  reset: boolean;
  keyMap: Array<KeyMap> = new Array<KeyMap>();

  //  Form Config
  form: CrudForm;
  configFormData: CrudFormData;
  configListData: CrudListData;

  smsLogSubscription: Subscription;
  routerSubscriber: Subscription;

  //  List Config
  quickLinks: Array<Button>;
  searchConfig: CrudSearch;
  searchData: any;
  listConfig: CrudList;
  listPageBackRoute: Array<string>;

  smsId: string;
  originalData: any;

  constructor(
    private communicationService: CommunicationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();
    this.routerSubscriber = this.router.events.subscribe(
      (event: Event) => {
        if (event instanceof NavigationEnd) {
          this.smsId = this.route.snapshot.params['id'];

          this.setCommonConfig();
          if (this.smsId) {
            this.setFormConfig(+this.smsId);
          } else {
            this.setListConfig();
            this.loadFilterParams(StringUtils.isEmpty(this.route.snapshot.queryParams['filter']) ? {} : this.route.snapshot.queryParams['filter']);
            this.setListData();
          }
        }
      });
  }

  ngOnInit(): void {
  }

  setCommonConfig(): void {
    super.setCommonConfigUsingCrud(smsLogCrud);
    this.setOptions();
  }

  setOptions()  {
    let languageAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    languageAssociations.push({ componentIdentifier: "smsLogForm", fieldKey: "message.language" });
    languageAssociations.push({ componentIdentifier: "smsLogSearchForm", fieldKey: "language" });

    this.keyMap = KeyMapUtils.push(this.keyMap, languageAssociations, "LANGUAGE", KeyMapOptionType.CRUD, smsLogCrud);


    this.communicationService.getCommunicationTemplates().subscribe(templates => {
      let templateAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
      templateAssociations.push({ componentIdentifier: "smsLogSearchForm", fieldKey: "template" });
      templateAssociations.push({ componentIdentifier: "smsLogForm", fieldKey: "template.key" });

      KeyMapUtils.push(this.keyMap, templateAssociations, CommunicationUtils.getTemplateOptions(templates), KeyMapOptionType.CRUD, smsLogCrud);
    });
  }

  setFormConfig(errorId: number): void {
    //  Config
    this.form = smsLogCrud.form;
    this.actions = smsLogCrud.actions;
    this.actionPages = smsLogCrud.actionPages;

    //  Tab wise data/setting
    this.configFormData = {
      pageBackRoute: ["/application", "communication", "sms-log"],
      badges: this.setBadges(),
      record: this.setFormsData(errorId),
      originalData: this.originalData
    }
  }

  setBadges(): Array<Badge> {
    let badges = new Array<Badge>();

    return badges;
  }

  setBadge(badge: Badge, text: string): Badge {
    badge.content = text;

    return badge;
  }

  setFormsData(smsId: number): any {
    this.smsLogSubscription = this.communicationService.getSmsLog(smsId).subscribe(smsLog => {
      this.originalData = smsLog;

      for (let message of smsLog.receiver) {
        if (message.response.status == false) {
          message.response['error'] = message.response.actualErrorMessage + " (" + message.response.errorCode + " - " + message.response.statusCode + ")";
        }
      }
      
      this.configFormData.record = {
        "smsLogForm": smsLog,
        "messageLogList": { total: smsLog.receiver.length, pageNo: 0, rows: smsLog.receiver}
      };
    });
  }

  setListConfig(): void {
    super.setListConfigUsingCrud(smsLogCrud);
  }

  setListData() {
    let records: Array<Record> = new Array<Record>();

    this.smsLogSubscription = this.communicationService.getSmsLogs().subscribe(smsLogs => {
      if (!CollectionUtils.isEmpty(smsLogs)) {
        for (let smsLog of smsLogs) {
          smsLog.message.text = smsLog.message.text + " (" + KeyMapUtils.getValue(this.keyMap, "message.language", smsLog.message.language) + ")";

          let successCount = 0;
          if (!CollectionUtils.isEmpty(smsLog.receiver)) {
            let mobiles: string = "";
            let index = 0;

            for (let message of smsLog.receiver) {
              if (!StringUtils.isEmpty(mobiles) && index <= 2) {
                mobiles += ", ";
              }

              if (index <= 2) {
                mobiles += message.mobile;
              }

              if (message.response.status == true) {
                successCount++;
              }

              message.response['error'] = message.response.actualErrorMessage + " (" + message.response.errorCode + " - " + message.response.statusCode + ")";
              index++;
            }

            if (smsLog.receiver.length > 2) {
              mobiles += "...";
            }

            smsLog['mobiles'] = mobiles;
          }

          smsLog['receiverStatistics'] = "<span class='cf-success'>" + successCount + "</span> / <span class='cf-failure'>" + (smsLog.receiver.length - successCount) + "</span>";
        }
      }

      let recordTab1: Record = {
        total: smsLogs.length,
        pageNo: 0,
        rows: smsLogs
      }

      records.push(recordTab1);

      super.setConfigListData(records, this.setBadges(), []);
    });
  }

  buttonClick(action: Action) {
    console.log(action);

    switch (action.sourceIdentifier) {
      case "smsLogCrud":
        this.actionSmsLogCrud(action);
        break;
      case "smsLogForm":
        this.actionSmsLogForm(action);
        break;
      case "smsLogList":
        this.actionSmsLogList(action);
        break;
    }
  }

  actionSmsLogCrud(action: Action) {
    switch (action.action) {
      case "emailLogButton":
        this.router.navigate(['/application/communication/email-log']);
        break;
      case "smsLogButton":
        this.router.navigate(['/application/communication/sms-log']);
        break;
      case "pushLogButton":
        this.router.navigate(['/application/communication/push-log']);
        break;
    }
  }

  actionSmsLogForm(action: Action) {
    switch (action.action) {
      case "backToList":
        this.performBackToList(action);
        break;
    }
  }

  performBackToList(action: Action) {
    this.router.navigate(['/application/communication/sms-log']);
  }

  actionSmsLogList(action: Action) {
    switch (action.action) {
      case "viewSms":
        this.router.navigate([], { queryParams: { action: action.action }, skipLocationChange: true, replaceUrl: false }).then(result => { window.open('/application/communication/sms-log/' + action.originalData['id'], '_blank'); });
        break;
    }
  }

  fieldChange(event: any) {
    console.log(event);
  }

  formChange(event: any) {
    console.log(event);
  }

  onSort(event: any) {
    console.log(event);
  }

  onPage(event: any) {
    console.log(event);
  }

  ngOnDestroy(): void {
    if (this.routerSubscriber) {
      this.routerSubscriber.unsubscribe();
    }
    if (this.smsLogSubscription) {
      this.smsLogSubscription.unsubscribe();
    }
  }
}
