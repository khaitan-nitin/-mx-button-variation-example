import { Component, OnInit } from '@angular/core';
import { CollectionUtils, StringUtils, KeyMapUtils, CrudListComponentInterface, Record, Button, Badge, Action, KeyMap, DropdownOption, KeyMapAssociation, KeyMapOptionType, CrudHeader, ActionPage, CrudFormData, CrudListData, CrudList, CrudSearch, CrudForm } from 'ngx-material-widget';
import { Subscription } from 'rxjs';
import { LogService } from '../../service';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { errorLogCrud } from '../../config/error-log.config';
import { ApplicationService } from 'src/app/application/setting/service/application.service';
import { ModuleService } from 'src/app/application/setting/service/module.service';
import { ModuleUtils } from 'src/app/application/setting/utility/module.utility';
import { ApplicationUtils } from 'src/app/application/setting/utility/application.utility';

@Component({
  selector: 'cf-error-log',
  templateUrl: './error-log.component.html',
  styleUrls: ['./error-log.component.scss']
})
export class ErrorLogComponent extends CrudListComponentInterface implements OnInit {
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

  errorLogSubscription: Subscription;
  routerSubscriber: Subscription;

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
    super.setCommonConfigUsingCrud(errorLogCrud);
    this.setOptions();
  }

  setOptions() {
    this.applicationService.getApplications().subscribe(applications => {
      this.applicationOptions = ApplicationUtils.getApplicationOptions(applications);

      let sourceAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
      sourceAssociations.push({ componentIdentifier: "errorLogSearchForm", fieldKey: "source" });
      sourceAssociations.push({ componentIdentifier: "errorLogList", fieldKey: "source" });
      sourceAssociations.push({ componentIdentifier: "errorLogForm", fieldKey: "source" });
      this.keyMap = KeyMapUtils.push(this.keyMap, sourceAssociations, this.applicationOptions, KeyMapOptionType.CRUD, errorLogCrud);
    });

    this.moduleService.getModules().subscribe(modules => {
      this.moduleOptions = ModuleUtils.getModuleOptions(modules);

      let moduleAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
      moduleAssociations.push({ componentIdentifier: "errorLogSearchForm", fieldKey: "module" });
      this.keyMap = KeyMapUtils.push(this.keyMap, moduleAssociations, this.moduleOptions, KeyMapOptionType.CRUD, errorLogCrud);
    });
  }

  setFormConfig(errorId: number): void {
    //  Config
    this.form = errorLogCrud.form;
    this.actions = errorLogCrud.actions;
    this.actionPages = errorLogCrud.actionPages;

    //  Tab wise data/setting
    this.configFormData = {
      pageBackRoute: ["/application", "log", "error-log"],
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
    this.errorLogSubscription = this.logService.getErrorLog(errorId).subscribe(errorLog => {
      this.originalData = errorLog;

      let statusDisplay = "";
      if (errorLog.statusCode >= 400) {
        statusDisplay = "<span class='cf-field-status-failure'>" + errorLog.statusCode + "</span>";
      } else {
        statusDisplay = "<span class='cf-field-status-success'>" + errorLog.statusCode + "</span>";
      }

      errorLog.url = errorLog.url + " (" + errorLog.requestMethod + ") - " + statusDisplay;

      let source = KeyMapUtils.getValue(this.keyMap, "source", errorLog.source);
      let module = KeyMapUtils.getValue(this.keyMap, "module", errorLog.module);

      if (errorLog.module) {
        errorLog.source = source + " (" + module + ")";
      } else {
        errorLog.source = source;
      }

      this.configFormData.record = {
        "errorLogForm": errorLog
      };
    });
  }

  setListConfig(): void {
    super.setListConfigUsingCrud(errorLogCrud);
  }

  setListData() {
    let records: Array<Record> = new Array<Record>();

    this.errorLogSubscription = this.logService.getErrorLogs().subscribe(errorLogs => {
      if (!CollectionUtils.isEmpty(errorLogs)) {
        for (let errorLog of errorLogs) {
          errorLog.url = errorLog.url + " (" + errorLog.requestMethod + ")";

          let source = KeyMapUtils.getValue(this.keyMap, "source", errorLog.source);
          let module = KeyMapUtils.getValue(this.keyMap, "module", errorLog.module);
              errorLog.source = source + " | " + module;
        }
      }

      let recordTab1: Record = {
        total: errorLogs.length,
        pageNo: 0,
        rows: errorLogs
      }

      records.push(recordTab1);

      super.setConfigListData(records, this.setBadges(), []);
    });
  }

  buttonClick(action: Action) {
    console.log(action);

    switch (action.sourceIdentifier) {
      case "errorLogCrud":
        this.actionErrorLogCrud(action);
        break;
      case "errorLogForm":
        this.actionErrorLogForm(action);
        break;
      case "errorLogList":
        this.actionErrorLogList(action);
        break;
    }
  }

  actionErrorLogCrud(action: Action) {
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

  actionErrorLogForm(action: Action) {
    switch (action.action) {
      case "backToList":
        this.performBackToList(action);
        break;
    }
  }

  performBackToList(action: Action) {
    this.router.navigate(['/application/log/error-log']);
  }

  actionErrorLogList(action: Action) {
    switch (action.action) {
      case "viewLog":
        this.router.navigate([], { queryParams: { action: action.action }, skipLocationChange: true, replaceUrl: false }).then(result => { window.open('/application/log/error-log/' + action.originalData['id'], '_blank'); });
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
    if (this.errorLogSubscription) {
      this.errorLogSubscription.unsubscribe();
    }
  }
}
