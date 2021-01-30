import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromotionCodeComponent } from './component/promotion-code/promotion-code.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { MarketingPageComponent } from './marketing.component';
import { AccessCriteriaComponent } from './component/access-criteria/access-criteria.component';
import { PromotionCodeTypeComponent } from './component/promotion-code-type/promotion-code-type.component';
import { CollectionComponent } from './component/collection/collection.component';

const marketingRoutes: Routes = [{
    path: '',
    component: MarketingPageComponent,
    children: [
        {
            path: 'collection',
            component: CollectionComponent,
        },
        {
            path: 'collection/:id',
            component: CollectionComponent,
        },
        {
            path: 'promotion-code-type',
            component: PromotionCodeTypeComponent,
        },
        {
            path: 'promotion-code-type/:id',
            component: PromotionCodeTypeComponent,
        },
        {
            path: 'promotion-code',
            component: PromotionCodeComponent,
        },
        {
            path: 'promotion-code/:id',
            component: PromotionCodeComponent,
        },
        {
            path: 'gallery',
            component: GalleryComponent,
        },
        {
            path: 'gallery/:id',
            component: GalleryComponent,
        },
        {
            path: 'access-criteria',
            component: AccessCriteriaComponent,
        },
        {
            path: 'access-criteria/:id',
            component: AccessCriteriaComponent,
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(marketingRoutes)],
    exports: [RouterModule],
})
export class MarketingRoutingModule { }