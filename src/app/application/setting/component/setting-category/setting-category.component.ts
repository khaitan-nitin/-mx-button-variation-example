import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { KeyMapUtils, KeyMapAssociation, KeyMapOptionType, CrudListComponentInterface, Badge, Action, Record } from 'ngx-material-widget';
import { settingConfigCategoryCrud } from '../../config/setting-config-category.config';
import { Subscription } from 'rxjs';
import { ConfigCategoryService } from '../../service';
import { SettingCategory } from '../../model';

@Component({
  selector: 'cf-setting-category',
  templateUrl: './setting-category.component.html',
  styleUrls: ['./setting-category.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SettingCategoryComponent extends CrudListComponentInterface implements OnInit, OnDestroy {
  private configCategoryServiceSubscription: Subscription;

  constructor(private configCategoryService: ConfigCategoryService) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();

    //  Tab wise data/setting  
    this.getListData()
  }

  setCommonConfig(): void {
    super.setCommonConfigUsingCrud(settingConfigCategoryCrud);

    this.setOptions();
    //  Tab wise data/setting
    //this.keyMap = {};
  }

  setOptions()  {
    let activeAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    activeAssociations.push({ componentIdentifier: "settingCategoryList", fieldKey: "active" });
    activeAssociations.push({ componentIdentifier: "settingSubCategoryList", fieldKey: "active" });
    this.keyMap = KeyMapUtils.push(this.keyMap, activeAssociations, "ACTIVE_STATUS", KeyMapOptionType.CRUD, settingConfigCategoryCrud);
  }

  setBadges(): Array<Badge> {
    let badges = new Array<Badge>();

    return badges;
  }

  setListConfig(): void {
    super.setListConfigUsingCrud(settingConfigCategoryCrud);
  }

  getListData(): void {
    let records: Array<Record> = new Array<Record>();
    let recordTab: Record;

    this.configCategoryServiceSubscription = this.configCategoryService.getAllSettingCategory().subscribe((configCategories: Array<SettingCategory>) => {
      recordTab = {
        total: configCategories.length,
        pageNo: 0,
        rows: configCategories
      }

      records.push(recordTab); 

      super.setConfigListData(records, this.setBadges(), []);

      console.log(this.configListData);
    });
  }

  buttonClick(action: Action) {
    console.log(action);

    this.listReset = false;

    switch (action.sourceIdentifier) {
      case "settingCrud":
        this.performSettingCrud(action);
        break;
      case "settingCategoryList":
        this.performCategoryAction(action);
        break;
      case "settingSubCategoryList":
        this.performSubCategoryAction(action);
    }
  }
  
  performSettingCrud(action: Action) {
    switch (action.action) {
      case "addSettingCategory":
        this.addSettingCategory(action);
        break;
    }
  }

  performCategoryAction(action: Action) {
    switch (action.action) {
      case "editSettingCategory":
        this.editSettingCategory(action);
        break;
      case "deleteSettingCategory":
        this.deleteSettingCategory(action);
        break;
      case "addSettingSubCategory":
        this.addSettingSubCategory(action);
        break;
    }
  }

  editSettingCategory(action: Action) {
    this.beforeChangeMerge(action, action.sourceIdentifier);
    this.afterChangeMerge();
  }

  deleteSettingCategory(action: Action) {
    let list: { rows: Array<any>, rowIndex: number } = this.beforeChangeMerge(action, action.sourceIdentifier);

    if (list && list.rows && list.rowIndex) {
      list.rows.splice(list.rowIndex, 1);
    }
    this.afterChangeMerge();
  }

  addSettingCategory(action: Action) {
    let list: { rows: Array<any>, rowIndex: number } = this.addRow(action, "settingCategoryList");

    this.afterChangeMerge();
  }

  performSubCategoryAction(action: Action) { 
    switch (action.action) {
      case "editSettingSubCategory":
        this.editSettingSubCategory(action);
        break;
      case "deleteSettingSubCategory":
        this.deleteSettingSubCategory(action);
        break;
    }
  }

  editSettingSubCategory(action: Action) {
    this.beforeChildChangeMerge(action, "settingCategoryList");
    this.afterChildChangeMerge();
  }

  deleteSettingSubCategory(action: Action) {
    let list: { rows: Array<any>, rowIndex: number } = this.beforeChildChangeMerge(action, "settingCategoryList");

    if (list && list.rows && list.rowIndex) {
      list.rows.splice(list.rowIndex, 1);
    }
    this.afterChildChangeMerge();
  }

  addSettingSubCategory(action: Action) {
    let list: { rows: Array<any>, rowIndex: number } = this.addChildRow(action, action.sourceIdentifier);

    this.afterChildChangeMerge();
  }

  fieldChange(event: any) {
    console.log(event);
    this.listReset = false;
  }

  formChange(event: any) {
    console.log(event);
    this.listReset = false;
  }

  onSort(event: any) {
    console.log(event);
    this.listReset = false;
  }

  onPage(event: any) {
    console.log(event);
    this.listReset = false;
  }

  ngOnDestroy() {
    this.configCategoryServiceSubscription.unsubscribe();
  }  
}
