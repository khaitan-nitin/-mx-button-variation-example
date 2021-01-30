import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { ApplicationComponent } from './application.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicationComponent,

    children: [
      {
        path: 'example',
        loadChildren: () => import('./../@example/example.module')
          .then(m => m.ExampleModule),
        //        canActivate: [AuthGuard]
      },
      {
        path: 'setting',
        loadChildren: () => import('./setting/setting.module')
          .then(m => m.SettingModule),
        //        canActivate: [AuthGuard]
      },
      {
        path: 'log',
        loadChildren: () => import('./logging/logging.module')
          .then(m => m.LoggingModule),
        //        canActivate: [AuthGuard]
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module')
          .then(m => m.AuthModule),
        //        canActivate: [AuthGuard]
      },
      {
        path: 'communication',
        loadChildren: () => import('./communication/communication.module')
          .then(m => m.CommunicationModule),
        //        canActivate: [AuthGuard]
      },
      {
        path: 'message',
        loadChildren: () => import('./message/message.module')
          .then(m => m.MessageModule),
        //        canActivate: [AuthGuard]
      },
      {
        path: 'segment',
        loadChildren: () => import('./segment/segment.module')
          .then(m => m.SegmentModule),
        //        canActivate: [AuthGuard]
      },
      {
        path: 'marketing',
        loadChildren: () => import('./marketing/marketing.module')
          .then(m => m.MarketingModule),
        //        canActivate: [AuthGuard]
      },
      {
        path: 'rule',
        loadChildren: () => import('./rule/rule.module')
          .then(m => m.RuleModule),
        //        canActivate: [AuthGuard]
      },
      // {
      //   path: '**',
      //   component: NotFoundComponent,
      //   //canActivate: [AuthGuard]
      // }
    ],
  },
  { path: '', redirectTo: 'example/button', pathMatch: 'full' },
  { path: '**', redirectTo: 'example/button' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationRoutingModule {

}
