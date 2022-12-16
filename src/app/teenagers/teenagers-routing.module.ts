import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./introduction/introduction.module").then(m => m.IntroductionModule)  
  },
  {
    path: "introduction",
    loadChildren: () => import("./introduction/introduction.module").then(m => m.IntroductionModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeenagersRoutingModule { }
