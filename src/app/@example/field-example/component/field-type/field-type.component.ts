import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AutocompleteField, CollectionUtils, CrudListComponentInterface, DropdownOption, FieldType, FormUtils, KeyMap, KeyMapAssociation, KeyMapOptionType, KeyMapUtils } from 'ngx-material-widget';
import { Form } from 'ngx-material-widget/lib/form/model';
import { fieldType } from '../../config/field-type.config';
import { FieldTypeService } from '../../service';

@Component({
  selector: 'cf-field-type',
  templateUrl: './field-type.component.html',
  styleUrls: ['./field-type.component.scss'],
  encapsulation: ViewEncapsulation.None  
})
export class FieldTypeComponent extends CrudListComponentInterface implements OnInit {
  fieldType: Form;
  sourceIndex: number;
  record: any;
  reset: boolean;
  keyMap: Array<KeyMap>;
  //  arg: any;

  constructor(private fieldTypeService: FieldTypeService) { 
    super();
  }

  ngOnInit(): void {
    this.fieldType = fieldType;

    this.record = {
      "textField":'testsa',
      "htmlEditorField": "<p>Hi</p>",
      "singleSelectList": "2", 
      "multiSelectList": ["One", "Two"], 
      "radioBoxField": "inactive", 
      "checkboxField": ["active", "inactive"],
      "sentence": {"title": "T2", "dropdownField": "mrs"},
      "calendarField": "2020-04-03",
      "chips1": ['india'],
      "chips2": ['india', 'australia'],
      "chips3": ['new'],
      "chips4": ['india1'],
    }
  }

  fieldChange(field: any): void {
    console.log(field);
    console.log(field.value);
    if (field.fieldKey == "autocompleteField")  {
      this.fieldTypeService.getCountries().subscribe(countries => {
        let templateAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
        templateAssociations.push({ componentIdentifier: "fieldTypesInForm", fieldKey: "autocompleteField" });
  
        KeyMapUtils.push(this.keyMap, templateAssociations, countries, KeyMapOptionType.FORM, this.fieldType);

        // FormUtils.setOptionsUsingKey(this.fieldType, "autocompleteField", countries);
      });  
    }
  }

  formChange(form: any): void {
    console.log(form.value);
  }

  buttonClick(buttonAction: any): void {
    console.log(buttonAction);
  }
}
