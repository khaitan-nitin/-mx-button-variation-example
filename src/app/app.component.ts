import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { buttonTypes } from './config/button-types.config';
import { buttonTypesWithIcon } from './config/button-types-with-icon.config';
import { buttonTypesOnlyIcon } from './config/button-types-only-icon.config';
import { buttonTypesWithIconRight } from './config/button-types-with-icon-right.config';
import { buttonTypesWithIconTop } from './config/button-types-with-icon-top.config';
import { buttonTypesWithIconBottom } from './config/button-types-with-icon-bottom.config';
import { buttonTypesWithBadge } from './config/button-types-with-badge.config';
import { buttonTypesSmallSize } from './config/button-types-small-size.config';
import { buttonTypesTinySize } from './config/button-types-tiny-size.config';
import { buttonTypesMicroSize } from './config/button-types-micro-size.config';
import { buttonGroupWidth } from './config/button-group-width.config';
import { buttonChipFullWidth } from './config/button-chip-full-width.config';
import { buttonGroupFullWidth } from './config/button-group-full-width.config';
import { buttonWithDelete } from './config/button-with-delete.config';
import { Button, ButtonGroup, HoverButton } from 'ngx-material-widget';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  buttonTypes: Array<Button | ButtonGroup | HoverButton>;
  buttonTypesOnlyIcon: Array<Button | ButtonGroup | HoverButton>;
  buttonTypesWithIcon: Array<Button | ButtonGroup | HoverButton>;
  buttonTypesWithIconRight: Array<Button | ButtonGroup | HoverButton>;
  buttonTypesWithIconTop: Array<Button | ButtonGroup | HoverButton>;
  buttonTypesWithIconBottom: Array<Button | ButtonGroup | HoverButton>;

  buttonTypesWithBadge: Array<Button | ButtonGroup | HoverButton>;

  buttonTypesSmallSize: Array<Button | ButtonGroup | HoverButton>;
  buttonTypesTinySize: Array<Button | ButtonGroup | HoverButton>;
  buttonTypesMicroSize: Array<Button | ButtonGroup | HoverButton>;

  buttonGroupWidth: Array<Button | ButtonGroup | HoverButton>;
  buttonChipFullWidth: Array<Button | ButtonGroup | HoverButton>;
  buttonGroupFullWidth: Array<Button | ButtonGroup | HoverButton>;

  buttonWithDelete: Array<Button | ButtonGroup | HoverButton>;

  form: FormGroup;
  sourceIdentifier: string = "buttonExamples";
  sourceIndex: number;
  widgetArrayIndex: number = 1;
  context: any = {
    "key1": "value 1",
    "key2": "value 2.1",
    "key3": "value 3",
  };;
  originalData: any = {
    "key1": "value 1",
    "key2": "value 2",
  };
 
  constructor() { }

  ngOnInit(): void {
   this.buttonTypes = buttonTypes;
   this.buttonTypesOnlyIcon = buttonTypesOnlyIcon;
   this.buttonTypesWithIcon = buttonTypesWithIcon;
   this.buttonTypesWithIconRight = buttonTypesWithIconRight;
   this.buttonTypesWithIconTop = buttonTypesWithIconTop;
   this.buttonTypesWithIconBottom = buttonTypesWithIconBottom;

   this.buttonTypesWithBadge = buttonTypesWithBadge;
   
   this.buttonTypesSmallSize = buttonTypesSmallSize;
   this.buttonTypesTinySize = buttonTypesTinySize;
   this.buttonTypesMicroSize = buttonTypesMicroSize;

   this.buttonGroupWidth = buttonGroupWidth;
   this.buttonChipFullWidth = buttonChipFullWidth;
   this.buttonGroupFullWidth = buttonGroupFullWidth;

   this.buttonWithDelete = buttonWithDelete;
  }

  click(event: any): void {
    console.log(event);
  }}
