import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CrudUtils, Record, StringUtils, KeyMapUtils, KeyMap, KeyMapAssociation, KeyMapOptionType, Button, Badge, Action, CrudListComponentInterface, CrudHeader, ActionPage, CrudFormData, CrudListData, CrudSearch, CrudList, CrudForm } from 'ngx-material-widget';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { FormDiaplyMode } from 'ngx-material-widget/lib/form/model';
import { PromotionCodeTypeService } from '../../service';
import { promotionCodeTypeCrud } from '../../config/promotion-code-type.config';

@Component({
  selector: 'cf-promotion-code-type',
  templateUrl: './promotion-code-type.component.html',
  styleUrls: ['./promotion-code-type.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PromotionCodeTypeComponent extends CrudListComponentInterface implements OnInit {
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

  pcTypeSubscription: Subscription;
  routerSubscriber: Subscription;

  //  List Config
  quickLinks: Array<Button>;
  searchConfig: CrudSearch;
  searchData: any;
  listConfig: CrudList;
  listPageBackRoute: Array<string>;

  pcType: string;
  action: string;
  originalData: any;

  constructor(
    private promotionCodeTypeService: PromotionCodeTypeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();
    this.routerSubscriber = this.router.events.subscribe(
      (event: Event) => {
        if (event instanceof NavigationEnd) {
          this.pcType = this.route.snapshot.params['id'];
          this.action = this.route.snapshot.queryParams['action'];

          this.setCommonConfig();
          if (this.pcType) {
            this.setFormConfig(this.pcType);
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
    super.setCommonConfigUsingCrud(promotionCodeTypeCrud);
    this.setOptions();
  }

  setOptions() {
    let activeAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    activeAssociations.push({ componentIdentifier: "promotionCodeTypeSearchForm", fieldKey: "active" });
    // activeAssociations.push({ componentIdentifier: "promotionCodeTypeList", fieldKey: "active" });
    activeAssociations.push({ componentIdentifier: "promotionCodeTypeForm", fieldKey: "active" });
    this.keyMap = KeyMapUtils.push(this.keyMap, activeAssociations, "BOOLEAN", KeyMapOptionType.CRUD, promotionCodeTypeCrud);
  }

  setFormConfig(deviceId: string): void {
    //  Config
    this.form = promotionCodeTypeCrud.form;
    this.actions = promotionCodeTypeCrud.actions;
    this.actionPages = promotionCodeTypeCrud.actionPages;

    //  Tab wise data/setting
    this.configFormData = {
      pageBackRoute: ["/application", "marketing", "promotion-code-type"],
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

  setFormsData(pcType: string): any {
    if (pcType == "new") {
      this.setTabDisplayMode(promotionCodeTypeCrud.form.tabs, FormDiaplyMode.ADD);
      CrudUtils.changeButtonLabelIcon(promotionCodeTypeCrud.form.tabs, "updatePromotionCodeType", "Save", "add");

      this.configFormData.record = {
        "promotionCodeTypeForm": {}
      };
    } else {
      if (this.action == "editPromotionCodeType") {
        this.setTabDisplayMode(promotionCodeTypeCrud.form.tabs, FormDiaplyMode.EDIT);
      } else {
        this.setTabDisplayMode(promotionCodeTypeCrud.form.tabs, FormDiaplyMode.VIEW);
      }
      CrudUtils.changeButtonLabelIcon(promotionCodeTypeCrud.form.tabs, "updatePromotionCodeType", "Update", "edit");

      this.pcTypeSubscription = this.promotionCodeTypeService.getPromotionCodeType(+pcType).subscribe(promotionCodeType => {
        this.originalData = promotionCodeType;

        this.configFormData.record = {
          "promotionCodeTypeForm": promotionCodeType
        };
      });
    }
  }

  setListConfig(): void {
    super.setListConfigUsingCrud(promotionCodeTypeCrud);
  }

  setListData() {
    let records: Array<Record> = new Array<Record>();

    this.pcTypeSubscription = this.promotionCodeTypeService.getPromotionCodeTypes().subscribe(promotionCodeTypes => {
      let recordTab1: Record = {
        total: promotionCodeTypes.length,
        pageNo: 0,
        rows: promotionCodeTypes
      }

      records.push(recordTab1);

      super.setConfigListData(records, this.setBadges(), []);
    });
  }

  buttonClick(action: Action) {
    console.log(action);

    switch (action.sourceIdentifier) {
      case "promotionCodeTypeCrud":
        this.actionPromotionCodeTypeCrud(action);
        break;
      case "promotionCodeTypeForm":
        this.actionPromotionCodeTypeForm(action);
        break;
      case "promotionCodeTypeList":
        this.actionPromotionCodeTypeList(action);
        break;
    }
  }

  actionPromotionCodeTypeCrud(action: Action) {
    switch (action.action) {
      case "addPromotionCodeType":
        this.router.navigate(['/application', 'marketing', 'promotion-code-type', 'new'], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: false });
        break;
    }
  }

  actionPromotionCodeTypeForm(action: Action) {
    switch (action.action) {
      case "backToList":
        this.performBackToList(action);
        break;
      case "updatePromotionCodeType":
        this.performUpdatePromotionCodeType(action);
        break;
    }
  }

  performBackToList(action: Action) {
    this.router.navigate(['/application/marketing/promotion-code-type']);
  }

  actionPromotionCodeTypeList(action: Action) {
    switch (action.action) {
      case "viewPromotionCodeType":
      case "editPromotionCodeType":
        this.router.navigate(['/application', 'marketing', 'promotion-code-type', action.originalData['id']], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: false });
        break;
      case "deletePromotionCodeType":
        this.performDeletePromotionCodeType(action);
        break;
    }
  }

  performUpdatePromotionCodeType(action: Action) {
    console.log(action);
  }

  performDeletePromotionCodeType(action: Action) {
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
    if (this.pcTypeSubscription) {
      this.pcTypeSubscription.unsubscribe();
    }
  }
}
