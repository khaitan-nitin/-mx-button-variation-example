import { Component, OnInit } from '@angular/core';
import { List, Record, Pagination } from 'ngx-material-widget/lib/list/model';
import { basicList } from '../../config/list-example.config';
import { ObjectTree } from 'ngx-material-widget/lib/button/model';
import { KeyMap, FieldChange } from 'ngx-material-widget/lib/field/model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'cf-list-example',
  templateUrl: './list-example.component.html',
  styleUrls: ['./list-example.component.scss']
})
export class ListExampleComponent implements OnInit {
  basicList: List;
  parent: ObjectTree;
  listReset: boolean;
  keyMap: Array<KeyMap>;
  record: Record;
  expanded: boolean;

  constructor() { }

  ngOnInit(): void {
    this.basicList = basicList;

    this.record = {
      total: 24,
      pageNo: 1,
      rows: [
        {
          "id": 1,
          "firstName": "Fn1 asdf as df ads fsa dfdsa fd asdf das f saf das f as df aasdfafa Fn1 asdf as df ads fsa dfdsa fd asdf das f saf das f as df aasdfafa Fn1 asdf as df ads fsa dfdsa fd asdf das f saf das f as df aasdfafa Fn1 asdf as df ads fsa dfdsa fd asdf das f saf das f as df aasdfafa f aasdfafa Fn1 asdf as df ads fsa dfdsa fd asdf das f saf das f as df aasdfafa Fn1 asdf as df ads fsa dfdsa fd asdf das f saf das f as df aasdfafa ",
          "childRecordLevelOne": [
            {
              "childOne": "Child One 1",
              "childTwo": "Child Two 1",
            },
            {
              "childOne": "Child One 2",
              "childTwo": "Child Two 2",
            },
            {
              "childOne": "Child One 3",
              "childTwo": "Child Two 3",
            }
          ]
        },
        {
          "id": 2,
          "firstName": "Fn2",
          "childRecordLevelOne": [
            {
              "childOne": "Child One1 1",
              "childTwo": "Child Two1 1",
            }
          ]
        },
        {
          "id": 3,
          "firstName": "Fn1"
        },
        {
          "id": 4,
          "firstName": "Fn2"
        },
        {
          "id": 5,
          "firstName": "Fn1"
        },
        {
          "id": 6,
          "firstName": "Fn2"
        },
        {
          "id": 7,
          "firstName": "Fn1"
        },
        {
          "id": 8,
          "firstName": "Fn2"
        },
        {
          "id": 9,
          "firstName": "Fn1"
        },
        {
          "id": 10,
          "firstName": "Fn2"
        },
        // {
        //   "id": 11,
        //   "firstName": "Fn1"
        // },
        // {
        //   "id": 12,
        //   "firstName": "Fn2"
        // },
        // {
        //   "id": 13,
        //   "firstName": "Fn1"
        // },
        // {
        //   "id": 14,
        //   "firstName": "Fn2"
        // },
        // {
        //   "id": 15,
        //   "firstName": "Fn1"
        // },
        // {
        //   "id": 16,
        //   "firstName": "Fn2"
        // },
        // {
        //   "id": 16,
        //   "firstName": "Fn1"
        // },
        // {
        //   "id": 17,
        //   "firstName": "Fn2"
        // },
        // {
        //   "id": 19,
        //   "firstName": "Fn1"
        // },
        // {
        //   "id": 20,
        //   "firstName": "Fn2"
        // },
        // {
        //   "id": 21,
        //   "firstName": "Fn1"
        // },
        // {
        //   "id": 22,
        //   "firstName": "Fn2"
        // },
        // {
        //   "id": 23,
        //   "firstName": "Fn1"
        // },
        // {
        //   "id": 24,
        //   "firstName": "Fn2"
        // },
      ]
    }
  }

  fieldChange(fieldChange: FieldChange) {
    console.log(fieldChange);
  }

  formChange(form: FormGroup) {
    console.log(form);
  }

  buttonClick(event: any) {
    console.log(event);
  }

  onSort(event) {
    console.log(event);
  }

  onPage(pageInfo: Pagination) {
    console.log(pageInfo);
  }  
}
