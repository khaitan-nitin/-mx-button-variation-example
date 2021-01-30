import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CrudUtils, Record,StringUtils, KeyMapUtils, KeyMap, KeyMapOptionType, KeyMapAssociation, Action, Button, Badge, CrudListComponentInterface, CrudHeader, ActionPage, CrudTab, CrudFormData, CrudListData, CrudSearch, CrudList, CrudForm } from 'ngx-material-widget';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { FormDiaplyMode } from 'ngx-material-widget/lib/form/model';
import { ApplicationService } from '../../service/application.service';
import { applicationCrud } from '../../config/application.config';
import { ModuleService } from '../../service/module.service';
import { ModuleUtils } from '../../utility/module.utility';

@Component({
  selector: 'cf-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ApplicationComponent extends CrudListComponentInterface implements OnInit {
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

  applicationSubscription: Subscription;
  routerSubscriber: Subscription;

  //  List Config
  quickLinks: Array<Button>;
  searchConfig: CrudSearch;
  searchData: any;
  listConfig: CrudList;
  listPageBackRoute: Array<string>;

  applicationId: string;
  action: string;
  originalData: any;

  constructor(
    private applicationService: ApplicationService,
    private moduleService: ModuleService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();
    this.routerSubscriber = this.router.events.subscribe(
      (event: Event) => {
        if (event instanceof NavigationEnd) {
          this.applicationId = this.route.snapshot.params['id'];
          this.action = this.route.snapshot.queryParams['action'];

          this.setCommonConfig();
          if (this.applicationId) {
            this.setFormConfig(this.applicationId);
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
    super.setCommonConfigUsingCrud(applicationCrud);
    this.setOptions();
  }

  setOptions() {
    let activeAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    activeAssociations.push({ componentIdentifier: "applicationList", fieldKey: "active" });
    activeAssociations.push({ componentIdentifier: "applicationForm", fieldKey: "active" });
    // this.keyMap = KeyMapUtils.push(this.keyMap, activeAssociations, "BOOLEAN", KeyMapOptionType.CRUD, applicationCrud);

    this.moduleService.getModules().subscribe(modules => {
      let moduleAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
      moduleAssociations.push({ componentIdentifier: "applicationList", fieldKey: "modules" });
      moduleAssociations.push({ componentIdentifier: "applicationForm", fieldKey: "modules" });
      this.keyMap = KeyMapUtils.push(this.keyMap, moduleAssociations, ModuleUtils.getModuleOptions(modules), KeyMapOptionType.CRUD, applicationCrud);
    });
  }

  setFormConfig(applicationId: string): void {
    //  Config
    this.form = applicationCrud.form;
    this.actions = applicationCrud.actions;
    this.actionPages = applicationCrud.actionPages;

    //  Tab wise data/setting
    this.configFormData = {
      pageBackRoute: ["/application", "setting", "application"],
      badges: this.setBadges(),
      originalData: this.originalData
    }
    this.setFormsData(applicationId);
  }

  setBadges(): Array<Badge> {
    let badges = new Array<Badge>();

    return badges;
  }

  setBadge(badge: Badge, text: string): Badge {
    badge.content = text;

    return badge;
  }

  setFormsData(applicationId: string): any {
    if (applicationId == "new") {
      this.setTabDisplayMode(applicationCrud.form.tabs, FormDiaplyMode.ADD);
      CrudUtils.changeButtonLabelIcon(applicationCrud.form.tabs, "updateApplication", "Save", "add");

      this.configFormData.record = {
        "applicationForm": {}
      };
    } else {
      if (this.action == "editApplication") {
        this.setTabDisplayMode(applicationCrud.form.tabs, FormDiaplyMode.EDIT);
      } else {
        this.setTabDisplayMode(applicationCrud.form.tabs, FormDiaplyMode.VIEW);
      }
      CrudUtils.changeButtonLabelIcon(applicationCrud.form.tabs, "updateApplication", "Update", "edit");

      this.applicationSubscription = this.applicationService.getApplication(+applicationId).subscribe(application => {
        this.originalData = application;

        this.configFormData.record = {
          "applicationForm": application
        };
      });
    }
  }

  setListConfig(): void {
    super.setListConfigUsingCrud(applicationCrud);
  }

  setListData() {
    let records: Array<Record> = new Array<Record>();

    this.applicationSubscription = this.applicationService.getApplications().subscribe(applications => {
      let recordTab1: Record = {
        total: applications.length,
        pageNo: 0,
        rows: applications
      }

      records.push(recordTab1);

      super.setConfigListData(records, this.setBadges(), []);
    });
  }

  buttonClick(action: Action) {
    console.log(action);

    switch (action.sourceIdentifier) {
      case "applicationCrud":
        this.actionApplicationCrud(action);
        break;
      case "applicationForm":
        this.actionApplicationForm(action);
        break;
      case "applicationList":
        this.actionApplicationList(action);
        break;
    }
  }

  actionApplicationCrud(action: Action) {
    switch (action.action) {
      case "addApplication":
        this.router.navigate(['/application', 'setting', 'application', 'new'], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: false });
        break;
    }
  }

  actionApplicationForm(action: Action) {
    switch (action.action) {
      case "backToList":
        this.performBackToList(action);
        break;
      case "updateApplication":
        this.performUpdateApplication(action);
        break;
    }
  }

  performBackToList(action: Action) {
    this.router.navigate(['/application/setting/application']);
  }

  actionApplicationList(action: Action) {
    switch (action.action) {
      case "viewApplication":
      case "editApplication":
        this.router.navigate(['/application', 'setting', 'application', action.originalData['id']], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: false });
        break;
      case "deleteApplication":
        this.performDeleteApplication(action);
        break;
    }
  }

  performUpdateApplication(action: Action) {
    console.log(action);
  }

  performDeleteApplication(action: Action) {
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
    if (this.applicationSubscription) {
      this.applicationSubscription.unsubscribe();
    }
  }
}
