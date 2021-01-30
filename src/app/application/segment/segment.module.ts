import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { SegmentComponent } from './component/segment/segment.component';
import { SegmentContactComponent } from './component/segment-contact/segment-contact.component';

import { SegmentRoutingModule } from './segment-routing.module';
import { SegmentPageComponent } from './segment.component';
import { AdminBuilderModule } from 'ngx-material-widget';
import { SegmentService } from './service';

//import { ButtonModule } from 'ngx-material-widget/lib/button/button.module';
//import { FormModule } from 'ngx-material-widget/lib/form/form.module';
//import { CrudModule } from 'ngx-material-widget/lib/crud/crud.module';

@NgModule({
  declarations: [
    SegmentComponent,
    SegmentPageComponent,
    SegmentContactComponent
  ],
  imports: [
    CommonModule,
    SegmentRoutingModule,
    MatCardModule,
    // FormModule,
    // CrudModule,
    // ButtonModule
    AdminBuilderModule
  ],
  exports: [
    SegmentComponent,
    SegmentContactComponent
  ],
  providers: [
    SegmentService
  ]
})
export class SegmentModule { }
