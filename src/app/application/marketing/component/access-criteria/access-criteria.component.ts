import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CrudUtils, Record, StringUtils, KeyMapUtils, KeyMap, KeyMapAssociation, KeyMapOptionType, FieldChange, Button, Badge, Action, CrudListComponentInterface, CrudHeader, ActionPage, CrudFormData, CrudListData, CrudSearch, CrudList, CrudForm } from 'ngx-material-widget';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { FormDiaplyMode } from 'ngx-material-widget/lib/form/model';
import { SegmentService } from 'src/app/application/segment/service';
import { SegmentUtils } from 'src/app/application/segment/utility/segment.utility';
import { AccessCriteriaService } from '../../service/access-criteria.service';
import { accessCriteriaCrud } from '../../config/access-criteria.config';

@Component({
  selector: 'app-access-criteria',
  templateUrl: './access-criteria.component.html',
  styleUrls: ['./access-criteria.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccessCriteriaComponent extends CrudListComponentInterface implements OnInit {
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

  accessCriteriaId: string;
  action: string;
  originalData: any;

  constructor(
    private accessCriteriaService: AccessCriteriaService,
    private segmentService: SegmentService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();
    this.routerSubscriber = this.router.events.subscribe(
      (event: Event) => {
        if (event instanceof NavigationEnd) {
          this.accessCriteriaId = this.route.snapshot.params['id'];
          this.action = this.route.snapshot.queryParams['action'];

          this.setCommonConfig();
          if (this.accessCriteriaId) {
            this.setFormConfig(this.accessCriteriaId); 
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
    super.setCommonConfigUsingCrud(accessCriteriaCrud);
    this.setOptions();
  }

  setOptions() {
    let activeAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    // activeAssociations.push({ componentIdentifier: "accessCriteriaList", fieldKey: "active" });
    activeAssociations.push({ componentIdentifier: "accessCriteriaForm", fieldKey: "active" });
    this.keyMap = KeyMapUtils.push(this.keyMap, activeAssociations, "BOOLEAN", KeyMapOptionType.CRUD, accessCriteriaCrud);

    let receiverTypeAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    receiverTypeAssociations.push({ componentIdentifier: "accessCriteriaForm", fieldKey: "receiver.type" });
    receiverTypeAssociations.push({ componentIdentifier: "accessCriteriaList", fieldKey: "receiver.type" });
    this.keyMap = KeyMapUtils.push(this.keyMap, receiverTypeAssociations, "CONTACT_CRITERIA_TYPE", KeyMapOptionType.CRUD, accessCriteriaCrud);

    this.segmentService.getSegments().subscribe(segments => {
      let templateAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
      templateAssociations.push({ componentIdentifier: "accessCriteriaForm", fieldKey: "receiver.contactDetail.applicableSegmentIds" });
      templateAssociations.push({ componentIdentifier: "accessCriteriaForm", fieldKey: "receiver.contactDetail.excludeSegmentIds" });
  
      KeyMapUtils.push(this.keyMap, templateAssociations, SegmentUtils.getSegmentOptions(segments), KeyMapOptionType.CRUD, accessCriteriaCrud);
    });
  }

  setFormConfig(accessCriteriaId: string): void {
    //  Config
    this.form = accessCriteriaCrud.form;
    this.actions = accessCriteriaCrud.actions;
    this.actionPages = accessCriteriaCrud.actionPages;

    //  Tab wise data/setting
    this.configFormData = {
      pageBackRoute: ["/application", "marketing", "access-criteria"],
      badges: this.setBadges(),
      originalData: this.originalData
    }
    this.setFormsData(accessCriteriaId);
  }

  setBadges(): Array<Badge> {
    let badges = new Array<Badge>();

    return badges;
  }

  setBadge(badge: Badge, text: string): Badge {
    badge.content = text;

    return badge;
  }

  setFormsData(accessCriteriaId: string): any {
    if (accessCriteriaId == "new") {
      this.setTabDisplayMode(accessCriteriaCrud.form.tabs, FormDiaplyMode.ADD);
      CrudUtils.changeButtonLabelIcon(accessCriteriaCrud.form.tabs, "updateAccessCriteria", "Save", "add");

      this.configFormData.record = {
        "accessCriteriaForm": {}
      };
    } else {
      if (this.action == "editAccessCriteria") {
        this.setTabDisplayMode(accessCriteriaCrud.form.tabs, FormDiaplyMode.EDIT);
      } else {
        this.setTabDisplayMode(accessCriteriaCrud.form.tabs, FormDiaplyMode.VIEW);
      }
      CrudUtils.changeButtonLabelIcon(accessCriteriaCrud.form.tabs, "updateAccessCriteria", "Update", "edit");

      this.segmentSubscription = this.accessCriteriaService.getAccessCriteria(+accessCriteriaId).subscribe(accessCriteria => {
        this.originalData = accessCriteria;

        this.configFormData.record = {
          "accessCriteriaForm": accessCriteria
        };
      });
    }
  }

  setListConfig(): void {
    super.setListConfigUsingCrud(accessCriteriaCrud);
  }

  setListData() {
    let records: Array<Record> = new Array<Record>();

    this.segmentSubscription = this.accessCriteriaService.getAccessCriterias().subscribe(accessCriterias => {
      let recordTab1: Record = {
        total: accessCriterias.length,
        pageNo: 0,
        rows: accessCriterias
      }

      records.push(recordTab1);

      super.setConfigListData(records, this.setBadges(), []);
    });
  }

  buttonClick(action: Action) {
    console.log(action);

    switch (action.sourceIdentifier) {
      case "accessCriteriaCrud":
        this.actionAccessCriteriaCrud(action);
        break;
      case "accessCriteriaForm":
        this.actionAccessCriteriaForm(action);
        break;
      case "accessCriteriaList":
        this.actionAccessCriteriaList(action);
        break;
    }
  }

  actionAccessCriteriaCrud(action: Action) {
    switch (action.action) {
      case "addAccessCriteria":
        this.router.navigate(['/application', 'marketing', 'access-criteria', 'new'], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: false });
        break;
    }
  }

  actionAccessCriteriaForm(action: Action) {
    switch (action.action) {
      case "backToList":
        this.performBackToList(action);
        break;
      case "updateAccessCriteria":
        this.performUpdateAccessCriteria(action);
        break;
    }
  }

  performBackToList(action: Action) {
    this.router.navigate(['/application/marketing/access-criteria']);
  }

  actionAccessCriteriaList(action: Action) {
    switch (action.action) {
      case "viewAccessCriteria":
      case "editAccessCriteria":
        this.router.navigate(['/application', 'marketing', 'access-criteria', action.originalData['id']], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: false });
        break;
      case "deleteAccessCriteria":
        this.performDeleteAccessCriteria(action);
        break;
    }
  }

  performUpdateAccessCriteria(action: Action) {
    console.log(action);
  }

  performDeleteAccessCriteria(action: Action) {
    console.log(action);
  }

  fieldChange(fieldChange: FieldChange) {
    console.log(fieldChange);
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
