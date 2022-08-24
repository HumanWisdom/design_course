import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./dashboard-main-v1/dashboard-main-v1.module').then( m => m.DashboardMainV1PageModule)
  },
  {
    path: 'dashboard-main',
    loadChildren: () => import('./dashboard-main/dashboard-main.module').then( m => m.DashboardMainPageModule)
  },
  {
    path: 'dashboard-module',
    loadChildren: () => import('./dashboard-module/dashboard-module.module').then( m => m.DashboardModulePageModule)
  },
  {
    path: 'dashboard-main-v1',
    loadChildren: () => import('./dashboard-main-v1/dashboard-main-v1.module').then( m => m.DashboardMainV1PageModule)
  },
  {
    path: 'dashboard-module-transcript',
    loadChildren: () => import('./dashboard-module-transcript/dashboard-module-transcript.module').then( m => m.DashboardModuleTranscriptPageModule)
  },
  {
    path: 'dashboard-we',
    loadChildren: () => import('./dashboard-we/dashboard-we.module').then( m => m.DashboardWePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
