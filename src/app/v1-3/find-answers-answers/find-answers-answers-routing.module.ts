import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindAnswersAnswersPage } from './find-answers-answers.page';

const routes: Routes = [
  {
    path: '',
    component: FindAnswersAnswersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindAnswersAnswersPageRoutingModule {}
