import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MasterDataService } from '../../service';
import { settingMasterDataCategoryCrud } from '../../config/setting-master-data-category.config';
import { Record, CrudListComponentInterface, Badge, Action } from 'ngx-material-widget';
import { MasterDataCategory } from '../../model';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'cf-setting-master-data-category',
  templateUrl: './setting-master-data-category.component.html',
  styleUrls: ['./setting-master-data-category.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SettingMasterDataCategoryComponent extends CrudListComponentInterface implements OnInit, OnDestroy {
  categoryKey: string;
  subCategoryKey: string;

  masterDataRouteSubscription: Subscription;
  private masterDataServiceSubscription: Subscription;

  constructor(
    private masterDataService: MasterDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();

    this.masterDataRouteSubscription = this.router.events.subscribe(
      (event: Event) => {
        if (event instanceof NavigationEnd) {
          this.categoryKey = this.route.snapshot.queryParams['categoryKey'];
          this.subCategoryKey = this.route.snapshot.queryParams['subCategoryKey'];

          //  Tab wise data/setting  
          this.getListData()
        }
      });
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  setCommonConfig(): void {
    super.setCommonConfigUsingCrud(settingMasterDataCategoryCrud);

    //  Tab wise data/setting
    //this.keyMap = {};
  }

  setBadges(): Array<Badge> {
    let badges = new Array<Badge>();

    return badges;
  }

  setListConfig(): void {
    super.setListConfigUsingCrud(settingMasterDataCategoryCrud);
  }

  getListData(): void {
    let records: Array<Record> = new Array<Record>();
    let recordTab: Record;

    this.masterDataServiceSubscription = this.masterDataService.getCategorizedMasterData().subscribe((masterDataCategories: Array<MasterDataCategory>) => {
      recordTab = {
        total: masterDataCategories.length,
        pageNo: 0,
        rows: masterDataCategories
      }

      records.push(recordTab);

      super.setConfigListData(records, this.setBadges(), []);

      console.log(this.configListData);
    });
  }

  buttonClick(action: Action) {
    console.log(action);

    if (action.action == "row_collapse") {
      this.categoryKey = action.parentHierarchy.parent.key[0];
      this.subCategoryKey = action.originalData['key'];

      this.router.navigate(
        [],
        {
          relativeTo: this.route,
          queryParams: { categoryKey: this.categoryKey, subCategoryKey: this.subCategoryKey },
          queryParamsHandling: 'merge', // remove to replace all query params by provided
          skipLocationChange: false,
          replaceUrl: true
        });
    }

    this.listReset = false;
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
    this.masterDataRouteSubscription.unsubscribe();
  }
}
