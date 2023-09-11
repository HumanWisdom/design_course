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
  {
    path: 'redeem-activate-now',
    loadChildren: () => import('./redeem-activate-now/redeem-activate-now.module').then( m => m.RedeemActivateNowPageModule)
  },
  {
    path: 'gift-a-friend',
    loadChildren: () => import('./gift-a-friend/gift-a-friend.module').then( m => m.GiftAFriendPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionRoutingModule { }
