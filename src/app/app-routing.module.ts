import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: 'application',
    loadChildren: () => import('./application/application.module')
      .then(m => m.ApplicationModule),
  }, 
  {
    path: 'auth',
    loadChildren: () => import('./application/auth/auth.module')
      .then(m => m.AuthModule)
  },
  // { path: '', redirectTo: 'application', pathMatch: 'full' },
  // { path: '**', redirectTo: 'application' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
