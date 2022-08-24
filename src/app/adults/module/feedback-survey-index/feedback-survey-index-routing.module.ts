import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedbackSurveyIndexPage } from './feedback-survey-index.page';

const routes: Routes = [
  {
    path: '',
    component: FeedbackSurveyIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedbackSurveyIndexPageRoutingModule {}
