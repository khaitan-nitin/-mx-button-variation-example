import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { ButtonExampleComponent } from './button/component/button-example/button-example.component';
import { CrudExampleComponent } from './crud-example/component/crud-example/crud-example.component';
import { FormExampleComponent } from './form/component/form-example/form-example.component';
import { ListExampleComponent } from './list-example/component/list-example/list-example.component';

// import { FormModule } from 'ngx-material-widget/lib/form/form.module';
// import { FieldModule } from 'ngx-material-widget/lib/field/field.module';
// import { CrudModule } from 'ngx-material-widget/lib/crud/crud.module';
// import { ListModule } from 'ngx-material-widget/lib/list/list.module';
//import { ButtonModule } from 'ngx-material-widget/lib/ngx-material-widget.module';

import { RouterModule } from '@angular/router';

import { ExampleRoutingModule } from './example-routing.module';
import { ExamplePageComponent } from './example-page.component';
import { AdminBuilderModule } from 'ngx-material-widget';
import { MatGridListModule } from '@angular/material/grid-list';
import { FieldTypeComponent } from './field-example/component/field-type/field-type.component';
import { TextBoxExampleComponent } from './field/text-box/component/text-box-example/text-box-example.component';
import { TextAreaExampleComponent } from './field/text-area/component/text-area-example/text-area-example.component';
import { HtmlEditorExampleComponent } from './field/html-editor/component/html-editor-example/html-editor-example.component';
import { CalendarExampleComponent } from './field/calendar/component/calendar-example/calendar-example.component';
import { AutocompleteExampleComponent } from './field/autocomplete/component/autocomplete-example/autocomplete-example.component';
import { CheckboxExampleComponent } from './field/checkbox/component/checkbox-example/checkbox-example.component';
import { ChipsExampleComponent } from './field/chips/component/chips-example/chips-example.component';
import { DropdownExampleComponent } from './field/dropdown/component/dropdown-example/dropdown-example.component';
import { LabelExampleComponent } from './field/label/component/label-example/label-example.component';
import { MultiImageExampleComponent } from './field/multi-image/component/multi-image-example/multi-image-example.component';
import { ParagraphExampleComponent } from './field/paragraph/component/paragraph-example/paragraph-example.component';
import { RadioButtonExampleComponent } from './field/radio-button/component/radio-button-example/radio-button-example.component';
import { ToggleExampleComponent } from './field/toggle/component/toggle-example/toggle-example.component';
import { UploadExampleComponent } from './field/upload/component/upload-example/upload-example.component';

@NgModule({
  declarations: [
    ButtonExampleComponent,
    FieldTypeComponent,

    ExamplePageComponent,
    CrudExampleComponent,
    FormExampleComponent,
    ListExampleComponent,
    TextBoxExampleComponent,
    TextAreaExampleComponent,
    HtmlEditorExampleComponent,
    CalendarExampleComponent,
    AutocompleteExampleComponent,
    CheckboxExampleComponent,
    ChipsExampleComponent,
    DropdownExampleComponent,
    LabelExampleComponent,
    MultiImageExampleComponent,
    ParagraphExampleComponent,
    RadioButtonExampleComponent,
    ToggleExampleComponent,
    UploadExampleComponent
  ],
  imports: [
    RouterModule,
    MatCardModule,
    MatGridListModule,
    ExampleRoutingModule,
    CommonModule,
    //    ButtonModule,
    //    FormModule,
    //    FieldModule,
    //    CrudModule,
    //    ListModule
    AdminBuilderModule
  ],
  exports: [
    ButtonExampleComponent,
    FieldTypeComponent,

    CrudExampleComponent,
    FormExampleComponent,
    ListExampleComponent
  ]
})
export class ExampleModule { }
