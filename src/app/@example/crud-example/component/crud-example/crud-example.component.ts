import { Component, OnInit } from '@angular/core';
import { CrudListComponentInterface, Record, KeyMap, Button, Badge, CrudList, CrudHeader, CrudSearch, CrudTab, CrudFormData, ActionPage, CrudListData, CrudForm } from 'ngx-material-widget';
import { basicCrud } from '../../config/crud-example.config';

@Component({
  selector: 'cf-crud-example',
  templateUrl: './crud-example.component.html',
  styleUrls: ['./crud-example.component.scss']
})
export class CrudExampleComponent extends CrudListComponentInterface implements OnInit {
  //  Common Config
  identifier: string;
  header: CrudHeader;
  actions: Array<Button>;
  actionPages: Array<ActionPage>;
  reset: boolean;
  keyMap: Array<KeyMap>;

  //  Form Config
  form: CrudForm;
  configFormData: CrudFormData; 
  configListData: CrudListData;


  //  List Config
  quickLinks: Array<Button>;
  searchConfig: CrudSearch;
  searchData: any;
  listConfig: CrudList;
  listPageBackRoute: Array<string>;

  constructor() {
    super();
   }

  ngOnInit(): void {
    this.setCommonConfig();

    this.setListConfig();
    this.setFormConfig();
  }

  setCommonConfig(): void {
    //  Config
    this.identifier = basicCrud.identifier
    this.header = basicCrud.header;

    //  Tab wise data/setting
    //this.keyMap = {};
    this.reset = true;
  }

  setFormConfig(): void {
    //  Config
    this.form = basicCrud.form;
    this.actions = basicCrud.actions;
    this.actionPages = basicCrud.actionPages;

    //  Tab wise data/setting
    this.configFormData = {
      pageBackRoute: ["pages", "2"],
      badges: this.setBadges(),
      record: this.setForms(),
      originalData: this.originalData
    }
  }

  setBadges(): Array<Badge> {
    let badges = new Array<Badge>();

    badges.push(this.setBadge(JSON.parse(JSON.stringify(basicCrud.header.badge)), "1st Badge"));
    badges.push(this.setBadge(JSON.parse(JSON.stringify(basicCrud.header.badge)), "2st Badge"));

    //    badges = JSON.parse(JSON.stringify(badges));
    return badges;
  }

  setBadge(badge: Badge, text: string): Badge {
    badge.content = text;

    return badge;
  }

  setForms(): any {
    let records: any = {
      "userBasicDetailForm1": {
        "firstNames": "Nitin",
        "lastNames": "Khaitan",
        "age": "38",
        "gender": "M"
      },
      "userSecurityDetailForm1": {
        "currentPassworkd": "testing123"
      },
      "addressList": {
        pageNo: 1,
        total: 2,
        rows: [
          {
            "address1": 'A1 - 1',
            "address2": 'A1 - 2',
            "city": "Noida",
            "state": "UP",
            "country": "India"
          },
          {
            "address1": 'A2 - 1',
            "address2": 'A2 - 2',
            "city": "Gurgaon",
            "state": "Haryana",
            "country": "India"
          }
        ]
      }
    };

    return records;
  }







  setListConfig(): void {
    //  Config
    this.quickLinks = basicCrud.quickLinks;
    this.searchConfig = basicCrud.search;
    this.listConfig = basicCrud.list;
    this.actions = basicCrud.actions;

    //  Tab wise data/setting
    this.configListData = {
      pageBackRoute: ["pages", "2"],

      badges: this.setBadges(),
      records: this.data(),
      searchData: {firstNames: "Search FN"},
      originalData: this.originalData   
    }
  }

  data(): Array<Record> {
    let records: Array<Record> = new Array<Record>();

    let recordTab1: Record = {
      total: 11,
      pageNo: 0,
      rows: [
        {
          "id": "1",
          "name": "Nitin",
          "gender": "Male",
          "age": 22,
          "lastActive": "2020-02-12 10:00:00"
        },
        {
          "id": "2",
          "name": "Amit",
          "gender": "Male",
          "age": 23,
          "lastActive": "2020-02-22 10:00:00"
        },
        {
          "id": "3",
          "name": "Raaman",
          "gender": "Male",
          "age": 16,
          "lastActive": "2018-02-12 10:30:00"
        },
        {
          "id": "4",
          "name": "Sanjeev",
          "gender": "Male",
          "age": 20,
          "lastActive": "2020-12-12 10:00:00"
        },
        {
          "id": "5",
          "name": "Neeraj",
          "gender": "Male",
          "age": 20,
          "lastActive": "1999-02-12 10:00:00"
        },
        {
          "id": "6",
          "name": "Sahil",
          "gender": "Male",
          "age": 22,
          "lastActive": "2021-02-12 10:00:00"
        },
        {
          "id": "7",
          "name": "Deepak",
          "gender": "Male",
          "age": 22,
          "lastActive": "2020-07-07 10:00:00"
        },
        {
          "id": "8",
          "name": "Snigdha",
          "gender": "Female",
          "age": 26,
          "lastActive": "2020-05-23 10:00:00"
        },
        {
          "id": "9",
          "name": "Aman",
          "gender": "Male",
          "age": 31,
          "lastActive": "2020-02-12 10:00:00"
        },
        {
          "id": "10",
          "name": "Gaurav",
          "gender": "Male",
          "age": 35,
          "lastActive": "2015-12-21 10:00:00"
        },
        // {
        //   "id": "11",
        //   "name": "Sonam",
        //   "gender": "Female",
        //   "age": 22,
        //   "lastActive": "2019-05-11 10:00:00"
        // },
      ]
    }

    records.push(recordTab1);
    records.push(recordTab1);

    return records;
  }

  buttonClick(event: any) {
    console.log(event);
  }

  fieldChange(event: any) {
    console.log(event);
  }

  formChange(event: any) {
    console.log(event);
  }

  onSort(event: any) {
    console.log(event);
  }

  onPage(event: any) {
    console.log(event);
  }

}
