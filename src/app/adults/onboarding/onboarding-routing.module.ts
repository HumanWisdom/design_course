import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./login-signup/login-signup.module").then( m => m.LoginSignupPageModule)
  },
  {
    path: "change-password",
    loadChildren: () => import("./change-password/change-password.module").then( m => m.ChangePasswordPageModule)
  },
  {
    path: "forget-password",
    loadChildren: () => import("./forget-password/forget-password.module").then( m => m.ForgetPasswordPageModule)
  },
  {
    path: "login-signup",
    loadChildren: () => import("./login-signup/login-signup.module").then( m => m.LoginSignupPageModule)
  },
  {
    path: "set-password",
    loadChildren: () => import("./set-password/set-password.module").then( m => m.SetPasswordPageModule)
  },
  {
    path: "splash",
    loadChildren: () => import("./splash/splash.module").then( m => m.SplashPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }
