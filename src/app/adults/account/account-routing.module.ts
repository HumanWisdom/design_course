import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./login-signup/login-signup.module").then(m => m.LoginSignupPageModule)  
  },
  {
    path: "login-signup",
    loadChildren: () => import("./login-signup/login-signup.module").then(m => m.LoginSignupPageModule)  
  },
  {
    path: 'signup-affiliate',
    loadChildren: () => import('./signup-affiliate/signup-affiliate.module').then( m => m.SignupAffiliatePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
