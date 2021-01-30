import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { CrudListComponentInterface, CollectionUtils, StringUtils, KeyMapUtils, CrudHeader, ActionPage, CrudFormData, CrudListData, CrudSearch, CrudList, CrudForm, KeyMap, DropdownOption, KeyMapAssociation, KeyMapOptionType, Button, Badge, Action, Record } from 'ngx-material-widget';
import { apiLogCrud } from '../../config/api-log.config';
import { LogService } from '../../service';
import { Subscription } from 'rxjs';
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router';
import { ApplicationService } from 'src/app/application/setting/service/application.service';
import { ModuleService } from 'src/app/application/setting/service/module.service';
import { ModuleUtils } from 'src/app/application/setting/utility/module.utility';

@Component({
  selector: 'cf-api-log',
  templateUrl: './api-log.component.html',
  styleUrls: ['./api-log.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ApiLogComponent extends CrudListComponentInterface implements OnInit, OnDestroy {
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

  apiLogSubscription: Subscription;
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
    super.setCommonConfigUsingCrud(apiLogCrud);
    this.setOptions();
  }

  setOptions() {
    let sourceAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    sourceAssociations.push({ componentIdentifier: "apiLogSearchForm", fieldKey: "source" });
    sourceAssociations.push({ componentIdentifier: "apiLogList", fieldKey: "source" });
    sourceAssociations.push({ componentIdentifier: "apiLogForm", fieldKey: "source" });
    this.keyMap = KeyMapUtils.push(this.keyMap, sourceAssociations, "APPLICATION", KeyMapOptionType.CRUD, apiLogCrud);

    this.moduleService.getModules().subscribe(modules => {
      this.moduleOptions = ModuleUtils.getModuleOptions(modules);

      let moduleAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
      moduleAssociations.push({ componentIdentifier: "apiLogSearchForm", fieldKey: "module" });
      this.keyMap = KeyMapUtils.push(this.keyMap, moduleAssociations, this.moduleOptions, KeyMapOptionType.CRUD, apiLogCrud);
    });
  }

  setFormConfig(errorId: number): void {
    //  Config
    this.form = apiLogCrud.form;
    this.actions = apiLogCrud.actions;
    this.actionPages = apiLogCrud.actionPages;

    //  Tab wise data/setting
    this.configFormData = {
      pageBackRoute: ["/application", "log", "api-log"],
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

  setFormsData(errorId: number): any {
    this.apiLogSubscription = this.logService.getApiLog(errorId).subscribe(apiLog => {
      this.originalData = apiLog;

      let statusDisplay = "";
      if (apiLog.statusCode >= 400) {
        statusDisplay = "<span class='cf-field-status-failure'>" + apiLog.statusCode + "</span>";
      } else {
        statusDisplay = "<span class='cf-field-status-success'>" + apiLog.statusCode + "</span>";
      }

      apiLog.url = apiLog.url + " (" + apiLog.requestMethod + ") - " + statusDisplay;

      let source = KeyMapUtils.getValue(this.keyMap, "source", apiLog.source);
      let module = KeyMapUtils.getValue(this.keyMap, "module", apiLog.module);
      if (apiLog.module) {
        apiLog.source = source + " (" + module + ")";
      } else {
        apiLog.source = source;
      }

      apiLog['time'] = apiLog.startTime + " (" + (new Date(apiLog.endTime).valueOf() - new Date(apiLog.startTime).valueOf()) + " ms)";

      this.configFormData.record = {
        "apiLogForm": apiLog
      };
    });
  }

  setListConfig(): void {
    super.setListConfigUsingCrud(apiLogCrud);
  }

  setListData() {
    let records: Array<Record> = new Array<Record>();

    this.apiLogSubscription = this.logService.getApiLogs().subscribe(apiLogs => {
      if (!CollectionUtils.isEmpty(apiLogs)) {
        for (let apiLog of apiLogs) {
          apiLog.url = apiLog.url + " (" + apiLog.requestMethod + ")";

          let source = KeyMapUtils.getValue(this.keyMap, "source", apiLog.source);
          let module = KeyMapUtils.getValue(this.keyMap, "module", apiLog.module);
          apiLog.source = source + " | " + module + " (" + (apiLog.appVersion ? apiLog.appVersion : 'No App Version') + ")";
        }
      }

      let recordTab1: Record = {
        total: apiLogs.length,
        pageNo: 0,
        rows: apiLogs
      }

      records.push(recordTab1);

      super.setConfigListData(records, this.setBadges(), []);
    });
  }

  buttonClick(action: Action) {
    console.log(action);

    switch (action.sourceIdentifier) {
      case "apiLogCrud":
        this.actionApiLogCrud(action);
        break;
      case "apiLogForm":
        this.actionApiLogForm(action);
        break;
      case "apiLogList":
        this.actionApiLogList(action);
        break;
    }
  }

  actionApiLogCrud(action: Action) {
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

  actionApiLogForm(action: Action) {
    switch (action.action) {
      case "backToList":
        this.performBackToList(action);
        break;
    }
  }

  performBackToList(action: Action) {
    this.router.navigate(['/application/log/api-log']);
  }

  actionApiLogList(action: Action) {
    switch (action.action) {
      case "viewError":
        this.router.navigate([], { queryParams: { action: action.action }, skipLocationChange: true, replaceUrl: false }).then(result => { window.open('/application/log/api-log/' + action.originalData['id'], '_blank'); });
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
    if (this.apiLogSubscription) {
      this.apiLogSubscription.unsubscribe();
    }
  }
}
