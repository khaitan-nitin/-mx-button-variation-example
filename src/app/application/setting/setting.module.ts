import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SettingCategoryComponent } from './component/setting-category/setting-category.component';
import { SettingMasterDataComponent } from './component/setting-master-data/setting-master-data.component';
import { SettingMasterDataCategoryComponent } from './component/setting-master-data-category/setting-master-data-category.component';
import { SettingPropertyCategoryComponent } from './component/setting-property-category/setting-property-category.component';
import { SettingPropertyComponent } from './component/setting-property/setting-property.component';

import { SettingPageComponent } from './setting.component';
import { SettingRoutingModule } from './setting-routing.module';

// import { CrudModule } from 'ngx-material-widget/lib/crud/crud.module';
import { ModuleComponent } from './component/module/module.component';
import { ApplicationComponent } from './component/application/application.component';
import { AdminBuilderModule } from 'ngx-material-widget';
import { ApplicationService } from './service/application.service';
import { ConfigCategoryService, MasterDataService, PropertyService } from './service';
import { ModuleService } from './service/module.service';

@NgModule({
  declarations: [
    SettingPageComponent,
    SettingCategoryComponent, 
    SettingMasterDataComponent, 
    SettingMasterDataCategoryComponent, 
    SettingPropertyCategoryComponent, 
    SettingPropertyComponent, 
    ModuleComponent, 
    ApplicationComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    // CrudModule,
    RouterModule,
    AdminBuilderModule
  ],
  exports: [
    SettingCategoryComponent,
    SettingMasterDataComponent,
    SettingMasterDataCategoryComponent, 
    SettingPropertyCategoryComponent, 
    SettingPropertyComponent,
    ModuleComponent
  // ],
  // providers: [
  //   ApplicationService,
  //   ConfigCategoryService,
  //   MasterDataService,
  //   ModuleService,
  //   PropertyService
  ]
})
export class SettingModule { }
