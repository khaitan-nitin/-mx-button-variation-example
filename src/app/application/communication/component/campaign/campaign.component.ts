import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { StringUtils, CollectionUtils, KeyMapUtils, CrudHeader, ActionPage, CrudTab, CrudFormData, CrudListData, CrudSearch, CrudList, CrudForm, Record, CrudUtils, CrudListComponentInterface, Button, Badge, Action, KeyMap, KeyMapAssociation, KeyMapOptionType, FieldChange } from 'ngx-material-widget';
import { FormDiaplyMode } from 'ngx-material-widget/lib/form/model';
import { campaignCrud } from '../../config/campaign.config';
import { CommunicationService } from '../../service';
import { CommunicationUtils } from '../../utility/communication.utility';
import { SegmentService } from 'src/app/application/segment/service';
import { SegmentUtils } from 'src/app/application/segment/utility/segment.utility';
import { AccessCriteriaService } from 'src/app/application/marketing/service';
import { AccessCriteriaUtils } from 'src/app/application/marketing/utility/access-criteria.utility';

@Component({
  selector: 'cf-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CampaignComponent extends CrudListComponentInterface implements OnInit {
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

  segmentSubscription: Subscription;
  routerSubscriber: Subscription;

  //  List Config
  quickLinks: Array<Button>;
  searchConfig: CrudSearch;
  searchData: any;
  listConfig: CrudList;
  listPageBackRoute: Array<string>;

  campaignId: string;
  action: string;
  originalData: any;

  constructor(
    private communicationService: CommunicationService,
    private segmentService: SegmentService,
    private accessCriteriaService: AccessCriteriaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();
    this.routerSubscriber = this.router.events.subscribe(
      (event: Event) => {
        if (event instanceof NavigationEnd) {
          this.campaignId = this.route.snapshot.params['id'];
          this.action = this.route.snapshot.queryParams['action'];

          this.setCommonConfig();
          if (this.campaignId) {
            this.setFormConfig(this.campaignId);
          } else {
            this.setListConfig();
            let filter = StringUtils.isEmpty(this.route.snapshot.queryParams['filter']) ? {} : this.route.snapshot.queryParams['filter'];
            this.loadFilterParams(filter);
            this.setListData();
          }
        }
      });
  }

  ngOnInit(): void {
  }

  setCommonConfig(): void {
    super.setCommonConfigUsingCrud(campaignCrud);
    this.setOptions();
  }

  setOptions() {
    let activeAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    // activeAssociations.push({ componentIdentifier: "campaignList", fieldKey: "active" });
    activeAssociations.push({ componentIdentifier: "campaignForm", fieldKey: "active" });
    activeAssociations.push({ componentIdentifier: "campaignForm", fieldKey: "receiveAs.ivr" });
    activeAssociations.push({ componentIdentifier: "campaignForm", fieldKey: "receiveAs.text" });
    activeAssociations.push({ componentIdentifier: "campaignSearchForm", fieldKey: "active" });
    activeAssociations.push({ componentIdentifier: "campaignSearchForm", fieldKey: "receiveAs.ivr" });
    activeAssociations.push({ componentIdentifier: "campaignSearchForm", fieldKey: "receiveAs.text" });
    this.keyMap = KeyMapUtils.push(this.keyMap, activeAssociations, "BOOLEAN", KeyMapOptionType.CRUD, campaignCrud);

    let messageTypeAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    messageTypeAssociations.push({ componentIdentifier: "campaignList", fieldKey: "message.type" });
    messageTypeAssociations.push({ componentIdentifier: "campaignForm", fieldKey: "message.type" });
    messageTypeAssociations.push({ componentIdentifier: "campaignSearchForm", fieldKey: "message.type" });
    this.keyMap = KeyMapUtils.push(this.keyMap, messageTypeAssociations, "COMMUNICATION_MEDIA", KeyMapOptionType.CRUD, campaignCrud);
 
    let receiverTypeAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    receiverTypeAssociations.push({ componentIdentifier: "campaignList", fieldKey: "receiver.type" });
    receiverTypeAssociations.push({ componentIdentifier: "campaignForm", fieldKey: "receiver.type" });
    receiverTypeAssociations.push({ componentIdentifier: "campaignSearchForm", fieldKey: "receiver.type" });
    this.keyMap = KeyMapUtils.push(this.keyMap, receiverTypeAssociations, "CAMPAIGN_RECEIVER_TYPE", KeyMapOptionType.CRUD, campaignCrud);

    let sendTypeAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    sendTypeAssociations.push({ componentIdentifier: "campaignList", fieldKey: "send.type" });
    sendTypeAssociations.push({ componentIdentifier: "campaignForm", fieldKey: "send.type" });
    sendTypeAssociations.push({ componentIdentifier: "campaignSearchForm", fieldKey: "send.type" });
    this.keyMap = KeyMapUtils.push(this.keyMap, sendTypeAssociations, "CAMPAIGN_SEND_TYPE", KeyMapOptionType.CRUD, campaignCrud);

    let sendPatternAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    sendPatternAssociations.push({ componentIdentifier: "campaignForm", fieldKey: "send.sendPattern" });
    sendPatternAssociations.push({ componentIdentifier: "campaignSearchForm", fieldKey: "send.sendPattern" });
    this.keyMap = KeyMapUtils.push(this.keyMap, sendPatternAssociations, "CAMPAIGN_SEND_PATTERN", KeyMapOptionType.CRUD, campaignCrud);

    this.setTemplateOptions();

    this.segmentService.getSegments().subscribe(segments => {
      let templateAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
      templateAssociations.push({ componentIdentifier: "campaignForm", fieldKey: "receiver.contactDetail.id" });
      templateAssociations.push({ componentIdentifier: "campaignSearchForm", fieldKey: "receiver.contactDetail.id" });

      KeyMapUtils.push(this.keyMap, templateAssociations, SegmentUtils.getSegmentOptions(segments), KeyMapOptionType.CRUD, campaignCrud);
    });

    this.accessCriteriaService.getAccessCriterias().subscribe(accessCriterias => {
      let accessCriteriaAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
      accessCriteriaAssociations.push({ componentIdentifier: "campaignForm", fieldKey: "receiver" });

      KeyMapUtils.push(this.keyMap, accessCriteriaAssociations, AccessCriteriaUtils.getAccessCriteriaOptions(accessCriterias), KeyMapOptionType.CRUD, campaignCrud);
    });
  }

  setTemplateOptions(targetType?: string)  {
    this.communicationService.getCommunicationTemplates().subscribe(templates => {
      let templateAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
      templateAssociations.push({ componentIdentifier: "campaignForm", fieldKey: "message.template" });
      templateAssociations.push({ componentIdentifier: "campaignSearchForm", fieldKey: "message.template" });

      KeyMapUtils.push(this.keyMap, templateAssociations, CommunicationUtils.getTemplateOptions(templates, targetType), KeyMapOptionType.CRUD, campaignCrud);
    });
  }

  setFormConfig(campaignId: string): void {
    //  Config
    this.form = campaignCrud.form;
    this.actions = campaignCrud.actions;
    this.actionPages = campaignCrud.actionPages;

    //  Tab wise data/setting
    this.configFormData = {
      pageBackRoute: ["/application", "communication", "campaign"],
      badges: this.setBadges(),
      originalData: this.originalData
    }
    this.setFormsData(campaignId);
  }

  setBadges(): Array<Badge> {
    let badges = new Array<Badge>();

    return badges;
  }

  setBadge(badge: Badge, text: string): Badge {
    badge.content = text;

    return badge;
  }

  setFormsData(campaignId: string): any {
    if (campaignId == "new") {
      this.setTabDisplayMode(campaignCrud.form.tabs, FormDiaplyMode.ADD);
      CrudUtils.changeButtonLabelIcon(campaignCrud.form.tabs, "updateCampaign", "Save", "add");

      this.configFormData.record = {
        "campaignForm": {}
      };
    } else {
      if (this.action == "editCampaign") {
        this.setTabDisplayMode(campaignCrud.form.tabs, FormDiaplyMode.EDIT);
      } else {
        this.setTabDisplayMode(campaignCrud.form.tabs, FormDiaplyMode.VIEW);
      }
      CrudUtils.changeButtonLabelIcon(campaignCrud.form.tabs, "updateSegment", "Update", "edit");

      this.segmentSubscription = this.communicationService.getCampaign(+campaignId).subscribe(campaign => {
        this.originalData = campaign;

//        this.setTemplateOptions(campaign.receiver.type);
        this.configFormData.record = {
          "campaignForm": campaign
        };
      });
    }
  }

  setListConfig(): void {
    super.setListConfigUsingCrud(campaignCrud);
  }

  setListData() {
    let records: Array<Record> = new Array<Record>();

    this.segmentSubscription = this.communicationService.getCampaigns().subscribe(campaigns => {
      let recordTab1: Record = {
        total: campaigns.length,
        pageNo: 0,
        rows: campaigns
      }

      records.push(recordTab1);

      super.setConfigListData(records, this.setBadges(), []);
    });
  }

  buttonClick(action: Action) {
    console.log(action);

    switch (action.sourceIdentifier) {
      case "campaignCrud":
        this.actionCampaignCrud(action);
        break;
      case "campaignForm":
        this.actionCampaignForm(action);
        break;
      case "campaignList":
        this.actionCampaignList(action);
        break;
    }
  }

  actionCampaignCrud(action: Action) {
    switch (action.action) {
      case "addCampaign":
        this.router.navigate(['/application', 'communication', 'campaign', 'new'], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: false });
        break;
    }
  }

  actionCampaignForm(action: Action) {
    switch (action.action) {
      case "backToList":
        this.performBackToList(action);
        break;
      case "updateCampaign":
        this.performUpdateCampaign(action);
        break;
    }
  }

  performBackToList(action: Action) {
    this.router.navigate(['/application/communication/campaign']);
  }

  actionCampaignList(action: Action) {
    switch (action.action) {
      case "viewCampaign":
      case "editCampaign":
        this.router.navigate(['/application', 'communication', 'campaign', action.originalData['id']], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: false });
        break;
      case "deleteCampaign":
        this.performDeleteCampaign(action);
        break;
    }
  }

  performUpdateCampaign(action: Action) {
    console.log(action);
  }

  performDeleteCampaign(action: Action) {
    console.log(action);
  }

  fieldChange(fieldChange: FieldChange) {
    console.log(fieldChange);

    if (fieldChange.sourceIdentifier == "campaignForm" && fieldChange.fieldKey == "message.type") {
      this.setTemplateOptions(fieldChange.value);
    } 
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
    if (this.segmentSubscription) {
      this.segmentSubscription.unsubscribe();
    }
  }
}
