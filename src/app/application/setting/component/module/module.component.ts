import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CrudUtils, Record, StringUtils, KeyMapUtils, KeyMap, KeyMapOptionType, KeyMapAssociation, Button, Badge, Action, CrudListComponentInterface, CrudHeader, ActionPage, CrudTab, CrudFormData, CrudListData, CrudSearch, CrudList, CrudForm } from 'ngx-material-widget';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { FormDiaplyMode } from 'ngx-material-widget/lib/form/model';
import { ModuleService } from '../../service/module.service';
import { moduleCrud } from '../../config/module.config';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModuleComponent extends CrudListComponentInterface implements OnInit {
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

  moduleSubscription: Subscription;
  routerSubscriber: Subscription;

  //  List Config
  quickLinks: Array<Button>;
  searchConfig: CrudSearch;
  searchData: any;
  listConfig: CrudList;
  listPageBackRoute: Array<string>;

  moduleId: string;
  action: string;
  originalData: any;

  constructor(
    private moduleService: ModuleService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();
    this.routerSubscriber = this.router.events.subscribe(
      (event: Event) => {
        if (event instanceof NavigationEnd) {
          this.moduleId = this.route.snapshot.params['id'];
          this.action = this.route.snapshot.queryParams['action'];

          this.setCommonConfig();
          if (this.moduleId) {
            this.setFormConfig(this.moduleId);
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
    super.setCommonConfigUsingCrud(moduleCrud);
    this.setOptions();
  }

  setOptions() {
    let activeAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    activeAssociations.push({ componentIdentifier: "moduleList", fieldKey: "active" });
    activeAssociations.push({ componentIdentifier: "moduleForm", fieldKey: "active" });
    // this.keyMap = KeyMapUtils.push(this.keyMap, activeAssociations, "BOOLEAN", KeyMapOptionType.CRUD, moduleCrud);
  }

  setFormConfig(moduleId: string): void {
    //  Config
    this.form = moduleCrud.form;
    this.actions = moduleCrud.actions;
    this.actionPages = moduleCrud.actionPages;

    //  Tab wise data/setting
    this.configFormData = {
      pageBackRoute: ["/application", "setting", "module"],
      badges: this.setBadges(),
      originalData: this.originalData
    }
    this.setFormsData(moduleId);
  }

  setBadges(): Array<Badge> {
    let badges = new Array<Badge>();

    return badges;
  }

  setBadge(badge: Badge, text: string): Badge {
    badge.content = text;

    return badge;
  }

  setFormsData(moduleId: string): any {
    if (moduleId == "new") {
      this.setTabDisplayMode(moduleCrud.form.tabs, FormDiaplyMode.ADD);
      CrudUtils.changeButtonLabelIcon(moduleCrud.form.tabs, "updateModule", "Save", "add");

      this.configFormData.record = {
        "moduleForm": {}
      };
    } else {
      if (this.action == "editModule") {
        this.setTabDisplayMode(moduleCrud.form.tabs, FormDiaplyMode.EDIT);
      } else {
        this.setTabDisplayMode(moduleCrud.form.tabs, FormDiaplyMode.VIEW);
      }
      CrudUtils.changeButtonLabelIcon(moduleCrud.form.tabs, "updateModule", "Update", "edit");

      this.moduleSubscription = this.moduleService.getModule(+moduleId).subscribe(moduleId => {
        this.originalData = moduleId;

        this.configFormData.record = {
          "moduleForm": moduleId
        };
      });
    }
  }

  setListConfig(): void {
    super.setListConfigUsingCrud(moduleCrud);
  }

  setListData() {
    let records: Array<Record> = new Array<Record>();

    this.moduleSubscription = this.moduleService.getModules().subscribe(modules => {
      let recordTab1: Record = {
        total: modules.length,
        pageNo: 0,
        rows: modules
      }

      records.push(recordTab1);

      super.setConfigListData(records, this.setBadges(), []);
    });
  }

  buttonClick(action: Action) {
    console.log(action);

    switch (action.sourceIdentifier) {
      case "moduleCrud":
        this.actionModuleCrud(action);
        break;
      case "moduleForm":
        this.actionModuleForm(action);
        break;
      case "moduleList":
        this.actionModuleList(action);
        break;
    }
  }

  actionModuleCrud(action: Action) {
    switch (action.action) {
      case "addModule":
        this.router.navigate(['/application', 'setting', 'module', 'new'], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: false });
        break;
    }
  }

  actionModuleForm(action: Action) {
    switch (action.action) {
      case "backToList":
        this.performBackToList(action);
        break;
      case "updateModule":
        this.performUpdateModule(action);
        break;
    }
  }

  performBackToList(action: Action) {
    this.router.navigate(['/application/setting/module']);
  }

  actionModuleList(action: Action) {
    switch (action.action) {
      case "viewModule":
      case "editModule":
        this.router.navigate(['/application', 'setting', 'module', action.originalData['id']], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: false });
        break;
      case "deleteModule":
        this.performDeleteModule(action);
        break;
    }
  }

  performUpdateModule(action: Action) {
    console.log(action);
  }

  performDeleteModule(action: Action) {
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
    if (this.moduleSubscription) {
      this.moduleSubscription.unsubscribe();
    }
  }
}
