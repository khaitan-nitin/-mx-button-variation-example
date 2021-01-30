import { Component, OnInit } from '@angular/core';
import { CrudListComponentInterface, Form, KeyMap } from 'ngx-material-widget';
import { uploadExample } from '../../config/upload-example.config';

@Component({
  selector: 'app-upload-example',
  templateUrl: './upload-example.component.html',
  styleUrls: ['./upload-example.component.scss']
})
export class UploadExampleComponent extends CrudListComponentInterface implements OnInit {
  uploadExmaple: Form;
  sourceIndex: number;
  record: any;
  reset: boolean;
  keyMap: Array<KeyMap>;

  constructor() { 
    super();
  }

  ngOnInit(): void {
    this.uploadExmaple = uploadExample;

    this.record = {
      "basicUpload":'Basic Upload',
      "uploadWithoutLabel": "Upload without Label",
      "uploadWithIcon": "Upload With Icon",
      "uploadReadOnly": "ReadOnly Field",
      "uploadDisabled": "Value is Disabled",
      "uploadAsLabel": "Value as Label"
    }
  }

  fieldChange(field: any): void {
    console.log(field);
    console.log(field.value);
  }

  formChange(form: any): void {
    console.log(form.value);
  }

  buttonClick(buttonAction: any): void {
    console.log(buttonAction);
  }}
