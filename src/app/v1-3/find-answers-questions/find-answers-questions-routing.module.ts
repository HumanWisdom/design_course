import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindAnswersQuestionsPage } from './find-answers-questions.page';

const routes: Routes = [
  {
    path: '',
    component: FindAnswersQuestionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindAnswersQuestionsPageRoutingModule {}
