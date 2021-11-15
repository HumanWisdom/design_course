import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./dashboard-v01/dashboard-v01.module").then( m => m.DashboardV01PageModule)
  },
  {
    path: "dashboard-v01",
    loadChildren: () => import("./dashboard-v01/dashboard-v01.module").then( m => m.DashboardV01PageModule)
  },
  {
    path: "dashboard-v02",
    loadChildren: () => import("./dashboard-v02/dashboard-v02.module").then( m => m.DashboardV02PageModule)
  },
  {
    path: "dashboard-resume",
    loadChildren: () => import("./dashboard-resume/dashboard-resume.module").then( m => m.DashboardResumePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
