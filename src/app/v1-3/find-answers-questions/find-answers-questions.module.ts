import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindAnswersQuestionsPageRoutingModule } from './find-answers-questions-routing.module';

import { FindAnswersQuestionsPage } from './find-answers-questions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindAnswersQuestionsPageRoutingModule
  ],
  declarations: [FindAnswersQuestionsPage]
})
export class FindAnswersQuestionsPageModule {}
