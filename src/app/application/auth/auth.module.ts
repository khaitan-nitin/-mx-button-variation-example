import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { LoginComponent } from './component/login/login.component';
import { AuthPageComponent } from './auth.component';
import { ProfileComponent } from './component/profile/profile.component';

import { AuthRoutingModule } from './auth-routing.module';
import { RegistrationComponent } from './component/registration/registration.component';
import { AdminBuilderModule } from 'ngx-material-widget';
import { AuthService } from './service';

// import { FormModule } from 'ngx-material-widget/lib/form/form.module';
// import { ButtonModule } from 'ngx-material-widget/lib/button/button.module';
// import { CrudModule } from 'ngx-material-widget/lib/crud/crud.module';

@NgModule({
  declarations: [
    AuthPageComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent
  ],
  imports: [ 
    CommonModule,
    MatCardModule,
    AuthRoutingModule,
    // FormModule,
    // ButtonModule,
    // CrudModule
    AdminBuilderModule
  ],
  exports: [
    LoginComponent
  // ],
  // providers: [
  //   AuthService
  ]
})
export class AuthModule { }
