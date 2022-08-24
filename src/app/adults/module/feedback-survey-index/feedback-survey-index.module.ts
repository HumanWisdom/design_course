import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedbackSurveyIndexPageRoutingModule } from './feedback-survey-index-routing.module';

import { FeedbackSurveyIndexPage } from './feedback-survey-index.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedbackSurveyIndexPageRoutingModule,
    SharedModule
  ],
  declarations: [FeedbackSurveyIndexPage]
})
export class FeedbackSurveyIndexPageModule {}
