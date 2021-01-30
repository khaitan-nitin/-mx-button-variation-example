import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ProfileComponent } from './component/profile/profile.component';

const authRoutes: Routes = [{
    path: '',
    component: AuthPageComponent,
    children: [
        {
            path: 'login',
            component: LoginComponent,
        },
        {
            path: 'registration',
            component: RegistrationComponent,
        },
        {
            path: 'registration/:id',
            component: RegistrationComponent,
        },
        {
            path: 'profile',
            component: ProfileComponent,
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(authRoutes)],
    exports: [RouterModule],
})
export class AuthRoutingModule { }