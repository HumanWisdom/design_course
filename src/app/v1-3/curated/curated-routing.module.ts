import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./overcome-stress-and-anxiety/overcome-stress-and-anxiety.module").then(m => m.OvercomeStressAndAnxietyPageModule)
  },
  {
    path: "overcome-stress-and-anxiety",
    loadChildren: () => import("./overcome-stress-and-anxiety/overcome-stress-and-anxiety.module").then(m => m.OvercomeStressAndAnxietyPageModule)    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuratedRoutingModule { }
