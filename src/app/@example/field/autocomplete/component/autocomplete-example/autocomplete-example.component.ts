import { Component, OnInit } from '@angular/core';
import { CrudListComponentInterface, Form, KeyMap, KeyMapAssociation, KeyMapOptionType, KeyMapUtils } from 'ngx-material-widget';
import { autocompleteExample } from '../../config/autocomplete-example.config';
import { AutocompleteService } from '../../service';

@Component({
  selector: 'app-autocomplete-example',
  templateUrl: './autocomplete-example.component.html',
  styleUrls: ['./autocomplete-example.component.scss']
})
export class AutocompleteExampleComponent extends CrudListComponentInterface implements OnInit {
  autocompleteExmaple: Form;
  sourceIndex: number;
  record: any;
  reset: boolean;
  keyMap: Array<KeyMap>;

  constructor(private autocompleteService: AutocompleteService) {
    super();
  }

  ngOnInit(): void {
    this.autocompleteExmaple = autocompleteExample;
 
    this.record = {
      "autocompleteReadOnly": "India",
      "autocompleteDisabled": "India",
      "autocompleteAsLabel": "India"
    }
  }

  fieldChange(field: any): void {
    console.log(field);
    console.log(field.value);

    this.autocompleteService.getCountries().subscribe(countries => {
      let templateAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
      templateAssociations.push({ componentIdentifier: "autocompleteExampleForm", fieldKey: field.fieldKey });

      if (field.fieldKey == "autocompleteNoRecordFound") {
        countries = []; 
      }
      KeyMapUtils.push(this.keyMap, templateAssociations, countries, KeyMapOptionType.FORM, this.autocompleteExmaple);
    });
  }

  formChange(form: any): void {
    console.log(form.value);
  }

  buttonClick(buttonAction: any): void {
    console.log(buttonAction);
  }
}
