import { Component, OnInit, OnDestroy } from '@angular/core';
import { KeyMap, Button, Badge, Action, CrudHeader, ActionPage, CrudFormData, CrudForm } from 'ngx-material-widget';
import { profileCrud } from '../../config/profile.config';
import { AuthService } from '../../service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'cf-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  identifier: string;
  header: CrudHeader;
  actions: Array<Button>;
  actionPages: Array<ActionPage>;
  reset: boolean;
  keyMap: Array<KeyMap>;

  //  Form Config
  form: CrudForm;
  configFormData: CrudFormData;

  authSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.setCommonConfig();

    this.setFormConfig();
  }

  setCommonConfig(): void {
    //  Config
    this.identifier = profileCrud.identifier
    this.header = profileCrud.header;

    //  Tab wise data/setting
    //this.keyMap = {};
    this.reset = true;
  }

  setFormConfig(): void {
    //  Config
    this.form = profileCrud.form;
    this.actions = profileCrud.actions;
    this.actionPages = profileCrud.actionPages;

    //  Tab wise data/setting
    this.setForms(1);
  }

  setBadges(): Array<Badge> {
    let badges = new Array<Badge>();

    //    badges = JSON.parse(JSON.stringify(badges));
    return badges;
  }

  setBadge(badge: Badge, text: string): Badge {
    badge.content = text;

    return badge;
  }

  setForms(userId: number): any {
    this.authSubscription = this.authService.getProfile(userId).subscribe(user => {
      let records: any = {
        "profileForm": user,
        "addressList": {
          pageNo: user.addresses ? user.addresses.length : 0,
          total: 2,
          rows: user.addresses
        }
      };

      this.configFormData = {
        pageBackRoute: [],
        badges: this.setBadges(),
        record: records,
        originalData: user
      }
    });
  }

  buttonClick(action: Action) {
    console.log(action);

    switch (action.sourceIdentifier) {
      case "profileForm":
        this.actionProfileForm(action);
        break;
    }
  }

  actionProfileForm(action: Action) {
    switch (action.action) {
      case "editProfile":
        this.performEditProfile(action);
        break;
    }
  }
 
  performEditProfile(action: Action) {
    this.router.navigate(['/application', 'auth', 'registration', action.originalData['id']], { queryParams: { action: action.action }, skipLocationChange: false, replaceUrl: true });
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
    if (this.authSubscription)  {
      this.authSubscription.unsubscribe();
    }
  }
}
