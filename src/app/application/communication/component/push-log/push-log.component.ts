import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { KeyMapUtils, Record, StringUtils, CollectionUtils, KeyMap, KeyMapOptionType, KeyMapAssociation, Button, Badge, Action, CrudListComponentInterface, CrudHeader, ActionPage, CrudFormData, CrudListData, CrudSearch, CrudList, CrudForm } from 'ngx-material-widget';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { CommunicationService } from '../../service';
import { pushLogCrud } from '../../config/push-log.config';
import { PushReceiverToken } from '../../model';
import { CommunicationUtils } from '../../utility/communication.utility';

@Component({
  selector: 'cf-push-log',
  templateUrl: './push-log.component.html',
  styleUrls: ['./push-log.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PushLogComponent extends CrudListComponentInterface implements OnInit {
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

  pushLogSubscription: Subscription;
  routerSubscriber: Subscription;

  //  List Config
  quickLinks: Array<Button>;
  searchConfig: CrudSearch;
  searchData: any;
  listConfig: CrudList;
  listPageBackRoute: Array<string>;

  pushId: string;
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
          this.pushId = this.route.snapshot.params['id'];

          this.setCommonConfig();
          if (this.pushId) {
            this.setFormConfig(+this.pushId);
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
    super.setCommonConfigUsingCrud(pushLogCrud);
    this.setOptions();
  }

  setOptions()  {
    let languageAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    languageAssociations.push({ componentIdentifier: "pushLogForm", fieldKey: "message.language" });
    languageAssociations.push({ componentIdentifier: "pushLogSearchForm", fieldKey: "language" });

    this.keyMap = KeyMapUtils.push(this.keyMap, languageAssociations, "LANGUAGE", KeyMapOptionType.CRUD, pushLogCrud);


    this.communicationService.getCommunicationTemplates().subscribe(templates => {
      let templateAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
      templateAssociations.push({ componentIdentifier: "pushLogSearchForm", fieldKey: "template" });
      templateAssociations.push({ componentIdentifier: "pushLogForm", fieldKey: "template.key" });

      KeyMapUtils.push(this.keyMap, templateAssociations, CommunicationUtils.getTemplateOptions(templates), KeyMapOptionType.CRUD, pushLogCrud);
    });
  }

  setFormConfig(errorId: number): void {
    //  Config
    this.form = pushLogCrud.form;
    this.actions = pushLogCrud.actions;
    this.actionPages = pushLogCrud.actionPages;

    //  Tab wise data/setting
    this.configFormData = {
      pageBackRoute: ["/application", "communication", "push-log"],
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

  setFormsData(pushId: number): any {
    this.pushLogSubscription = this.communicationService.getPushLog(pushId).subscribe(pushLog => {
      this.originalData = pushLog;

      let pushReceivers: Array<PushReceiverToken> = new Array<PushReceiverToken>();
      for (let receiver of pushLog.receiver) {
        for (let response of receiver.responses) {
          response.token = response.os + " (" + response.token + ")";

          if (response.status == false) {
            response['error'] = response.actualErrorMessage + " (" + response.errorCode + " - " + response.statusCode + ")";
          }

          response['userId'] = receiver.userId;
          pushReceivers.push(response);
        }
      }

      this.configFormData.record = {
        "pushLogForm": pushLog,
        "messageLogList": { total: pushReceivers.length, pageNo: 0, rows: pushReceivers }
      };
    });
  }

  setListConfig(): void {
    super.setListConfigUsingCrud(pushLogCrud);
  }

  setListData() {
    let records: Array<Record> = new Array<Record>();

    this.pushLogSubscription = this.communicationService.getPushLogs().subscribe(pushLogs => {
      if (!CollectionUtils.isEmpty(pushLogs)) {
        for (let pushLog of pushLogs) {
          pushLog.message.text = pushLog.message.text + " (" + KeyMapUtils.getValue(this.keyMap, "message.language", pushLog.message.language) + ")";

          let successCount = 0;
          let failureCount = 0;
          let readCount = 0;
          if (!CollectionUtils.isEmpty(pushLog.receiver)) {
            let tokens: number = 0;

            for (let message of pushLog.receiver) {
              tokens += message.responses.length;

              for (let response of message.responses) {
                if (response.status == true) {
                  successCount++;
                } else {
                  failureCount++;
                }

                if (response.readStatus) {
                  readCount += 1;
                }
              }
            }

            pushLog['tokens'] = "Message sent to " + tokens + " devices";
          }

          pushLog['readCount'] = readCount;
          pushLog['receiverStatistics'] = "<span class='cf-success'>" + successCount + "</span> / <span class='cf-failure'>" + (failureCount) + "</span>";
        }
      }

      let recordTab: Record = {
        total: pushLogs.length,
        pageNo: 0,
        rows: pushLogs
      }

      records.push(recordTab);

      super.setConfigListData(records, this.setBadges(), []);
    });
  }

  buttonClick(action: Action) {
    console.log(action);

    switch (action.sourceIdentifier) {
      case "pushLogCrud":
        this.actionPushLogCrud(action);
        break;
      case "pushLogForm":
        this.actionPushLogForm(action);
        break;
      case "pushLogList":
        this.actionPushLogList(action);
        break;
    }
  }

  actionPushLogCrud(action: Action) {
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

  actionPushLogForm(action: Action) {
    switch (action.action) {
      case "backToList":
        this.performBackToList(action);
        break;
    }
  }

  performBackToList(action: Action) {
    this.router.navigate(['/application/communication/push-log']);
  }

  actionPushLogList(action: Action) {
    switch (action.action) {
      case "viewPush":
        this.router.navigate([], { queryParams: { action: action.action }, skipLocationChange: true, replaceUrl: false }).then(result => { window.open('/application/communication/push-log/' + action.originalData['id'], '_blank'); });
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
    if (this.pushLogSubscription) {
      this.pushLogSubscription.unsubscribe();
    }
  }
}
