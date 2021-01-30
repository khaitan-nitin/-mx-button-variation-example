import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SegmentPageComponent } from './segment.component';
import { SegmentComponent } from './component/segment/segment.component';
import { SegmentContactComponent } from './component/segment-contact/segment-contact.component';

const segmentRoutes: Routes = [{
    path: '',
    component: SegmentPageComponent,
    children: [
        {
            path: 'segment',
            component: SegmentComponent,
        },
        {
            path: 'segment/:id',
            component: SegmentComponent,
        },
        {
            path: 'segment-contact',
            component: SegmentContactComponent,
        },
        {
            path: 'segment-contact/:id',
            component: SegmentContactComponent,
        },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(segmentRoutes)],
    exports: [RouterModule],
})
export class SegmentRoutingModule { }