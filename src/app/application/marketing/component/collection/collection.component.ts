import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

import { ModalUitls, ModalWidgetType, CrudUtils, Record, StringUtils, KeyMapUtils, CollectionUtils, KeyMap, KeyMapAssociation, KeyMapOptionType, FieldChange, Button, Badge, Action, CrudListComponentInterface, CrudHeader, ActionPage, CrudTab, CrudFormData, CrudListData, CrudSearch, CrudList, CrudWidgetType, CrudForm } from 'ngx-material-widget';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { FormDiaplyMode } from 'ngx-material-widget/lib/form/model';
import { AccessCriteriaService, CollectionService } from '../../service';
import { RuleService } from 'src/app/application/rule/service';
import { AccessCriteriaUtils } from '../../utility/access-criteria.utility';
import { RuleUtils } from 'src/app/application/rule/utility/rule.utility';
import { MatDialog } from '@angular/material/dialog';
import { RecurringFrequency } from '../../model';
import { collectionCrud, collectionBannerCrud, collectionRecurringMonthlyDetailForm } from '../../config/collection.config';
import { RecurringUtils } from '../../utility/promotion-code.utility';
import { Platform } from '@angular/cdk/platform';
import { CollectionBannerComponent } from './collection-banner/collection-banner.component';
 
@Component({
  selector: 'cf-collection', 
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CollectionComponent extends CrudListComponentInterface implements OnInit {
  //  Common Config
  identifier: string;
  header: CrudHeader;
  actions: Array<Button>;
  actionPages: Array<ActionPage>;
  reset: boolean;
  keyMap: Array<KeyMap>;

  cellCount: number = 12;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;

  //  Form Config
  form: CrudForm;
  configFormData: CrudFormData;
  configListData: CrudListData;

  collectionSubscription: Subscription;
  routerSubscriber: Subscription;
  breakpointSubscription: Subscription;

  //  List Config
  quickLinks: Array<Button>;
  searchConfig: CrudSearch;
  searchData: any;
  listConfig: CrudList;
  listPageBackRoute: Array<string>;

  collectionId: string;
  action: string;
  originalData: any;

  height: number;

  constructor(
    private collectionService: CollectionService,
    private accessCriteriaService: AccessCriteriaService,
    private ruleService: RuleService,
    public dialog: MatDialog,
    private router: Router,
    private platform: Platform,
    private route: ActivatedRoute,
    private breakpointObserver: BreakpointObserver
  ) {
    super();
    this.routerSubscriber = this.router.events.subscribe(
      (event: Event) => {
        if (event instanceof NavigationEnd) {
          this.collectionId = this.route.snapshot.params['id'];
          this.action = this.route.snapshot.queryParams['action'];

          this.setCommonConfig();
          if (this.collectionId) {
            this.setFormConfig(this.collectionId);
          } else {
            this.setListConfig();
            this.loadFilterParams(StringUtils.isEmpty(this.route.snapshot.queryParams['filter']) ? {} : this.route.snapshot.queryParams['filter']);
            this.setListData();
          }
        }
      });
  }

  ngOnInit(): void {
    this.height = window.innerHeight;
    this.getLayout();
  }

  setCommonConfig(): void {
    super.setCommonConfigUsingCrud(collectionCrud);
    this.setOptions();
  }

  setOptions() {
    let activeAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    activeAssociations.push({ componentIdentifier: "collectionSearchForm", fieldKey: "active" });
    // activeAssociations.push({ componentIdentifier: "collectionList", fieldKey: "active" });
    activeAssociations.push({ componentIdentifier: "collectionForm", fieldKey: "active" });
    activeAssociations.push({ componentIdentifier: "collectionSearchForm", fieldKey: "isRecurring" });
    // activeAssociations.push({ componentIdentifier: "collectionList", fieldKey: "isRecurring" });
    activeAssociations.push({ componentIdentifier: "collectionForm", fieldKey: "isRecurring" });
    activeAssociations.push({ componentIdentifier: "collectionForm", fieldKey: "accessibility.oneTimeView" });
    activeAssociations.push({ componentIdentifier: "collectionForm", fieldKey: "accessibility.hideAfterClick" });
    this.keyMap = KeyMapUtils.push(this.keyMap, activeAssociations, "BOOLEAN", KeyMapOptionType.CRUD, collectionCrud);

    let benefitTypeAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    benefitTypeAssociations.push({ componentIdentifier: "collectionBenefitDetailForm", fieldKey: "benefit.type" });
    this.keyMap = KeyMapUtils.push(this.keyMap, benefitTypeAssociations, "PC_BENEFIT_TYPE", KeyMapOptionType.CRUD, collectionCrud);

    let recurringFequencyAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    recurringFequencyAssociations.push({ componentIdentifier: "collectionRecurringDetailForm", fieldKey: "accessibility.recurring.frequency" });
    this.keyMap = KeyMapUtils.push(this.keyMap, recurringFequencyAssociations, "PC_RECURRING_FREQUENCY", KeyMapOptionType.CRUD, collectionCrud);

    let recurringForAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    recurringForAssociations.push({ componentIdentifier: "collectionRecurringDetail", fieldKey: "accessibility.activeOnDays.recurringFor" });
    this.keyMap = KeyMapUtils.push(this.keyMap, recurringForAssociations, "PC_RECURRING_FOR", KeyMapOptionType.CRUD, collectionCrud);

    let displayTypeAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    displayTypeAssociations.push({ componentIdentifier: "collectionDisplayForm", fieldKey: "displayType" });
    displayTypeAssociations.push({ componentIdentifier: "collectionSearchForm", fieldKey: "displayType" });
    this.keyMap = KeyMapUtils.push(this.keyMap, displayTypeAssociations, "COLLECTION_DISPLAY_TYPE", KeyMapOptionType.CRUD, collectionCrud);

    this.accessCriteriaService.getAccessCriterias().subscribe(accessCriterias => {
      let accessCriteriaAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
      accessCriteriaAssociations.push({ componentIdentifier: "collectionAccessDetailForm", fieldKey: "accessibility.accessibilityCriteriaId" });
      accessCriteriaAssociations.push({ componentIdentifier: "collectionSearchForm", fieldKey: "accessibility.accessibilityCriteriaId" });

      KeyMapUtils.push(this.keyMap, accessCriteriaAssociations, AccessCriteriaUtils.getAccessCriteriaOptions(accessCriterias), KeyMapOptionType.CRUD, collectionCrud);
    });

    this.ruleService.getRules().subscribe(rules => {
      let ruleAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
      ruleAssociations.push({ componentIdentifier: "collectionAccessDetailForm", fieldKey: "accessibility.ruleId" });
      ruleAssociations.push({ componentIdentifier: "collectionBenefitDetailForm", fieldKey: "benefit.ruleId" });

      KeyMapUtils.push(this.keyMap, ruleAssociations, RuleUtils.getRuleOptions(rules), KeyMapOptionType.CRUD, collectionCrud);
    });
  }

  setFormConfig(deviceId: string): void {
    //  Config
    this.form = collectionCrud.form;
    this.actions = collectionCrud.actions;
    this.actionPages = collectionCrud.actionPages;

    //  Tab wise data/setting
    this.configFormData = {
      pageBackRoute: ["/application", "marketing", "collection"],
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

  setFormsData(collectionId: string): any {
    if (collectionId == "new") {
      this.setTabDisplayMode(collectionCrud.form.tabs, FormDiaplyMode.ADD);
      CrudUtils.changeButtonLabelIcon(collectionCrud.form.tabs, "updateCollection", "Save", "add");

      this.changeAvailableOnDaysOptions("WEEKLY");

      this.configFormData.record = {
        "collectionForm": {}
      };
    } else {
      if (this.action == "editCollection") {
        this.setTabDisplayMode(collectionCrud.form.tabs, FormDiaplyMode.EDIT);
      } else {
        this.setTabDisplayMode(collectionCrud.form.tabs, FormDiaplyMode.VIEW);
      }
      CrudUtils.changeButtonLabelIcon(collectionCrud.form.tabs, "updateCollection", "Update", "edit");

      this.collectionSubscription = this.collectionService.getCollection(+collectionId).subscribe(collection => {
        this.originalData = collection;

        if (collection && collection.accessibility && collection.accessibility.recurring && collection.accessibility.recurring.frequency) {
          this.changeAvailableOnDaysOptions(collection.accessibility.recurring.frequency);
        } else {
          this.changeAvailableOnDaysOptions("WEEKLY");
        }

        this.configFormData.record = {
          "collectionBasicDetailForm": collection,
          "collectionAccessDetailForm": collection,
          "collectionRecurringDetailForm": collection,
          "collectionDisplayDetail": collection,
          "collectionDisplayCellDetail": collection.cells
        };

        if (collection && collection.accessibility && collection.accessibility.recurring && collection.accessibility.recurring.activeOnDays && collection.accessibility.recurring.frequency == RecurringFrequency.MONTHLY) {
          this.configFormData.record['collectionRecurringDetailList'] = {
            pageNo: 0,
            total: collection.accessibility.recurring.activeOnDays.length,
            rows: collection.accessibility.recurring.activeOnDays
          };
        }
      });
    }
  }

  setListConfig(): void {
    super.setListConfigUsingCrud(collectionCrud);
  }

  setListData() {
    let records: Array<Record> = new Array<Record>();

    this.collectionSubscription = this.collectionService.getCollections().subscribe(collections => {
      if (!CollectionUtils.isEmpty(collections)) {
        collections.forEach(collection => {
          collection.name = collection.name + " (" + collection.key + ")";
          if (collection && collection.accessibility && collection.accessibility.recurring) {
            collection['isRecurring'] = true;
          } else {
            collection['isRecurring'] = false;
          }
 
          if (collection && collection.accessibility && (collection.accessibility.startDate || collection.accessibility.endDate)) {
            collection['activeDuration'] = collection.accessibility.startDate + " - " + collection.accessibility.endDate;
          } else  {
            collection['activeDuration'] = "NA";
          }
        });
      }

      let recordTab1: Record = {
        total: collections.length,
        pageNo: 0,
        rows: collections
      }

      records.push(recordTab1);

      super.setConfigListData(records, this.setBadges(), []);
    });
  }





  buttonClick(action: Action) {
    console.log(action);

    switch (action.sourceIdentifier) {
      case "collectionCrud":
        this.actionCollectionCrud(action);
        break;
      case "collectionForm":
        this.actionCollectionForm(action);
        break;
      case "collectionList":
        this.actionCollectionList(action);
        break;
      case "collectionDisplayCellDetail":
        this.actionCollectionDisplayCellDetail(action);
        break
    }
  }

  actionCollectionCrud(action: Action) {
    switch (action.action) {
      case "addCollection":
        this.router.navigate(['/application', 'marketing', 'collection', 'new'], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: false });
        break;
      case "editCollection":
        ModalUitls.openDialog({
          dialog: this.dialog,
          type: ModalWidgetType.FORM, 
          widgetConfig: collectionRecurringMonthlyDetailForm,
          context: {},
          originalData: {},
          keyMap: this.keyMap,
          reset: this.reset,
          event: action
        });
    } 
  }

  actionCollectionForm(action: Action) {
    switch (action.action) {
      case "backToList":
        this.performBackToList(action);
        break;
      case "updateCollection":
        this.performUpdateCollection(action);
        break;
    }
  }

  performBackToList(action: Action) {
    this.router.navigate(['/application/marketing/collection']);
  }

  actionCollectionList(action: Action) {
    switch (action.action) {
      case "viewCollection":
      case "editCollection":
        this.router.navigate(['/application', 'marketing', 'collection', action.originalData['id']], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: false });
        break;
      case "deleteCollection":
        this.performDeleteCollection(action);
        break;
    }
  }

  actionCollectionDisplayCellDetail(action: Action) {
    switch (action.action) {
      case "manageBannerDisplayCellDetail":
        ModalUitls.openDialog({
          dialog: this.dialog,
          type: ModalWidgetType.FORM,
          widgetConfig: collectionBannerCrud,
          context: {collectionId: this.collectionId, collectionCellId: action.sourceIndex},
          originalData: {},
          keyMap: this.keyMap,
          reset: this.reset,
          event: action
        },
          CollectionBannerComponent
        );
        break;
    }
  }

  performUpdateCollection(action: Action) {
    console.log(action);
  }

  performDeleteCollection(action: Action) {
    console.log(action);
  }

  public fieldChange(fieldAction: FieldChange) {
    console.log(fieldAction);

    switch (fieldAction.sourceIdentifier) {
      case "collectionRecurringDetailForm":
        if (fieldAction.fieldKey == "accessibility.recurring.frequency") {
          this.changeAvailableOnDaysOptions(fieldAction.value);
        }
        break;
      case "collectionRecurringMonthlyDetailForm":
        if (fieldAction.fieldKey == "accessibility.activeOnDays.recurringFor") {
          this.changeAvailableOnDaysMonthlyOptions(fieldAction.value);
        }
        break;
    }
  }

  changeAvailableOnDaysOptions(frequency: string) {
    let availableOnDaysAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    availableOnDaysAssociations.push({ componentIdentifier: "collectionRecurringDetailForm", fieldKey: "accessibility.recurring.activeOnDays" });

    KeyMapUtils.push(this.keyMap, availableOnDaysAssociations, RecurringUtils.getAvailableOnDaysOptions(frequency), KeyMapOptionType.CRUD, collectionCrud);
  }

  changeAvailableOnDaysMonthlyOptions(frequencyFor: string) {
    let availableOnDaysAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    availableOnDaysAssociations.push({ componentIdentifier: "collectionRecurringMonthlyDetailForm", fieldKey: "accessibility.activeOnDays.days" });

    KeyMapUtils.push(this.keyMap, availableOnDaysAssociations, RecurringUtils.getAvailableOnDaysMonthlyOptions(frequencyFor), KeyMapOptionType.CRUD, collectionCrud);
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
      
    });
  }

  ngOnDestroy(): void {
    if (this.routerSubscriber) {
      this.routerSubscriber.unsubscribe();
    }
    if (this.collectionSubscription) {
      this.collectionSubscription.unsubscribe();
    }
    if (this.breakpointSubscription)  {
      this.breakpointSubscription.unsubscribe();
    }
  }
}
