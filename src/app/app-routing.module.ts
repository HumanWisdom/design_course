import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/adults/dashboard/dashboard-v02",
    pathMatch: "full"
  },
  {
    path: "adults",
    loadChildren: () => import("./adults/adults.module").then(m => m.AdultsModule)
  },
  {
    path: "webpage",
    loadChildren: () => import("./webpage/webpage.module").then(m => m.WebpageModule)  
  },
  {
    path: "teenagers",
    loadChildren: () => import("./teenagers/teenagers.module").then(m => m.TeenagersModule)  
  },
  {
    path: "v1_3",
    loadChildren: () => import("./v1-3/v1-3.module").then(m => m.V13Module)  
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'top'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


