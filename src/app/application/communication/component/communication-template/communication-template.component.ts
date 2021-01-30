import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

import { Form, FormDiaplyMode } from 'ngx-material-widget/lib/form/model';
import { FormGroup } from '@angular/forms';
import { PermissionAction, FieldChange, KeyMapAssociation, KeyMapOptionType, CrudListComponentInterface, Record, Button, ButtonColor, ButtonType, ButtonSize, Action, Badge, FormUtils, StringUtils, MasterDataUtils, DropdownUtils, KeyMapUtils } from 'ngx-material-widget';
import { Subscription } from 'rxjs/internal/Subscription';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { Ability } from '@casl/ability';
import { Message, MessageLink, SmsTemplate, EmailTemplate, WhatsAppTemplate, NotificationTemplate, PushTemplate, EmailMessage, NotificationMessage, PushMessage } from '../../model';
import { CommunicationService } from '../../service';
import { communicationTemplateForm, messageForm, communicationTemplateCrud } from '../../config/communication-template.config';
import { CommunicationUtils } from '../../utility/communication.utility';

@Component({
  selector: 'cf-communication-template',
  templateUrl: './communication-template.component.html',
  styleUrls: ['./communication-template.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CommunicationTemplateComponent extends CrudListComponentInterface implements OnInit, OnDestroy {
  communicationTemplateFormConfig: Form;
  sourceIndex: number;
  communicationTemplate: EmailTemplate | SmsTemplate | WhatsAppTemplate | NotificationTemplate | PushTemplate;
  reset: boolean;
  action: string;
  displayMode: string;

  communicationTemplateForm: FormGroup;
  messageForms: Array<FormGroup> = new Array<FormGroup>();

  addMessageButton: Button;
  doCommunicationTemplateButton: Button;
  cancelCommunicationTemplateButton: Button;
  messageFormConfig: Form;

  cellCount: number = 12;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;

  routerSubscriber: Subscription;
  communicationTemplateFormSubscription: Subscription;
  communicationTemplateListSubscription: Subscription;
  breakpointSubscription: Subscription;

  constructor(
    private communicationService: CommunicationService,
    public router: Router,
    private route: ActivatedRoute,
    private ability: Ability,
    private breakpointObserver: BreakpointObserver
  ) {
    super();

    this.routerSubscriber = this.router.events.subscribe(
      (event: Event) => {
        if (event instanceof NavigationEnd) {
          this.setCommonConfig();

          this.action = this.route.snapshot.queryParams['action'];

          if (this.action) {
            this.setForms(this.route.snapshot.params['id']);
          } else {
            this.setListConfig();
            this.loadFilterParams(this.route.snapshot.queryParams['filter']);
            this.setListData();
          }
        }
      });
  }

  ngOnInit(): void {
    this.communicationTemplateFormConfig = communicationTemplateForm;
    this.messageFormConfig = messageForm;
    this.setOptions();

    this.action = this.route.snapshot.queryParams['action'];
    this.initForm();
    this.getLayout();
  }

  setOptions()  {
    let typeAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    typeAssociations.push({ componentIdentifier: "communicationTemplateSearchForm", fieldKey: "type" });
    typeAssociations.push({ componentIdentifier: "communicationTemplateList", fieldKey: "type" });
    typeAssociations.push({ componentIdentifier: "communicationTemplateForm", fieldKey: "type" });
    this.keyMap = KeyMapUtils.push(this.keyMap, typeAssociations, "COMMUNICATION_TYPE", KeyMapOptionType.CRUD, communicationTemplateCrud);
    this.keyMap = KeyMapUtils.push(this.keyMap, typeAssociations, "COMMUNICATION_TYPE", KeyMapOptionType.FORM, communicationTemplateForm);

    let targetAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    targetAssociations.push({ componentIdentifier: "communicationTemplateSearchForm", fieldKey: "target" });
    targetAssociations.push({ componentIdentifier: "communicationTemplateList", fieldKey: "target" });
    targetAssociations.push({ componentIdentifier: "communicationTemplateForm", fieldKey: "target" });
    this.keyMap = KeyMapUtils.push(this.keyMap, targetAssociations, "COMMUNICATION_MEDIA", KeyMapOptionType.CRUD, communicationTemplateCrud);
    this.keyMap = KeyMapUtils.push(this.keyMap, targetAssociations, "COMMUNICATION_MEDIA", KeyMapOptionType.FORM, communicationTemplateForm);

    let languageAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    languageAssociations.push({ componentIdentifier: "communicationTemplateSearchForm", fieldKey: "language" });
    languageAssociations.push({ componentIdentifier: "communicationTemplateList", fieldKey: "language" });
    languageAssociations.push({ componentIdentifier: "messageForm", fieldKey: "language" });
    this.keyMap = KeyMapUtils.push(this.keyMap, languageAssociations, "LANGUAGE", KeyMapOptionType.CRUD, communicationTemplateCrud);
    this.keyMap = KeyMapUtils.push(this.keyMap, languageAssociations, "LANGUAGE", KeyMapOptionType.FORM, messageForm);

    let vibrationAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    vibrationAssociations.push({ componentIdentifier: "messageForm", fieldKey: "vibration" });
    this.keyMap = KeyMapUtils.push(this.keyMap, vibrationAssociations, "BOOLEAN", KeyMapOptionType.FORM, messageForm);

    let screenglowAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    screenglowAssociations.push({ componentIdentifier: "messageForm", fieldKey: "screenglow" });
    this.keyMap = KeyMapUtils.push(this.keyMap, screenglowAssociations, "BOOLEAN", KeyMapOptionType.FORM, messageForm);


    this.communicationService.getSmsSenderIds().subscribe(smsSenderIds => {
      let senderIdAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
      senderIdAssociations.push({ componentIdentifier: "communicationTemplateForm", fieldKey: "senderId" });

      KeyMapUtils.push(this.keyMap, senderIdAssociations, CommunicationUtils.getSmsSenderIdOptions(smsSenderIds), KeyMapOptionType.FORM, communicationTemplateForm);
    });

    this.communicationService.getPushChannels().subscribe(channels => {
      let senderIdAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
      senderIdAssociations.push({ componentIdentifier: "messageForm", fieldKey: "channelKey" });

      KeyMapUtils.push(this.keyMap, senderIdAssociations, CommunicationUtils.getPushChannelIdOptions(channels), KeyMapOptionType.FORM, messageForm);
    });
  }

  setCommonConfig(): void {
    super.setCommonConfigUsingCrud(communicationTemplateCrud);
  }

  setListConfig(): void {
    super.setListConfigUsingCrud(communicationTemplateCrud);
  }

  setBadges(): Array<Badge> {
    let badges = new Array<Badge>();

    return badges;
  }

  setListData() {
    let records: Array<Record> = new Array<Record>();

    this.communicationTemplateListSubscription = this.communicationService.getCommunicationTemplates().subscribe(communicationTemplates => {
      for (let communicationTemplate of communicationTemplates) {
        communicationTemplate.name = communicationTemplate.name + " (" + communicationTemplate.key + ")";

        communicationTemplate['language'] = "";
        communicationTemplate['content'] = "";
        if ((<EmailTemplate | SmsTemplate | WhatsAppTemplate | NotificationTemplate | PushTemplate> communicationTemplate).messages) {
          Object.keys((<EmailTemplate | SmsTemplate | WhatsAppTemplate | NotificationTemplate | PushTemplate> communicationTemplate).messages).map((key) => {
            if (key == 'en') {
              if (communicationTemplate.type == "EMAIL") {
                communicationTemplate['content'] += (<EmailTemplate> communicationTemplate).messages[key].subject;
              }
              if (communicationTemplate.type == "NOTIFICATION" || communicationTemplate.type == "PUSH") {
                communicationTemplate['content'] += (<NotificationTemplate | PushTemplate> communicationTemplate).messages[key].title;
              }
              if (!StringUtils.isEmpty(communicationTemplate['content'])) {
                communicationTemplate['content'] += "<br/>";
              }
              communicationTemplate['content'] += (<EmailTemplate | SmsTemplate | WhatsAppTemplate | NotificationTemplate | PushTemplate> communicationTemplate).messages[key].body;
            }

            if (!StringUtils.isEmpty(communicationTemplate['language'])) {
              communicationTemplate['language'] += ", ";
            }
            communicationTemplate['language'] += DropdownUtils.getValue(key, MasterDataUtils.getMasterDataAsOptions("LANGUAGE"));
          });
        }
      }

      let recordTab: Record = {
        total: communicationTemplates.length,
        pageNo: 0,
        rows: communicationTemplates
      }

      records.push(recordTab);  

      super.setConfigListData(records, this.setBadges(), []);
    });
  }

  initForm() {
    let messages: Map<string, Message | EmailMessage | NotificationMessage | PushMessage> = new Map<string, Message | EmailMessage | NotificationMessage | PushMessage>();
    let message: Message | EmailMessage | NotificationMessage | PushMessage = { body: "", title: "" };
    messages.set(message['language'], message);
    this.messageForms.push(FormUtils.initFormGroup(this.messageFormConfig.formFields, this.communicationTemplate, message, FormDiaplyMode.EDIT))

    this.communicationTemplate = {
      key: "",
      name: "",
      description: "",
      type: "",
      target: [],
      messages: messages
    };

    this.communicationTemplateForm = FormUtils.initFormGroup(this.communicationTemplateFormConfig.formFields, null, this.communicationTemplate, FormDiaplyMode.EDIT);
    console.log(this.communicationTemplateForm);

    if (this.action == "addCommunicationTemplate") {
      this.communicationTemplateFormConfig.displayMode = FormDiaplyMode.ADD;
      this.messageFormConfig.displayMode = FormDiaplyMode.ADD;
    } else if (this.action == "viewCommunicationTemplate") {
      this.communicationTemplateFormConfig.displayMode = FormDiaplyMode.VIEW;
      this.messageFormConfig.displayMode = FormDiaplyMode.VIEW;
    } else if (this.action == "editCommunicationTemplate") {
      this.communicationTemplateFormConfig.displayMode = FormDiaplyMode.EDIT;
      this.messageFormConfig.displayMode = FormDiaplyMode.EDIT;
    }

  }

  setForms(templateId: number): any {
    if (templateId) {
      this.communicationTemplateFormSubscription = this.communicationService.getCommunicationTemplate(templateId).subscribe(communicationTemplate => {
        this.communicationTemplate = communicationTemplate;

        if (this.communicationTemplate.messages) {
          Object.keys(this.communicationTemplate.messages).map((key) => {
            this.communicationTemplate.messages[key]['language'] = key;
          });
        }
      });
    }
  }

  messageArray(obj) {
    return Object.keys(obj).map((key) => { return obj[key] });
  }

  addCMessageButton(identifier: string, label: string, icon: string, color: ButtonColor): Button {
    let buttonConfig: Button = {
      identifier: identifier,
      type: ButtonType.RAISED,
      label: label,
      color: color,
      size: ButtonSize.SMALL,
      icon: icon,
      onlyIcon: false,
      alwaysEnable: true,
    }

    if (identifier == "addMessage") {
      buttonConfig.permission = {
        subject: "Communication",
        action: PermissionAction.CREATE
      }
    } else if (identifier == "doCommunicationTemplate") {
      buttonConfig.permission = {
        subject: "Communication",
        action: PermissionAction.UPDATE
      }
    }

    if (this.isMobile || this.isTablet) {
      if (identifier == 'doCommunicationTemplate' || identifier == 'cancelCommunicationTemplate') {
        buttonConfig.width = "50";
      }
    }
    return buttonConfig;
  }

  fieldChange(fieldChange: FieldChange): void {
    console.log(fieldChange);

    switch (fieldChange.sourceIdentifier) {
      case "communicationTemplateForm":
        if (fieldChange.fieldKey == "target") {
          this.communicationTemplate.target = fieldChange.value;

          this.communicationTemplate = JSON.parse(JSON.stringify(this.communicationTemplate));
        }
        break;
    }
  }

  formChange(form: FormGroup, index: number, formConfig: Form): void {
    console.log(index);
    console.log(formConfig);
    console.log(form);

    switch (formConfig.identifier) {
      case "communicationTemplateForm":
        this.communicationTemplateForm = form;
        //        this.communicationTemplate = this.communicationTemplateForm.getRawValue();
        break;
      case "messageForm":
        if (index >= 0) {
          this.messageForms[index] = form;
        }
        break;
    }
  }

  buttonClick(action: Action): void {
    console.log(action);

    switch (action.sourceIdentifier) {
      case "communicationTemplateCrud":
        this.actionCommunicationTemplateCrud(action);
        break;
      case "communicationTemplateList":
        this.actionCommunicationTemplateList(action);
        break;
      case "communicationTemplateForm":
        this.actionCommunicationTemplateForm(action);
        break;
    }
  }

  actionCommunicationTemplateCrud(action: Action) {
    switch (action.action) {
      case "addCommunicationTemplate":
        this.performAddCommunicationTemplate(action);
        break;
    }
  }

  performAddCommunicationTemplate(action: Action) {
    this.router.navigate(['/application', 'communication', 'communication-template'], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: true });
  }

  actionCommunicationTemplateList(action: Action) {
    switch (action.action) {
      case "deleteCommunicationTemplate":
        this.performDeleteCommunicationTemplate(action);
        break;
      case "editCommunicationTemplate":
        this.performEditCommunicationTemplate(action);
        break;
      case "viewCommunicationTemplate":
        this.performViewCommunicationTemplate(action);
        break;
    }
  }

  performDeleteCommunicationTemplate(action: Action) {
    console.log(action);
  }

  performEditCommunicationTemplate(action: Action) {
    this.router.navigate(['/application', 'communication', 'communication-template', action.originalData['id']], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: true });
  }

  performViewCommunicationTemplate(action: Action) {
    this.router.navigate(['/application', 'communication', 'communication-template', action.originalData['id']], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: true });
  }

  actionCommunicationTemplateForm(action: Action) {
    switch (action.action) {
      case "addMessage":
        this.performAddMessage(action);
        break;
      case "doCommunicationTemplate":
        this.performDoCommunicationTemplate(action);
        break;
      case "cancelCommunicationTemplate":
        this.performCancelCommunicationTemplate(action);
        break;
    }
  }

  performAddMessage(action: Action) {
    console.log(action);

    let message: Message | EmailMessage | NotificationMessage | PushMessage = { title: "", body: "" };
    this.communicationTemplate.messages[""] = message;
    this.messageForms.push(FormUtils.initFormGroup(this.messageFormConfig.formFields, this.communicationTemplate, message, FormDiaplyMode.EDIT))
  }

  performDoCommunicationTemplate(action: Action) {
    // console.log(action);

    // console.log(this.communicationTemplateForm);
    // console.log(this.addressForms);

    this.communicationTemplate = this.communicationTemplateForm.getRawValue();

    let messageLink: MessageLink = { basePath: this.communicationTemplate['link.basePath'], uri: this.communicationTemplate['link.uri'] };
    this.communicationTemplate.link = messageLink;

    this.communicationTemplate.messages = new Map<string, Message>();
    for (let message of this.messageForms) {
      this.communicationTemplate.messages[message.value['language']] = message.getRawValue();
    }

    console.log(this.communicationTemplate);
  }

  performCancelCommunicationTemplate(action: Action) {
    console.log(action);

    this.router.navigate(['/application', 'communication', 'communication-template'], { skipLocationChange: false, replaceUrl: true });
  }

  onSort(event: any) {
    console.log(event);
  }

  onPage(event: any) {
    console.log(event);
  }

  getLayout(): void {
    this.breakpointSubscription = this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.XSmall]) {
        this.cellCount = 4;
        this.isMobile = true;
        console.log('Matches XSmall viewport');
      }
      if (state.breakpoints[Breakpoints.Small]) {
        this.cellCount = 8;
        this.isTablet = true;
        console.log('Matches Small viewport');
      }
      if (state.breakpoints[Breakpoints.Medium]) {
        this.cellCount = 12;
        this.isDesktop = true;
        console.log('Matches Medium  viewport');
      }
      if (state.breakpoints[Breakpoints.Large]) {
        this.cellCount = 12;
        this.isDesktop = true;
        console.log('Matches Large viewport');
      }
      if (state.breakpoints[Breakpoints.XLarge]) {
        this.cellCount = 12;
        this.isDesktop = true;
        console.log('Matches XLarge viewport');
      }

      this.addMessageButton = this.addCMessageButton("addMessage", "Add Message", "add", ButtonColor.PRIMARY);
      this.doCommunicationTemplateButton = this.addCMessageButton("doCommunicationTemplate", "Add Template", "toc", ButtonColor.PRIMARY);
      this.cancelCommunicationTemplateButton = this.addCMessageButton("cancelCommunicationTemplate", "Cancel", "keyboard_arrow_left", ButtonColor.ASCENT);  
    });
  }

  ngOnDestroy(): void {
    if (this.routerSubscriber) {
      this.routerSubscriber.unsubscribe();
    }
    if (this.communicationTemplateFormSubscription) {
      this.communicationTemplateFormSubscription.unsubscribe();
    }
    if (this.communicationTemplateListSubscription) {
      this.communicationTemplateListSubscription.unsubscribe();
    }
    if (this.breakpointSubscription)  {
      this.breakpointSubscription.unsubscribe();
    }
  }
}
