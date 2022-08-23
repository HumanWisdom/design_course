import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeExercisePage } from './we-exercise.page';

const routes: Routes = [
  {
    path: '',
    component: WeExercisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeExercisePageRoutingModule {}
