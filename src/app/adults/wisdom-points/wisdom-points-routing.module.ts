import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./wisdom-points-history/wisdom-points-history.module").then(m => m.WisdomPointsHistoryPageModule)  
  },
  {
    path: "wisdom-points-history",
    loadChildren: () => import("./wisdom-points-history/wisdom-points-history.module").then(m => m.WisdomPointsHistoryPageModule)
  },
  {
    path: 'wisdom-points-index',
    loadChildren: () => import('./wisdom-points-index/wisdom-points-index.module').then( m => m.WisdomPointsIndexPageModule)
  },
  {
    path: 'wisdom-points-redeem',
    loadChildren: () => import('./wisdom-points-redeem/wisdom-points-redeem.module').then( m => m.WisdomPointsRedeemPageModule)
  },
  {
    path: 'wisdom-points-redeemed',
    loadChildren: () => import('./wisdom-points-redeemed/wisdom-points-redeemed.module').then( m => m.WisdomPointsRedeemedPageModule)
  },
  {
    path: 'wisdom-points-reward-redeem',
    loadChildren: () => import('./wisdom-points-reward-redeem/wisdom-points-reward-redeem.module').then( m => m.WisdomPointsRewardRedeemPageModule)
  },
  {
    path: 'wisdom-points-reward-redeemed',
    loadChildren: () => import('./wisdom-points-reward-redeemed/wisdom-points-reward-redeemed.module').then( m => m.WisdomPointsRewardRedeemedPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WisdomPointsRoutingModule { }
