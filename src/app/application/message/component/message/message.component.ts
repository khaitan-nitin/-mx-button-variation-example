import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CrudUtils, Record, KeyMap, DropdownOption, KeyMapAssociation, KeyMapOptionType, Button, Badge, Action, CrudListComponentInterface, CrudHeader, ActionPage, CrudListData, CrudSearch, CrudList, CrudTab, CrudFormData, CrudForm } from 'ngx-material-widget';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { StringUtils, KeyMapUtils } from 'ngx-material-widget';
import { MessageService } from '../../service';
import { messageCrud } from '../../config/message.config';
import { FormDiaplyMode } from 'ngx-material-widget/lib/form/model';
import { ModuleService } from 'src/app/application/setting/service/module.service';
import { ModuleUtils } from 'src/app/application/setting/utility/module.utility';

@Component({
  selector: 'cf-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MessageComponent extends CrudListComponentInterface implements OnInit {
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

  messageSubscription: Subscription;
  routerSubscriber: Subscription;

  //  List Config
  quickLinks: Array<Button>;
  searchConfig: CrudSearch;
  searchData: any;
  listConfig: CrudList;
  listPageBackRoute: Array<string>;

  messageId: string;
  action: string;
  originalData: any;
  moduleOptions: Array<DropdownOption>;

  constructor(
    private messageService: MessageService,
    private moduleService: ModuleService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();
    this.routerSubscriber = this.router.events.subscribe(
      (event: Event) => {
        if (event instanceof NavigationEnd) {
          this.messageId = this.route.snapshot.params['id'];
          this.action = this.route.snapshot.queryParams['action'];

          this.setCommonConfig();
          if (this.messageId) {
            this.setFormConfig(this.messageId);
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
    super.setCommonConfigUsingCrud(messageCrud);
    this.setOptions();
  }

  setOptions() {
    this.moduleService.getModules().subscribe(modules => {
      this.moduleOptions = ModuleUtils.getModuleOptions(modules);

      let moduleAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
      moduleAssociations.push({ componentIdentifier: "messageForm", fieldKey: "modules" });
      moduleAssociations.push({ componentIdentifier: "messageList", fieldKey: "modules" });
      this.keyMap = KeyMapUtils.push(this.keyMap, moduleAssociations, this.moduleOptions, KeyMapOptionType.CRUD, messageCrud);
    });
  }

  setFormConfig(messageId: string): void {
    //  Config
    this.form = messageCrud.form;
    this.actions = messageCrud.actions;
    this.actionPages = messageCrud.actionPages;

    //  Tab wise data/setting
    this.configFormData = {
      pageBackRoute: ["/application", "message", "message"],
      badges: this.setBadges(),
      originalData: this.originalData
    }
    this.setFormsData(messageId);
  }

  setBadges(): Array<Badge> {
    let badges = new Array<Badge>();

    return badges;
  }

  setBadge(badge: Badge, text: string): Badge {
    badge.content = text;

    return badge;
  }

  setFormsData(messageId: string): any {
    if (messageId == "new") {
      this.setTabDisplayMode(messageCrud.form.tabs, FormDiaplyMode.ADD);
      CrudUtils.changeButtonLabelIcon(messageCrud.form.tabs, "updateMessage", "Save", "add");

      this.configFormData.record = {
        "messageForm": {}
      };
    } else {
      if (this.action == "editMessage") {
        this.setTabDisplayMode(messageCrud.form.tabs, FormDiaplyMode.EDIT);
      } else {
        this.setTabDisplayMode(messageCrud.form.tabs, FormDiaplyMode.VIEW);
      }
      CrudUtils.changeButtonLabelIcon(messageCrud.form.tabs, "updateMessage", "Update", "edit");

      this.messageSubscription = this.messageService.getMessage(+messageId).subscribe(message => {
        this.originalData = message;

        this.configFormData.record = {
          "messageForm": message
        };
      });
    }
  }

  setListConfig(): void {
    super.setListConfigUsingCrud(messageCrud);
  }

  setListData() {
    let records: Array<Record> = new Array<Record>();

    this.messageSubscription = this.messageService.getMessages().subscribe(messages => {
      let recordTab1: Record = {
        total: messages.length,
        pageNo: 0,
        rows: messages
      }

      records.push(recordTab1);

      super.setConfigListData(records, this.setBadges(), []);
    });
  }

  buttonClick(action: Action) {
    console.log(action);

    switch (action.sourceIdentifier) {
      case "messageCrud":
        this.actionMessageCrud(action);
        break;
      case "messageForm":
        this.actionMessageForm(action);
        break;
      case "messageList":
        this.actionMessageList(action);
        break;
    }
  }

  actionMessageCrud(action: Action) {
    switch (action.action) {
      case "addMessage":
        this.router.navigate(['/application', 'message', 'message', 'new'], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: false });
        break;
    }
  }

  actionMessageForm(action: Action) {
    switch (action.action) {
      case "backToList":
        this.performBackToList(action);
        break;
      case "updateMessage":
        this.performUpdateMessage(action);
        break;
    }
  }
  performBackToList(action: Action) {
    this.router.navigate(['/application/message/message']);
  }

  actionMessageList(action: Action) {
    switch (action.action) {
      case "editMessage":
        this.router.navigate(['/application', 'message', 'message', action.originalData['id']], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: false });
        break;
      case "deleteMessage":
        this.performDeleteMessage(action);
        break;
    }
  }

  performUpdateMessage(action: Action) {
    console.log(action);
  }

  performDeleteMessage(action: Action) {
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
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
  }
}
