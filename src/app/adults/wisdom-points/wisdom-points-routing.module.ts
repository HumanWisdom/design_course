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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WisdomPointsRoutingModule { }
