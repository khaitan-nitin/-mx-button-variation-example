import { Component, OnInit } from '@angular/core';
import { DropdownOption, CrudListComponentInterface, CollectionUtils, StringUtils, KeyMapUtils, Record, KeyMap, KeyMapAssociation, KeyMapOptionType, Button, Badge, Action, CrudHeader, ActionPage, CrudListData, CrudFormData, CrudSearch, CrudList, CrudForm } from 'ngx-material-widget';
import { Subscription } from 'rxjs';
import { LogService } from '../../service';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { appLogCrud } from '../../config/app-log.config';
import { ApplicationService } from 'src/app/application/setting/service/application.service';
import { ModuleService } from 'src/app/application/setting/service/module.service';
import { ApplicationUtils } from 'src/app/application/setting/utility/application.utility';

@Component({
  selector: 'cf-app-log',
  templateUrl: './app-log.component.html',
  styleUrls: ['./app-log.component.scss']
})
export class AppLogComponent extends CrudListComponentInterface implements OnInit {
  //  Common Config
  identifier: string;
  header: CrudHeader;
  actions: Array<Button>;
  actionPages: Array<ActionPage>;
  reset: boolean;
  keyMap: Array<KeyMap>;

  //  Form Config
  form: CrudForm;
  configFormData: CrudFormData;
  configListData: CrudListData;

  appLogSubscription: Subscription;
  routerSubscriber: Subscription;

  //  List Config
  quickLinks: Array<Button>;
  searchConfig: CrudSearch;
  searchData: any;
  listConfig: CrudList;
  listPageBackRoute: Array<string>;

  errorId: string;
  originalData: any;
  moduleOptions: Array<DropdownOption>;
  applicationOptions: Array<DropdownOption>;

  constructor(
    private logService: LogService,
    private applicationService: ApplicationService,
    private moduleService: ModuleService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();
    this.routerSubscriber = this.router.events.subscribe(
      (event: Event) => {
        if (event instanceof NavigationEnd) {
          this.errorId = this.route.snapshot.params['id'];

          this.setCommonConfig();
          if (this.errorId) {
            this.setFormConfig(+this.errorId);
          } else {
            this.setListConfig();
            this.loadFilterParams(StringUtils.isEmpty(this.route.snapshot.queryParams['filter']) ? { source: "ADMIN" } : this.route.snapshot.queryParams['filter']);
            this.setListData();
          }
        }
      });
  }

  ngOnInit(): void {
  }

  setCommonConfig(): void {
    super.setCommonConfigUsingCrud(appLogCrud);
    this.setOptions();
  }

  setOptions() {
    this.applicationService.getApplications().subscribe(applications => {
      this.applicationOptions = ApplicationUtils.getApplicationOptions(applications);

      let sourceAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
      sourceAssociations.push({ componentIdentifier: "appLogSearchForm", fieldKey: "source" });
      sourceAssociations.push({ componentIdentifier: "appLogList", fieldKey: "source" });
      sourceAssociations.push({ componentIdentifier: "appLogForm", fieldKey: "source" });
      this.keyMap = KeyMapUtils.push(this.keyMap, sourceAssociations, this.applicationOptions, KeyMapOptionType.CRUD, appLogCrud);
    });
  }

  setFormConfig(errorId: number): void {
    //  Config
    this.form = appLogCrud.form;
    this.actions = appLogCrud.actions;
    this.actionPages = appLogCrud.actionPages;

    //  Tab wise data/setting
    this.configFormData = {
      pageBackRoute: ["/application", "log", "app-log"],
      badges: this.setBadges(),
      record: this.setForms(errorId),
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

  setForms(errorId: number): any {
    this.appLogSubscription = this.logService.getAppLog(errorId).subscribe(appLog => {
      this.originalData = appLog;

      let statusDisplay = "";
      if (appLog.statusCode >= 400) {
        statusDisplay = "<span class='cf-field-status-failure'>" + appLog.statusCode + "</span>";
      } else {
        statusDisplay = "<span class='cf-field-status-success'>" + appLog.statusCode + "</span>";
      }

      appLog.url = appLog.url + " (" + appLog.requestMethod + ") - " + statusDisplay;

      let source = KeyMapUtils.getValue(this.keyMap, "source", appLog.source);
      appLog.source = source;

      this.configFormData.record = {
        "appLogForm": appLog
      };
    });
  }

  setListConfig(): void {
    super.setListConfigUsingCrud(appLogCrud);
  }

  setListData() {
    let records: Array<Record> = new Array<Record>();

    this.appLogSubscription = this.logService.getAppLogs().subscribe(appLogs => {
      if (!CollectionUtils.isEmpty(appLogs)) {
        for (let appLog of appLogs) {
          appLog.url = appLog.url + " (" + appLog.requestMethod + ")";

          let source = KeyMapUtils.getValue(this.keyMap, "source", appLog.source);
          appLog.source = source;
        }
      }

      let recordTab1: Record = {
        total: appLogs.length,
        pageNo: 0,
        rows: appLogs
      }

      records.push(recordTab1);

      super.setConfigListData(records, this.setBadges(), []);
    });
  }

  buttonClick(action: Action) {
    console.log(action);

    switch (action.sourceIdentifier) {
      case "appLogCrud":
        this.actionAppLogCrud(action);
        break;
      case "appLogForm":
        this.actionAppLogForm(action);
        break;
      case "appLogList":
        this.actionAppLogList(action);
        break;
    }
  }

  actionAppLogCrud(action: Action) {
    switch (action.action) {
      case "apiLogButton":
        this.router.navigate(['/application/log/api-log']);
        break;
      case "appLogButton":
        this.router.navigate(['/application/log/app-log']);
        break;
      case "errorLogButton":
        this.router.navigate(['/application/log/error-log']);
        break;
    }
  }

  actionAppLogForm(action: Action) {
    switch (action.action) {
      case "backToList":
        this.performBackToList(action);
        break;
    }
  }

  performBackToList(action: Action) {
    this.router.navigate(['/application/log/app-log']);
  }

  actionAppLogList(action: Action) {
    switch (action.action) {
      case "viewLog":
        this.router.navigate([], { queryParams: { action: action.action }, skipLocationChange: true, replaceUrl: false }).then(result => { window.open('/application/log/app-log/' + action.originalData['id'], '_blank'); });
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
    if (this.appLogSubscription) {
      this.appLogSubscription.unsubscribe();
    }
  }
}
