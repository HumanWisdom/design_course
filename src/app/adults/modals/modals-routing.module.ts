import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./daily-message-v01/daily-message-v01.module').then( m => m.DailyMessageV01PageModule)
  },
  {
    path: "daily-message-v01",
    loadChildren: () => import('./daily-message-v01/daily-message-v01.module').then( m => m.DailyMessageV01PageModule)
  },
  {
    path: "daily-message-v02",
    loadChildren: () => import('./daily-message-v02/daily-message-v02.module').then( m => m.DailyMessageV02PageModule)
  },
  {
    path: "free-limit",
    loadChildren: () => import('./free-limit/free-limit.module').then( m => m.FreeLimitPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalsRoutingModule { }
