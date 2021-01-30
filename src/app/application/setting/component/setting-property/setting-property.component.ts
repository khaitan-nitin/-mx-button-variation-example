import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { PropertyService } from '../../service';
import { Router, ActivatedRoute } from '@angular/router';
import { CollectionUtils, Record, CrudListComponentInterface, Badge, Action } from 'ngx-material-widget';
import { settingPropertyCrud } from '../../config/setting-property.config';
import { PropertyCategory, PropertySubCategory, Property } from '../../model';

@Component({
  selector: 'cf-setting-property',
  templateUrl: './setting-property.component.html',
  styleUrls: ['./setting-property.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SettingPropertyComponent extends CrudListComponentInterface implements OnInit {
  private propertyServiceSubscription: Subscription;
 
  @Input()
  categoryKey: string;

  @Input()
  subCategoryKey: string;

  constructor(
    private propertyService: PropertyService,
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
    super.setCommonConfigUsingCrud(settingPropertyCrud);

    //  Tab wise data/setting
    //this.keyMap = {};
  }

  setBadges(): Array<Badge> {
    let badges = new Array<Badge>();

    return badges;
  }

  setListConfig(): void {
    super.setListConfigUsingCrud(settingPropertyCrud);
  }

  getListData(): void {
    let records: Array<Record> = new Array<Record>();
    let recordTab: Record;
    let propertyList: Array<Property>;

    this.propertyServiceSubscription = this.propertyService.getCategorizedProperties().subscribe((propertyCategories: Array<PropertyCategory>) => {
      if (!CollectionUtils.isEmpty(propertyCategories)) {
        for (let propertyCategory of propertyCategories) {
          if (propertyCategory.key == this.categoryKey) {
            let propertySubCategories: Array<PropertySubCategory> = propertyCategory.subCategories;

            if (!CollectionUtils.isEmpty(propertySubCategories)) {
              for (let propertySubCategory of propertySubCategories) {
                if (propertySubCategory.key == this.subCategoryKey) {
                  propertyList = propertySubCategory.properties;

                  this.setHeaderTitle(propertySubCategory.name);
                  this.setHeaderDescription(propertySubCategory.description);
                }
              }
            }
          }
        }
      }

      recordTab = {
        total: propertyList.length,
        pageNo: 0,
        rows: propertyList
      }

      records.push(recordTab);

      super.setConfigListData(records, this.setBadges(), ["/application", "setting", "property"]);

      console.log(this.configListData);
    });
  }

  buttonClick(action: Action) {
    console.log(action);

    this.listReset = false;

    switch (action.sourceIdentifier) {
      case "propertyCrud":
        this.performPropertyCrudAction(action);
        break;
      case "propertyList":
        this.performPropertyAction(action);
        break;
    }
  }

  performPropertyCrudAction(action: Action) {
    switch (action.action) {
      case "crudBackButton":
        this.backAction(action);
    }
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

  performPropertyAction(action: Action) {
    switch (action.action) {
      case "editProperty":
        this.editProperty(action);
        break;
    }
  }

  editProperty(action: Action) {
    this.beforeChangeMerge(action, action.sourceIdentifier);
    this.afterChangeMerge();
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
  }
}
