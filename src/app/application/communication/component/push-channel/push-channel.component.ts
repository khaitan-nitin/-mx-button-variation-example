import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CrudUtils, Record, StringUtils, CollectionUtils, KeyMapUtils, KeyMap, KeyMapAssociation, KeyMapOptionType, Button, Badge, Action, CrudListComponentInterface, CrudHeader, ActionPage, CrudFormData, CrudListData, CrudSearch, CrudList, CrudForm } from 'ngx-material-widget';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { CommunicationService } from '../../service';
import { pushChannelCrud } from '../../config/push-channel.config';
import { FormDiaplyMode } from 'ngx-material-widget/lib/form/model';

@Component({
  selector: 'cf-push-channel',
  templateUrl: './push-channel.component.html',
  styleUrls: ['./push-channel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PushChannelComponent extends CrudListComponentInterface implements OnInit {
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

  pushSubscription: Subscription;
  routerSubscriber: Subscription;

  //  List Config
  quickLinks: Array<Button>;
  searchConfig: CrudSearch;
  searchData: any;
  listConfig: CrudList;
  listPageBackRoute: Array<string>;

  pushChannelId: string;
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
          this.pushChannelId = this.route.snapshot.params['id'];
          this.action = this.route.snapshot.queryParams['action'];

          this.setCommonConfig();
          if (this.pushChannelId) {
            this.setFormConfig(this.pushChannelId);
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
    super.setCommonConfigUsingCrud(pushChannelCrud);
    this.setOptions();
  }

  setOptions() {
    let activeAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    activeAssociations.push({ componentIdentifier: "pushChannelSearchForm", fieldKey: "active" });
    // activeAssociations.push({ componentIdentifier: "pushChannelList", fieldKey: "active" });
    activeAssociations.push({ componentIdentifier: "pushChannelForm", fieldKey: "active" });
    this.keyMap = KeyMapUtils.push(this.keyMap, activeAssociations, "BOOLEAN", KeyMapOptionType.CRUD, pushChannelCrud);
  }

  setFormConfig(deviceId: string): void {
    //  Config
    this.form = pushChannelCrud.form;
    this.actions = pushChannelCrud.actions;
    this.actionPages = pushChannelCrud.actionPages;

    //  Tab wise data/setting
    this.configFormData = {
      pageBackRoute: ["/application", "communication", "push-channel"],
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

  setFormsData(pushChannelId: string): any {
    if (pushChannelId == "new") {
      this.setTabDisplayMode(pushChannelCrud.form.tabs, FormDiaplyMode.ADD);
      CrudUtils.changeButtonLabelIcon(pushChannelCrud.form.tabs, "updatePushChannel", "Save", "add");

      this.configFormData.record = {
        "pushChannelForm": {}
      };
    } else {
      if (this.action == "editPushChannel") {
        this.setTabDisplayMode(pushChannelCrud.form.tabs, FormDiaplyMode.EDIT);
      } else {
        this.setTabDisplayMode(pushChannelCrud.form.tabs, FormDiaplyMode.VIEW);
      }
      CrudUtils.changeButtonLabelIcon(pushChannelCrud.form.tabs, "updatePushChannel", "Update", "edit");

      this.pushSubscription = this.communicationService.getPushChannel(+pushChannelId).subscribe(pushChannel => {
        this.originalData = pushChannel;

        this.configFormData.record = {
          "pushChannelForm": pushChannel
        };
      });
    }
  }

  setListConfig(): void {
    super.setListConfigUsingCrud(pushChannelCrud);
  }

  setListData() {
    let records: Array<Record> = new Array<Record>();

    this.pushSubscription = this.communicationService.getPushChannels().subscribe(pushChannels => {
      if (!CollectionUtils.isEmpty(pushChannels)) {
        for (let pushChannel of pushChannels) {
          pushChannel.name = pushChannel.name + " (" + pushChannel.key + ")";
        }
      }

      let recordTab1: Record = {
        total: pushChannels.length,
        pageNo: 0,
        rows: pushChannels
      }

      records.push(recordTab1);

      super.setConfigListData(records, this.setBadges(), []);
    });
  }

  buttonClick(action: Action) {
    console.log(action);

    switch (action.sourceIdentifier) {
      case "pushChannelCrud":
        this.actionPushChannelCrud(action);
        break;
      case "pushChannelForm":
        this.actionPushChannelForm(action);
        break;
      case "pushChannelList":
        this.actionPushChannelList(action);
        break; 
    }
  }

  actionPushChannelCrud(action: Action) {
    switch (action.action) {
      case "addPushChannel":
        this.router.navigate(['/application', 'communication', 'push-channel', 'new'], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: false });
        break;
    }
  }

  actionPushChannelForm(action: Action) {
    switch (action.action) {
      case "backToList":
        this.performBackToList(action);
        break;
      case "updatePushChannel":
        this.performUpdatePushChannel(action);
        break;
    }
  }

  performBackToList(action: Action) {
    this.router.navigate(['/application/communication/push-channel']);
  }

  actionPushChannelList(action: Action) {
    switch (action.action) {
      case "viewPushChannel":
      case "editPushChannel":
        this.router.navigate(['/application', 'communication', 'push-channel', action.originalData['id']], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: false });
        break;
      case "deletePushChannel":
        this.performDeletePushChannel(action);
        break;
    }
  }

  performUpdatePushChannel(action: Action) {
    console.log(action);
  }

  performDeletePushChannel(action: Action) {
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
    if (this.pushSubscription) {
      this.pushSubscription.unsubscribe();
    }
  }
}
