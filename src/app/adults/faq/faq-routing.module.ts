import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./faq-index/faq-index.module").then(m => m.FaqIndexPageModule)  
  },
  {
    path: "faq-index",
    loadChildren: () => import("./faq-index/faq-index.module").then(m => m.FaqIndexPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqRoutingModule { }
