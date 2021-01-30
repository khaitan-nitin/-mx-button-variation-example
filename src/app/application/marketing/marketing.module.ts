import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { PromotionCodeTypeComponent } from './component/promotion-code-type/promotion-code-type.component';
import { PromotionCodeComponent } from './component/promotion-code/promotion-code.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { MarketingPageComponent } from './marketing.component';
import { AccessCriteriaComponent } from './component/access-criteria/access-criteria.component';
import { CollectionComponent } from './component/collection/collection.component';

import { MarketingRoutingModule } from './marketing-routing.module';
import { CollectionBannerComponent } from './component/collection/collection-banner/collection-banner.component';
import { AdminBuilderModule } from 'ngx-material-widget';
import { AccessCriteriaService, CollectionService, MarketingService, PromotionCodeTypeService, PromotionCodeService } from './service';

//import { FormModule } from 'ngx-material-widget/lib/form/form.module';
//import { CrudModule } from 'ngx-material-widget/lib/crud/crud.module';
//import { ButtonModule } from 'ngx-material-widget/lib/button/button.module';
//import { ListModule } from 'ngx-material-widget/lib/list/list.module';
//import { FieldModule } from 'ngx-material-widget/lib/field/field.module';
//import { ModalModule } from 'ngx-material-widget/lib/modal/modal.module';

@NgModule({
  declarations: [
    MarketingPageComponent,
    PromotionCodeComponent, 
    GalleryComponent, 
    AccessCriteriaComponent, PromotionCodeTypeComponent, CollectionComponent, CollectionBannerComponent
  ],
  imports: [
    CommonModule,
    MarketingRoutingModule,
    MatCardModule,
    // FormModule,
    // FieldModule,
    // ListModule,
    // CrudModule,
    // ButtonModule,
    // ModalModule,
    MatGridListModule,
    AdminBuilderModule
  ],
  exports: [
    // BannerComponent, 
    // PromotionCodeComponent, 
    // GalleryComponent,
    // AccessCriteriaComponent
  ],
  providers: [
    AccessCriteriaService,
    CollectionService,
    MarketingService,
    PromotionCodeTypeService,
    PromotionCodeService
  ]
})
export class MarketingModule { }
