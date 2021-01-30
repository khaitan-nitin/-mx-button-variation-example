import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Record, StringUtils, CollectionUtils, KeyMapUtils, KeyMap, KeyMapAssociation, KeyMapOptionType, Button, Badge, Action, CrudListComponentInterface, CrudHeader, ActionPage, CrudFormData, CrudListData, CrudSearch, CrudList, CrudForm } from 'ngx-material-widget';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { CommunicationService } from '../../service';
import { deviceCrud } from '../../config/device.config';

@Component({
  selector: 'cf-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DeviceComponent extends CrudListComponentInterface implements OnInit {
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

  deviceSubscription: Subscription;
  routerSubscriber: Subscription;

  //  List Config
  quickLinks: Array<Button>;
  searchConfig: CrudSearch;
  searchData: any;
  listConfig: CrudList;
  listPageBackRoute: Array<string>;

  deviceId: string;
  originalData: any;

  constructor(
    private communicationService: CommunicationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();
    this.routerSubscriber = this.router.events.subscribe(
      (event: Event) => {
        if (event instanceof NavigationEnd) {
          this.deviceId = this.route.snapshot.params['id'];

          this.setCommonConfig();
          if (this.deviceId) {
            this.setFormConfig(+this.deviceId);
          } else {
            this.setListConfig();
            this.loadFilterParams(StringUtils.isEmpty(this.route.snapshot.queryParams['filter']) ? {} : this.route.snapshot.queryParams['filter']);
            this.setListData();
          }
        }
      });
  }

  ngOnInit(): void {
  }

  setCommonConfig(): void {
    super.setCommonConfigUsingCrud(deviceCrud);
    this.setOptions();
  }

  setOptions() {
    let osAssociations: Array<KeyMapAssociation> = new Array<KeyMapAssociation>();
    osAssociations.push({ componentIdentifier: "deviceSearchForm", fieldKey: "os" });
    osAssociations.push({ componentIdentifier: "deviceForm", fieldKey: "os" });
    this.keyMap = KeyMapUtils.push(this.keyMap, osAssociations, "DEVICE_TYPE", KeyMapOptionType.CRUD, deviceCrud);
  }

  setFormConfig(deviceId: number): void {
    //  Config
    this.form = deviceCrud.form;
    this.actions = deviceCrud.actions;
    this.actionPages = deviceCrud.actionPages;

    //  Tab wise data/setting
    this.configFormData = {
      pageBackRoute: ["/application", "communication", "device"],
      badges: this.setBadges(),
      record: this.setFormsData(deviceId),
      originalData: this.originalData
    }
  }

  setBadges(): Array<Badge> {
    let badges = new Array<Badge>();

    return badges;
  }

  setBadge(badge: Badge, text: string): Badge {
    badge.content = text;

    return badge;
  }

  setFormsData(deviceId: number): any {
    this.deviceSubscription = this.communicationService.getDevice(deviceId).subscribe(device => {
      this.originalData = device;

      device.userName = device.userName + " (" + device.userId + ")";

      this.configFormData.record = {
        "deviceForm": device
      };
    });
  }

  setListConfig(): void {
    super.setListConfigUsingCrud(deviceCrud);
  }

  setListData() {
    let records: Array<Record> = new Array<Record>();

    this.deviceSubscription = this.communicationService.getDevices().subscribe(devices => {
      if (!CollectionUtils.isEmpty(devices)) {
        for (let device of devices) {
          device.userName = device.userName + " (" + device.userId + ")";
          device['deviceInfo'] = device.os + " - " + device.appVersion;
        }
      }

      let recordTab1: Record = {
        total: devices.length,
        pageNo: 0,
        rows: devices
      }

      records.push(recordTab1);

      super.setConfigListData(records, this.setBadges(), []);
    });
  }

  buttonClick(action: Action) {
    console.log(action);

    switch (action.sourceIdentifier) {
      case "deviceForm":
        this.actionDeviceForm(action);
        break;
      case "deviceList":
        this.actionDeviceList(action);
        break;
    }
  }

  actionDeviceForm(action: Action) {
    switch (action.action) {
      case "backToList":
        this.performBackToList(action);
        break;
    }
  }

  performBackToList(action: Action) {
    this.router.navigate(['/application/communication/device']);
  }

  actionDeviceList(action: Action) {
    switch (action.action) {
      case "viewDevice":
        this.router.navigate(['/application', 'communication', 'device', action.originalData['id']], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: false });
        break;
      case "viewUser":
        this.router.navigate(['/application', 'auth', 'user', action.originalData['id']], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: false });
        break;
    }
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

  ngOnDestroy(): void {
    if (this.routerSubscriber) {
      this.routerSubscriber.unsubscribe();
    }
    if (this.deviceSubscription) {
      this.deviceSubscription.unsubscribe();
    }
  }
}
