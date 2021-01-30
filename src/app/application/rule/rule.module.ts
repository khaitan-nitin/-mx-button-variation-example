import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { RuleComponent } from './component/rule/rule.component';
import { RuleRoutingModule } from './rule-routing.module';
import { RulePageComponent } from './rule.component';
import { AdminBuilderModule } from 'ngx-material-widget';
import { EntityService } from './service/entity.service';
import { RuleService } from './service';

//import { FormModule } from 'ngx-material-widget/lib/form/form.module';
//import { FieldModule } from 'ngx-material-widget/lib/field/field.module';
//import { CrudModule } from 'ngx-material-widget/lib/crud/crud.module';
//import { ButtonModule } from 'ngx-material-widget/lib/button/button.module';
//import { ListModule } from 'ngx-material-widget/lib/list/list.module';


@NgModule({
  declarations: [
    RuleComponent,
    RulePageComponent
  ],
  imports: [
    CommonModule,
    RuleRoutingModule,
    MatCardModule,
    // FormModule,
    // FieldModule,
    // ListModule,
    // CrudModule,
    // ButtonModule
    AdminBuilderModule
  ],
  exports: [
    RuleComponent,
  ],
  providers: [
    EntityService,
    RuleService
  ]
})
export class RuleModule { }
