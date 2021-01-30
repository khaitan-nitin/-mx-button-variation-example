import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { Record, List, StringUtils, CollectionUtils, KeyMapUtils, KeyMap, KeyMapAssociation, KeyMapOptionType, Button, Badge, Action, CrudListComponentInterface, CrudHeader, ActionPage, CrudFormData, CrudListData, CrudSearch, CrudList, CrudForm, Crud, CrudWidgetType } from 'ngx-material-widget';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { CollectionService, AccessCriteriaService } from '../../../service';
import { AccessCriteriaUtils } from '../../../utility/access-criteria.utility';
import { collectionBannerCrud } from '../../../config/collection.config';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Form } from 'ngx-material-widget/lib/form/model';

export interface DialogData {
  type: string,
  widgetConfig: Form | List | Crud,
  sourceIndex: number,
  context: any,
  originalData: any,
  keyMap: Array<KeyMap>,
  reset: boolean,
  currentInstance: any
}

@Component({ 
  selector: 'cf-collection-banner',
  templateUrl: './collection-banner.component.html',
  styleUrls: ['./collection-banner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CollectionBannerComponent extends CrudListComponentInterface implements OnInit {
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

  collectionBannerSubscription: Subscription;
  routerSubscriber: Subscription;

  //  List Config
  quickLinks: Array<Button>;
  searchConfig: CrudSearch;
  searchData: any;
  listConfig: CrudList;
  listPageBackRoute: Array<string>;

  collectionId: number;
  collectionCellId: number;
  collectionBannerId: string;
  originalData: any;
  display: CrudWidgetType;

  constructor(
    public dialogRef: MatDialogRef<CollectionBannerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private collectionService: CollectionService,
    private accessCriteriaService: AccessCriteriaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();

    this.collectionId = this.data.context['collectionId'];
    this.collectionCellId = this.data.context['collectionCellId'];

    this.setCommonConfig();
    this.setListConfig();
    this.loadFilterParams(StringUtils.isEmpty(this.route.snapshot.queryParams['filter']) ? {} : this.route.snapshot.queryParams['filter']);
    this.setListData();

    this.display = CrudWidgetType.LIST;
  }

  ngOnInit(): void {
  }

  setCommonConfig(): void {
    super.setCommonConfigUsingCrud(collectionBannerCrud);
    this.setOptions();
  }

  setOptions() {
    this.accessCriteriaService.getAccessCriterias().subscribe(accessCriterias => {
      let accessCriteriaAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
      accessCriteriaAssociations.push({ componentIdentifier: "collectionBannerList", fieldKey: "accessCriteriaId" });
      accessCriteriaAssociations.push({ componentIdentifier: "collectionBannerForm", fieldKey: "accessCriteriaId" });

      KeyMapUtils.push(this.keyMap, accessCriteriaAssociations, AccessCriteriaUtils.getAccessCriteriaOptions(accessCriterias), KeyMapOptionType.CRUD, collectionBannerCrud);
    });
  }

  setFormConfig(collectionBannerId: number): void {
    //  Config
    this.form = collectionBannerCrud.form;
    this.actions = collectionBannerCrud.actions;
    this.actionPages = collectionBannerCrud.actionPages;

    //  Tab wise data/setting
    this.configFormData = {
      pageBackRoute: [],
      badges: this.setBadges(),
      originalData: this.originalData
    }

    this.setFormsData(collectionBannerId);
  }

  setBadges(): Array<Badge> {
    let badges = new Array<Badge>();

    return badges;
  }

  setBadge(badge: Badge, text: string): Badge {
    badge.content = text;

    return badge;
  }

  setFormsData(collectionBannerIndex: number): any {
    if (collectionBannerIndex == null) {
      this.configFormData.record = {
        "collectionBannerForm": {}
      };
    } else {
      if (this.configListData && this.configListData.records && this.configListData.records[0] && this.configListData.records[0].rows) {
        this.originalData = this.configListData.records[0].rows[collectionBannerIndex];

        this.configFormData.record = {
          "collectionBannerForm": this.configListData.records[0].rows[collectionBannerIndex]
        };
      };
    }
  }

  setListConfig(): void {
    super.setListConfigUsingCrud(collectionBannerCrud);
  }

  setListData() {
    let records: Array<Record> = new Array<Record>();

    this.collectionBannerSubscription = this.collectionService.getCollectionCellBanners(this.collectionId, this.collectionCellId).subscribe(banners => {

      let recordTab1: Record = {
        total: banners.length,
        pageNo: 0,
        rows: banners
      }

      records.push(recordTab1);

      super.setConfigListData(records, this.setBadges(), []);
    });
  }

  buttonClick(action: Action) {
    console.log(action);

    switch (action.sourceIdentifier) {
      case "collectionBannerForm":
        this.actionCollectionBannerForm(action);
        break;
      case "collectionBannerList":
        this.actionCollectionBannerList(action);
        break;
      case "collectionBannerCrud":
        this.actionCollectionBannerCrud(action);
        break;
    }
  }

  actionCollectionBannerForm(action: Action) {
    switch (action.action) {
      case "backToList":
        this.performBackToList(action);
        break;
    }
  }

  performBackToList(action: Action) {
    //    this.router.navigate(['/application/communication/device']);
  }

  actionCollectionBannerList(action: Action) {
    switch (action.action) {
      case "viewCollectionBanner":
        this.router.navigate(['/application', 'communication', 'device', action.originalData['id']], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: false });
        break;
    }
  }

  actionCollectionBannerCrud(action: Action) {
    switch (action.action) {
      case "addCollectionBanner":
        this.setFormConfig(null);
        this.display = CrudWidgetType.FORM;

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
    if (this.collectionBannerSubscription) {
      this.collectionBannerSubscription.unsubscribe();
    }
  }
}
