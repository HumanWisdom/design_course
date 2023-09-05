import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./index/index.module").then(m => m.IndexPageModule)
  },
  {
    path: "index",
    loadChildren: () => import("./index/index.module").then(m => m.IndexPageModule)
  },
  {
    path: "proceed-to-payment",
    loadChildren: () => import("./proceed-to-payment/proceed-to-payment.module").then(m => m.ProceedToPaymentPageModule)
  },
  {
    path: "payment",
    loadChildren: () => import("./payment/payment.module").then(m => m.PaymentPageModule)
  },
  {
    path: "payment-failed",
    loadChildren: () => import("./payment-failed/payment-failed.module").then(m => m.PaymentFailedPageModule)
  },
  {
    path: "free-trial",
    loadChildren: () => import("./free-trial/free-trial.module").then(m => m.FreeTrialPageModule)
  },
  {
    path: 'start-your-free-trial',
    loadChildren: () => import('./start-your-free-trial/start-your-free-trial.module').then( m => m.StartYourFreeTrialPageModule)
  },
  {
    path: 'try-free-and-subscribe',
    loadChildren: () => import('./try-free-and-subscribe/try-free-and-subscribe.module').then( m => m.TryFreeAndSubscribePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionRoutingModule { }
