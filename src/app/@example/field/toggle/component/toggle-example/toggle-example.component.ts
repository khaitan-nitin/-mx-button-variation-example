import { Component, OnInit } from '@angular/core';
import { CrudListComponentInterface, Form, KeyMap } from 'ngx-material-widget';
import { toggleExample } from '../../config/toggle-example.config';

@Component({
  selector: 'app-toggle-example',
  templateUrl: './toggle-example.component.html',
  styleUrls: ['./toggle-example.component.scss']
})
export class ToggleExampleComponent extends CrudListComponentInterface implements OnInit {
  toggleExmaple: Form;
  sourceIndex: number;
  record: any;
  reset: boolean;
  keyMap: Array<KeyMap>;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.toggleExmaple = toggleExample;

    this.record = {
      "basicToggle": 'Basic Toggle',
      "toggleWithoutLabel": "Toggle without Label",
      "toggleWithIcon": "Toggle With Icon",
      "toggleReadOnly": "ReadOnly Field",
      "toggleDisabled": "Value is Disabled",
      "toggleAsLabel": true
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
  }
}
