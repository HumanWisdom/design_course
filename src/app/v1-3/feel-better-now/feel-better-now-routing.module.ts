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
    path: "stress",
    loadChildren: () => import("./stress/stress.module").then(m => m.StressPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeelBetterNowRoutingModule { }
