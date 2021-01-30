import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { CrudUtils, Record, List, StringUtils, KeyMapUtils, MasterDataUtils, FormUtils, KeyMap, KeyMapAssociation, KeyMapOptionType, DropdownField, FieldType, FieldAppearance, FieldDiaplyType, Button, Badge, Action, CrudListComponentInterface, CrudHeader, ActionPage, CrudFormData, CrudListData, CrudSearch, CrudList, CrudForm } from 'ngx-material-widget';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { FormDiaplyMode } from 'ngx-material-widget/lib/form/model';
import { RuleService } from '../../service';
import { FormGroup } from '@angular/forms';
import { EntityService } from '../../service/entity.service';
import { ruleCrud, ruleCondtionList } from '../../config/rule.config';
import { EntityUtils } from '../../utility/entity.utility';

@Component({
  selector: 'cf-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RuleComponent extends CrudListComponentInterface implements OnInit, OnDestroy {
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
  ruleCondtionList: List;

  ruleSubscription: Subscription;
  routerSubscriber: Subscription;

  //  List Config
  quickLinks: Array<Button>;
  searchConfig: CrudSearch;
  searchData: any;
  listConfig: CrudList;
  listPageBackRoute: Array<string>;

  ruleId: string;
  action: string;
  originalData: any;
  sourceIdentifier: number;
  queryJoinListForms: Map<string, FormGroup> = new Map<string, FormGroup>();

  constructor(
    private ruleService: RuleService,
    private entityService: EntityService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();
    this.routerSubscriber = this.router.events.subscribe(
      (event: Event) => {
        if (event instanceof NavigationEnd) {
          this.ruleId = this.route.snapshot.params['id'];
          this.action = this.route.snapshot.queryParams['action'];

          this.setCommonConfig();
          if (this.ruleId) {
            this.setFormConfig(this.ruleId);
          } else {
            this.setListConfig();
            this.loadFilterParams(StringUtils.isEmpty(this.route.snapshot.queryParams['filter']) ? {} : this.route.snapshot.queryParams['filter']);
            this.setListData();
          }
        }
      });
  }

  ngOnInit(): void {
    this.ruleCondtionList = ruleCondtionList;
    this.setOptions();
  }

  setCommonConfig(): void {
    super.setCommonConfigUsingCrud(ruleCrud);
    this.setOptions();
  }

  setOptions() {
    let activeAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    activeAssociations.push({ componentIdentifier: "ruleSearchForm", fieldKey: "active" });
    // activeAssociations.push({ componentIdentifier: "ruleList", fieldKey: "active" });
    activeAssociations.push({ componentIdentifier: "ruleForm", fieldKey: "active" });
    this.keyMap = KeyMapUtils.push(this.keyMap, activeAssociations, "BOOLEAN", KeyMapOptionType.CRUD, ruleCrud);

    this.entityService.getEntities().subscribe(entities => {
      let ruleOperatorAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
      ruleOperatorAssociations.push({ componentIdentifier: "ruleCondtionList", fieldKey: "condition.operator" });
      this.keyMap = KeyMapUtils.push(this.keyMap, ruleOperatorAssociations, "RULE_OPERATOR", KeyMapOptionType.LIST, ruleCondtionList);

      let ruleJoinAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
      ruleJoinAssociations.push({ componentIdentifier: "ruleCondtionList", fieldKey: "join" });
      this.keyMap = KeyMapUtils.push(this.keyMap, ruleJoinAssociations, "RULE_CONDTION_JOIN", KeyMapOptionType.LIST, ruleCondtionList);

      let entityAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
      entityAssociations.push({ componentIdentifier: "ruleCondtionList", fieldKey: "condition.entity" });

      KeyMapUtils.push(this.keyMap, entityAssociations, EntityUtils.getEntityOptions(entities), KeyMapOptionType.LIST, ruleCondtionList);

      let entityFieldAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
      entityFieldAssociations.push({ componentIdentifier: "ruleCondtionList", fieldKey: "condition.field" });

      entities.forEach(entity => {
        KeyMapUtils.push(this.keyMap, entityFieldAssociations, EntityUtils.getEntityFieldOptions(entity), KeyMapOptionType.LIST, ruleCondtionList, entity.name);
      });

      console.log(this.keyMap);
    });
  }

  setFormConfig(ruleId: string): void {
    //  Config
    this.form = ruleCrud.form;
    this.actions = ruleCrud.actions;
    this.actionPages = ruleCrud.actionPages;

    //  Tab wise data/setting
    this.configFormData = {
      pageBackRoute: ["/application", "rule", "rule"],
      badges: this.setBadges(),
      originalData: this.originalData
    }
    this.setFormsData(ruleId);
  }

  setBadges(): Array<Badge> {
    let badges = new Array<Badge>();

    return badges;
  }

  setBadge(badge: Badge, text: string): Badge {
    badge.content = text;

    return badge;
  }

  setFormsData(ruleId: string): any {
    if (ruleId == "new") {
      this.setTabDisplayMode(ruleCrud.form.tabs, FormDiaplyMode.ADD);
      CrudUtils.changeButtonLabelIcon(ruleCrud.form.tabs, "updateRule", "Save", "add");

      this.configFormData.record = {
        "ruleForm": {}
      };
    } else {
      if (this.action == "editRule") {
        this.setTabDisplayMode(ruleCrud.form.tabs, FormDiaplyMode.EDIT);
      } else {
        this.setTabDisplayMode(ruleCrud.form.tabs, FormDiaplyMode.VIEW);
      }
      CrudUtils.changeButtonLabelIcon(ruleCrud.form.tabs, "updateRule", "Update", "edit");

      this.ruleSubscription = this.ruleService.getRule(+ruleId).subscribe(rule => {
        this.originalData = rule;

        this.sourceIdentifier = rule.id;
        this.configFormData.record = {
          "ruleForm": rule
        };
      });
    }
  }

  setListConfig(): void {
    super.setListConfigUsingCrud(ruleCrud);
  }

  setListData() {
    let records: Array<Record> = new Array<Record>();

    this.ruleSubscription = this.ruleService.getRules().subscribe(rules => {
      let recordTab1: Record = {
        total: rules.length,
        pageNo: 0,
        rows: rules
      }

      records.push(recordTab1);

      super.setConfigListData(records, this.setBadges(), []);
    });
  }

  initCommonFormGroup(sourceIdentifier: number, sourceIndex: number, value: any): FormGroup {
    if (this.queryJoinListForms[sourceIdentifier + "--" + sourceIndex]) {
    } else {
      let queryJoinFieldControls = {};

      let record = {};
      record['query.join'] = value;

      FormUtils.initFieldGroup(queryJoinFieldControls, { field: this.getQueryJoinField(), addMore: false }, {}, record, FormDiaplyMode.EDIT);

      this.queryJoinListForms[sourceIdentifier + "--" + sourceIndex] = new FormGroup(queryJoinFieldControls);
    }
    return this.queryJoinListForms[sourceIdentifier + "--" + sourceIndex];
  }

  initCommonFormControl(sourceIdentifier: number, sourceIndex: number): any {
    return this.queryJoinListForms[sourceIdentifier + "--" + sourceIndex].controls['query.join'];
  }

  queryJoinField: DropdownField;
  getQueryJoinField(): DropdownField {
    this.queryJoinField = {
      key: "query.join",
      label: "Join",
      type: FieldType.DROPDOWN,
      appearance: FieldAppearance.STANDARD,
      isReadOnly: false,
      fieldDisplayType: FieldDiaplyType.INLINE,
      placeholder: "Join Condition",
      value: "",
      multiselect: false,
      options: MasterDataUtils.getMasterDataAsOptions("RULE_CONDTION_JOIN")
    };

    return this.queryJoinField;
  }

  buttonClick(action: Action) {
    console.log(action);

    switch (action.sourceIdentifier) {
      case "ruleCrud":
        this.actionRuleCrud(action);
        break;
      case "ruleForm":
        this.actionRuleForm(action);
        break;
      case "ruleList":
        this.actionRuleList(action);
        break;
    }
  }

  actionRuleCrud(action: Action) {
    switch (action.action) {
      case "addRule":
        this.router.navigate(['/application', 'rule', 'rule', 'new'], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: false });
        break;
    }
  }

  actionRuleForm(action: Action) {
    switch (action.action) {
      case "backToList":
        this.performBackToList(action);
        break;
      case "updateRule":
        this.performUpdateRule(action);
        break;
    }
  }

  performBackToList(action: Action) {
    this.router.navigate(['/application/rule/rule']);
  }

  actionRuleList(action: Action) {
    switch (action.action) {
      case "viewRule":
      case "editRule":
        this.router.navigate(['/application', 'rule', 'rule', action.originalData['id']], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: false });
        break;
      case "deleteRule":
        this.performDeleteRule(action);
        break;
    }
  }

  performUpdateRule(action: Action) {
    console.log(action);
  }

  performDeleteRule(action: Action) {
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
    if (this.ruleSubscription) {
      this.ruleSubscription.unsubscribe();
    }
  }
}
