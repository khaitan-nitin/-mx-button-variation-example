import { Component, OnInit } from '@angular/core';
import { basicForm } from '../../config/form-example.config';
import { Form } from 'ngx-material-widget/lib/form/model';
import { FieldTypeService } from 'src/app/@example/field-example/service';
import { CollectionUtils } from 'ngx-material-widget/lib/utility';
import { AutocompleteField, DropdownOption, FieldType } from 'ngx-material-widget/lib/field/model';

@Component({
  selector: 'cf-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss']
})
export class FormExampleComponent implements OnInit {
  basicForm: Form;
  sourceIndex: number;
  record: any;
  reset: boolean;
//  arg: any;

  constructor() { }

  ngOnInit(): void {
    this.basicForm = basicForm;
  }

  fieldChange(field: any): void {
    console.log(field);
  }

  formChange(form: any): void {
    console.log(form);
  }

  buttonClick(buttonAction: any): void {
    console.log(buttonAction);
  }
}
