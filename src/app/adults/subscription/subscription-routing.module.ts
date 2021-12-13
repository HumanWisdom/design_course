import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./subscription-s01-v01/subscription-s01-v01.module").then( m => m.SubscriptionS01V01PageModule)
  },
  {
    path: "subscription-s01-v01",
    loadChildren: () => import("./subscription-s01-v01/subscription-s01-v01.module").then( m => m.SubscriptionS01V01PageModule)
  },
  {
    path: "subscription-s01-v02",
    loadChildren: () => import("./subscription-s01-v02/subscription-s01-v02.module").then( m => m.SubscriptionS01V02PageModule)
  },
  {
    path: "subscription-s02-v01",
    loadChildren: () => import("./subscription-s02-v01/subscription-s02-v01.module").then( m => m.SubscriptionS02V01PageModule)
  },
  {
    path: "subscription-s02-v02",
    loadChildren: () => import("./subscription-s02-v02/subscription-s02-v02.module").then( m => m.SubscriptionS02V02PageModule)
  },
  {
    path: "subscription-s03-v01",
    loadChildren: () => import("./subscription-s03-v01/subscription-s03-v01.module").then( m => m.SubscriptionS03V01PageModule)
  },
  {
    path: "subscription-s03-v02",
    loadChildren: () => import("./subscription-s03-v02/subscription-s03-v02.module").then( m => m.SubscriptionS03V02PageModule)
  },
  {
    path: "subscription-s04-v01",
    loadChildren: () => import("./subscription-s04-v01/subscription-s04-v01.module").then( m => m.SubscriptionS04V01PageModule)
  },
  {
    path: "subscription-s04-v02",
    loadChildren: () => import("./subscription-s04-v02/subscription-s04-v02.module").then( m => m.SubscriptionS04V02PageModule)
  },
  {
    path: "subscription-s05-v02",
    loadChildren: () => import("./subscription-s05-v02/subscription-s05-v02.module").then( m => m.SubscriptionS05V02PageModule)
  },
  {
    path: "subscription-s06-v02",
    loadChildren: () => import("./subscription-s06-v02/subscription-s06-v02.module").then( m => m.SubscriptionS06V02PageModule)
  },
  {
    path: "subscription-s07-v02",
    loadChildren: () => import("./subscription-s07-v02/subscription-s07-v02.module").then( m => m.SubscriptionS07V02PageModule)
  },
  {
    path: "subscription-s08-v02",
    loadChildren: () => import("./subscription-s08-v02/subscription-s08-v02.module").then( m => m.SubscriptionS08V02PageModule)
  },
  {
    path: "subscription-s09-v02",
    loadChildren: () => import("./subscription-s09-v02/subscription-s09-v02.module").then( m => m.SubscriptionS09V02PageModule)
  },
  {
    path: 'subscription-s01-v03',
    loadChildren: () => import('./subscription-s01-v03/subscription-s01-v03.module').then( m => m.SubscriptionS01V03PageModule)
  },
  {
    path: 'subscription-s01-v04',
    loadChildren: () => import('./subscription-s01-v04/subscription-s01-v04.module').then( m => m.SubscriptionS01V04PageModule)
  },
  {
    path: 'subscription-s02-v03',
    loadChildren: () => import('./subscription-s02-v03/subscription-s02-v03.module').then( m => m.SubscriptionS02V03PageModule)
  },
  {
    path: 'subscription-s10-v02',
    loadChildren: () => import('./subscription-s10-v02/subscription-s10-v02.module').then( m => m.SubscriptionS10V02PageModule)
  },
  {
    path: 'subscription-s10-v03',
    loadChildren: () => import('./subscription-s10-v03/subscription-s10-v03.module').then( m => m.SubscriptionS10V03PageModule)
  },
  {
    path: 'activate-subscription-code',
    loadChildren: () => import('./activate-subscription-code/activate-subscription-code.module').then( m => m.ActivateSubscriptionCodePageModule)
  },
  {
    path: 'activate-subscription-msg',
    loadChildren: () => import('./activate-subscription-msg/activate-subscription-msg.module').then( m => m.ActivateSubscriptionMsgPageModule)
  },
  {
    path: 'activate-subscription-signup',
    loadChildren: () => import('./activate-subscription-signup/activate-subscription-signup.module').then( m => m.ActivateSubscriptionSignupPageModule)
  },
  {
    path: 'activate-subscription-guest',
    loadChildren: () => import('./activate-subscription-guest/activate-subscription-guest.module').then( m => m.ActivateSubscriptionGuestPageModule)
  },
  {
    path: 'activate-subscription-code-invalid',
    loadChildren: () => import('./activate-subscription-code-invalid/activate-subscription-code-invalid.module').then( m => m.ActivateSubscriptionCodeInvalidPageModule)
  },
  {
    path: 'activate-subscription-successful',
    loadChildren: () => import('./activate-subscription-successful/activate-subscription-successful.module').then( m => m.ActivateSubscriptionSuccessfulPageModule)
  },
  {
    path: 'activate-subscription-congratulations',
    loadChildren: () => import('./activate-subscription-congratulations/activate-subscription-congratulations.module').then( m => m.ActivateSubscriptionCongratulationsPageModule)
  },
  {
    path: 'activate-subscription-logged-in',
    loadChildren: () => import('./activate-subscription-logged-in/activate-subscription-logged-in.module').then( m => m.ActivateSubscriptionLoggedInPageModule)
  },
  {
    path: 'activate-subscription-unregistered',
    loadChildren: () => import('./activate-subscription-unregistered/activate-subscription-unregistered.module').then( m => m.ActivateSubscriptionUnregisteredPageModule)
  },
  {
    path: 'activate-subscription-registered',
    loadChildren: () => import('./activate-subscription-registered/activate-subscription-registered.module').then( m => m.ActivateSubscriptionRegisteredPageModule)
  },
  {
    path: 'activate-subscription-otp',
    loadChildren: () => import('./activate-subscription-otp/activate-subscription-otp.module').then( m => m.ActivateSubscriptionOtpPageModule)
  },
  {
    path: 'activate-subscription-logged-in-submit',
    loadChildren: () => import('./activate-subscription-logged-in-submit/activate-subscription-logged-in-submit.module').then( m => m.ActivateSubscriptionLoggedInSubmitPageModule)
  },
  {
    path: 'activate-subscription-logged-in-code',
    loadChildren: () => import('./activate-subscription-logged-in-code/activate-subscription-logged-in-code.module').then( m => m.ActivateSubscriptionLoggedInCodePageModule)
  },
  {
    path: 'activate-subscription-logged-in-code-valid',
    loadChildren: () => import('./activate-subscription-logged-in-code-valid/activate-subscription-logged-in-code-valid.module').then( m => m.ActivateSubscriptionLoggedInCodeValidPageModule)
  },
  {
    path: 'activate-subscription-logged-in-code-invalid',
    loadChildren: () => import('./activate-subscription-logged-in-code-invalid/activate-subscription-logged-in-code-invalid.module').then( m => m.ActivateSubscriptionLoggedInCodeInvalidPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionRoutingModule { }
