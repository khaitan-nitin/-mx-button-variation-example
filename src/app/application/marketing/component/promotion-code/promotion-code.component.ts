import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CrudUtils, Record, StringUtils, KeyMapUtils, CollectionUtils, KeyMap, KeyMapAssociation, KeyMapOptionType, FieldChange, Button, Badge, Action, CrudListComponentInterface, CrudHeader, ActionPage, CrudTab, CrudFormData, CrudListData, CrudSearch, CrudList, CrudWidgetType, CrudForm } from 'ngx-material-widget';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { FormDiaplyMode } from 'ngx-material-widget/lib/form/model';
import { PromotionCodeTypeService, PromotionCodeService, AccessCriteriaService } from '../../service';
import { promotionCodeCrud, promotionCodeRecurringMonthlyDetailForm } from '../../config/promotion-code.config';
import { RecurringUtils } from '../../utility/promotion-code.utility';
import { RuleService } from 'src/app/application/rule/service';
import { AccessCriteriaUtils } from '../../utility/access-criteria.utility';
import { RuleUtils } from 'src/app/application/rule/utility/rule.utility';
import { MatDialog } from '@angular/material/dialog';
import { RecurringFrequency, PromotionCodeBenefitType } from '../../model';

@Component({
  selector: 'cf-promotion-code',
  templateUrl: './promotion-code.component.html',
  styleUrls: ['./promotion-code.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PromotionCodeComponent extends CrudListComponentInterface implements OnInit {
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

  promotionCodeSubscription: Subscription;
  routerSubscriber: Subscription;

  //  List Config
  quickLinks: Array<Button>;
  searchConfig: CrudSearch;
  searchData: any;
  listConfig: CrudList;
  listPageBackRoute: Array<string>;

  promotionCode: string;
  action: string;
  originalData: any;

  constructor(
    private promotionCodeService: PromotionCodeService,
    private promotionCodeTypeService: PromotionCodeTypeService,
    private accessCriteriaService: AccessCriteriaService,
    private ruleService: RuleService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();
    this.routerSubscriber = this.router.events.subscribe(
      (event: Event) => {
        if (event instanceof NavigationEnd) {
          this.promotionCode = this.route.snapshot.params['id'];
          this.action = this.route.snapshot.queryParams['action'];

          this.setCommonConfig();
          if (this.promotionCode) {
            this.setFormConfig(this.promotionCode);
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
    super.setCommonConfigUsingCrud(promotionCodeCrud);
    this.setOptions();
  }

  setOptions() {
    let activeAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    activeAssociations.push({ componentIdentifier: "promotionCodeSearchForm", fieldKey: "active" });
    // activeAssociations.push({ componentIdentifier: "promotionCodeList", fieldKey: "active" });
    activeAssociations.push({ componentIdentifier: "promotionCodeForm", fieldKey: "active" });
    activeAssociations.push({ componentIdentifier: "promotionCodeSearchForm", fieldKey: "isRecurring" });
    activeAssociations.push({ componentIdentifier: "promotionCodeList", fieldKey: "isRecurring" });
    activeAssociations.push({ componentIdentifier: "promotionCodeForm", fieldKey: "isRecurring" });
    this.keyMap = KeyMapUtils.push(this.keyMap, activeAssociations, "BOOLEAN", KeyMapOptionType.CRUD, promotionCodeCrud);

    let benefitTypeAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    benefitTypeAssociations.push({ componentIdentifier: "promotionCodeBenefitDetailForm", fieldKey: "benefit.type" });
    this.keyMap = KeyMapUtils.push(this.keyMap, benefitTypeAssociations, "PC_BENEFIT_TYPE", KeyMapOptionType.CRUD, promotionCodeCrud);

    let recurringFequencyAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    recurringFequencyAssociations.push({ componentIdentifier: "promotionCodeRecurringDetailForm", fieldKey: "accessibility.recurring.frequency" });
    this.keyMap = KeyMapUtils.push(this.keyMap, recurringFequencyAssociations, "PC_RECURRING_FREQUENCY", KeyMapOptionType.CRUD, promotionCodeCrud);

    let recurringForAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    recurringForAssociations.push({ componentIdentifier: "promotionCodeRecurringDetail", fieldKey: "accessibility.activeOnDays.recurringFor" });
    this.keyMap = KeyMapUtils.push(this.keyMap, recurringForAssociations, "PC_RECURRING_FOR", KeyMapOptionType.CRUD, promotionCodeCrud);

    let recurringForMonthlyAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    recurringForMonthlyAssociations.push({ componentIdentifier: "promotionCodeRecurringMonthlyDetailForm", fieldKey: "accessibility.activeOnDays.recurringFor" });
    this.keyMap = KeyMapUtils.push(this.keyMap, recurringForMonthlyAssociations, "PC_RECURRING_FOR", KeyMapOptionType.FORM, promotionCodeRecurringMonthlyDetailForm);

    this.promotionCodeTypeService.getPromotionCodeTypes().subscribe(promotionCodeTypes => {
      let promotionCodeTypeAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
      promotionCodeTypeAssociations.push({ componentIdentifier: "promotionCodeSearchForm", fieldKey: "promotionCodeTypeId" });
      promotionCodeTypeAssociations.push({ componentIdentifier: "promotionCodeBasicDetailForm", fieldKey: "promotionCodeTypeId" });

      KeyMapUtils.push(this.keyMap, promotionCodeTypeAssociations, RecurringUtils.getPromotionCodeTypeOptions(promotionCodeTypes), KeyMapOptionType.CRUD, promotionCodeCrud);
    });

    this.accessCriteriaService.getAccessCriterias().subscribe(accessCriterias => {
      let accessCriteriaAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
      accessCriteriaAssociations.push({ componentIdentifier: "promotionCodeAccessDetailForm", fieldKey: "accessibility.accessibilityCriteriaId" });
      accessCriteriaAssociations.push({ componentIdentifier: "promotionCodeSearchForm", fieldKey: "accessibility.accessibilityCriteriaId" });

      KeyMapUtils.push(this.keyMap, accessCriteriaAssociations, AccessCriteriaUtils.getAccessCriteriaOptions(accessCriterias), KeyMapOptionType.CRUD, promotionCodeCrud);
    });

    this.ruleService.getRules().subscribe(rules => {
      let ruleAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
      ruleAssociations.push({ componentIdentifier: "promotionCodeAccessDetailForm", fieldKey: "accessibility.ruleId" });
      ruleAssociations.push({ componentIdentifier: "promotionCodeBenefitDetailForm", fieldKey: "benefit.ruleId" });

      KeyMapUtils.push(this.keyMap, ruleAssociations, RuleUtils.getRuleOptions(rules), KeyMapOptionType.CRUD, promotionCodeCrud);
    });
  }

  setFormConfig(deviceId: string): void {
    //  Config
    this.form = promotionCodeCrud.form;
    this.actions = promotionCodeCrud.actions;
    this.actionPages = promotionCodeCrud.actionPages;

    //  Tab wise data/setting
    this.configFormData = {
      pageBackRoute: ["/application", "marketing", "promotion-code"],
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

  setFormsData(promotionCode: string): any {
    if (promotionCode == "new") {
      this.setTabDisplayMode(promotionCodeCrud.form.tabs, FormDiaplyMode.ADD);
      CrudUtils.changeButtonLabelIcon(promotionCodeCrud.form.tabs, "updatePromotionCode", "Save", "add");

      this.changeAvailableOnDaysOptions("WEEKLY");

      this.configFormData.record = {
        "promotionCodeForm": {}
      };
    } else {
      if (this.action == "editPromotionCode") {
        this.setTabDisplayMode(promotionCodeCrud.form.tabs, FormDiaplyMode.EDIT);
      } else {
        this.setTabDisplayMode(promotionCodeCrud.form.tabs, FormDiaplyMode.VIEW);
      }
      CrudUtils.changeButtonLabelIcon(promotionCodeCrud.form.tabs, "updatePromotionCode", "Update", "edit");

      this.promotionCodeSubscription = this.promotionCodeService.getPromotionCode(+promotionCode).subscribe(promotionCode => {
        this.originalData = promotionCode;

        if (promotionCode && promotionCode.accessibility && promotionCode.accessibility.recurring && promotionCode.accessibility.recurring.frequency) {
          this.changeAvailableOnDaysOptions(promotionCode.accessibility.recurring.frequency);
        } else {
          this.changeAvailableOnDaysOptions("WEEKLY");
        }

        this.configFormData.record = {
          "promotionCodeBasicDetailForm": promotionCode,
          "promotionCodeAccessDetailForm": promotionCode,
          "promotionCodeBenefitDetailForm": promotionCode,
          "promotionCodeUsageDetailForm": promotionCode,
          "promotionCodeRecurringDetailForm": promotionCode,
        };

        if (promotionCode && promotionCode.accessibility && promotionCode.accessibility.recurring && promotionCode.accessibility.recurring.activeOnDays && promotionCode.accessibility.recurring.frequency == RecurringFrequency.MONTHLY) {
          this.configFormData.record['promotionCodeRecurringDetailList'] = {
            pageNo: 0,
            total: promotionCode.accessibility.recurring.activeOnDays.length,
            rows: promotionCode.accessibility.recurring.activeOnDays
          };
        }

        if (promotionCode && promotionCode.benefit && promotionCode.benefit.products && promotionCode.benefit.type == PromotionCodeBenefitType.PRODUCT) {
          this.configFormData.record['promotionCodeProductBenefitList'] = {
            pageNo: 0,
            total: promotionCode.benefit.products.length,
            rows: promotionCode.benefit.products
          };
        }
      });
    }
  }

  setListConfig(): void {
    super.setListConfigUsingCrud(promotionCodeCrud);
  }

  setListData() {
    let records: Array<Record> = new Array<Record>();

    this.promotionCodeSubscription = this.promotionCodeService.getPromotionCodes().subscribe(promotionCodes => {
      if (!CollectionUtils.isEmpty(promotionCodes)) {
        promotionCodes.forEach(promotionCode => {
          promotionCode.code = promotionCode.code + " (" + KeyMapUtils.getValue(this.keyMap, "promotionCodeTypeId", promotionCode.promotionCodeTypeId) + ")";
        })
      }

      let recordTab1: Record = {
        total: promotionCodes.length,
        pageNo: 0,
        rows: promotionCodes
      }

      records.push(recordTab1);

      super.setConfigListData(records, this.setBadges(), []);
    });
  }

  buttonClick(action: Action) {
    console.log(action);

    switch (action.sourceIdentifier) {
      case "promotionCodeCrud":
        this.actionPromotionCodeCrud(action);
        break;
      case "promotionCodeForm":
        this.actionPromotionCodeForm(action);
        break;
      case "promotionCodeList":
        this.actionPromotionCodeList(action);
        break;
    }
  }

  actionPromotionCodeCrud(action: Action) {
    switch (action.action) {
      case "addPromotionCode":
        this.router.navigate(['/application', 'marketing', 'promotion-code', 'new'], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: false });
        break;
      case "editPromotionCode":
        // ModalUitls.openDialog({
        //   dialog: this.dialog, 
        //   type: ModalWidgetType.FORM, 
        //   widgetConfig: promotionCodeRecurringMonthlyDetailForm, 
        //   context: {}, 
        //   originalData: {}, 
        //   keyMap: this.keyMap, 
        //   reset: this.reset, 
        //   event: action
        // });
    }
  }

  actionPromotionCodeForm(action: Action) {
    switch (action.action) {
      case "backToList":
        this.performBackToList(action);
        break;
      case "updatePromotionCode":
        this.performUpdatePromotionCode(action);
        break;
    }
  }

  performBackToList(action: Action) {
    this.router.navigate(['/application/marketing/promotion-code']);
  }

  actionPromotionCodeList(action: Action) {
    switch (action.action) {
      case "viewPromotionCode":
      case "editPromotionCode":
        this.router.navigate(['/application', 'marketing', 'promotion-code', action.originalData['id']], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: false });
        break;
      case "deletePromotionCode":
        this.performDeletePromotionCode(action);
        break;
    }
  }

  performUpdatePromotionCode(action: Action) {
    console.log(action);
  }

  performDeletePromotionCode(action: Action) {
    console.log(action);
  }

  public fieldChange(fieldAction: FieldChange) {
    console.log(fieldAction);

    switch (fieldAction.sourceIdentifier) {
      case "promotionCodeRecurringDetailForm":
        if (fieldAction.fieldKey == "accessibility.recurring.frequency") {
          this.changeAvailableOnDaysOptions(fieldAction.value);
        }
        break;
      case "promotionCodeRecurringMonthlyDetailForm":
        if (fieldAction.fieldKey == "accessibility.activeOnDays.recurringFor") {
          this.changeAvailableOnDaysMonthlyOptions(fieldAction.value);
        }
        break;
    }
  }

  changeAvailableOnDaysOptions(frequency: string) {
    let availableOnDaysAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    availableOnDaysAssociations.push({ componentIdentifier: "promotionCodeRecurringDetailForm", fieldKey: "accessibility.recurring.activeOnDays" });

    KeyMapUtils.push(this.keyMap, availableOnDaysAssociations, RecurringUtils.getAvailableOnDaysOptions(frequency), KeyMapOptionType.CRUD, promotionCodeCrud);
  }

  changeAvailableOnDaysMonthlyOptions(frequencyFor: string) {
    let availableOnDaysAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    availableOnDaysAssociations.push({ componentIdentifier: "promotionCodeRecurringMonthlyDetailForm", fieldKey: "accessibility.activeOnDays.days" });

    KeyMapUtils.push(this.keyMap, availableOnDaysAssociations, RecurringUtils.getAvailableOnDaysMonthlyOptions(frequencyFor), KeyMapOptionType.CRUD, promotionCodeCrud);
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
    if (this.promotionCodeSubscription) {
      this.promotionCodeSubscription.unsubscribe();
    }
  }
}
