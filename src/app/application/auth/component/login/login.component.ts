import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { loginForm } from '../../config/login.config';
import { AuthService } from '../../service';
import { Ability, RawRule } from '@casl/ability';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
// import { init_app } from 'src/app/app.module';
import { MasterDataService, PropertyService } from 'src/app/application/setting/service';
//import { Form } from 'ngx-material-widget/lib/form/model';
import { Action, Form } from 'ngx-material-widget';

@Component({
  selector: 'cf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: Form;
  sourceIndex: number;
  record: any;
  reset: boolean;

  authSubscription: Subscription;

  constructor(
    private autService: AuthService,
    private masterDataService: MasterDataService, 
    private propertyService: PropertyService,
    public router: Router,
    private ability: Ability
  ) { } 

  ngOnInit(): void {
    this.loginForm = loginForm;
  }

  fieldChange(field: any): void {
    console.log(field);
  }

  formChange(form: any): void {
    console.log(form);
  }

  buttonClick(action: Action): void {
    console.log(action);

    switch (action.sourceIdentifier) {
      case "loginForm":
        this.actionInLoginForm(action);
        break;
    }
  }

  actionInLoginForm(action: Action) {
    switch (action.action) {
      case "login":
        this.performLogin(action);
        break;
      case "registration":
        this.performRegistration(action);
        break;
    }
  }

  performLogin(action: Action) {
    console.log(action);

    this.authSubscription = this.autService.login(action.data['userName'], action.data['password']).subscribe(user => {
      this.autService.getPermissions(user.group).subscribe(permissions => {
        let rules: Array<RawRule> = <Array<RawRule>>permissions;

        user.permissions = permissions;
        localStorage.setItem("user", JSON.stringify(user));

        this.ability.update(<any>rules);

        this.router.navigate(['/application/setting/property']);

//        init_app(this.masterDataService, this.propertyService);
        this.masterDataService.setMasterDataToLocalStore();
        this.propertyService.setPropertiesToLocalStore();
    
      });
    });
  }

  performRegistration(action: Action) {
    console.log(action);
    this.router.navigate(['/auth/registration']);
  }

  ngOnDestroy(): void {
    if (this.authSubscription)  {
      this.authSubscription.unsubscribe();
    }
  }
}
