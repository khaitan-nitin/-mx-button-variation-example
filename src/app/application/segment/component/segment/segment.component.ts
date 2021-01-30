import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CrudUtils, Record, StringUtils, KeyMapUtils, KeyMap, KeyMapAssociation, KeyMapOptionType, Button, Badge, Action, CrudListComponentInterface, CrudHeader, ActionPage, CrudFormData, CrudListData, CrudSearch, CrudList, CrudForm } from 'ngx-material-widget';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { FormDiaplyMode } from 'ngx-material-widget/lib/form/model';
import { segmentCrud } from '../../config/segment.config';
import { SegmentService } from '../../service';

@Component({
  selector: 'cf-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SegmentComponent extends CrudListComponentInterface implements OnInit {
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

  segmentId: string;
  action: string;
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
          this.segmentId = this.route.snapshot.params['id'];
          this.action = this.route.snapshot.queryParams['action'];

          this.setCommonConfig();
          if (this.segmentId) {
            this.setFormConfig(this.segmentId);
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
    super.setCommonConfigUsingCrud(segmentCrud);
    this.setOptions();
  }

  setOptions() {
    let activeAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    activeAssociations.push({ componentIdentifier: "segmentForm", fieldKey: "active" });
    this.keyMap = KeyMapUtils.push(this.keyMap, activeAssociations, "BOOLEAN", KeyMapOptionType.CRUD, segmentCrud);
  }

  setFormConfig(segmentId: string): void {
    //  Config
    this.form = segmentCrud.form;
    this.actions = segmentCrud.actions;
    this.actionPages = segmentCrud.actionPages;

    //  Tab wise data/setting
    this.configFormData = {
      pageBackRoute: ["/application", "segment", "segment"],
      badges: this.setBadges(),
      originalData: this.originalData
    }
    this.setFormsData(segmentId);
  }

  setBadges(): Array<Badge> {
    let badges = new Array<Badge>();

    return badges;
  }

  setBadge(badge: Badge, text: string): Badge {
    badge.content = text;

    return badge;
  }

  setFormsData(segmentId: string): any {
    if (segmentId == "new") {
      this.setTabDisplayMode(segmentCrud.form.tabs, FormDiaplyMode.ADD);
      CrudUtils.changeButtonLabelIcon(segmentCrud.form.tabs, "updateSegment", "Save", "add");

      this.configFormData.record = {
        "segmentForm": {}
      };
    } else {
      if (this.action == "editSegment") {
        this.setTabDisplayMode(segmentCrud.form.tabs, FormDiaplyMode.EDIT);
      } else {
        this.setTabDisplayMode(segmentCrud.form.tabs, FormDiaplyMode.VIEW);
      }
      CrudUtils.changeButtonLabelIcon(segmentCrud.form.tabs, "updateSegment", "Update", "edit");

      this.segmentSubscription = this.segmentService.getSegment(+segmentId).subscribe(segmentId => {
        this.originalData = segmentId;

        this.configFormData.record = {
          "segmentForm": segmentId
        };
      });
    }
  }

  setListConfig(): void {
    super.setListConfigUsingCrud(segmentCrud);
  }

  setListData() {
    let records: Array<Record> = new Array<Record>();

    this.segmentSubscription = this.segmentService.getSegments().subscribe(segments => {
      let recordTab1: Record = {
        total: segments.length,
        pageNo: 0,
        rows: segments
      }

      records.push(recordTab1);

      super.setConfigListData(records, this.setBadges(), []);
    });
  }

  buttonClick(action: Action) {
    console.log(action);

    switch (action.sourceIdentifier) {
      case "segmentCrud":
        this.actionSegmentCrud(action);
        break;
      case "segmentForm":
        this.actionSegmentForm(action);
        break;
      case "segmentList":
        this.actionSegmentList(action);
        break;
    }
  }

  actionSegmentCrud(action: Action) {
    switch (action.action) {
      case "addSegment":
        this.router.navigate(['/application', 'segment', 'segment', 'new'], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: false });
        break;
    }
  }

  actionSegmentForm(action: Action) {
    switch (action.action) {
      case "backToList":
        this.performBackToList(action);
        break;
      case "updateSegment":
        this.performUpdateSegment(action);
        break;
    }
  }

  performBackToList(action: Action) {
    this.router.navigate(['/application/segment/segment']);
  }

  actionSegmentList(action: Action) {
    switch (action.action) {
      case "viewSegment":
      case "editSegment":
        this.router.navigate(['/application', 'segment', 'segment', action.originalData['id']], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: false });
        break;
      case "deleteSegment":
        this.performDeleteSegment(action);
        break;
    }
  }

  performUpdateSegment(action: Action) {
    console.log(action);
  }

  performDeleteSegment(action: Action) {
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
    if (this.segmentSubscription) {
      this.segmentSubscription.unsubscribe();
    }
  }
}
