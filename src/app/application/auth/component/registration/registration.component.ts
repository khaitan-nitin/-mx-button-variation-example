import { Component, OnInit, OnDestroy } from '@angular/core';
import { Form, FormDiaplyMode } from 'ngx-material-widget/lib/form/model';
import { AuthService } from '../../service';
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Ability } from '@casl/ability';
import { registrationForm, userAddressForm } from '../../config/registration.config';
import { Action, Button, ButtonType, ButtonColor, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { FormGroup } from '@angular/forms';
import { Registration, UserAddress } from '../../model/registration.model';
import { FormUtils } from 'ngx-material-widget';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cf-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, OnDestroy {
  registrationFormConfig: Form;
  sourceIndex: number;
  registration: Registration;
  reset: boolean;

  registrationForm: FormGroup;
  addressForms: Array<FormGroup> = new Array<FormGroup>();

  addAddressButton: Button;
  doRegistrationButton: Button;
  cancelRegistrationButton: Button;
  userAddressFormConfig: Form;

  routerSubscriber: Subscription;
  authSubscription: Subscription;

  constructor(
    private authService: AuthService,
    public router: Router,
    private route: ActivatedRoute,
    private ability: Ability
  ) { 
    this.routerSubscriber = this.router.events.subscribe(
      (event: Event) => {
        if (event instanceof NavigationEnd) {
          if (this.route.snapshot.params['id']) {
            this.setForms(this.route.snapshot.params['id']);
          }
        }
      });
  }

  ngOnInit(): void {
    this.registrationFormConfig = registrationForm;
    this.userAddressFormConfig = userAddressForm; 
    this.setOptions(); 
    
    this.initForm();

    this.addAddressButton = this.addUserAddressButton("addAddress", "Add Address", "contact_email", ButtonColor.PRIMARY);
    this.doRegistrationButton = this.addUserAddressButton("doRegistration", "Register", "record_voice_over", ButtonColor.PRIMARY);
    this.cancelRegistrationButton = this.addUserAddressButton("cancelRegistration", "Cancel", "keyboard_arrow_left", ButtonColor.ASCENT);
  }

  setOptions()  {
    FormUtils.setOptionsUsingKey(userAddressForm, "city", "CITY");
    FormUtils.setOptionsUsingKey(userAddressForm, "state", "STATE");
    FormUtils.setOptionsUsingKey(userAddressForm, "country", "COUNTRY");
  }

  initForm() {
    let addresses: Array<UserAddress> = new Array<UserAddress>();
    let userAddress: UserAddress = {};
    addresses.push(userAddress);
    this.addressForms.push(FormUtils.initFormGroup(this.userAddressFormConfig.formFields, this.registration, userAddress, FormDiaplyMode.EDIT))

    this.registration = { 
      addresses: addresses
    };

    this.registrationForm = FormUtils.initFormGroup(this.registrationFormConfig.formFields, null, this.registration, FormDiaplyMode.EDIT);
    console.log(this.registrationForm);
  }

  setForms(userId: number): any {
    this.authSubscription = this.authService.getProfile(userId).subscribe(user => {
      this.registration = user;
    });
  }

  addUserAddressButton(identifier: string, label: string, icon: string, color: ButtonColor): Button {
    let buttonConfig: Button = {
      identifier: identifier,
      type: ButtonType.RAISED,
      label: label,
      color: color,
      size: ButtonSize.SMALL,
      icon: icon,
      onlyIcon: false,
      alwaysEnable: true
    }

    return buttonConfig;
  }

  fieldChange(field: any): void {
    console.log(field);
  }

  formChange(form: FormGroup, index: number, formConfig: Form): void {
    console.log(index);
    console.log(formConfig);
    console.log(form);

    switch (formConfig.identifier) {
      case "registrationForm":
        this.registrationForm = form;
        break;
      case "userAddressForm":
        if (index >= 0)  {
          this.addressForms[index] = form;
        }
        break;
    }
  }

  buttonClick(action: Action): void {
    console.log(action);

    switch (action.sourceIdentifier) {
      case "registrationForm":
        this.actionRegistrationForm(action);
        break;
    }
  }

  actionRegistrationForm(action: Action) {
    switch (action.action) {
      case "addAddress":
        this.performAddAddress(action);
        break;
      case "doRegistration":
        this.performDoRegistration(action);
        break;
      case "cancelRegistration":
        this.performCancelRegistration(action);
        break;
    }
  }

  performAddAddress(action: Action) {
    console.log(action);

    let userAddress: UserAddress = {};
    this.registration.addresses.push(userAddress);
    this.addressForms.push(FormUtils.initFormGroup(this.userAddressFormConfig.formFields, this.registration, userAddress, FormDiaplyMode.EDIT))
  }

  performDoRegistration(action: Action) {
    // console.log(action);

    // console.log(this.registrationForm);
    // console.log(this.addressForms);

    this.registration = this.registrationForm.getRawValue();

    this.registration.addresses = new Array<UserAddress>();
    for (let addressForm of this.addressForms)  {
      this.registration.addresses.push(addressForm.getRawValue());
    }

    console.log(this.registration);
  }

  performCancelRegistration(action: Action) {
    console.log(action);

    this.router.navigate(['/auth/login']); 
  }

  ngOnDestroy(): void {
    if (this.routerSubscriber)  {
      this.routerSubscriber.unsubscribe();
    }
    if (this.authSubscription)  {
      this.authSubscription.unsubscribe();
    }
  }
}
