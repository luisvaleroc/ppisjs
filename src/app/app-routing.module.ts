import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//componentes

import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { StoresComponent } from './components/stores/stores.component';
import { AuthGuard } from './auth.guard';
 
const routes: Routes = [
  {
    path: '',
    redirectTo: '/signin',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'stores',
    component: StoresComponent,
    canActivate: [AuthGuard]
  }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }