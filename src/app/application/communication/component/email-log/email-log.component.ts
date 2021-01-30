import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { KeyMapUtils, Record, StringUtils, CollectionUtils, KeyMap, KeyMapAssociation, KeyMapOptionType, Button, Badge, Action, CrudListComponentInterface, CrudHeader, ActionPage, CrudFormData, CrudListData, CrudSearch, CrudList, CrudForm } from 'ngx-material-widget';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { CommunicationService } from '../../service';
import { emailLogCrud } from '../../config/email-log.config';
import { CommunicationUtils } from '../../utility/communication.utility';

@Component({
  selector: 'cf-email-log',
  templateUrl: './email-log.component.html',
  styleUrls: ['./email-log.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmailLogComponent extends CrudListComponentInterface implements OnInit {
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

  emailLogSubscription: Subscription;
  routerSubscriber: Subscription;

  //  List Config
  quickLinks: Array<Button>;
  searchConfig: CrudSearch;
  searchData: any;
  listConfig: CrudList;
  listPageBackRoute: Array<string>;

  emailId: string;
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
          this.emailId = this.route.snapshot.params['id'];

          this.setCommonConfig();
          if (this.emailId) {
            this.setFormConfig(+this.emailId);
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
    super.setCommonConfigUsingCrud(emailLogCrud);
    this.setOptions();
  }

  setOptions() {
    let languageAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    languageAssociations.push({ componentIdentifier: "emailLogForm", fieldKey: "message.language" });
    languageAssociations.push({ componentIdentifier: "emailLogSearchForm", fieldKey: "message.language" });

    this.keyMap = KeyMapUtils.push(this.keyMap, languageAssociations, "LANGUAGE", KeyMapOptionType.CRUD, emailLogCrud);


    this.communicationService.getCommunicationTemplates().subscribe(templates => {
      let templateAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
      templateAssociations.push({ componentIdentifier: "emailLogSearchForm", fieldKey: "template" });
      templateAssociations.push({ componentIdentifier: "emailLogForm", fieldKey: "template.key" });

      KeyMapUtils.push(this.keyMap, templateAssociations, CommunicationUtils.getTemplateOptions(templates), KeyMapOptionType.CRUD, emailLogCrud);
    });
  }

  setFormConfig(errorId: number): void {
    //  Config
    this.form = emailLogCrud.form;
    this.actions = emailLogCrud.actions;
    this.actionPages = emailLogCrud.actionPages;

    //  Tab wise data/setting
    this.configFormData = {
      pageBackRoute: ["/application", "communication", "email-log"],
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

  setFormsData(emailId: number): any {
    this.emailLogSubscription = this.communicationService.getEmailLog(emailId).subscribe(emailLog => {
      this.originalData = emailLog;

      for (let message of emailLog.receiver) {
        if (message.response.status == false) {
          message.response['error'] = message.response.actualErrorMessage + " (" + message.response.errorCode + " - " + message.response.statusCode + ")";
        }
        message['readMessage'] = message.response.readStatus;
      }

      this.configFormData.record = {
        "emailLogForm": emailLog,
        "messageLogList": { total: emailLog.receiver.length, pageNo: 0, rows: emailLog.receiver }
      };
    });
  }

  setListConfig(): void {
    super.setListConfigUsingCrud(emailLogCrud);
  }

  setListData() {
    let records: Array<Record> = new Array<Record>();

    this.emailLogSubscription = this.communicationService.getEmailLogs().subscribe(emailLogs => {
      if (!CollectionUtils.isEmpty(emailLogs)) {
        for (let emailLog of emailLogs) {
          emailLog.message.text = emailLog.message.text + " (" + KeyMapUtils.getValue(this.keyMap, "message.language", emailLog.message.language)  + ")";

          let successCount = 0;
          let readCount = 0;
          if (!CollectionUtils.isEmpty(emailLog.receiver)) {
            let emails: string = "";
            let index = 0;

            for (let message of emailLog.receiver) {
              if (!StringUtils.isEmpty(emails) && index <= 2) {
                emails += ", ";
              }

              if (index <= 2) {
                emails += message.email;
              }

              if (message.response.status == true) {
                successCount++;
              }

              if (message.response.readStatus) {
                readCount += 1;
              }

              message.response['error'] = message.response.actualErrorMessage + " (" + message.response.errorCode + " - " + message.response.statusCode + ")";
              index++;
            }

            if (emailLog.receiver.length > 2) {
              emails += "...";
            }

            emailLog['emails'] = emails;
          }

          emailLog['readCount'] = readCount;
          emailLog['receiverStatistics'] = "<span class='cf-success'>" + successCount + "</span> / <span class='cf-failure'>" + (emailLog.receiver.length - successCount) + "</span>";
        }
      }

      let recordTab1: Record = {
        total: emailLogs.length,
        pageNo: 0,
        rows: emailLogs
      }

      records.push(recordTab1);

      super.setConfigListData(records, this.setBadges(), []);
    });
  }

  buttonClick(action: Action) {
    console.log(action);

    switch (action.sourceIdentifier) {
      case "emailLogCrud":
        this.actionEmailLogCrud(action);
        break;
      case "emailLogForm":
        this.actionEmailLogForm(action);
        break;
      case "emailLogList":
        this.actionEmailLogList(action);
        break;
    }
  }

  actionEmailLogCrud(action: Action) {
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

  actionEmailLogForm(action: Action) {
    switch (action.action) {
      case "backToList":
        this.performBackToList(action);
        break;
    }
  }

  performBackToList(action: Action) {
    this.router.navigate(['/application/communication/email-log']);
  }

  actionEmailLogList(action: Action) {
    switch (action.action) {
      case "viewEmail":
        this.router.navigate([], { queryParams: { action: action.action }, skipLocationChange: true, replaceUrl: false }).then(result => { window.open('/application/communication/email-log/' + action.originalData['id'], '_blank'); });
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
    if (this.emailLogSubscription) {
      this.emailLogSubscription.unsubscribe();
    }
  }
}
