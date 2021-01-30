import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingCategoryComponent } from './component/setting-category/setting-category.component';
import { SettingMasterDataCategoryComponent } from './component/setting-master-data-category/setting-master-data-category.component';
import { SettingPropertyCategoryComponent } from './component/setting-property-category/setting-property-category.component';
import { SettingPageComponent } from './setting.component';
import { ModuleComponent } from './component/module/module.component';
import { ApplicationComponent } from './component/application/application.component';

const settingRoutes: Routes = [{
    path: '',
    component: SettingPageComponent,
    children: [
        {
            path: 'category',
            component: SettingCategoryComponent,
        },
        {
            path: 'master-data',
            component: SettingMasterDataCategoryComponent,
        },
        {
            path: 'property',
            component: SettingPropertyCategoryComponent,
        },
        {
            path: 'application',
            component: ApplicationComponent,
        },
        {
            path: 'application/:id',
            component: ApplicationComponent,
        },
        {
            path: 'module',
            component: ModuleComponent,
        },
        {
            path: 'module/:id',
            component: ModuleComponent,
        },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(settingRoutes)],
    exports: [RouterModule],
})
export class SettingRoutingModule { }