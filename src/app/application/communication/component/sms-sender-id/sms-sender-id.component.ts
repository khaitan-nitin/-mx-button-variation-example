import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CrudUtils, Record, StringUtils, KeyMapUtils, KeyMap, KeyMapAssociation, KeyMapOptionType, Button, Badge, Action, CrudListComponentInterface, CrudHeader, ActionPage, CrudFormData, CrudListData, CrudSearch, CrudList, CrudForm } from 'ngx-material-widget';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { CommunicationService } from '../../service';
import { smsSenderIdCrud } from '../../config/sms-sender-id.config';
import { FormDiaplyMode } from 'ngx-material-widget/lib/form/model';

@Component({
  selector: 'cf-sms-sender-id',
  templateUrl: './sms-sender-id.component.html',
  styleUrls: ['./sms-sender-id.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SmsSenderIdComponent extends CrudListComponentInterface implements OnInit {
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

  smsSenderIdSubscription: Subscription;
  routerSubscriber: Subscription;

  //  List Config
  quickLinks: Array<Button>;
  searchConfig: CrudSearch;
  searchData: any;
  listConfig: CrudList;
  listPageBackRoute: Array<string>;

  smsSenderId: string;
  action: string;
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
          this.smsSenderId = this.route.snapshot.params['id'];
          this.action = this.route.snapshot.queryParams['action'];

          this.setCommonConfig();
          if (this.smsSenderId) {
            this.setFormConfig(this.smsSenderId);
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
    super.setCommonConfigUsingCrud(smsSenderIdCrud);
    this.setOptions();
  }

  setOptions() {
    let activeAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    activeAssociations.push({ componentIdentifier: "smsSenderIdSearchForm", fieldKey: "active" });
    // activeAssociations.push({ componentIdentifier: "smsSenderIdList", fieldKey: "active" });
    activeAssociations.push({ componentIdentifier: "smsSenderIdForm", fieldKey: "active" });
    this.keyMap = KeyMapUtils.push(this.keyMap, activeAssociations, "BOOLEAN", KeyMapOptionType.CRUD, smsSenderIdCrud);
  }

  setFormConfig(deviceId: string): void {
    //  Config
    this.form = smsSenderIdCrud.form;
    this.actions = smsSenderIdCrud.actions;
    this.actionPages = smsSenderIdCrud.actionPages;

    //  Tab wise data/setting
    this.configFormData = {
      pageBackRoute: ["/application", "communication", "sms-sender-id"],
      badges: this.setBadges(),
      originalData: this.originalData
    }
    this.setFormsData(deviceId);
  }

  setBadges(): Array<Badge> {
    let badges = new Array<Badge>();

    return badges;
  }

  setBadge(badge: Badge, text: string): Badge {
    badge.content = text;

    return badge;
  }

  setFormsData(smsSenderId: string): any {
    if (smsSenderId == "new") {
      this.setTabDisplayMode(smsSenderIdCrud.form.tabs, FormDiaplyMode.ADD);
      CrudUtils.changeButtonLabelIcon(smsSenderIdCrud.form.tabs, "updateSmsSenderId", "Save", "add");

      this.configFormData.record = {
        "smsSenderIdForm": {}
      };
    } else {
      if (this.action == "editSmsSenderId") {
        this.setTabDisplayMode(smsSenderIdCrud.form.tabs, FormDiaplyMode.EDIT);
      } else {
        this.setTabDisplayMode(smsSenderIdCrud.form.tabs, FormDiaplyMode.VIEW);
      }
      CrudUtils.changeButtonLabelIcon(smsSenderIdCrud.form.tabs, "updateSmsSenderId", "Update", "edit");

      this.smsSenderIdSubscription = this.communicationService.getSmsSenderId(+smsSenderId).subscribe(smsSenderId => {
        this.originalData = smsSenderId;

        this.configFormData.record = {
          "smsSenderIdForm": smsSenderId
        };
      });
    }
  }

  setListConfig(): void {
    super.setListConfigUsingCrud(smsSenderIdCrud);
  }

  setListData() {
    let records: Array<Record> = new Array<Record>();

    this.smsSenderIdSubscription = this.communicationService.getSmsSenderIds().subscribe(smsSenderIds => {
      let recordTab1: Record = {
        total: smsSenderIds.length,
        pageNo: 0,
        rows: smsSenderIds
      }

      records.push(recordTab1);

      super.setConfigListData(records, this.setBadges(), []);
    });
  }

  buttonClick(action: Action) {
    console.log(action);

    switch (action.sourceIdentifier) {
      case "smsSenderIdCrud":
        this.actionSmsSenderIdCrud(action);
        break;
      case "smsSenderIdForm":
        this.actionSmsSenderIdForm(action);
        break;
      case "smsSenderIdList":
        this.actionSmsSenderIdList(action);
        break;
    }
  }

  actionSmsSenderIdCrud(action: Action) {
    switch (action.action) {
      case "addSmsSenderId":
        this.router.navigate(['/application', 'communication', 'sms-sender-id', 'new'], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: false });
        break;
    }
  }

  actionSmsSenderIdForm(action: Action) {
    switch (action.action) {
      case "backToList":
        this.performBackToList(action);
        break;
      case "updateSmsSenderId":
        this.performUpdateSmsSenderId(action);
        break;
    }
  }

  performBackToList(action: Action) {
    this.router.navigate(['/application/communication/sms-sender-id']);
  }

  actionSmsSenderIdList(action: Action) {
    switch (action.action) {
      case "viewSmsSenderId":
      case "editSmsSenderId":
        this.router.navigate(['/application', 'communication', 'sms-sender-id', action.originalData['id']], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: false });
        break;
      case "deleteSmsSenderId":
        this.performDeleteSmsSenderId(action);
        break;
    }
  }

  performUpdateSmsSenderId(action: Action) {
    console.log(action);
  }

  performDeleteSmsSenderId(action: Action) {
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
    if (this.smsSenderIdSubscription) {
      this.smsSenderIdSubscription.unsubscribe();
    }
  }
}
