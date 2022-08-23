import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: " ",
    loadChildren: () => import("./we-index/we-index.module").then(m => m.WeIndexPageModule)
  },
  {
    path: "we-index",
    loadChildren: () => import("./we-index/we-index.module").then(m => m.WeIndexPageModule)
  },
  {
    path: "we-exercise",
    loadChildren: () => import("./we-exercise/we-exercise.module").then(m => m.WeExercisePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WisdomExerciseRoutingModule { }
