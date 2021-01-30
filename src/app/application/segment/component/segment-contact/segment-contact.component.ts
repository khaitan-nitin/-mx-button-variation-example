import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Record, StringUtils, CollectionUtils, KeyMapUtils, KeyMap, KeyMapAssociation, KeyMapOptionType, Button, Badge, Action, CrudListComponentInterface, CrudHeader, ActionPage, CrudFormData, CrudListData, CrudSearch, CrudList, CrudForm } from 'ngx-material-widget';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { SegmentService } from '../../service';
import { segmentContactCrud } from '../../config/segment-contact.config';
import { EmailContact, MobileContact, UserContact, PushContact, SegmentContact } from '../../model';
import { SegmentUtils } from '../../utility/segment.utility';

@Component({
  selector: 'cf-segment-contact',
  templateUrl: './segment-contact.component.html',
  styleUrls: ['./segment-contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SegmentContactComponent extends CrudListComponentInterface implements OnInit {
  //  Common Config
  identifier: string;
  header: CrudHeader;
  actions: Array<Button>;
  actionPages: Array<ActionPage>;
  reset: boolean;
  keyMap: Array<KeyMap> = new Array<KeyMap>();

  //  Form Config
  form: CrudForm;
  configFormData: CrudFormData;
  configListData: CrudListData;

  segmentSubscription: Subscription;
  segmentContactSubscription: Subscription;
  routerSubscriber: Subscription;

  //  List Config
  quickLinks: Array<Button>;
  searchConfig: CrudSearch;
  searchData: any;
  listConfig: CrudList;
  listPageBackRoute: Array<string>;

  segmentContactId: string;
  originalData: any;

  constructor(
    private segmentService: SegmentService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();
    this.routerSubscriber = this.router.events.subscribe(
      (event: Event) => {
        if (event instanceof NavigationEnd) {
          this.segmentContactId = this.route.snapshot.params['id'];

          this.setCommonConfig();
          if (this.segmentContactId) {
            this.setFormConfig(+this.segmentContactId);
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
    super.setCommonConfigUsingCrud(segmentContactCrud);
    this.setOptions();
  }

  setOptions() {
    let activeAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    activeAssociations.push({ componentIdentifier: "segmentContactSearchForm", fieldKey: "active" });
    // activeAssociations.push({ componentIdentifier: "segmentContactList", fieldKey: "active" });
    this.keyMap = KeyMapUtils.push(this.keyMap, activeAssociations, "BOOLEAN", KeyMapOptionType.CRUD, segmentContactCrud);

    let subscriptionAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    subscriptionAssociations.push({ componentIdentifier: "segmentContactSearchForm", fieldKey: "subscription" });
    this.keyMap = KeyMapUtils.push(this.keyMap, subscriptionAssociations, "BOOLEAN", KeyMapOptionType.CRUD, segmentContactCrud);

    this.segmentService.getSegments().subscribe(segments => {
      let subscriptionAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
      subscriptionAssociations.push({ componentIdentifier: "segmentContactForm", fieldKey: "segmentId" });
      subscriptionAssociations.push({ componentIdentifier: "segmentContactList", fieldKey: "segmentId" });
      this.keyMap = KeyMapUtils.push(this.keyMap, subscriptionAssociations, SegmentUtils.getSegmentOptions(segments), KeyMapOptionType.CRUD, segmentContactCrud);
    });
  }

  setFormConfig(deviceId: number): void {
    //  Config
    this.form = segmentContactCrud.form;
    this.actions = segmentContactCrud.actions;
    this.actionPages = segmentContactCrud.actionPages;

    //  Tab wise data/setting
    this.configFormData = {
      pageBackRoute: ["/application", "segment", "segment-contact"],
      badges: this.setBadges(),
      record: this.setFormsData(deviceId),
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

  setFormsData(segmentContactId: number): any {
    this.segmentContactSubscription = this.segmentService.getSegmentContact(segmentContactId).subscribe(segmentContact => {
      this.originalData = segmentContact;

      this.setSegmentContact(segmentContact);

      this.configFormData.record = {
        "segmentContactForm": segmentContact
      };
    });
  }

  setListConfig(): void {
    super.setListConfigUsingCrud(segmentContactCrud);
  }

  setSegmentContact(segmentContact: SegmentContact)  {
    segmentContact['contact'] = "";
    if (!StringUtils.isEmpty((<EmailContact> segmentContact).email))  {
      segmentContact['contact'] = (<EmailContact> segmentContact).email + " (Email)";
    } else if (!StringUtils.isEmpty((<MobileContact> segmentContact).mobile))  {
      segmentContact['contact'] = (<MobileContact> segmentContact).mobile + " (Mobile)";
    } else if (!StringUtils.isEmpty((<UserContact> segmentContact).userId))  {
      segmentContact['contact'] = (<UserContact> segmentContact).userId + " (User Id)";
    } else if (!StringUtils.isEmpty((<PushContact> segmentContact).token))  {
      segmentContact['contact'] = (<PushContact> segmentContact).token + " (Token)";
    }
  }

  setListData() {
    let records: Array<Record> = new Array<Record>();

    this.segmentContactSubscription = this.segmentService.getSegmentContacts().subscribe(segmentContacts => {
      if (!CollectionUtils.isEmpty(segmentContacts)) {
        for (let segmentContact of segmentContacts) {
          this.setSegmentContact(segmentContact);
        }
      }

      let recordTab1: Record = {
        total: segmentContacts.length,
        pageNo: 0,
        rows: segmentContacts
      }

      records.push(recordTab1);

      super.setConfigListData(records, this.setBadges(), []);
    });
  }

  buttonClick(action: Action) {
    console.log(action);

    switch (action.sourceIdentifier) {
      case "segmentContactForm":
        this.actionSegmentContactForm(action);
        break;
      case "segmentContactList":
        this.actionSegmentContactList(action);
        break;
    }
  }

  actionSegmentContactForm(action: Action) {
    switch (action.action) {
      case "backToList":
        this.performBackToList(action);
        break;
    }
  }

  performBackToList(action: Action) {
    this.router.navigate(['/application/segment/segment-contact']);
  }

  actionSegmentContactList(action: Action) {
    switch (action.action) {
      case "viewSegmentContact":
        this.router.navigate(['/application', 'segment', 'segment-contact', action.originalData['id']], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: false });
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
    if (this.segmentContactSubscription) {
      this.segmentContactSubscription.unsubscribe();
    }

    if (this.segmentSubscription) {
      this.segmentSubscription.unsubscribe();
    }
  }
}
