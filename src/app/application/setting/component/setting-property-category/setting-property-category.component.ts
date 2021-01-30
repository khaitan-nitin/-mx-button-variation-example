import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { Record, CrudListComponentInterface, Badge, Action } from 'ngx-material-widget';
import { PropertyService } from '../../service';
import { settingPropertyCategoryCrud } from '../../config/setting-property-category.config';
import { PropertyCategory } from '../../model';

@Component({
  selector: 'cf-setting-property-category',
  templateUrl: './setting-property-category.component.html',
  styleUrls: ['./setting-property-category.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SettingPropertyCategoryComponent extends CrudListComponentInterface implements OnInit {
  categoryKey: string; 
  subCategoryKey: string;

  propertyRouteSubscription: Subscription;
  private propertyServiceSubscription: Subscription;

  constructor(
    private propertyService: PropertyService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();

    this.propertyRouteSubscription = this.router.events.subscribe(
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
    super.setCommonConfigUsingCrud(settingPropertyCategoryCrud);

    //  Tab wise data/setting
    //this.keyMap = {};
  }

  setBadges(): Array<Badge> {
    let badges = new Array<Badge>();

    return badges;
  }

  setListConfig(): void {
    super.setListConfigUsingCrud(settingPropertyCategoryCrud);
  }

  getListData(): void {
    let records: Array<Record> = new Array<Record>();
    let recordTab: Record;

    this.propertyServiceSubscription = this.propertyService.getCategorizedProperties().subscribe((propertyCategories: Array<PropertyCategory>) => {
      recordTab = {
        total: propertyCategories.length,
        pageNo: 0,
        rows: propertyCategories
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
    this.propertyServiceSubscription.unsubscribe();
    this.propertyRouteSubscription.unsubscribe();
  }
}
