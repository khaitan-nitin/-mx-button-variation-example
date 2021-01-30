import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExamplePageComponent } from './example-page.component';
import { ButtonExampleComponent } from './button/component/button-example/button-example.component';
import { TextBoxExampleComponent } from './field/text-box/component/text-box-example/text-box-example.component';
import { CrudExampleComponent } from './crud-example/component/crud-example/crud-example.component';
import { FormExampleComponent } from './form/component/form-example/form-example.component';
import { ListExampleComponent } from './list-example/component/list-example/list-example.component';
import { FieldTypeComponent } from './field-example/component/field-type/field-type.component';
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

const exampleRoutes: Routes = [{
    path: '',
    component: ExamplePageComponent,
    children: [
        {
            path: 'button',
            component: ButtonExampleComponent,
        },
        {
            path: 'autocomplete-field',
            component: AutocompleteExampleComponent,
        },
        {
            path: 'calendar-field',
            component: CalendarExampleComponent,
        },
        {
            path: 'checkbox-field',
            component: CheckboxExampleComponent,
        },
        {
            path: 'chips-field',
            component: ChipsExampleComponent,
        },
        {
            path: 'dropdown-field',
            component: DropdownExampleComponent,
        },
        {
            path: 'html-editor-field',
            component: HtmlEditorExampleComponent,
        },
        {
            path: 'label-field',
            component: LabelExampleComponent,
        },
        {
            path: 'multi-image-field',
            component: MultiImageExampleComponent,
        },
        {
            path: 'paragraph-field',
            component: ParagraphExampleComponent,
        },
        {
            path: 'radio-button-field',
            component: RadioButtonExampleComponent,
        },
        {
            path: 'text-area-field',
            component: TextAreaExampleComponent,
        },
        {
            path: 'text-box-field',
            component: TextBoxExampleComponent,
        },
        {
            path: 'toggle-field',
            component: ToggleExampleComponent,
        },
        {
            path: 'upload-field',
            component: UploadExampleComponent,
        },
        {
            path: 'field-type',
            component: FieldTypeComponent,
        },
        {
            path: 'form',
            component: FormExampleComponent,
        },
        {
            path: 'list',
            component: ListExampleComponent, 
        },
        {
            path: 'crud',
            component: CrudExampleComponent, 
        },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(exampleRoutes)],
    exports: [RouterModule],
})
export class ExampleRoutingModule { }