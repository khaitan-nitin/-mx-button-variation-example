import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CrudListComponentInterface, CrudUtils, Record, KeyMap, KeyMapAssociation, KeyMapOptionType, DropdownOption, Button, Badge, Action, CrudHeader, ActionPage, CrudListData, CrudSearch, CrudList, CrudFormData, CrudTab, CrudForm } from 'ngx-material-widget';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { StringUtils, KeyMapUtils } from 'ngx-material-widget';
import { ErrorCodeService } from '../../service';
import { errorCodeCrud } from '../../config/error-code.config';
import { FormDiaplyMode } from 'ngx-material-widget/lib/form/model';
import { ModuleService } from 'src/app/application/setting/service/module.service';
import { ModuleUtils } from 'src/app/application/setting/utility/module.utility';

@Component({
  selector: 'cf-error-code',
  templateUrl: './error-code.component.html',
  styleUrls: ['./error-code.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ErrorCodeComponent extends CrudListComponentInterface implements OnInit {
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

  errorCodeSubscription: Subscription;
  routerSubscriber: Subscription;

  //  List Config
  quickLinks: Array<Button>;
  searchConfig: CrudSearch;
  searchData: any;
  listConfig: CrudList;
  listPageBackRoute: Array<string>;

  errorCodeId: string;
  action: string;
  originalData: any;
  moduleOptions: Array<DropdownOption>;

  constructor(
    private errorCodeService: ErrorCodeService,
    private moduleService: ModuleService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();
    this.routerSubscriber = this.router.events.subscribe(
      (event: Event) => {
        if (event instanceof NavigationEnd) {
          this.errorCodeId = this.route.snapshot.params['id'];
          this.action = this.route.snapshot.queryParams['action'];

          this.setCommonConfig();
          if (this.errorCodeId) {
            this.setFormConfig(this.errorCodeId);
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
    super.setCommonConfigUsingCrud(errorCodeCrud);
    this.setOptions();
  }

  setOptions() {
    this.moduleService.getModules().subscribe(modules => {
      this.moduleOptions = ModuleUtils.getModuleOptions(modules);

      let moduleAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
      moduleAssociations.push({ componentIdentifier: "errorCodeForm", fieldKey: "modules" });
      moduleAssociations.push({ componentIdentifier: "errorCodeList", fieldKey: "modules" });
      this.keyMap = KeyMapUtils.push(this.keyMap, moduleAssociations, this.moduleOptions, KeyMapOptionType.CRUD, errorCodeCrud);
    });
  }

  setFormConfig(errorCodeId: string): void {
    //  Config
    this.form = errorCodeCrud.form;
    this.actions = errorCodeCrud.actions;
    this.actionPages = errorCodeCrud.actionPages;

    //  Tab wise data/setting
    this.configFormData = {
      pageBackRoute: ["/application", "message", "error-code"],
      badges: this.setBadges(),
      originalData: this.originalData
    }
    this.setFormsData(errorCodeId);
  }

  setBadges(): Array<Badge> {
    let badges = new Array<Badge>();

    return badges;
  }

  setBadge(badge: Badge, text: string): Badge {
    badge.content = text;

    return badge;
  }

  setFormsData(errorCodeId: string): any {
    if (errorCodeId == "new") {
      this.setTabDisplayMode(errorCodeCrud.form.tabs, FormDiaplyMode.ADD);
      CrudUtils.changeButtonLabelIcon(errorCodeCrud.form.tabs, "updateErrorCode", "Save", "add");

      this.configFormData.record = {
        "errorCodeForm": {}
      };
    } else {
      if (this.action == "editErrorCode") {
        this.setTabDisplayMode(errorCodeCrud.form.tabs, FormDiaplyMode.EDIT);
      } else {
        this.setTabDisplayMode(errorCodeCrud.form.tabs, FormDiaplyMode.VIEW);
      }
      CrudUtils.changeButtonLabelIcon(errorCodeCrud.form.tabs, "updateErrorCode", "Update", "edit");

      this.errorCodeSubscription = this.errorCodeService.getErrorCode(+errorCodeId).subscribe(errorCode => {
        this.originalData = errorCode;

        this.configFormData.record = {
          "errorCodeForm": errorCode
        };
      });
    }
  }

  setListConfig(): void {
    super.setListConfigUsingCrud(errorCodeCrud);
  }

  setListData() {
    let records: Array<Record> = new Array<Record>();

    this.errorCodeSubscription = this.errorCodeService.getErrorCodes().subscribe(errorCodes => {
      let recordTab1: Record = {
        total: errorCodes.length,
        pageNo: 0,
        rows: errorCodes
      }

      records.push(recordTab1);

      super.setConfigListData(records, this.setBadges(), []);
    });
  }

  buttonClick(action: Action) {
    console.log(action);

    switch (action.sourceIdentifier) {
      case "errorCodeCrud":
        this.actionErrorCodeCrud(action);
        break;
      case "errorCodeForm":
        this.actionErrorCodeForm(action);
        break;
      case "errorCodeList":
        this.actionErrorCodeList(action);
        break;
    }
  }

  actionErrorCodeCrud(action: Action) {
    switch (action.action) {
      case "addErrorCode":
        this.router.navigate(['/application', 'message', 'error-code', 'new'], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: false });
        break;
    }
  }

  actionErrorCodeForm(action: Action) {
    switch (action.action) {
      case "backToList":
        this.performBackToList(action);
        break;
      case "updateErrorCode":
        this.performUpdateErrorCode(action);
        break;
    }
  }

  performBackToList(action: Action) {
    this.router.navigate(['/application/message/error-code']);
  }

  actionErrorCodeList(action: Action) {
    switch (action.action) {
      case "editErrorCode":
        this.router.navigate(['/application', 'message', 'error-code', action.originalData['id']], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: false });
        break;
      case "deleteErrorCode":
        this.performDeleteErrorCode(action);
        break;
    }
  }

  performUpdateErrorCode(action: Action) {
    console.log(action);
  }

  performDeleteErrorCode(action: Action) {
    console.log(action);
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
    if (this.errorCodeSubscription) {
      this.errorCodeSubscription.unsubscribe();
    }
  }
}
