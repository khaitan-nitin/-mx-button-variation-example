import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { KeyMapAssociation, KeyMapOptionType, CollectionUtils, KeyMapUtils, Record, CrudListComponentInterface, Badge, Action } from 'ngx-material-widget';
import { MasterDataService } from '../../service';
import { MasterDataCategory, MasterData, MasterDataSubCategory } from '../../model';
import { settingMasterDataCrud } from '../../config/setting-master-data.config';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cf-setting-master-data',
  templateUrl: './setting-master-data.component.html',
  styleUrls: ['./setting-master-data.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SettingMasterDataComponent extends CrudListComponentInterface implements OnInit {
  private masterDataServiceSubscription: Subscription;

  @Input()
  categoryKey: string;

  @Input()
  subCategoryKey: string;

  constructor(
    private masterDataService: MasterDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();

    //  Tab wise data/setting  
    this.getListData()
  }

  setCommonConfig(): void {
    super.setCommonConfigUsingCrud(settingMasterDataCrud);

    this.setOptions();
    //  Tab wise data/setting
    //this.keyMap = {};
  }

  setOptions()  {
    let activeAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    activeAssociations.push({ componentIdentifier: "masterDataItems", fieldKey: "active" });
    this.keyMap = KeyMapUtils.push(this.keyMap, activeAssociations, "ACTIVE_STATUS", KeyMapOptionType.CRUD, settingMasterDataCrud);

    let isEditableAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    isEditableAssociations.push({ componentIdentifier: "masterDataList", fieldKey: "isEditable" });
    this.keyMap = KeyMapUtils.push(this.keyMap, isEditableAssociations, "BOOLEAN", KeyMapOptionType.CRUD, settingMasterDataCrud);

    let accessAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    accessAssociations.push({ componentIdentifier: "masterDataList", fieldKey: "access" });
    this.keyMap = KeyMapUtils.push(this.keyMap, accessAssociations, "ACCESS_TYPE", KeyMapOptionType.CRUD, settingMasterDataCrud);
  }

  setBadges(): Array<Badge> {
    let badges = new Array<Badge>();

    return badges;
  }

  setListConfig(): void {
    super.setListConfigUsingCrud(settingMasterDataCrud);
  }

  getListData(): void {
    let records: Array<Record> = new Array<Record>();
    let recordTab: Record;
    let masterDataList: Array<MasterData>;

    this.masterDataServiceSubscription = this.masterDataService.getCategorizedMasterData().subscribe((masterDataCategories: Array<MasterDataCategory>) => {
      if (!CollectionUtils.isEmpty(masterDataCategories)) {
        for (let masterDataCategory of masterDataCategories) {
          if (masterDataCategory.key == this.categoryKey) {
            let masterDataSubCategories: Array<MasterDataSubCategory> = masterDataCategory.subCategories;

            if (!CollectionUtils.isEmpty(masterDataSubCategories)) {
              for (let masterDataSubCategory of masterDataSubCategories) {
                if (masterDataSubCategory.key == this.subCategoryKey) {
                  masterDataList = masterDataSubCategory.properties;

                  this.setHeaderTitle(masterDataSubCategory.name);
                  this.setHeaderDescription(masterDataSubCategory.description);
                }
              }
            }
          }
        }
      }

      recordTab = {
        total: masterDataList.length,
        pageNo: 0,
        rows: masterDataList
      }

      records.push(recordTab);

      super.setConfigListData(records, this.setBadges(), ["/application", "setting", "master-data"]);

      console.log(this.configListData);
    });
  }

  buttonClick(action: Action) {
    console.log(action);

    this.listReset = false;

    switch (action.sourceIdentifier) {
      case "masterDataCrud":
        this.performMasterDataCrudAction(action);
        break;
      case "masterDataList":
        this.performMasterDataAction(action);
        break;
      case "masterDataItems":
        this.performMasterDataItemsAction(action);
    }
  }

  performMasterDataCrudAction(action: Action) {
    switch (action.action) {
      case "addMasterData":
        this.addMasterData(action);
        break;
      case "crudBackButton":
        this.backAction(action);
    }
  }

  addMasterData(action: Action) {
    let list: { rows: Array<any>, rowIndex: number } = this.addRow(action, "masterDataList", {"access": "PUBLIC", "isEditable": true}); 

    this.afterChangeMerge();
  }

  backAction(action: Action) {
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: { categoryKey: null, subCategoryKey: null },
        queryParamsHandling: 'merge', // remove to replace all query params by provided
        skipLocationChange: false,
        replaceUrl: true
      });
  }

  performMasterDataAction(action: Action) {
    switch (action.action) {
      case "editMasterData":
        this.editMasterData(action);
        break;
      case "deleteMasterData":
        this.deleteMasterData(action);
        break;
      case "addMasterDataOption":
        this.addMasterDataOption(action);
        break;
    }
  }

  editMasterData(action: Action) {
    this.beforeChangeMerge(action, action.sourceIdentifier);
    this.afterChangeMerge();
  }

  deleteMasterData(action: Action) {
    let list: { rows: Array<any>, rowIndex: number } = this.beforeChangeMerge(action, action.sourceIdentifier);

    if (list && list.rows && list.rowIndex) {
      list.rows.splice(list.rowIndex, 1);
    }
    this.afterChangeMerge();
  }

  performMasterDataItemsAction(action: Action) {
    switch (action.action) {
      case "editMasterDataItem":
        this.editMasterDataItem(action);
        break;
      case "deleteMasterDataItem":
        this.deleteMasterDataItem(action);
        break;
    }
  }

  editMasterDataItem(action: Action) { 
    this.beforeChildChangeMerge(action, "masterDataList");
    this.afterChildChangeMerge();
  }

  deleteMasterDataItem(action: Action) {
    let list: { rows: Array<any>, rowIndex: number } = this.beforeChildChangeMerge(action, "masterDataList");

    if (list && list.rows && list.rowIndex) {
      list.rows.splice(list.rowIndex, 1);
    }
    this.afterChildChangeMerge();
  }

  addMasterDataOption(action: Action) {
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
    this.masterDataServiceSubscription.unsubscribe();
  }
}
